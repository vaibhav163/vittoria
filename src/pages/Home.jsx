import usePageMeta from "../hooks/usePageMeta";
import { Link } from "react-router-dom";

export default function Home() {
  usePageMeta({ title: "Vittoria Aviation Private Limited | Aviation Infrastructure, MRO & Ground Handling — India", description: "Vittoria Aviation Private Limited — BCAS-cleared Auxiliary Service Provider offering aircraft leasing, MRO & cabin maintenance, airline representation, GSE leasing, flight clearance and robotic dry wash across India.", path: "/", crumbs: undefined });
  return (
    <main id="top">

{/* ============ HERO ============ */}
<section className="relative overflow-hidden pt-[72px] bg-white">
  <div className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-16 pb-10 lg:pt-24 lg:pb-14">
    <div className="inline-flex items-center gap-2 border border-line px-3.5 py-1.5 mb-8">
      <span className="w-1.5 h-1.5 rounded-full bg-abus-500"></span>
      <span className="font-mono text-[10.5px] tracking-[0.18em] text-ink-700 uppercase">BCAS Cleared Auxiliary Service Provider</span>
    </div>

    <h1 className="font-light text-[46px] leading-[1.05] sm:text-[64px] lg:text-[84px] text-abus-900 tracking-tight max-w-4xl">
      Your partner<br /><span className="font-bold">in excellence.</span>
    </h1>

    <div className="mt-9 flex flex-wrap items-end justify-between gap-8 max-w-4xl">
      <p className="text-[16px] lg:text-[18px] text-ink-500 max-w-lg leading-relaxed">
        Full-spectrum aviation infrastructure for airlines and airports across India — leasing, MRO, ground handling, flight clearance and Robotic Dry Wash technology, delivered to Government of India security standards.
      </p>
      <div className="flex flex-wrap items-center gap-3">
        <a href="#solutions" className="bg-abus-900 hover:bg-abus-700 text-white font-semibold text-[14px] px-7 py-3.5 transition">Explore Our Services</a>
        <a href="#contact" className="border border-abus-900 text-abus-900 font-semibold text-[14px] px-7 py-3.5 hover:bg-cloud transition flex items-center gap-2">
          Contact Sales
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" /></svg>
        </a>
      </div>
    </div>
  </div>

  {/* full-bleed line-art aviation graphic, Airbus icon-library style */}
  <div className="relative w-full h-[360px] lg:h-[520px] bg-cloud border-y border-line overflow-hidden">
    <svg viewBox="0 0 1440 520" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <line x1="0" y1="260" x2="1440" y2="260" stroke="#E4E7EC" strokeWidth="1" />
      <g transform="translate(230,150) scale(1.35)" fill="none" stroke="#00205B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 120 L360 120 M120 120 C130 60 150 20 190 10 C185 60 185 90 190 120 M300 60 L420 20 M300 100 L430 130 M190 10 L190 -10 M60 145 L520 145 C540 145 545 130 520 128 L60 128 C40 128 40 145 60 145 Z" />
        <circle cx="130" cy="145" r="10" />
        <circle cx="440" cy="145" r="10" />
      </g>
      <g transform="translate(880,300)" fill="none" stroke="#00A0DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
        <rect x="0" y="0" width="90" height="46" rx="4" />
        <circle cx="16" cy="52" r="9" />
        <circle cx="74" cy="52" r="9" />
        <path d="M90 14 L120 14 L120 40 L90 40" />
      </g>
      <g transform="translate(1040,320)" fill="none" stroke="#00205B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7">
        <rect x="0" y="10" width="60" height="30" rx="3" />
        <path d="M60 15 L85 -10 L85 40 L60 35" />
        <circle cx="12" cy="44" r="7" />
        <circle cx="48" cy="44" r="7" />
      </g>
      <text x="60" y="480" fontFamily="IBM Plex Mono" fontSize="11" fill="#6B7688" letterSpacing="1.5">FIG. 01 — GROUND OPERATIONS & FLEET SUPPORT</text>
    </svg>
  </div>
</section>

<section className="relative border-b border-line">
  <img src="/images/hero-aircraft.webp" alt="Aircraft wing above the clouds at sunset" className="w-full h-[280px] lg:h-[440px] object-cover" />
</section>

{/* ============ STATS BAR ============ */}
<section id="compliance" className="relative border-b border-line bg-white">
  <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-12">
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">

      <div className="reveal border-t-2 border-abus-900 pt-4">
        <div className="flap font-mono font-medium text-[30px] lg:text-[38px] text-abus-900"><span data-count="24" data-suffix="+">0</span></div>
        <div className="mt-1 text-[11.5px] tracking-wide text-ink-500 uppercase">Years leadership</div>
      </div>
      <div className="reveal border-t-2 border-abus-500 pt-4">
        <div className="flap font-mono font-medium text-[22px] lg:text-[26px] text-abus-500">Cleared</div>
        <div className="mt-1 text-[11.5px] tracking-wide text-ink-500 uppercase">BCAS security status</div>
      </div>
      <div className="reveal border-t-2 border-abus-900 pt-4">
        <div className="flap font-mono font-medium text-[30px] lg:text-[38px] text-abus-900"><span data-count="99" data-suffix="%">0</span></div>
        <div className="mt-1 text-[11.5px] tracking-wide text-ink-500 uppercase">On-time performance</div>
      </div>
      <div className="reveal border-t-2 border-abus-900 pt-4">
        <div className="flap font-mono font-medium text-[30px] lg:text-[38px] text-abus-900"><span data-count="98" data-suffix="%">0</span></div>
        <div className="mt-1 text-[11.5px] tracking-wide text-ink-500 uppercase">GSE serviceability</div>
      </div>
      <div className="reveal border-t-2 border-abus-500 pt-4 col-span-2 lg:col-span-1">
        <div className="flap font-mono font-medium text-[22px] lg:text-[26px] text-abus-900">PAN-India</div>
        <div className="mt-1 text-[11.5px] tracking-wide text-ink-500 uppercase">Operational footprint</div>
      </div>

    </div>
  </div>
</section>

{/* ============ CORE SOLUTIONS GRID ============ */}
<section id="solutions" className="relative bg-white py-24 lg:py-32">
  <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
    <div className="reveal grid lg:grid-cols-[1fr_1fr] gap-10 mb-16 items-end border-b border-line pb-10">
      <div>
        <span className="font-mono text-[11px] tracking-[0.2em] text-abus-500 uppercase">Core Solutions</span>
        <h2 className="mt-4 font-light text-[34px] lg:text-[46px] text-abus-900 tracking-tight leading-[1.08]">Nine verticals.<br /><span className="font-bold">One accountable partner.</span></h2>
      </div>
      <div className="lg:justify-self-end">
        <p className="text-ink-500 text-[15.5px] leading-relaxed max-w-md">From wet-lease aircraft to the tarmac hardware that turns them around, Vittoria Aviation operates the full chain of ground and airborne infrastructure under a single quality system.</p>
        <Link to="/services" className="mt-4 inline-flex items-center gap-2 text-abus-500 font-semibold text-[14px] underline-grow">View all services <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" /></svg></Link>
      </div>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-line">
      <article className="reveal border-r border-b border-line p-9 hover:bg-cloud transition">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-abus-900"><path d="M12 2v6M12 2l6 4M12 2L6 6M2 12h20M4 12l3-3M4 12l3 3M20 12l-3-3M20 12l-3 3M12 22v-6M12 22l-6-4M12 22l6-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
        <h3 className="mt-5 font-semibold text-[16.5px] text-abus-900">Aircraft Leasing</h3>
        <p className="mt-2 text-[13.5px] text-ink-500 leading-relaxed">Dry and wet lease structuring for fleet flexibility, backed by end-to-end operational support.</p>
      </article>
      <article className="reveal border-r border-b border-line p-9 hover:bg-cloud transition">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-abus-900"><path d="M4 20l4-10 8 0 4 10M8 10V6a2 2 0 012-2h4a2 2 0 012 2v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <h3 className="mt-5 font-semibold text-[16.5px] text-abus-900">MRO & Cabin Maintenance</h3>
        <p className="mt-2 text-[13.5px] text-ink-500 leading-relaxed">Line maintenance and cabin readiness programs engineered around airline turnaround times.</p>
      </article>
      <article className="reveal border-r border-b border-line p-9 hover:bg-cloud transition">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-abus-900"><path d="M3 12h18M3 6h18M3 18h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
        <h3 className="mt-5 font-semibold text-[16.5px] text-abus-900">Airline Representation</h3>
        <p className="mt-2 text-[13.5px] text-ink-500 leading-relaxed">On-ground representation covering commercial, operational and regulatory liaison.</p>
      </article>
      <article className="reveal border-r border-b border-line p-9 hover:bg-cloud transition">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-abus-900"><rect x="3" y="8" width="18" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" /><path d="M7 8V6a2 2 0 012-2h6a2 2 0 012 2v2M7 18v2M17 18v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
        <h3 className="mt-5 font-semibold text-[16.5px] text-abus-900">GSE Leasing</h3>
        <p className="mt-2 text-[13.5px] text-ink-500 leading-relaxed">Ground support equipment fleets leased and maintained to a 98% serviceability standard.</p>
      </article>
      <article className="reveal border-r border-b border-line p-9 hover:bg-cloud transition">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-abus-900"><path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2" /></svg>
        <h3 className="mt-5 font-semibold text-[16.5px] text-abus-900">Flight Clearance Agency</h3>
        <p className="mt-2 text-[13.5px] text-ink-500 leading-relaxed">Permits, refuelling coordination and non-scheduled handling clearances, managed door-to-door.</p>
      </article>
      <article className="reveal border-r border-b border-line p-9 hover:bg-cloud transition">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-abus-900"><rect x="3" y="7" width="18" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.2" /><path d="M3 11h18M8 7V5h8v2" stroke="currentColor" strokeWidth="1.2" /></svg>
        <h3 className="mt-5 font-semibold text-[16.5px] text-abus-900">Airport & Cargo Management</h3>
        <p className="mt-2 text-[13.5px] text-ink-500 leading-relaxed">End-to-end business management for airport and cargo operations at scale.</p>
      </article>
      <article className="reveal border-r border-b border-line p-9 hover:bg-cloud transition">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-abus-900"><path d="M9 11l3 3L22 4M21 12v6a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <h3 className="mt-5 font-semibold text-[16.5px] text-abus-900">Consulting & Quality Audits</h3>
        <p className="mt-2 text-[13.5px] text-ink-500 leading-relaxed">Independent aviation audits and advisory delivered by qualified aviation auditors.</p>
      </article>
      <article className="reveal border-r border-b border-line p-9 hover:bg-cloud transition">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-abus-900"><circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.2" /><path d="M5 21c0-4 3-6.5 7-6.5S19 17 19 21" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
        <h3 className="mt-5 font-semibold text-[16.5px] text-abus-900">Training & Manpower</h3>
        <p className="mt-2 text-[13.5px] text-ink-500 leading-relaxed">Certified aviation training programs and manpower deployment for ground operations.</p>
      </article>
      <article className="reveal border-r border-b border-line p-9 bg-abus-900 text-white hover:bg-abus-700 transition">
        <div className="font-mono text-[9.5px] tracking-[0.15em] text-abus-300 uppercase mb-1">Proprietary</div>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white"><path d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5L12 2z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" /><path d="M4 19l1-3M20 19l-1-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
        <h3 className="mt-4 font-semibold text-[16.5px]">Robotic Dry Wash</h3>
        <p className="mt-2 text-[13.5px] text-abus-300 leading-relaxed">Automated, waterless aircraft exterior cleaning technology that cuts turnaround time and water use.</p>
      </article>
    </div>
  </div>
</section>

{/* ============ FOOTPRINT MAP ============ */}
<section className="relative bg-cloud border-y border-line py-24 lg:py-28">
  <div className="mx-auto max-w-[1440px] px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
    <div className="reveal">
      <span className="font-mono text-[11px] tracking-[0.2em] text-abus-500 uppercase">Network</span>
      <h2 className="mt-4 font-light text-[30px] lg:text-[40px] text-abus-900 tracking-tight leading-tight">PAN-India, with reach<br /><span className="font-bold">into MENA & Europe.</span></h2>
      <p className="mt-5 text-ink-500 text-[15.5px] leading-relaxed max-w-md">Headquartered in Dwarka, New Delhi, our operational network spans India's primary and secondary airports, with partner-led coverage extending into the Middle East and Europe.</p>
      <div className="mt-9 flex gap-10">
        <div className="border-l-2 border-abus-900 pl-4"><div className="text-abus-900 text-[20px] font-semibold">India</div><div className="text-ink-500 text-[12px] uppercase tracking-wide mt-1">Core network</div></div>
        <div className="border-l-2 border-line pl-4"><div className="text-abus-900 text-[20px] font-semibold">MENA</div><div className="text-ink-500 text-[12px] uppercase tracking-wide mt-1">Partner network</div></div>
        <div className="border-l-2 border-line pl-4"><div className="text-abus-900 text-[20px] font-semibold">Europe</div><div className="text-ink-500 text-[12px] uppercase tracking-wide mt-1">Partner network</div></div>
      </div>
    </div>

    <div className="reveal relative aspect-[4/3] bg-white border border-line overflow-hidden">
      <svg viewBox="0 0 400 300" className="w-full h-full">
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0H0V20" fill="none" stroke="#F0F2F5" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#grid)" />
        <circle cx="230" cy="140" r="3" fill="#00205B" />
        <circle cx="230" cy="140" r="9" fill="none" stroke="#00A0DE" strokeWidth="1" opacity="0.6"><animate attributeName="r" values="6;22;6" dur="3s" repeatCount="indefinite"></animate><animate attributeName="opacity" values="0.7;0;0.7" dur="3s" repeatCount="indefinite"></animate></circle>
        <circle cx="150" cy="90" r="2.5" fill="#00A0DE" />
        <circle cx="180" cy="200" r="2.5" fill="#00A0DE" />
        <circle cx="280" cy="180" r="2.5" fill="#00A0DE" />
        <path d="M230 140 L150 90" stroke="#00A0DE" strokeWidth="0.7" opacity="0.5" />
        <path d="M230 140 L180 200" stroke="#00A0DE" strokeWidth="0.7" opacity="0.5" />
        <path d="M230 140 L280 180" stroke="#00A0DE" strokeWidth="0.7" opacity="0.5" />
        <text x="238" y="136" fill="#0C1420" fontFamily="IBM Plex Mono" fontSize="9">DEL — HQ</text>
      </svg>
    </div>
  </div>
</section>

{/* ============ LEADERSHIP ============ */}
<section id="leadership" className="relative bg-white py-24 lg:py-32">
  <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
    <div className="reveal mb-16 border-b border-line pb-8">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <span className="font-mono text-[11px] tracking-[0.2em] text-abus-500 uppercase">Governance</span>
          <h2 className="mt-4 font-light text-[34px] lg:text-[46px] text-abus-900 tracking-tight"><span className="font-bold">Leadership</span></h2>
        </div>
        <Link to="/governance" className="text-abus-500 font-semibold text-[14px] underline-grow">Full governance page →</Link>
      </div>
    </div>

    <div className="grid md:grid-cols-2 border-t border-l border-line">
      <div className="reveal border-r border-b border-line p-10">
        <div className="w-12 h-12 rounded-full border-2 border-abus-900 flex items-center justify-center font-mono text-[13px] text-abus-900 font-semibold">BP</div>
        <h3 className="mt-6 font-semibold text-[19px] text-abus-900">Baljinder Pal</h3>
        <div className="mt-1 font-mono text-[11px] tracking-[0.14em] text-abus-500 uppercase">Chief Executive Officer</div>
        <p className="mt-4 text-[14.5px] text-ink-500 leading-relaxed">24+ years of aviation leadership experience, holding an MBA from ENAC Toulouse — France's national civil aviation school.</p>
      </div>
      <div className="reveal border-r border-b border-line p-10">
        <div className="w-12 h-12 rounded-full border-2 border-abus-900 flex items-center justify-center font-mono text-[13px] text-abus-900 font-semibold">VP</div>
        <h3 className="mt-6 font-semibold text-[19px] text-abus-900">Vittoria Gautam Pal</h3>
        <div className="mt-1 font-mono text-[11px] tracking-[0.14em] text-abus-500 uppercase">Chief Operating Officer</div>
        <p className="mt-4 text-[14.5px] text-ink-500 leading-relaxed">Aviation auditor with a BBA and LLB, overseeing operational quality, compliance and audit governance across the group.</p>
      </div>
    </div>
  </div>
</section>

<section className="relative border-b border-line">
  <img src="/images/home-operations.webp" alt="Airliner parked at the terminal" loading="lazy" className="w-full h-[260px] lg:h-[380px] object-cover" />
</section>

{/* ============ PARTNERS ============ */}
<section id="partners" className="relative bg-cloud border-t border-line py-20 lg:py-24">
  <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
    <div className="reveal mb-12">
      <span className="font-mono text-[11px] tracking-[0.2em] text-abus-500 uppercase">Trusted By</span>
      <h2 className="mt-3 font-light text-[26px] lg:text-[32px] text-abus-900 tracking-tight"><span className="font-bold">Partners & Clients</span></h2>
    </div>
    <div className="reveal grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border-t border-l border-line">
      <div className="flex items-center justify-center h-24 border-r border-b border-line bg-white px-6 py-4 transition"><img src="/logos/air-india.png" alt="Air India" loading="lazy" className="max-h-12 w-auto object-contain" /></div>
      <div className="flex items-center justify-center h-24 border-r border-b border-line bg-white px-6 py-4 transition"><img src="/logos/spicejet.png" alt="SpiceJet" loading="lazy" className="max-h-12 w-auto object-contain" /></div>
      <div className="flex items-center justify-center h-24 border-r border-b border-line bg-white px-6 py-4 transition"><img src="/logos/us-bangla.png" alt="US-Bangla Airlines" loading="lazy" className="max-h-12 w-auto object-contain" /></div>
      <div className="flex items-center justify-center h-24 border-r border-b border-line bg-white px-6 py-4 transition"><img src="/logos/aerowash.png" alt="Aerowash" loading="lazy" className="max-h-12 w-auto object-contain" /></div>
      <div className="flex items-center justify-center h-24 border-r border-b border-line bg-white px-6 py-4 transition"><img src="/logos/guangtai.jpg" alt="Guangtai" loading="lazy" className="max-h-12 w-auto object-contain" /></div>
      <div className="flex items-center justify-center h-24 border-r border-b border-line bg-white grayscale hover:grayscale-0 transition font-semibold text-ink-500 hover:text-abus-900 text-[14px]">CCA Ltd</div>
      <div className="flex items-center justify-center h-24 border-r border-b border-line bg-white px-6 py-4 transition"><img src="/logos/vhr.png" alt="VHR" loading="lazy" className="max-h-12 w-auto object-contain" /></div>
      <div className="flex items-center justify-center h-24 border-r border-b border-line bg-white px-6 py-4 transition"><img src="/logos/aerotech.png" alt="Aerotech" loading="lazy" className="max-h-12 w-auto object-contain" /></div>
      <div className="flex items-center justify-center h-24 border-r border-b border-line bg-white grayscale hover:grayscale-0 transition font-semibold text-ink-500 hover:text-abus-900 text-[13px] text-center px-2">Akitu Aviation</div>
      <div className="flex items-center justify-center h-24 border-r border-b border-line bg-white text-ink-300 text-[11.5px] font-mono uppercase tracking-wide">+ More</div>
    </div>
    <p className="mt-4 text-[11px] text-ink-300 font-mono">Logos belong to their respective owners. CCA Ltd and Akitu Aviation are shown as text pending their official logo files.</p>
  </div>
</section>

{/* ============ CONTACT / RFP FOOTER ============ */}


</main>
  );
}
