import usePageMeta from "../hooks/usePageMeta";
import Breadcrumbs from "../components/Breadcrumbs";
import RelatedLinks from "../components/RelatedLinks";
import RfpForm from "../components/RfpForm";

export default function Contact() {
  usePageMeta({ title: "Contact & RFP | Vittoria Aviation Private Limited", description: "Contact Vittoria Aviation Private Limited — submit an RFP for aircraft leasing, MRO, ground handling, flight clearance or robotic dry wash. Registered office: Dwarka, New Delhi.", path: "/contact", crumbs: [{ label: "Home", path: "/" }, { label: "Contact", path: "/contact" }] });
  return (
    <main>
<Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact" }]} />
{/* ============ HERO ============ */}
<section className="relative bg-white border-b border-line">
  <div className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-16 pb-16 lg:pt-20">
    <span className="font-mono text-[11px] tracking-[0.2em] text-abus-500 uppercase">Contact</span>
    <h1 className="mt-4 font-light text-[42px] leading-[1.05] sm:text-[58px] lg:text-[68px] text-abus-900 tracking-tight max-w-3xl">
      Let's start<br /><span className="font-bold">a conversation.</span>
    </h1>
    <p className="mt-7 text-[16px] lg:text-[18px] text-ink-500 max-w-xl leading-relaxed">
      Tell us about your operation and we'll route it to the right desk — leasing, ground handling, MRO or consulting.
    </p>
  </div>
</section>

<section className="relative border-b border-line">
  <img src="/images/contact.webp" alt="Passenger relaxing in an airport lounge" loading="lazy" className="w-full h-[240px] lg:h-[340px] object-cover" />
</section>

{/* ============ FORM + DETAILS ============ */}
<section className="reveal bg-white py-16 lg:py-20">
  <div className="mx-auto max-w-[1440px] px-6 lg:px-12 grid lg:grid-cols-[1fr_1fr] gap-16">

    <div>
      <span className="font-mono text-[11px] tracking-[0.2em] text-abus-500 uppercase">Request For Proposal</span>
      <RfpForm variant="full" className="mt-7 space-y-4 max-w-md" />
    </div>

    <div className="lg:pl-10 lg:border-l lg:border-line grid sm:grid-cols-2 gap-10">
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

        <div className="font-mono text-[11px] tracking-[0.14em] text-ink-500 uppercase mt-7 mb-3">Business Hours</div>
        <p className="text-[14.5px] text-ink-500 leading-relaxed">Monday – Saturday<br />09:00 – 18:00 IST</p>
      </div>
      <div>
        <div className="font-mono text-[11px] tracking-[0.14em] text-ink-500 uppercase mb-3">Regulatory</div>
        <p className="text-[13.5px] text-ink-500 leading-relaxed">BCAS-cleared Auxiliary Service Provider<br />Ministry of Civil Aviation, Govt. of India</p>

        <div className="font-mono text-[11px] tracking-[0.14em] text-ink-500 uppercase mt-7 mb-3">Tax Identifiers</div>
        <p className="text-[13.5px] text-ink-500 font-mono leading-relaxed">GST: 07AAFCV8947HIZS<br />PAN: AAFCV8947H</p>

        <div className="font-mono text-[11px] tracking-[0.14em] text-ink-500 uppercase mt-7 mb-3">Location</div>
        <div className="mt-2 aspect-[4/3] border border-line bg-cloud overflow-hidden">
          <svg viewBox="0 0 300 220" className="w-full h-full">
            <defs>
              <pattern id="gridc" width="18" height="18" patternUnits="userSpaceOnUse"><path d="M18 0H0V18" fill="none" stroke="#E4E7EC" strokeWidth="1" /></pattern>
            </defs>
            <rect width="300" height="220" fill="url(#gridc)" />
            <circle cx="160" cy="110" r="4" fill="#00205B" />
            <circle cx="160" cy="110" r="10" fill="none" stroke="#00A0DE" strokeWidth="1"><animate attributeName="r" values="7;20;7" dur="3s" repeatCount="indefinite"></animate><animate attributeName="opacity" values="0.7;0;0.7" dur="3s" repeatCount="indefinite"></animate></circle>
            <text x="168" y="106" fontFamily="IBM Plex Mono" fontSize="9" fill="#0C1420">Dwarka, New Delhi</text>
          </svg>
        </div>
      </div>
    </div>
  </div>
</section>

<RelatedLinks items={[{ to: "/services", title: "Services", text: "Browse all nine services before you write to us." }, { to: "/governance", title: "Governance & Leadership", text: "The leadership team your enquiry reaches." }, { to: "/compliance", title: "Compliance", text: "Our BCAS clearance and registered entity details." }]} />
</main>
  );
}
