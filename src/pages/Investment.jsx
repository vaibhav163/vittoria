import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";
import Breadcrumbs from "../components/Breadcrumbs";
import { SplitFeature } from "../components/design";
import ContactBlock from "../components/ContactBlock";

export default function Investment() {
  usePageMeta({
    title: "Investment and Joint Ventures | Vittoria Aviation",
    description:
      "Partner in a licensed Indian aviation platform — CAR-145 MRO programme, clearances held today, anchor letter of intent, and structures that follow the partner's objectives.",
    path: "/partnerships/investment",
    crumbs: [
      { label: "Home", path: "/" },
      { label: "Partnerships & Investment", path: "/partnerships" },
      { label: "Investment and Joint Ventures", path: "/partnerships/investment" },
    ],
  });

  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Partnerships & Investment", to: "/partnerships" },
          { label: "Investment and Joint Ventures" },
        ]}
      />

      <SplitFeature
        image="/images/india-sky.webp"
        alt="Aircraft wing over mountain ranges"
        eyebrow="Partnerships · Investment"
        title="Partnership and investment"
      >
        <p className="font-medium text-abus-900 text-[17px]">
          India will service its own aircraft, maintain its own airside
          equipment and clear its own flights. The question is no longer
          whether, but who — and how quickly the capacity is built.
        </p>
        <p>
          We are seeking partners for the next stage of the platform. What we
          bring is the part that capital cannot accelerate: two national
          security clearances held today, an anchor letter of intent from a
          leading Indian carrier for CAR-145 work, government purchase
          enlistment, established OEM representation, and a leadership team
          that has run pan-India aviation operations at scale.
        </p>
        <p>
          What a partner typically brings is capital together with technical
          credibility — Part-145 or FAR-145 operating experience, component or
          rotable pool access, equipment depth, or OEM standing.
        </p>
        <p>
          We are open to equity participation in the Company, to a dedicated
          joint venture for a single business line, or to a commercial
          arrangement — exclusive distribution, representation or technology
          transfer — with an option to convert later. The right structure
          follows the partner’s own objectives rather than ours.
        </p>
        <p>
          A detailed information memorandum, including the regulatory
          certificates in full, is available to qualified parties under a
          non-disclosure agreement.
        </p>
        <p>
          <Link
            to="/contact"
            className="inline-block bg-gold hover:bg-gold-dark text-white font-semibold text-[14px] px-7 py-3.5 transition"
          >
            Request the information memorandum
          </Link>
        </p>
      </SplitFeature>

      <ContactBlock />
    </main>
  );
}
