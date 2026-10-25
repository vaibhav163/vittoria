import usePageMeta from "../hooks/usePageMeta";
import Breadcrumbs from "../components/Breadcrumbs";
import { Hero, StatRow, SectionHead, CapabilityCard } from "../components/design";
import ContactBlock from "../components/ContactBlock";

const COMMITMENTS = [
  {
    title: "Regulatory excellence",
    text: "DGCA and BCAS compliant practice across every service line.",
  },
  {
    title: "SOP-driven delivery",
    text: "Procedures aligned to IATA IGOM and AHM, with regular internal audit.",
  },
  {
    title: "Trained manpower",
    text: "A pool of certified resources for Indian and international deployment.",
  },
  {
    title: "Technology-led",
    text: "Resource and cargo management systems, robotics and digital compliance.",
  },
];

export default function About() {
  usePageMeta({
    title: "About | Vittoria Aviation",
    description:
      "About Vittoria Aviation Private Limited — a New Delhi aviation services enterprise cleared by BCAS and DGCA, built for operators, by operators.",
    path: "/about",
    crumbs: [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
    ],
  });

  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "About" }]} />
      <Hero
        compact
        image="/images/compliance.webp"
        alt="Aircraft landing at dusk"
        eyebrow="About"
        title="About Vittoria Aviation"
        sub="Built for operators, by operators."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 lg:py-24 grid lg:grid-cols-[1.5fr_1fr] gap-14">
          <div className="reveal space-y-5 text-[16px] leading-relaxed text-ink-700 max-w-3xl">
            <p>
              Vittoria Aviation Private Limited is a New Delhi aviation services
              enterprise, cleared by the Bureau of Civil Aviation Security and by
              the Directorate General of Civil Aviation. We work with airport
              authorities, airlines, lessors, ground handlers, cargo operators
              and freight forwarders across the aviation value chain.
            </p>
            <p>
              The Company was incorporated in April 2017 and its object clause
              was widened to aviation services by special resolution in February
              2026, to accommodate the scope we now operate.
            </p>
            <p>
              What makes us different is unglamorous and decisive. Most aviation
              ventures in India begin at zero — no clearances, no airside access,
              no operating team. The security clearances that gate entry to an
              Indian airport take twelve to eighteen months and depend on
              ministries, not on money. We hold them today. That is the asset.
            </p>
            <p>
              Around that base we have built eight business lines that share the
              same clearances, the same workforce and substantially the same
              customers. A ground handler that buys equipment from us also
              trains with us. An airline that clears a ferry flight through us
              can have the aircraft washed by us. The platform compounds.
            </p>
          </div>
          <div className="reveal">
            <div className="bg-cloud border border-line p-8">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-dark">
                Company at a glance
              </div>
              <dl className="mt-5 space-y-4 text-[13.5px]">
                <div>
                  <dt className="text-ink-500">Incorporated</dt>
                  <dd className="font-medium text-abus-900 mt-0.5">25 April 2017, New Delhi</dd>
                </div>
                <div>
                  <dt className="text-ink-500">CIN</dt>
                  <dd className="font-mono text-[12.5px] text-abus-900 mt-0.5">U52231DL2017PTC316712</dd>
                </div>
                <div>
                  <dt className="text-ink-500">Registered office</dt>
                  <dd className="font-medium text-abus-900 mt-0.5">
                    291, Block-A, Sector 8, Dwarka, New Delhi 110077
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-500">Clearances</dt>
                  <dd className="font-medium text-abus-900 mt-0.5">
                    BCAS Auxiliary Service Provider · DGCA Flight Clearing Agency
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <StatRow
        items={[
          { value: "2017", label: "Incorporated in New Delhi" },
          { value: "24+ yrs", label: "Leadership experience across Europe, the Middle East and Asia" },
          { value: "8", label: "Business lines on one licensed platform" },
          { value: "Pan-India", label: "Operational readiness" },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 lg:py-24">
          <SectionHead eyebrow="Our Commitment" title="How we work" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMMITMENTS.map((c) => (
              <div key={c.title} className="reveal border border-line bg-white p-7">
                <h3 className="font-semibold text-[16.5px] text-abus-900">{c.title}</h3>
                <p className="mt-3 text-[14px] text-ink-500 leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            <CapabilityCard
              image="/images/service-training.webp"
              alt="Training and operations team at work"
              title="Leadership"
              text="Foreign entrants to Indian aviation rarely fail on capital or technology. They fail on execution. Meet the people accountable for ours."
              to="/about/leadership"
              label="Meet the leadership"
            />
            <CapabilityCard
              image="/images/governance.webp"
              alt="Modern corporate office buildings"
              title="Credentials and approvals"
              text="Every capability we offer is anchored to an authorisation held in our own name. Each is a document, and each is available for inspection."
              to="/about/credentials"
              label="Verify our credentials"
            />
          </div>
        </div>
      </section>

      <ContactBlock />
    </main>
  );
}
