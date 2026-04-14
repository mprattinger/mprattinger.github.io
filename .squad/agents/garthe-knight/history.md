# Garthe Knight — History

## Project Seed
- Project: Personal homepage and blog for Michael Prattinger
- Stack: Next.js + React + TypeScript + MDX
- Testing: Vitest or Jest for unit tests, Playwright for E2E
- Key test areas: MDX rendering, navigation, blog article loading, responsive layout

## Learnings

### 2026-04-14 — Homepage Baseline for Testing

- Full homepage now available in `src/app/page.tsx` for E2E and visual regression tests
- Header is `'use client'` with mobile hamburger — test responsive menu toggle
- Terminal hero is pure CSS animation — no JS assertions needed for animation itself
- Blog pages: list at `/blog`, article at `/blog/[slug]` — test MDX rendering and `prose-invert` styles
- Build produces 6 static pages; all routes should be tested
