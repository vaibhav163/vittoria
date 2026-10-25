import RfpForm from "./RfpForm";
import { Eyebrow } from "./design";

/**
 * C6 — contact block closing every page (Source Document, Section 4.6):
 * short form with business-line selector, plus direct email and telephone.
 */
export default function ContactBlock({
  title = "Tell us what you need",
  text = "Most conversations start with a specification, a station requirement, a clearance question or an investment thesis. Send us yours and you will hear from someone who has done the job, not from a sales desk.",
}) {
  return (
    <section className="bg-cloud border-t border-line">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 lg:py-24 grid lg:grid-cols-2 gap-14">
        <div className="reveal">
          <Eyebrow>Contact</Eyebrow>
          <h2 className="mt-3 font-semibold text-[28px] lg:text-[36px] text-abus-900 tracking-tight leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-ink-500 text-[15px] leading-relaxed max-w-md">{text}</p>
          <div className="mt-8 space-y-2 text-[14.5px]">
            <p>
              <span className="font-mono text-[11px] uppercase tracking-wide text-ink-500 block">
                General enquiries
              </span>
              <a href="mailto:vittoria@vittoriaaviation.com" className="text-abus-900 hover:text-gold-dark transition">
                vittoria@vittoriaaviation.com
              </a>{" "}
              ·{" "}
              <a href="tel:+919873444155" className="text-abus-900 hover:text-gold-dark transition">
                +91 98734 44155
              </a>
            </p>
            <p className="pt-2">
              <span className="font-mono text-[11px] uppercase tracking-wide text-ink-500 block">
                Baljinder Pal, Chief Executive Officer
              </span>
              <a href="mailto:baljinder@vittoriaaviation.com" className="text-abus-900 hover:text-gold-dark transition">
                baljinder@vittoriaaviation.com
              </a>{" "}
              ·{" "}
              <a href="tel:+919818088199" className="text-abus-900 hover:text-gold-dark transition">
                +91 98180 88199
              </a>
            </p>
          </div>
        </div>
        <div className="reveal">
          <RfpForm variant="short" className="space-y-4 max-w-md" />
        </div>
      </div>
    </section>
  );
}
