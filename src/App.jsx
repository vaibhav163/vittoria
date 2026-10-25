import { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "./components/Toast";
import CookieConsent from "./components/CookieConsent";
import PageSkeleton from "./components/PageSkeleton";
import usePageEffects from "./hooks/usePageEffects";
import { initTracking } from "./lib/track";

// Pages are code-split: each page loads on demand and the PageSkeleton
// loading state shows while its chunk is on the way.
// Structure follows the Source Document sitemap (Section 5.3).
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Leadership = lazy(() => import("./pages/Leadership"));
const Credentials = lazy(() => import("./pages/Credentials"));
const Ecosystem = lazy(() => import("./pages/Ecosystem"));
const Capabilities = lazy(() => import("./pages/Capabilities"));
const CapabilityDetail = lazy(() => import("./pages/CapabilityDetail"));
const Partnerships = lazy(() => import("./pages/Partnerships"));
const Investment = lazy(() => import("./pages/Investment"));
const IndiaMarket = lazy(() => import("./pages/IndiaMarket"));
const OemRepresentation = lazy(() => import("./pages/OemRepresentation"));
const Quality = lazy(() => import("./pages/Quality"));
const Newsroom = lazy(() => import("./pages/Newsroom"));
const Careers = lazy(() => import("./pages/Careers"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Accessibility = lazy(() => import("./pages/Accessibility"));
const Sitemap = lazy(() => import("./pages/Sitemap"));
const NotFound = lazy(() => import("./pages/NotFound"));

function Layout() {
  const location = useLocation();
  usePageEffects();

  useEffect(() => {
    initTracking();
  }, []);

  return (
    <div className="bg-white text-ink-900 antialiased">
      <Header />
      <Suspense fallback={<PageSkeleton />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/leadership" element={<Leadership />} />
          <Route path="/about/credentials" element={<Credentials />} />
          <Route path="/about/ecosystem" element={<Ecosystem />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/capabilities/:slug" element={<CapabilityDetail />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/partnerships/investment" element={<Investment />} />
          <Route path="/partnerships/india-market" element={<IndiaMarket />} />
          <Route path="/partnerships/oem-representation" element={<OemRepresentation />} />
          <Route path="/quality-and-compliance" element={<Quality />} />
          <Route path="/newsroom" element={<Newsroom />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/sitemap" element={<Sitemap />} />
          {/* Redirects from the previous site's URLs */}
          <Route path="/services" element={<Navigate to="/capabilities" replace />} />
          <Route path="/governance" element={<Navigate to="/about/leadership" replace />} />
          <Route path="/compliance" element={<Navigate to="/quality-and-compliance" replace />} />
          <Route path="/news" element={<Navigate to="/newsroom" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
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
