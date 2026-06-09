# /disc-golf page — design spec

**Date:** 2026-06-09
**Owner:** Brandon Goding
**Status:** approved for implementation planning

## Goal

Give disc golf at FKOC a dedicated page that answers a first-time visitor's three questions in one screen: *what is this course, what does it cost, where do I start.* The page also tells a short origin story for the course so visitors understand what they're walking into.

The current site exposes disc golf as a single map thumbnail on `/trails`, a membership bullet on `/memberships`, and a passing mention on `/about-us`. There is no landing surface for someone searching "disc golf fort kent." This spec closes that gap.

## Audience & primary action

- **Primary audience:** first-time visitors arriving from search or UDisc.
- **Primary action:** show up and play. The loudest CTA is `Get directions`, pointing at `/location`.
- Secondary actions: view the course on UDisc; buy a day pass.

Local regulars and tournament players are not the primary audience for this page. Tournament detail lives on `/events`; membership pitch lives on `/memberships`.

## Information architecture

- **Route:** `/disc-golf`, registered in `src/App.jsx`.
- **Nav placement:** `Visit` dropdown in `src/components/layout/Header.jsx`, between *Rentals* and *Location*:
  ```
  Visit ▾
    Trails & conditions
    Day passes
    Rentals
    Disc golf        ← new
    Location
    Facilities
  ```
- **Breadcrumb:** `Visit › Disc golf`.
- **Sitemap:** add a `<url>` entry for `/disc-golf` in `public/sitemap.xml`.

## Page structure

Built on the existing `DataPage` template (the same one `/rentals` uses). Single flow, no alternating section colors.

```
PageHeader (crumb · title · lede)
┌──────────────────────────┬──────────────────┐
│ MAIN                     │  ASIDE (sticky)  │
│  · Course facts          │  Plan your visit │
│  · Course history        │                  │
│  · Course map            │                  │
└──────────────────────────┴──────────────────┘
```

- **PageHeader copy**
  - Title: `Disc golf at <em>FKOC.</em>`
  - Lede: *"An 18-hole course climbing into the Lonesome Pine Trails. Open May through October, donations welcome."*
  - No hero photo — matches Trails/Rentals.

## Content sections (main column)

### Course facts

Four `StatCard` tiles in a 4-up grid (2-up on mobile), followed by a ~50-word paragraph.

| Tile | Value |
|---|---|
| 1 | 18 holes |
| 2 | Par 63 |
| 3 | ~1h 42m avg round |
| 4 | Moderate · hilly |

Paragraph covers: two tee layouts (**Warrior** — white tees, 4,589 ft, intermediate; **Cadet** — red tees, 1,565 ft, beginner-friendly), course routing (starts at the lodge, climbs into the Lonesome Pine Trails, returns to the parking lot), and roughly 2.5 mi of walking total. Closes with an inline "Full hole-by-hole details on UDisc →" link out to the course's UDisc page.

**Source:** UDisc course page (https://udisc.com/courses/fort-kent-outdoor-center-Zh4t) and BigCountry969 writeup.

### Course history

Three paragraphs, ~70 words each. Tone matches `/about-us` — warm but informational.

1. **Origin** — September 2020 opening, volunteer build led by Carl Theriault and Ben Paradis.
2. **Design** — Matt Sabasteanski, Director of Outdoor Recreation at Pineland Farms (where he'd built two championship-grade courses), routed the layout along the existing Nordic trails so the two seasons never overlap.
3. **Claim to fame** — northernmost disc golf course in the continental U.S.

**Sources:** WAGM TV (https://www.wagmtv.com/2020/09/11/new-disc-golf-course-in-st-john-valley/) and BigCountry969 (https://bigcountry969.com/fort-kent-outdoor-center-disc-golf-course/). Names and dates require owner confirmation before ship — see "Open data items."

### Course map

Reuses the existing asset `src/assets/images/trails/maps-original/disc-golf.jpg`. Rendered larger than the `/trails` thumbnail (full main-column width, ~600px), wrapped in a click-through to the full-size JPG in a new tab. Caption line below: `2024 FKOC Disc Golf Map · Open full size`.

The asset stays on `/trails` too — both pages link to the same source file.

## Aside — "Plan your visit"

Sticky card on the right rail, styled like the existing `rentals-info` block (dark background, gold eyebrow).

Structure:

- Eyebrow: `PLAN YOUR VISIT` (on-dark variant)
- Heading: `Before you throw.`
- Three-row definition list:
  - **Fee** — `Donations welcome · honor box at trailhead` (placeholder; see open items)
  - **Season** — `May – October` (placeholder)
  - **Hours** — `Dawn to dusk` (placeholder)
- CTA cluster (top to bottom):
  - Primary `Get directions` → `/location`
  - Secondary `View on UDisc` → `https://udisc.com/courses/fort-kent-outdoor-center-Zh4t` (external, new tab)
  - Tertiary ghost-link `Get a day pass →` → `/day-passes`
- Rule
- `Good to know` bullets:
  - Pay at the trailhead box or scan the QR sign
  - No disc rentals on site — bring your own
  - Carry water and bug spray; service is thin

## SEO & structured data

- `<PageMeta>` at the top of the page:
  - `title="Disc golf at FKOC"`
  - `description="An 18-hole disc golf course on the Lonesome Pine Trails at Fort Kent Outdoor Center in northern Maine. Two layouts, open May through October, donations welcome."`
  - `path="/disc-golf"`
  - `PageMeta` emits `<title>`, meta description, canonical, OG tags, Twitter card, and `BreadcrumbList` JSON-LD.
- Sitemap entry added to `public/sitemap.xml`.
- **No additional JSON-LD on this page.** The home page already emits an org-level `SportsActivityLocation` listing disc golf in its `sport` array; re-emitting a second one here would dilute signals.
- **OG image** falls back to `/og-default.jpg`. When a real course photo is available, drop in `/og-disc-golf.jpg` as a one-line follow-up.

## Open data items (owner confirms post-ship)

These do not block the build. Each ships with the default below and becomes a one-line edit once confirmed.

| # | Item | Default if unanswered |
|---|---|---|
| 1 | Current fee | "Donations welcome · honor box at trailhead" (no dollar figure) |
| 2 | Season dates | `May – October` |
| 3 | Hours of operation | `Dawn to dusk` |
| 4 | Names & spellings (Carl Theriault, Ben Paradis, Matt Sabasteanski) and their roles | Ship as written above; correct in follow-up edit |
| 5 | Opening date | `September 2020` |
| 6 | On-site disc rentals | Ship the "no rentals — bring your own" bullet |
| 7 | OG-image course photo | Fall back to `/og-default.jpg` |

Out of scope for this spec: tournaments (handled by `/events`), leagues (no confirmed data), hole-by-hole stats (UDisc's job), photo gallery (no asset inventory yet).

## Implementation surface (files touched)

- **New** `src/pages/DiscGolf.jsx`
- **New** `src/pages/DiscGolf.css`
- `src/App.jsx` — register the `/disc-golf` route
- `src/components/layout/Header.jsx` — append the *Disc golf* item to the `Visit` group's `items` array
- `public/sitemap.xml` — append a new `<url>` entry

No new components, no new template, no new shared primitives. Uses existing `DataPage`, `PageHeader`, `PageMeta`, `Eyebrow`, `Button`, `StatCard`.

## Out of scope

- Photo gallery
- Tournament/event listing on this page (lives on `/events`)
- League schedule
- Hole-by-hole stats
- Disc rentals UI
- Print-quality PDF version of the course map
- Dedicated OG image

## Verification

- `npm run lint` clean
- `npm run build` succeeds
- Manual browser walkthrough confirms:
  - Sticky aside stays put on desktop scroll
  - Mobile collapses to single column with aside below main
  - All links resolve (no 404s)
  - Breadcrumb matches `Visit › Disc golf`
  - New nav entry appears in the `Visit` dropdown
