# Client Document Update

_Started 2026-05-08 06:37 UTC_

---

## User

Regarding Big ask to iterate: received the following message from the client: Kindly make a minor update on both documents: the expected number of delegates should read 8,000+, not 5,000+ (that was my error). This is the only information we have right now we will iterate as and when we get further information.

## Assistant

_[tool: grep]_

_[tool: list_files]_

_[tool: grep]_

_[tool: list_files]_

_[tool: list_files]_

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

_[tool: run_script]_

_[tool: list_files]_

_[tool: grep]_

_[tool: grep]_

_[tool: snip]_

_[tool: run_script]_

_[tool: run_script]_

Now let me update the design-system source files (StatBand, Hero, README, preview, export bundle) so the change stays consistent across the project and doesn't regress next time we rebuild.

_[tool: grep]_

All clean — no `5,000+` remains anywhere in the project. Let me surface the updated standalone deliverable so you can verify it visually.

_[tool: done]_

Updated both deliverables:

- **`uploads/wis_website.html`** — 2 occurrences swapped (hero chip + stat band).
- **`uploads/pavilion floor plan _standalone_.html`** — 1 occurrence swapped (delegate meta in the bundled template).

I also propagated the same change through the design-system sources (StatBand, Hero, README, preview cards, export bundle) so the figure stays consistent if anything is rebuilt from source. No other content touched.

## User

Do we need these at all, I wanted the website to be engaging and interactive, it must be responsive and adaptive for all devices - has this been taken into consideration? Is the following required or not? Can the 3D pop-out hover — booth tiles lift, scale up, and cast a layered shadow when hovered
Click to select — clicking a booth locks it in a popped state with a gold glow and bounce animation; click another (or empty space) to release

## Assistant

_[tool: snip]_

_[tool: grep]_

_[tool: grep]_

Quick answers, then it's your call on what to do:

**Responsive / adaptive — yes, partially built in.**
The current site already has breakpoints at `900px` (tablet) and `480px` (phone): the floor-plan grid collapses from 6 to 3 columns, package cards stack to one column, the stat band drops from 4-up to 2-up, nav padding tightens. The tooltip modal, hero, and section paddings are fluid. **What's NOT yet covered:** a true mobile nav (hamburger), touch-friendly booth interactions (hover doesn't exist on touch — we'd want tap-to-open the tooltip), and the floor-plan readability at narrow widths (booth labels get cramped). I'd recommend one focused pass to harden mobile/tablet before launch — not a rebuild, just gap-filling.

**3D pop-out hover + click-to-select — your call. My recommendation: keep one, drop the other.**

| Feature | Verdict | Why |
|---|---|---|
| 3D hover lift + layered shadow | **Keep, but tone down.** Already partially implemented (`scale(1.03)` + colored shadow). A subtle Y-axis lift + shadow gives the floor plan a tactile "architectural model" feel that matches the ceremonial brand. | It's discoverable, signals "this is interactive," and reads well on desktop. |
| Click-to-select with **gold glow + bounce** | **Drop the bounce, keep selection.** A bouncy spring animation reads playful/SaaS — wrong tone for a Federal Government investment summit. A calm "selected" state (gold ring, subtle shadow lift, tooltip pinned open) does the same job without breaking the formal voice. | Selection itself is genuinely useful on mobile (replaces hover) and for "send this booth via Enquire". The *bounce* is the part that fights the brand. |

**TL;DR:** the *capability* (hover lift + click-to-select) is worth having — especially because click-to-select doubles as the mobile interaction. The *theatrics* (3D pop-out, bounce, gold glow) should be restrained to match the state-formal voice. Want me to spec this out concretely (a single tweakable mock showing toned-down vs. theatrical) before committing?

## User

Let's include what's not covered yet, and go with recommendation - 'd recommend one focused pass to harden mobile/tablet before launch — not a rebuild, just gap-filling.

## Assistant

_[tool: snip]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: snip]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Mobile/tablet hardening landed. Summary of what's now in `uploads/wis_website.html`:

**Navigation**
- Hamburger button + slide-down drawer below 900 px (with Escape and tap-outside to close).
- Body scroll-locks while drawer is open.

**Booth interactions**
- Hover lift toned down to `translateY(-3px) scale(1.025)` with calm colored shadow (no theatrics).
- New `.selected` state: gold ring + same gentle lift, no bounce. Click locks; click again (or click empty space / press Esc / press × in tooltip) releases.
- Hover-only effects gated behind `(hover: hover) and (pointer: fine)` so they don't trigger on touch.

**Tooltip**
- Becomes a pinned panel with a dedicated **Enquire About This Booth →** CTA and close button when locked (replaces the old "click = auto-email" behaviour, which was hostile on mobile).
- On screens ≤ 900 px, snaps to a centered bottom sheet with max-height + scroll, instead of trying to follow the cursor.

**Floor plan readability**
- New breakpoints at 1024 / 600 / 380 px. Below 600 px the grid drops to 2 columns and large/small booths normalize to single cells so labels and prices stay legible.
- Hint copy auto-swaps from "Hover for details" to "Tap any booth for details" on touch devices.

## User

One last thing the full name of point of contact is Tope Omojayogbe - topeomojayogbe@ukald.com, can we include this where it needs to be added.

## Assistant

_[tool: snip]_

_[tool: grep]_

_[tool: grep]_

_[tool: run_script]_

_[tool: snip]_

_[tool: run_script]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: run_script]_

_[tool: done]_

Added Tope Omojayogbe as the named point of contact across both deliverables:

- **Website footer** — now shows the eyebrow "EXHIBITIONS & SPONSORSHIP — POINT OF CONTACT", the name **Tope Omojayogbe** in the brand serif, and the email below.
- **All mailto links** (nav CTA, drawer CTA, tooltip Enquire button, every package "Enquire Now" link, footer link) — now point to `topeomojayogbe@ukald.com`.
- **Standalone pavilion floor plan** — bundled contact line rewritten to "Point of contact: Tope Omojayogbe · topeomojayogbe@ukald.com" and all mailto links updated.
- Source components (`ui_kits/website/components/Footer.jsx`, `export/src/components/Footer.jsx`) propagated for consistency.

