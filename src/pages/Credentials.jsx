import usePageMeta from "../hooks/usePageMeta";
import Breadcrumbs from "../components/Breadcrumbs";
import { SectionHead } from "../components/design";
import ContactBlock from "../components/ContactBlock";
import { CREDENTIALS } from "../data/capabilities";

const LOI = {
  short: "LOI",
  name: "Anchor customer Letter of Intent",
  full: "Issued 21 July 2026 by the engineering division of a leading Indian full-service carrier, signed at Deputy Vice President — Engineering level. Names Vittoria as a prospective MRO provider for cabin, component and line maintenance, subject to CAR-145 approval. Carrier name withheld publicly. The letter expressly states that it does not constitute an award of business, a work order, a service agreement, a contract, a guarantee of business or any binding commercial commitment.",
  validity: "Enabling document for the DGCA application",
};

const ROWS = [...CREDENTIALS, LOI];

export default function Credentials() {
  usePageMeta({
    title: "Credentials and Approvals | Vittoria Aviation",
    description:
      "Every Vittoria Aviation authorisation in one place — BCAS and DGCA clearances, MCA, GST, NSIC enlistment and DPIIT recognition, with references and validity.",
    path: "/about/credentials",
    crumbs: [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
      { label: "Credentials and Approvals", path: "/about/credentials" },
    ],
  });

  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "About", to: "/about" },
          { label: "Credentials and Approvals" },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 lg:py-24">
          <SectionHead
            eyebrow="About · Credentials"
            title="Credentials and approvals"
            text="Every capability we offer is anchored to an authorisation held in our own name. Nothing on this page is a claim. Each is a document, and each is available for inspection."
          />

          <div className="mt-12 overflow-x-auto reveal">
            <table className="w-full min-w-[760px] border border-line text-left">
              <thead>
                <tr className="bg-abus-900 text-white">
                  <th className="px-6 py-4 font-semibold text-[13.5px] w-[220px]">Authorisation</th>
                  <th className="px-6 py-4 font-semibold text-[13.5px]">Detail</th>
                  <th className="px-6 py-4 font-semibold text-[13.5px] w-[240px]">Validity</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r, i) => (
                  <tr key={r.short} className={i % 2 ? "bg-cloud" : "bg-white"}>
                    <td className="px-6 py-5 align-top">
                      <span className="font-mono text-[11px] tracking-[0.16em] text-gold-dark block">
                        {r.short}
                      </span>
                      <span className="font-semibold text-[14.5px] text-abus-900">{r.name}</span>
                    </td>
                    <td className="px-6 py-5 align-top text-[13.5px] leading-relaxed text-ink-700">
                      {r.full}
                    </td>
                    <td className="px-6 py-5 align-top text-[13.5px] text-ink-700">{r.validity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="reveal mt-8 max-w-3xl text-[13.5px] leading-relaxed text-ink-500">
            We do not publish scans of security clearances on this site.
            Publishing them invites forgery and exposes file references
            unnecessarily. State the reference — as we do above — and the
            certificate itself is available to procurement teams and partners
            on request.
          </p>
        </div>
      </section>

      <ContactBlock
        title="Verify us"
        text="Procurement and partner due-diligence teams can request any certificate referenced on this page. Write to us and we will share it under your process."
      />
    </main>
  );
}
