import usePageMeta from "../hooks/usePageMeta";
import Breadcrumbs from "../components/Breadcrumbs";
import { Hero, CredentialStrip, SectionHead } from "../components/design";
import ContactBlock from "../components/ContactBlock";

const SECTIONS = [
  {
    title: "Regulatory practice",
    text: "We work inside the applicable regulation or we decline the work. Where a client asks for something that cannot be delivered under the governing approval, we say so at proposal stage rather than at audit stage. This occasionally costs us work. It has never cost us a client.",
  },
  {
    title: "Standards we align to",
    text: "IATA IGOM and the Airport Handling Manual for ground operations; ISAGO GOSM for audit; the IATA Standard Ground Handling Agreement as commercial framework; DGCA Civil Aviation Requirements for maintenance and flight clearance; and BCAS requirements, including a location-specific Security Programme filed under AVSEC Order 01/2019 for each place of operation.",
  },
  {
    title: "Approved parts and materials",
    text: "We specify and fit OEM-approved parts. Non-approved components breach manufacturer requirements, create regulatory exposure and can invalidate insurance cover. Where a used or alternative component is the only practical option it is inspected, functionally tested and formally accepted on record before fitment, and the decision is documented.",
  },
  {
    title: "Records and auditability",
    text: "Every engagement generates the documentation a customer audit will ask for — work orders, inspection records, release-to-service, calibration status and training files. We build the record system as part of the work rather than reconstructing it before an audit, because a reconstructed record is not a record.",
  },
  {
    title: "Security",
    text: "We hold BCAS Auxiliary Service Provider clearance valid to December 2029, and DGCA security clearance at company and board level. Our personnel are cleared to work airside, and we sponsor Airport Entry Permits under that clearance.",
  },
];

export default function Quality() {
  usePageMeta({
    title: "Quality and Compliance | Vittoria Aviation",
    description:
      "The standards Vittoria Aviation works to and how we evidence them — IATA IGOM and ISAGO alignment, approved parts, audit-ready records, BCAS and DGCA security.",
    path: "/quality-and-compliance",
    crumbs: [
      { label: "Home", path: "/" },
      { label: "Quality and Compliance", path: "/quality-and-compliance" },
    ],
  });

  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Quality and Compliance" }]} />
      <Hero
        compact
        image="/images/governance.webp"
        alt="Modern corporate office buildings"
        eyebrow="Quality and Compliance"
        title="Quality and compliance"
        sub="The standards we work to, and how we evidence them."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 lg:py-24">
          <div className="grid md:grid-cols-2 gap-6">
            {SECTIONS.map((s, i) => (
              <article
                key={s.title}
                className={`reveal border border-line p-8 lg:p-10 ${
                  i === 0 ? "md:col-span-2 bg-cloud" : "bg-white"
                }`}
              >
                <h2 className="font-semibold text-[20px] text-abus-900">{s.title}</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-700 max-w-3xl">{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CredentialStrip />

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-14">
          <SectionHead
            eyebrow="Verify"
            title="Every reference, in one place"
            text="File numbers, issuing authorities and validity dates for all seven authorisations are published on our credentials page."
          />
        </div>
      </section>

      <ContactBlock
        title="Audit us"
        text="Customer and partner audits are welcome. Tell us your audit scope and we will assemble the record set before you arrive."
      />
    </main>
  );
}
