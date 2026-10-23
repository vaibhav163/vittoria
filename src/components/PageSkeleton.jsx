/**
 * Loading skeleton shown while a page chunk loads (React.lazy + Suspense
 * in App.jsx). Uses animate-pulse; disabled automatically for visitors
 * who prefer reduced motion (see the media query in src/index.css).
 */
export default function PageSkeleton() {
  return (
    <main className="pt-[72px]" aria-busy="true" aria-label="Loading page">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 lg:py-24">
        <div className="h-3 w-32 bg-line animate-pulse" />
        <div className="mt-6 h-12 w-2/3 bg-line animate-pulse" />
        <div className="mt-4 h-12 w-1/2 bg-line animate-pulse" />
        <div className="mt-8 h-4 w-full max-w-xl bg-line animate-pulse" />
        <div className="mt-3 h-4 w-3/4 max-w-xl bg-line animate-pulse" />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="h-44 bg-cloud border border-line animate-pulse" />
          <div className="h-44 bg-cloud border border-line animate-pulse" />
          <div className="h-44 bg-cloud border border-line animate-pulse" />
        </div>
      </div>
    </main>
  );
}
