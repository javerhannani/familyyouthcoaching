# Handoff: Family & Youth Coaching — Fatima Elouahmani

## Overview
A single-page marketing site (NL) for **Fatima Elouahmani**, an independent Family & Youth Coach who works with young people (ages 12 – 27) and their families. The site has one continuous scrolling page with four sections: Hero, About, Services, Contact. Goal: a calm, professional, editorial feel that makes a young person or parent feel comfortable reaching out for an introductory conversation.

The chosen direction is **Variant A — Editorial Calm**: warm cream background, large Instrument Serif headlines, a soft green accent, and lots of white space. It should feel like a thoughtful magazine spread, not a typical "coaching" website.

## About the Design Files
The files in this bundle are **design references created in HTML** — high-fidelity prototypes that show intended look, layout, type scale, color, and micro-interactions. **They are not production code to ship directly.**

The task is to **recreate these designs in the target codebase's existing environment** (React, Next.js, Astro, Vue, plain HTML — whatever the project uses) using its established patterns, component conventions, routing, asset pipeline, and accessibility primitives. If there is no existing environment yet, pick the framework that best fits the project (a static-site generator like Astro or Next.js with `output: static` is a sensible default for a marketing single-pager like this) and implement the designs there.

The current content is **placeholder copy and structure** — the user (Fatima) will provide final copy, photography, and brand details during implementation. Build the components in a way that makes those swaps trivial.

## Fidelity
**High-fidelity (hifi).** Pixel-perfect mockup with final colors, type, spacing, and interaction behaviour. Recreate the UI as closely as possible using the codebase's existing libraries and patterns. Where the codebase already has a button, link, or section primitive, prefer that — but match the visual spec exactly.

## Screens / Views

There is **one page**, scroll-based, with anchor navigation between four sections.

### 1. Top navigation (fixed)
- **Position**: fixed top, full width, 18px vertical padding, horizontal padding `clamp(20px, 4vw, 64px)`.
- **States**:
  - Default (at top of page): transparent background, no border.
  - Scrolled (>30px scrollY): translucent cream background `rgba(247,243,236,.82)`, `backdrop-filter: saturate(140%) blur(14px)`, 1px bottom border `#d9d2c2`. Transition: `.35s ease`.
- **Left**: Brand lockup — a 24×24 circular "mark" (radial gradient green → dark green) followed by the name "Fatima Elouahmani" in Instrument Serif 22px.
- **Center**: nav links "Over mij" · "Diensten" · "Contact" — Geist 14px, color `#5c574e`, 30px gap, with an underline that animates from left to right on hover (1px, `#1a1815`, `.35s ease`). Hidden below 760px.
- **Right**: pill CTA "Plan kennismaking" — 13px, 9×16 padding, 1px `#1a1815` border, fully rounded. On hover: fill becomes `#1a1815`, text becomes cream.

### 2. Hero
- **Padding**: `160px var(--pad) 90px` top/bottom (top accounts for fixed nav). Max-width 1280px, centered.
- **Eyebrow**: "Family & Youth Coaching · Sinds 2019" — uppercase, 12px, letter-spacing .18em, color `#5c574e`, preceded by a 24×1px ink-soft hairline.
- **Headline**: `Family<br/>& Youth Coaching` — Instrument Serif, `clamp(54px, 9vw, 148px)`, line-height .95, letter-spacing -.02em, 24px margin-top. The word **"Coaching"** is italic and rendered in accent green `rgb(78, 168, 115)`.
- **Hero row** (60px margin-top, 2-col grid, 60px gap, collapses to 1col under 860px):
  - **Left — lede**: `clamp(18px, 1.6vw, 22px)`, line-height 1.5, max 46ch. Body color (ink). The phrase "12 t/m 27 jaar" is bold.
  - **Right — meta**: vertical stack, 10px gap, 13px, soft-ink. Three lines: "**Locatie** · Praktijk & online · Nederland" / "**Talen** · Nederlands · Engels" / "**Voor** · Jongeren · Ouders · Gezinnen". Labels in bold ink.
- **CTA row** (50px margin-top, 14px gap, wraps):
  - **Primary**: "Plan een kennismaking →" — solid ink fill, cream text, 14px, 14×22 padding, rounded pill. Hover: fill becomes accent green; arrow translates 3px right.
  - **Ghost**: "Bekijk diensten" — 1px ink border, no fill. Hover: fill becomes ink, text cream.
- **Marquee keywords strip** (60px margin-top, full width inside hero):
  - 1px hairlines top/bottom (`#d9d2c2`), 20px vertical padding, fading mask at left/right edges.
  - One single line of italic Instrument Serif keywords (`clamp(22px, 2.6vw, 34px)`, soft-ink), separated by 14px green `✦` glyphs (in Geist sans, the four-pointed star is rendered as the unicode character — keep as text, not SVG).
  - Keywords (NL): "Zelfvertrouwen ✦ Verbinding ✦ Regie ✦ Persoonlijke groei ✦ Communicatie ✦ Identiteit ✦ Eigen pad ✦ Veilige ruimte ✦".
  - Implementation: a flex track containing the keyword span **twice** at `width: max-content`, animated with `@keyframes marquee { to { transform: translateX(-50%); } }` over 42s linear infinite. The duplicate is what makes the loop seamless.

### 3. About — `#about`
- Section padding 120px top/bottom. Background stays cream (`#f7f3ec`).
- **Section header** (60px bottom margin, 2-col grid 200px/1fr):
  - Eyebrow "01 — Over mij" (Geist Mono 12px uppercase, letter-spacing .16em, soft-ink).
  - Heading "*Even* kennismaken." — Instrument Serif `clamp(40px, 5.5vw, 78px)`, line-height 1, "*Even*" in italic.
- **Body** (max-width 880px, 24px vertical rhythm):
  - Lead paragraph (Instrument Serif, 22px): introduction of Fatima.
  - 2× body paragraphs (Geist 17px, line-height 1.6).
  - **Signature line**: "Fatima Elouahmani" in Instrument Serif italic 32px, color accent green, 14px margin-top.
  - **Credentials grid** (30px margin-top, 2-col, 24px gap, 1px top border, 24px padding-top): four label/value pairs — "Specialisatie / Jongeren & Gezin", "Aanpak / Persoonlijk · Praktisch", "Talen / Nederlands · Engels", "Sinds / 2019". Labels are Geist 11px uppercase soft-ink; values are Instrument Serif 22px.

### 4. Services — `#diensten`
- Section padding 120px top/bottom. Background switches to **bg-2** (`#efe9de`) for visual rhythm against the cream hero/about.
- **Section header**: "02 — Diensten" + "Wat ik *aanbied*." (italic on "aanbied").
- **Service rows**: a stacked list (1px hairlines top/bottom of the list, hairline between each row). Three rows. Each row is a 4-col grid (`80px 1fr 1.4fr 200px`, 32px gap, 36px vertical padding) that collapses to a single column under 860px.
  - **Col 1 — number**: "001" / "002" / "003" in Geist Mono 13px soft-ink.
  - **Col 2 — title**: Instrument Serif `clamp(28px, 3.4vw, 42px)`, line-height 1.05.
  - **Col 3 — body**: Geist 15px line-height 1.6 soft-ink, with key phrases bolded in ink.
  - **Col 4 — meta**: a pill `<span class="tag">` (5×10 padding, 1px line border, fully rounded, 11px, cream bg) and a soft-ink helper line beneath it.
  - **Hover state**: row pads in 18px on both sides (`.35s ease`), and a 3px-wide green accent bar slides in from the left edge (`.4s ease` on width).
- **Service content** (final copy comes from Fatima — current text is placeholder, keep structure):
  - 001 — **Jongerencoaching** · "12 — 27 jaar" tag · "1-op-1 · Praktijk of online".
  - 002 — **Gezinscoaching** · "Hele gezin" tag · "Op locatie of bij u thuis".
  - 003 — **Oudergesprekken** · "Individueel of duo" tag · "Op afspraak".
- **Approach card** (80px margin-top, 60px padding, 1px line border, 4px radius, bg cream): a 2-col grid (collapses under 760px).
  - Left: a pull-quote in Instrument Serif `clamp(28px, 3vw, 40px)`, line-height 1.15, with the phrase "echte gesprekken" italic in accent green.
  - Right: a vertical list of three "pillars", each a 6×6 accent-green dot followed by a bold label and a 14px soft-ink description. (Persoonlijk / Praktisch / Verbindend.)

### 5. Contact — `#contact`
- Section padding 120px top, 60px bottom. **Background flips to dark ink (`#1a1815`)**; text becomes cream `#f4efe5`. This is the only inverted section.
- **Section header**: "03 — Contact" (soft cream) + "Laten we *praten*." (italic on "praten").
- **Lead paragraph** (Instrument Serif `clamp(28px, 3.4vw, 44px)`, line-height 1.15, max 22ch) with the phrase "iets voor jou of je gezin is?" rendered italic in accent green.
- **Big mail link** (50px margin-top, 1px hairlines top/bottom in `rgba(244,239,229,.18)`, 34px vertical padding):
  - Tiny label "Stuur een bericht" (11px uppercase, .18em tracking, soft cream).
  - Email address in Instrument Serif `clamp(32px, 5vw, 64px)` followed by an arrow that translates 8px on hover. On hover the whole block also pads in 14px and the border + text shift to a lavender `#c8b6ed`.
- **Footer**: 1px top divider, 30px vertical padding, flex space-between. Left: "© 2026 Fatima Elouahmani · Family & Youth Coaching". Right: mail link and "Boven ↑" anchor.

### 6. Back-to-top button
- Fixed bottom-right (22px inset), 44×44 circle, ink fill, cream arrow. Hidden by default. Fades in (`.3s`) once `scrollY > 600`. Smooth-scrolls to `#top`.

## Interactions & Behavior

- **Smooth scrolling**: `html { scroll-behavior: smooth; }` for all in-page anchor jumps.
- **Sticky nav style toggle**: on every scroll event, toggle `.scrolled` on the fixed nav when `window.scrollY > 30`. Toggle `.show` on the back-to-top button when `scrollY > 600`. Use `{ passive: true }` for the listener.
- **Fade-in on intersect**: every element with class `.fade` starts at `opacity: 0; transform: translateY(20px)`. An `IntersectionObserver` (threshold .12) adds class `.in` to fade them in (`opacity: 1; transform: none`) over `.9s ease`. `.d1` / `.d2` / `.d3` / `.d4` modifier classes add 80ms/160ms/240ms/320ms transition delays for staggered reveals (used on hero children and section bodies). The observer should unobserve after the first reveal.
- **Marquee animation**: pure CSS keyframe (`translateX(0) → translateX(-50%)`) at 42s linear infinite. Respect `prefers-reduced-motion: reduce` — set `animation: none` for that media query in your implementation (the prototype does not yet, but production should).
- **Link/button hover transitions**: 200–250ms ease on transform/color/background, as described per element above.
- **Service row hover**: padding-left and padding-right both transition to 18px over `.35s ease`; a `::before` pseudo-element (positioned absolute, full height, 0 width) transitions its width to 3px over `.4s ease`.

## State Management
This is a static marketing site — **no app-state required**. The only runtime state is DOM/UI:
- `nav.classList.toggle('scrolled', …)` based on scroll position.
- `bttop.classList.toggle('show', …)` based on scroll position.
- `IntersectionObserver` toggling `.in` on fade-in elements once.

If recreating in a component framework, model each of those as `useEffect`s / scroll listeners with cleanup — don't pull in a heavyweight animation library, the vanilla approach is exactly what the design needs.

## Design Tokens

### Color
| Token | Value | Use |
|---|---|---|
| `--bg` | `#f7f3ec` | Page background (cream) |
| `--bg-2` | `#efe9de` | Alternate section bg (services) |
| `--ink` | `#1a1815` | Primary text, dark contact section bg |
| `--ink-soft` | `#5c574e` | Secondary text, meta, eyebrows |
| `--line` | `#d9d2c2` | Hairlines, dividers, borders |
| `--accent` | `rgb(78, 168, 115)` | Headline emphasis, signature, dots, hover fills |
| `--accent-ink` | `#ffffff` | Reserved (white text on accent) |
| `#f4efe5` | — | Cream used as text on dark contact section |
| `#c8b6ed` | — | Lavender used on contact mail hover |

### Type
- **Display / headlines**: `Instrument Serif`, 400 weight (with italic). Used for h1/h2/h3, lead paragraphs, signatures, big mail address, credentials values, pull quote, marquee.
- **Body / UI**: `Geist`, weights 300/400/500/600. Used for paragraphs, nav, buttons, body copy.
- **Mono**: `Geist Mono` — Used for eyebrow numbers ("01 — Over mij"), service numbers, mail label, footer copyright.
- Type scale uses `clamp()` extensively — see per-element specs above.
- Letter-spacing: headlines `-.02em` to `-.01em`. Eyebrows + meta uppercase `.14em` to `.18em`.

### Spacing
- Page max width: `1280px`.
- Page horizontal padding: `clamp(20px, 4vw, 64px)`.
- Section vertical padding: `120px` top/bottom (`130px` on Variant C — Variant A uses 120px).
- Hero top padding: `160px` (accounts for fixed nav).
- Section-header bottom margin: `60px`.
- Card/component internal padding: `60px` (approach card), `36px` vertical (svc row).

### Radius
- Pills / buttons / tags: `999px` (fully rounded).
- Cards / images / mail block: `4px`.
- Brand mark: `50%`.

### Shadow
- None used; the design is intentionally flat with hairlines.

### Motion
- Nav style toggle: `.35s ease`.
- Fade-in: `.9s ease` with 80ms stagger.
- Button hover: `.20s–.25s ease`.
- Service row padding hover: `.35s ease`, accent bar `.4s ease`.
- Marquee: `42s linear infinite`.

## Assets
- **Fonts**: Google Fonts — `Instrument Serif` (regular + italic), `Geist` (300, 400, 500, 600), `Geist Mono` (400, 500). Linked from `fonts.googleapis.com` in the prototype; in production prefer self-hosting via `@fontsource` (or the framework's font primitive, e.g. `next/font`) for performance + privacy.
- **Imagery**: the prototype uses a diagonal-stripe SVG placeholder for the hero image strip. **The user (Fatima) needs to provide a real photograph** — a warm, natural portrait or environmental shot fits the editorial mood best. Plan one hero image and consider a smaller portrait for the About section (currently text-only).
- **Icons**: none. The `✦` in the marquee is a Unicode character (U+2726). No icon library needed.
- **Brand mark**: the 24×24 circular dot in the nav is a CSS radial gradient — keep as-is or swap for a real logo if/when one exists.

## Files
- `Variant A - Editorial Calm.html` — the complete single-file prototype with all sections, styles, and JS. This is the canonical reference.
- `screenshots/` — rendered captures of each section, for quick visual reference:
  - `01-hero.png` — hero (eyebrow, headline, lede + meta, CTAs, keyword marquee)
  - `02-about.png` — about section (lead, signature, credentials grid)
  - `03-services.png` — services list with 3 rows
  - `04-approach.png` — approach pull-quote + pillars card
  - `05-contact.png` — dark contact section + footer

## Notes for the developer
- **Language**: the site is **Dutch**. Keep `<html lang="nl">`. Final copy will come from the user — treat current text as placeholder structure, not final wording.
- **Accessibility**: prototype uses semantic landmarks (`<nav>`, `<header>`, `<section>`, `<footer>`). Maintain those. The fade-in pattern must not delay content for users with `prefers-reduced-motion: reduce` — gate the IntersectionObserver behavior on that media query and render content visible by default. Same for the marquee animation.
- **SEO**: marketing site for a real practice — make sure the production build emits proper `<title>`, `<meta name="description">`, OpenGraph tags, and a sitemap. Likely also wants a contact form alternative to `mailto:` eventually.
- **Form / contact**: currently a single `mailto:` link. If a contact form is desired later, design will need a follow-up pass.
- **Responsive**: prototype has breakpoints at 860px (hero row → stacked, services → stacked), 760px (nav links hidden, approach card stacks), and 600px (footer stacks). Match those.
