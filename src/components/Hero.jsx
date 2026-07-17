import { useEffect, useState } from "react";
import { ArrowDown, Calendar, Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";

export default function Hero() {
  const { t, language } = useLanguage();
  const prefix = language === "pt" ? "" : `/${language}`;
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }).map((_, i) => {
      const size = Math.random() * 8 + 4;
      const left = Math.random() * 100;
      const duration = Math.random() * 8 + 6;
      const delay = Math.random() * 6;
      const opacity = Math.random() * 0.2 + 0.1;
      const sway = Math.random() * 40 - 20;

      return {
        id: i,
        style: {
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          "--particle-duration": `${duration}s`,
          "--particle-delay": `${delay}s`,
          "--particle-opacity": opacity,
          "--particle-sway": `${sway}px`
        }
      };
    });
    setParticles(newParticles);
  }, []);

  const menuSlug = language === "pt" ? "reservas" : "reservations";

  return (
    <section
      id="home"
      className="relative min-h-[85vh] md:min-h-[92vh] bg-[#1A1A1A] text-white flex flex-col justify-center overflow-hidden pt-28 pb-12 text-center"
    >
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80"
          alt="Costa de Lavos Sea View"
          className="w-full h-full object-cover object-center opacity-45 scale-102 transition-transform duration-[10000ms] ease-out hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/70 to-[#1A1A1A]/40" />
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <span
            key={p.id}
            style={p.style}
            className="floating-particle"
          />
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto px-6 w-full relative z-20 py-12 flex flex-col items-center justify-center">
        <div className="inline-flex items-center gap-2 bg-[#222222]/90 border border-white/10 px-4 py-2 text-[10px] tracking-widest uppercase font-semibold text-primary-light mb-6 shadow-md rounded-full backdrop-blur-sm reveal-slide-up">
          <span className="flex items-center gap-0.5 text-primary-light slow-blink">
            <Star className="w-3 h-3 fill-current" />
            <Star className="w-3 h-3 fill-current" />
            <Star className="w-3 h-3 fill-current" />
            <Star className="w-3 h-3 fill-current" />
            <svg className="w-3 h-3 text-primary-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <defs>
                <linearGradient id="star-grad-hero" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="60%" stopColor="currentColor" />
                  <stop offset="60%" stopColor="transparent" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="url(#star-grad-hero)" />
            </svg>
          </span>
          <span className="font-extrabold">4.6 / 5</span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary-light/40" />
          <span>{t("reviews.badge")}</span>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-normal tracking-tight font-serif text-white mb-6 uppercase max-w-4xl reveal-slide-up leading-tight">
          {t("hero.title")}
        </h1>

        <div className="w-16 h-[1px] bg-primary-light mb-6 reveal-slide-up" />

        <p className="text-xl md:text-2xl text-neutral-300 font-serif italic max-w-xl mb-10 leading-relaxed reveal-slide-up">
          {t("hero.subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto reveal-slide-up">
          <a
            href="#especialidades"
            className="bg-white hover:bg-primary-light text-neutral-900 hover:text-[#1E362C] px-8 py-4 rounded-full font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider text-[10px] shadow-lg spring-hover"
          >
            {t("hero.ctaMenu")}
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
          <Link
            to={`${prefix}/${menuSlug}`}
            className="bg-primary hover:bg-[#1E362C] border border-[#2B4C3F]/25 text-white px-8 py-4 rounded-full font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider text-[10px] spring-hover backdrop-blur-sm"
          >
            <Calendar className="w-3.5 h-3.5 text-primary-light" />
            {t("hero.ctaBook")}
          </Link>
        </div>
      </div>
    </section>
  );
}
