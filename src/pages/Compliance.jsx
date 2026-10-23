import usePageMeta from "../hooks/usePageMeta";
import Breadcrumbs from "../components/Breadcrumbs";
import RelatedLinks from "../components/RelatedLinks";
import { Link } from "react-router-dom";

export default function Compliance() {
  usePageMeta({ title: "Compliance | Vittoria Aviation Private Limited", description: "BCAS-cleared Auxiliary Service Provider under the Ministry of Civil Aviation — Vittoria Aviation's security clearances, registered entity details and compliance pillars.", path: "/compliance", crumbs: [{ label: "Home", path: "/" }, { label: "Compliance", path: "/compliance" }] });
  return (
    <main>
<Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Compliance" }]} />
{/* ============ HERO ============ */}
<section className="relative bg-white border-b border-line">
  <div className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-16 pb-16 lg:pt-24 lg:pb-20">
    <div className="inline-flex items-center gap-2 border border-line px-3.5 py-1.5 mb-8">
      <span className="w-1.5 h-1.5 rounded-full bg-abus-500"></span>
      <span className="font-mono text-[10.5px] tracking-[0.18em] text-ink-700 uppercase">Ministry of Civil Aviation, Govt. of India</span>
    </div>
    <span className="font-mono text-[11px] tracking-[0.2em] text-abus-500 uppercase block mb-4">Compliance</span>
    <h1 className="font-light text-[42px] leading-[1.05] sm:text-[58px] lg:text-[72px] text-abus-900 tracking-tight max-w-3xl">
      Cleared to operate<br /><span className="font-bold">at security-grade standard.</span>
    </h1>
    <p className="mt-7 text-[16px] lg:text-[18px] text-ink-500 max-w-xl leading-relaxed">
      Vittoria Aviation is a BCAS-cleared Auxiliary Service Provider — regulated under the Bureau of Civil Aviation Security, Ministry of Civil Aviation, Government of India.
    </p>
  </div>
</section>

<section className="relative border-b border-line">
  <img src="/images/compliance.webp" alt="Aircraft landing at dusk" loading="lazy" className="w-full h-[240px] lg:h-[340px] object-cover" />
</section>

{/* ============ BCAS EXPLAINER ============ */}
<section className="reveal bg-white py-20 lg:py-24 border-b border-line">
  <div className="mx-auto max-w-[1440px] px-6 lg:px-12 grid lg:grid-cols-[1fr_1fr] gap-16">
    <div>
      <span className="font-mono text-[11px] tracking-[0.2em] text-abus-500 uppercase">What BCAS Clearance Means</span>
      <h2 className="mt-4 font-light text-[28px] lg:text-[34px] text-abus-900 tracking-tight leading-tight">A security clearance, not just a business license.</h2>
      <p className="mt-5 text-ink-700 text-[15px] leading-relaxed">The Bureau of Civil Aviation Security vets Auxiliary Service Providers operating within the security envelope of Indian airports — covering personnel background verification, access control discipline, and adherence to national civil aviation security programs. Clearance is a prerequisite for any vendor working airside or in security-restricted areas.</p>
      <p className="mt-4 text-ink-700 text-[15px] leading-relaxed">Every Vittoria Aviation service line — from GSE leasing to cargo operations — runs inside this cleared operating envelope, which is why airlines can engage us across multiple verticals under one security posture rather than re-vetting a new vendor for each function.</p>
    </div>
    <div className="border border-line bg-cloud p-10">
      <div className="font-mono text-[11px] tracking-[0.14em] text-ink-500 uppercase mb-4">Regulatory Reference</div>
      <dl className="space-y-5 text-[14px]">
        <div className="flex justify-between border-b border-line pb-3"><dt className="text-ink-500">Status</dt><dd className="text-abus-900 font-semibold">BCAS Cleared</dd></div>
        <div className="flex justify-between border-b border-line pb-3"><dt className="text-ink-500">Category</dt><dd className="text-abus-900 font-semibold">Auxiliary Service Provider</dd></div>
        <div className="flex justify-between border-b border-line pb-3"><dt className="text-ink-500">Authority</dt><dd className="text-abus-900 font-semibold text-right">Ministry of Civil Aviation</dd></div>
        <div className="flex justify-between"><dt className="text-ink-500">Jurisdiction</dt><dd className="text-abus-900 font-semibold">Republic of India</dd></div>
      </dl>
    </div>
  </div>
</section>

{/* ============ COMPLIANCE PILLARS ============ */}
<section className="reveal bg-cloud py-20 lg:py-24 border-b border-line">
  <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
    <span className="font-mono text-[11px] tracking-[0.2em] text-abus-500 uppercase">Operating Framework</span>
    <h2 className="mt-4 font-light text-[28px] lg:text-[34px] text-abus-900 tracking-tight max-w-2xl">Four pillars behind every engagement.</h2>

    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-line">
      <div className="border-r border-b border-line bg-white p-8">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-abus-900"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" stroke="currentColor" strokeWidth="1.2" /></svg>
        <h3 className="mt-4 font-semibold text-[15.5px] text-abus-900">Security Compliance</h3>
        <p className="mt-2 text-[13px] text-ink-500 leading-relaxed">Personnel vetting and access discipline under the BCAS security program.</p>
      </div>
      <div className="border-r border-b border-line bg-white p-8">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-abus-900"><path d="M9 11l3 3L22 4M21 12v6a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <h3 className="mt-4 font-semibold text-[15.5px] text-abus-900">Quality Management</h3>
        <p className="mt-2 text-[13.5px] text-ink-500 leading-relaxed">Audit-led quality system overseen directly by our COO's compliance function.</p>
      </div>
      <div className="border-r border-b border-line bg-white p-8">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-abus-900"><rect x="3" y="7" width="18" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.2" /><path d="M3 11h18M8 7V5h8v2" stroke="currentColor" strokeWidth="1.2" /></svg>
        <h3 className="mt-4 font-semibold text-[15.5px] text-abus-900">Legal & Tax Standing</h3>
        <p className="mt-2 text-[13.5px] text-ink-500 leading-relaxed">Registered under Indian company, GST and PAN frameworks — details below.</p>
      </div>
      <div className="border-r border-b border-line bg-white p-8">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-abus-900"><circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.2" /><path d="M5 21c0-4 3-6.5 7-6.5S19 17 19 21" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
        <h3 className="mt-4 font-semibold text-[15.5px] text-abus-900">Workforce Standards</h3>
        <p className="mt-2 text-[13.5px] text-ink-500 leading-relaxed">Certified training and recurrent compliance for all deployed personnel.</p>
      </div>
    </div>
  </div>
</section>

{/* ============ LEGAL IDENTIFIERS ============ */}
<section className="reveal bg-white py-20 lg:py-24">
  <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
    <span className="font-mono text-[11px] tracking-[0.2em] text-abus-500 uppercase">Legal Identifiers</span>
    <h2 className="mt-4 font-light text-[28px] lg:text-[34px] text-abus-900 tracking-tight max-w-2xl">Registered entity details.</h2>

    <div className="mt-10 grid sm:grid-cols-3 border-t border-l border-line max-w-3xl">
      <div className="border-r border-b border-line p-7">
        <div className="text-[11px] text-ink-500 uppercase tracking-wide">Entity</div>
        <div className="mt-2 font-mono text-[14px] text-abus-900">Vittoria Aviation Pvt. Ltd.</div>
      </div>
      <div className="border-r border-b border-line p-7">
        <div className="text-[11px] text-ink-500 uppercase tracking-wide">GST</div>
        <div className="mt-2 font-mono text-[14px] text-abus-900">07AAFCV8947HIZS</div>
      </div>
      <div className="border-r border-b border-line p-7">
        <div className="text-[11px] text-ink-500 uppercase tracking-wide">PAN</div>
        <div className="mt-2 font-mono text-[14px] text-abus-900">AAFCV8947H</div>
      </div>
    </div>
  </div>
</section>

{/* ============ CTA ============ */}
<section className="reveal bg-cloud py-20 border-t border-line">
  <div className="mx-auto max-w-[1440px] px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
    <h2 className="font-light text-[28px] lg:text-[34px] text-abus-900 tracking-tight">Need our compliance documentation for a vendor review? <span className="font-bold">Get in touch.</span></h2>
    <Link to="/contact" className="shrink-0 bg-abus-900 hover:bg-abus-700 text-white font-semibold text-[14px] px-7 py-3.5 transition">Contact Sales</Link>
  </div>
</section>

<RelatedLinks items={[{ to: "/governance", title: "Governance & Leadership", text: "The people accountable for our compliance culture." }, { to: "/services", title: "Services", text: "Services delivered under our cleared framework." }, { to: "/contact", title: "Contact & RFP", text: "Questions on clearance or documentation — ask us." }]} />
</main>
  );
}
