import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { initTracking } from "../lib/track";

const CONSENT_KEY = "va-cookie-consent";

/**
 * Cookie consent banner + preferences panel.
 * Choice is stored in localStorage as { necessary: true, analytics, marketing }.
 * Analytics (GA4) only loads when analytics === true (see src/lib/track.js).
 */
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(CONSENT_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function save(choice) {
    try {
      localStorage.setItem(
        CONSENT_KEY,
        JSON.stringify({ ...choice, savedAt: new Date().toISOString() })
      );
    } catch {
      /* storage unavailable — banner simply hides for this session */
    }
    setVisible(false);
    setShowPrefs(false);
    initTracking();
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[80] bg-abus-900 text-white shadow-2xl">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-5">
        {!showPrefs ? (
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <p className="text-[13.5px] leading-relaxed text-white/85 flex-1">
              We use cookies to run this site and, with your permission, to
              understand how visitors use it. Read our{" "}
              <Link to="/privacy" className="underline hover:text-white">
                Privacy Policy
              </Link>
              .
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setShowPrefs(true)}
                className="px-5 py-2.5 text-[13px] font-semibold border border-white/40 hover:bg-white/10 transition"
              >
                Preferences
              </button>
              <button
                onClick={() =>
                  save({ necessary: true, analytics: false, marketing: false })
                }
                className="px-5 py-2.5 text-[13px] font-semibold border border-white/40 hover:bg-white/10 transition"
              >
                Reject all
              </button>
              <button
                onClick={() =>
                  save({ necessary: true, analytics: true, marketing: true })
                }
                className="px-5 py-2.5 text-[13px] font-semibold bg-white text-abus-900 hover:bg-abus-100 transition"
              >
                Accept all
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="font-semibold text-[15px]">Cookie preferences</div>
            <div className="mt-4 grid sm:grid-cols-3 gap-4 text-[13px]">
              <label className="block bg-white/5 border border-white/15 p-4">
                <span className="font-semibold">Necessary</span>
                <span className="block mt-1 text-white/70 leading-relaxed">
                  Required for the site and forms to work. Always on.
                </span>
                <input type="checkbox" checked disabled className="mt-3" />
              </label>
              <label className="block bg-white/5 border border-white/15 p-4">
                <span className="font-semibold">Analytics</span>
                <span className="block mt-1 text-white/70 leading-relaxed">
                  Helps us count visits and form enquiries (Google Analytics).
                </span>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="mt-3"
                />
              </label>
              <label className="block bg-white/5 border border-white/15 p-4">
                <span className="font-semibold">Marketing</span>
                <span className="block mt-1 text-white/70 leading-relaxed">
                  Used for advertising measurement, if enabled later.
                </span>
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="mt-3"
                />
              </label>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                onClick={() => save({ necessary: true, analytics, marketing })}
                className="px-5 py-2.5 text-[13px] font-semibold bg-white text-abus-900 hover:bg-abus-100 transition"
              >
                Save preferences
              </button>
              <button
                onClick={() => setShowPrefs(false)}
                className="px-5 py-2.5 text-[13px] font-semibold border border-white/40 hover:bg-white/10 transition"
              >
                Back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
