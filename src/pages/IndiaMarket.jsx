import usePageMeta from "../hooks/usePageMeta";
import Breadcrumbs from "../components/Breadcrumbs";
import { Hero, StatRow, SectionHead } from "../components/design";
import ContactBlock from "../components/ContactBlock";

const POLICY = [
  "GST on MRO services cut to 5 per cent with full input tax credit",
  "Nil basic customs duty on parts and tools to 31 March 2028",
  "Zero-rated GST on work subcontracted from foreign OEMs and MROs",
  "100 per cent foreign direct investment permitted under the automatic route",
];

export default function IndiaMarket() {
  usePageMeta({
    title: "The India Opportunity | Vittoria Aviation",
    description:
      "India is the fastest-growing aviation market in the world — fleet, MRO spend and GSE market figures, and the policy position behind the opportunity.",
    path: "/partnerships/india-market",
    crumbs: [
      { label: "Home", path: "/" },
      { label: "Partnerships & Investment", path: "/partnerships" },
      { label: "The India Opportunity", path: "/partnerships/india-market" },
    ],
  });

  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Partnerships & Investment", to: "/partnerships" },
          { label: "The India Opportunity" },
        ]}
      />
      <Hero
        compact
        image="/images/india-market.webp"
        alt="Airliner in flight against a clear sky"
        eyebrow="Partnerships · Market"
        title="The India opportunity"
        sub="India is the fastest-growing aviation market in the world, and it does not yet have the capacity to service itself."
      />

      <StatRow
        items={[
          { value: "812 → 2,250", label: "India’s commercial fleet, 2026 to 2035 (approx. 1,200 by 2031)" },
          { value: "USD 3.1bn → 6.9bn", label: "Indian MRO spend, 2026 to 2036 — 8.4% compound, the highest growth rate of any market" },
          { value: "85–90%", label: "Of Indian maintenance still performed abroad — over USD 1.5bn of foreign exchange drained every year" },
          { value: "USD 578m → 843m", label: "Indian GSE market, 2025 to 2034, with an electrification replacement cycle on top" },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 lg:py-24 grid lg:grid-cols-2 gap-14">
          <div className="reveal space-y-5 text-[16px] leading-relaxed text-ink-700 max-w-2xl">
            <p>
              <strong className="text-abus-900">Fleet.</strong> India’s
              commercial fleet is projected to grow from around 812 aircraft in
              2026 to approximately 1,200 by 2031 and 2,250 by 2035.
            </p>
            <p>
              <strong className="text-abus-900">Maintenance.</strong> Indian
              MRO spend is forecast to rise from USD 3.1 billion to USD 6.9
              billion between 2026 and 2036 — a compound rate of 8.4 per cent,
              the highest of any market in the world. Between 85 and 90 per
              cent of that maintenance is still performed abroad, draining over
              USD 1.5 billion of foreign exchange annually. Indian carriers
              hold an order backlog of roughly 1,800 aircraft against a
              domestic base of just 166 MRO facilities.
            </p>
            <p>
              <strong className="text-abus-900">Ground support equipment.</strong>{" "}
              The Indian market moves from USD 578 million in 2025 toward USD
              843 million by 2034, with an electrification replacement cycle
              layered on top of underlying growth.
            </p>
          </div>
          <div className="reveal">
            <div className="bg-abus-900 text-white p-8 lg:p-10">
              <SectionHead light eyebrow="Policy" title="Policy has moved decisively" />
              <ul className="mt-6 space-y-4">
                {POLICY.map((p) => (
                  <li key={p} className="flex gap-3 text-[14.5px] leading-relaxed text-white/90">
                    <span aria-hidden="true" className="mt-[9px] h-[3px] w-5 shrink-0 bg-gold" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactBlock
        title="Discuss the opportunity"
        text="The market case is public. The platform that can act on it — clearances, workforce and customers already in place — is the conversation worth having."
      />
    </main>
  );
}
