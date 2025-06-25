# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Limburgse Airco Deals is a lead generation website for an HVAC installation company in Limburg, Netherlands. The site is built with Next.js 13.5.6 and focuses on local SEO and conversion optimization.

## Key Business Context

- **Company**: StayCool Airco (operating as Limburgse Airco Deals)
- **Service Area**: Limburg province, Netherlands (focus on Maastricht, Heerlen, Sittard, Roermond)
- **Business Hours**: Ma-Vr 09:00-17:00 (NO 24/7 service)
- **Pricing**: 
  - Onderhoud: €11/maand or €149 for single service
  - Price matching: Only against BRL 100 & 200 certified companies
  - NO concrete prices for installations (lead generation focus)

## Development Commands

```bash
# Development
npm run dev                    # Start dev server on http://localhost:3000

# Build & Deploy
npm run build                  # Creates standalone build
npm run lint                   # Run ESLint
npx tsc --noEmit              # TypeScript check

# Sitemap Generation
npm run prebuild              # Generate sitemaps before build
npm run update-sitemaps       # Update sitemaps manually
```

## Architecture & Key Components

### Dynamic Route Structure
- `/diensten/[slug]` - Service pages (installatie, onderhoud, reparatie)
- `/diensten/[slug]/[city]` - Service + city combination pages for local SEO
- `/steden/[city]` - City-specific landing pages
- `/merken/[brand]` - Brand pages (daikin, mitsubishi-electric, lg, samsung, etc.)
- `/kennisbank/[slug]` - Knowledge base articles

### Email Integration
All contact forms use EmailJS with credentials in `/lib/emailjs.ts`:
- Service ID: `service_1rruujp`
- Template ID: `template_rkcpzhg`
- Public Key: `sjJ8kK6U9wFjY0zX9`

Forms can either use the centralized `sendEmail` function from `/lib/emailjs.ts` or environment variables directly.

### SEO Architecture
1. **Dynamic Sitemap Generation** (`/app/sitemap.ts`):
   - Prioritizes Maastricht (1.0) over other cities
   - Service pages get 0.9 priority
   - Includes all city-service combinations

2. **Structured Data** (`/lib/schema.ts`):
   - LocalBusiness schema for each page
   - Service-specific schemas
   - Review aggregation data

3. **Redirects** (in `next.config.js`):
   - Old domain redirects
   - Common misspellings
   - English URL alternatives

### Component Organization
- `/components/sections/` - Homepage sections (hero, services, contact, etc.)
- `/components/forms/` - Reusable form components
- `/components/ui/` - Shadcn/ui components
- `/components/layout/` - Layout components (navbar, footer)

### Data Sources
- `/data/diensten.json` - Service definitions
- `/data/cities.csv` - Limburg cities with population data
- `/data/brands.json` - Airco brand information
- `/data/kennisbank.json` - Knowledge base articles
- `/data/blog-posts.ts` - Blog content

## Critical Business Rules

1. **NO 24/7 Service Claims** - Always specify Ma-Vr 09:00-17:00
2. **Price Display**:
   - ONLY show maintenance prices (€11/month or €149)
   - NEVER show installation prices
   - Focus on "offerte op maat" for installations
3. **CTR Optimization**:
   - Use urgency without specific discounts
   - Emphasize "gratis installatie" and "actie" without percentages
   - Keep bouncing animations subtle (not on main CTAs)

## Environment Variables

Required for production (set in Netlify):
```
NEXT_PUBLIC_SITE_URL=https://limburgseaircodeals.nl
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_1rruujp
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_rkcpzhg
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sjJ8kK6U9wFjY0zX9
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Optional Google Analytics
```

## Testing & Quality Checks

Before pushing:
1. Run `npm run lint` - Must pass with no errors
2. Run `npx tsc --noEmit` - Must pass with no type errors
3. Test all contact forms submit successfully
4. Verify no 24/7 claims exist
5. Check meta descriptions are under 160 characters

## Deployment

The site is deployed to Netlify with automatic builds on push to main branch. The build output is standalone Next.js.