# Vittoria Aviation — React Website

React conversion of the original static HTML site (Vittoria Aviation Private Limited).
Same design, same content, same pages — now built with Vite + React + React Router + Tailwind CSS.

## How to run

```bash
npm install
npm run dev        # opens the site at http://localhost:5173
```

For production:

```bash
npm run build      # creates the dist/ folder
npm run preview    # preview the production build
```

Note: this is a single-page app with real URLs (/capabilities, /about/leadership, /contact, ...). Structure and copy follow the client's Website Source Document VA/WEB/SRC/2026/002.
When you host the `dist/` folder, set a rewrite/fallback so every route
serves `index.html` (on Netlify: add a `_redirects` file with `/* /index.html 200`;
on Vercel/Apache/Nginx the same SPA fallback rule applies).

## Project structure

```
index.html                  -> page title, meta, Google Fonts (Inter + IBM Plex Mono)
public/favicon.svg          -> site icon (taken from the original site)
public/images/              -> photos used across the site, WebP format (see IMAGE-CREDITS.md);
                               replace any photo by dropping in a file with the same name
src/
  main.jsx                  -> entry point
  App.jsx                   -> all routes + layout (Header / page / Footer)
  index.css                 -> Tailwind + custom CSS (reveal animations, reduced-motion)
  config.js                 -> EmailJS keys + site config — EDIT THIS ONE FILE to connect the form
  data/capabilities.js      -> the 8 business lines, 3 families and credential records (single source)
  hooks/usePageEffects.js   -> scroll handling + .reveal animations
  hooks/usePageMeta.js      -> per-page title, meta description, canonical, OG, breadcrumb schema
  lib/track.js              -> conversion event tracking (consent-gated)
  components/
    Header.jsx              -> secondary bar + primary nav with dropdowns + gold CTA + mobile menu
    Footer.jsx              -> navy sitemap footer with CIN / GSTIN
    design.jsx              -> the six-component library (Hero, CapabilityCard, CredentialStrip, SplitFeature, StatRow)
    ContactBlock.jsx        -> C6 contact block closing every page (short form + direct lines)
    RfpForm.jsx             -> enquiry form (variant="short" block, "full" contact page)
    Breadcrumbs.jsx  RelatedLinks.jsx  CookieConsent.jsx  Toast.jsx  PageSkeleton.jsx  EmptyState.jsx
  pages/
    Home.jsx  About.jsx  Leadership.jsx  Credentials.jsx  Ecosystem.jsx
    Capabilities.jsx  CapabilityDetail.jsx  Partnerships.jsx  Investment.jsx
    IndiaMarket.jsx  OemRepresentation.jsx  Quality.jsx  Newsroom.jsx
    Careers.jsx  Contact.jsx  Privacy.jsx  Terms.jsx  Accessibility.jsx
    Sitemap.jsx  NotFound.jsx
public/
  images/                   -> photos (WebP) + hero poster — replace by dropping in same-name files
  videos/hero-loop.*        -> homepage hero video loop (MP4 + WebM), interim stock clip
  logos/                    -> partner logos (Ecosystem page)
  icons/  og-cover.jpg  sitemap.xml  robots.txt  _headers  site.webmanifest

```

## Pages / routes

| Route | Page |
|---|---|
| `/` | Home — hero, proposition, stats, 3 capability families, credential strip, CTA |
| `/about` | About — Company |
| `/about/leadership` | About — Leadership |
| `/about/credentials` | About — Credentials and Approvals |
| `/about/ecosystem` | About — Ecosystem (partners) |
| `/capabilities` | Capabilities index — 8 lines in 3 families |
| `/capabilities/:slug` | Each business line (mro, gse-leasing-and-maintenance, flight-clearance, aviation-training, aviation-consulting, robotic-dry-wash, aviation-manpower, india-market-entry) |
| `/partnerships` | Partnerships & Investment — overview |
| `/partnerships/investment` | Investment and Joint Ventures |
| `/partnerships/india-market` | The India Opportunity |
| `/partnerships/oem-representation` | OEM and Technology Representation |
| `/quality-and-compliance` | Quality and Compliance |
| `/newsroom` | Newsroom |
| `/careers` | Careers |
| `/contact` | Contact — enquiry form routed by business line |
| `/privacy` `/terms` `/accessibility` | Legal pages |
| `/sitemap` | Sitemap |
| (redirects) | Old URLs `/services` `/governance` `/compliance` `/news` redirect to the new structure |

## One thing still pending (same as the HTML version)

The RFP form sends through EmailJS, but the keys are still placeholders.
Add the client's real keys in `src/config.js` (Public Key, Service ID,
Template ID) and the form starts working on both the Home and Contact pages.

## Feature checklist

All 21 standard features (404 page, app icons, skeletons, toasts, cookie consent,
security headers, sitemap, schema, breadcrumbs, WebP, tracking, ...) — see FEATURES.md
for where each one lives. EmailJS form setup: see EMAILJS-SETUP.md.
