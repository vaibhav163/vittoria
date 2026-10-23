import usePageMeta from "../hooks/usePageMeta";
import EmptyState from "../components/EmptyState";
import Breadcrumbs from "../components/Breadcrumbs";
import RelatedLinks from "../components/RelatedLinks";
import { Link } from "react-router-dom";

export default function News() {
  usePageMeta({ title: "News & Media | Vittoria Aviation Private Limited", description: "News, company announcements, partnership updates and media resources from Vittoria Aviation Private Limited.", path: "/news", crumbs: [{ label: "Home", path: "/" }, { label: "News & Media", path: "/news" }] });
  return (
    <main>
<Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "News & Media" }]} />
{/* ============ HERO ============ */}
<section className="relative bg-white border-b border-line">
  <div className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-16 pb-16 lg:pt-24 lg:pb-20">
    <span className="font-mono text-[11px] tracking-[0.2em] text-abus-500 uppercase">News & Media</span>
    <h1 className="mt-4 font-light text-[42px] leading-[1.05] sm:text-[58px] lg:text-[72px] text-abus-900 tracking-tight max-w-3xl">
      From the<br /><span className="font-bold">Vittoria Aviation newsroom.</span>
    </h1>
    <p className="mt-7 text-[16px] lg:text-[18px] text-ink-500 max-w-xl leading-relaxed">
      Company announcements, partnership updates and media resources. This section is being populated — check back soon, or contact our media desk directly.
    </p>
  </div>
</section>

<section className="relative border-b border-line">
  <img src="/images/news.webp" alt="Airliner in flight" loading="lazy" className="w-full h-[240px] lg:h-[340px] object-cover" />
</section>

{/* ============ ARTICLES (empty state until stories are published) ============ */}
<section className="reveal bg-white py-20 lg:py-24">
  <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
    <EmptyState
      title="No stories published yet"
      text="Company announcements, partnership updates and regulatory notices will appear here as they are released. For anything urgent, our media desk replies on the contact page."
      ctaLabel="Contact the media desk"
      ctaTo="/contact"
    />
  </div>
</section>

{/* ============ MEDIA CONTACT ============ */}
<section className="reveal bg-cloud border-t border-line py-20 lg:py-24">
  <div className="mx-auto max-w-[1440px] px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
    <div>
      <span className="font-mono text-[11px] tracking-[0.2em] text-abus-500 uppercase">Media Enquiries</span>
      <h2 className="mt-4 font-light text-[28px] lg:text-[34px] text-abus-900 tracking-tight leading-tight">Working on a story about Vittoria Aviation?</h2>
      <p className="mt-4 text-ink-500 text-[15px] leading-relaxed max-w-md">Reach our team directly for comment, briefing materials, or leadership interview requests.</p>
    </div>
    <div className="border border-line bg-white p-10">
      <div className="font-mono text-[11px] tracking-[0.14em] text-ink-500 uppercase mb-3">Direct Lines</div>
      <p className="text-[15px] text-abus-900 leading-relaxed">
        <a href="tel:+919818088199" className="hover:text-abus-500 transition">+91 98180 88199</a><br />
        <a href="tel:+919873444155" className="hover:text-abus-500 transition">+91 98734 44155</a>
      </p>
      <div className="font-mono text-[11px] tracking-[0.14em] text-ink-500 uppercase mt-7 mb-3">Registered Office</div>
      <p className="text-[15px] text-abus-900 leading-relaxed">Dwarka, New Delhi, India</p>
      <Link to="/contact" className="mt-7 inline-block bg-abus-900 hover:bg-abus-700 text-white font-semibold text-[13.5px] px-6 py-3 transition">Submit an Enquiry</Link>
    </div>
  </div>
</section>

<RelatedLinks items={[{ to: "/services", title: "Services", text: "What we do — nine aviation service verticals." }, { to: "/governance", title: "Governance & Leadership", text: "Meet the team behind the announcements." }, { to: "/contact", title: "Contact & RFP", text: "Media and business enquiries start here." }]} />
</main>
  );
}
