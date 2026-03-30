---
name: skill-review-protocol
description: |
  MANDATORY first step before any implementation task. Review all available project skills and determine which apply to the current task. Produces a skill applicability matrix that guides implementation quality.

  Use at the START of every build task, feature implementation, bug fix, or refactor — before writing any code.
---

# Skill Review Protocol

## Overview

Before beginning any implementation task, you MUST review all available project skills and determine which ones apply. This prevents knowledge waste — skills contain hard-won patterns, error prevention, and best practices that should be systematically applied.

**Core principle:** Review skills FIRST, code SECOND. Every task benefits from the right skills.

## The Protocol

```
BEFORE writing any code or making changes:

1. IDENTIFY: What type of task is this? (see Task Type Matrix below)
2. SCAN: Check each skill against the task type
3. SELECT: List applicable skills with WHERE they apply
4. DOCUMENT: Note skill requirements in your approach
5. APPLY: Reference skill guidance during implementation
6. VERIFY: Confirm skill guidelines were followed
```

## Available Skills (15)

| # | Skill | Trigger Conditions |
|---|-------|--------------------|
| 1 | **tailwind-v4-shadcn** | Any CSS/styling work, component creation, Tailwind config, theme changes |
| 2 | **nodejs-backend-patterns** | Express routes, middleware, server setup, API endpoints |
| 3 | **api-design-principles** | API route design, response formats, versioning, pagination |
| 4 | **react-hook-form-zod** | Forms, validation, multi-step wizards, user input |
| 5 | **tanstack-query** | Data fetching, caching, mutations, server state |
| 6 | **zustand-state-management** | Global state, wizard state, cross-component state |
| 7 | **typescript-advanced-types** | Type definitions, generics, strict mode, type inference |
| 8 | **supabase-postgres-best-practices** | Database queries, RPC calls, RLS, schema design |
| 9 | **error-handling-patterns** | Try/catch, error responses, resilience, retry logic |
| 10 | **verification-before-completion** | Claiming work is done, committing, creating PRs |
| 11 | **ui-ux-pro-max** | UI components, accessibility, color, typography, layout |
| 12 | **responsive-design** | Layouts, breakpoints, mobile-first, container queries |
| 13 | **web-design-guidelines** | UI review, WCAG compliance, design audit |
| 14 | **systematic-debugging** | Bugs, test failures, unexpected behavior |
| 15 | **email-best-practices** | Transactional email, deliverability, compliance |

## Task Type → Skill Matrix

| Task Type | Always Apply | Often Apply | Sometimes Apply |
|-----------|-------------|-------------|-----------------|
| **New UI component** | tailwind-v4-shadcn, ui-ux-pro-max, typescript-advanced-types | responsive-design, web-design-guidelines | tanstack-query |
| **New API endpoint** | nodejs-backend-patterns, api-design-principles, error-handling-patterns | supabase-postgres-best-practices, typescript-advanced-types | — |
| **Form/wizard step** | react-hook-form-zod, tailwind-v4-shadcn, ui-ux-pro-max | zustand-state-management, typescript-advanced-types | tanstack-query |
| **Data fetching** | tanstack-query, supabase-postgres-best-practices | typescript-advanced-types, error-handling-patterns | — |
| **State management** | zustand-state-management, typescript-advanced-types | — | tanstack-query |
| **Bug fix** | systematic-debugging, verification-before-completion | error-handling-patterns | (depends on area) |
| **Styling/layout** | tailwind-v4-shadcn, responsive-design | ui-ux-pro-max | web-design-guidelines |
| **Database query** | supabase-postgres-best-practices | error-handling-patterns | typescript-advanced-types |
| **Email feature** | email-best-practices, nodejs-backend-patterns | error-handling-patterns | — |
| **PDF generation** | nodejs-backend-patterns | error-handling-patterns | — |
| **Completing work** | verification-before-completion | — | — |

## Output Format

At the start of each task, produce a brief skill applicability note:

```
Skills for this task:
- tailwind-v4-shadcn → component styling, @theme tokens
- ui-ux-pro-max → accessibility (focus states, touch targets)
- typescript-advanced-types → interface definitions
```

This keeps skill application deliberate rather than accidental.
