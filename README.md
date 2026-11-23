# S.S. Engineering — Website (frontend only)

Next.js 16 (App Router) · TypeScript (strict) · Tailwind CSS v4 · Lucide icons.
Planning documents live one folder up (`../01_PROJECT_BRIEF.md` … `../11_…`).

## Commands
```bash
npm run dev     # http://localhost:3000 — placeholder content visible, marked "Awaiting confirmation"
npm run build   # production build — all unconfirmed content hidden
npm run start   # serve the production build
npm run lint
```

## How content works
All company facts live in `src/content/` and each one carries `confirmed: true | false`.

| File | Contents |
|---|---|
| `site.ts` | Name, tagline, description, contact details, logo path, form options |
| `services.ts` | Service list (one detail page per publishable service) |
| `projects.ts` | Case studies (need `confirmed` **and** `clientPermission`) |
| `company.ts` | About page, differentiators, credentials, quality practices |

**To publish a fact:** replace the placeholder with client-approved wording and set `confirmed: true`.

- **Development / review builds** show placeholders with an amber "Awaiting confirmation" marker.
- **Production builds** omit unconfirmed content entirely. Services, Projects and Quality & Safety
  pages (and their nav links and sitemap entries) only exist once they have publishable content.

## Environment variables (all optional, none secret)
| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Confirmed production domain, e.g. `https://example.com`. Enables canonical URLs, sitemap, Organization JSON-LD and indexing. While unset, the site is `noindex` and robots.txt disallows all. |
| `NEXT_PUBLIC_SHOW_DRAFT_CONTENT=true` | Show placeholder content in a deployed review build (always `noindex`). |

## Logo
The approved master logo has not been supplied. Put it in `public/logos/` (SVG preferred) and set
`site.logo.src`. Until then a text wordmark is used; do not draw a replacement logo.

## Contact form
Frontend demo only (`src/lib/enquiry.ts`). Client-side validation; on valid submission it shows
a preview confirmation. Nothing is sent, stored or logged. A future backend phase replaces the body
of `submitEnquiry()` without changing `ContactForm`.

## Project structure
```text
src/
  app/            routes, sitemap.ts, robots.ts, not-found.tsx
  components/
    layout/       SiteHeader, MobileNavigation, NavLinks, SiteFooter
    sections/     PageHero, CtaBand, HeroGraphic
    forms/        ContactForm, Field primitives
    ui/           Container, Section, SectionHeading, Button, Cards, Breadcrumbs, Logo, Draft
  content/        typed company data (single source of truth)
  lib/            content visibility helpers, metadata, enquiry adapter
```
