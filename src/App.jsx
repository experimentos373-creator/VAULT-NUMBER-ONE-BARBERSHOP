import { useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { LanguageProvider } from "./context/LanguageContext";

// Lazy load pages for optimized loading
const Home = lazy(() => import("./pages/Home"));
const Reservations = lazy(() => import("./pages/Reservations"));
const SEOPage = lazy(() => import("./pages/SEOPage"));

// Scroll Restoration & Hash Scrolling Helper
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Unlocks scrolling in case it was locked by menu overlays
    document.body.style.overflow = "unset";

    if (hash) {
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

// Intersection Observer for scroll animations
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

    // Re-run on DOM mutations due to lazy-loaded code chunks
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
      <div className="bg-[#FDFCFA] text-[#1A1A1A] min-h-screen flex flex-col justify-between overflow-x-hidden">
        <ScrollToTop />
        <RevealObserver />

        {/* Global Navigation Bar */}
        <Navbar />

        <Suspense fallback={<div className="min-h-screen bg-[#FDFCFA]"></div>}>
          <Routes>
            {/* PT Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/reservas" element={<Reservations />} />

            {/* EN Routes */}
            <Route path="/en" element={<Home />} />
            <Route path="/en/reservations" element={<Reservations />} />

            {/* FR Routes */}
            <Route path="/fr" element={<Home />} />
            <Route path="/fr/reservations" element={<Reservations />} />

            {/* Dynamic slug fallbacks */}
            <Route path="/:slug" element={<SEOPage />} />
            <Route path="/en/:slug" element={<SEOPage />} />
            <Route path="/fr/:slug" element={<SEOPage />} />
          </Routes>
        </Suspense>

        {/* Global Footer */}
        <Footer />

        {/* Floating WhatsApp Action Button */}
        <WhatsAppButton />

        {/* Speed Insights */}
        <SpeedInsights />
      </div>
    </LanguageProvider>
  );
}
