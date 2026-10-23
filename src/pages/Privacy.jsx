import usePageMeta from "../hooks/usePageMeta";
import Breadcrumbs from "../components/Breadcrumbs";
import RelatedLinks from "../components/RelatedLinks";

export default function Privacy() {
  usePageMeta({ title: "Privacy Policy | Vittoria Aviation Private Limited", description: "Privacy policy of Vittoria Aviation Private Limited — how we collect, use and protect information submitted through vittoriaaviation.com.", path: "/privacy", crumbs: [{ label: "Home", path: "/" }, { label: "Privacy Policy", path: "/privacy" }] });
  return (
    <main>
<Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Privacy Policy" }]} />
{/* ============ HERO ============ */}
<section className="relative bg-white border-b border-line">
  <div className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-16 pb-14 lg:pt-24 lg:pb-16">
    <span className="font-mono text-[11px] tracking-[0.2em] text-abus-500 uppercase">Legal</span>
    <h1 className="mt-4 font-light text-[38px] leading-[1.05] sm:text-[52px] lg:text-[62px] text-abus-900 tracking-tight max-w-3xl">
      Privacy<br /><span className="font-bold">Policy.</span>
    </h1>
    <p className="mt-6 text-[15px] text-ink-500 max-w-xl leading-relaxed">
      Effective date: 25 August 2026. This policy explains what information Vittoria Aviation Private Limited collects through this website and RFP forms, and how it is used.
    </p>
  </div>
</section>

{/* ============ BODY ============ */}
<section className="reveal bg-white py-16 lg:py-20">
  <div className="mx-auto max-w-[900px] px-6 lg:px-12">

    <div className="border-t border-line pt-8 mb-10">
      <h2 className="font-semibold text-[19px] text-abus-900">1. Information we collect</h2>
      <p className="mt-3 text-[14.5px] text-ink-700 leading-relaxed">When you submit a Request for Proposal or contact form on this site, we collect the information you provide directly — including name, organisation, work email, phone number, service category of interest, and any details you include in your message. We do not knowingly collect information from visitors under 18 years of age.</p>
    </div>

    <div className="border-t border-line pt-8 mb-10">
      <h2 className="font-semibold text-[19px] text-abus-900">2. How we use it</h2>
      <p className="mt-3 text-[14.5px] text-ink-700 leading-relaxed">Information submitted through our forms is used solely to respond to your enquiry, route it to the relevant service desk (leasing, ground handling, MRO, consulting, etc.), and maintain a record of business communications. We do not sell or rent visitor information to third parties.</p>
    </div>

    <div className="border-t border-line pt-8 mb-10">
      <h2 className="font-semibold text-[19px] text-abus-900">3. Data sharing</h2>
      <p className="mt-3 text-[14.5px] text-ink-700 leading-relaxed">We may share information with regulatory authorities where required by law, including in connection with our status as a BCAS-cleared Auxiliary Service Provider, or with airline and airport partners directly relevant to fulfilling a specific enquiry you have made.</p>
    </div>

    <div className="border-t border-line pt-8 mb-10">
      <h2 className="font-semibold text-[19px] text-abus-900">4. Cookies & analytics</h2>
      <p className="mt-3 text-[14.5px] text-ink-700 leading-relaxed">This site may use essential cookies required for basic functionality and, where enabled, aggregated analytics to understand how visitors use our services pages. Analytics data is used in aggregate and is not linked to individual identities.</p>
    </div>

    <div className="border-t border-line pt-8 mb-10">
      <h2 className="font-semibold text-[19px] text-abus-900">5. Data retention & security</h2>
      <p className="mt-3 text-[14.5px] text-ink-700 leading-relaxed">We retain enquiry and business correspondence data for as long as necessary to service the relationship and meet our legal and regulatory recordkeeping obligations, and apply reasonable administrative and technical safeguards to protect it.</p>
    </div>

    <div className="border-t border-line pt-8 mb-10">
      <h2 className="font-semibold text-[19px] text-abus-900">6. Your rights</h2>
      <p className="mt-3 text-[14.5px] text-ink-700 leading-relaxed">You may request access to, correction of, or deletion of personal information you have submitted to us by contacting our team using the details below.</p>
    </div>

    <div className="border-t border-line pt-8">
      <h2 className="font-semibold text-[19px] text-abus-900">7. Contact</h2>
      <p className="mt-3 text-[14.5px] text-ink-700 leading-relaxed">Vittoria Aviation Private Limited, Dwarka, New Delhi, India.<br />
      <a href="tel:+919818088199" className="text-abus-500 hover:underline">+91 98180 88199</a> · <a href="tel:+919873444155" className="text-abus-500 hover:underline">+91 98734 44155</a></p>
      <p className="mt-4 text-[12.5px] text-ink-300 leading-relaxed">This policy is a general summary and does not constitute legal advice. For a review tailored to your jurisdiction or a formal data processing agreement, please contact us directly.</p>
    </div>

  </div>
</section>

<RelatedLinks items={[{ to: "/contact", title: "Contact & RFP", text: "Questions about your data — contact us here." }, { to: "/services", title: "Services", text: "The services this policy covers." }, { to: "/", title: "Home", text: "Back to the Vittoria Aviation homepage." }]} />
</main>
  );
}
