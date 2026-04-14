# KITT — History

## Project Seed
- Project: Personal homepage and blog for Michael Prattinger
- Stack: Next.js + MDX + React + TypeScript
- Static export for GitHub Pages (`next export` / `output: 'export'`)
- MDX for blog articles — .mdx files in /content/blog or /posts
- Future: Docker deployment (serve the static build or run Next.js in server mode)
- Key constraint: Must work as a static site on GitHub Pages

## Learnings

### 2026-04-14 — Homepage Design System Live

- Bonnie Barstow implemented full homepage; design system now active in `decisions.md`
- `tailwind.config.ts` extended with `fontFamily.mono`/`fontFamily.sans` CSS variables and `#00d4ff` accent
- Terminal hero uses pure CSS animations (no runtime JS) — relevant for performance budget
- Blog list and article pages styled with `prose-invert`

### 2024-01-15 — Next.js Scaffold

**Architectural decisions:**
- `output: 'export'` in `next.config.mjs` — required for GitHub Pages static deployment
- `next-mdx-remote` (v4, `/rsc` import) chosen over `contentlayer` — better App Router + static export support
- `src/` layout: all source under `src/app/`, `src/components/`, `src/lib/`
- Content lives in `content/blog/` (outside `src/`) — keeps articles separate from application code
- TypeScript strict mode with path aliases: `@/*` → `./src/*`, `@content/*` → `./content/*`
- `images: { unoptimized: true }` required for static export (no Image Optimization API)
- `generateStaticParams` on dynamic route `src/app/blog/[slug]/page.tsx` — required for static export

**Central file paths:**
- `src/app/layout.tsx` — root layout, global metadata
- `src/app/page.tsx` — homepage (placeholder, Bonnie Barstow owns styling)
- `src/app/blog/page.tsx` — blog list
- `src/app/blog/[slug]/page.tsx` — article detail with MDX rendering
- `src/lib/blog.ts` — `getAllPosts()`, `getPostBySlug()` using gray-matter + fs
- `content/blog/` — MDX article files
- `next.config.mjs` — static export config
- `tailwind.config.ts` — content paths + typography plugin
