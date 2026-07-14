import { useState, useEffect } from "react";
import { ArrowDown, Settings, Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const bgImages = [
  "/images/about/specialized_bike_hero.webp",
  "/images/bikes/WhatsApp Image 2026-07-08 at 19.38.11.webp"
];

export default function Hero() {
  const { t, language } = useLanguage();
  const prefix = language === "pt" ? "" : `/${language}`;
  const [shouldPlayVideo, setShouldPlayVideo] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.innerWidth < 640);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Never load video on mobile to protect LCP performance
    if (isMobile) return;

    const loadVideo = () => {
      setTimeout(() => {
        setShouldPlayVideo(true);
      }, 2500);
    };

    if (document.readyState === "complete") {
      loadVideo();
    } else {
      window.addEventListener("load", loadVideo);
      return () => window.removeEventListener("load", loadVideo);
    }
  }, [isMobile]);

  useEffect(() => {
    if (!shouldPlayVideo || isMobile) {
      const interval = setInterval(() => {
        setCurrentBgIndex((prev) => (prev + 1) % bgImages.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [shouldPlayVideo, isMobile]);

  return (
    <section
      id="home"
      className="relative min-h-[85vh] md:min-h-[90vh] bg-neutral-900 text-white flex flex-col justify-center overflow-hidden pt-28 pb-12 text-left"
    >
      {/* Full-bleed background video with fallback poster */}
      <div className="absolute inset-0 z-0">
        {shouldPlayVideo && !isMobile ? (
          <video
            src="/video/hero_background_compressed.mp4"
            poster={bgImages[0]}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center opacity-85 scale-105"
          />
        ) : (
          <div className="absolute inset-0 w-full h-full bg-neutral-950">
            {bgImages.map((src, idx) => {
              const isFirst = idx === 0;
              const imgClassName = `absolute inset-0 w-full h-full object-cover object-[center_30%] scale-105 transition-opacity duration-1000 ${
                currentBgIndex === idx ? "opacity-85" : "opacity-0"
              }`;

              if (isFirst) {
                return (
                  <picture key={src}>
                    <source media="(max-width: 640px)" srcset="/images/about/specialized_bike_hero_mobile.webp" />
                    <img
                      src={src}
                      alt="Route N109 Hero"
                      fetchPriority="high"
                      width="960"
                      height="540"
                      className={imgClassName}
                    />
                  </picture>
                );
              }

              return (
                <img
                  key={src}
                  src={src}
                  alt="Route N109 Hero"
                  fetchPriority="low"
                  width="960"
                  height="540"
                  className={imgClassName}
                />
              );
            })}
          </div>
        )}
        {/* Dark overlay to ensure text contrast and legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent md:from-black/90 md:via-black/50 md:to-black/10" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10 py-12 flex flex-col items-start justify-center">
        {/* Performance Badge */}
        <div className="inline-flex items-center gap-2 bg-neutral-900/90 border border-neutral-800 px-4 py-2 text-xs font-semibold text-neutral-200 mb-6 shadow-sm rounded-full backdrop-blur-sm reveal-slide-up">
          <span className="flex items-center gap-0.5 text-primary slow-blink">
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
          </span>
          <span className="font-bold">4.9</span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
          <span>
            {t("hero.supportBadge")}
          </span>
        </div>

        {/* Headline - Large scale bold uppercase */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-[0.9] font-display text-white mb-6 uppercase max-w-3xl reveal-slide-up">
          {t("hero.title1")} <br />
          <span className="text-primary">{t("hero.title2")}</span>
        </h1>

        {/* Divider line */}
        <div className="w-24 h-[4px] bg-primary mb-6 reveal-slide-up" />

        {/* Description paragraph */}
        <p className="text-lg md:text-xl text-neutral-300 font-normal max-w-xl mb-10 leading-relaxed reveal-slide-up">
          {t("hero.subtitle")}
        </p>

        {/* CTAs - Solid Contrast Pill Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto reveal-slide-up">
          <a
            href={`${prefix}/#menu`}
            className="bg-primary hover:bg-white text-white hover:text-neutral-950 px-8 py-4 rounded-full font-extrabold text-center transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider text-xs shadow-lg spring-hover"
          >
            {t("hero.cta")}
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href={`${prefix}/#formularios`}
            className="bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700 text-white px-8 py-4 rounded-full font-extrabold text-center transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider text-xs spring-hover backdrop-blur-sm"
          >
            <Settings className="w-4 h-4 text-primary" />
            {t("hero.ctaSec")}
          </a>
        </div>
      </div>
    </section>
  );
}
