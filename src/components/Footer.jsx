import { Link } from "react-router-dom";
import RfpForm from "./RfpForm";

export default function Footer({ variant }) {
  if (variant === "home") {
    return (
      <footer id="contact" className="relative bg-white border-t border-line">
  <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-20 lg:py-24 grid lg:grid-cols-[1fr_1fr] gap-16">

    <div className="reveal">
      <span className="font-mono text-[11px] tracking-[0.2em] text-abus-500 uppercase">Request For Proposal</span>
      <h2 className="mt-4 font-light text-[28px] lg:text-[36px] text-abus-900 tracking-tight leading-tight">Start a conversation<br /><span className="font-bold">with our team.</span></h2>
      <p className="mt-4 text-ink-500 text-[14.5px] leading-relaxed max-w-md">Tell us about your operation and we'll route it to the right desk — leasing, ground handling, MRO or consulting.</p>

      <RfpForm variant="short" className="mt-9 space-y-4 max-w-md" />
    </div>

    <div className="reveal grid sm:grid-cols-2 gap-10 lg:pl-10 lg:border-l lg:border-line">
      <div>
        <div className="font-mono text-[11px] tracking-[0.14em] text-ink-500 uppercase mb-3">Registered Office</div>
        <p className="text-[14.5px] text-abus-900 leading-relaxed">Vittoria Aviation Private Limited<br />Dwarka, New Delhi, India</p>

        <div className="font-mono text-[11px] tracking-[0.14em] text-ink-500 uppercase mt-7 mb-3">Direct Lines</div>
        <p className="text-[14.5px] text-abus-900 leading-relaxed">
          <a href="tel:+919818088199" className="hover:text-abus-500 transition">+91 98180 88199</a><br />
          <a href="tel:+919873444155" className="hover:text-abus-500 transition">+91 98734 44155</a>
        </p>

        <div className="font-mono text-[11px] tracking-[0.14em] text-ink-500 uppercase mt-7 mb-3">Email</div>
        <p className="text-[14.5px] text-abus-900 leading-relaxed">
          <a href="mailto:vittoria@vittoriaaviation.com" className="hover:text-abus-500 transition">vittoria@vittoriaaviation.com</a><br />
          <a href="mailto:baljinder@vittoriaaviation.com" className="hover:text-abus-500 transition">baljinder@vittoriaaviation.com</a>
        </p>
      </div>
      <div>
        <div className="font-mono text-[11px] tracking-[0.14em] text-ink-500 uppercase mb-3">Regulatory</div>
        <p className="text-[13.5px] text-ink-500 leading-relaxed">BCAS-cleared Auxiliary Service Provider<br />Ministry of Civil Aviation, Govt. of India</p>

        <div className="font-mono text-[11px] tracking-[0.14em] text-ink-500 uppercase mt-7 mb-3">Tax Identifiers</div>
        <p className="text-[13.5px] text-ink-500 font-mono leading-relaxed">GST: 07AAFCV8947HIZS<br />PAN: AAFCV8947H</p>
      </div>
    </div>
  </div>

  <div className="border-t border-line">
    <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-ink-500">
      <span>© 2026 Vittoria Aviation Private Limited. All rights reserved.</span>
      <div className="flex gap-6 uppercase tracking-wide">
        <Link to="/privacy" className="hover:text-abus-900 transition">Privacy</Link>
        <Link to="/sitemap" className="hover:text-abus-900 transition">Sitemap</Link>
        <a href="#" className="hover:text-abus-900 transition">Careers</a>
      </div>
    </div>
  </div>
</footer>
    );
  }
  return (
    <footer className="relative bg-white border-t border-line">
  <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 lg:py-20 grid lg:grid-cols-[1fr_1fr] gap-16 items-start">

    <div className="reveal">
      <span className="font-mono text-[11px] tracking-[0.2em] text-abus-500 uppercase">Request For Proposal</span>
      <h2 className="mt-4 font-light text-[26px] lg:text-[32px] text-abus-900 tracking-tight leading-tight">Have a requirement? <span className="font-bold">Let's talk.</span></h2>
      <p className="mt-3 text-ink-500 text-[14.5px] leading-relaxed max-w-md">Tell us about your operation and we'll route it to the right desk — leasing, ground handling, MRO or consulting.</p>
      <Link to="/contact" className="mt-6 inline-block bg-abus-900 hover:bg-abus-700 text-white font-semibold text-[13.5px] px-6 py-3 transition">Submit an RFP</Link>
    </div>

    <div className="reveal grid sm:grid-cols-2 gap-10 lg:pl-10 lg:border-l lg:border-line">
      <div>
        <div className="font-mono text-[11px] tracking-[0.14em] text-ink-500 uppercase mb-3">Registered Office</div>
        <p className="text-[14.5px] text-abus-900 leading-relaxed">Vittoria Aviation Private Limited<br />Dwarka, New Delhi, India</p>

        <div className="font-mono text-[11px] tracking-[0.14em] text-ink-500 uppercase mt-7 mb-3">Direct Lines</div>
        <p className="text-[14.5px] text-abus-900 leading-relaxed">
          <a href="tel:+919818088199" className="hover:text-abus-500 transition">+91 98180 88199</a><br />
          <a href="tel:+919873444155" className="hover:text-abus-500 transition">+91 98734 44155</a>
        </p>

        <div className="font-mono text-[11px] tracking-[0.14em] text-ink-500 uppercase mt-7 mb-3">Email</div>
        <p className="text-[14.5px] text-abus-900 leading-relaxed">
          <a href="mailto:vittoria@vittoriaaviation.com" className="hover:text-abus-500 transition">vittoria@vittoriaaviation.com</a><br />
          <a href="mailto:baljinder@vittoriaaviation.com" className="hover:text-abus-500 transition">baljinder@vittoriaaviation.com</a>
        </p>
      </div>
      <div>
        <div className="font-mono text-[11px] tracking-[0.14em] text-ink-500 uppercase mb-3">Regulatory</div>
        <p className="text-[13.5px] text-ink-500 leading-relaxed">BCAS-cleared Auxiliary Service Provider<br />Ministry of Civil Aviation, Govt. of India</p>

        <div className="font-mono text-[11px] tracking-[0.14em] text-ink-500 uppercase mt-7 mb-3">Tax Identifiers</div>
        <p className="text-[13.5px] text-ink-500 font-mono leading-relaxed">GST: 07AAFCV8947HIZS<br />PAN: AAFCV8947H</p>
      </div>
    </div>
  </div>

  <div className="border-t border-line">
    <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-ink-500">
      <span>© 2026 Vittoria Aviation Private Limited. All rights reserved.</span>
      <div className="flex gap-6 uppercase tracking-wide">
        <Link to="/privacy" className="hover:text-abus-900 transition">Privacy</Link>
        <Link to="/sitemap" className="hover:text-abus-900 transition">Sitemap</Link>
        <a href="#" className="hover:text-abus-900 transition">Careers</a>
      </div>
    </div>
  </div>
</footer>
  );
}
