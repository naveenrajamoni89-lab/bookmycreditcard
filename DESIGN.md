---
name: BookMyCreditCard — bank and category pages
description: A clear research desk for inspecting real cards, fees, benefits and requirements.
colors:
  hub-brand: "#2447bb"
  hub-brand-hover: "#19368f"
  hub-action-wash: "#eef2ff"
  hub-ink: "#17243a"
  hub-sub: "#536174"
  hub-border: "#e1e6ed"
  hub-tint: "#f6f8fb"
  hub-white: "#ffffff"
  action-black: "#10110f"
  action-hover: "#30342d"
  action-wash: "#f0f2ec"
  action-border-muted: "#d7ddd2"
  learn-ink: "#1d211e"
  learn-muted: "#59615a"
  learn-rule: "#e1e5df"
  learn-paper: "#f5f6f3"
typography:
  hub-display:
    fontFamily: "Manrope, 'Segoe UI', sans-serif"
    fontSize: "clamp(34px, 3.7vw, 50px)"
    fontWeight: 750
    lineHeight: 1.1
    letterSpacing: "-.035em"
  hub-headline:
    fontFamily: "Manrope, 'Segoe UI', sans-serif"
    fontSize: "clamp(25px, 2.4vw, 34px)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-.025em"
  hub-title:
    fontFamily: "Manrope, 'Segoe UI', sans-serif"
    fontSize: "17px"
    fontWeight: 700
    lineHeight: 1.4
  hub-body:
    fontFamily: "Manrope, 'Segoe UI', sans-serif"
    fontSize: "14px"
    lineHeight: 1.75
  hub-action:
    fontFamily: "Manrope, 'Segoe UI', sans-serif"
    fontSize: "13px"
    fontWeight: 700
  learn-display:
    fontFamily: "Manrope, 'Segoe UI', sans-serif"
    fontSize: "clamp(36px, 4.4vw, 58px)"
    fontWeight: 750
    lineHeight: 1.1
    letterSpacing: "-.035em"
  learn-headline:
    fontFamily: "Manrope, 'Segoe UI', sans-serif"
    fontSize: "clamp(25px, 2.3vw, 31px)"
    fontWeight: 750
    lineHeight: 1.3
    letterSpacing: "-.025em"
  learn-title:
    fontFamily: "Manrope, 'Segoe UI', sans-serif"
    fontSize: "17px"
    fontWeight: 700
    lineHeight: 1.5
  learn-body:
    fontFamily: "Manrope, 'Segoe UI', sans-serif"
    fontSize: "15px"
    lineHeight: 1.85
  learn-action:
    fontFamily: "Manrope, 'Segoe UI', sans-serif"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.6
rounded:
  learn-control: "6px"
  catalogue-action: "30px"
  hub-control: "6px"
  hub-tag: "4px"
  hub-surface: "0px"
spacing:
  learn-guide-gap: "80px"
  learn-section: "56px"
  learn-section-mobile: "42px"
  learn-gutter: "32px"
  learn-gutter-mobile: "18px"
  hub-small: "12px"
  hub-control: "20px"
  hub-gap: "24px"
  hub-section-compact: "40px"
  hub-section: "64px"
components:
  hub-button-primary:
    backgroundColor: "{colors.action-black}"
    textColor: "{colors.hub-white}"
    typography: "{typography.hub-action}"
    rounded: "{rounded.hub-control}"
    padding: "12px 20px"
  hub-button-primary-hover:
    backgroundColor: "{colors.action-hover}"
    textColor: "{colors.hub-white}"
  hub-button-secondary:
    backgroundColor: "{colors.hub-white}"
    textColor: "{colors.action-black}"
    rounded: "{rounded.hub-control}"
  hub-button-secondary-hover:
    backgroundColor: "{colors.action-wash}"
    textColor: "{colors.action-black}"
  learn-button-primary:
    backgroundColor: "{colors.action-black}"
    textColor: "{colors.hub-white}"
    typography: "{typography.learn-action}"
    rounded: "{rounded.learn-control}"
    padding: "11px 20px"
  learn-button-primary-hover:
    backgroundColor: "{colors.action-hover}"
    textColor: "{colors.hub-white}"
  learn-button-secondary:
    backgroundColor: "{colors.hub-white}"
    textColor: "{colors.action-black}"
    rounded: "{rounded.learn-control}"
  learn-button-secondary-hover:
    backgroundColor: "{colors.action-wash}"
    textColor: "{colors.action-black}"
  hub-gallery:
    backgroundColor: "{colors.hub-tint}"
    textColor: "{colors.hub-ink}"
    rounded: "{rounded.hub-surface}"
    padding: "28px"
  hub-tag:
    backgroundColor: "{colors.hub-tint}"
    textColor: "{colors.hub-sub}"
    rounded: "{rounded.hub-tag}"
---

# Design System: BookMyCreditCard research, Learn and shared actions

## Overview

**Creative North Star: "The Clear Decision Sheet"**

This document preserves bank and category research guidance from `src/styles/category-hub-premium.css`, adds the five Learn routes using `src/components/LearnLayout.jsx` and `src/styles/learn-editorial.css`, and documents the shared action palette in `src/styles/action-palette.css`. The shared palette applies throughout the website, including credit card actions, and overrides earlier blue button treatments. Other incumbent layout and brand decisions remain in the sidecar.

The research pages use the established BookMyCreditCard blue identity and local Manrope font. White space, navy text, quiet cool surfaces and thin rules make product differences easy to inspect. Real issuer logos and existing card artwork provide identity; fees, restrictions and requirements carry the information hierarchy.

**Key Characteristics:**

- Black primary actions and white secondary actions with black borders; blue remains available for brand and text accents.
- White Learn reading surfaces, local Manrope, contents navigation and ruled reference content.
- Real issuer marks and contained card artwork with readable product names.
- Open catalogue rows, comparison tables and divided reference facts.
- Restrained controls, visible keyboard focus and native disclosure behavior.

## Colors

The palette separates shared action colors from surface-specific reading and brand colors. Learn adds restrained olive-gray neutrals to a white ground; bank research retains its cool blue accents. These are deliberate additions to the documented system, including the Learn typography roles below.

### Primary

- **Action black** (`action-black`): primary action fill, secondary action text and border, active controls and link/button keyboard focus.
- **Action hover** (`action-hover`): primary hover fill.
- **Action wash** (`action-wash`): secondary hover and restrained selected guide background.
- **Research cobalt** (`hub-brand`) and **Deep research cobalt** (`hub-brand-hover`): existing brand, text and research navigation accents.
- **Legacy blue wash** (`hub-action-wash`): retained incumbent token; shared action controls use `action-wash`.

### Neutral

- **Research ink** (`hub-ink`): headings, names and emphasized fee values.
- **Reference ink** (`hub-sub`): explanations, table details and supporting labels.
- **Section rule** (`hub-border`): section boundaries, rows, tables and reference facts.
- **Cool reference paper** (`hub-tint`): product gallery, table header and selected editorial sections.
- **White** (`hub-white`): primary page and catalogue surface.

- **Learn ink** (`learn-ink`): headings and reference terms.
- **Learn muted** (`learn-muted`): reading copy and supporting labels.
- **Learn rule** (`learn-rule`): glossary, table and section dividers.
- **Learn paper** (`learn-paper`): table headings, source notes and real-card gallery.
- **Muted control border** (`action-border-muted`): shared quiet control borders.

**The Shared Action Palette Rule.** Use black primary buttons and white secondary buttons with black borders throughout the website; adapt dimensions and corners to the surface. Preserve blue for genuine brand and text accents.

## Typography

**Display and Body Font:** locally loaded Manrope with Segoe UI and sans-serif fallbacks, inherited from the existing site stylesheet.

### Hierarchy

- **Display:** `hub-display` for bank and category titles; compact screens at or below 500px use 34px.
- **Headline:** `hub-headline` for editorial section headings.
- **Title:** `hub-title` for benefits and application steps. Catalogue product names use 18px, reducing to 16px at or below 500px.
- **Body:** `hub-body` for research copy; hero introductions use 16px with 1.7 line-height, reducing to 14px at or below 500px. About copy stops at 65ch.
- **Action:** `hub-action` for hero buttons and text actions. Reference labels use 11–12px and remain mixed case.

Fee table values use tabular numerals. No new display typeface is introduced for these pages.

Learn uses the same locally loaded Manrope: `learn-display` for page titles, `learn-headline` for sections, `learn-title` for subsections, and `learn-body` for reading copy capped at 75ch. Header descriptions are 18px/1.65 (16px on mobile), lead copy is 17px/1.85 (16px on mobile), and CTA labels use `learn-action`. Balanced heading wrapping and tabular score/rate values support scanning.

## Layout

The research container is capped at 1240px with 32px outer gutters on each side. The hero uses a two-column 1.1:1 grid with a 72px gap; the catalogue places a 210px filter column beside open product rows. Editorial sections use divided two-column layouts and a 64px vertical rhythm.

At 1100px, gaps and catalogue columns tighten. At 800px, the hero, editorial layouts and catalogue collapse into single columns, the container uses 20px gutters, and section padding reduces to 40px. The three-product gallery becomes one compact row. At 500px, product artwork and names reduce further and the closing action stacks beneath its text.

Section navigation scrolls horizontally on compact screens. Comparison tables preserve an 860px minimum width inside their own keyboard-focusable scroll region; they do not widen the page. Anchored sections leave 90px of scroll clearance for the shared header.

Learn containers also cap at 1240px with 32px gutters. Standard articles pair a sticky 220px contents rail (top: 100px) with an 800px reading column and an 80px gap. The wide shortlist uses a 180px rail and 50px gap; practical guides use a 300px guide index, 70px gap and 750px article. At 1100px the wide shortlist collapses its contents rail into wrapping navigation above the cards and hides the sidebar CTA note. At 1000px standard article and guide columns tighten. At 760px Learn becomes a single column with 18px gutters, wrapping contents links and no sidebar CTA note. The guide index becomes an independently scrolling horizontal strip (minimum item width 235px); the article remains below it. Learn sections have a 56px rhythm, reduced to 42px on mobile, with 100px anchor clearance. The rates table has a 520px minimum width inside a keyboard-focusable horizontal scroll region.

**The Facts Before Flourish Rule.** Put product names, fees, benefits and requirements in the reading path before supporting decoration.

## Elevation & Depth

These research surfaces use no added shadows. Hierarchy comes from spacing, thin borders and cool background changes. Existing card artwork retains its authentic product appearance. Gallery artwork moves upward by 3px on hover over 0.2s; controls change background over 0.15s. Reduced-motion preferences disable these transitions.

Learn adds no shadows or gradients. Open rules, white space and occasional flat paper backgrounds establish hierarchy. Learn CTA background transitions take 0.15s and are disabled for reduced motion.

## Shapes

Sections, tables and the product gallery are square and flat. Buttons have restrained control corners (`hub-control`); informational tags use the smaller `hub-tag` radius. Product images retain their own proportions through `object-fit: contain`.

Learn reference sections are square and ruled. Learn CTAs keep 6px corners, while shared catalogue apply/eligibility controls use 30px pills. The Explore palette sets action color; it does not prescribe one button shape for every surface.

## Components

### Buttons

Primary browse and compare actions use action black, white text, a minimum height of 46px and the padding specified in frontmatter. Their hover background uses action hover and pressing moves them downward by 1px. Catalogue eligibility actions use white, a black border and black text; the hover state uses action wash. Catalogue apply/eligibility controls use 30px corners. Learn primary and outlined CTAs use a minimum height of 44px, 11px 20px padding, a 1px black border and 6px corners. The eligibility form submit uses the black primary treatment even though it shares the catalogue eligibility class. Secondary text routes remain unboxed and underline on hover. Buttons and links omit decorative arrows; directional icons remain only for real navigation or disclosure.

The shared palette gives links and buttons a 2px black focus outline with 4px offset. Learn applies the same treatment to every focus-visible element. Bank research retains cobalt focus for other controls and focusable regions. Native keyboard interaction remains intact.

### Chips

Catalogue tags are informational, not actions. They use cool reference paper, reference ink, small corners and 10px text.

### Cards / Containers

Catalogue products are open rows with thin top rules rather than raised tiles. The hero gallery uses a cool square surface, existing card artwork and compact centered product names. On wider screens the first product spans both gallery columns; mobile shows three evenly sized products in one row. Bank identity uses local logo assets at their original proportions, with issuer text when no usable image is available.

### Navigation

Breadcrumbs wrap as needed. Section links sit on a white surface above a thin bottom rule, with 12px semibold text and cobalt hover emphasis. On compact screens the section navigation scrolls independently. This document does not change shared navigation or flyout rules.

### Comparison and Reference Facts

The comparison table aligns product names, annual fees, benefits and waiver conditions beneath a cool table header. Reference definitions use open divided rows; financial values and labels stay aligned. Conditions and issuer verification notes appear near the data they qualify.

### FAQs

Native `details` and `summary` provide expandable answers, divided by fine rules. Summary text remains readable at 14px with 1.65 line-height and a visible focus state. The native disclosure marker provides state feedback.

### Learn References and Guide Browser

Glossaries are semantic definition lists with divided 190px term columns on desktop and stacked terms on mobile. Billing timelines and score references align labels and explanations without feature boxes. The issuer-rate table uses actual bank logos, scoped headings, tabular values and nearby issuer-verification notes. Learn shortlist rows reuse actual card artwork and open catalogue rows, with explicit loading, error and empty states. Card action rows wrap; mobile card details use one column with actions in a wrapping row.

Five topic links connect card basics, CIBIL score, interest rates, best cards and practical guides. The active topic uses black text and a black bottom rule. Practical guides use `?guide=<id>` links with `aria-current="page"`; a missing or unknown guide selects the first article. Native links preserve browser navigation and shareable article selection. Native Learn FAQ disclosures retain their state markers; the reused FAQ component receives flat, divided Learn styling.

## Do's and Don'ts

### Do:

- **Do** reuse actual issuer logos and existing card artwork with honest missing-image fallbacks.
- **Do** make fees, conditions and requirements inspectable through aligned text, dividers and tables.
- **Do** preserve visible keyboard focus, independent horizontal scrolling and reduced-motion behavior.
- **Do** keep Learn and research layouts scoped to their own surfaces while applying the shared action palette sitewide.
- **Do** use editorial typography, semantic references and real logos/artwork in Learn pages.

### Don't:

- **Don't** replace financial reference sections with decorative gradients, invented illustrations or repetitive raised boxes.
- **Don't** invent product imagery, financial claims or issuer relationships.
- **Don't** overwrite unrelated incumbent layout or brand tokens when extending the documented system.
- **Don't** add decorative arrows to CTAs or replace reading content with repetitive rounded feature boxes.
