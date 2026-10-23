import usePageMeta from "../hooks/usePageMeta";
import { Link } from "react-router-dom";

export default function NotFound() {
  usePageMeta({ title: "Page Not Found | Vittoria Aviation Private Limited", description: "", path: "/404", noindex: true });
  return (
    <main className="pt-[72px]">
      <section className="mx-auto max-w-[1440px] px-6 lg:px-12 py-24 text-center">
        <p className="font-mono text-[12px] tracking-[0.2em] text-abus-500 uppercase">404</p>
        <h1 className="mt-4 font-light text-[32px] lg:text-[44px] text-abus-900 tracking-tight">
          This page could not be found.
        </h1>
        <Link
          to="/"
          className="mt-8 inline-block bg-abus-900 hover:bg-abus-700 text-white font-semibold text-[13.5px] px-6 py-3 transition"
        >
          Back to Home
        </Link>
      </section>
    </main>
  );
}
