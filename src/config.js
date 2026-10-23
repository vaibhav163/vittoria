// ===== EmailJS configuration (ONE place for the whole site) =====
// Full step-by-step instructions: see EMAILJS-SETUP.md in the project root.
// 1. Create a free account at https://www.emailjs.com
// 2. Add an Email Service (e.g. Gmail) — copy its Service ID below.
// 3. Create an Email Template with variables:
//    from_name, organization, reply_to, phone, service_interest, message
//    — copy its Template ID below.
// 4. Account > General > copy your Public Key below.
// Until these are replaced, the RFP form shows a "not yet connected"
// message — exactly as the original HTML site behaved.
export const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
export const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
export const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";

// ===== Site / analytics configuration =====
export const SITE_URL = "https://www.vittoriaaviation.com";
// Optional: paste a Google Analytics 4 Measurement ID (G-XXXXXXXXXX) to
// enable conversion event tracking (see src/lib/track.js). Events are only
// sent after the visitor accepts analytics cookies in the consent banner.
// Leave empty to keep tracking in dataLayer-only mode (no data leaves the
// browser).
export const GA_MEASUREMENT_ID = "";
