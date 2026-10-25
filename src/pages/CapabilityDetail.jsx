import { Link, useParams, Navigate } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";
import Breadcrumbs from "../components/Breadcrumbs";
import { Hero, CapabilityCard } from "../components/design";
import ContactBlock from "../components/ContactBlock";
import { CAPABILITIES, FAMILIES } from "../data/capabilities";

export default function CapabilityDetail() {
  const { slug } = useParams();
  const cap = CAPABILITIES.find((c) => c.slug === slug);

  usePageMeta({
    title: cap ? `${cap.name} | Vittoria Aviation` : "Capabilities | Vittoria Aviation",
    description: cap
      ? `${cap.title} — ${cap.strapline}`
      : "Eight business lines on one regulatory base.",
    path: cap ? `/capabilities/${cap.slug}` : "/capabilities",
    crumbs: cap
      ? [
          { label: "Home", path: "/" },
          { label: "Capabilities", path: "/capabilities" },
          { label: cap.name, path: `/capabilities/${cap.slug}` },
        ]
      : undefined,
  });

  if (!cap) return <Navigate to="/capabilities" replace />;

  const family = FAMILIES.find((f) => f.id === cap.family);
  const siblings = CAPABILITIES.filter(
    (c) => c.family === cap.family && c.slug !== cap.slug
  );

  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Capabilities", to: "/capabilities" },
          { label: cap.name },
        ]}
      />
      <Hero
        compact
        image={cap.image}
        alt={cap.alt}
        eyebrow={`${cap.num} · ${family.name}`}
        title={cap.title}
        sub={cap.strapline}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 lg:py-20 grid lg:grid-cols-[1.6fr_1fr] gap-14">
          <div className="reveal space-y-5 text-[16px] leading-relaxed text-ink-700 max-w-3xl">
            {cap.blocks.map((b, i) => (
              <p key={i}>
                {b.lead && <strong className="text-abus-900">{b.lead} </strong>}
                {b.text}
              </p>
            ))}
            <p className="pt-2">
              <Link
                to="/contact"
                className="inline-block bg-gold hover:bg-gold-dark text-white font-semibold text-[14px] px-7 py-3.5 transition"
              >
                {cap.cta}
              </Link>
            </p>
          </div>

          <div className="reveal space-y-6">
            {cap.highlight && (
              <div className="bg-abus-900 text-white p-8">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-light">
                  In plain terms
                </div>
                <p className="mt-4 text-[14.5px] leading-relaxed text-white/90">
                  {cap.highlight}
                </p>
              </div>
            )}
            <div className="bg-cloud border border-line p-8">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-dark">
                {family.name}
              </div>
              <p className="mt-3 text-[13.5px] leading-relaxed text-ink-700">{family.text}</p>
              <Link
                to="/capabilities"
                className="mt-4 inline-block font-mono text-[11.5px] uppercase tracking-wide text-gold-dark hover:text-gold transition"
              >
                All capabilities →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {siblings.length > 0 && (
        <section className="bg-cloud border-t border-line">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-14 lg:py-16">
            <h2 className="font-semibold text-[22px] text-abus-900">
              Also in {family.name}
            </h2>
            <div className="mt-8 grid md:grid-cols-2 gap-6 max-w-4xl">
              {siblings.map((s) => (
                <div key={s.slug} className="reveal">
                  <CapabilityCard
                    image={s.image}
                    alt={s.alt}
                    title={`${s.num} · ${s.name}`}
                    text={s.strapline}
                    to={`/capabilities/${s.slug}`}
                    label="View capability"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactBlock title={cap.cta} />
    </main>
  );
}
