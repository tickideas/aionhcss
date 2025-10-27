# Aion Health Care & Support Services Ltd Website

Modern marketing site for Aion HCSS built with [Astro](https://astro.build/) and Tailwind CSS. The project includes responsive layouts, brand-aligned styling, and Netlify-ready enquiry, referral, and careers forms.

## Tech stack
- Astro 5 (static output)
- Tailwind CSS 3 with design tokens (`src/styles/tokens.css`)
- Netlify form handling (contact, careers, refer)

## Getting started
```bash
npm install
npm run dev
```

## Key scripts
- `npm run dev` – start local development server
- `npm run build` – generate production-ready static output
- `npm run preview` – preview the build locally

## Project structure
- `src/layouts/BaseLayout.astro` – shared layout, metadata, and schema markup
- `src/pages/` – route pages (home, services, about, contact, etc.)
- `public/` – static assets (logos, favicon, sitemap, robots)
- `astro.config.mjs` / `tailwind.config.mjs` – project configuration

## Deployment
Deploy to Netlify or Vercel as a static site. Netlify auto-detects the forms; ensure DNS and custom domain are configured as required.
