import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from "../config";
import { showToast } from "./Toast";
import { trackEvent } from "../lib/track";

/**
 * Enquiry options = the eight business lines plus partnership/other,
 * per the Source Document contact specification (Section 6.21).
 * The selected value is sent to EmailJS as `service_interest` and used
 * for conversion tracking by business line.
 */
const BUSINESS_LINES = [
  "Pan-India MRO",
  "GSE Leasing and Maintenance",
  "Flight Clearance and Trip Management",
  "Aviation Training",
  "Aviation Consulting",
  "Robotic Dry Wash and Engine Core Wash",
  "Aviation Manpower",
  "India Market Entry",
  "Partnership / Investment",
  "Other / General Enquiry",
];

const inputCls =
  "bg-white border border-line rounded-none px-4 py-3 text-[14px] text-abus-900 placeholder:text-ink-300 focus:border-abus-500 outline-none transition";
const selectCls =
  "w-full bg-white border border-line rounded-none px-4 py-3 text-[14px] text-ink-700 focus:border-abus-500 outline-none transition";
const textareaCls =
  "w-full bg-white border border-line rounded-none px-4 py-3 text-[14px] text-abus-900 placeholder:text-ink-300 focus:border-abus-500 outline-none transition resize-none";

/**
 * The enquiry / RFP form.
 * variant="short" -> C6 contact block closing most pages
 * variant="full"  -> Contact page (adds phone and country, per Section 6.21)
 * Submission goes through EmailJS, keys in src/config.js (EMAILJS-SETUP.md).
 * Template variables: from_name, organization, country, reply_to, phone,
 * service_interest, message, consent.
 */
export default function RfpForm({ variant = "full", className = "" }) {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);
  const full = variant === "full";

  function handleSubmit(e) {
    e.preventDefault();

    if (EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY") {
      setStatus({
        kind: "error",
        msg: "Form not yet connected — add your EmailJS keys in src/config.js.",
      });
      showToast("Form not yet connected — EmailJS keys are missing.", "error");
      return;
    }

    setSending(true);
    setStatus(null);
    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        setStatus({
          kind: "success",
          msg: "Thanks — we'll be in touch shortly.",
        });
        showToast("Enquiry sent — thanks, we'll be in touch shortly.");
        trackEvent("rfp_submit", {
          form: full ? "contact" : "block",
          service: formRef.current?.service_interest?.value || "",
        });
        formRef.current.reset();
        setTimeout(() => setSending(false), 4000);
      })
      .catch((err) => {
        setSending(false);
        setStatus({
          kind: "error",
          msg: "Something went wrong — please try again or call us directly.",
        });
        showToast("Something went wrong — please try again or call us.", "error");
        console.error("EmailJS error:", err);
      });
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className={className}>
      <div className="grid grid-cols-2 gap-4">
        <input type="text" name="from_name" placeholder="Full name" required className={inputCls} />
        <input type="text" name="organization" placeholder="Organisation" className={inputCls} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <input type="email" name="reply_to" placeholder="Work email" required className={inputCls} />
        {full ? (
          <input type="text" name="country" placeholder="Country" className={inputCls} />
        ) : (
          <input type="tel" name="phone" placeholder="Phone (optional)" className={inputCls} />
        )}
      </div>
      {full && (
        <input type="tel" name="phone" placeholder="Phone (optional)" className={`w-full ${inputCls}`} />
      )}
      <select name="service_interest" className={selectCls} aria-label="Which business line does this concern?">
        {BUSINESS_LINES.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <textarea
        name="message"
        placeholder="Your requirement"
        rows={full ? 4 : 3}
        className={textareaCls}
      ></textarea>
      <label className="flex items-start gap-3 text-[12.5px] text-ink-500 leading-relaxed cursor-pointer">
        <input type="checkbox" name="consent" value="Yes" required className="mt-[3px]" />
        <span>I consent to being contacted about this enquiry.</span>
      </label>
      <button
        type="submit"
        disabled={sending}
        className="w-full bg-abus-900 hover:bg-abus-700 text-white font-semibold text-[14.5px] py-3.5 transition disabled:opacity-60"
      >
        {sending ? "Sending…" : "Send enquiry"}
      </button>
      {status && (
        <p
          role="status"
          className={`text-[13px] leading-relaxed ${
            status.kind === "error" ? "text-red-700" : "text-green-800"
          }`}
        >
          {status.msg}
        </p>
      )}
    </form>
  );
}
