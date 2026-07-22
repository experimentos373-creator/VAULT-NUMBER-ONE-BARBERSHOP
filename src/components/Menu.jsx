import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Maximize2, Settings, Instagram, Facebook, ChevronLeft, ChevronRight, Zap, Gauge, Battery } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { bikes, catalogSlugs } from "../data/bikesData";

const getInitialCardsPerView = () => {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  if (window.innerWidth < 1280) return 3;
  return 4;
};

export default function Menu() {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(getInitialCardsPerView);
  
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const prefix = language === "pt" ? "" : `/${language}`;
  const catalogPath = `${prefix}/${catalogSlugs[language] || "catalogo"}`;

  const popularBikes = bikes
    .filter(b => b.isStar)
    .sort((a, b) => {
      const aIsSurron = a.id.toLowerCase().includes("surron");
      const bIsSurron = b.id.toLowerCase().includes("surron");
      if (aIsSurron && !bIsSurron) return -1;
      if (!aIsSurron && bIsSurron) return 1;
      const aIsSoco = a.id.toLowerCase().includes("soco");
      const bIsSoco = b.id.toLowerCase().includes("soco");
      if (aIsSoco && !bIsSoco) return -1;
      if (!aIsSoco && bIsSoco) return 1;
      return 0;
    });

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else if (window.innerWidth < 1280) setCardsPerView(3);
      else setCardsPerView(4);
    };
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, popularBikes.length - cardsPerView);

  const scrollLeft = () => setCurrentIndex(prev => Math.max(prev - 1, 0));
  const scrollRight = () => setCurrentIndex(prev => Math.min(prev + 1, maxIndex));

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e) => { touchEndX.current = e.targetTouches[0].clientX; };
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
    else if (diff < -50) setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <section id="produtos" className="py-20 md:py-28 bg-[#FCFBFA] text-[#111111] relative border-b border-neutral-200/50">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-slide-up">
          <span className="text-primary font-bold uppercase text-[10px] tracking-widest bg-primary/10 px-4 py-1.5 rounded-full mb-4 inline-block">
            {t("menu.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-normal font-display tracking-tight leading-none mb-6 text-neutral-950 uppercase">
            {t("menu.title")}
          </h2>
          <div className="w-16 h-[1px] bg-primary mx-auto mb-6"></div>
          <p className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            {t("menu.subtitle")}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mb-20 px-2 md:px-12 reveal-slide-up">
          
          <button 
            onClick={scrollLeft}
            disabled={currentIndex === 0}
            className={`hidden md:flex absolute md:left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-none bg-white border border-neutral-250/70 shadow-sm text-neutral-800 hover:bg-neutral-950 hover:text-white hover:border-neutral-950 transition-all cursor-pointer active:scale-95 ${
              currentIndex === 0 ? "opacity-30 pointer-events-none" : ""
            }`}
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button 
            onClick={scrollRight}
            disabled={currentIndex === maxIndex}
            className={`hidden md:flex absolute md:right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-none bg-white border border-neutral-250/70 shadow-sm text-neutral-800 hover:bg-neutral-950 hover:text-white hover:border-neutral-950 transition-all cursor-pointer active:scale-95 ${
              currentIndex === maxIndex ? "opacity-30 pointer-events-none" : ""
            }`}
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div 
            className="overflow-hidden w-full py-4 px-1"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex gap-6 transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: `translateX(calc(-${currentIndex} * (100% + 24px) / ${cardsPerView}))` }}
            >
              {popularBikes.map((bike) => (
                <div 
                  key={bike.id} 
                  className="flex-shrink-0"
                  style={{ width: `calc((100% - (24px * ${cardsPerView - 1})) / ${cardsPerView})` }}
                >
                  <Link
                    to={`${catalogPath}?bike=${bike.id}`}
                    className="flex flex-col bg-white border border-neutral-200/90 rounded-2xl p-5 text-left group h-full relative product-card-frame cursor-pointer overflow-hidden shadow-sm"
                  >
                    {/* Red Discount/Star Badge */}
                    <div className="absolute top-4 left-4 z-10 bg-red-600 text-white px-3 py-1 text-[9px] font-black uppercase rounded shadow-sm select-none">
                      {bike.isStar ? "Destaque" : "15% DE DESCONTO"}
                    </div>

                    {/* Image Area inside Studio Background container with Realistic Vehicle Shadow */}
                    <div className="product-studio-bg card-studio-aura border border-neutral-100/90 rounded-xl aspect-[4/3] flex items-center justify-center relative overflow-hidden mb-5 p-5 group-hover:border-primary/20 transition-colors">
                      <img
                        src={bike.image}
                        alt={bike.name}
                        loading="lazy"
                        width="300"
                        height="225"
                        className="max-w-[92%] max-h-[92%] object-contain vehicle-drop-shadow group-hover:scale-106"
                      />
                    </div>

                    {/* Color Swatch Dot */}
                    <div className="flex gap-1.5 mb-3">
                      <span className="w-4.5 h-4.5 rounded-full bg-[#111111] border border-primary p-0.5 flex items-center justify-center">
                        <span className="w-full h-full rounded-full bg-primary" />
                      </span>
                    </div>

                    {/* Vehicle Name */}
                    <h3 className="text-[14px] font-black text-neutral-900 font-display group-hover:text-primary transition-colors mb-3 uppercase tracking-tight line-clamp-1">
                      {bike.name}
                    </h3>

                    {/* Price Section */}
                    <div className="flex flex-wrap items-baseline gap-2 mb-5">
                      <span className="text-red-500 line-through font-extrabold text-xs">
                        {new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(Math.round(bike.price * 1.15 / 10) * 10)}
                      </span>
                      <span className="text-primary font-black text-xl sm:text-2xl">
                        {new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(bike.price)}
                      </span>
                    </div>

                    {/* Specs Grid (3 spec cards at the bottom) */}
                    <div className="grid grid-cols-3 gap-1.5 pt-3 border-t border-neutral-100 mt-auto">
                      <div className="bg-[#F8F9FA] rounded-lg p-1.5 flex flex-col items-center justify-center text-center border border-neutral-100 min-w-0">
                        <Zap className="w-3.5 h-3.5 text-primary mb-1 flex-shrink-0" />
                        <span className="text-[7px] text-neutral-400 uppercase tracking-wider font-bold block mb-0.5">Motor</span>
                        <span className="text-neutral-800 font-extrabold text-[9px] block truncate max-w-full leading-none">{bike.powerNominal}</span>
                      </div>
                      <div className="bg-[#F8F9FA] rounded-lg p-1.5 flex flex-col items-center justify-center text-center border border-neutral-100 min-w-0">
                        <Gauge className="w-3.5 h-3.5 text-primary mb-1 flex-shrink-0" />
                        <span className="text-[7px] text-neutral-400 uppercase tracking-wider font-bold block mb-0.5">Velocidade</span>
                        <span className="text-neutral-800 font-extrabold text-[9px] block truncate max-w-full leading-none">{bike.maxSpeed}</span>
                      </div>
                      <div className="bg-[#F8F9FA] rounded-lg p-1.5 flex flex-col items-center justify-center text-center border border-neutral-100 min-w-0">
                        <Battery className="w-3.5 h-3.5 text-primary mb-1 flex-shrink-0" />
                        <span className="text-[7px] text-neutral-400 uppercase tracking-wider font-bold block mb-0.5">Autonomia</span>
                        <span className="text-neutral-800 font-extrabold text-[9px] block truncate max-w-full leading-none">{bike.autonomy}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View Full Catalog Link Button */}
        <div className="text-center mb-20">
          <Link
            to={catalogPath}
            className="inline-flex items-center gap-2 bg-primary hover:bg-[#E05300] text-white px-8 py-3.5 font-bold text-xs uppercase tracking-widest transition-all shadow-md hover:shadow-lg active:scale-98 border border-primary cursor-pointer"
          >
            {t("catalog.viewFull")}
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Services & Social Section Redesigned as Editorial Clean */}
        <div className="border-t border-neutral-200 pt-16 text-left" id="servicos">
          <div className="bg-white border border-neutral-200/80 p-6 md:p-10 text-neutral-900 relative shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              
              {/* Left Column: Services Header & Socials */}
              <div className="lg:col-span-5 text-left flex flex-col justify-between pr-0 lg:pr-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 border border-primary/20 bg-primary/5 text-primary font-bold text-[9px] uppercase tracking-widest px-3 py-1 mb-4">
                    <Settings className="w-3 h-3 animate-spin-slow" />
                    {t("menu.tabCustom")}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-normal font-display text-neutral-950 mb-4 uppercase">
                    {t("menu.customTitle")}
                  </h3>
                  <div className="w-12 h-[1px] bg-primary mb-6"></div>
                  <p className="text-neutral-550 text-xs md:text-sm leading-relaxed mb-8">
                    {t("menu.customDesc")}
                  </p>
                </div>

                {/* Clean Flat Social Buttons */}
                <div className="grid grid-cols-2 gap-4 mt-auto">
                  <a href="https://www.instagram.com/routen109mobilidade/" target="_blank" rel="noopener noreferrer"
                    className="border border-neutral-200 bg-[#FCFBFA] hover:border-[#ee2a7b]/40 p-3 flex items-center gap-3 transition-all duration-200 group cursor-pointer">
                    <div className="p-1.5 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shrink-0 flex items-center justify-center">
                      <Instagram className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold block text-neutral-900 uppercase tracking-wider">Instagram</span>
                      <span className="text-[9px] text-neutral-450 block truncate">@routen109mobilidade</span>
                    </div>
                  </a>
                  <a href="https://www.facebook.com/RouteN109/" target="_blank" rel="noopener noreferrer"
                    className="border border-neutral-200 bg-[#FCFBFA] hover:border-[#1877F2]/40 p-3 flex items-center gap-3 transition-all duration-200 group cursor-pointer">
                    <div className="p-1.5 bg-[#1877F2] text-white shrink-0 flex items-center justify-center">
                      <Facebook className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold block text-neutral-900 uppercase tracking-wider">Facebook</span>
                      <span className="text-[9px] text-neutral-450 block truncate">RouteN109</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right Column: Three Columns of Technical Specs */}
              <div className="lg:col-span-7 bg-[#FCFBFA] border border-neutral-200/80 p-6 md:p-8 flex flex-col justify-between">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  
                  <div>
                    <h4 className="text-[10px] font-bold text-neutral-950 uppercase tracking-widest mb-3 pb-1.5 border-b border-neutral-200 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-primary" />
                      {t("menu.suspensions")}
                    </h4>
                    <p className="text-[11px] text-neutral-500 leading-relaxed mb-3">{t("menu.suspensionsDesc")}</p>
                    <ul className="text-[11px] text-neutral-800 font-bold flex flex-col gap-1.5 list-none">
                      <li>• Motores PMSM / Cubo</li>
                      <li>• Controladores VESC / FOC</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-bold text-neutral-950 uppercase tracking-widest mb-3 pb-1.5 border-b border-neutral-200 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-primary" />
                      {t("menu.brakes")}
                    </h4>
                    <p className="text-[11px] text-neutral-500 leading-relaxed mb-3">{t("menu.brakesDesc")}</p>
                    <ul className="text-[11px] text-neutral-800 font-bold flex flex-col gap-1.5 list-none">
                      <li>• Sistemas CBS / ABS</li>
                      <li>• Pastilhas Cerâmicas</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-bold text-neutral-950 uppercase tracking-widest mb-3 pb-1.5 border-b border-neutral-200 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-primary" />
                      {t("menu.wheels")}
                    </h4>
                    <p className="text-[11px] text-neutral-500 leading-relaxed mb-3">{t("menu.wheelsDesc")}</p>
                    <ul className="text-[11px] text-neutral-800 font-bold flex flex-col gap-1.5 list-none">
                      <li>• Células LG / Samsung</li>
                      <li>• Smart BMS Bluetooth</li>
                    </ul>
                  </div>
                </div>

                {/* Financial Text */}
                <div className="pt-6 mt-6 border-t border-neutral-200/80">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">{t("menu.financialTitle")}</h4>
                  <p className="text-neutral-500 text-xs leading-relaxed font-normal">{t("menu.financialDesc")}</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
