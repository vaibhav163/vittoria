import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";
import {
  Hero,
  CapabilityCard,
  CredentialStrip,
  StatRow,
  SplitFeature,
  SectionHead,
  Eyebrow,
} from "../components/design";
import ContactBlock from "../components/ContactBlock";
import { FAMILIES } from "../data/capabilities";

export default function Home() {
  usePageMeta({
    title: "Vittoria Aviation | Licensed Aviation Services, New Delhi",
    description:
      "Licensed, security-cleared aviation services in New Delhi — MRO, GSE, flight clearance, training, consulting and manpower on one regulatory base.",
    path: "/",
  });

  return (
    <main>
      {/* C1 — Hero */}
      <Hero
        image="/images/home-operations.webp"
        alt="Airliner parked at the terminal with ground equipment in position"
        video={{
          mp4: "/videos/hero-loop.mp4",
          webm: "/videos/hero-loop.webm",
          poster: "/images/hero-poster.webp",
        }}
        eyebrow="Vittoria Aviation · New Delhi"
        title="The clearances that gate entry to Indian aviation. Held today."
        sub="Vittoria Aviation is a licensed, security-cleared aviation platform in New Delhi — maintenance, ground support equipment, flight clearance, training, consulting and manpower, on one regulatory base."
        cta={{ to: "/capabilities", label: "Explore our capabilities" }}
      />

      {/* Proposition band */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 lg:py-24">
          <SectionHead
            eyebrow="The Platform"
            title="Eight business lines, one regulatory base"
            text="Most aviation ventures in India begin at zero: no clearances, no airside access, no operating team. We do not. Our security clearances from the Bureau of Civil Aviation Security and the Directorate General of Civil Aviation are held today, and our leadership has built and run aviation operations at national scale in this market."
          />
          <p className="reveal mt-6 max-w-3xl text-[15.5px] leading-relaxed text-ink-700">
            One airside clearance serves all eight lines. One workforce delivers
            across them. A single airline relationship carries several invoices.
            That is the whole design of the business.
          </p>
        </div>
      </section>

      {/* C5 — Statistic row */}
      <StatRow
        items={[
          { value: "2017", label: "Incorporated in New Delhi" },
          { value: "24+ yrs", label: "Leadership experience across Europe, the Middle East and Asia" },
          { value: "8", label: "Business lines on one licensed platform" },
          { value: "Pan-India", label: "Operational readiness, on BCAS clearance with location-specific Security Programmes" },
        ]}
      />

      {/* C2 — Three capability family cards */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 lg:py-24">
          <SectionHead
            eyebrow="Capabilities"
            title="Three families of capability"
            text="Eight business lines, grouped so any one of them is two clicks from here — and every one of them anchored to an authorisation held in our own name."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {FAMILIES.map((f) => (
              <div key={f.id} className="reveal">
                <CapabilityCard
                  image={f.image}
                  alt={f.alt}
                  title={f.name}
                  text={`${f.line}. ${f.text}`}
                  to="/capabilities"
                  label="View the family"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* C3 — Credential strip */}
      <CredentialStrip />

      {/* Split feature — the India opportunity */}
      <SplitFeature
        image="/images/india-market.webp"
        alt="Airliner in flight against a clear sky"
        eyebrow="The India Opportunity"
        title="India will service its own aircraft. The capacity is being built now."
        reverse
      >
        <p>
          India’s commercial fleet is projected to grow from around 812 aircraft
          in 2026 to approximately 2,250 by 2035, while between 85 and 90 per
          cent of Indian maintenance is still performed abroad. Indian MRO spend
          is forecast to rise from USD 3.1 billion to USD 6.9 billion by 2036 —
          the highest growth rate of any market in the world.
        </p>
        <p>
          We are seeking partners for the next stage of the platform: capital
          together with technical credibility — Part-145 operating experience,
          component pool access, equipment depth, or OEM standing.
        </p>
        <p>
          <Link
            to="/partnerships/india-market"
            className="font-mono text-[12px] uppercase tracking-wide text-gold-dark hover:text-gold transition"
          >
            The India opportunity →
          </Link>{" "}
          <Link
            to="/partnerships/investment"
            className="ml-5 font-mono text-[12px] uppercase tracking-wide text-gold-dark hover:text-gold transition"
          >
            Partnership & investment →
          </Link>
        </p>
      </SplitFeature>

      {/* Leadership strip */}
      <section className="bg-abus-900 text-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 lg:py-20 grid lg:grid-cols-[1fr_auto] gap-10 items-center">
          <div className="reveal">
            <Eyebrow light>Leadership</Eyebrow>
            <h2 className="mt-3 font-semibold text-[26px] lg:text-[32px] tracking-tight leading-tight max-w-2xl">
              Built for operators, by operators.
            </h2>
            <p className="mt-4 text-white/80 text-[15.5px] leading-relaxed max-w-2xl">
              Our Chief Executive ran ground operations at national scale —
              accountable for USD 180 million of revenue, 9,300 direct staff and
              more than 600 daily aircraft movements at Delhi, ranked the
              world’s number one station in the GHI global rankings in 2023.
            </p>
          </div>
          <Link
            to="/about/leadership"
            className="reveal inline-block border border-gold text-gold-light hover:bg-gold hover:text-white font-semibold text-[13.5px] px-7 py-4 transition"
          >
            Meet the leadership
          </Link>
        </div>
      </section>

      {/* C6 — Contact block */}
      <ContactBlock />
    </main>
  );
}
