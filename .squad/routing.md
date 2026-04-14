# Work Routing

How to decide who handles what.

## Routing Table

| Work Type | Route To | Examples |
|-----------|----------|----------|
| Product scope, decisions, review | Michael Knight | Feature scope, architecture review, delivery sign-off |
| Architecture, code quality, tech decisions | KITT | next.config.js, tsconfig, dependency choices, build setup |
| Homepage copy, blog content, documentation | Devon Miles | About page text, bio, blog article drafts, README |
| UI components, design, styling, MDX rendering | Bonnie Barstow | Pages, components, CSS/Tailwind, blog article layout |
| API routes, data fetching, CI/CD, Docker | RC3 | GitHub Actions, Dockerfile, getStaticProps, API endpoints |
| Tests, QA, edge cases | Garthe Knight | Unit tests, E2E tests, quality review |
| Hosting, DNS, server config, monitoring | April Curtis | GitHub Pages setup, Docker server planning |
| Memory, decisions, session logs | Scribe | (silent — triggered by coordinator) |
| Work queue, backlog, issue monitoring | Ralph | (monitor — triggered by coordinator) |

## Escalation

- Scope ambiguity → Michael Knight
- Technical conflict between agents → KITT arbitrates
- Quality gate failures → Garthe Knight rejects, different agent revises
