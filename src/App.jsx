import { useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { LanguageProvider } from "./context/LanguageContext";

import Home from "./pages/Home";

// Lazy load secondary pages for chunk splitting
const SEOPage = lazy(() => import("./pages/SEOPage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const CookiePolicyPage = lazy(() => import("./pages/CookiePolicyPage"));
import CookieBanner from "./components/CookieBanner";

// Scroll Restoration & Hash Scrolling Helper
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Reset any layout/scroll locks on route transitions
    document.body.style.overflow = "unset";

    if (hash) {
      // Small timeout to allow the DOM to render before finding the element
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

// Re-observe reveal elements on every route change, watching for DOM changes due to lazy loading
function RevealObserver() {
  const { pathname } = useLocation();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px -30px",
      threshold: 0.05,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    const observeElements = () => {
      const revealElements = document.querySelectorAll(
        ".reveal-fade:not(.reveal-visible), .reveal-slide-up:not(.reveal-visible), .reveal-slide-left:not(.reveal-visible), .reveal-slide-right:not(.reveal-visible)"
      );
      revealElements.forEach((el) => observer.observe(el));
    };

    // Run initially
    observeElements();

    // Use MutationObserver to re-observe whenever new elements are mounted (e.g. from React.lazy chunks)
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      <div className="bg-white text-dark min-h-screen flex flex-col justify-between overflow-x-hidden">
        <ScrollToTop />
        <RevealObserver />

        {/* Navigation Bar */}
        <Navbar />

        <Suspense fallback={<div className="min-h-screen bg-white"></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/en" element={<Home />} />
            <Route path="/es" element={<Home />} />
            <Route path="/fr" element={<Home />} />
            <Route path="/de" element={<Home />} />
            {/* Catalog routes */}
            <Route path="/catalogo" element={<CatalogPage />} />
            <Route path="/en/catalog" element={<CatalogPage />} />
            <Route path="/es/catalogo" element={<CatalogPage />} />
            <Route path="/fr/catalogue" element={<CatalogPage />} />
            <Route path="/de/katalog" element={<CatalogPage />} />

            {/* Privacy Policy routes */}
            <Route path="/politica-privacidade" element={<PrivacyPolicyPage />} />
            <Route path="/en/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/es/politica-privacidad" element={<PrivacyPolicyPage />} />
            <Route path="/fr/politique-confidentialite" element={<PrivacyPolicyPage />} />
            <Route path="/de/datenschutz" element={<PrivacyPolicyPage />} />

            {/* Cookie Policy routes */}
            <Route path="/politica-cookies" element={<CookiePolicyPage />} />
            <Route path="/en/cookie-policy" element={<CookiePolicyPage />} />
            <Route path="/es/politica-cookies" element={<CookiePolicyPage />} />
            <Route path="/fr/politique-cookies" element={<CookiePolicyPage />} />
            <Route path="/de/cookie-richtlinie" element={<CookiePolicyPage />} />

            {/* Dynamic SEO pages */}
            <Route path="/:slug" element={<SEOPage />} />
            <Route path="/en/:slug" element={<SEOPage />} />
            <Route path="/es/:slug" element={<SEOPage />} />
            <Route path="/fr/:slug" element={<SEOPage />} />
            <Route path="/de/:slug" element={<SEOPage />} />
          </Routes>
        </Suspense>

        {/* Contact Banner & Footer */}
        <Footer />

        {/* Dynamic Floating WhatsApp / Phone button */}
        <WhatsAppButton />

        {/* GDPR Cookie Consent Banner */}
        <CookieBanner />

        {/* Vercel Speed Insights */}
        <SpeedInsights />
      </div>
    </LanguageProvider>
  );
}
