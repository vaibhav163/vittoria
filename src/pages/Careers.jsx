import usePageMeta from "../hooks/usePageMeta";
import Breadcrumbs from "../components/Breadcrumbs";
import { Hero, SectionHead } from "../components/design";
import ContactBlock from "../components/ContactBlock";

const ROLES = [
  "Aircraft maintenance engineers and prospective CAR-145 post-holders",
  "CAR-66 certifying staff",
  "GSE technicians with hydraulic and electrical specialisation",
  "Ground operations and cargo trainers",
  "Flight clearance and regulatory affairs specialists",
];

export default function Careers() {
  usePageMeta({
    title: "Careers | Vittoria Aviation",
    description:
      "Work at Vittoria Aviation — a technical organisation with no layer between our people and the work. Engineers, certifying staff, GSE technicians, trainers.",
    path: "/careers",
    crumbs: [
      { label: "Home", path: "/" },
      { label: "Careers", path: "/careers" },
    ],
  });

  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Careers" }]} />
      <Hero
        compact
        image="/images/service-training.webp"
        alt="Training and operations team at work"
        eyebrow="Careers"
        title="Careers"
        sub="We hire people who have done the job."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 lg:py-24 grid lg:grid-cols-2 gap-14">
          <div className="reveal space-y-5 text-[16px] leading-relaxed text-ink-700 max-w-2xl">
            <p>
              Vittoria Aviation is a technical organisation with no layer
              between our people and the work. An engineer here talks directly
              to the client’s Director of Engineering, and is expected to be
              right.
            </p>
            <p>
              We hold BCAS clearance and sponsor Airport Entry Permits, so our
              people work airside under our own authority rather than someone
              else’s.
            </p>
            <p>
              Write to us with a CV and a short note on the most difficult
              operational problem you have solved. We read every one.
            </p>
          </div>
          <div className="reveal">
            <SectionHead eyebrow="We Are Particularly Interested In" title="Open profiles" />
            <ul className="mt-8 space-y-4">
              {ROLES.map((r) => (
                <li key={r} className="flex gap-3 text-[15px] text-ink-700">
                  <span aria-hidden="true" className="mt-[10px] h-[3px] w-5 shrink-0 bg-gold" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactBlock
        title="Send your CV"
        text="Use the enquiry form and select the business line closest to your profile — or write to vittoria@vittoriaaviation.com with your CV and a short note on the hardest operational problem you have solved."
      />
    </main>
  );
}
