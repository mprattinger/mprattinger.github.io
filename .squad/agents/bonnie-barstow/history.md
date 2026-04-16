# Bonnie Barstow — History

## Project Seed
- Project: Personal homepage and blog for Michael Prattinger
- Stack: Next.js + React + TypeScript + MDX
- Must render .mdx blog articles with code highlighting, images, etc.
- GitHub Pages: static export — no server-side rendering
- Design goal: professional, clean, developer-focused aesthetic

## Learnings

### Homepage Design (2026-04)
- **Design system**: Dark mode first — `#0a0a0a` background, `#00d4ff` cyan accent, JetBrains Mono for all monospace/heading text, Inter for body
- **Font loading**: Used `next/font/google` (JetBrains_Mono + Inter) in `layout.tsx` with CSS variables `--font-mono` / `--font-sans`; fonts self-hosted at build time (works with `output: 'export'`)
- **Tailwind font config**: Extend `fontFamily.mono` and `fontFamily.sans` with `var(--font-mono)` / `var(--font-sans)` CSS variables
- **Terminal hero**: macOS-style terminal window with staggered CSS fade-in animation (`.term-line` class + `animationDelay` inline style). No JS required. Blinking cursor via `term-cursor` CSS class with `step-end` blink keyframe
- **Hero layout**: Dot-grid background (`radial-gradient` at `32px 32px`), subtle cyan glow overlay — zero-dependency visual texture
- **Section numbering**: Used `01. about`, `02. skills`, etc. as eyebrow labels for dev aesthetic
- **Conditional classNames**: Avoid template literals with `${...}` — use ternary expression directly in `className` prop to keep bash-safe
- **Dynamic hrefs**: Use string concatenation (`'/blog/' + post.slug`) rather than template literals
- **Layout structure**: Root `layout.tsx` provides `<Header>`, `<main>`, `<Footer>` wrapper; individual pages return fragments (no extra `<main>`)
- **Header**: `'use client'` for mobile hamburger state; sticky with `backdrop-blur-sm`
- **Key files**:
  - `src/app/page.tsx` — full homepage (hero, about, skills, projects, blog teaser, contact)
  - `src/app/layout.tsx` — root layout with fonts, Header, Footer
  - `src/app/globals.css` — terminal animations, scrollbar, dark base styles
  - `src/components/Header.tsx` — sticky dark nav with mobile menu
  - `src/components/Footer.tsx` — dark footer with social icons
  - `src/app/blog/page.tsx` — styled blog list
  - `src/app/blog/[slug]/page.tsx` — styled blog post with `prose-invert`
  - `tailwind.config.ts` — font family CSS variables, accent color `#00d4ff`
- **Build**: `npm run build` passes cleanly, all 6 static pages generated

### Bio & LinkedIn update (2026-07)
- **Real LinkedIn URL**: `https://www.linkedin.com/in/michael-prattinger-449b5915/` (not the short `/in/mprattinger` placeholder)
- **Current role**: Software Developer at BECOM Electronics GmbH, April 2018–Present (Hochstraß, Burgenland, Austria)
- **Previous role**: Senior SAP CRM Consultant at Wienerberger AG, July 2007–March 2018 (~11 years)
- **Earlier**: Anlagenbau / Electronics at Werfring, July 2002–September 2003; IBM i / RPG background
- **Terminal profile.json**: `"title"` updated to `"Software Developer @ BECOM Electronics"`, added `"location": "Burgenland, Austria"` field
- **About bio tone**: First-person, direct, no buzzwords — grounded in real career facts

