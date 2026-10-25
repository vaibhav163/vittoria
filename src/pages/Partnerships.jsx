import usePageMeta from "../hooks/usePageMeta";
import Breadcrumbs from "../components/Breadcrumbs";
import { Hero, CapabilityCard, SectionHead } from "../components/design";
import ContactBlock from "../components/ContactBlock";

export default function Partnerships() {
  usePageMeta({
    title: "Partnerships & Investment | Vittoria Aviation",
    description:
      "Partner with a licensed, security-cleared Indian aviation platform — investment, joint ventures, OEM representation and the India opportunity.",
    path: "/partnerships",
    crumbs: [
      { label: "Home", path: "/" },
      { label: "Partnerships & Investment", path: "/partnerships" },
    ],
  });

  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Partnerships & Investment" }]} />
      <Hero
        compact
        image="/images/hero-aircraft.webp"
        alt="Aircraft wing above the clouds"
        eyebrow="Partnerships & Investment"
        title="Partnerships and investment"
        sub="India will service its own aircraft, maintain its own airside equipment and clear its own flights. The question is no longer whether, but who — and how quickly the capacity is built."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 lg:py-24">
          <SectionHead
            eyebrow="Work With Us"
            title="Three ways in"
            text="What we bring is the part that capital cannot accelerate: two national security clearances held today, an anchor letter of intent from a leading Indian carrier, government purchase enlistment, established OEM representation, and a leadership team that has run pan-India aviation operations at scale."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="reveal">
              <CapabilityCard
                image="/images/india-sky.webp"
                alt="Aircraft wing over mountain ranges"
                title="Investment and joint ventures"
                text="Equity participation, a dedicated joint venture for a single business line, or a commercial arrangement with an option to convert later."
                to="/partnerships/investment"
                label="The proposition"
              />
            </div>
            <div className="reveal">
              <CapabilityCard
                image="/images/india-market.webp"
                alt="Airliner in flight against a clear sky"
                title="The India opportunity"
                text="Fleet growth, MRO spend, the GSE market and a policy position that has moved decisively in favour of building capacity in India."
                to="/partnerships/india-market"
                label="The market case"
              />
            </div>
            <div className="reveal">
              <CapabilityCard
                image="/images/service-cargo.webp"
                alt="Air cargo containers at a freight terminal"
                title="OEM and technology representation"
                text="We represent selected manufacturers in the Indian market — and we can service what we sell, airside, under our own BCAS clearance."
                to="/partnerships/oem-representation"
                label="Representation"
              />
            </div>
          </div>
        </div>
      </section>

      <ContactBlock
        title="Request the information memorandum"
        text="A detailed information memorandum, including the regulatory certificates in full, is available to qualified parties under a non-disclosure agreement."
      />
    </main>
  );
}
