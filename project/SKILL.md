---
name: wis-abuja-2026-design
description: Use this skill to generate well-branded interfaces and assets for the World Investment Summit · Abuja 2026 (WIS Abuja 2026), either for production or for throwaway prototypes/mocks/decks. Contains essential design guidelines, colors, type, fonts, brand assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files. The system uses Nigerian green + ceremonial gold on a cream surface (public website, pavilion floor plan) **or** a deep dark surface (official programme). Display type is Cormorant Garamond; eyebrows are Cinzel uppercase tracked; body is DM Sans (light surface) or Jost (dark surface). Numerals are always Cormorant.

Key files:
- `colors_and_type.css` — drop-in CSS variables for both surfaces and semantic classes (.wis-eyebrow, .wis-h1, etc.)
- `assets/` — official logo + letterhead. Never re-draw the Coat of Arms.
- `preview/` — small token cards (type, color, components, brand) you can read for examples of canonical usage.
- `ui_kits/website/` — pixel-faithful website + pavilion floor plan recreation (Nav, Hero, StatBand, PackagesGrid, FloorPlan, Footer).
- `ui_kits/programme/` — dark official programme recreation (ProgrammeHero with orbital rings, VenueCard, DaySection timeline, ProgrammeFooter).

If creating visual artifacts (slides, mocks, throwaway prototypes, posters), copy assets out of `assets/` and create static HTML files for the user to view, importing `colors_and_type.css`. If working on production code, copy assets and read the rules in `README.md` (Content Fundamentals, Visual Foundations, Iconography) to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions about audience and tone, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need. Avoid emoji; avoid SaaS gradients; prefer square corners, tracked uppercase eyebrows, and italic display emphasis on the noun being celebrated.
