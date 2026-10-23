import { GA_MEASUREMENT_ID } from "../config";

/**
 * Conversion event tracking.
 *
 * Every event is pushed to window.dataLayer (GTM-compatible). If a GA4
 * Measurement ID is set in src/config.js AND the visitor has accepted
 * analytics cookies in the consent banner, events are also sent to GA4.
 * Until both conditions are met, nothing leaves the browser.
 */
const CONSENT_KEY = "va-cookie-consent";

export function analyticsConsented() {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return false;
    return JSON.parse(raw).analytics === true;
  } catch {
    return false;
  }
}

let gaLoaded = false;
function loadGA() {
  if (gaLoaded || !GA_MEASUREMENT_ID) return;
  gaLoaded = true;
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(s);
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments);
    };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
}

/** Call loadGA once consent is known (app start + when consent changes). */
export function initTracking() {
  if (GA_MEASUREMENT_ID && analyticsConsented()) loadGA();
}

/**
 * Track a conversion / interaction event.
 * Examples: trackEvent("rfp_submit", { service: "Aircraft Leasing" })
 */
export function trackEvent(name, params = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...params });
  if (GA_MEASUREMENT_ID && analyticsConsented()) {
    loadGA();
    if (window.gtag) window.gtag("event", name, params);
  }
}
