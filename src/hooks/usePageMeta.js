import { useEffect } from "react";
import { SITE_URL } from "../config";

/**
 * Per-page SEO meta, in one call:
 * usePageMeta({ title, description, path, crumbs, noindex })
 *
 * - sets a unique <title> and meta description for the page
 * - updates the canonical link and Open Graph / Twitter tags for the page
 * - when `crumbs` is given ([{ label, path }]), injects BreadcrumbList
 *   Schema.org JSON-LD for the page (visible breadcrumbs: <Breadcrumbs />)
 */
function setMeta(selector, attr, key, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

export default function usePageMeta({ title, description, path = "/", crumbs, noindex = false }) {
  useEffect(() => {
    const url = SITE_URL + (path === "/" ? "/" : path);
    document.title = title;

    if (description) {
      setMeta('meta[name="description"]', "name", "description", description);
      setMeta('meta[property="og:description"]', "property", "og:description", description);
      setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    }
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:url"]', "property", "og:url", url);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta(
      'meta[name="robots"]',
      "name",
      "robots",
      noindex ? "noindex, follow" : "index, follow"
    );

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    // BreadcrumbList structured data
    const existing = document.getElementById("va-breadcrumb-schema");
    if (existing) existing.remove();
    if (crumbs && crumbs.length > 1) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "va-breadcrumb-schema";
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.label,
          item: SITE_URL + (c.path === "/" ? "/" : c.path),
        })),
      });
      document.head.appendChild(script);
      return () => script.remove();
    }
  }, [title, description, path, noindex, JSON.stringify(crumbs || [])]);
}
