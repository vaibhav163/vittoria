import usePageMeta from "../hooks/usePageMeta";
import { Link } from "react-router-dom";

// The original site's footer linked to a sitemap.html that was never
// supplied, so this simple sitemap page replaces that dead link.
const LINKS = [
  ["/", "Home"],
  ["/services", "Services"],
  ["/services#leasing", "Services — Aircraft Leasing"],
  ["/services#mro", "Services — MRO & Cabin Maintenance"],
  ["/services#representation", "Services — Airline Representation"],
  ["/services#gse", "Services — Ground Support Equipment"],
  ["/services#clearance", "Services — Flight Clearance Agency"],
  ["/services#cargo", "Services — Airport & Cargo Management"],
  ["/services#consulting", "Services — Consulting & Quality Audits"],
  ["/services#training", "Services — Aviation Training & Manpower"],
  ["/services#drywash", "Services — Robotic Dry Wash"],
  ["/governance", "Governance & Leadership"],
  ["/compliance", "Compliance"],
  ["/news", "News & Media"],
  ["/contact", "Contact & RFP"],
  ["/privacy", "Privacy Policy"],
];

export default function Sitemap() {
  usePageMeta({ title: "Sitemap | Vittoria Aviation Private Limited", description: "Sitemap of vittoriaaviation.com — all pages of Vittoria Aviation Private Limited.", path: "/sitemap" });
  return (
    <main className="pt-[72px]">
      <section className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 lg:py-24">
        <h1 className="font-light text-[32px] lg:text-[44px] text-abus-900 tracking-tight">
          Sitemap
        </h1>
        <ul className="mt-8 space-y-3 text-[15px] text-ink-700">
          {LINKS.map(([to, label]) => (
            <li key={to + label}>
              <Link to={to} className="hover:text-abus-500 transition">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
