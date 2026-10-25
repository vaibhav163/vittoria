import usePageMeta from "../hooks/usePageMeta";
import Breadcrumbs from "../components/Breadcrumbs";
import { SectionHead } from "../components/design";
import ContactBlock from "../components/ContactBlock";

const ITEMS = [
  {
    h: "Use of this site",
    p: "This website is published by Vittoria Aviation Private Limited for general information about the Company and its services. Content may change without notice, including the status of applications and approvals described on it.",
  },
  {
    h: "Accuracy",
    p: "We take care that statements about licences, clearances and approvals match the documents we hold, and we date regulatory announcements in the Newsroom. Nothing on this site is a contractual offer, and no engagement exists until a written agreement is signed.",
  },
  {
    h: "Intellectual property",
    p: "Text, design and the Vittoria Aviation mark on this site belong to Vittoria Aviation Private Limited. Partner and manufacturer names and marks belong to their owners and are shown to identify relationships described on this site.",
  },
  {
    h: "Liability",
    p: "To the extent permitted by law, the Company accepts no liability for loss arising from reliance on information on this site without independent verification. Certificates and references named here are available for inspection on request.",
  },
  {
    h: "Governing law",
    p: "These terms are governed by the laws of India, with the courts of New Delhi having jurisdiction.",
  },
];

export default function Terms() {
  usePageMeta({
    title: "Terms of Use | Vittoria Aviation",
    description:
      "Terms of use for vittoriaaviation.com — published by Vittoria Aviation Private Limited, New Delhi.",
    path: "/terms",
    crumbs: [
      { label: "Home", path: "/" },
      { label: "Terms of Use", path: "/terms" },
    ],
  });

  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Terms of Use" }]} />
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 lg:py-24">
          <SectionHead eyebrow="Legal" title="Terms of use" />
          <div className="mt-12 max-w-3xl space-y-10">
            {ITEMS.map((it, i) => (
              <div key={it.h} className="reveal">
                <h2 className="font-semibold text-[18px] text-abus-900">
                  {i + 1}. {it.h}
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-700">{it.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactBlock />
    </main>
  );
}
