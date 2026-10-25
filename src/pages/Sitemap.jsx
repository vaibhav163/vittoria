import usePageMeta from "../hooks/usePageMeta";
import { Link } from "react-router-dom";
import { CAPABILITIES } from "../data/capabilities";

const LINKS = [
  ["/", "Home"],
  ["/about", "About — Company"],
  ["/about/leadership", "About — Leadership"],
  ["/about/credentials", "About — Credentials and Approvals"],
  ["/about/ecosystem", "About — Ecosystem"],
  ["/capabilities", "Capabilities"],
  ...CAPABILITIES.map((c) => [
    `/capabilities/${c.slug}`,
    `Capabilities — ${c.num} ${c.name}`,
  ]),
  ["/partnerships", "Partnerships & Investment"],
  ["/partnerships/investment", "Investment and Joint Ventures"],
  ["/partnerships/india-market", "The India Opportunity"],
  ["/partnerships/oem-representation", "OEM and Technology Representation"],
  ["/quality-and-compliance", "Quality and Compliance"],
  ["/newsroom", "Newsroom"],
  ["/careers", "Careers"],
  ["/contact", "Contact"],
  ["/privacy", "Privacy Policy"],
  ["/terms", "Terms of Use"],
  ["/accessibility", "Accessibility Statement"],
];

export default function Sitemap() {
  usePageMeta({
    title: "Sitemap | Vittoria Aviation",
    description:
      "Sitemap of vittoriaaviation.com — every page of Vittoria Aviation Private Limited.",
    path: "/sitemap",
  });
  return (
    <main>
      <section className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 lg:py-24">
        <span className="font-mono text-[11px] tracking-[0.2em] text-gold-dark uppercase">
          Sitemap
        </span>
        <h1 className="mt-4 font-semibold text-[32px] lg:text-[44px] text-abus-900 tracking-tight">
          Every page on this site
        </h1>
        <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-3 text-[15px] text-ink-700">
          {LINKS.map(([to, label]) => (
            <li key={to}>
              <Link to={to} className="hover:text-gold-dark transition">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
