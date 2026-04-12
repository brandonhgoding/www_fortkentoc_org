import { useState, useCallback, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import PageHeader from '../components/layout/PageHeader';
import Eyebrow from '../components/ui/Eyebrow';
import EventCard from '../components/ui/EventCard';
import PageMeta from '../components/PageMeta';
import {
  fetchEvents,
  fetchCalendarSessions,
  transformToCalendarEvents,
  groupEventsForUpcoming,
} from '../services/api';
import './Events.css';

/**
 * Derive a 3-letter month abbreviation and 2-digit day from a YYYY-MM-DD string.
 */
function deriveDateParts(rawDate) {
  if (!rawDate) return { month: '', day: '' };
  const [, mm, dd] = rawDate.split('-');
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const monthIdx = parseInt(mm, 10) - 1;
  return {
    month: months[monthIdx] ?? '',
    day: dd ?? '',
  };
}

function Events() {
  const [view, setView] = useState('list');

  // List view state
  const [listEvents, setListEvents] = useState([]);
  const [listLoading, setListLoading] = useState(true);
  const [listError, setListError] = useState(null);

  // Calendar click-modal state
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Load list view events on mount
  useEffect(() => {
    async function loadListEvents() {
      try {
        setListLoading(true);
        setListError(null);
        const data = await fetchEvents({ includePast: false });
        const grouped = groupEventsForUpcoming(data);
        grouped.sort((a, b) => {
          const dateA = a.dates[0]?.rawDate || '';
          const dateB = b.dates[0]?.rawDate || '';
          return dateA.localeCompare(dateB);
        });
        setListEvents(grouped);
      } catch (err) {
        console.error('Failed to fetch events:', err);
        setListError('Failed to load events. Please try again later.');
      } finally {
        setListLoading(false);
      }
    }

    loadListEvents();
  }, []);

  // Calendar: fetch events for the displayed date range
  const handleCalendarEvents = useCallback(async (info, successCallback) => {
    const start = info.startStr.split('T')[0];
    const end = info.endStr.split('T')[0];
    let apiEvents = [];
    try {
      const sessions = await fetchCalendarSessions({ start, end });
      apiEvents = transformToCalendarEvents(sessions);
    } catch (err) {
      console.error('Failed to fetch calendar events:', err);
    }
    successCallback(apiEvents);
  }, []);

  const handleEventClick = useCallback((clickInfo) => {
    setSelectedEvent(clickInfo.event);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedEvent(null);
  }, []);

  return (
    <div className="events-page">
      <PageMeta
        title="Events"
        description="Upcoming races, community events, and activities at Fort Kent Outdoor Center."
        path="/events"
      />
      <PageHeader
        crumb={[{ label: 'Events' }]}
        title={
          <>
            Upcoming <em>events.</em>
          </>
        }
        lede="Races, fundraisers, programs, and community workdays. Members and visitors are welcome at everything on this calendar."
      />

      <div style={{ padding: 'var(--space-4xl) 0', background: 'var(--color-birch)' }}>
        <div
          style={{
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '0 var(--space-md)',
          }}
        >
          {/* View toggle */}
          <div className="events-page__toggle">
            <button
              type="button"
              className={view === 'list' ? 'on' : ''}
              onClick={() => setView('list')}
            >
              List view
            </button>
            <button
              type="button"
              className={view === 'calendar' ? 'on' : ''}
              onClick={() => setView('calendar')}
            >
              Calendar view
            </button>
          </div>

          {/* List view */}
          {view === 'list' && (
            <>
              <Eyebrow>Upcoming</Eyebrow>
              {listError && (
                <p
                  style={{
                    color: 'var(--color-brick)',
                    fontSize: 'var(--text-sm)',
                    marginBottom: 'var(--space-md)',
                  }}
                >
                  {listError}
                </p>
              )}
              {listLoading && (
                <p style={{ color: 'var(--color-ink-soft)', fontSize: 'var(--text-sm)' }}>
                  Loading events…
                </p>
              )}
              {!listLoading && listEvents.length === 0 && !listError && (
                <p style={{ color: 'var(--color-ink-soft)', fontSize: 'var(--text-sm)' }}>
                  No upcoming events posted. Check back soon.
                </p>
              )}
              {!listLoading && listEvents.length > 0 && (
                <div className="events-page__list">
                  {listEvents.map((event) => {
                    const rawDate = event.dates[0]?.rawDate || '';
                    const { month, day } = deriveDateParts(rawDate);
                    return (
                      <EventCard
                        key={event.id}
                        month={month}
                        day={day}
                        title={event.title}
                        description={event.description}
                      />
                    );
                  })}
                </div>
              )}
            </>
          )}

          {/* Calendar view */}
          {view === 'calendar' && (
            <div className="events-page__calendar">
              <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={handleCalendarEvents}
                eventClick={handleEventClick}
                headerToolbar={{
                  left: 'title',
                  center: '',
                  right: 'today prev,next',
                }}
                height="auto"
                eventDisplay="block"
                dayMaxEvents={3}
                eventClassNames="calendar-event-clickable"
              />
            </div>
          )}
        </div>
      </div>

      {/* Event detail modal (calendar view) */}
      {selectedEvent && (
        <div
          className="modal-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleCloseModal();
          }}
          onKeyDown={(e) => {
            if (e.key === 'Escape') handleCloseModal();
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="event-modal-title"
        >
          <div className="modal-content event-modal">
            <button
              type="button"
              className="modal-close"
              onClick={handleCloseModal}
              aria-label="Close modal"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="event-modal-header">
              {selectedEvent.extendedProps?.categoryName && (
                <span className="event-category-badge">
                  {selectedEvent.extendedProps.categoryName}
                </span>
              )}
              <h2 id="event-modal-title" className="event-modal-title">
                {selectedEvent.title}
              </h2>
            </div>
            {selectedEvent.extendedProps?.description && (
              <div className="event-modal-body">
                <p>{selectedEvent.extendedProps.description}</p>
              </div>
            )}
            <div className="event-modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Events;
