import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from "../config";
import { showToast } from "./Toast";
import { trackEvent } from "../lib/track";

const SHORT_OPTIONS = [
  "Aircraft Leasing",
  "MRO & Cabin Maintenance",
  "Ground Support Equipment",
  "Flight Clearance Agency",
  "Robotic Dry Wash",
  "Other / General Enquiry",
];

const FULL_OPTIONS = [
  "Aircraft Leasing",
  "MRO & Cabin Maintenance",
  "Airline Representation",
  "Ground Support Equipment",
  "Flight Clearance Agency",
  "Airport & Cargo Management",
  "Consulting & Quality Audits",
  "Training & Manpower",
  "Robotic Dry Wash",
  "Other / General Enquiry",
];

const inputCls =
  "bg-white border border-line rounded-none px-4 py-3 text-[14px] text-abus-900 placeholder:text-ink-300 focus:border-abus-500 outline-none transition";
const selectCls =
  "w-full bg-white border border-line rounded-none px-4 py-3 text-[14px] text-ink-700 focus:border-abus-500 outline-none transition";
const textareaCls =
  "w-full bg-white border border-line rounded-none px-4 py-3 text-[14px] text-abus-900 placeholder:text-ink-300 focus:border-abus-500 outline-none transition resize-none";

/**
 * The RFP / contact form from the original site, as one shared component.
 * variant="short" -> home page footer form (no phone field, 6 services)
 * variant="full"  -> contact page form (phone field, all 10 services)
 * Submission still happens through EmailJS, using the keys in src/config.js.
 */
export default function RfpForm({ variant = "full", className = "" }) {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);
  const full = variant === "full";
  const options = full ? FULL_OPTIONS : SHORT_OPTIONS;

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
        showToast("RFP sent — thanks, we'll be in touch shortly.");
        trackEvent("rfp_submit", {
          form: full ? "contact" : "home",
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
      <input type="email" name="reply_to" placeholder="Work email" required className={`w-full ${inputCls}`} />
      {full && (
        <input type="tel" name="phone" placeholder="Phone (optional)" className={`w-full ${inputCls}`} />
      )}
      <select name="service_interest" className={selectCls}>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <textarea
        name="message"
        placeholder="Brief description of requirement"
        rows={full ? 4 : 3}
        className={textareaCls}
      ></textarea>
      <button
        type="submit"
        disabled={sending}
        className="w-full bg-abus-900 hover:bg-abus-700 text-white font-semibold text-[14.5px] py-3.5 transition"
      >
        {sending ? "Sending…" : "Submit RFP"}
      </button>
      <p
        className={`text-[13px] mt-1 ${status?.kind === "error" ? "text-red-600" : "text-abus-500"}`}
        role="status"
        aria-live="polite"
      >
        {status?.msg || ""}
      </p>
    </form>
  );
}
