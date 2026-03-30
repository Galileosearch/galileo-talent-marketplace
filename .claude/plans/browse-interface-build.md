# P4 Talent Marketplace — Browse Interface Build Plan

## Context
P4 repo is scaffolded and on GitHub. Now building the browse interface and profile cards matching Damien's Framer mockups, styled identically to P1 (salary.galileosearch.com.au). The marketplace is invite-only for certified Anthropic specialists — more Big 4 consulting than generic job board.

**Skills applied:** ui-ux-pro-max, responsive-design, tailwind-v4-shadcn, verification-before-completion

## Design Decisions

### Styling: Match P1 Exactly
- **Header:** Glass navbar (sticky, blur backdrop, `rgba(15,23,42,0.92)`), Galileo logo with animated teal O glow, "About" + "Sign In" links
- **Footer:** Navy bg, 3-column grid (brand/contact, platform links, company links), cyan gradient CTA button
- **Theme:** Navy `#0F172A`, Galileo blue `#06b3e8`, accent teal `#47A5D9`, Montserrat font
- **Glass cards:** `glass-card` class with shimmer hover effect from P1
- **CTA buttons:** `bg-gradient-to-r from-[#06b3e8] to-[#0595c2]` with glow shadow

### UX: Hatch Patterns Adapted for Specialist Marketplace
- **LinkedIn import for talent onboarding** — reduce friction for profile creation
- **Gated detailed profiles** — browse cards visible publicly, full profile requires auth
- **Structured taxonomy** — 10 roles across 2 tiers, not freeform tags
- **Progressive disclosure** — card shows headline info, click reveals full profile

### Key Differences from Hatch (We're More Exclusive)
- Invite-only (no open signup)
- "Galileo Reviewed" badge = 6-step verification (not self-reported)
- AI assessment scores prominent on cards (Hatch doesn't have this)
- Rate ranges visible (consulting model, not salary hiding)
- Availability calendar (Big 4 bench management)

## Components to Build

### 1. Shared Layout (`layout.tsx`)
Wrap all pages with P1-matching header + footer. Reuse exact P1 code.

### 2. Browse Page (`browse.tsx`) — Full Rewrite
**Layout:**
```
┌─────────────────────────────────────────────────┐
│ [Glass Navbar — P1 style]                       │
├─────────────────────────────────────────────────┤
│ AI Talent Marketplace — Browse Interface        │
│                                                 │
│ [Engineering] [Architecture] [Change] [Data]    │  ← Role filter pills
│ [PM] [Config] [Security] [Integration]          │
│                                                 │
│ 24 Candidates    ≡ Sort  ▼ Seniority  ▼ City   │  ← Count + filters
│                                                 │
│ ┌────────────┐ ┌────────────┐ ┌────────────┐   │
│ │ White card  │ │ White card  │ │ White card  │  │  ← 3-col grid
│ │ on navy bg  │ │ on navy bg  │ │ on navy bg  │  │
│ └────────────┘ └────────────┘ └────────────┘   │
│ ┌────────────┐ ┌────────────┐ ┌────────────┐   │
│ │            │ │            │ │            │    │
│ └────────────┘ └────────────┘ └────────────┘   │
│                                                 │
│ [Footer bar: X Verified · filter pills · AI     │
│  Matching note · GALILEO SEARCH logo]           │
├─────────────────────────────────────────────────┤
│ [Footer — P1 style]                             │
└─────────────────────────────────────────────────┘
```

### 3. Profile Card Component (`talent-card.tsx`)
**White card on dark navy background** (from mockups):
```
┌─────────────────────────────────────────┐  white bg
│                                         │  rounded-xl
│  [Avatar]  Name              (94%)      │  border with
│            Role Title         ↑ score   │  teal accent
│            [Senior]  📍 City  ring      │
│                                         │
│  [Active]           [Request Interview] │  green/amber
│  ✓ Galileo Reviewed                     │  badges
└─────────────────────────────────────────┘
```

**Card details:**
- White background (`bg-white`) with subtle border
- Left: Avatar placeholder (rounded, bordered in teal)
- Center: Name (bold), role subtitle, seniority pill, location with pin icon
- Right: Circular score badge with teal ring (percentage inside)
- Bottom: Availability status (green=Active, amber=Available Soon) + "Galileo Reviewed" + "Request Interview" CTA

### 4. Filter Bar Component (`talent-filters.tsx`)
- Role category pills (color-coded like mockup: teal, blue, green, orange)
- Candidate count
- Sort dropdown (score, name, availability)
- Seniority filter
- Location filter

### 5. Profile Detail Page (`profile.tsx`) — Full Rewrite
Match the Sarah Chen profile card mockup:
- Header: Avatar + name + role + seniority + location + years
- Tags: Domain, pillar, availability, employment type
- AI Assessment Score: Large number + bar + label (Exceptional/Strong/etc)
- Match Score: Circular ring with percentile
- Domain Expertise: Radar chart (5 axes)
- Verified Skills: Skill bars with proficiency % + level badges
- Experience Highlights: Company name + role + duration
- AI Insight: Green box with AI-generated summary
- Verification badges: CV, References, Background, Portfolio (green checkmarks)
- CTAs: "Schedule Interview" + "View Full Profile"

### 6. Seed Data (`seed-talent.ts`)
10 realistic profiles matching the 10 role categories with Anthropic-relevant backgrounds.

## Files to Create/Modify

### New Files (in `c:\Users\damie\galileo-talent-marketplace\packages\frontend\src\`)
```
components/layout/header.tsx         — P1 glass navbar (exact copy)
components/layout/footer.tsx         — P1 platform footer (exact copy)
components/layout/layout.tsx         — Wrapper with header + footer
components/talent/talent-card.tsx    — Browse card component
components/talent/talent-filters.tsx — Filter bar with pills
components/talent/score-badge.tsx    — Circular score ring
components/talent/status-badge.tsx   — Availability badge
lib/seed-data.ts                     — 10 mock talent profiles
lib/role-config.ts                   — 10 roles with metadata
```

### Files to Modify
```
pages/browse.tsx                     — Full rewrite with card grid
pages/profile.tsx                    — Full rewrite with profile detail
pages/landing.tsx                    — Add header/footer layout
index.css                            — Add P1 glass effects + logo animation
App.tsx                              — Wrap routes in Layout
```

## CSS to Port from P1
Copy these exact CSS classes from P1's `index.css`:
- `.glass-navbar` — backdrop blur + dark bg
- `.glass-card` — shimmer hover effect
- `.galileo-o` — animated teal glow circle (28px nav)
- `.galileo-o-hero` — larger hero version (50-60px)
- `@keyframes pulse-teal` — glow pulse animation

## Seed Data (10 Profiles)

| Name | Role | Seniority | Location | Score | Availability |
|------|------|-----------|----------|-------|-------------|
| Sarah Chen | Integration Engineer | Senior | Sydney | 94 | Active |
| James Wu | Solutions Architect | Lead | Melbourne | 91 | Active |
| Priya Sharma | Data & Analytics Engineer | Senior | Brisbane | 87 | Available April |
| Michael Torres | AI Project Manager | Senior | Sydney | 92 | Active |
| Emma Richardson | Change & Adoption Manager | Lead | Melbourne | 89 | Active |
| David Kumar | Integration Engineer | Mid | Perth | 85 | Available Soon |
| Lisa Zhang | Cowork Config Specialist | Senior | Sydney | 88 | Active |
| Alex Nakamura | Security & Governance | Lead | Canberra | 93 | Engaged |
| Sophie Martin | AI Trainer / Prompt Engineer | Senior | Adelaide | 86 | Active |
| Ryan O'Brien | Enterprise Integration Dev | Senior | Sydney | 90 | Active |

## Accessibility Requirements (from skills)
- Cards: `role="article"` with visible focus ring
- Score badges: `aria-label="Assessment score 94 percent"`
- Filter pills: keyboard navigable with `aria-pressed`
- Availability: color + text (not color alone)
- Touch targets: ≥ 44px on mobile
- Text contrast: ≥ 4.5:1 (white cards on navy ✓)
- Focus order: left→right, top→bottom

## Responsive Breakpoints
- **Mobile (base):** 1 column, 16px padding
- **md (768px):** 2 columns
- **lg (1024px):** 3 columns (target layout from mockups)

## Verification
1. `npx tsc --noEmit` — zero errors
2. `pnpm dev` — servers start, browse page renders
3. Visual check: header/footer match P1 exactly
4. 10 profile cards render in 3-column grid
5. Filters work (role, seniority, location)
6. Mobile responsive (1 column at 375px)
7. Profile detail page renders with all sections
