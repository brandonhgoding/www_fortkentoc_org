# Fort Kent Outdoor Center Design System
## "Fort Kent Community Lodge" Theme

---

## Brand Essence

The Fort Kent Outdoor Center website embodies the spirit of a **trusted community trailhead lodge**—a place where the warmth of a wood-burning stove meets the crisp air of Northern Maine trails. This isn't a polished corporate experience; it's a digital extension of a real place where snow crunches underfoot, volunteers share hot cocoa, and families create winter memories.

---

## Design Principles

1. **Grounded Authenticity** - Every element should feel like it could exist in the physical lodge
2. **Quiet Confidence** - Professional without being corporate, established and trustworthy
3. **Community Warmth** - Welcoming to first-time visitors and longtime members alike
4. **Functional Clarity** - Trail conditions and essential info always easy to find

---

## Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Deep Pine Green | `#2D4A3E` | Primary brand, headers, key actions |
| Warm Wood Brown | `#8B6914` | Accents, grounding elements |
| Muted Gold | `#C9A227` | Highlights, CTAs, special emphasis |

### Background & Surface
| Name | Hex | Usage |
|------|-----|-------|
| Snow White | `#FAFAF8` | Primary background |
| Birch Cream | `#F5F3EE` | Card backgrounds, alternating sections |
| Wool Gray | `#E8E5DE` | Borders, dividers |
| Stone Gray | `#6B6B6B` | Secondary text |

### Status Colors
| Name | Hex | Usage |
|------|-----|-------|
| Trail Open | `#4A7C59` | Open trails, success states |
| Caution Amber | `#D4A029` | Warnings, limited conditions |
| Closed Red | `#9E4A4A` | Closed status, errors |
| Info Blue | `#4A6A8B` | Informational states |

---

## Typography

### Fonts
- **Headings**: Bitter (slab-serif) - Established, warm, trustworthy
- **Body**: Source Sans 3 (humanist sans) - Clean, readable, professional

### Scale
```
--text-xs:   0.75rem   (12px) - Captions
--text-sm:   0.875rem  (14px) - Secondary text
--text-base: 1rem      (16px) - Body text
--text-lg:   1.125rem  (18px) - Lead paragraphs
--text-xl:   1.25rem   (20px) - Small headings
--text-2xl:  1.5rem    (24px) - H4
--text-3xl:  1.875rem  (30px) - H3
--text-4xl:  2.25rem   (36px) - H2
--text-5xl:  3rem      (48px) - H1
--text-6xl:  3.75rem   (60px) - Hero display
```

---

## Components

### Buttons

| Class | Usage |
|-------|-------|
| `.btn-primary` | Main actions (Pine Green background) |
| `.btn-secondary` | Alternative actions (Pine Green outline) |
| `.btn-gold` | Donation/special CTAs (Muted Gold) |
| `.btn-outline-light` | Actions on dark backgrounds |
| `.btn-link` | Text-style links with arrow |

### Cards

| Class | Usage |
|-------|-------|
| `.card` | Basic card with cream background |
| `.card-bordered` | White background with border |
| `.card-trail` | Activity type cards with icons |
| `.card-event` | Event listings with date |
| `.card-support` | Membership/volunteer/donate cards |

### Status Indicators

| Class | Usage |
|-------|-------|
| `.status-badge-open` | Green badge for open status |
| `.status-badge-caution` | Amber badge for caution |
| `.status-badge-closed` | Red badge for closed |
| `.status-dot-*` | Small colored dots |
| `.condition-bar` | Visual condition meter |

### Alerts

| Class | Usage |
|-------|-------|
| `.alert-info` | Informational messages |
| `.alert-warning` | Warning messages |
| `.alert-success` | Success messages |

---

## Layout

### Homepage Structure
```
Hero Section (70vh)
  └── Title, subtitle, CTAs
  └── Quick status banner

Trail Conditions Section
  └── 3-column grid of activity cards

Community Section (alternating background)
  └── Photo + Events list
  └── Testimonial

Support Section
  └── 3-column grid (Membership, Volunteer, Donate)
  └── Sponsor logos

Footer (Pine Green background)
  └── 4-column grid with links
```

### Spacing Scale
```
--space-xs:  0.25rem  (4px)
--space-sm:  0.5rem   (8px)
--space-md:  1rem     (16px)
--space-lg:  1.5rem   (24px)
--space-xl:  2rem     (32px)
--space-2xl: 3rem     (48px)
--space-3xl: 4rem     (64px)
```

---

## Photography Guidelines

### Subject Priority
1. **People in Action** - Families skiing, volunteers grooming, children learning
2. **The Landscape** - Trail views, lodge building, sunrise/sunset
3. **Details & Moments** - Equipment, hot drinks, trail signs

### Visual Style
- Natural, soft lighting (golden hour preferred)
- Slightly warm color temperature
- Candid over posed
- Include environmental context

### Don'ts
- Stock photo aesthetics
- Extreme close-ups of faces
- Only expert-level skiers
- Over-processed HDR effects

---

## Voice & Tone

### Be a Helpful Neighbor
- "Join us" not "Sign up now!"
- "Support the trails" not "Donate today!"
- "Learn more" not "Act fast!"

### Be Specific and Honest
- "Trails groomed this morning" not "Excellent conditions!"
- "14 of 22 trails open" not "Most trails open"

---

## File Structure

```
src/
  ├── index.css      # Design tokens, base styles, utilities
  ├── App.css        # Component styles
  ├── App.jsx        # Homepage layout & components
  └── main.jsx       # Entry point

public/
  └── favicon.svg    # Site icon
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

*Version 1.0 | Fort Kent Outdoor Center | North Woods Community Lodge Theme*
