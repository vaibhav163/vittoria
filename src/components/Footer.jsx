import { Link } from "react-router-dom";
import { CAPABILITIES } from "../data/capabilities";

/**
 * Footer per Source Document Section 5.1: full sitemap in four columns,
 * registered office, CIN and GSTIN, and the legal links.
 */
export default function Footer() {
  return (
    <footer className="bg-abus-900 text-white">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <svg width="40" height="40" viewBox="0 0 100 100" aria-hidden="true">
                <rect width="100" height="100" rx="16" fill="#FFFFFF" />
                <path
                  d="M50 20 L57 46 L84 53 L57 57 L53 80 L50 64 L47 80 L43 57 L16 53 L43 46 Z"
                  fill="#14284B"
                />
              </svg>
              <span className="leading-none">
                <span className="block font-bold tracking-[0.14em] text-[15px]">VITTORIA</span>
                <span className="block font-medium tracking-[0.34em] text-[10.5px] text-abus-300 mt-1">
                  AVIATION
                </span>
              </span>
            </div>
            <p className="mt-6 text-[13.5px] leading-relaxed text-white/70 max-w-xs">
              A licensed, security-cleared aviation platform in New Delhi —
              maintenance, ground support equipment, flight clearance, training,
              consulting and manpower, on one regulatory base.
            </p>
            <p className="mt-6 font-mono text-[11px] tracking-wide text-gold-light">
              YOUR PARTNER IN EXCELLENCE
            </p>
          </div>

          <nav aria-label="About and capabilities">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-light">About</div>
            <ul className="mt-4 space-y-2.5 text-[13.5px] text-white/80">
              <li><Link to="/about" className="hover:text-white transition">Company</Link></li>
              <li><Link to="/about/leadership" className="hover:text-white transition">Leadership</Link></li>
              <li><Link to="/about/credentials" className="hover:text-white transition">Credentials and Approvals</Link></li>
              <li><Link to="/about/ecosystem" className="hover:text-white transition">Ecosystem</Link></li>
              <li><Link to="/newsroom" className="hover:text-white transition">Newsroom</Link></li>
              <li><Link to="/careers" className="hover:text-white transition">Careers</Link></li>
            </ul>
            <div className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-gold-light">Quality</div>
            <ul className="mt-4 space-y-2.5 text-[13.5px] text-white/80">
              <li><Link to="/quality-and-compliance" className="hover:text-white transition">Quality and Compliance</Link></li>
            </ul>
          </nav>

          <nav aria-label="Capabilities">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-light">Capabilities</div>
            <ul className="mt-4 space-y-2.5 text-[13.5px] text-white/80">
              {CAPABILITIES.map((c) => (
                <li key={c.slug}>
                  <Link to={`/capabilities/${c.slug}`} className="hover:text-white transition">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-light">Registered Office</div>
            <p className="mt-4 text-[13.5px] leading-relaxed text-white/80">
              Vittoria Aviation Private Limited
              <br />
              291, Block-A, Sector 8, Dwarka,
              <br />
              New Delhi 110077, India
            </p>
            <p className="mt-5 text-[13.5px] leading-relaxed text-white/80">
              <a href="mailto:vittoria@vittoriaaviation.com" className="hover:text-white transition">
                vittoria@vittoriaaviation.com
              </a>
              <br />
              <a href="mailto:baljinder@vittoriaaviation.com" className="hover:text-white transition">
                baljinder@vittoriaaviation.com
              </a>
              <br />
              <a href="tel:+919873444155" className="hover:text-white transition">+91 98734 44155</a>
              {"  ·  "}
              <a href="tel:+919818088199" className="hover:text-white transition">+91 98180 88199</a>
            </p>
            <p className="mt-5 font-mono text-[11.5px] leading-relaxed text-white/60">
              CIN U52231DL2017PTC316712
              <br />
              GSTIN 07AAFCV8947H1ZS · PAN AAFCV8947H
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-white/60">
          <span>© 2026 Vittoria Aviation Private Limited. All rights reserved.</span>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 uppercase tracking-wide">
            <Link to="/privacy" className="hover:text-white transition">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition">Terms</Link>
            <Link to="/accessibility" className="hover:text-white transition">Accessibility</Link>
            <Link to="/sitemap" className="hover:text-white transition">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
