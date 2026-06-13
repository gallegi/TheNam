# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Nam Nguyen (ML Engineer & Tech Writer), built with Next.js 14 App Router and deployed as a static site to GitHub Pages at `/TheNam/`.

## Commands

```bash
npm run dev       # Start dev server at localhost:3000
npm run build     # Static export → /out directory
npm start         # Start production server (limited use with static export)
```

No test runner or linter is configured.

## Architecture

### Static Export & Base Path

The site uses `output: 'export'` (static HTML, no server). In production, all routes are prefixed with `/TheNam` (`basePath`) — this is set automatically via `NODE_ENV=production` in `next.config.mjs`. Images are unoptimized for GitHub Pages compatibility.

### Blog Content Pipeline

MDX files live in `/content/posts/` with YAML front matter (`title`, `date`, `tags`). `lib/posts.ts` reads them at build time using `gray-matter` + `reading-time`, then the blog post page (`app/blog/[slug]/page.tsx`) renders them with `next-mdx-remote/rsc` (React Server Components). `generateStaticParams` pre-renders all slugs at build time.

### Styling

Tailwind CSS v4 — uses `@import "tailwindcss"` syntax in `app/globals.css` (not the old `@tailwind base/components/utilities` directives). Two custom colors are defined: `navy` (`#1e3a5f`) and `slate-custom` (`#64748b`). Use these for headings and muted text respectively.

### Path Alias

`@/*` maps to the project root (e.g., `@/lib/posts`, `@/components/Navbar`).

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) triggers on push to `main`, runs `npm ci && npm run build`, and deploys the `/out` directory to GitHub Pages. Node.js 24 is required.
