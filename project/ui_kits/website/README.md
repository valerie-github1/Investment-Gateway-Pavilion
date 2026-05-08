# Website UI Kit — WIS Abuja 2026

A pixel-faithful recreation of the **public-facing website** + **Pavilion Floor Plan** for the World Investment Summit, Abuja 2026. Light cream surface; Nigerian green / ceremonial gold; six-gem booth tiers.

## Run
Open `index.html` in any browser. No build step.

## Components (`components/`)
| File | What |
|---|---|
| `Nav.jsx` | Sticky 64 px nav with backdrop-blur, brand lockup, gold underline = active. |
| `Hero.jsx` | Green hero with subtle gold radial + grid pattern, rotating logo ring, dual CTA. |
| `StatBand.jsx` | Full-bleed dark-green band, four gold serif numerals + Cinzel labels. |
| `SectionHead.jsx` | Eyebrow → italic display title → 1 px gold gradient divider → optional lede. |
| `PackagesGrid.jsx` | Six gem-tiered package cards. Each card carries a 3 px gradient top accent in its tier hue. |
| `FloorPlan.jsx` | Interactive booth grid on graph-paper canvas, hover-tooltip, legend, central aisle separator. |
| `Footer.jsx` | Green footer with gradient gold rule, brand lockup, four-column meta. |

`App.jsx` wires components together with smooth-scroll nav and a mock enquiry alert.

## Source
Recreated against `uploads/wis_website.html` and `uploads/pavilion floor plan _standalone_.html`. Not 1:1 — focuses on component coverage, the interactive floor-plan tooltip, and the package-tier visual hierarchy.

## Caveats
- The hero's logo ring rotates via CSS keyframes; reduce/disable with `prefers-reduced-motion` if needed.
- Floor plan layout is a representative subset (16 booths). The standalone file includes more — extend `FLOOR_TOP` / `FLOOR_BOTTOM` in `FloorPlan.jsx` to add rows.
- Concierge form is a mock alert — wire to your form service.
