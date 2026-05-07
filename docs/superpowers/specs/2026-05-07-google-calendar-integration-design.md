# Google Calendar as the Sole Events Source

**Status:** Design approved, ready for implementation plan.
**Date:** 2026-05-07.

## Background

Today the events flow on `www.fortkentoc.org` is wired to the FKOC API at `carl.fortkentoc.org/api`. The `/events` page (`src/pages/Events.jsx`) renders both a list view (event cards grouped by event with formatted dates) and a calendar view (FullCalendar `dayGridPlugin`, sessions colored by category). The homepage (`src/pages/Home.jsx`) renders an upcoming-events section sourced from the same API. SEO `Event` JSON-LD is emitted on `/events` from the same data.

The maintainers want a simpler editorial workflow: add events in one place, attach PDFs, have them appear on the site. Google Calendar already supports all of that natively.

## Goal

Replace the API-driven events flow with a single shared Google Calendar as the source of truth. Visitors see a calendar grid on `/events`; clicking an event opens a modal with the event's description and any attached PDFs.

## Non-goals

- Multi-calendar support (one calendar covers all event types).
- Per-event color customization (one brand color for all events).
- Re-introducing the homepage upcoming-events section or the `/events` list view.
- Re-introducing `Event` JSON-LD on `/events`.
- Any caching layer, rate-limit handling, or ICS/non-Google export.
- Any backend or admin UI work — the editorial workflow lives entirely in Google Calendar.

## Approach

Use the official `@fullcalendar/google-calendar` plugin to register the FKOC Google Calendar as a FullCalendar event source. The plugin calls Google's `events.list` REST API under the hood, expands recurring events, and maps each event onto a FullCalendar event object. Inspecting the plugin source (`@fullcalendar/google-calendar@6.1.20`, `index.cjs:99-114`) confirms the following fields are passed through:

| Google field | FullCalendar location |
|---|---|
| `summary` | `event.title` |
| `start.dateTime` / `start.date` | `event.start` |
| `end.dateTime` / `end.date` | `event.end` |
| `htmlLink` | `event.url` |
| `location` | `event.extendedProps.location` |
| `description` | `event.extendedProps.description` |
| `attachments` (array) | `event.extendedProps.attachments` |
| `extendedProperties.shared` | merged into `event.extendedProps` |

A direct `fetch` against the Calendar API was considered and rejected — the plugin already does the work, and we don't need the events in React state for any other purpose.

## Architecture

```
┌────────────────────────────────────────────────────┐
│ /events page (Events.jsx)                          │
│                                                    │
│   FullCalendar                                     │
│   ├─ plugins: [dayGridPlugin, googleCalendarPlugin]│
│   ├─ googleCalendarApiKey: VITE_GOOGLE_CALENDAR_API_KEY
│   ├─ events: { googleCalendarId: VITE_GOOGLE_CALENDAR_ID,
│   │            color: '#b93830' (--color-brick) }  │
│   ├─ eventClick:                                   │
│   │     preventDefault(); setSelectedEvent(...)    │
│   └─ eventSourceFailure → setLoadError(...)        │
│                                                    │
│   Modal (existing shell, new fields)               │
│   ├─ title:        event.title                     │
│   ├─ when:         formatted start/end             │
│   ├─ location:     extendedProps.location?         │
│   ├─ description:  extendedProps.description       │
│   │                (DOMPurify-sanitized HTML)      │
│   ├─ attachments:  extendedProps.attachments[]     │
│   │                rendered as link list           │
│   └─ "View on Google Calendar" → event.url         │
└────────────────────────────────────────────────────┘
```

The page becomes calendar-only. The list-view toggle, the list-view JSX, the homepage upcoming-events section, the API service for events, and the SEO JSON-LD all go away.

## Modal detail

The existing `event-modal-*` shell in `Events.jsx` carries over with new content:

- **Title** — `event.title`.
- **Date / time line** — render `event.start` (and `event.end` if present) using `Intl.DateTimeFormat` with the user's locale and the `America/New_York` timezone. All-day events (Google returns `start.date` only) render the date with no time.
- **Location** — render below the date if `extendedProps.location` is present and non-empty. Most events are at FKOC so it's optional.
- **Description** — `extendedProps.description` is HTML when staff use Google's rich-text editor. Sanitize with DOMPurify, configured with `ALLOWED_TAGS: ['a','b','i','u','br','p','ul','ol','li','strong','em']` and `ALLOWED_ATTR: ['href','target','rel']`. Register a one-time `afterSanitizeAttributes` hook that, for every `<a>` node, sets `target="_blank"` and `rel="noopener noreferrer"`. Render the sanitized string via `dangerouslySetInnerHTML`. Pass the same instance of DOMPurify (no need to create one per render).
- **Attachments** — `extendedProps.attachments` is an array of `{ fileUrl, title, mimeType, iconLink, fileId }`. Render as a "Documents" labeled list of links; each link uses `title` as text and `fileUrl` as href, opens in a new tab. Show a small inline PDF icon when `mimeType === 'application/pdf'`. Hide the entire section when the array is empty or missing.
- **Footer** — keep the existing Close button. Add a secondary link "View on Google Calendar" pointing at `event.url` (the plugin sets this from `htmlLink`), opening in a new tab.

`eventClick` must call `clickInfo.jsEvent.preventDefault()` to suppress the default navigation to Google Calendar; the modal handles the click instead.

The category badge in the current modal goes away (no categories in the new model).

## Failure modes

- **API key missing or invalid** — FullCalendar's `eventSourceFailure(error)` callback fires. Set a `loadError` state in the component and render a small notice above the calendar: "Events couldn't load right now." Clear the state on the next successful fetch. Do not block calendar chrome.
- **Calendar empty for the visible range** — normal state, no notice.
- **Event with no description and no attachments** — modal renders title + when (+ location if present) and the close/Google-Calendar footer. No empty sections.
- **Drive attachment not shared publicly** — clicking the link sends the visitor to a Google "request access" page. Document this in admin guidance; we don't try to detect or rewrite it client-side.

## Files modified

- **`src/pages/Events.jsx`**
  - Add: `googleCalendarPlugin` import and config; sanitized HTML rendering for description; attachments list; date formatting helper.
  - Remove: `view` state, the toggle UI and its CSS, list-view JSX, `listEvents` / `listLoading` / `listError` state, `groupEventsForUpcoming` and `fetchEvents` imports, `EventCard` import, `Helmet` JSON-LD block, `buildEventJsonLd`, `EVENT_LOCATION`, `deriveDateParts`, `category` badge in modal.
  - Update: `eventClick` to `preventDefault` and pass the new field set into the modal.
- **`src/pages/Home.jsx`** — remove `upcomingEvents` state, the `fetchEvents` effect, the upcoming-events section JSX, and the `fetchEvents` import.
- **`src/services/api.js`** — remove `CATEGORY_COLORS`, `getCategoryColor`, `fetchEvents`, `fetchCalendarSessions`, `transformToCalendarEvents`, `groupEventsForUpcoming`, `fetchCategories` (verify no callers first), `formatDate`, `formatTimeRange`. If the file ends empty, delete it; otherwise leave the remaining exports intact.
- **`src/components/ui/EventCard.jsx`** (and its CSS) — verify no remaining callers via grep; delete if unused.
- **`src/pages/Events.css`** — remove rules tied to the list view and the toggle; add small rules for the attachments list and the date/location line.
- **`.env.example`** — add `VITE_GOOGLE_CALENDAR_ID` and `VITE_GOOGLE_CALENDAR_API_KEY`. Leave `VITE_API_URL` alone (other services such as `weather.js` may still use it; verify with grep before any removal).
- **`CLAUDE.md`** — update the "Events page" and "Data sources" sections to reflect Google Calendar as the source, update the env section.
- **`package.json` / `package-lock.json`** — add `@fullcalendar/google-calendar` and `dompurify`.

## Operational setup (one-time, owner-action)

These are out-of-code prerequisites before the deploy will work:

1. **Google Cloud project**
   - Create a new project (no billing account needed).
   - Enable the Google Calendar API.
   - Create an API key.
   - Restrict the key: API restrictions → Google Calendar API only; Application restrictions → HTTP referrers `https://www.fortkentoc.org/*` and `http://localhost:5173/*`.
2. **Google Calendar**
   - Identify or create the FKOC events calendar.
   - Set sharing to "Make available to public — See all event details".
   - Copy the calendar ID from the calendar's settings page.
3. **Drive attachments**
   - Each PDF attached to an event must be shared as "Anyone with the link can view" or visitors will land on a Google access-request page. Document in an admin note.
4. **Environment variables**
   - Add `VITE_GOOGLE_CALENDAR_ID` and `VITE_GOOGLE_CALENDAR_API_KEY` to local `.env` and the production build environment.

## Acceptance criteria

- `/events` renders a FullCalendar grid populated from the configured Google Calendar. No list view, no toggle.
- Clicking an event opens a modal showing title, formatted date/time, location (when present), HTML description (sanitized), and attached PDFs as clickable links opening in a new tab.
- The modal also offers a "View on Google Calendar" link.
- The homepage no longer renders an upcoming-events section.
- `src/services/api.js` no longer exports the events-related helpers; nothing else in the codebase imports them.
- `npm run lint` passes; `npm run build` succeeds.
- A visit to `/events` with no API key configured (e.g., misconfigured prod) does not crash the page — it renders the calendar shell and a "couldn't load" notice.
