import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-b border-line">
  <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
    <div className="flex items-center justify-between h-[72px]">
      <Link to="/" className="flex items-center gap-3 shrink-0">
        <svg width="26" height="26" viewBox="0 0 100 100" fill="none">
          <path d="M50 14 L58 44 L88 52 L58 57 L54 84 L50 66 L46 84 L42 57 L12 52 L42 44 Z" fill="#00205B" />
        </svg>
        <span className="leading-tight">
          <span className="block font-bold tracking-tight text-[14.5px] text-abus-900">VITTORIA AVIATION</span>
          <span className="block font-mono text-[9px] tracking-[0.2em] text-ink-500 uppercase">Your Partner in Excellence</span>
        </span>
      </Link>

      <nav className="hidden lg:flex items-center gap-8 font-medium text-[14px] text-ink-700">
        <div className="relative group h-[72px] flex items-center">
          <button className="flex items-center gap-1.5 underline-grow">
            Services
            <svg width="9" height="6" viewBox="0 0 10 6" className="mt-px"><path d="M1 1L5 5L9 1" stroke="#6B7688" strokeWidth="1.3" fill="none" /></svg>
          </button>
          <div className="mega absolute left-1/2 -translate-x-1/2 top-full w-[680px]">
            <div className="bg-white border border-line shadow-xl shadow-ink-900/5 p-8 grid grid-cols-2 gap-x-10 gap-y-1">
              <Link to="/services#leasing" className="block py-2.5 text-[13.5px] text-ink-700 hover:text-abus-500 transition">Aircraft Leasing — Dry & Wet</Link>
              <Link to="/services#mro" className="block py-2.5 text-[13.5px] text-ink-700 hover:text-abus-500 transition">MRO & Cabin Maintenance</Link>
              <Link to="/services#representation" className="block py-2.5 text-[13.5px] text-ink-700 hover:text-abus-500 transition">Airline Representation</Link>
              <Link to="/services#gse" className="block py-2.5 text-[13.5px] text-ink-700 hover:text-abus-500 transition">GSE Leasing</Link>
              <Link to="/services#clearance" className="block py-2.5 text-[13.5px] text-ink-700 hover:text-abus-500 transition">Flight Clearance Agency</Link>
              <Link to="/services#cargo" className="block py-2.5 text-[13.5px] text-ink-700 hover:text-abus-500 transition">Airport & Cargo Management</Link>
              <Link to="/services#consulting" className="block py-2.5 text-[13.5px] text-ink-700 hover:text-abus-500 transition">Consulting & Quality Audits</Link>
              <Link to="/services#training" className="block py-2.5 text-[13.5px] text-ink-700 hover:text-abus-500 transition">Training & Manpower</Link>
              <Link to="/services#drywash" className="block py-2.5 text-[13.5px] font-semibold text-abus-500">Robotic Dry Wash Technology →</Link>
            </div>
          </div>
        </div>
        <Link to="/governance" className="underline-grow">Governance</Link>
        <Link to="/compliance" className="underline-grow">Compliance</Link>
        <Link to="/news" className="underline-grow">News & Media</Link>
      </nav>

      <div className="hidden lg:flex items-center gap-5">
        <a href="tel:+919818088199" className="font-mono text-[12.5px] text-ink-500 hover:text-abus-900 transition">+91 98180 88199</a>
        <Link to="/contact" className="bg-abus-900 hover:bg-abus-700 text-white font-semibold text-[13.5px] px-6 py-2.5 transition">Contact Sales</Link>
      </div>

      <button className="lg:hidden p-2 text-abus-900" aria-label="Open menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M3 12h18M3 18h18" stroke="#00205B" strokeWidth="1.6" /></svg>
      </button>
    </div>
  </div>

  <div className={(menuOpen ? "" : "hidden ") + "lg:hidden border-t border-line bg-white px-6 py-5 space-y-1 font-medium text-ink-700"}>
    <Link to="/services" className="block py-2.5">Services</Link>
    <Link to="/governance" className="block py-2.5">Governance</Link>
    <Link to="/compliance" className="block py-2.5">Compliance</Link>
    <Link to="/news" className="block py-2.5">News & Media</Link>
    <Link to="/contact" className="block mt-3 bg-abus-900 text-white font-semibold text-center py-3">Contact Sales</Link>
  </div>
</header>
  );
}
