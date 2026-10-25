import usePageMeta from "../hooks/usePageMeta";
import Breadcrumbs from "../components/Breadcrumbs";
import { Hero, CapabilityCard, SectionHead } from "../components/design";
import ContactBlock from "../components/ContactBlock";
import { FAMILIES, CAPABILITIES } from "../data/capabilities";

export default function Capabilities() {
  usePageMeta({
    title: "Capabilities | Vittoria Aviation",
    description:
      "Eight business lines on one regulatory base — MRO, GSE, flight clearance, training, consulting, robotic dry wash, manpower and India market entry.",
    path: "/capabilities",
    crumbs: [
      { label: "Home", path: "/" },
      { label: "Capabilities", path: "/capabilities" },
    ],
  });

  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Capabilities" }]} />
      <Hero
        compact
        image="/images/hero-aircraft.webp"
        alt="Aircraft wing above the clouds"
        eyebrow="Capabilities"
        title="Capabilities"
        sub="Eight business lines. One regulatory base. One workforce. Aviation service companies are usually assembled from whatever work is available. Ours is built the other way round — from the clearances we could obtain and defend, outward into the services those clearances make possible."
      />

      {FAMILIES.map((f, fi) => (
        <section key={f.id} className={fi % 2 ? "bg-cloud border-y border-line" : "bg-white"}>
          <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 lg:py-20">
            <SectionHead
              eyebrow={`Family ${fi + 1}`}
              title={f.name}
              text={`${f.line}. ${f.text}`}
            />
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CAPABILITIES.filter((c) => c.family === f.id).map((c) => (
                <div key={c.slug} className="reveal">
                  <CapabilityCard
                    image={c.image}
                    alt={c.alt}
                    title={`${c.num} · ${c.name}`}
                    text={c.strapline}
                    to={`/capabilities/${c.slug}`}
                    label="View capability"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <ContactBlock />
    </main>
  );
}
