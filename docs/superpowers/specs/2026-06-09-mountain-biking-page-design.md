# /mountain-biking page — design spec

**Date:** 2026-06-09
**Owner:** Brandon Goding
**Status:** approved for implementation planning

## Goal

Give mountain biking at FKOC a dedicated page that answers a first-time visitor's three questions in one screen: *what is this trail system, what does it cost, where do I start.* The page also tells a short story of the volunteer-built network so visitors understand what they're rolling into.

Today mountain biking surfaces only as a single map thumbnail on `/trails`, a passing word in the home/about copy, and a Trailforks listing offsite. There is no landing surface for someone searching "mountain biking fort kent." This spec closes that gap, mirroring the just-shipped `/disc-golf` page.

## Audience & primary action

- **Primary audience:** first-time visitors arriving from search or Trailforks.
- **Primary action:** show up and ride. The loudest CTA is `Get directions`, pointing at `/location`.
- Secondary actions: view the trails on Trailforks; buy a day pass.

Local regulars are not the primary audience. The page nods to them with the Wednesday group ride, but membership pitch lives on `/memberships` and events live on `/events`.

## Information architecture

- **Route:** `/mountain-biking`, registered in `src/App.jsx`.
- **Nav placement:** `Visit` dropdown in `src/components/layout/Header.jsx`, immediately after *Disc golf*:
  ```
  Visit ▾
    Trails & conditions
    Day passes
    Rentals
    Disc golf
    Mountain biking   ← new
    Location
    Facilities
  ```
- **Breadcrumb:** `Visit › Mountain biking`.
- **Sitemap:** add a `<url>` entry for `/mountain-biking` in `public/sitemap.xml`.

## Page structure

Built on the existing `DataPage` template — the same one `/disc-golf` and `/rentals` use. Single flow, no alternating section colors, no hero photo.

```
PageHeader (crumb · title · lede)
┌──────────────────────────┬──────────────────┐
│ MAIN                     │  ASIDE (sticky)  │
│  · Trail facts           │  Plan your ride  │
│  · Trail history         │                  │
│  · Trail map             │                  │
└──────────────────────────┴──────────────────┘
```

- **PageHeader copy**
  - Title: `Mountain biking at <em>FKOC.</em>`
  - Lede: *"Volunteer-built singletrack winding through the Lonesome Pine Trails. Open snow-free season, all skill levels welcome."*

## Content sections (main column)

### Trail facts

Four `StatCard` tiles in a 4-up grid (2-up on mobile), distance-forward, followed by a ~50-word paragraph.

| Tile | Value | Label |
|---|---|---|
| 1 | ~8 mi | Singletrack |
| 2 | 20+ | Trails |
| 3 | Beginner–advanced | Difficulty |
| 4 | 100% | Volunteer-built |

Paragraph covers: singletrack threaded across the same hill as the Nordic network and **shared seasonally** (bikes in the warm months, XC skis once snow flies); a difficulty range from beginner-friendly loops to technical blue/black lines with jumps; names a couple of trails (**Trial & Error** — intermediate blue singletrack; **Green Bean Loop**). Closes with an inline "Full trail map & GPS on Trailforks →" link out to the FKOC Trailforks region page.

**Source:** Trailforks region page (https://www.trailforks.com/region/fort-kent-outdoor-center-32149/) and the WAGM TV feature.

### Trail history

Three paragraphs, ~70 words each. Tone matches `/about-us` and the `/disc-golf` history — warm but informational.

1. **Origin** — the network grew out of the board's push to get more people using the trails year-round; built and maintained 100% by volunteers, with new trail always under construction (Carl Theriault, board member).
2. **The riding** — singletrack threaded through the existing Nordic / Lonesome Pine trail system; a spread of difficulty from mellow loops to technical descents and jumps; the riding draws people from as far as Edmundston and Bangor.
3. **Community** — weekly Wednesday group rides, open to all skill levels with no requirement, led by biathlon coach Charlie Cobb.

**Sources:** WAGM TV, "Mountain Biking at the World Famous Fort Kent Outdoor Center," 2024-07-24 (https://www.wagmtv.com/2024/07/24/mountain-biking-world-famous-fort-kent-outdoor-center/) and Trailforks. Names and details require owner confirmation before ship — see "Open data items."

### Trail map

Reuses the existing asset `src/assets/images/trails/maps-original/mtbike-trails.jpg`. Rendered larger than the `/trails` thumbnail (full main-column width), wrapped in a click-through to the full-size JPG in a new tab. Caption line below: `FKOC Mountain Bike Trail Map · Open full size`.

The asset stays on `/trails` too — both pages link to the same source file.

## Aside — "Plan your ride"

Sticky card on the right rail, styled like the `/disc-golf` aside (dark background, gold eyebrow).

Structure:

- Eyebrow: `PLAN YOUR RIDE` (on-dark variant)
- Heading: `Before you ride.`
- Three-row definition list:
  - **Pass** — `Day pass or membership required`
  - **Season** — `Snow-free months` (placeholder; see open items)
  - **Group rides** — `Wednesdays · all levels` (placeholder)
- CTA cluster (top to bottom):
  - Primary `Get directions` → `/location`
  - Secondary `View on Trailforks` → `https://www.trailforks.com/region/fort-kent-outdoor-center-32149/` (external, new tab)
  - Tertiary ghost-link `Get a day pass →` → `/day-passes`
- Rule
- `Good to know` bullets:
  - No bike rentals on site — bring your own
  - Helmet recommended; ride technical trails with a group
  - Trails are shared with hikers — yield and call your pass
  - Carry water and bug spray; service is thin

## SEO & structured data

- `<PageMeta>` at the top of the page:
  - `title="Mountain biking at FKOC"`
  - `description="Volunteer-built singletrack mountain bike trails on the Lonesome Pine Trails at Fort Kent Outdoor Center in northern Maine. All skill levels, open the snow-free season, day pass or membership required."`
  - `path="/mountain-biking"`
  - `PageMeta` emits `<title>`, meta description, canonical, OG tags, Twitter card, and `BreadcrumbList` JSON-LD.
- Sitemap entry added to `public/sitemap.xml`.
- **No additional JSON-LD on this page.** The home page already emits an org-level entry listing mountain biking in its `sport` array; re-emitting here would dilute signals.
- **OG image** falls back to `/og-default.jpg`. When a real trail photo is available, drop in `/og-mountain-biking.jpg` as a one-line follow-up.

## Open data items (owner confirms post-ship)

These do not block the build. Each ships with the default below and becomes a one-line edit once confirmed.

| # | Item | Default if unanswered |
|---|---|---|
| 1 | Total trail mileage | `~8 mi` |
| 2 | Trail count | `20+` |
| 3 | Season dates | `Snow-free months` |
| 4 | Group-ride day/time | `Wednesdays · all levels` |
| 5 | Names & spellings (Carl Theriault, Charlie Cobb) and their roles | Ship as written above; correct in follow-up edit |
| 6 | On-site bike rentals | Ship the "no rentals — bring your own" bullet (owner confirmed 2026-06-09: no rentals) |
| 7 | Canonical map (static JPG vs. Trailforks embed) | Ship the static JPG; Trailforks is the secondary link |
| 8 | OG-image trail photo | Fall back to `/og-default.jpg` |

Out of scope for this spec: events/races (handled by `/events`), individual hole/segment stats (Trailforks' job), photo gallery (no asset inventory yet), live trail-condition status for bikes.

## Implementation surface (files touched)

- **New** `src/pages/MountainBiking.jsx`
- **New** `src/pages/MountainBiking.css`
- `src/App.jsx` — register the `/mountain-biking` route
- `src/components/layout/Header.jsx` — append the *Mountain biking* item to the `Visit` group's `items` array
- `public/sitemap.xml` — append a new `<url>` entry

No new components, no new template, no new shared primitives. Uses existing `DataPage`, `PageHeader`, `PageMeta`, `Eyebrow`, `Button`, `StatCard`. The `.css` file mirrors `DiscGolf.css` (stat grid + map figure + dark aside).

## Out of scope

- Photo gallery
- Event/race listing on this page (lives on `/events`)
- Hole-by-hole / segment stats
- Bike rentals UI
- Live bike trail-condition status
- Print-quality PDF version of the trail map
- Dedicated OG image

## Verification

- `npm run lint` clean
- `npm run build` succeeds
- Manual browser walkthrough confirms:
  - Sticky aside stays put on desktop scroll
  - Mobile collapses to single column with aside below main
  - All links resolve (no 404s)
  - Breadcrumb matches `Visit › Mountain biking`
  - New nav entry appears in the `Visit` dropdown
