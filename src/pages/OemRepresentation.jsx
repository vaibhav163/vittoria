import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";
import Breadcrumbs from "../components/Breadcrumbs";
import { SplitFeature } from "../components/design";
import ContactBlock from "../components/ContactBlock";

export default function OemRepresentation() {
  usePageMeta({
    title: "OEM and Technology Representation | Vittoria Aviation",
    description:
      "India representation for aviation manufacturers — Guangtai, CCA Ltd., Aerowash and Aerotech, with BCAS-cleared after-sales service where equipment stands.",
    path: "/partnerships/oem-representation",
    crumbs: [
      { label: "Home", path: "/" },
      { label: "Partnerships & Investment", path: "/partnerships" },
      { label: "OEM and Technology Representation", path: "/partnerships/oem-representation" },
    ],
  });

  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Partnerships & Investment", to: "/partnerships" },
          { label: "OEM and Technology Representation" },
        ]}
      />

      <SplitFeature
        image="/images/service-gse.webp"
        alt="Pushback tug servicing an airliner"
        eyebrow="Partnerships · Representation"
        title="OEM and technology representation"
      >
        <p className="font-medium text-abus-900 text-[17px]">
          We represent selected manufacturers in the Indian market, and we
          represent them properly.
        </p>
        <p>
          Representation in India is often nominal — a name on a letterhead
          and a commission on an order. We take a different view. An effective
          representative carries the manufacturer’s technical case into the
          customer’s operation, specifies honestly against the requirement,
          and stands behind the equipment after it is delivered. Our BCAS
          clearance means we can service that equipment where it stands,
          airside, which most distributors cannot.
        </p>
        <p>
          We currently represent Guangtai and CCA Ltd. in ground support
          equipment, and work with Aerowash in robotic aircraft cleaning and
          Aerotech in engine core wash technology.
        </p>
        <p>
          For manufacturers considering India we offer regulatory navigation,
          BCAS-cleared airside access, technical presentation to airline and
          airport buyers, and after-sales maintenance capability. We are open
          to further representation where the product complements what we
          already carry.
        </p>
        <p>
          <Link
            to="/contact"
            className="inline-block bg-gold hover:bg-gold-dark text-white font-semibold text-[14px] px-7 py-3.5 transition"
          >
            Discuss representation in India
          </Link>
        </p>
      </SplitFeature>

      <ContactBlock />
    </main>
  );
}
