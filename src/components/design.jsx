import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CREDENTIALS } from "../data/capabilities";

/**
 * Shared design components — the six-component library from the Source
 * Document (Section 4.6): C1 Hero, C2 Capability card, C3 Credential strip,
 * C4 Split feature, C5 Statistic row, C6 Contact block (see ContactBlock).
 */

export function GoldRule({ className = "" }) {
  return <span aria-hidden="true" className={`block h-[3px] w-12 bg-gold ${className}`} />;
}

export function Eyebrow({ children, light = false }) {
  return (
    <span
      className={`font-mono text-[11px] tracking-[0.22em] uppercase ${
        light ? "text-gold-light" : "text-gold-dark"
      }`}
    >
      {children}
    </span>
  );
}

/** C1 — full-bleed hero with navy overlay, one headline, one action.
 *  Optional `video` ({ mp4, webm, poster }) renders the V-01 hero loop:
 *  muted, looping, no sound — and only when the visitor has not asked for
 *  reduced motion and is not on a data-saving / 2G connection. Otherwise
 *  the still image carries the hero (Source Document, Section 8). */
export function Hero({ image, alt, eyebrow, title, sub, cta, compact = false, video = null }) {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (!video) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const conn = navigator.connection;
    const slow = conn && (conn.saveData || /2g/.test(conn.effectiveType || ""));
    if (!reduced && !slow) setShowVideo(true);
  }, [video]);

  return (
    <section className="relative bg-abus-900 text-white overflow-hidden">
      <img
        src={image}
        alt={alt}
        className={`absolute inset-0 h-full w-full object-cover ${
          compact ? "h-[420px] lg:h-[480px]" : ""
        }`}
        loading="eager"
      />
      {showVideo && video && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={video.poster}
          aria-hidden="true"
        >
          <source src={video.webm} type="video/webm" />
          <source src={video.mp4} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-abus-900/60" aria-hidden="true" />
      <div
        className={`relative mx-auto max-w-[1440px] px-6 lg:px-12 flex flex-col justify-center ${
          compact ? "py-24 lg:py-28" : "min-h-[86vh] py-28"
        }`}
      >
        <div className="max-w-3xl reveal">
          {eyebrow && <Eyebrow light>{eyebrow}</Eyebrow>}
          <h1 className="mt-5 font-bold text-[34px] leading-[1.08] sm:text-[44px] lg:text-[56px] tracking-tight">
            {title}
          </h1>
          {sub && (
            <p className="mt-6 text-[16px] lg:text-[19px] leading-relaxed text-white/85 max-w-2xl">
              {sub}
            </p>
          )}
          {cta && (
            <Link
              to={cta.to}
              className="mt-9 inline-block bg-gold hover:bg-gold-dark text-white font-semibold text-[14.5px] px-8 py-4 transition"
            >
              {cta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

/** C2 — capability / family card with 16:9 image and gold link. */
export function CapabilityCard({ image, alt, title, text, to, label = "Explore" }) {
  return (
    <Link
      to={to}
      className="group flex flex-col bg-white border border-line hover:border-abus-300 transition overflow-hidden"
    >
      <div className="aspect-[16/9] overflow-hidden bg-cloud">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover group-hover:scale-[1.03] transition duration-500"
        />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-semibold text-[19px] text-abus-900 leading-snug">{title}</h3>
        <p className="mt-3 text-[14.5px] text-ink-500 leading-relaxed flex-1">{text}</p>
        <span className="mt-5 font-mono text-[11.5px] uppercase tracking-wide text-gold-dark group-hover:text-gold transition">
          {label} →
        </span>
      </div>
    </Link>
  );
}

/** C3 — credential strip (navy band). The trust engine of the site. */
export function CredentialStrip({ showLink = true }) {
  return (
    <section className="bg-abus-900 text-white">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 lg:py-20">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow light>Credentials</Eyebrow>
            <h2 className="mt-3 font-semibold text-[26px] lg:text-[32px] tracking-tight">
              Licensed, cleared and government-enlisted
            </h2>
          </div>
          {showLink && (
            <Link
              to="/about/credentials"
              className="font-mono text-[12px] uppercase tracking-wide text-gold-light hover:text-gold transition"
            >
              Every certificate, in full →
            </Link>
          )}
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/15">
          {CREDENTIALS.map((c) => (
            <div key={c.short} className="border-r border-b border-white/15 p-6 reveal">
              <div className="font-mono text-[13px] font-medium tracking-[0.18em] text-gold-light">
                {c.short}
              </div>
              <p className="mt-3 text-[13.5px] leading-relaxed text-white/80">{c.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** C5 — statistic row on mist. Static figures (animated counters are
 *  prohibited by the Source Document, Section 4.7). */
export function StatRow({ items }) {
  return (
    <section className="bg-cloud border-y border-line">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-14 lg:py-16 grid grid-cols-2 lg:grid-cols-4 gap-10">
        {items.map((s) => (
          <div key={s.label} className="reveal">
            <div className="font-bold text-[40px] lg:text-[56px] leading-none text-abus-900 tracking-tight">
              {s.value}
            </div>
            <div className="mt-3 text-[13.5px] text-ink-500 leading-snug">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/** C4 — split feature: half image, half text. */
export function SplitFeature({ image, alt, eyebrow, title, children, reverse = false, dark = false }) {
  return (
    <section className={dark ? "bg-abus-900 text-white" : "bg-white"}>
      <div
        className={`mx-auto max-w-[1440px] px-6 lg:px-12 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center ${
          reverse ? "" : ""
        }`}
      >
        <div className={`reveal ${reverse ? "lg:order-2" : ""}`}>
          <div className="aspect-[4/3] overflow-hidden bg-cloud">
            <img src={image} alt={alt} loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="reveal">
          {eyebrow && <Eyebrow light={dark}>{eyebrow}</Eyebrow>}
          <h2
            className={`mt-3 font-semibold text-[26px] lg:text-[32px] tracking-tight leading-tight ${
              dark ? "text-white" : "text-abus-900"
            }`}
          >
            {title}
          </h2>
          <div
            className={`mt-5 space-y-4 text-[15.5px] leading-relaxed ${
              dark ? "text-white/85" : "text-ink-700"
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Section heading block used across pages. */
export function SectionHead({ eyebrow, title, text, light = false }) {
  return (
    <div className="reveal max-w-3xl">
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-3 font-semibold text-[26px] lg:text-[34px] tracking-tight leading-tight ${
          light ? "text-white" : "text-abus-900"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-4 text-[15.5px] leading-relaxed ${light ? "text-white/80" : "text-ink-500"}`}>
          {text}
        </p>
      )}
      <GoldRule className="mt-6" />
    </div>
  );
}
