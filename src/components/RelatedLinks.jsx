import { Link } from "react-router-dom";

/**
 * "Explore more" internal-linking strip at the bottom of inner pages.
 * Usage: <RelatedLinks items={[{ to: "/services", title: "Services", text: "..." }]} />
 */
export default function RelatedLinks({ items }) {
  return (
    <section className="bg-white border-t border-line py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <span className="font-mono text-[11px] tracking-[0.2em] text-abus-500 uppercase">
          Explore More
        </span>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-line">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group border-r border-b border-line p-8 hover:bg-cloud transition"
            >
              <h3 className="font-semibold text-[16px] text-abus-900 group-hover:text-abus-500 transition">
                {item.title}
              </h3>
              <p className="mt-2 text-[13.5px] text-ink-500 leading-relaxed">
                {item.text}
              </p>
              <span className="mt-4 inline-block font-mono text-[11px] uppercase tracking-wide text-abus-500">
                View page →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
