import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SEOPage from "./pages/SEOPage";
import WhatsAppButton from "./components/WhatsAppButton";
import { LanguageProvider } from "./context/LanguageContext";

// Scroll Restoration & Hash Scrolling Helper
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
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

export default function App() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px -30px", // Trigger slightly inside view
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

    const revealElements = document.querySelectorAll(
      ".reveal-fade, .reveal-slide-up, .reveal-slide-left, .reveal-slide-right"
    );
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <LanguageProvider>
      <div className="bg-[#0C0C0C] text-white min-h-screen flex flex-col justify-between overflow-x-hidden">
        <ScrollToTop />

        {/* Navigation Bar */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/en" element={<Home />} />
          <Route path="/es" element={<Home />} />
          <Route path="/fr" element={<Home />} />
          <Route path="/de" element={<Home />} />
          <Route path="/:slug" element={<SEOPage />} />
          <Route path="/en/:slug" element={<SEOPage />} />
          <Route path="/es/:slug" element={<SEOPage />} />
          <Route path="/fr/:slug" element={<SEOPage />} />
          <Route path="/de/:slug" element={<SEOPage />} />
        </Routes>

        {/* Footer */}
        <Footer />

        {/* Dynamic Floating WhatsApp / Phone button */}
        <WhatsAppButton />

        {/* Vercel Speed Insights */}
        <SpeedInsights />
      </div>
    </LanguageProvider>
  );
}
