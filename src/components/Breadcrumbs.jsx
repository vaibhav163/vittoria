import { Link } from "react-router-dom";

/**
 * Visible breadcrumb bar shown at the top of inner pages.
 * Usage: <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services" }]} />
 * The matching BreadcrumbList Schema.org data is injected by usePageMeta.
 */
export default function Breadcrumbs({ items }) {
  return (
    <div className="bg-white border-b border-line">
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-[1440px] px-6 lg:px-12 py-3 text-[12px] font-mono uppercase tracking-wide text-ink-500"
      >
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, i) => {
            const last = i === items.length - 1;
            return (
              <li key={item.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true" className="text-ink-300">/</span>}
                {item.to && !last ? (
                  <Link to={item.to} className="hover:text-abus-900 transition">
                    {item.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-abus-900 font-medium">
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
