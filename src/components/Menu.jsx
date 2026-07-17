import { useState } from "react";
import { Award, Compass, Eye } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";

export default function Menu() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState("specialities");
  const prefix = language === "pt" ? "" : `/${language}`;

  const specialities = [
    {
      id: "linguini",
      title: t("menu.item.linguini.title"),
      desc: t("menu.item.linguini.desc"),
      tag: t("menu.item.linguini.tag"),
      category: "Peixes & Mariscos",
      image: "/images/linguini_nero.png"
    },
    {
      id: "lingueirao",
      title: t("menu.item.lingueirao.title"),
      desc: t("menu.item.lingueirao.desc"),
      tag: t("menu.item.lingueirao.tag"),
      category: "Peixes & Mariscos",
      image: "/images/arroz_lingueirao.jpg"
    },
    {
      id: "crocante",
      title: t("menu.item.crocante.title"),
      desc: t("menu.item.crocante.desc"),
      tag: t("menu.item.crocante.tag"),
      category: "Peixes & Mariscos",
      image: "/images/crocante_peixe.jpg"
    },
    {
      id: "espetada",
      title: t("menu.item.espetada.title"),
      desc: t("menu.item.espetada.desc"),
      tag: t("menu.item.espetada.tag"),
      category: "Carnes",
      image: "/images/espetada_terra_mar.png"
    },
    {
      id: "vitela",
      title: t("menu.item.vitela.title"),
      desc: t("menu.item.vitela.desc"),
      tag: t("menu.item.vitela.tag"),
      category: "Carnes",
      image: "/images/naco_vitela_novo.jpg"
    },
    {
      id: "basca",
      title: t("menu.item.basca.title"),
      desc: t("menu.item.basca.desc"),
      tag: t("menu.item.basca.tag"),
      category: "Sobremesas",
      image: "/images/torta_basca.png"
    }
  ];

  const menuSlug = language === "pt" ? "reservas" : "reservations";

  return (
    <section id="especialidades" className="py-16 md:py-28 bg-[#FDFCFA] text-black relative border-b border-[#E2DFD8] font-sans">
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-slide-up">
          <span className="text-primary font-semibold uppercase text-[10px] tracking-wider bg-[#D2ECE0] px-4 py-1.5 rounded-full mb-4 inline-block">
            {t("menu.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal font-serif tracking-tight leading-none mb-6 uppercase text-neutral-900">
            {t("menu.title")}
          </h2>
          <p className="text-neutral-600 text-sm md:text-base font-normal leading-relaxed">
            {t("menu.subtitle")}
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-16 reveal-slide-up">
          <button
            onClick={() => setActiveTab("specialities")}
            className={`px-6 py-3 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 cursor-pointer ${
              activeTab === "specialities"
                ? "bg-primary text-white shadow-md"
                : "bg-white border border-[#E2DFD8] text-neutral-700 hover:bg-[#F4F3EF]"
            }`}
          >
            {t("menu.tabSpecialities")}
          </button>
          <button
            onClick={() => setActiveTab("executive")}
            className={`px-6 py-3 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 cursor-pointer ${
              activeTab === "executive"
                ? "bg-primary text-white shadow-md"
                : "bg-white border border-[#E2DFD8] text-neutral-700 hover:bg-[#F4F3EF]"
            }`}
          >
            {t("menu.tabExecutive")}
          </button>
        </div>

        {activeTab === "specialities" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-menu-fade">
            {specialities.map((item, idx) => (
              <div
                key={item.id}
                className="bg-white border border-[#E2DFD8] p-5 hover:border-neutral-450 hover:shadow-xl transition-all duration-500 text-left group flex flex-col justify-between rounded-2xl"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div>
                  <div className="relative overflow-hidden mb-5 bg-[#FDFCFA] aspect-[4/3] rounded-xl border border-[#E2DFD8]/50">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-103"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-neutral-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                    {item.tag && (
                      <span className="absolute top-3 left-3 bg-[#1A1A1A] text-white text-[8px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full">
                        {item.tag}
                      </span>
                    )}
                  </div>

                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[9px] uppercase tracking-wider text-neutral-400 font-semibold">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-normal font-serif text-neutral-900 group-hover:text-primary transition-colors mb-3 uppercase">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 font-normal leading-relaxed mb-6 font-sans">
                    {item.desc}
                  </p>
                </div>

                <div className="border-t border-[#E2DFD8]/40 pt-4 mt-auto flex justify-between items-center">
                  <span className="text-[10px] text-neutral-400 font-semibold tracking-wider uppercase">
                    Garfo da Costa
                  </span>
                  <span className="text-[10px] text-primary font-bold uppercase tracking-wider">
                    {t("about.since")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "executive" && (
          <div className="max-w-4xl mx-auto animate-menu-fade">
            <div className="bg-[#222222] border border-[#E2DFD8]/10 p-8 md:p-12 text-white text-left rounded-2xl relative overflow-hidden shadow-xl">
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl pointer-events-none" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 bg-[#D2ECE0]/10 border border-[#D2ECE0]/20 text-primary-light font-semibold text-[9px] uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                  <Compass className="w-3.5 h-3.5" />
                  {t("menu.tabExecutive")}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-normal font-serif text-white mb-3 uppercase tracking-tight">
                  {t("menu.execTitle")}
                </h3>
                <p className="text-neutral-400 text-xs font-normal leading-relaxed mb-10 max-w-2xl font-sans">
                  {t("menu.execDesc")}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="border-r border-white/5 pr-4 last:border-none last:pr-0">
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2.5 pb-1 border-b border-white/10 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-light" />
                      {t("menu.exec.fish")}
                    </h4>
                    <p className="text-xs text-neutral-400 font-normal leading-relaxed font-sans">
                      {t("menu.exec.fishDesc")}
                    </p>
                  </div>

                  <div className="border-r border-white/5 pr-4 last:border-none last:pr-0">
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2.5 pb-1 border-b border-white/10 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-light" />
                      {t("menu.exec.meat")}
                    </h4>
                    <p className="text-xs text-neutral-400 font-normal leading-relaxed font-sans">
                      {t("menu.exec.meatDesc")}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2.5 pb-1 border-b border-white/10 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-light" />
                      {t("menu.exec.veg")}
                    </h4>
                    <p className="text-xs text-neutral-400 font-normal leading-relaxed font-sans">
                      {t("menu.exec.vegDesc")}
                    </p>
                  </div>
                </div>

                <div className="pt-8 mt-10 border-t border-white/10 text-center md:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
                  <span className="text-[10px] text-neutral-400 font-semibold tracking-wider uppercase font-sans">
                    {t("menu.execTitle")} • Horário: 12:00 – 15:00
                  </span>
                  <Link
                    to={`${prefix}/${menuSlug}`}
                    className="bg-white hover:bg-primary-light text-neutral-900 hover:text-[#1E362C] px-5 py-3 rounded-full font-semibold text-[9px] uppercase tracking-wider transition-colors shadow-md"
                  >
                    {t("hero.ctaBook")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
