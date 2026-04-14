# Product Requirements Document
## Personal Homepage & Blog — mprattinger.dev

**Owner:** Michael Prattinger  
**Version:** 1.0  
**Date:** 2026-04-14  
**Status:** Draft

---

## 1. Overview

A personal homepage and blog to promote Michael Prattinger as a software developer and share knowledge with the community. The site will serve as a professional landing page, a platform for technical articles, and a showcase for spare-time projects.

---

## 2. Goals

1. **Professional presence** — Present Michael's 20+ years of experience in .NET, React, Node.js, SAP CRM, and IBM i development.
2. **Knowledge sharing** — Publish technical blog articles about software development, tools, and problem-solving.
3. **Project showcase** — Highlight spare-time software projects that may be useful to others.
4. **Low maintenance** — Content authored in Markdown; no complex CMS required.
5. **Flexible hosting** — Run on GitHub Pages for free; migrate to a self-hosted Docker server later without rearchitecting.

---

## 3. Target Audience

- Potential employers, clients, and collaborators
- Fellow developers looking for technical insights
- Anyone interested in .NET, React, Node.js, SAP CRM, or IBM i development

---

## 4. Features

### 4.1 Homepage

| Feature | Description | Priority |
|---------|-------------|----------|
| Hero section | Name, tagline, professional photo/avatar | Must-have |
| About / Bio | Summary of experience, technologies, background | Must-have |
| Skills section | Visual list of core technologies (.NET, React, Node, SAP CRM, IBM i) | Must-have |
| Projects section | Cards linking to notable spare-time projects (GitHub links) | Must-have |
| Blog teaser | Latest N articles with title, date, excerpt | Must-have |
| Contact / Social links | GitHub, LinkedIn, email | Must-have |
| Dark/light mode | Theme toggle | Nice-to-have |

### 4.2 Blog

| Feature | Description | Priority |
|---------|-------------|----------|
| Article list page | Paginated list of articles, sorted by date | Must-have |
| Article detail page | Full MDX rendering with code highlighting | Must-have |
| Article metadata | Title, date, tags, reading time | Must-have |
| Tag filtering | Filter articles by tag | Nice-to-have |
| RSS feed | `/feed.xml` for feed readers | Nice-to-have |
| Search | Client-side article search | Future |
| Comments | Third-party comment system (e.g., giscus) | Future |

### 4.3 Content Management

- Blog articles stored as `.mdx` files in `/content/blog/` (or `/posts/`)
- Frontmatter: `title`, `date`, `tags`, `excerpt`, `draft`
- Draft articles excluded from production build
- Images stored alongside articles or in `/public/`

---

## 5. Technology Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Framework | Next.js 14+ (App Router) | React ecosystem, static export, MDX support |
| Language | TypeScript | Type safety, better DX |
| Content | MDX (Markdown + JSX) | Rich articles with React components |
| Styling | Tailwind CSS | Utility-first, responsive, easy dark mode |
| Code highlighting | Shiki or Prism via rehype | Developer-focused syntax highlighting |
| Deployment (now) | GitHub Pages | Free, static, custom domain support |
| Deployment (future) | Docker (self-hosted) | Full control, server mode possible |
| CI/CD | GitHub Actions | Automated build & deploy on push to main |

---

## 6. Architecture

```
/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── blog/
│   │   ├── page.tsx        # Blog article list
│   │   └── [slug]/page.tsx # Article detail
│   └── layout.tsx
├── content/
│   └── blog/               # .mdx article files
├── components/             # Shared React components
├── lib/                    # Utilities (MDX parsing, metadata)
├── public/                 # Static assets
├── docs/                   # Project documentation
└── .squad/                 # AI team state
```

**Static export:** `next.config.js` with `output: 'export'` for GitHub Pages compatibility.

---

## 7. Deployment

### Phase 1 — GitHub Pages
- Static export via `next build`
- GitHub Actions workflow: push to `main` → build → deploy to `gh-pages` branch
- Custom domain: optional (CNAME)
- Base path: configured via `NEXT_PUBLIC_BASE_PATH` env var if served from a subdirectory

### Phase 2 — Docker Server
- Dockerfile: multi-stage build (build + nginx or Node.js serve)
- Docker Compose for self-hosted deployment
- Reverse proxy: Nginx or Traefik (TLS, custom domain)
- No code changes required — same static output, different serve mechanism

---

## 8. Non-Functional Requirements

| Requirement | Target |
|-------------|--------|
| Performance | Lighthouse score ≥ 90 (all categories) |
| Accessibility | WCAG 2.1 AA |
| SEO | Open Graph, Twitter Card, sitemap.xml |
| Mobile | Fully responsive, mobile-first |
| Build time | < 60 seconds for 100 articles |

---

## 9. Out of Scope (v1)

- Authentication / admin panel
- Server-side rendering in v1 (static only)
- E-commerce / paid content
- Multi-author support
- Real-time features

---

## 10. Open Questions

- [ ] Custom domain for GitHub Pages? (e.g., mprattinger.dev)
- [ ] Preferred color scheme / design aesthetic?
- [ ] Existing articles/content to import?
- [ ] Projects to showcase in v1?

---

## 11. Success Criteria

- [ ] Site deploys automatically to GitHub Pages on push to `main`
- [ ] At least one blog article renders correctly with code highlighting
- [ ] Homepage displays bio, skills, projects, and latest articles
- [ ] Lighthouse score ≥ 90 on all categories
- [ ] Site builds cleanly with `npm run build` (no errors)
