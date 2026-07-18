import { ArrowDown, Phone, Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-[85vh] bg-[#FCFBFA] text-[#111111] flex flex-col justify-center overflow-hidden pt-24 pb-12 md:pt-32 md:pb-20 border-b border-neutral-200/50"
    >
      {/* Delicate background grid representing blueprints/design precision */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#FF6600 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left 7 Columns: Editorial Text */}
        <div className="lg:col-span-7 flex flex-col items-start text-left reveal-slide-left z-10 pr-0 lg:pr-8">
          
          {/* Google Rating Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-neutral-200 px-3.5 py-1.5 text-[10px] font-bold tracking-wider text-neutral-600 mb-6 rounded-full shadow-sm">
            <div className="flex text-primary gap-0.5">
              <Star className="w-3 h-3 fill-current text-[#FF6600]" />
              <Star className="w-3 h-3 fill-current text-[#FF6600]" />
              <Star className="w-3 h-3 fill-current text-[#FF6600]" />
              <Star className="w-3 h-3 fill-current text-[#FF6600]" />
              <Star className="w-3 h-3 fill-current text-[#FF6600]" />
            </div>
            <span className="font-extrabold text-neutral-900">4.9</span>
            <span className="text-neutral-300">|</span>
            <span className="text-neutral-500 uppercase tracking-widest font-bold text-[9px]">43 Opiniões Google</span>
          </div>

          {/* Premium Editorial Title */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-normal leading-[1.0] text-neutral-950 mb-4 font-display uppercase tracking-tight">
            {t("hero.title1")} <br />
            <span className="text-primary font-display italic font-light tracking-wide">{t("hero.title2")}</span>
          </h1>

          <div className="w-20 h-[1px] bg-primary mb-6"></div>

          {/* Subtitle */}
          <p className="text-sm md:text-lg text-neutral-600 max-w-xl mb-6 md:mb-10 leading-relaxed font-normal">
            {t("hero.subtitle")}
          </p>

          {/* Minimalist Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <a
              href="#produtos"
              className="bg-primary hover:bg-[#E05300] text-white px-8 py-3.5 rounded-none font-bold text-center transition-all duration-200 flex items-center justify-center gap-2 text-xs uppercase tracking-widest shadow-md hover:shadow-lg hover:shadow-primary/10 active:scale-[0.98] border border-primary cursor-pointer"
            >
              {t("hero.cta")}
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="tel:+351935141143"
              className="bg-transparent hover:bg-neutral-100 text-neutral-900 px-8 py-3.5 rounded-none font-bold text-center transition-all duration-200 flex items-center justify-center gap-2 text-xs uppercase tracking-widest border border-neutral-300 cursor-pointer active:scale-[0.98]"
            >
              <Phone className="w-3.5 h-3.5 text-primary" />
              935 141 143
            </a>
          </div>
        </div>

        {/* Right 5 Columns: Sleek Museum Frame Showroom Photo */}
        <div className="lg:col-span-5 relative reveal-slide-right w-full flex justify-center lg:justify-end">
          <div className="relative p-2 bg-white border border-neutral-250/60 shadow-lg w-full max-w-[440px] lg:max-w-full">
            {/* Fine framing border */}
            <div className="border border-neutral-100 overflow-hidden relative">
              <img
                src="/images/route109_hero.jpg"
                alt="Showroom Route N109 - Motos e Scooters Elétricas"
                fetchPriority="high"
                width="600"
                height="700"
                className="w-full h-[280px] sm:h-[400px] md:h-[450px] object-cover hover:scale-105 transition-transform duration-[1.5s] ease-out"
              />
            </div>
            {/* Caption style under image */}
            <div className="mt-2 flex justify-between items-center text-[9px] uppercase tracking-widest text-neutral-400 font-bold px-1">
              <span>Showroom Guia</span>
              <span className="text-primary font-black">Route N109</span>
            </div>
          </div>

          {/* Floating minimal label */}
          <div className="absolute -bottom-4 left-4 md:-left-4 bg-neutral-950 text-white p-3.5 shadow-xl border border-neutral-800 flex items-center gap-3">
            <div className="text-left">
              <span className="text-[10px] font-black text-primary uppercase tracking-widest block mb-0.5">Marcas Premium</span>
              <span className="text-[11px] font-semibold text-neutral-300">Neovolt · Voltrish · Vespy · Luna</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
