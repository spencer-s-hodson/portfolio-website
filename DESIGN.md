---
name: Pinned Card Stage
description: A white profile card pinned on a charcoal stage, with two-tone headlines and content scrolling on the right.
colors:
  stage: "#121212"
  stage-raise: "#1a1a1a"
  text: "#f4f2ee"
  text-soft: "#a19d96"
  text-dim: "#66625c"
  card: "#fbfaf7"
  card-ink: "#121212"
  mark: "#ff5a1f"
  mark-deep: "#e2470f"
  lime: "#c8f04a"
typography:
  display: "Bricolage Grotesque 700–800, uppercase for two-tone headlines, tracking -0.03em"
  body: "Geist Sans 400–600"
---

# Design System: Pinned Card Stage

Owner-directed redesign (2026-10-06) in the spirit of sawad.framer.website. It replaces "Quiet Index Folio."

## Layout
- Desktop (≥1024px): a two-column shell, `minmax(300px,360px) | 1fr`, max 1180px wide. The profile card sticks to the top (`top: nav + 2.5rem`) while the content scrolls. On windows shorter than 760px the card scrolls with the page instead.
- Mobile: the card stacks above the content and is not sticky.
- An icon-only pill nav sits fixed at the top center (Home, Projects, Experience, Tech, Blog). Each link shows a tooltip on hover, and the current page gets an orange dot.

## Profile card
A white card with a portrait slot (an orange monogram until `site.portrait` is set). An orange dashed orbit and tail run to the spark badge, followed by the name, a one-line description, and orange social icons. It settles in with a tilt on load. This is the one authored motion moment.

## Type
Every page and section heading is two-tone uppercase display text: a bright first line and a dim (`text-dim`) second line. The body copy (`lede`) is soft text with a max width of about 36rem.

## Color
The stage is charcoal. Orange is the primary accent (feature card, CTA, links, icons). Lime is the secondary accent (one feature card and tool marks). Text on orange is white and set large. Text on lime is ink.

## Components
- Feature cards: an orange card and a lime card with line art, an icon, an uppercase title, and an arrow box.
- Rows: projects (colored initial tile), experience (period on the right), and posts. Linked rows get a raised background on hover.
- Tool grid: raised tiles with a colored two-letter mark.
- Stamp: a filled orange rounded CTA that rotates -2deg on hover.
- Placeholder note: a small uppercase capsule marking provisional copy.

## Rules
- Counts on Home come from `lib/content.ts` array lengths. Never hardcode invented metrics.
- Every motion honors `prefers-reduced-motion`.
