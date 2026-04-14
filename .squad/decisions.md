# Squad Decisions

## Active Decisions

---

### Next.js Project Scaffold

**Date:** 2024-01-15  
**Author:** KITT (Tech Lead)  
**Status:** Active

#### 1. `next-mdx-remote` over `contentlayer`

**Choice:** `next-mdx-remote`  
**Rationale:** `contentlayer` has had maintenance issues and is not reliably compatible with Next.js 14 App Router static exports. `next-mdx-remote` is actively maintained, works cleanly with `output: 'export'`, and supports the RSC (`/rsc`) import for App Router.

#### 2. `output: 'export'` configured for GitHub Pages

**Choice:** Static export enabled in `next.config.mjs`  
**Rationale:** Phase 1 deployment target is GitHub Pages, which requires a fully static site. `output: 'export'` in `next.config.mjs` achieves this. Docker (Phase 2) can serve the same static output with no code changes.  
**Constraints:** No server-side APIs, `next/image` must use `unoptimized: true`, dynamic routes require `generateStaticParams`.

#### 3. `src/` layout with App Router

**Choice:** All source code under `src/`; pages under `src/app/`  
**Rationale:** Separates framework source from config files and content. Aligns with Next.js recommended practice for larger projects. Content lives in `content/blog/` (outside `src/`) to keep it separate from application code.

#### 4. TypeScript strict mode + path aliases

**Choice:** `strict: true` in `tsconfig.json`; aliases `@/*` → `./src/*`, `@content/*` → `./content/*`  
**Rationale:** Strict TypeScript catches bugs early and improves DX. Path aliases eliminate `../../` import chains.

---

### Homepage Design System

**Date:** 2026-04  
**Author:** Bonnie Barstow (Frontend / UI / UX)  
**Status:** Implemented

| Area | Choice | Rationale |
|------|--------|-----------|
| Color scheme | `#0a0a0a` background, `#00d4ff` cyan accent | Terminal / dev tool aesthetic; high contrast |
| Heading font | JetBrains Mono (via `next/font/google`) | Industry-standard monospace; self-hosted at build time |
| Body font | Inter | Clean, highly legible sans-serif |
| Hero | Terminal window animation (pure CSS) | On-brand, no photo needed, memorable, zero runtime JS |
| Dark mode | Always dark (no toggle in v1) | Simpler for MVP; toggle is a nice-to-have per PRD |
| Font delivery | `next/font/google` CSS variables | No Google CDN request at runtime; works with `output: 'export'` |

**Implications:**
- All future components should use `font-mono` (JetBrains Mono) for headings/code and `font-sans` (Inter) for body
- Accent color `text-accent` / `border-accent` / `bg-accent` maps to `#00d4ff`
- Dark backgrounds: `#0a0a0a` (base), `#0d0d0d` (alternate sections), `#111111` (cards), `#1a1a1a` (elevated)
- Borders: `border-[#1f1f1f]` (section dividers), `border-[#2a2a2a]` (card borders)
- Light/dark toggle deferred to a future sprint

---

## Governance

- All meaningful changes require team consensus
- Document architectural decisions here
- Keep history focused on work, decisions focused on direction
