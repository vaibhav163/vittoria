import usePageMeta from "../hooks/usePageMeta";
import Breadcrumbs from "../components/Breadcrumbs";
import RelatedLinks from "../components/RelatedLinks";
import { Link } from "react-router-dom";

export default function Services() {
  usePageMeta({ title: "Services | Vittoria Aviation Private Limited", description: "Aircraft leasing, MRO & cabin maintenance, airline representation, ground support equipment, flight clearance, airport & cargo management, consulting, training and robotic dry wash — by Vittoria Aviation across India.", path: "/services", crumbs: [{ label: "Home", path: "/" }, { label: "Services", path: "/services" }] });
  return (
    <main>
<Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services" }]} />
{/* ============ SERVICES HERO ============ */}
<section className="relative bg-white border-b border-line">
  <div className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-16 pb-16 lg:pt-24 lg:pb-20">
    <span className="font-mono text-[11px] tracking-[0.2em] text-abus-500 uppercase">Core Solutions</span>
    <h1 className="mt-4 font-light text-[42px] leading-[1.05] sm:text-[58px] lg:text-[72px] text-abus-900 tracking-tight max-w-3xl">
      Nine verticals,<br /><span className="font-bold">one accountable partner.</span>
    </h1>
    <p className="mt-7 text-[16px] lg:text-[18px] text-ink-500 max-w-xl leading-relaxed">
      Every service below is delivered under the same quality management system and BCAS-cleared operating standard — so accountability never gets lost between vendors.
    </p>
  </div>
</section>

{/* ============ SERVICE 1 — LEASING ============ */}
<section id="leasing" className="reveal border-b border-line bg-white">
  <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 lg:py-20 grid lg:grid-cols-[340px_1fr] gap-12">
    <div>
      <span className="font-mono text-[11px] text-ink-300">01</span>
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="text-abus-900 mt-3"><path d="M12 2v6M12 2l6 4M12 2L6 6M2 12h20M4 12l3-3M4 12l3 3M20 12l-3-3M20 12l-3 3M12 22v-6M12 22l-6-4M12 22l6-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
      <h2 className="mt-4 font-semibold text-[24px] text-abus-900">Aircraft Leasing</h2>
      <p className="mt-2 text-[13px] font-mono text-abus-500 uppercase tracking-wide">Dry & Wet Lease</p>
      <img src="/images/service-leasing.webp" alt="Private jet on the apron, ready for lease" loading="lazy" className="mt-6 w-full h-44 object-cover" />
    </div>
    <div>
      <p className="text-[15.5px] text-ink-700 leading-relaxed max-w-2xl">Vittoria Aviation structures dry and wet lease arrangements that give airlines and charter operators fleet flexibility without long-term capital exposure. We manage the commercial, technical and regulatory workstreams that sit behind every lease — from aircraft sourcing to delivery condition and return compliance.</p>
      <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-[14px] text-ink-700">
        <li className="flex gap-2"><span className="text-abus-500">—</span>Dry lease (ACMI-adjacent) structuring</li>
        <li className="flex gap-2"><span className="text-abus-500">—</span>Wet lease with crew & maintenance</li>
        <li className="flex gap-2"><span className="text-abus-500">—</span>Lease redelivery & condition audits</li>
        <li className="flex gap-2"><span className="text-abus-500">—</span>Regulatory & DGCA coordination</li>
      </ul>
    </div>
  </div>
</section>

{/* ============ SERVICE 2 — MRO ============ */}
<section id="mro" className="reveal border-b border-line bg-cloud">
  <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 lg:py-20 grid lg:grid-cols-[340px_1fr] gap-12">
    <div>
      <span className="font-mono text-[11px] text-ink-300">02</span>
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="text-abus-900 mt-3"><path d="M4 20l4-10 8 0 4 10M8 10V6a2 2 0 012-2h4a2 2 0 012 2v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      <h2 className="mt-4 font-semibold text-[24px] text-abus-900">MRO & Cabin Maintenance</h2>
      <p className="mt-2 text-[13px] font-mono text-abus-500 uppercase tracking-wide">Line & Turnaround</p>
      <img src="/images/service-mro.webp" alt="Jet engine close-up on the apron" loading="lazy" className="mt-6 w-full h-44 object-cover" />
    </div>
    <div>
      <p className="text-[15.5px] text-ink-700 leading-relaxed max-w-2xl">Our line maintenance and cabin readiness teams work to airline turnaround windows, keeping aircraft dispatch-ready between rotations. Cabin maintenance programs cover seat, galley and lavatory serviceability, cleanliness standards, and defect rectification logged against your maintenance system.</p>
      <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-[14px] text-ink-700">
        <li className="flex gap-2"><span className="text-abus-500">—</span>Line maintenance & transit checks</li>
        <li className="flex gap-2"><span className="text-abus-500">—</span>Cabin readiness & deep clean programs</li>
        <li className="flex gap-2"><span className="text-abus-500">—</span>Defect logging & rectification tracking</li>
        <li className="flex gap-2"><span className="text-abus-500">—</span>AOG support coordination</li>
      </ul>
    </div>
  </div>
</section>

{/* ============ SERVICE 3 — REPRESENTATION ============ */}
<section id="representation" className="reveal border-b border-line bg-white">
  <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 lg:py-20 grid lg:grid-cols-[340px_1fr] gap-12">
    <div>
      <span className="font-mono text-[11px] text-ink-300">03</span>
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="text-abus-900 mt-3"><path d="M3 12h18M3 6h18M3 18h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
      <h2 className="mt-4 font-semibold text-[24px] text-abus-900">Airline Representation</h2>
      <p className="mt-2 text-[13px] font-mono text-abus-500 uppercase tracking-wide">Commercial & Regulatory Liaison</p>
      <img src="/images/service-representation.webp" alt="Airline cabin interior" loading="lazy" className="mt-6 w-full h-44 object-cover" />
    </div>
    <div>
      <p className="text-[15.5px] text-ink-700 leading-relaxed max-w-2xl">Vittoria Aviation acts as an airline's on-ground presence across Indian airports — handling commercial coordination, slot and permissions liaison, and day-to-day regulatory interface, so foreign and non-resident carriers get consistent local representation without standing up their own station.</p>
      <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-[14px] text-ink-700">
        <li className="flex gap-2"><span className="text-abus-500">—</span>Commercial & sales representation</li>
        <li className="flex gap-2"><span className="text-abus-500">—</span>Slot & permissions liaison</li>
        <li className="flex gap-2"><span className="text-abus-500">—</span>Regulatory & airport authority interface</li>
        <li className="flex gap-2"><span className="text-abus-500">—</span>Local operational point of contact</li>
      </ul>
    </div>
  </div>
</section>

{/* ============ SERVICE 4 — GSE ============ */}
<section id="gse" className="reveal border-b border-line bg-cloud">
  <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 lg:py-20 grid lg:grid-cols-[340px_1fr] gap-12">
    <div>
      <span className="font-mono text-[11px] text-ink-300">04</span>
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="text-abus-900 mt-3"><rect x="3" y="8" width="18" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" /><path d="M7 8V6a2 2 0 012-2h6a2 2 0 012 2v2M7 18v2M17 18v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
      <h2 className="mt-4 font-semibold text-[24px] text-abus-900">Ground Support Equipment</h2>
      <p className="mt-2 text-[13px] font-mono text-abus-500 uppercase tracking-wide">Leasing & Fleet Maintenance</p>
      <img src="/images/service-gse.webp" alt="Pushback tug servicing an airliner" loading="lazy" className="mt-6 w-full h-44 object-cover" />
    </div>
    <div>
      <p className="text-[15.5px] text-ink-700 leading-relaxed max-w-2xl">We lease and maintain the tarmac equipment fleets that keep aircraft turnarounds on schedule — tow tractors, belt loaders, GPUs, air-start units and pushback tugs — held to a 98% serviceability target through a preventive maintenance program rather than reactive repair.</p>
      <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-[14px] text-ink-700">
        <li className="flex gap-2"><span className="text-abus-500">—</span>GSE fleet leasing (short & long term)</li>
        <li className="flex gap-2"><span className="text-abus-500">—</span>Preventive maintenance scheduling</li>
        <li className="flex gap-2"><span className="text-abus-500">—</span>98% serviceability standard</li>
        <li className="flex gap-2"><span className="text-abus-500">—</span>Spares & consumables management</li>
      </ul>
    </div>
  </div>
</section>

{/* ============ SERVICE 5 — CLEARANCE ============ */}
<section id="clearance" className="reveal border-b border-line bg-white">
  <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 lg:py-20 grid lg:grid-cols-[340px_1fr] gap-12">
    <div>
      <span className="font-mono text-[11px] text-ink-300">05</span>
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="text-abus-900 mt-3"><path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2" /></svg>
      <h2 className="mt-4 font-semibold text-[24px] text-abus-900">Flight Clearance Agency</h2>
      <p className="mt-2 text-[13px] font-mono text-abus-500 uppercase tracking-wide">Permits & Non-Scheduled Handling</p>
      <img src="/images/service-clearance.webp" alt="Aircraft on final approach to land" loading="lazy" className="mt-6 w-full h-44 object-cover" />
    </div>
    <div>
      <p className="text-[15.5px] text-ink-700 leading-relaxed max-w-2xl">For non-scheduled, charter and overflight operations, we manage the permit and refuelling coordination chain end to end — landing and overflight permits, refuelling arrangements, and ground handling for aircraft that don't have a standing station presence in India.</p>
      <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-[14px] text-ink-700">
        <li className="flex gap-2"><span className="text-abus-500">—</span>Landing & overflight permits</li>
        <li className="flex gap-2"><span className="text-abus-500">—</span>Refuelling coordination</li>
        <li className="flex gap-2"><span className="text-abus-500">—</span>Non-scheduled handling</li>
        <li className="flex gap-2"><span className="text-abus-500">—</span>Slot & documentation support</li>
      </ul>
    </div>
  </div>
</section>

{/* ============ SERVICE 6 — CARGO ============ */}
<section id="cargo" className="reveal border-b border-line bg-cloud">
  <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 lg:py-20 grid lg:grid-cols-[340px_1fr] gap-12">
    <div>
      <span className="font-mono text-[11px] text-ink-300">06</span>
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="text-abus-900 mt-3"><rect x="3" y="7" width="18" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.2" /><path d="M3 11h18M8 7V5h8v2" stroke="currentColor" strokeWidth="1.2" /></svg>
      <h2 className="mt-4 font-semibold text-[24px] text-abus-900">Airport & Cargo Management</h2>
      <p className="mt-2 text-[13px] font-mono text-abus-500 uppercase tracking-wide">Business Operations</p>
      <img src="/images/service-cargo.webp" alt="Air cargo containers at a freight terminal" loading="lazy" className="mt-6 w-full h-44 object-cover" />
    </div>
    <div>
      <p className="text-[15.5px] text-ink-700 leading-relaxed max-w-2xl">We take on end-to-end business management for airport and cargo operations — from warehouse and apron process design to staffing and vendor coordination — for operators who want operational control without building an in-house team from zero.</p>
      <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-[14px] text-ink-700">
        <li className="flex gap-2"><span className="text-abus-500">—</span>Cargo warehouse operations</li>
        <li className="flex gap-2"><span className="text-abus-500">—</span>Apron & ramp process management</li>
        <li className="flex gap-2"><span className="text-abus-500">—</span>Vendor & staffing coordination</li>
        <li className="flex gap-2"><span className="text-abus-500">—</span>Business performance reporting</li>
      </ul>
    </div>
  </div>
</section>

{/* ============ SERVICE 7 — CONSULTING ============ */}
<section id="consulting" className="reveal border-b border-line bg-white">
  <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 lg:py-20 grid lg:grid-cols-[340px_1fr] gap-12">
    <div>
      <span className="font-mono text-[11px] text-ink-300">07</span>
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="text-abus-900 mt-3"><path d="M9 11l3 3L22 4M21 12v6a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      <h2 className="mt-4 font-semibold text-[24px] text-abus-900">Consulting & Quality Audits</h2>
      <p className="mt-2 text-[13px] font-mono text-abus-500 uppercase tracking-wide">Independent Advisory</p>
      <img src="/images/service-consulting.webp" alt="Consultants reviewing audit documents" loading="lazy" className="mt-6 w-full h-44 object-cover" />
    </div>
    <div>
      <p className="text-[15.5px] text-ink-700 leading-relaxed max-w-2xl">Led by qualified aviation auditors, our consulting practice reviews ground operations, safety management and quality systems against regulatory and airline-specific standards, then works with your team to close the gaps — not just report on them.</p>
      <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-[14px] text-ink-700">
        <li className="flex gap-2"><span className="text-abus-500">—</span>Ground operations quality audits</li>
        <li className="flex gap-2"><span className="text-abus-500">—</span>Safety management system review</li>
        <li className="flex gap-2"><span className="text-abus-500">—</span>Regulatory readiness assessments</li>
        <li className="flex gap-2"><span className="text-abus-500">—</span>Corrective action follow-through</li>
      </ul>
    </div>
  </div>
</section>

{/* ============ SERVICE 8 — TRAINING ============ */}
<section id="training" className="reveal border-b border-line bg-cloud">
  <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 lg:py-20 grid lg:grid-cols-[340px_1fr] gap-12">
    <div>
      <span className="font-mono text-[11px] text-ink-300">08</span>
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="text-abus-900 mt-3"><circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.2" /><path d="M5 21c0-4 3-6.5 7-6.5S19 17 19 21" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
      <h2 className="mt-4 font-semibold text-[24px] text-abus-900">Aviation Training & Manpower</h2>
      <p className="mt-2 text-[13px] font-mono text-abus-500 uppercase tracking-wide">Certified Deployment</p>
      <img src="/images/service-training.webp" alt="Training and operations team at work" loading="lazy" className="mt-6 w-full h-44 object-cover" />
    </div>
    <div>
      <p className="text-[15.5px] text-ink-700 leading-relaxed max-w-2xl">We train and deploy certified ground operations manpower — ramp agents, load controllers, security-cleared personnel — to airline and airport standards, and can staff a full shift roster or backfill specific roles on demand.</p>
      <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-[14px] text-ink-700">
        <li className="flex gap-2"><span className="text-abus-500">—</span>Certified ground staff training</li>
        <li className="flex gap-2"><span className="text-abus-500">—</span>Security-cleared manpower deployment</li>
        <li className="flex gap-2"><span className="text-abus-500">—</span>Shift roster & backfill support</li>
        <li className="flex gap-2"><span className="text-abus-500">—</span>Recurrent & compliance training</li>
      </ul>
    </div>
  </div>
</section>

{/* ============ SERVICE 9 — DRY WASH ============ */}
<section id="drywash" className="reveal bg-abus-900 text-white">
  <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 lg:py-20 grid lg:grid-cols-[340px_1fr] gap-12">
    <div>
      <span className="font-mono text-[11px] text-abus-300">09 — Proprietary</span>
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="text-white mt-3"><path d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5L12 2z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" /><path d="M4 19l1-3M20 19l-1-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
      <h2 className="mt-4 font-semibold text-[24px] text-white">Robotic Dry Wash</h2>
      <p className="mt-2 text-[13px] font-mono text-abus-300 uppercase tracking-wide">Automated Exterior Cleaning</p>
      <img src="/images/service-drywash.webp" alt="Private jet gleaming at sunset" loading="lazy" className="mt-6 w-full h-44 object-cover" />
    </div>
    <div>
      <p className="text-[15.5px] text-abus-300 leading-relaxed max-w-2xl">Our automated, waterless exterior cleaning technology removes contaminants that add drag and weight without the water consumption, runoff handling, or extended ground time of conventional washing — cutting turnaround time while supporting fuel-efficiency goals.</p>
      <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-[14px] text-abus-300">
        <li className="flex gap-2"><span className="text-white">—</span>Waterless, low-residue formulation</li>
        <li className="flex gap-2"><span className="text-white">—</span>Reduced turnaround ground time</li>
        <li className="flex gap-2"><span className="text-white">—</span>Lower water & runoff footprint</li>
        <li className="flex gap-2"><span className="text-white">—</span>Scheduled fleet-wide programs</li>
      </ul>
    </div>
  </div>
</section>

{/* ============ CTA ============ */}
<section className="reveal bg-white py-20 border-t border-line">
  <div className="mx-auto max-w-[1440px] px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
    <h2 className="font-light text-[28px] lg:text-[34px] text-abus-900 tracking-tight">Ready to scope your requirement? <span className="font-bold">Let's talk.</span></h2>
    <Link to="/contact" className="shrink-0 bg-abus-900 hover:bg-abus-700 text-white font-semibold text-[14px] px-7 py-3.5 transition">Submit an RFP</Link>
  </div>
</section>

<RelatedLinks items={[{ to: "/governance", title: "Governance & Leadership", text: "The board and leadership overseeing our service delivery." }, { to: "/compliance", title: "Compliance", text: "BCAS clearance and the regulatory framework behind every service." }, { to: "/contact", title: "Contact & RFP", text: "Tell us your requirement and we will route it to the right desk." }]} />
</main>
  );
}
