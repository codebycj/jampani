# jampani.dev

Personal portfolio for Chaitanya Jampani

Built with Next.js 16 (App Router), Tailwind CSS v4, and MDX. Designed to be fast, accessible, and clearly hand-built.

## Tech stack

| Concern | Choice |
|---|---|
| Framework | Next.js 16 (App Router, RSC by default) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + CSS custom properties for design tokens |
| Content | MDX via `next-mdx-remote/rsc` |
| Fonts | Fraunces (serif, headings) + Geist Sans (body) + Geist Mono |
| Icons | Lucide React + custom SVGs for brand icons |
| Deployment | Vercel |

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  page.tsx              # Home
  about/page.tsx        # About
  work/[slug]/page.tsx  # Case study detail
  writing/page.tsx      # Writing index
  writing/[slug]/page.tsx  # Post detail
  not-found.tsx         # 404 page (it's fun)
  sitemap.ts            # Auto-generated sitemap
  robots.ts             # robots.txt
  feed.xml/route.ts     # RSS feed
  api/og/route.tsx      # Dynamic OG image generation

components/
  layout/Nav.tsx        # Sticky nav with command palette trigger
  layout/Footer.tsx     # Footer
  home/                 # Home-specific components
  CommandPalette.tsx    # ⌘K command palette
  ThemeToggle.tsx       # Dark/light toggle
  ThemeScript.tsx       # Inline script to prevent theme flash
  MdxContent.tsx        # RSC MDX renderer
  icons.tsx             # Brand icons (GitHub, LinkedIn)

content/
  work/                 # Case study MDX files
  writing/              # Blog post MDX files

lib/
  content.ts            # Content fetching + Zod schema validation
```

## Adding content

### New case study

Create `content/work/your-slug.mdx` with this frontmatter:

```yaml
---
title: "Project Title"
client: "Client Name"
role: "Your Role"
dates: "Month YYYY – Month YYYY"
teamSize: "X frontend, Y backend, ..."
summary: "One-sentence project summary."
tags:
  - React
  - TypeScript
featured: false
---
```

The page at `/work/your-slug` will be auto-generated.

### New blog post

Create `content/writing/your-slug.mdx`:

```yaml
---
title: "Post Title"
date: "2025-01-15"
summary: "One-sentence summary for index and OG."
tags:
  - Tag
published: true
---
```

Pages are statically generated at build time. The only dynamic routes are `/api/og` (OG image generation) and `/feed.xml`.
