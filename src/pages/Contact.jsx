import usePageMeta from "../hooks/usePageMeta";
import Breadcrumbs from "../components/Breadcrumbs";
import RfpForm from "../components/RfpForm";
import { Eyebrow } from "../components/design";

export default function Contact() {
  usePageMeta({
    title: "Contact | Vittoria Aviation",
    description:
      "Contact Vittoria Aviation Private Limited, Dwarka, New Delhi — general enquiries and the CEO's office, plus an enquiry form routed by business line.",
    path: "/contact",
    crumbs: [
      { label: "Home", path: "/" },
      { label: "Contact", path: "/contact" },
    ],
  });

  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact" }]} />

      <section className="relative bg-white border-b border-line">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-14 pb-14 lg:pt-16">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-4 font-semibold text-[38px] leading-[1.08] sm:text-[52px] lg:text-[60px] text-abus-900 tracking-tight max-w-3xl">
            Let’s start a conversation.
          </h1>
          <p className="mt-6 text-[16px] lg:text-[18px] text-ink-500 max-w-xl leading-relaxed">
            Tell us what you need — a specification, a station requirement, a
            clearance question or an investment thesis — and it will be routed
            by business line to the right person.
          </p>
        </div>
      </section>

      <section className="relative border-b border-line">
        <img
          src="/images/contact.webp"
          alt="Passenger relaxing in an airport lounge"
          loading="lazy"
          className="w-full h-[240px] lg:h-[320px] object-cover"
        />
      </section>

      <section className="reveal bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 grid lg:grid-cols-[1fr_1fr] gap-16">
          <div>
            <Eyebrow>Enquiry Form</Eyebrow>
            <h2 className="mt-3 font-semibold text-[24px] text-abus-900">Send an enquiry</h2>
            <RfpForm variant="full" className="mt-7 space-y-4 max-w-md" />
          </div>

          <div className="lg:pl-10 lg:border-l lg:border-line grid sm:grid-cols-2 gap-10">
            <div>
              <div className="font-mono text-[11px] tracking-[0.14em] text-ink-500 uppercase mb-3">
                Registered Office
              </div>
              <p className="text-[14.5px] text-abus-900 leading-relaxed">
                Vittoria Aviation Private Limited
                <br />
                291, Block-A, Sector 8, Dwarka,
                <br />
                New Delhi 110077, India
              </p>

              <div className="font-mono text-[11px] tracking-[0.14em] text-ink-500 uppercase mt-7 mb-3">
                General Enquiries
              </div>
              <p className="text-[14.5px] text-abus-900 leading-relaxed">
                <a href="mailto:vittoria@vittoriaaviation.com" className="hover:text-gold-dark transition">
                  vittoria@vittoriaaviation.com
                </a>
                <br />
                <a href="tel:+919873444155" className="hover:text-gold-dark transition">
                  +91 98734 44155
                </a>
              </p>

              <div className="font-mono text-[11px] tracking-[0.14em] text-ink-500 uppercase mt-7 mb-3">
                Chief Executive Officer
              </div>
              <p className="text-[14.5px] text-abus-900 leading-relaxed">
                Baljinder Pal
                <br />
                <a href="mailto:baljinder@vittoriaaviation.com" className="hover:text-gold-dark transition">
                  baljinder@vittoriaaviation.com
                </a>
                <br />
                <a href="tel:+919818088199" className="hover:text-gold-dark transition">
                  +91 98180 88199
                </a>
              </p>

              <div className="font-mono text-[11px] tracking-[0.14em] text-ink-500 uppercase mt-7 mb-3">
                Business Hours
              </div>
              <p className="text-[14.5px] text-ink-500 leading-relaxed">
                Monday – Saturday
                <br />
                09:00 – 18:00 IST
              </p>
            </div>
            <div>
              <div className="font-mono text-[11px] tracking-[0.14em] text-ink-500 uppercase mb-3">
                Regulatory
              </div>
              <p className="text-[13.5px] text-ink-500 leading-relaxed">
                BCAS-cleared Auxiliary Service Provider
                <br />
                Ministry of Civil Aviation, Govt. of India
              </p>

              <div className="font-mono text-[11px] tracking-[0.14em] text-ink-500 uppercase mt-7 mb-3">
                Company Identifiers
              </div>
              <p className="text-[13px] text-ink-500 font-mono leading-relaxed">
                CIN U52231DL2017PTC316712
                <br />
                GSTIN 07AAFCV8947H1ZS
                <br />
                PAN AAFCV8947H
              </p>

              <div className="font-mono text-[11px] tracking-[0.14em] text-ink-500 uppercase mt-7 mb-3">
                Location
              </div>
              <div className="mt-2 aspect-[4/3] border border-line bg-cloud overflow-hidden">
                <svg viewBox="0 0 300 220" className="w-full h-full" role="img" aria-label="Map — Dwarka, New Delhi">
                  <defs>
                    <pattern id="gridc" width="18" height="18" patternUnits="userSpaceOnUse">
                      <path d="M18 0H0V18" fill="none" stroke="#DDE4EC" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="300" height="220" fill="url(#gridc)" />
                  <circle cx="150" cy="105" r="5" fill="#14284B" />
                  <circle cx="150" cy="105" r="11" fill="none" stroke="#B08D3F" strokeWidth="1.5" />
                  <text x="164" y="100" fontFamily="IBM Plex Mono" fontSize="9.5" fill="#2B2B2B">
                    Sector 8, Dwarka
                  </text>
                  <text x="164" y="114" fontFamily="IBM Plex Mono" fontSize="9.5" fill="#5A5A5A">
                    New Delhi 110077
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
