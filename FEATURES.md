# Feature Checklist — Vittoria Aviation React Site

All 21 items, where each one lives in the project:

| # | Feature | Where / how |
|---|---|---|
| 1 | Custom 404 page | `src/pages/NotFound.jsx` (route `*` in `src/App.jsx`), marked `noindex` |
| 2 | Favicon + app icons | `public/favicon.svg`, `public/icons/` (32px, apple-touch 180, 192, 512) + `public/site.webmanifest`, linked in `index.html` |
| 3 | Loading skeletons + empty states | `src/components/PageSkeleton.jsx` (shown via React.lazy + Suspense in `App.jsx`); `src/components/EmptyState.jsx` (used on News until stories are published) |
| 4 | Toast notifications | `src/components/Toast.jsx` — `showToast(...)` on form success/error; `<Toaster />` in `App.jsx` |
| 5 | Reduced-motion support | `@media (prefers-reduced-motion: reduce)` in `src/index.css` — disables smooth scroll, reveal and pulse animations |
| 6 | Custom social sharing image | `public/og-cover.jpg` (1200×630), referenced by og:image / twitter:image in `index.html` |
| 7 | Conversion event tracking | `src/lib/track.js` — `trackEvent("rfp_submit", ...)` on every successful form send; pushes to `dataLayer`; sends to GA4 only if `GA_MEASUREMENT_ID` is set in `src/config.js` **and** the visitor accepted analytics cookies |
| 8 | Cookie consent banner + preferences | `src/components/CookieConsent.jsx` — Accept / Reject / Preferences (Necessary / Analytics / Marketing), stored in localStorage |
| 9 | Security headers | `public/_headers` (Netlify / Cloudflare Pages). Apache equivalent below |
| 10 | Contact form email notifications | EmailJS — see `EMAILJS-SETUP.md`. Activates when the 3 keys are pasted in `src/config.js` |
| 11 | Unique titles + meta descriptions | `src/hooks/usePageMeta.js`, called with a unique title + description on every page |
| 12 | Open Graph metadata | `index.html` defaults + per-page og:title / og:description / og:url updated by `usePageMeta` |
| 13 | XML sitemap | `public/sitemap.xml` (all 8 routes, vittoriaaviation.com) |
| 14 | robots.txt | `public/robots.txt` (allows all, points to the sitemap) |
| 15 | Canonical tags | `index.html` (home) + per-page canonical updated by `usePageMeta` |
| 16 | Schema.org structured data | Organization + WebSite JSON-LD in `index.html`; BreadcrumbList per inner page via `usePageMeta` |
| 17 | Breadcrumb navigation + structured data | `src/components/Breadcrumbs.jsx` on every inner page + matching BreadcrumbList JSON-LD |
| 18 | Internal linking | Header nav, footer links, Services anchor menu, plus an "Explore More" strip (`src/components/RelatedLinks.jsx`) at the bottom of every inner page |
| 19 | WebP images | All photos in `public/images/` are WebP (2.6 MB of JPG → 1.1 MB WebP). Sources in `IMAGE-CREDITS.md` |
| 20 | Lazy loading | `loading="lazy"` on every below-the-fold image and all partner logos; the hero image loads eagerly |
| 21 | Optimized fonts | Google Fonts with `preconnect` + `display=swap` and only the weights used (Inter 300–800, IBM Plex Mono 400/500) in `index.html` |

## Apache version of the security headers (item 9)

If the site is hosted on Apache/cPanel instead of Netlify/Cloudflare,
create a `.htaccess` in the web root with:

```apache
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  Header set Permissions-Policy "camera=(), microphone=(), geolocation=()"
  Header set Strict-Transport-Security "max-age=31536000; includeSubDomains"
</IfModule>
# SPA fallback so deep links like /services work:
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^ index.html [L]
</IfModule>
```
