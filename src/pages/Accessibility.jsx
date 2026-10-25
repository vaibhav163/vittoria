import usePageMeta from "../hooks/usePageMeta";
import Breadcrumbs from "../components/Breadcrumbs";
import { SectionHead } from "../components/design";
import ContactBlock from "../components/ContactBlock";

export default function Accessibility() {
  usePageMeta({
    title: "Accessibility Statement | Vittoria Aviation",
    description:
      "Accessibility statement for vittoriaaviation.com — our conformance position against WCAG 2.2 Level AA, stated honestly, including known gaps.",
    path: "/accessibility",
    crumbs: [
      { label: "Home", path: "/" },
      { label: "Accessibility", path: "/accessibility" },
    ],
  });

  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Accessibility" }]} />
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 lg:py-24">
          <SectionHead
            eyebrow="Legal"
            title="Accessibility statement"
            text="We aim for WCAG 2.2 Level AA conformance, and we state our position openly — including where we currently fall short."
          />
          <div className="mt-12 max-w-3xl space-y-10 text-[15px] leading-relaxed text-ink-700">
            <div className="reveal">
              <h2 className="font-semibold text-[18px] text-abus-900">What we have done</h2>
              <ul className="mt-3 list-disc pl-5 space-y-2">
                <li>Semantic heading order and ARIA landmarks on every page.</li>
                <li>Full keyboard navigation with visible focus indicators.</li>
                <li>Text alternatives for all informative images.</li>
                <li>Reduced-motion support: animations and smooth scrolling are disabled for visitors who request it in their system settings.</li>
                <li>Colour pairings chosen for AA contrast; gold is used only for large text, rules and accents, never body copy.</li>
              </ul>
            </div>
            <div className="reveal">
              <h2 className="font-semibold text-[18px] text-abus-900">Known gaps</h2>
              <ul className="mt-3 list-disc pl-5 space-y-2">
                <li>An independent accessibility audit is scheduled; until it completes, we describe our conformance as partial.</li>
                <li>Some legacy documents linked in future may not yet be available in accessible formats — contact us and we will provide the content another way.</li>
              </ul>
            </div>
            <div className="reveal">
              <h2 className="font-semibold text-[18px] text-abus-900">Tell us if something blocks you</h2>
              <p className="mt-3">
                If any part of this site is difficult to use, write to{" "}
                <a href="mailto:vittoria@vittoriaaviation.com" className="text-gold-dark hover:text-gold transition">
                  vittoria@vittoriaaviation.com
                </a>{" "}
                and we will respond with the information in an accessible format
                and log the issue for remediation.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ContactBlock />
    </main>
  );
}
