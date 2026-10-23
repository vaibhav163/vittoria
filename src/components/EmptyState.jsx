import { Link } from "react-router-dom";

/**
 * Empty state block — shown when a section has no content yet
 * (used by the News page until articles are published).
 */
export default function EmptyState({
  title,
  text,
  ctaLabel,
  ctaTo,
}) {
  return (
    <div className="border border-line bg-cloud px-8 py-16 text-center">
      <div className="mx-auto h-12 w-12 rounded-full bg-white border border-line flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 text-ink-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
      </div>
      <h3 className="mt-5 font-semibold text-[17px] text-abus-900">{title}</h3>
      <p className="mt-2 text-[14px] text-ink-500 leading-relaxed max-w-md mx-auto">
        {text}
      </p>
      {ctaLabel && ctaTo && (
        <Link
          to={ctaTo}
          className="mt-6 inline-block bg-abus-900 hover:bg-abus-700 text-white font-semibold text-[13px] px-6 py-3 transition"
        >
          {ctaLabel}
        </Link>
      )}
    </div>
  );
}
