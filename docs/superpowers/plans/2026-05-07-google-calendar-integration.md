# Google Calendar Events Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the API-driven events flow with a single shared Google Calendar as the source of truth for `/events`, exposing event description and PDF attachments via the existing click modal. Drop the homepage upcoming-events section, the `/events` list view, the `Event` JSON-LD, and all events code in the API service.

**Architecture:** A single FullCalendar instance on `/events` registers a Google Calendar event source via `@fullcalendar/google-calendar`. Click handler reads `extendedProps.description` (sanitized HTML via DOMPurify) and `extendedProps.attachments` and renders them in the existing modal shell. No React state holds events; FullCalendar owns them.

**Tech Stack:** React 19 + Vite 7, react-router-dom v7, FullCalendar 6 (`@fullcalendar/react`, `@fullcalendar/daygrid`, `@fullcalendar/google-calendar`), DOMPurify for HTML sanitization, ESLint for lint. No test runner exists (per `CLAUDE.md`); verification is `npm run lint`, `npm run build`, and manual browser check via `npm run dev`.

**Spec:** `docs/superpowers/specs/2026-05-07-google-calendar-integration-design.md`

---

## File Structure

**New files**
- `src/utils/sanitizeHtml.js` — single-purpose HTML sanitizer for Google Calendar event descriptions. Holds the DOMPurify configuration and the `afterSanitizeAttributes` hook that forces `target="_blank" rel="noopener noreferrer"` on links. One named export: `sanitizeEventDescription(html)`.

**Modified files**
- `src/pages/Events.jsx` — replaced wholesale: PageMeta + PageHeader + Google-Calendar-driven FullCalendar + click modal. No view toggle, no list view, no JSON-LD, no API imports.
- `src/pages/Events.css` — drop toggle/list rules, add error-notice + modal-meta + modal-attachments rules.
- `src/pages/Home.jsx` — strip the upcoming-events fetch + state and the conditional cards block. Keep the "Community calendar" section header/lede/CTA.
- `src/services/api.js` — remove every events-related export (`CATEGORY_COLORS`, `getCategoryColor`, `fetchEvents`, `fetchCalendarSessions`, `transformToCalendarEvents`, `groupEventsForUpcoming`, `fetchCategories`, `formatDate`, `formatTimeRange`). Delete the file if empty.
- `.env.example` — add `VITE_GOOGLE_CALENDAR_ID` and `VITE_GOOGLE_CALENDAR_API_KEY`.
- `CLAUDE.md` — update "Data sources", "Events page", and "Environment" sections.
- `package.json` / `package-lock.json` — add `@fullcalendar/google-calendar` and `dompurify`.

**Deleted files**
- `src/components/ui/EventCard.jsx` and `src/components/ui/EventCard.css` — both become unused after Home.jsx and Events.jsx are updated.

**Untouched**
- `src/services/weather.js`, `src/components/Layout.{jsx,css}`, `src/main.jsx`, all UI primitives except `EventCard`, all other pages, all public assets.

---

## Task 1: Install dependencies and add env vars

**Files:**
- Modify: `package.json`, `package-lock.json`
- Modify: `.env.example`

- [ ] **Step 1: Install runtime dependencies**

Run:
```bash
npm install --save @fullcalendar/google-calendar@^6.1.20 dompurify@^3
```

Expected: `package.json` and `package-lock.json` updated. No errors.

- [ ] **Step 2: Add the new env vars to `.env.example`**

Replace the entire contents of `.env.example` with:

```bash
# API Configuration
VITE_API_URL=http://localhost:8000/api

# Google Calendar
# Calendar ID looks like xxxxx@group.calendar.google.com.
# Create the API key in Google Cloud (Calendar API only, restricted to your
# production HTTP referrer + http://localhost:5173/* for dev).
VITE_GOOGLE_CALENDAR_ID=
VITE_GOOGLE_CALENDAR_API_KEY=

# Stripe
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
```

- [ ] **Step 3: Verify lint and build still work**

Run:
```bash
npm run lint
npm run build
```

Expected: both succeed. The build still works because nothing imports the new packages yet.

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json .env.example
git commit -m "chore(events): add @fullcalendar/google-calendar and dompurify deps"
```

---

## Task 2: Create the HTML sanitizer utility

**Files:**
- Create: `src/utils/sanitizeHtml.js`

- [ ] **Step 1: Create `src/utils/sanitizeHtml.js`**

The directory may not exist yet. Create it (`mkdir -p src/utils`) before writing the file.

Write `src/utils/sanitizeHtml.js` with these exact contents:

```javascript
import DOMPurify from 'dompurify';

const purify = DOMPurify(window);

purify.addHook('afterSanitizeAttributes', (node) => {
  if (node.tagName === 'A') {
    node.setAttribute('target', '_blank');
    node.setAttribute('rel', 'noopener noreferrer');
  }
});

const ALLOWED_TAGS = ['a', 'b', 'i', 'u', 'br', 'p', 'ul', 'ol', 'li', 'strong', 'em'];
const ALLOWED_ATTR = ['href', 'target', 'rel'];

export function sanitizeEventDescription(html) {
  if (!html) return '';
  return purify.sanitize(html, { ALLOWED_TAGS, ALLOWED_ATTR });
}
```

- [ ] **Step 2: Verify lint passes**

Run:
```bash
npm run lint
```

Expected: pass.

- [ ] **Step 3: Verify build succeeds**

Run:
```bash
npm run build
```

Expected: pass. The new file isn't imported anywhere yet, so this is just a sanity check that the import statement and module resolution work.

- [ ] **Step 4: Commit**

```bash
git add src/utils/sanitizeHtml.js
git commit -m "feat(events): add DOMPurify-backed HTML sanitizer for event descriptions"
```

---

## Task 3: Strip the homepage of upcoming-events fetching

**Files:**
- Modify: `src/pages/Home.jsx`

The "Community calendar" section header, lede, and "See full calendar →" CTA stay. Only the fetch + state + conditional cards block goes.

- [ ] **Step 1: Remove unused imports and helpers in `Home.jsx`**

In `src/pages/Home.jsx`:

Replace the import block at the top:
```javascript
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import heroImage from '../assets/images/about/mass-start-race.jpg';
import discGolfBasket from '../assets/images/home/basketinwoods.jpeg';
import Hero from '../components/Hero';
// import TrailStatusStrip from '../components/TrailStatusStrip';
import Section from '../components/ui/Section';
import Eyebrow from '../components/ui/Eyebrow';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import EventCard from '../components/ui/EventCard';
import TopoDivider from '../components/ui/TopoDivider';
import PageMeta from '../components/PageMeta';
import { fetchEvents } from '../services/api';
import { DONATE_URL, FACEBOOK_URL } from '../lib/urls';
import './Home.css';
```

with:
```javascript
import { Helmet } from 'react-helmet-async';
import heroImage from '../assets/images/about/mass-start-race.jpg';
import discGolfBasket from '../assets/images/home/basketinwoods.jpeg';
import Hero from '../components/Hero';
// import TrailStatusStrip from '../components/TrailStatusStrip';
import Section from '../components/ui/Section';
import Eyebrow from '../components/ui/Eyebrow';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import TopoDivider from '../components/ui/TopoDivider';
import PageMeta from '../components/PageMeta';
import { DONATE_URL, FACEBOOK_URL } from '../lib/urls';
import './Home.css';
```

Then delete the `MONTH_ABBREVIATIONS` constant (currently lines 46-59) and the `getUpcomingDate` function (currently lines 61-70) entirely.

- [ ] **Step 2: Remove the upcoming-events state and effect**

Inside the `Home` function (currently around lines 73-93), delete these lines:

```javascript
const [upcomingEvents, setUpcomingEvents] = useState([]);

useEffect(() => {
  let cancelled = false;
  fetchEvents({ includePast: false })
    .then((data) => {
      if (cancelled) return;
      const sorted = data
        .map((event) => ({ event, when: getUpcomingDate(event) }))
        .filter(({ when }) => when !== null)
        .sort((a, b) => a.when - b.when)
        .slice(0, 3);
      setUpcomingEvents(sorted);
    })
    .catch((err) => {
      console.error('Failed to fetch upcoming events:', err);
    });
  return () => {
    cancelled = true;
  };
}, []);
```

- [ ] **Step 3: Remove the conditional cards block from the "Community & Events" section**

In the JSX for section 05 (currently around lines 362-375), delete this block in its entirety:

```javascript
{upcomingEvents.length > 0 && (
  <div className="home-events">
    {upcomingEvents.map(({ event, when }) => (
      <EventCard
        key={event.id}
        onDark
        month={MONTH_ABBREVIATIONS[when.getMonth()]}
        day={String(when.getDate()).padStart(2, '0')}
        title={event.title}
        description={event.description}
      />
    ))}
  </div>
)}
```

The surrounding structure (`<Section variant="dark">`, eyebrow, h2, lede, "See full calendar →" Button) stays exactly as it was.

- [ ] **Step 4: Verify lint and build**

Run:
```bash
npm run lint
npm run build
```

Expected: both succeed. ESLint may flag unused `MONTH_ABBREVIATIONS` if Step 1's deletion was missed; the constant should be gone.

- [ ] **Step 5: Commit**

```bash
git add src/pages/Home.jsx
git commit -m "refactor(home): drop upcoming-events fetch and cards section"
```

---

## Task 4: Replace `Events.jsx` with the calendar-only Google version

**Files:**
- Modify: `src/pages/Events.jsx`

This task replaces the file wholesale. After this commit the page is calendar-only, wired to Google Calendar; the env vars must be set for events to actually render.

- [ ] **Step 1: Replace `src/pages/Events.jsx` with the new implementation**

Overwrite `src/pages/Events.jsx` with the following exact contents:

```javascript
import { useState, useCallback } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import PageHeader from '../components/layout/PageHeader';
import PageMeta from '../components/PageMeta';
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
            <p className="events-page__error" role="status">
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
              <h2 id="event-modal-title" className="event-modal-title">
                {selectedEvent.title}
              </h2>
              <p className="event-modal__meta">
                <span>{formatEventWhen(selectedEvent)}</span>
                {location && <span> · {location}</span>}
              </p>
            </div>
            {sanitizedDescription && (
              <div
                className="event-modal-body"
                // eslint-disable-next-line react/no-danger
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
            <div className="event-modal-footer">
              {selectedEvent.url && (
                <a
                  className="btn btn-ghost"
                  href={selectedEvent.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Calendar
                </a>
              )}
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
```

Key things to notice while writing this file:
- The `events` source uses the FullCalendar event-source `success`/`failure` callbacks. `failure` is the per-source equivalent of `eventSourceFailure` — both names appear in the docs; the source-level callback is preferred when registering a single source inline, which is what we're doing.
- `selectedEvent.url` comes from the plugin (it sets it from Google's `htmlLink`). We call `preventDefault()` in `handleEventClick` so the default navigation is suppressed.
- The category badge from the previous modal is gone (no categories).
- `Helmet` from `react-helmet-async` is no longer imported here because the JSON-LD block is gone; `PageMeta` already takes care of head tags via its own internal Helmet usage.

- [ ] **Step 2: Verify lint passes**

Run:
```bash
npm run lint
```

Expected: pass.

If ESLint flags `react/no-danger`, the inline `// eslint-disable-next-line react/no-danger` comment above `dangerouslySetInnerHTML` covers it. If ESLint flags an unused import, double-check Step 1's import list.

- [ ] **Step 3: Verify build passes**

Run:
```bash
npm run build
```

Expected: pass. Vite resolves `@fullcalendar/google-calendar` and `dompurify` from the deps installed in Task 1, and `../utils/sanitizeHtml` from Task 2.

- [ ] **Step 4: Commit**

```bash
git add src/pages/Events.jsx
git commit -m "feat(events): wire Events page to Google Calendar with rich modal"
```

---

## Task 5: Update `Events.css` (drop list styles, add modal additions)

**Files:**
- Modify: `src/pages/Events.css`

- [ ] **Step 1: Replace `src/pages/Events.css` with the new contents**

Overwrite `src/pages/Events.css` with:

```css
.events-page__error {
  color: var(--color-brick);
  font-size: var(--text-sm);
  margin-bottom: var(--space-md);
}

.events-page__calendar {
  background: var(--color-birch);
  border: 1px solid var(--color-rule);
  border-radius: var(--radius-sm);
  padding: var(--space-md);
}

/* FullCalendar color overrides */
.events-page__calendar .fc .fc-button {
  background: var(--color-midnight);
  border-color: var(--color-midnight);
  color: var(--color-gold);
  font-family: var(--font-body);
  text-transform: uppercase;
  font-size: var(--text-xs);
  font-weight: 600;
}

.events-page__calendar .fc .fc-button:hover,
.events-page__calendar .fc .fc-button-active {
  background: var(--color-brick);
  border-color: var(--color-brick);
  color: var(--color-cream);
}

.events-page__calendar .fc .fc-toolbar-title {
  font-family: var(--font-heading);
  color: var(--color-brick);
  font-weight: 800;
}

.events-page__calendar .fc-daygrid-day-number {
  color: var(--color-midnight);
  font-family: var(--font-body);
  font-weight: 600;
}

.events-page__calendar .fc-day-today {
  background: var(--color-birch-soft) !important;
}

/* Event detail modal additions */
.event-modal__meta {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-cream-muted);
  margin: var(--space-xs) 0 0;
}

.event-modal__attachments {
  border-top: 1px solid var(--color-rule-dark);
  padding-top: var(--space-md);
}

.event-modal__attachments-title {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--color-gold);
  margin: 0 0 var(--space-sm);
}

.event-modal__attachments-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.event-modal__attachment a {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  color: var(--color-cream);
  text-decoration: underline;
  text-decoration-color: rgba(245, 186, 20, 0.45);
  text-underline-offset: 3px;
}

.event-modal__attachment a:hover {
  color: var(--color-gold);
}

.event-modal__attachment-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 2px 6px;
  border: 1px solid rgba(245, 186, 20, 0.55);
  color: var(--color-gold);
  border-radius: var(--radius-xs);
}
```

This file has two responsibilities:
1. The page-scope rules (`.events-page__error`, `.events-page__calendar` and its FullCalendar overrides).
2. The page-specific additions to the shared event-detail modal (date/location meta, attachments section).

The toggle and list-grid rules from the previous version (`.events-page__toggle`, `.events-page__toggle button`, `.events-page__toggle button.on`, `.events-page__list`) are gone because the corresponding markup is gone.

- [ ] **Step 2: Verify lint passes**

Run:
```bash
npm run lint
```

Expected: pass (ESLint doesn't lint CSS, but rerun anyway as a sanity check that nothing else regressed).

- [ ] **Step 3: Verify build passes**

Run:
```bash
npm run build
```

Expected: pass; Vite emits the updated CSS bundle.

- [ ] **Step 4: Commit**

```bash
git add src/pages/Events.css
git commit -m "style(events): drop list/toggle rules, add modal meta and attachments styles"
```

---

## Task 6: Remove the events-related exports from `src/services/api.js`

**Files:**
- Modify (or delete): `src/services/api.js`

Before this task starts, no caller still imports any of the removed names — Task 3 removed the homepage's `fetchEvents` import; Task 4 replaced `Events.jsx` and dropped its API imports. We confirm by grepping in Step 1.

- [ ] **Step 1: Confirm no remaining importers of `services/api.js`**

Run:
```bash
grep -rn "from '\.\./services/api'\|from '\.\./\.\./services/api'\|from 'services/api'" src 2>/dev/null
```

Expected: no output. If any line is printed, stop — those files still depend on the API service and the removal in this task is unsafe. Investigate before continuing.

- [ ] **Step 2: Delete `src/services/api.js`**

The file's only exports are events-related (per inspection of the current file: `getCategoryColor`, `fetchEvents`, `fetchCalendarSessions`, `transformToCalendarEvents`, `fetchCategories`, `groupEventsForUpcoming`, plus internal helpers `CATEGORY_COLORS`, `formatDate`, `formatTimeRange`). All of them are now unused, so the file can go.

Run:
```bash
rm src/services/api.js
```

- [ ] **Step 3: Verify lint and build**

Run:
```bash
npm run lint
npm run build
```

Expected: both succeed. If the build complains about a missing module under `src/services/api.js`, the grep in Step 1 missed a caller — re-grep with broader patterns (`grep -rn "services/api" src`) and resolve before continuing.

- [ ] **Step 4: Commit**

```bash
git add -u src/services/api.js
git commit -m "chore(events): remove API events service (Google Calendar is the source now)"
```

---

## Task 7: Delete the `EventCard` component

**Files:**
- Delete: `src/components/ui/EventCard.jsx`
- Delete: `src/components/ui/EventCard.css`

- [ ] **Step 1: Confirm no remaining importers of `EventCard`**

Run:
```bash
grep -rn "EventCard" src 2>/dev/null | grep -v "components/ui/EventCard"
```

Expected: no output.

- [ ] **Step 2: Delete the component files**

Run:
```bash
rm src/components/ui/EventCard.jsx src/components/ui/EventCard.css
```

- [ ] **Step 3: Verify lint and build**

Run:
```bash
npm run lint
npm run build
```

Expected: both succeed.

- [ ] **Step 4: Commit**

```bash
git add -u src/components/ui/EventCard.jsx src/components/ui/EventCard.css
git commit -m "chore(ui): remove unused EventCard component"
```

---

## Task 8: Update `CLAUDE.md`

**Files:**
- Modify: `CLAUDE.md`

`CLAUDE.md` describes architecture for future contributors and assistant sessions. Three sections need updates: "Data sources", "Events page", "Environment".

- [ ] **Step 1: Update the "Data sources" section**

Open `CLAUDE.md` and find the "Data sources" subsection under "## Architecture". Replace the first bullet (the `src/services/api.js` description) with a Google-Calendar-first description, and remove any wording about `transformToCalendarEvents` / `groupEventsForUpcoming` / category color mapping. The replacement bullet should read:

```markdown
- Events live in a single shared Google Calendar surfaced via `@fullcalendar/google-calendar` on `/events`. The plugin reads `events.list` directly using `VITE_GOOGLE_CALENDAR_ID` and `VITE_GOOGLE_CALENDAR_API_KEY`. There is no event API service in this repo — `src/services/` only holds non-event services (e.g., weather).
```

The existing bullets for `src/services/weather.js` and the webcam image stay unchanged.

- [ ] **Step 2: Update the "Events page" section**

Find the "### Events page" subsection. Replace its body with:

```markdown
`src/pages/Events.jsx` renders a single FullCalendar (`@fullcalendar/react` + `daygrid` + `google-calendar`) wired to one Google Calendar. Click handler reads `extendedProps.description` (sanitized via `src/utils/sanitizeHtml.js`), `extendedProps.location`, and `extendedProps.attachments` and renders them in the existing `event-modal-*` shell. There is no list view, no homepage upcoming-events section, and no `Event` JSON-LD on this page — Google Calendar is the only source. PDF attachments must be shared as "Anyone with the link can view" in Drive for visitors to open them.
```

- [ ] **Step 3: Update the "Environment" section**

Find the "## Environment" section. Replace its body with:

```markdown
Copy `.env.example` to `.env`. Variables consumed today:

- `VITE_GOOGLE_CALENDAR_ID` (required for `/events`) — calendar ID like `xxxxx@group.calendar.google.com`. Calendar must be public.
- `VITE_GOOGLE_CALENDAR_API_KEY` (required for `/events`) — Google Cloud API key restricted to the Calendar API and the production HTTP referrer (plus `http://localhost:5173/*` for dev).
- `VITE_API_URL` — reserved for non-event services; leave at the default unless directed otherwise.
- `VITE_STRIPE_PUBLISHABLE_KEY` — reserved for future use.
```

- [ ] **Step 4: Verify the file still parses as valid markdown**

Run:
```bash
git diff CLAUDE.md | head -120
```

Expected: the diff shows the three replacements above and nothing else.

- [ ] **Step 5: Commit**

```bash
git add CLAUDE.md
git commit -m "docs: rewrite events sections of CLAUDE.md for Google Calendar source"
```

---

## Task 9: Operational setup (owner-action) and manual verification

This task is the only one that requires acting outside the codebase. Set up the Google Cloud project and Calendar, then verify the page works end-to-end. None of these substeps are reversible by the next coding task — the plan can't continue without them.

**Files:**
- Modify: `.env` (local only; never committed)

- [ ] **Step 1: Create the Google Cloud project**

In `console.cloud.google.com`:
1. Create a new project (suggested name `fkoc-website`). No billing account needed.
2. Enable the Google Calendar API for the project (APIs & Services → Library → "Google Calendar API" → Enable).
3. Create an API key (APIs & Services → Credentials → Create credentials → API key).
4. Restrict the key:
   - **API restrictions:** restrict to the Google Calendar API only.
   - **Application restrictions:** HTTP referrers — add `https://www.fortkentoc.org/*` and `http://localhost:5173/*`.

- [ ] **Step 2: Configure the Google Calendar**

In `calendar.google.com`:
1. Identify or create the calendar that holds FKOC events.
2. Settings → "Make available to public" → "See all event details".
3. Copy the calendar ID from the same Settings page (looks like `xxxxx@group.calendar.google.com`).
4. Create a test event with a description (with an inline link) and a Drive PDF attachment shared as "Anyone with the link can view".

- [ ] **Step 3: Configure local env**

Create `.env` (alongside `.env.example`) and set:

```bash
VITE_GOOGLE_CALENDAR_ID=<your-calendar-id>
VITE_GOOGLE_CALENDAR_API_KEY=<your-api-key>
```

Do not commit `.env`.

- [ ] **Step 4: Run the dev server and verify the calendar loads**

Run:
```bash
npm run dev
```

Open `http://localhost:5173/events`. Verify:
- The calendar grid renders without errors in the browser console.
- The test event from Step 2 appears on its date in brick/maroon.
- Navigating prev/next still works.

- [ ] **Step 5: Verify the click modal renders all fields**

Click the test event. Verify:
- Modal opens (URL doesn't change to a Google Calendar page — `preventDefault` works).
- Title, formatted date/time, and location render.
- Description renders with formatting (bold, links open in a new tab with `rel="noopener noreferrer"`).
- The "Documents" section appears with the attached PDF as a clickable link, opening in a new tab.
- The footer "View on Google Calendar" link points at the Google `htmlLink` and opens in a new tab.
- The Close button and Esc key both close the modal.

- [ ] **Step 6: Verify the error path**

In `.env`, change `VITE_GOOGLE_CALENDAR_API_KEY` to an obviously invalid value (e.g., `BAD_KEY`). Restart `npm run dev`. Reload `/events`. Verify:
- The error notice "Events couldn't load right now. Please check back soon." appears above the calendar.
- The page does not crash; the calendar chrome still renders.
- The browser console logs the error from `handleEventSourceFailure`.

Restore the real API key when done.

- [ ] **Step 7: Verify the homepage no longer fetches events**

Open `http://localhost:5173/`. Verify:
- The "Community calendar" section still renders with its eyebrow, headline, lede, and "See full calendar →" CTA.
- No event cards appear underneath.
- The browser Network tab shows no calls to `carl.fortkentoc.org/api`.

- [ ] **Step 8: Final lint + build**

Run:
```bash
npm run lint
npm run build
```

Expected: both pass. No commit needed for this task — verification only.

---

## Summary of acceptance criteria (mirrors spec)

- `/events` renders a FullCalendar grid populated from the configured Google Calendar.
- Clicking an event opens a modal with title, formatted date/time, location (when present), HTML-sanitized description, and attached PDFs as new-tab links.
- The modal also offers a "View on Google Calendar" link.
- The homepage no longer renders an upcoming-events section.
- `src/services/api.js` is gone and no other file imports the old events helpers.
- `npm run lint` passes; `npm run build` succeeds.
- A misconfigured API key shows the "Events couldn't load right now" notice without breaking the page.
