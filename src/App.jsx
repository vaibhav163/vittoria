import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "./components/Toast";
import CookieConsent from "./components/CookieConsent";
import PageSkeleton from "./components/PageSkeleton";
import usePageEffects from "./hooks/usePageEffects";
import { initTracking } from "./lib/track";

// Pages are code-split: each page loads on demand and the PageSkeleton
// loading state shows while its chunk is on the way.
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Governance = lazy(() => import("./pages/Governance"));
const Compliance = lazy(() => import("./pages/Compliance"));
const News = lazy(() => import("./pages/News"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Sitemap = lazy(() => import("./pages/Sitemap"));
const NotFound = lazy(() => import("./pages/NotFound"));

function Layout() {
  const location = useLocation();
  usePageEffects();
  const isHome = location.pathname === "/";

  useEffect(() => {
    initTracking();
  }, []);

  return (
    <div className="bg-white text-ink-900 antialiased">
      <Header />
      <Suspense fallback={<PageSkeleton />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      {/* The original home page has its own footer with the RFP form in it;
          every other page uses the standard footer with a CTA button. */}
      <Footer variant={isHome ? "home" : "standard"} />
      <CookieConsent />
      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
