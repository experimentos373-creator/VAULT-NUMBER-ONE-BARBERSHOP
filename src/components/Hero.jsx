import { useState, useEffect } from "react";
import { ArrowDown, Scissors, Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t, language } = useLanguage();
  const prefix = language === "pt" ? "" : `/${language}`;
  const [shouldPlayVideo, setShouldPlayVideo] = useState(false);

  useEffect(() => {
    // Delay loading the video until 2.5 seconds after page load to optimize performance
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
  }, []);

  // Generate a list of particles with random delays, durations, and sway values for the golden ember effect
  const particles = Array.from({ length: 15 }).map((_, idx) => {
    const delay = (idx * 0.7).toFixed(1);
    const duration = (8 + idx * 0.8).toFixed(1);
    const left = (5 + idx * 6.5).toFixed(1);
    const size = (2 + (idx % 3) * 1.5).toFixed(1);
    const opacity = (0.2 + (idx % 4) * 0.15).toFixed(2);
    const sway = (15 + (idx % 5) * 10).toFixed(1);
    return { delay, duration, left, size, opacity, sway };
  });

  return (
    <section
      id="home"
      className="relative min-h-[85vh] md:min-h-[90vh] bg-[#0C0C0C] text-white flex flex-col justify-center overflow-hidden pt-28 pb-12 text-left"
    >
      {/* Visual background image with fallback overlay */}
      <div className="absolute inset-0 z-0">
        {shouldPlayVideo ? (
          <video
            src="/hero_background_compressed.mp4"
            poster="/vault_hero.png"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center opacity-40 scale-105"
          />
        ) : (
          <img
            src="/vault_hero.png"
            alt="Vault Number One Barbershop Hero"
            fetchPriority="high"
            className="w-full h-full object-cover object-center opacity-40 scale-105"
          />
        )}
        {/* Dark gold-tinted gradient overlay to ensure text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C] via-[#0C0C0C]/80 to-transparent md:from-[#0C0C0C]/95 md:via-[#0C0C0C]/75 md:to-transparent" />
      </div>

      {/* Floating Golden Particles (Embers) */}
      <div className="absolute inset-0 pointer-events-none z-5 overflow-hidden">
        {particles.map((p, idx) => (
          <div
            key={idx}
            className="floating-particle"
            style={{
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              "--particle-delay": `${p.delay}s`,
              "--particle-duration": `${p.duration}s`,
              "--particle-opacity": p.opacity,
              "--particle-sway": `${p.sway}px`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 py-12 flex flex-col items-start justify-center">
        {/* Rating and Badges */}
        <div className="inline-flex items-center gap-2 bg-[#0A0A0A]/95 border border-neutral-800 px-4 py-2 text-xs font-semibold text-neutral-200 mb-6 shadow-sm rounded-full backdrop-blur-sm reveal-slide-up">
          <span className="flex items-center gap-0.5 text-primary slow-blink">
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
          </span>
          <span className="font-bold">5.0</span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
          <span>
            {t("hero.supportBadge")}
          </span>
        </div>

        {/* Headline - Bold, Uppercase, Gold accent */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-[0.9] font-display text-white mb-6 uppercase max-w-3xl reveal-slide-up">
          {t("hero.title1")} <br />
          <span className="text-primary">{t("hero.title2")}</span>
        </h1>

        {/* Gold divider line */}
        <div className="w-24 h-[4px] bg-primary mb-6 reveal-slide-up" />

        {/* Description paragraph */}
        <p className="text-lg md:text-xl text-neutral-300 font-normal max-w-xl mb-10 leading-relaxed reveal-slide-up">
          {t("hero.subtitle")}
        </p>

        {/* CTAs - Sleek Solid Gold & Border Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto reveal-slide-up">
          <a
            href={`${prefix}/#menu`}
            className="bg-primary hover:bg-white text-black hover:text-black px-8 py-4 rounded-full font-extrabold text-center transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider text-xs shadow-lg spring-hover"
          >
            {t("hero.cta")}
            <ArrowDown className="w-4 h-4 text-black" />
          </a>
          <a
            href={`${prefix}/#formularios`}
            className="bg-[#0A0A0A]/85 hover:bg-neutral-900 border border-neutral-800 text-white px-8 py-4 rounded-full font-extrabold text-center transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider text-xs spring-hover backdrop-blur-sm"
          >
            <Scissors className="w-4 h-4 text-primary" />
            {t("hero.ctaSec")}
          </a>
        </div>
      </div>
    </section>
  );
}
