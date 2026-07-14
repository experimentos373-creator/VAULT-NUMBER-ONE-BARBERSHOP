import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import StockPage from "./pages/StockPage";
import ServicesPage from "./pages/ServicesPage";
import CompanyPage from "./pages/CompanyPage";
import WhatsAppButton from "./components/WhatsAppButton";

// Scroll Restoration & Hash Scrolling Helper
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Reset any layout/scroll locks on route transitions
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

// Re-observe reveal elements on every route change so animations always fire
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

    const timer = setTimeout(() => {
      const revealElements = document.querySelectorAll(
        ".reveal-fade:not(.reveal-visible), .reveal-slide-up:not(.reveal-visible), .reveal-slide-left:not(.reveal-visible), .reveal-slide-right:not(.reveal-visible)"
      );
      revealElements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      <div className="bg-dark-bg text-neutral-200 min-h-screen flex flex-col justify-between overflow-x-hidden">
        <ScrollToTop />
        <RevealObserver />

        {/* Global Floating Navigation Bar */}
        <Navbar />

        {/* Page Content Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/viaturas" element={<StockPage />} />
            <Route path="/servicos" element={<ServicesPage />} />
            <Route path="/empresa" element={<CompanyPage />} />
          </Routes>
        </main>

        {/* Footer Area */}
        <Footer />

        {/* Contact WhatsApp Button */}
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}
