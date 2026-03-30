# Galileo AI Talent Marketplace — Platform 4 of 4

Specialist marketplace of certified Anthropic integration professionals. Invite-only, pre-verified, pre-costed talent for Claude/Cowork enterprise deployments. Big 4 consulting model focused purely on Anthropic ecosystem.

## Four-Platform Ecosystem (Anthropic Partnership)
| # | Platform | Domain | Repo | Status |
|---|----------|--------|------|--------|
| 1 | **Salary Benchmarking** | salary.galileosearch.com.au | SBAITALENT | Production |
| 2 | **Business Case Generator** | framework.galileosearch.com.au | galileo-framework | Production |
| 3 | **Cowork Setup Assistant** | setup.galileosearch.com.au | galileo-cowork-setup | Pre-production |
| 4 | **AI Talent Marketplace** (THIS) | talent.galileosearch.com.au | galileo-talent-marketplace | Build Phase 1 |

All four platforms share the same Supabase instance and auth system.

**Platform integrations:**
- **P1 → P4:** Salary benchmarks inform talent rate ranges; P4 real rates feed back to validate P1 data
- **P2 → P4:** Business cases reference available marketplace talent with real rates instead of estimates
- **P4 → P3:** Marketplace talent (Cowork Config Specialists) deliver P3 Cowork setup for clients
- **P2 → P3:** Exec invites employees from business case → P3 onboards them with Cowork

## Tech Stack
| Layer | Technology |
|-------|-----------|
| Frontend | React 19 + TypeScript + Vite + Tailwind v4 |
| State | Zustand |
| Backend | Express.js + Zod validation |
| Database | Supabase (SHARED instance with P1, P2, P3) |
| AI (Text) | Claude Sonnet 4 (profile analysis, matching, skill extraction) |
| AI (Voice) | ElevenLabs ConvAI (talent assessment interviews) |
| Auth | Supabase Auth (SHARED) + JWT middleware |
| Deploy | Vercel (frontend) + Railway (backend) |

## Monorepo Structure
```
galileo-talent-marketplace/
├── packages/
│   ├── frontend/          # Vite React app → Vercel (port 5175)
│   │   ├── src/
│   │   │   ├── pages/
│   │   │   │   ├── landing.tsx         # Value prop + browse/apply CTAs
│   │   │   │   ├── browse.tsx          # Talent grid with filters
│   │   │   │   ├── profile.tsx         # Individual talent profile
│   │   │   │   ├── admin.tsx           # Talent management dashboard
│   │   │   │   └── apply.tsx           # Talent application form
│   │   │   ├── components/
│   │   │   │   ├── talent/             # Profile cards, filters, badges
│   │   │   │   ├── admin/              # Review, approve, engagement tracking
│   │   │   │   └── shared/             # GalileoNav, shared UI
│   │   │   ├── stores/                 # Zustand stores
│   │   │   └── lib/
│   │   │       ├── api.ts              # Backend API client
│   │   │       ├── role-config.ts      # 10 talent roles, 2 tiers
│   │   │       └── supabase.ts         # Supabase client
│   │   └── .env
│   ├── backend/           # Express API → Railway (port 3004)
│   │   ├── src/
│   │   │   ├── routes/
│   │   │   │   ├── talent.ts           # CRUD + search + availability
│   │   │   │   ├── engagements.ts      # Booking + tracking
│   │   │   │   ├── assessment.ts       # AI talent assessment
│   │   │   │   └── health.ts           # Health check
│   │   │   ├── middleware/
│   │   │   │   └── auth.ts             # JWT middleware (shared auth)
│   │   │   ├── lib/
│   │   │   │   └── talent-scorer.ts    # AI assessment scoring
│   │   │   └── db/supabase.ts
│   │   └── .env
│   └── e2e/               # Playwright E2E tests
├── supabase/migrations/   # P4 table schemas
└── CLAUDE.md
```

## Shared Supabase Database — Access Rules

### Tables P4 OWNS (full read/write/DDL)
- `talent_profiles` — Candidate profiles with roles, rates, verification, AI scores
- `talent_certifications` — Anthropic + other cert tracking per candidate
- `talent_engagements` — Client project assignments with rates + timeline
- `talent_availability` — Daily availability calendar per candidate

### Tables P4 can READ (DO NOT MODIFY)
- `ai_salary_data` — 22,008 salary rows (P1) — for rate benchmarking
- `ai_career_paths` — Career transitions (P1)
- `role_descriptions` — Job specs (P1)
- `workforce_plans` — Business cases (P2) — to link talent to plans
- `maturity_assessments` — Company context (P2)
- `company_type_templates` — Hiring templates (P2)
- `employee_invitations` — Invite status (P3) — to track delivery
- `employee_assessments` — Assessment data (P3)

## 10 Talent Role Categories

### Tier 1: Core Roles (Recruit First)
| # | Role | Domain | Daily Rate |
|---|------|--------|-----------|
| 1 | Anthropic Integration Engineer | Engineering | $800-1,200 |
| 2 | AI Solutions Architect | Architecture | $1,200-1,800 |
| 3 | AI Change & Adoption Manager | Change | $800-1,200 |
| 4 | AI Project/Program Manager | Delivery | $900-1,400 |
| 5 | Cowork Configuration Specialist | Setup | $600-900 |

### Tier 2: Specialist Roles (Add as Demand Grows)
| # | Role | Domain | Daily Rate |
|---|------|--------|-----------|
| 6 | Data & Analytics Engineer | Data | $800-1,200 |
| 7 | Cybersecurity & AI Governance | Security | $1,000-1,600 |
| 8 | Enterprise Integration Developer | Integration | $900-1,400 |
| 9 | AI Trainer / Prompt Engineer | Training | $600-1,000 |
| 10 | IT Support (AI-Enabled) | Support | $500-800 |

## Verification Pipeline (6 Steps)
1. **Anthropic Certification** — Complete free Anthropic training
2. **AI Skills Assessment** — 20-minute conversational AI interview (ElevenLabs)
3. **CV & Work History** — Employment verified, credentials confirmed
4. **Portfolio Review** — Technical work evaluated for quality
5. **Reference Checks** — Professional references contacted
6. **Background Check** — Identity + background screening

After all 6 steps → "Galileo Reviewed" badge on profile.

## Development
```bash
pnpm install          # Install all deps
pnpm dev              # Run both frontend (5175) + backend (3004)
pnpm dev:frontend     # Frontend only
pnpm dev:backend      # Backend only
pnpm test             # Run Vitest unit tests
pnpm test:e2e         # Run Playwright E2E tests
pnpm build            # Build both packages for production
```

## Code Conventions
- Same as P1-P3: verbatimModuleSyntax, import type, strict mode
- API responses: `{ success: true, data: {} }` or `{ success: false, error: "message" }`
- All API routes: `/api/v1/`
- Kebab-case files, PascalCase components
- Tailwind v4: @theme block in index.css, no tailwind.config
- SVG icons only (Heroicons inline) — no emoji icons in UI
- Dark theme: navy background (#0F172A), Galileo blue (#06b3e8) primary
- Match P3 styling: rounded-xl cards, border-white/10, Montserrat font
