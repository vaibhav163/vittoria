import usePageMeta from "../hooks/usePageMeta";
import Breadcrumbs from "../components/Breadcrumbs";
import { SectionHead, Eyebrow } from "../components/design";
import ContactBlock from "../components/ContactBlock";

const QUALIFICATIONS = [
  "Master in Aviation Business Administration — ENAC Toulouse and LUISS Business School, Rome (conferred Rome, 2009)",
  "Airport Executive Leadership Programme — Airports Council International and Concordia University, John Molson School of Business, Montreal (2007)",
  "IATA Station and Ground Handling Management — passed with distinction (2007); IATA ISAGO (2010); IATA Managing People Performance, Singapore — passed with distinction (2018)",
  "Air Transport System — ICAO and Houston Airport System, Texas (2008)",
  "Six Sigma professional",
  "English, Italian, Hindi and Punjabi",
];

export default function Leadership() {
  usePageMeta({
    title: "Leadership | Vittoria Aviation",
    description:
      "Baljinder Pal, Chief Executive Officer of Vittoria Aviation — 24+ years running ground operations across Europe, the Middle East and Asia.",
    path: "/about/leadership",
    crumbs: [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
      { label: "Leadership", path: "/about/leadership" },
    ],
  });

  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "About", to: "/about" },
          { label: "Leadership" },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 lg:py-24">
          <SectionHead
            eyebrow="About · Leadership"
            title="Leadership"
            text="Foreign entrants to Indian aviation rarely fail on capital or technology. They fail on execution."
          />

          <div className="mt-14 grid lg:grid-cols-[340px_1fr] gap-12">
            {/* Portrait placeholder — commissioned portrait to follow (Source Document 7.4).
                No stock photo is used for a named person. */}
            <div className="reveal">
              <div className="aspect-[4/5] bg-abus-900 flex flex-col items-center justify-center text-white">
                <span className="font-bold text-[64px] tracking-tight">BP</span>
                <span className="mt-3 font-mono text-[10.5px] uppercase tracking-[0.2em] text-gold-light px-6 text-center">
                  Portrait to be commissioned
                </span>
              </div>
              <div className="mt-5">
                <div className="font-semibold text-[17px] text-abus-900">Baljinder Pal</div>
                <div className="text-[13.5px] text-ink-500">Chief Executive Officer</div>
                <a
                  href="mailto:baljinder@vittoriaaviation.com"
                  className="mt-2 block text-[13.5px] text-gold-dark hover:text-gold transition"
                >
                  baljinder@vittoriaaviation.com
                </a>
                <a
                  href="tel:+919818088199"
                  className="block text-[13.5px] text-gold-dark hover:text-gold transition"
                >
                  +91 98180 88199
                </a>
              </div>
            </div>

            <div className="reveal space-y-5 text-[15.5px] leading-relaxed text-ink-700 max-w-3xl">
              <p className="font-medium text-abus-900 text-[17px]">
                24+ years across Europe, the Middle East and Asia
              </p>
              <p>
                Baljinder Pal has spent his career running ground operations at
                scale. Between 2022 and 2025 he was Senior Vice President and
                Head of Operations, Pan-India, at India’s largest ground
                handler, accountable for USD 180 million of revenue in
                FY2024-25, 9,300 direct staff and more than 600 daily aircraft
                movements at Delhi. During that period Delhi was ranked the
                world’s number one station in the GHI global rankings, in 2023
                — the first time an Indian ground handling operation had
                achieved that.
              </p>
              <p>
                Before India he held senior accountability in demanding
                operating environments: General Manager at Menzies Aviation,
                Baghdad International Airport; Chief Operating Officer for
                dnata in the Republic of Iraq; and Manager Airside Operations
                for Swissport at Jeddah International Airport. Earlier he was
                Vice President Ramp Operations in Delhi, led the Çelebi Delhi
                station start-up, and worked with Aviapartner and ATA Handling
                in Milan.
              </p>
              <p>
                He is currently also Chief Executive Officer of an EASA-approved
                MRO in India — a non-competing appointment covering business
                development, strategy, profit and loss, and pan-India MRO
                operations.
              </p>

              <div className="pt-4">
                <Eyebrow>Qualifications</Eyebrow>
                <ul className="mt-4 space-y-3">
                  {QUALIFICATIONS.map((q) => (
                    <li key={q} className="flex gap-3">
                      <span aria-hidden="true" className="mt-[9px] h-[3px] w-5 shrink-0 bg-gold" />
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Second leader named in the Company's records */}
          <div className="mt-20 border-t border-line pt-12 grid lg:grid-cols-[340px_1fr] gap-12">
            <div className="reveal">
              <div className="aspect-[4/5] bg-abus-500 flex flex-col items-center justify-center text-white">
                <span className="font-bold text-[64px] tracking-tight">VGP</span>
                <span className="mt-3 font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/80 px-6 text-center">
                  Portrait to be commissioned
                </span>
              </div>
              <div className="mt-5">
                <div className="font-semibold text-[17px] text-abus-900">Vittoria Gautam Pal</div>
                <div className="text-[13.5px] text-ink-500">Director</div>
              </div>
            </div>
            <div className="reveal text-[15.5px] leading-relaxed text-ink-700 max-w-3xl">
              <p>
                A director of Vittoria Aviation Private Limited, named on the
                Board that holds the Company’s DGCA security clearance at
                company and board level.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactBlock
        title="Talk to the leadership team"
        text="Our leadership reads every serious enquiry personally. Write to us about a capability, a station requirement or a partnership."
      />
    </main>
  );
}
