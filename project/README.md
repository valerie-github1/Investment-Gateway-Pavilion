# WIS Abuja 2026 — Design System

Brand and design system for the **World Investment Summit · Abuja 2026** — a 3‑day government investment summit (24–26 June 2026) at the Bola Ahmed Tinubu International Conference Centre. Two public products live under this brand: a **public website / Pavilion Floor Plan** (light cream, formal) and the **Official Programme** for the World Press Conference (deep dark, ceremonial).

## Sources

| Type | Path / URL |
|---|---|
| Logo (master) | `uploads/WIS-logo.jpg` (also `assets/wis-logo.jpg`) |
| Public website + Pavilion floor plan | `uploads/wis_website.html` |
| Standalone Pavilion bundle | `uploads/pavilion floor plan _standalone_.html` |
| GitHub — programme & letterhead repo | `valerie-github1/wis.abuja.2026@main` |
| GitHub — programme HTML | `valerie-github1/wis.abuja.2026/WIS_Abuja_2026_Final.html` |
| GitHub — elegant programme HTML | `valerie-github1/wis.abuja.2026/WIS_Abuja_2026_Elegant_Programme.html` |
| GitHub — letterhead reference | `WIS Letterhead1.jpg`, `WIS Letterhead2.jpg` (in `assets/`) |
| Companion repo (interactive 3D plan) | `valerie-github1/abuja-summit-2026@main` |

> Cross-project / external sources are listed for reference only — do not assume the reader can reach them. All assets used in this system live under `assets/`.

---

## Index

| File / folder | What's there |
|---|---|
| `README.md` | This file. Brand context, content/visual fundamentals, iconography. |
| `SKILL.md` | Agent-Skills compatible entry point — same skill works in Claude Code. |
| `colors_and_type.css` | All color + type CSS variables (light & dark surfaces) and semantic classes. |
| `assets/` | Logos, letterheads, generic imagery. |
| `preview/` | One small HTML card per token group (typography, color, components…). These populate the Design System tab. |
| `ui_kits/website/` | Pixel-faithful recreation of the public website + pavilion floor plan. |
| `ui_kits/programme/` | Recreation of the dark Official Programme document. |

---

## Brand context

- **Event:** World Investment Summit · Abuja · **24–26 June 2026** (3 full days).
- **Convener:** Federal Government of Nigeria (the logo carries the Coat of Arms — eagle, two horses, "Unity and Faith, Peace and Progress").
- **Audience:** 8,000+ global delegates, 60+ nations, heads of state, ministers, sovereign-fund LPs, multinational executives, exhibitors.
- **Tagline / motif:** "Investment Gateway Pavilion." Currency is the Naira (₦).
- **Key surfaces:**
  1. Public website (light cream) — sells exhibition booths in 6 gem-tiered packages.
  2. Pavilion Floor Plan — interactive grid layout where booth tiers sit relative to a central aisle and main entrance.
  3. Official Programme (deep dark) — formal day-by-day schedule with timeline and venue card.
- **Voice posture:** state-formal, ceremonial, aspirational; not casual, never playful.

---

## CONTENT FUNDAMENTALS

### Voice & tone
The voice is **formal, ceremonial, and aspirational** — written as if from the Federal Government addressing investors, dignitaries, and media. It assumes seriousness and importance; nothing is breezy or self-deprecating. Think conference programme + state communiqué, not marketing-blog.

### Person
- **Third person + imperative for instructions.** "Companies and organisations may select more than one booth." "Hover over booths for details." "Click to enquire about this booth."
- **"You" appears sparingly** in calls to action only ("Maximise Your Presence"). Never "I" / "we'll" / "our team."
- **No contractions** except in eyebrow microcopy where needed for fit. "What's Included," "Don't miss" → always "What is included," "Do not miss" preferred.

### Casing
- **Body copy:** sentence case.
- **Eyebrows, section labels, nav links, buttons, badges, legends, footers:** **UPPERCASE WITH WIDE LETTER-SPACING** (2–5 px tracking). This is the dominant ceremonial signal. e.g. `EXHIBITION LAYOUT`, `WHAT'S INCLUDED`, `MAIN PAVILION ENTRANCE`, `ENQUIRE NOW →`.
- **Display headlines:** Title Case with **italic emphasis** on the second word: `Investment Gateway Pavilion`, `Pavilion Floor Plan`, `Exhibition Packages`. The italic word is always the noun being celebrated.
- **British spelling:** "customised", "maximise", "organisation", "programme" (never "program"). Inherited from Nigerian English.

### Punctuation
- **Em-dash and middle-dot** (·) are signature dividers. Used for breath pauses and key-value joins: `WIS · ABUJA · 2026`, `3m × 3m · 3 Full Days`, `Investment Gateway Pavilion · Bola Ahmed Tinubu International Conference Centre · 24–26 June 2026`.
- **En-dash** for date ranges: `24–26 June 2026`.
- **Multiplication sign** for booth dimensions: `3m × 3m` (never `3m x 3m`).
- **Naira symbol** ₦ (`&#8358;`) prefixes every price, no space: `₦2,000,000`.

### Numbers & data
- Always written out with thousands commas. Stat-band numerals use the **Cormorant Garamond serif** at large sizes (44–72px), which is the brand's signature flourish. Labels under numbers are **tiny Cinzel UPPERCASE** with 2.5–3px tracking.
- Counts get the `+` suffix to read aspirationally: `8,000+ Global Delegates`, `60+ Nations Represented`.

### Microcopy patterns
| Pattern | Example |
|---|---|
| Eyebrow above a section title | `EXHIBITION LAYOUT` → `Pavilion Floor Plan` |
| CTA verbs (always present-tense, formal) | `Enquire Now →`, `Maximise Your Presence`, `Explore the Pavilion` |
| Section labels | `WHAT'S INCLUDED`, `IMPORTANT NOTE`, `CENTRAL NETWORKING AISLE`, `MAIN PAVILION ENTRANCE` |
| Tier names | `Emerald Business Suite`, `Sapphire Suite`, `Ruby Showcase Space`, `Opal Display Suite` — `[Gem] [Type] [Suite/Space]`. |
| Limited / scarcity | `LIMITED`, `· Limited Availability`, never `SOLD OUT`. |
| Email contact | `exhibitions@wisabuja2026.gov.ng` is the canonical address. |
| Closing / footer line | `WORLD INVESTMENT SUMMIT · ABUJA 2026` (always upper, dotted). |

### Vibe
Quietly elegant, not flashy. Every word should feel as if it could appear on letterhead. The system rewards restraint: short eyebrow → expressive italic headline → calm sentence-case body → ceremonial uppercase legend.

### **Emoji: never.** Unicode geometric shapes (■ ● ✓ ✕ ▢ □) and currency/sigils (₦ · — × ○ ✦) only. Bullets are gold horizontal rules (`width: 8px; height: 1px`), not characters.

---

## VISUAL FOUNDATIONS

### The two surfaces
The brand operates on two surfaces that share type and gold but invert backgrounds:

| | LIGHT (cream) | DARK (deep) |
|---|---|---|
| Where | Public website, Pavilion Floor Plan, sales | Official Programme, formal documents, press |
| BG | `#F7F6F1` cream | `#08100D` near-black green |
| Primary | Green `#1A4D2E` | Gold `#C9A84C` |
| Body family | DM Sans | Jost (lighter weights, 200–400) |
| Mood | Open, inviting, organised | Ceremonial, intimate, theatrical |

### Color
- **Nigerian green** is the anchor — `#1A4D2E` for hero, CTA, footer; deepened to `#08100D` for the dark surface.
- **Ceremonial gold** is the accent — `#C9A84C` is canonical, with `#B8902A` on cream and `#D4A844`/`#E8C96A` for highlights/glow.
- **Six gem accents** (Emerald, Sapphire, Ruby, Amber, Opal, Topaz) tier the pavilion booths. Each has a deep stem, a light variant, and a tinted bg. They never appear together on a single CTA — only when the entire UI is gem-stratified (floor plan, packages grid).
- Backgrounds layer in three cream tints: `#F7F6F1` → `#EFEDE5` → `#E8E5DB`. Never gradients on body; rare gradients are reserved for thin accent bars (3px on package cards: `linear-gradient(90deg, var(--gem), var(--gem-lt))`).
- **Avoid:** purple-to-blue tech gradients, neon, pastel washes. The brand reads paper / programme, not SaaS.

### Type
- **Cormorant Garamond** — display + numerals. Italic is meaningful (it marks the celebrated noun). Weights 300/400/600/700.
- **Cinzel** — eyebrows, labels, badges, nav, CTAs, legends. Always **UPPERCASE**, always tracked 2–5 px. Caps-only, never lowercase.
- **DM Sans** — body on light surface; Jost on dark (lighter weights).
- **Numerals** are always Cormorant Garamond (lining figures, weight 700) — never sans. This is a brand signature.

### Spacing & layout
- Page max-width: `1300px` content / `920px` programme. Section padding: `64–90px` vertical, `32–40px` horizontal.
- 8-pt grid; small accents on 4-pt (chips, badges).
- Pavilion uses **CSS Grid** with explicit column spans (`grid-column: span 2/3`); aisles are full-width with thin gold/border rules and a centered tracked label.

### Backgrounds & textures
- **Hero on light:** flat green + faint gold radial-ellipse vignette + 60×60 px subtle white grid (1px lines at 1.5% opacity). Restrained.
- **Hero on dark:** flat near-black + two large border-only **orbital rings** rotating slowly (`40s` and `28s`, opposite directions, 1px borders at 6–8% opacity).
- **Floor plan canvas:** white card with a 40 px square grid drawn in 2.5%-opacity green — graph paper / architect plan.
- No photography in the core foundations. The official Coat of Arms inside the logo provides the only "imagery."
- No noise/grain, no hand-drawn illustrations.

### Borders & cards
- Borders are thin (1 / 1.5 px), **never rounded** — square / `radius: 0` is dominant. Pills exist only in the chip component.
- **Card pattern** (booth, package, venue): square corners, 1 px tinted-color border, optional 3 px top accent bar (gradient of two gem shades), inner padding 24–44 px.
- The dark programme card adds an animated **left rail** (2 px green→gold gradient) that fades in on `:hover`.

### Shadows & elevation
- Light surface: `0 2px 20px rgba(26,77,46,0.06)` for resting card; on hover, deepens to `0 8px 32px rgba(<gem>, 0.20)`. Never grey shadows — always tinted to the brand or the gem.
- Dark surface: no shadows. Elevation is communicated by `border-color` shifting from `rgba(201,168,76,0.18)` → `rgba(201,168,76,0.40)` and `background` lightening one step.
- Tooltip: `0 20px 60px rgba(0,0,0,0.15)`, white, 3 px green top-border.

### Hover & press
- **Hover:** `transform: scale(1.03)` for grid cards; `translateY(-4px)` for package cards; **border darkens** + tinted shadow; gradient rail fades in (dark). Cursor on dark surface is a custom 8 px gold dot + 32 px ring (mix-blend-mode difference).
- **Press / active:** color inverts (transparent → solid gem fill, gem text → white). No scale-down. Buttons reverse foreground/background on press (`bg: var(--gem); color: #fff`).
- **Focus:** keep the ring subtle — 1 px gold inset, dotted is acceptable.

### Animation
- **Easing:** `cubic-bezier(0.23,1,0.32,1)` ("ease-out-expo") is the house ease; `cubic-bezier(0.4,0,0.2,1)` for in/out.
- **Durations:** `0.15s` micro, `0.25s` resting hover, `0.55–0.7s` rise-up entrances.
- **Entrance:** `opacity 0 + translateY(20–24px) → 0`, staggered (100/250/400/550/700 ms). Section content uses `IntersectionObserver` to add `.visible`.
- **Decorative:** logo rotates a 1px gold ring at `20s` linear infinite. Background orbital rings rotate at `28s` and `40s`.
- **Pulse:** `LIMITED` chip animates `opacity 1↔0.6` over `2.5s`. No bounces, no overshoot, no spring physics.

### Transparency & blur
- The sticky nav uses `backdrop-filter: blur(12px)` over `rgba(247,246,241,0.96)`. This is the only blur in the system.
- Transparency is used to soften gold (`rgba(201,168,76,0.08–0.40)`) and white (`rgba(255,255,255,0.06–0.20)`) onto the green hero. Never blur-on-photo.

### Imagery vibe
When photography is needed (delegates, venue, Abuja skyline), it should be **warm-balanced, daylit, calm** — golden-hour preferred over harsh sun. Black-and-white acceptable for press portraits. No grain filter, no duotone overlay (the gold/green is layered as text/border, not on the image).

### Layout rules
- **Sticky nav, 64 px tall**, 40 px horizontal padding. Brand on left in Cinzel UPPERCASE 11 px (4 px tracked); links centered, CTA right in green.
- **Section anatomy:** eyebrow (centered) → italic display title (centered) → content. Always in that order.
- **Stats band:** full-bleed green, 4 columns of (gold serif numeral / Cinzel uppercase label).
- **Footer:** green band, gold serif tracked logotype, 3 px gold top border (or `linear-gradient(green/gold/green)` 2px).

### Corner radii
- Default `0`. Badges/inputs `2 px`. Pills only on `chip` (the only round form). Logo lockup uses `circle`. Avoid 8 / 12 / 16 px radii — they read SaaS, not state.

---

## ICONOGRAPHY

The WIS visual system is **deliberately icon-light**. Where icons appear, they are never decorative — they earn their place. There is **no icon font**, **no Lucide / Heroicons import**, and **no emoji** anywhere in the codebase.

### What's actually used
1. **Geometric Unicode glyphs** — the system reaches into Unicode for square/diamond/check/cross/dot marks, sized in Cinzel-adjacent fonts so they read as typographic, not iconic:
   - `■` `▢` `▫` `□` `◇` — booth amenity tiles (branded tent, custom space, table+chairs)
   - `✓` (`&#10003;`) — included items in package checklists, gold or green
   - `✕` (`&#10007;`) — excluded items, faint grey
   - `✦` `✱` `·` — small ceremonial separators in microcopy
   - `●` (`&#9679;`) — chip prefix dot, gem-tier dot
   - `→` (`&rarr;`) — CTA arrow, always trailing the verb
   - `&#9432;` (ⓘ) — info note prefix
   - `₦` — Naira currency, bolded on Cormorant
2. **Hairline geometry drawn directly in CSS:**
   - Bullet markers in the programme are an 8 × 1 px gold rectangle absolutely positioned to the left of each line. Not `list-style: disc`.
   - Aisle / entrance separators are a 1 px line + tracked Cinzel label sandwiched between two `flex: 1` rules.
   - Section dividers: 1 px gradient `linear-gradient(180deg, transparent, gold, transparent)`, height 56 px.
3. **The Coat of Arms inside the WIS logo** (`assets/wis-logo.jpg`) — never extracted, never re-drawn, never used outside the circular logo lockup. Treat as a single artwork.

### Logos
- `assets/wis-logo.jpg` — full lockup (Coat of Arms + green wing wreath + "WORLD INVESTMENT SUMMIT — ABUJA 2026"). Use full lockup at ≥120 px.
- For circular avatars (hero badge), crop to circle, white background, 6 px gold ring, 130 px diameter. See `preview/Card_Logo.html`.
- `assets/wis-letterhead-1.jpg`, `assets/wis-letterhead-2.jpg` — official letterhead reference.

### When you need a missing icon
1. **First** check whether a Unicode glyph + Cinzel/Cormorant treatment will do the job. 90% of the time, yes.
2. If you genuinely need a stroke-icon set (e.g. social, share, calendar in a programme), **link Lucide from CDN at `stroke-width: 1.25`, color `var(--wis-gold-warm)`** — and **flag the substitution** to the brand owner so the next iteration of the system can replace them with custom marks. Lucide's thin geometry is the closest match in the wild. *(No Lucide icons currently in use — flagged for review.)*
3. **Never** generate decorative SVG illustration. If imagery is needed, place a placeholder rectangle and request real artwork.

### Substitution flag
> ⚠ **Open question for brand owner:** Should small UI affordances (close-X, hamburger, share, calendar) keep using Unicode glyphs, or adopt a thin custom mark set? Recommend custom for production.

---

## Open caveats

- **Fonts:** all three brand families (Cinzel, Cormorant Garamond, DM Sans, Jost) are Google Fonts and load over the network. No local `.ttf`/`.woff2` files were provided; Google Fonts is the canonical source. If offline / on letterhead PDF, please provide foundry licenses.
- **Custom icons:** see substitution flag above.
- **Press / portrait photography:** none provided — placeholders only.
- **Product copy** outside the website + programme: not yet defined (newsletter, press release templates, pitch deck).
