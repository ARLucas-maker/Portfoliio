# Design System: Refined Swiss Neo-Brutalism (Lucas A. R.)

## 1. Visual Theme & Atmosphere
A refined, contemporary Swiss-inspired Neo-Brutalist interface engineered for high-performance marketing and data consultancy. It combines geometric confidence, tactile 2px black borders, precise 4px-6px hard shadows, and crisp typography with generous whitespace and smooth micro-interactions. Clean, modern, and perfectly optimized for both desktop and mobile UX.

## 2. Color Palette & Roles
- **Canvas White** (`#FFFFFF`) — Primary background surface and card fill
- **Subtle Surface** (`#F8FAFC`) — Alternating section background and containers
- **Ink Black** (`#09090B`) — 2px structural borders, typography, hard shadows
- **Cobalt Accent** (`#0055FF`) — Primary CTA buttons, interactive highlights, focus states
- **Pastel Highlight** (`#FEF08A`) — Selective badge highlight and category tags (used with restraint)
- **WhatsApp Emerald** (`#10B981`) — Contact badges and direct WhatsApp CTAs
- **Secondary Gray** (`#64748B`) — Subtitles, metadata, and supporting descriptions

## 3. Typography Rules
- **Display / Headlines:** `Hanken Grotesk` — Weights 800/900, tight tracking (`tracking-tight`), structured Title Case / Uppercase balance. Controlled responsive sizes using `text-4xl md:text-6xl`.
- **Body:** `Hanken Grotesk` — Weight 500/600, `text-base md:text-lg`, line-height 1.6, clean contrast against white.
- **Data & Tags:** `JetBrains Mono` — Weight 500/700, `text-xs md:text-sm` for metrics, tools, and technical badges.
- **Banned:** Generic serif fonts, unreadable neon colors, excessive uppercase screaming.

## 4. Component Stylings
- **Borders:** Consistent `border-2 border-black` across all cards, buttons, badges, and navigation.
- **Shadows:** Hard offset shadows `shadow-[4px_4px_0px_#000000]`, expanding to `shadow-[6px_6px_0px_#000000]` on hover.
- **Buttons:** Tactile feedback with active press `active:translate-x-[2px] active:translate-y-[2px] active:shadow-none`.
- **Cards:** White surface with 2px borders and 4px shadows. Internal padding `p-6 md:p-8`.
- **Tags & Pills:** `bg-slate-100 border-2 border-black px-3 py-1 text-xs font-bold font-mono`.

## 5. Layout & Responsive Principles
- **Max Width:** `max-w-[1200px] mx-auto` with `px-4 md:px-8`.
- **Section Spacing:** `py-16 md:py-24`.
- **Grid Systems:** 2-column or 4-column balanced grid that collapses smoothly into single column on mobile (< 768px).
- **Touch Targets:** Minimum 44px on all mobile touchpoints.

## 6. Anti-Patterns (Banned)
- No heavy 4px/8px comic-like borders that clutter the layout.
- No blurry drop-shadows or glow gradients.
- No custom JS cursors that break touch or cause mouse lag.
- No generic/fake data — only official Lucas Antignani Rizzieri credentials (FIAP GPA 8.88, Avivatec, Chili Digital, Gear SEO).
