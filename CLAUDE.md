# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server (HMR)
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the built `dist/` locally
- `npm run lint` — ESLint over the repo

There is no test runner configured.

## Stack

React 19 + Vite 7 SPA, plain JavaScript (no TypeScript). Routing is `react-router-dom` v7 with `BrowserRouter` (in `src/main.jsx`), so any host serving the build must fall back unknown paths to `index.html`. Per-route `<head>` is managed by `react-helmet-async` via `HelmetProvider` at the root.

## Architecture

### Routing & layout
`src/App.jsx` declares all routes under a single `Layout` element. `src/components/Layout.jsx` renders `Header` / `<Outlet />` / `Footer`, plus a global `WebcamModal` driven by `WebcamContext`. Layout also handles SPA scroll behavior on every navigation: scroll to `#hash` target if present, otherwise scroll to top.

### Page templates
Pages compose one of three templates in `src/templates/` rather than rolling their own shell:
- `ContentPage` — long-form copy, optional `toc` sidebar (anchor links).
- `IndexPage` — card grids with optional filter chips.
- `DataPage` — main + aside two-column layout for status/data dashboards.

When adding a new page, prefer extending one of these templates over building a new layout. The shared `PageHeader` (in `src/components/layout/`) handles the breadcrumb + title + lede.

### Design system
Design tokens live exclusively in `src/index.css` (`:root` custom properties for color, type, space, radius). Base element styling is in `src/styles/base.css`; utility classes are in `src/styles/utilities.css`. Reusable primitives are in `src/components/ui/` (Button, Card, Section, Eyebrow, Badge, Callout, Container, StatCard, TopoDivider). Page-specific styles are colocated as `<PageName>.css` next to the JSX.

`DESIGN_SYSTEM.md` documents the brand (colors, typography, voice). When introducing new visual elements, use existing tokens and primitives rather than hardcoding values.

### SEO
Every page should render `<PageMeta title=... description=... path=... />` (see `src/components/PageMeta.jsx`). It writes title, description, canonical, OpenGraph/Twitter tags, and a `BreadcrumbList` JSON-LD. The home page also emits an Organization JSON-LD inline (see `Home.jsx`). `index.html` carries default OG tags for crawlers that don't execute JS. `public/sitemap.xml` and `public/robots.txt` are managed by hand.

### Data sources
- Events live in a single shared Google Calendar surfaced via `@fullcalendar/google-calendar` on `/events`. The plugin reads `events.list` directly using `VITE_GOOGLE_CALENDAR_ID` and `VITE_GOOGLE_CALENDAR_API_KEY`. There is no event API service in this repo — `src/services/` only holds non-event services (e.g., weather).
- `src/services/weather.js` — National Weather Service station `KFVE` (Frenchville). Send a descriptive `User-Agent` per NWS policy; the existing one is correct.
- Webcam still image: `https://webcam.fortkentoc.org/webcam/image.jpg`, surfaced via the global `WebcamModal` driven by `WebcamContext`.

### External links
Donation, membership, and day-pass URLs (currently Zeffy) plus social URLs are centralized in `src/lib/urls.js`. Update there rather than scattering literals across pages.

### Analytics
Google Analytics (`G-V0H2D4WQGS`) is loaded in `index.html` with `send_page_view: false`. `src/components/AnalyticsListener.jsx` fires a `page_view` on every router location change (including initial mount) so SPA navigation is tracked. `Layout.jsx` also fires a redundant `page_view` on the same effect — be aware if you change one. Don't reintroduce `send_page_view: true`.

### Events page
`src/pages/Events.jsx` renders a single FullCalendar (`@fullcalendar/react` + `daygrid` + `google-calendar`) wired to one Google Calendar. Click handler reads `extendedProps.description` (sanitized via `src/utils/sanitizeHtml.js`), `extendedProps.location`, and `extendedProps.attachments` and renders them in the existing `event-modal-*` shell. There is no list view, no homepage upcoming-events section, and no `Event` JSON-LD on this page — Google Calendar is the only source. PDF attachments must be shared as "Anyone with the link can view" in Drive for visitors to open them.

## Environment

Copy `.env.example` to `.env`. Variables consumed today:

- `VITE_GOOGLE_CALENDAR_ID` (required for `/events`) — calendar ID like `xxxxx@group.calendar.google.com`. Calendar must be public.
- `VITE_GOOGLE_CALENDAR_API_KEY` (required for `/events`) — Google Cloud API key restricted to the Calendar API and the production HTTP referrer (plus `http://localhost:5173/*` for dev).
- `VITE_API_URL` — reserved for non-event services; leave at the default unless directed otherwise.
- `VITE_STRIPE_PUBLISHABLE_KEY` — reserved for future use.

## Lint conventions

The ESLint config (`eslint.config.js`) overrides `no-unused-vars` with `varsIgnorePattern: '^[A-Z_]'` — components, constants, and underscore-prefixed names are allowed to be unused. Don't rename to dodge the rule when the convention applies.
