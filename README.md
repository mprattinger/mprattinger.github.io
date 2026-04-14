# mprattinger.dev

Personal homepage and blog of Michael Prattinger.

## Tech stack

- **Next.js 14** (App Router, static export)
- **TypeScript** (strict mode)
- **Tailwind CSS** + `@tailwindcss/typography`
- **MDX** via `next-mdx-remote` for blog articles
- **gray-matter** for frontmatter parsing
- Deployed to **GitHub Pages** via `output: 'export'`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

The static output is written to `out/`. This is what gets deployed to GitHub Pages.

## Project structure

```
/
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── layout.tsx
│   │   ├── page.tsx          # Homepage
│   │   ├── globals.css
│   │   └── blog/
│   │       ├── page.tsx      # Article list
│   │       └── [slug]/
│   │           └── page.tsx  # Article detail
│   ├── components/           # Shared React components
│   └── lib/
│       └── blog.ts           # MDX/frontmatter utilities
├── content/
│   └── blog/                 # .mdx article files
└── public/                   # Static assets
```

## Writing articles

Add `.mdx` files to `content/blog/`. Each file must include frontmatter:

```yaml
---
title: My Article Title
date: '2024-01-15'
tags:
  - tag1
  - tag2
excerpt: Short description shown in the article list.
draft: false
---
```

Set `draft: true` to exclude an article from the production build.
