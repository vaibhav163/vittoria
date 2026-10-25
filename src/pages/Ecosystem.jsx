import usePageMeta from "../hooks/usePageMeta";
import Breadcrumbs from "../components/Breadcrumbs";
import { SectionHead } from "../components/design";
import ContactBlock from "../components/ContactBlock";

const GROUPS = [
  {
    title: "Airlines and operators",
    names: ["Air India", "SpiceJet", "US-Bangla Airlines"],
    note: "Plus non-scheduled and charter operators.",
    logos: [
      { src: "/logos/air-india.png", alt: "Air India" },
      { src: "/logos/spicejet.png", alt: "SpiceJet" },
      { src: "/logos/us-bangla.png", alt: "US-Bangla Airlines" },
    ],
  },
  {
    title: "Equipment and technology",
    names: ["Guangtai", "CCA Ltd.", "Aerowash", "Aerotech"],
    note: "Ground support equipment, robotic aircraft cleaning and engine core wash technology.",
    logos: [
      { src: "/logos/guangtai.jpg", alt: "Guangtai" },
      { src: "/logos/aerowash.png", alt: "Aerowash" },
      { src: "/logos/aerotech.png", alt: "Aerotech" },
    ],
  },
  {
    title: "Services and talent",
    names: ["VHR Global Technical Recruitment", "Akitu Aviation"],
    note: "Plus international ground handling partners and cargo and logistics operators.",
    logos: [{ src: "/logos/vhr.png", alt: "VHR" }],
  },
];

export default function Ecosystem() {
  usePageMeta({
    title: "Ecosystem | Vittoria Aviation",
    description:
      "Who Vittoria Aviation works with — airlines, equipment manufacturers, technology partners and international handlers across the aviation value chain.",
    path: "/about/ecosystem",
    crumbs: [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
      { label: "Ecosystem", path: "/about/ecosystem" },
    ],
  });

  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "About", to: "/about" },
          { label: "Ecosystem" },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 lg:py-24">
          <SectionHead
            eyebrow="About · Ecosystem"
            title="Who we work with"
            text="Airlines, equipment manufacturers, technology partners and international handlers."
          />

          <div className="mt-14 space-y-16">
            {GROUPS.map((g) => (
              <div key={g.title} className="reveal">
                <h3 className="font-semibold text-[20px] text-abus-900">{g.title}</h3>
                <p className="mt-2 text-[14.5px] text-ink-500">
                  {g.names.join("  ·  ")}
                </p>
                <p className="mt-1 text-[13.5px] text-ink-500">{g.note}</p>
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border-t border-l border-line max-w-4xl">
                  {g.logos.map((l) => (
                    <div
                      key={l.alt}
                      className="flex items-center justify-center h-24 border-r border-b border-line bg-white px-6 py-4"
                    >
                      <img
                        src={l.src}
                        alt={l.alt}
                        loading="lazy"
                        className="max-h-12 w-auto object-contain"
                      />
                    </div>
                  ))}
                  {g.title === "Equipment and technology" && (
                    <div className="flex items-center justify-center h-24 border-r border-b border-line bg-white font-semibold text-ink-500 text-[14px]">
                      CCA Ltd
                    </div>
                  )}
                  {g.title === "Services and talent" && (
                    <div className="flex items-center justify-center h-24 border-r border-b border-line bg-white font-semibold text-ink-500 text-[13px] text-center px-2">
                      Akitu Aviation
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="reveal mt-16 max-w-3xl text-[14px] leading-relaxed text-ink-500 border-t border-line pt-8">
            Partner and customer names are shown with permission where given.
            Contractual detail, references and the full engagement record are
            available to prospective partners under a non-disclosure agreement.
          </p>
        </div>
      </section>

      <ContactBlock
        title="Work with us"
        text="If your organisation belongs in this ecosystem — as a customer, a principal or a partner — the conversation starts here."
      />
    </main>
  );
}
