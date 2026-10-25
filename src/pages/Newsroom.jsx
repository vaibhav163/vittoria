import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";
import Breadcrumbs from "../components/Breadcrumbs";
import { Hero, SectionHead } from "../components/design";
import ContactBlock from "../components/ContactBlock";

/**
 * Newsroom seed items — the six launch subjects identified in the Source
 * Document (Section 6.19). Dates and categories are factual; article pages
 * follow in phase two.
 */
const ARTICLES = [
  {
    date: "August 2026",
    category: "Regulatory",
    title: "DGCA security clearance for Flight Clearing Agency enrolment",
    text: "The Directorate General of Civil Aviation has issued security clearance of the Company and its Board for enrolment as a Flight Clearing Agency under CAR Section 3, Series F, Part I.",
  },
  {
    date: "August 2026",
    category: "Company",
    title: "NSIC Government Purchase Enlistment granted",
    text: "Vittoria Aviation is now enlisted with the National Small Industries Corporation for aviation services (NIC 5223) and manpower services (NIC 5224 and 5223), valid to August 2028.",
  },
  {
    date: "July 2026",
    category: "MRO Programme",
    title: "Anchor Letter of Intent supports CAR-145 application",
    text: "The engineering division of a leading Indian full-service carrier has named Vittoria as a prospective MRO provider for cabin, component and line maintenance, subject to CAR-145 approval. The letter is not an award of business, and we present it on exactly that basis.",
  },
  {
    date: "February 2026",
    category: "Company",
    title: "Object clause widened to aviation services",
    text: "By special resolution under Section 13(1) of the Companies Act, 2013, the Company's object clause was widened to the aviation services scope we now operate.",
  },
  {
    date: "2026",
    category: "Partnerships",
    title: "OEM and technology relationships in place",
    text: "We represent Guangtai and CCA Ltd. in ground support equipment, and work with Aerowash in robotic aircraft cleaning and Aerotech in engine core wash technology.",
  },
  {
    date: "Technical note",
    category: "Insight",
    title: "Why after-sales, not price, decides Indian GSE tenders",
    text: "Most distributors cannot legally service equipment airside. Our BCAS clearance lets our technicians work where the equipment stands — and that decides more tenders than price does.",
  },
];

export default function Newsroom() {
  usePageMeta({
    title: "Newsroom | Vittoria Aviation",
    description:
      "Company announcements, regulatory milestones and technical notes from Vittoria Aviation Private Limited, New Delhi.",
    path: "/newsroom",
    crumbs: [
      { label: "Home", path: "/" },
      { label: "Newsroom", path: "/newsroom" },
    ],
  });

  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Newsroom" }]} />
      <Hero
        compact
        image="/images/news.webp"
        alt="Airliner in flight"
        eyebrow="Newsroom"
        title="From the Vittoria Aviation newsroom."
        sub="Company announcements, partnership updates and media resources — dated, factual, and verifiable against our credentials page."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 lg:py-24">
          <SectionHead eyebrow="Latest" title="Announcements" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-line">
            {ARTICLES.map((a) => (
              <article key={a.title} className="reveal border-r border-b border-line p-8 flex flex-col">
                <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-wide">
                  <span className="text-gold-dark">{a.category}</span>
                  <span className="text-ink-300">{a.date}</span>
                </div>
                <h3 className="mt-4 font-semibold text-[16.5px] leading-snug text-abus-900">
                  {a.title}
                </h3>
                <p className="mt-3 text-[13.5px] text-ink-500 leading-relaxed flex-1">{a.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 text-[13.5px] text-ink-500">
            Media enquiries:{" "}
            <Link to="/contact" className="text-gold-dark hover:text-gold transition">
              contact our media desk →
            </Link>
          </p>
        </div>
      </section>

      <ContactBlock
        title="Media and partnership enquiries"
        text="For interviews, verification of any announcement, or partnership conversations, write to us and the right person will reply."
      />
    </main>
  );
}
