import usePageMeta from "../hooks/usePageMeta";
import Breadcrumbs from "../components/Breadcrumbs";
import RelatedLinks from "../components/RelatedLinks";
import { Link } from "react-router-dom";

export default function Governance() {
  usePageMeta({ title: "Governance & Leadership | Vittoria Aviation Private Limited", description: "Meet the leadership of Vittoria Aviation Private Limited — the governance and management team overseeing compliant aviation services across India.", path: "/governance", crumbs: [{ label: "Home", path: "/" }, { label: "Governance", path: "/governance" }] });
  return (
    <main>
<Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Governance" }]} />
{/* ============ HERO ============ */}
<section className="relative bg-white border-b border-line">
  <div className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-16 pb-16 lg:pt-24 lg:pb-20">
    <span className="font-mono text-[11px] tracking-[0.2em] text-abus-500 uppercase">Governance</span>
    <h1 className="mt-4 font-light text-[42px] leading-[1.05] sm:text-[58px] lg:text-[72px] text-abus-900 tracking-tight max-w-3xl">
      Leadership accountable<br /><span className="font-bold">to the highest standard.</span>
    </h1>
    <p className="mt-7 text-[16px] lg:text-[18px] text-ink-500 max-w-xl leading-relaxed">
      Vittoria Aviation is led by aviation professionals with direct regulatory, audit and operational experience — the same standard we apply to every account we run.
    </p>
  </div>
</section>

<section className="relative border-b border-line">
  <img src="/images/governance.webp" alt="Modern corporate office building" loading="lazy" className="w-full h-[240px] lg:h-[340px] object-cover" />
</section>

{/* ============ LEADERSHIP ============ */}
<section className="reveal bg-white py-20 lg:py-24">
  <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
    <div className="grid md:grid-cols-2 border-t border-l border-line">
      <div className="border-r border-b border-line p-10 lg:p-12">
        <div className="w-14 h-14 rounded-full border-2 border-abus-900 flex items-center justify-center font-mono text-[14px] text-abus-900 font-semibold">BP</div>
        <h2 className="mt-6 font-semibold text-[22px] text-abus-900">Baljinder Pal</h2>
        <div className="mt-1 font-mono text-[11px] tracking-[0.14em] text-abus-500 uppercase">Chief Executive Officer</div>
        <p className="mt-5 text-[14.5px] text-ink-700 leading-relaxed">Baljinder Pal brings 24+ years of aviation leadership experience spanning ground operations, airline representation and infrastructure leasing. He holds an MBA from ENAC Toulouse — France's national civil aviation school — and has built Vittoria Aviation's operating model around BCAS-grade security discipline applied to commercial service delivery.</p>
        <p className="mt-4 text-[14.5px] text-ink-700 leading-relaxed">As CEO, he sets commercial strategy, oversees key airline and government relationships, and holds final accountability for the company's regulatory standing.</p>
      </div>
      <div className="border-r border-b border-line p-10 lg:p-12">
        <div className="w-14 h-14 rounded-full border-2 border-abus-900 flex items-center justify-center font-mono text-[14px] text-abus-900 font-semibold">VP</div>
        <h2 className="mt-6 font-semibold text-[22px] text-abus-900">Vittoria Gautam Pal</h2>
        <div className="mt-1 font-mono text-[11px] tracking-[0.14em] text-abus-500 uppercase">Chief Operating Officer</div>
        <p className="mt-5 text-[14.5px] text-ink-700 leading-relaxed">Vittoria Gautam Pal is a qualified aviation auditor holding a BBA and LLB, and leads the company's operational quality, compliance and audit governance functions. Her background in aviation law and auditing underpins the internal control environment behind every service line.</p>
        <p className="mt-4 text-[14.5px] text-ink-700 leading-relaxed">As COO, she is responsible for day-to-day operational delivery, quality management systems, and ensuring every contract is executed to its stated compliance standard.</p>
      </div>
    </div>
  </div>
</section>

{/* ============ VALUES ============ */}
<section className="reveal bg-cloud border-y border-line py-20 lg:py-24">
  <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
    <span className="font-mono text-[11px] tracking-[0.2em] text-abus-500 uppercase">Operating Principles</span>
    <h2 className="mt-4 font-light text-[30px] lg:text-[38px] text-abus-900 tracking-tight max-w-2xl">What governs how we run every account.</h2>

    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-line">
      <div className="border-r border-b border-line bg-white p-8">
        <div className="font-mono text-[11px] text-ink-300">01</div>
        <h3 className="mt-3 font-semibold text-[16px] text-abus-900">Safety</h3>
        <p className="mt-2 text-[13.5px] text-ink-500 leading-relaxed">No commercial outcome outweighs a safety standard. Full stop.</p>
      </div>
      <div className="border-r border-b border-line bg-white p-8">
        <div className="font-mono text-[11px] text-ink-300">02</div>
        <h3 className="mt-3 font-semibold text-[16px] text-abus-900">Integrity</h3>
        <p className="mt-2 text-[13.5px] text-ink-500 leading-relaxed">Clearances, audits and reporting reflect what actually happened.</p>
      </div>
      <div className="border-r border-b border-line bg-white p-8">
        <div className="font-mono text-[11px] text-ink-300">03</div>
        <h3 className="mt-3 font-semibold text-[16px] text-abus-900">Excellence</h3>
        <p className="mt-2 text-[13.5px] text-ink-500 leading-relaxed">Serviceability and on-time targets are floors, not aspirations.</p>
      </div>
      <div className="border-r border-b border-line bg-white p-8">
        <div className="font-mono text-[11px] text-ink-300">04</div>
        <h3 className="mt-3 font-semibold text-[16px] text-abus-900">Accountability</h3>
        <p className="mt-2 text-[13.5px] text-ink-500 leading-relaxed">One partner across nine verticals means one point of accountability.</p>
      </div>
    </div>
  </div>
</section>

{/* ============ MILESTONES ============ */}
<section className="reveal bg-white py-20 lg:py-24">
  <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
    <span className="font-mono text-[11px] tracking-[0.2em] text-abus-500 uppercase">Track Record</span>
    <h2 className="mt-4 font-light text-[30px] lg:text-[38px] text-abus-900 tracking-tight max-w-2xl">24+ years of leadership experience, one company.</h2>

    <div className="mt-12 grid sm:grid-cols-3 gap-8">
      <div className="border-t-2 border-abus-900 pt-5">
        <div className="font-mono text-[34px] text-abus-900">24+</div>
        <p className="mt-1 text-[13.5px] text-ink-500 leading-relaxed">Years of combined aviation leadership experience across the founding team.</p>
      </div>
      <div className="border-t-2 border-abus-500 pt-5">
        <div className="font-mono text-[34px] text-abus-900">9</div>
        <p className="mt-1 text-[13.5px] text-ink-500 leading-relaxed">Service verticals operated under one integrated quality management system.</p>
      </div>
      <div className="border-t-2 border-abus-900 pt-5">
        <div className="font-mono text-[34px] text-abus-900">9+</div>
        <p className="mt-1 text-[13.5px] text-ink-500 leading-relaxed">Named airline and industry partners across ground handling and technology.</p>
      </div>
    </div>
  </div>
</section>

{/* ============ CTA ============ */}
<section className="reveal bg-cloud py-20 border-t border-line">
  <div className="mx-auto max-w-[1440px] px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
    <h2 className="font-light text-[28px] lg:text-[34px] text-abus-900 tracking-tight">Want to see our compliance standing? <span className="font-bold">Review it here.</span></h2>
    <Link to="/compliance" className="shrink-0 border border-abus-900 text-abus-900 hover:bg-white font-semibold text-[14px] px-7 py-3.5 transition">View Compliance</Link>
  </div>
</section>

<RelatedLinks items={[{ to: "/compliance", title: "Compliance", text: "Our BCAS clearance, registrations and compliance framework." }, { to: "/services", title: "Services", text: "The nine service verticals our leadership oversees." }, { to: "/contact", title: "Contact & RFP", text: "Reach the leadership team through our RFP desk." }]} />
</main>
  );
}
