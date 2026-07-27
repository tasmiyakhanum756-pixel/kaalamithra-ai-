# KAALAMITHRA Website (Next.js) — Project README

## Overview
This repository contains the KAALAMITHRA marketing website built with **Next.js (App Router)** and styled using **Tailwind CSS**. The site includes multi-page marketing content (Home, About, Services, Industries, Testimonials, FAQ, Blog, Contact, Case Studies), a persistent header/footer layout, a mobile bottom navigation bar, a chatbot UI, and PWA support.

## Tech Stack
- **Next.js 16.2.6** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **next-themes** (theme handling)
- **next-pwa** (PWA service worker)
- **@vercel/analytics** (prod analytics)
- **lucide-react** (icons)

## Key Pages / Routes (App Router)
- `app/page.tsx` — Home / landing page
- `app/about/page.tsx` — About page (mission, vision, values, process)
- `app/services/page.tsx` — Services overview
- `app/services/[slug]/page.tsx` — Service detail by slug
- `app/industries/page.tsx` — Industries overview
- `app/industries/[slug]/page.tsx` — Industry detail by slug
- `app/testimonials/page.tsx` — Testimonials / success stories
- `app/faq/page.tsx` — FAQ
- `app/contact/page.tsx` — Contact + contact form
- `app/blog/page.tsx` — Blog listing
- `app/case-studies/page.tsx` — Case studies listing
- `app/consultation/page.tsx` — Consultation page

## Layout and Global Components
- `app/layout.tsx`
  - Loads global CSS (`globals.css`, `theme.css`)
  - Wraps content with `ThemeProvider`
  - Renders:
    - `components/backgroundGrid.tsx` (fixed background grid)
    - `components/header.tsx`
    - `Footer`
    - `components/bottomNav.tsx` (mobile bottom bar)
    - PWA install prompt (`components/pwaInstallPrompt.tsx`)
    - Chatbot UI (`components/chatBot.tsx`)
- `components/header.tsx` — site navigation + dropdowns
- `components/footer.tsx` — footer links + socials

## Chatbot / API
### Backend
- `app/api/chat/route.ts`
  - Implements a `POST` endpoint that sends messages to **Groq Chat Completions**.
  - Uses a strict `SYSTEM_PROMPT` containing KAALAMITHRA company/service info.
  - Requires environment variable:
    - `GROQ_API_KEY`
  - If `GROQ_API_KEY` is missing, it returns a helpful response pointing users to direct contact.

### Frontend
- `components/chatBot.tsx` — chatbot widget UI

## PWA Support
- `next.config.mjs` configures `@ducanh2912/next-pwa`
  - `dest: 'public'`
  - `register: true`
  - `skipWaiting: true`
  - Disabled in development (`disable: process.env.NODE_ENV === 'development'`)

- `public/manifest.json` — web app manifest
- `public/sw.js` and `public/workbox-*.js` — service worker assets
- `components/pwaInstallPrompt.tsx` — prompt shown to install the PWA

## Styling
- `app/globals.css` and `app/theme.css` define base styling.
- Pages use Tailwind utility classes heavily.

## Development / Setup
### Prerequisites
- Node.js
- pnpm (this repo uses pnpm via `pnpm-lock.yaml`)

### Install
```bash
pnpm install
```

### Run in dev
```bash
pnpm dev
```

### Build
```bash
pnpm build
```

### Lint
```bash
pnpm lint
```

## Environment Variables
- `GROQ_API_KEY` — required for chatbot responses from Groq.

## Deployment
- Uses Next.js standard deployment workflow.
- Analytics via `@vercel/analytics/next` only runs in production.

## Repository Notes
- TypeScript build errors are currently ignored during build (`typescript.ignoreBuildErrors: true`) in `next.config.mjs`.

## Project Structure (high level)
```text
app/                        # Next.js app router pages + API routes
components/                 # reusable UI components
lib/                        # helpers
public/                     # static assets (images, manifest, service worker files)
```

## Reference Summary Files
- `DESIGN_UPDATE_SUMMARY.md` — documents design/theme changes
- `IMPLEMENTATION_SUMMARY.md` — documents implemented page features/content

