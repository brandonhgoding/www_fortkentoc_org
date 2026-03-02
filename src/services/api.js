/**
 * API service for fetching data from the Fort Kent Outdoor Center backend.
 */

const API_URL = import.meta.env.VITE_API_URL || 'https://carl.fortkentoc.org/api';

/**
 * Category color mapping for calendar events.
 * Colors are based on the FKOC design system.
 */
const CATEGORY_COLORS = {
  'ski-lessons': '#2B7DB9', // Accent Blue
  'snowboard-lessons': '#22c55e', // Green
  'cross-country-skiing': '#1E3A5F', // Navy
  'races-competitions': '#8B2332', // Primary Maroon
  'youth-programs': '#22c55e', // Green
  'adult-programs': '#F7941D', // Gold
  'special-events': '#1E3A5F', // Navy
  default: '#4A6A8B', // Info color
};

/**
 * Get color for a category slug.
 * @param {string} categorySlug - The category slug
 * @returns {string} - Hex color code
 */
export function getCategoryColor(categorySlug) {
  return CATEGORY_COLORS[categorySlug] || CATEGORY_COLORS.default;
}

/**
 * Fetch events from the API.
 * @param {Object} options - Query parameters
 * @param {string} options.start - Start date (YYYY-MM-DD)
 * @param {string} options.end - End date (YYYY-MM-DD)
 * @param {string} options.category - Category slug filter
 * @param {boolean} options.includePast - Include past events
 * @returns {Promise<Array>} - Array of events with nested sessions
 */
export async function fetchEvents({ start, end, category, includePast = true } = {}) {
  const params = new URLSearchParams();

  if (start) params.append('start', start);
  if (end) params.append('end', end);
  if (category) params.append('category', category);
  if (includePast) params.append('include_past', 'true');

  const url = `${API_URL}/events/${params.toString() ? '?' + params.toString() : ''}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch events: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

/**
 * Fetch calendar sessions from the API.
 * Returns flat session data optimized for FullCalendar.
 * @param {Object} options - Query parameters
 * @param {string} options.start - Start date (YYYY-MM-DD)
 * @param {string} options.end - End date (YYYY-MM-DD)
 * @param {string} options.category - Category slug filter
 * @returns {Promise<Array>} - Array of calendar session objects
 */
export async function fetchCalendarSessions({ start, end, category } = {}) {
  const params = new URLSearchParams();

  if (start) params.append('start', start);
  if (end) params.append('end', end);
  if (category) params.append('category', category);

  const url = `${API_URL}/events/calendar/${params.toString() ? '?' + params.toString() : ''}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch calendar sessions: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

/**
 * Transform API calendar sessions to FullCalendar event format.
 * @param {Array} sessions - Array of session objects from API
 * @returns {Array} - Array of FullCalendar event objects
 */
export function transformToCalendarEvents(sessions) {
  return sessions.map((session) => ({
    id: `session-${session.session_id}`,
    title: session.title,
    start: session.start,
    end: session.end,
    color: getCategoryColor(session.category_slug),
    extendedProps: {
      eventId: session.event_id,
      description: session.description,
      categoryName: session.category_name,
      categorySlug: session.category_slug,
    },
  }));
}

/**
 * Fetch event categories from the API.
 * @returns {Promise<Array>} - Array of category objects
 */
export async function fetchCategories() {
  const url = `${API_URL}/categories/`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch categories: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

/**
 * Group events by their title for the Upcoming Events view.
 * Combines sessions from the same event into a single card.
 * @param {Array} events - Array of event objects with nested sessions
 * @returns {Array} - Array of grouped event objects
 */
export function groupEventsForUpcoming(events) {
  return events.map((event) => ({
    id: event.id,
    title: event.title,
    description: event.description,
    category: event.category,
    flyerUrl: event.flyer_url,
    dates: event.sessions.map((session) => ({
      date: formatDate(session.date),
      time: formatTimeRange(session.start_time, session.end_time),
      rawDate: session.date,
    })),
  }));
}

/**
 * Format a date string for display.
 * @param {string} dateStr - Date string (YYYY-MM-DD)
 * @returns {string} - Formatted date (e.g., "January 15, 2026")
 */
function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Format a time range for display.
 * @param {string} startTime - Start time (HH:MM:SS)
 * @param {string} endTime - End time (HH:MM:SS) or null
 * @returns {string} - Formatted time range
 */
function formatTimeRange(startTime, endTime) {
  const formatTime = (timeStr) => {
    const [hours, minutes] = timeStr.split(':');
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes));
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  const start = formatTime(startTime);

  if (endTime) {
    const end = formatTime(endTime);
    return `${start} - ${end}`;
  }

  return start;
}
