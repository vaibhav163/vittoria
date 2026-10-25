import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CAPABILITIES, FAMILIES } from "../data/capabilities";

/**
 * Header per Source Document Section 5.1:
 * - secondary bar: Newsroom | Careers (plus phone)
 * - primary nav: About | Capabilities | Partnerships & Investment |
 *   Quality and Compliance | Contact — five items, dropdowns for groups
 * - persistent gold action: "Request a capability statement"
 */
const ABOUT_LINKS = [
  { to: "/about", label: "Company" },
  { to: "/about/leadership", label: "Leadership" },
  { to: "/about/credentials", label: "Credentials and Approvals" },
  { to: "/about/ecosystem", label: "Ecosystem" },
];
const PARTNER_LINKS = [
  { to: "/partnerships", label: "Overview" },
  { to: "/partnerships/investment", label: "Investment and Joint Ventures" },
  { to: "/partnerships/india-market", label: "The India Opportunity" },
  { to: "/partnerships/oem-representation", label: "OEM and Technology Representation" },
];

function LogoMark({ size = 38 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <rect width="100" height="100" rx="16" fill="#14284B" />
      <path
        d="M50 20 L57 46 L84 53 L57 57 L53 80 L50 64 L47 80 L43 57 L16 53 L43 46 Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

function Drop({ label, to, children, wide = false }) {
  return (
    <div className="group relative">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center gap-1.5 px-1 py-2 text-[13.5px] font-medium transition ${
            isActive ? "text-gold-dark" : "text-abus-900 hover:text-gold-dark"
          }`
        }
      >
        {label}
        <svg width="9" height="6" viewBox="0 0 9 6" aria-hidden="true" className="mt-[1px]">
          <path d="M1 1l3.5 3.5L8 1" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      </NavLink>
      <div className="mega absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
        <div
          className={`bg-white border border-line shadow-xl p-3 ${
            wide ? "w-[620px]" : "w-72"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <>
      {/* Secondary bar */}
      <div className="bg-abus-900 text-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 h-9 flex items-center justify-between text-[11.5px]">
          <span className="font-mono tracking-wide text-white/70 hidden sm:block">
            BCAS-cleared · DGCA-cleared · New Delhi, India
          </span>
          <span className="font-mono tracking-wide text-white/70 sm:hidden">
            New Delhi, India
          </span>
          <nav className="flex items-center gap-5" aria-label="Secondary">
            <Link to="/newsroom" className="hover:text-gold-light transition">Newsroom</Link>
            <Link to="/careers" className="hover:text-gold-light transition">Careers</Link>
            <a href="tel:+919873444155" className="hover:text-gold-light transition hidden md:inline">
              +91 98734 44155
            </a>
          </nav>
        </div>
      </div>

      {/* Primary bar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-line">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="flex items-center justify-between h-[72px] gap-6">
            <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Vittoria Aviation — home">
              <LogoMark />
              <span className="leading-none">
                <span className="block font-bold tracking-[0.14em] text-[15px] text-abus-900">
                  VITTORIA
                </span>
                <span className="block font-medium tracking-[0.34em] text-[10.5px] text-abus-500 mt-1">
                  AVIATION
                </span>
              </span>
            </Link>

            <nav className="hidden xl:flex items-center gap-7" aria-label="Primary">
              <Drop label="About" to="/about">
                {ABOUT_LINKS.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="block px-3 py-2.5 text-[13.5px] text-ink-700 hover:bg-cloud hover:text-abus-900 transition"
                  >
                    {l.label}
                  </Link>
                ))}
              </Drop>

              <Drop label="Capabilities" to="/capabilities" wide>
                <div className="grid grid-cols-3 gap-2">
                  {FAMILIES.map((f) => (
                    <div key={f.id} className="px-2">
                      <div className="px-1 pb-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-gold-dark">
                        {f.name}
                      </div>
                      {CAPABILITIES.filter((c) => c.family === f.id).map((c) => (
                        <Link
                          key={c.slug}
                          to={`/capabilities/${c.slug}`}
                          className="block px-1 py-2 text-[13px] text-ink-700 hover:text-abus-900 hover:bg-cloud transition"
                        >
                          <span className="font-mono text-[11px] text-ink-300 mr-2">{c.num}</span>
                          {c.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
                <Link
                  to="/capabilities"
                  className="block mt-2 border-t border-line px-3 pt-3 pb-1 text-[12.5px] font-medium text-gold-dark hover:text-gold transition"
                >
                  All capabilities →
                </Link>
              </Drop>

              <Drop label="Partnerships & Investment" to="/partnerships">
                {PARTNER_LINKS.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="block px-3 py-2.5 text-[13.5px] text-ink-700 hover:bg-cloud hover:text-abus-900 transition"
                  >
                    {l.label}
                  </Link>
                ))}
              </Drop>

              <NavLink
                to="/quality-and-compliance"
                className={({ isActive }) =>
                  `text-[13.5px] font-medium transition ${
                    isActive ? "text-gold-dark" : "text-abus-900 hover:text-gold-dark"
                  }`
                }
              >
                Quality and Compliance
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-[13.5px] font-medium transition ${
                    isActive ? "text-gold-dark" : "text-abus-900 hover:text-gold-dark"
                  }`
                }
              >
                Contact
              </NavLink>
            </nav>

            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="hidden lg:inline-block bg-gold hover:bg-gold-dark text-white font-semibold text-[13px] px-5 py-3 transition"
              >
                Request a capability statement
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                aria-expanded={menuOpen}
                aria-label="Toggle menu"
                className="xl:hidden flex flex-col justify-center items-center w-11 h-11 border border-line"
              >
                <span className="block w-5 h-[2px] bg-abus-900 mb-[5px]" />
                <span className="block w-5 h-[2px] bg-abus-900 mb-[5px]" />
                <span className="block w-5 h-[2px] bg-abus-900" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="xl:hidden border-t border-line bg-white max-h-[75vh] overflow-y-auto" aria-label="Mobile">
            <div className="px-6 py-5 space-y-6 text-[14.5px]">
              <div>
                <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-gold-dark mb-2">About</div>
                {ABOUT_LINKS.map((l) => (
                  <Link key={l.to} to={l.to} onClick={close} className="block py-1.5 text-ink-700">{l.label}</Link>
                ))}
              </div>
              <div>
                <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-gold-dark mb-2">Capabilities</div>
                <Link to="/capabilities" onClick={close} className="block py-1.5 font-medium text-abus-900">All capabilities</Link>
                {CAPABILITIES.map((c) => (
                  <Link key={c.slug} to={`/capabilities/${c.slug}`} onClick={close} className="block py-1.5 text-ink-700">
                    <span className="font-mono text-[11px] text-ink-300 mr-2">{c.num}</span>
                    {c.name}
                  </Link>
                ))}
              </div>
              <div>
                <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-gold-dark mb-2">Partnerships & Investment</div>
                {PARTNER_LINKS.map((l) => (
                  <Link key={l.to} to={l.to} onClick={close} className="block py-1.5 text-ink-700">{l.label}</Link>
                ))}
              </div>
              <div className="space-y-1.5 border-t border-line pt-4">
                <Link to="/quality-and-compliance" onClick={close} className="block py-1 font-medium text-abus-900">Quality and Compliance</Link>
                <Link to="/newsroom" onClick={close} className="block py-1 font-medium text-abus-900">Newsroom</Link>
                <Link to="/careers" onClick={close} className="block py-1 font-medium text-abus-900">Careers</Link>
                <Link to="/contact" onClick={close} className="block py-1 font-medium text-abus-900">Contact</Link>
              </div>
              <Link
                to="/contact"
                onClick={close}
                className="block text-center bg-gold text-white font-semibold text-[14px] px-5 py-3.5"
              >
                Request a capability statement
              </Link>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
