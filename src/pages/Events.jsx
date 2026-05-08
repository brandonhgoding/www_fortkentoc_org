import { useState, useCallback, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import PageHeader from '../components/layout/PageHeader';
import PageMeta from '../components/PageMeta';
import Button from '../components/ui/Button';
import { sanitizeEventDescription } from '../utils/sanitizeHtml';
import './Events.css';

const GOOGLE_CALENDAR_ID = import.meta.env.VITE_GOOGLE_CALENDAR_ID;
const GOOGLE_CALENDAR_API_KEY = import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY;
const EVENT_COLOR = '#b93830'; // var(--color-brick)

const DATE_FORMAT = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'America/New_York',
});

const TIME_FORMAT = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  minute: '2-digit',
  timeZone: 'America/New_York',
});

function formatEventWhen(event) {
  if (!event?.start) return '';
  const start = event.start;
  const end = event.end;
  if (event.allDay) {
    if (!end) return DATE_FORMAT.format(start);
    // FullCalendar all-day end is exclusive (next day at 00:00). Subtract a
    // day for display so a one-day event reads as that single date.
    const inclusiveEnd = new Date(end.getTime() - 24 * 60 * 60 * 1000);
    const sameDay = inclusiveEnd.toDateString() === start.toDateString();
    if (sameDay) return DATE_FORMAT.format(start);
    return `${DATE_FORMAT.format(start)} – ${DATE_FORMAT.format(inclusiveEnd)}`;
  }
  if (!end) return `${DATE_FORMAT.format(start)} · ${TIME_FORMAT.format(start)}`;
  const sameDay = start.toDateString() === end.toDateString();
  if (sameDay) {
    return `${DATE_FORMAT.format(start)} · ${TIME_FORMAT.format(start)} – ${TIME_FORMAT.format(end)}`;
  }
  return `${DATE_FORMAT.format(start)} ${TIME_FORMAT.format(start)} – ${DATE_FORMAT.format(end)} ${TIME_FORMAT.format(end)}`;
}

function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loadError, setLoadError] = useState(null);

  const handleEventClick = useCallback((clickInfo) => {
    clickInfo.jsEvent.preventDefault();
    setSelectedEvent(clickInfo.event);
  }, []);

  const handleEventSourceFailure = useCallback((error) => {
    console.error('Google Calendar event source failed:', error);
    setLoadError("Events couldn't load right now. Please check back soon.");
  }, []);

  const handleEventSourceSuccess = useCallback(() => {
    setLoadError(null);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedEvent(null);
  }, []);

  useEffect(() => {
    if (!selectedEvent) return;
    const onKey = (e) => {
      if (e.key === 'Escape') handleCloseModal();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedEvent, handleCloseModal]);

  const description = selectedEvent?.extendedProps?.description;
  const sanitizedDescription = description ? sanitizeEventDescription(description) : '';
  const attachments = selectedEvent?.extendedProps?.attachments ?? [];
  const location = selectedEvent?.extendedProps?.location;

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
          {loadError && (
            <p className="events-page__error" role="alert">
              {loadError}
            </p>
          )}
          <div className="events-page__calendar">
            <FullCalendar
              plugins={[dayGridPlugin, googleCalendarPlugin]}
              googleCalendarApiKey={GOOGLE_CALENDAR_API_KEY}
              initialView="dayGridMonth"
              events={{
                googleCalendarId: GOOGLE_CALENDAR_ID,
                color: EVENT_COLOR,
                success: handleEventSourceSuccess,
                failure: handleEventSourceFailure,
              }}
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
        </div>
      </div>

      {selectedEvent && (
        <div
          className="modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleCloseModal();
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="event-modal__title"
        >
          <div className="modal-content event-modal">
            <button
              type="button"
              className="modal-close-btn"
              onClick={handleCloseModal}
              aria-label="Close modal"
            >
              <svg
                className="icon-close"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="event-modal__header">
              <h2 id="event-modal__title" className="event-modal__title">
                {selectedEvent.title}
              </h2>
              <p className="event-modal__meta">
                <span>{formatEventWhen(selectedEvent)}</span>
                {location && <span> · {location}</span>}
              </p>
            </div>
            {sanitizedDescription && (
              <div
                className="event-modal__body"
                dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
              />
            )}
            {attachments.length > 0 && (
              <div className="event-modal__attachments">
                <h3 className="event-modal__attachments-title">Documents</h3>
                <ul className="event-modal__attachments-list">
                  {attachments.map((attachment) => (
                    <li key={attachment.fileId ?? attachment.fileUrl} className="event-modal__attachment">
                      <a
                        href={attachment.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {attachment.mimeType === 'application/pdf' && (
                          <span className="event-modal__attachment-icon" aria-hidden="true">
                            PDF
                          </span>
                        )}
                        <span>{attachment.title || attachment.fileUrl}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="event-modal__footer">
              {selectedEvent.url && (
                <Button
                  variant="ghost"
                  href={selectedEvent.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Calendar
                </Button>
              )}
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Events;
