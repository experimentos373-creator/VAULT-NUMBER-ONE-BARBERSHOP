import { useState } from "react";
import { Info, Sparkles, Instagram, Scissors } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Menu() {
  const { t, language } = useLanguage();
  const prefix = language === "pt" ? "" : `/${language}`;
  const [activeTab, setActiveTab] = useState("cabelo"); // "cabelo", "barba", "combos"

  const especialidadesCabelo = [
    {
      name: "Corte Fade / Degradê",
      price: "14 €",
      desc: t("menu.brand.model.fade.desc"),
      tag: "Popular"
    },
    {
      name: "Modern Mullet",
      price: "14 €",
      desc: t("menu.brand.model.mullet.desc"),
      tag: "Estilo"
    },
    {
      name: "Corte Clássico & Tesoura",
      price: "14 €",
      desc: t("menu.brand.model.classic.desc"),
      tag: "Tradicional"
    },
    {
      name: "Corte Estilizado & Desenhos",
      price: "14 €",
      desc: t("menu.brand.model.stylized.desc"),
      tag: "Assinatura"
    }
  ];

  const especialidadesBarba = [
    {
      name: "Alinhamento Simétrico",
      price: "10 €",
      desc: t("menu.brand.model.align.desc"),
      tag: "Precisão"
    },
    {
      name: "Barba Toalha Quente",
      price: "10 €",
      desc: t("menu.brand.model.hot_towel.desc"),
      tag: "Ritual"
    },
    {
      name: "Hidratação profunda",
      price: "10 €",
      desc: t("menu.brand.model.hydration.desc"),
      tag: "Cuidado"
    }
  ];

  const combosCabeloBarba = [
    { name: "Corte Simples + Barba", price: "20 €" },
    { name: "Corte Fade + Barba Ritual", price: "20 €" },
    { name: "Combo Vault Premium", price: "20 €" }
  ];

  const cabeloHidratacao = [
    { name: "Corte + Lavagem Especial", price: "14 €" },
    { name: "Tratamento Anticaspa", price: "Sob Consulta" },
    { name: "Descoloração / Madeixas", price: "Sob Consulta" }
  ];

  const produtos = [
    { name: "Pomada Modeladora Mate", price: "Sob Consulta" },
    { name: "Óleo de Barba Premium", price: "Sob Consulta" },
    { name: "Cera Forte de Cabelo", price: "Sob Consulta" }
  ];

  return (
    <section id="menu" className="py-24 bg-[#0C0C0C] text-white relative border-b border-neutral-900 scroll-margin-top-[96px]">
      {/* Subtle Background Accents */}
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-20 reveal-slide-up">
          <span className="text-black font-black uppercase text-xs tracking-widest bg-primary px-4 py-1.5 rounded-none mb-4 inline-block">
            {t("menu.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight leading-none mb-6 uppercase text-white">
            {t("menu.title")}
          </h2>
          <p className="text-neutral-400 font-normal max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            {t("menu.subtitle")}
          </p>
        </div>

        {/* Mobile/Tablet Tabs Selector */}
        <div className="flex lg:hidden justify-center bg-white/[0.02] border border-neutral-900 rounded-xl p-1 mb-12 max-w-md mx-auto relative z-20">
          <button
            onClick={() => setActiveTab("cabelo")}
            className={`flex-1 py-3 text-xs uppercase font-extrabold tracking-wider transition-all duration-200 rounded-lg cursor-pointer ${
              activeTab === "cabelo"
                ? "bg-primary text-black font-black shadow-md scale-102"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Cabelo
          </button>
          <button
            onClick={() => setActiveTab("barba")}
            className={`flex-1 py-3 text-xs uppercase font-extrabold tracking-wider transition-all duration-200 rounded-lg cursor-pointer ${
              activeTab === "barba"
                ? "bg-primary text-black font-black shadow-md scale-102"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Barba
          </button>
          <button
            onClick={() => setActiveTab("combos")}
            className={`flex-1 py-3 text-xs uppercase font-extrabold tracking-wider transition-all duration-200 rounded-lg cursor-pointer ${
              activeTab === "combos"
                ? "bg-primary text-black font-black shadow-md scale-102"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Combos
          </button>
        </div>

        {/* Editorial styled menu (3 Columns layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-7xl mx-auto">
          
          {/* Column 1: Estética Capilar (col-span-4) */}
          <div className={`lg:col-span-4 flex flex-col justify-between h-full gap-8 reveal-slide-up ${
            activeTab === "cabelo" ? "flex animate-menu-fade" : "hidden lg:flex"
          }`}>
            <div>
              <div className="border-b border-neutral-800 pb-4 mb-6">
                <h3 className="font-display font-black text-2xl uppercase tracking-wider text-primary flex items-center gap-2">
                  <Scissors className="w-5 h-5 text-primary rotate-90" /> Estética Capilar
                </h3>
                <p className="text-[10px] text-neutral-400 uppercase tracking-widest mt-1">
                  {t("menu.brand.category.cortes")}
                </p>
              </div>
              
              <div className="flex flex-col gap-6">
                {especialidadesCabelo.map((item, idx) => (
                  <div key={idx} className="bg-[#121212]/40 border-l-2 border-primary border-t border-r border-b border-neutral-850 p-6 shadow-md transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.03] rounded-none group/item">
                    <div className="flex items-baseline justify-between w-full mb-2">
                      <h4 className="font-bold font-display text-white text-base group-hover/item:text-primary transition-colors duration-300">
                        {item.name}
                      </h4>
                      <span className="flex-grow border-b border-dotted border-white/20 mx-2"></span>
                      <span className="font-bold text-primary font-display text-sm shrink-0">{item.price}</span>
                    </div>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed mb-4">{item.desc}</p>
                    {item.tag && (
                      <span className="inline-flex items-center gap-1 bg-primary/10 border border-primary/20 text-primary font-bold text-[9px] uppercase tracking-wider px-2 py-0.5">
                        <Sparkles className="w-2.5 h-2.5" />
                        {item.tag}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <a
              href={`${prefix}/#formularios`}
              className="w-full border border-primary hover:bg-primary hover:text-black text-white px-4 py-3.5 text-xs uppercase font-extrabold tracking-widest rounded-none transition-all duration-300 cursor-pointer text-center block spring-hover"
            >
              {t("menu.ctaCustom")}
            </a>
          </div>

          {/* Column 2: Cuidado Facial (col-span-4) */}
          <div className={`lg:col-span-4 flex flex-col justify-between h-full gap-8 reveal-slide-up lg:delay-75 ${
            activeTab === "barba" ? "flex animate-menu-fade" : "hidden lg:flex"
          }`}>
            <div>
              <div className="border-b border-neutral-800 pb-4 mb-6">
                <h3 className="font-display font-black text-2xl uppercase tracking-wider text-white flex items-center gap-2">
                  <span>🪒</span> Cuidado Facial
                </h3>
                <p className="text-[10px] text-neutral-400 uppercase tracking-widest mt-1">
                  {t("menu.brand.category.barbas")}
                </p>
              </div>
              
              <div className="flex flex-col gap-6">
                {especialidadesBarba.map((item, idx) => (
                  <div key={idx} className="border-b border-neutral-850 pb-5 last:border-b-0 hover:pl-2.5 transition-all duration-300 group/item">
                    <div className="flex items-baseline justify-between w-full mb-1">
                      <h4 className="font-bold font-display text-white text-base group-hover/item:text-primary transition-colors duration-300">
                        {item.name}
                      </h4>
                      <span className="flex-grow border-b border-dotted border-white/10 mx-2"></span>
                      <span className="font-bold text-neutral-350 font-display text-sm shrink-0">{item.price}</span>
                    </div>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed mb-2">{item.desc}</p>
                    {item.tag && (
                      <span className="inline-flex items-center gap-1 bg-white/5 border border-white/10 text-neutral-300 font-bold text-[8px] uppercase tracking-wider px-2 py-0.5">
                        {item.tag}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <a
              href={`${prefix}/#formularios`}
              className="w-full border border-neutral-800 hover:border-primary text-white hover:text-primary px-4 py-3.5 text-xs uppercase font-extrabold tracking-widest rounded-none transition-all duration-300 cursor-pointer text-center block spring-hover"
            >
              {t("menu.ctaInfo")}
            </a>
          </div>

          {/* Column 3: Combos Especiais (col-span-4) */}
          <div className={`lg:col-span-4 flex flex-col justify-between h-full gap-8 reveal-slide-up lg:delay-150 ${
            activeTab === "combos" ? "flex animate-menu-fade" : "hidden lg:flex"
          }`}>
            <div>
              <div className="border-b border-neutral-800 pb-4 mb-6">
                <h3 className="font-display font-black text-2xl uppercase tracking-wider text-white flex items-center gap-2">
                  <span>✨</span> Combos Especiais
                </h3>
                <p className="text-[10px] text-neutral-400 uppercase tracking-widest mt-1">
                  {t("menu.customTitle")}
                </p>
              </div>
              
              <div className="flex flex-col gap-6">
                
                {/* Sub-Group 1: Combos Cabelo + Barba */}
                <div className="hover:pl-2 transition-all duration-300 group/sub">
                  <h4 className="text-xs font-black text-primary uppercase tracking-wider mb-3 pb-1 border-b border-neutral-850 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Combos Cabelo + Barba
                  </h4>
                  <div className="flex flex-col gap-3">
                    {combosCabeloBarba.map((item, idx) => (
                      <div key={idx} className="pb-2 border-b border-neutral-900/60 last:border-b-0">
                        <div className="flex items-baseline justify-between w-full">
                          <h5 className="font-semibold text-white text-xs group-hover/sub:text-neutral-300 transition-colors">{item.name}</h5>
                          <span className="flex-grow border-b border-dotted border-white/10 mx-1.5"></span>
                          <span className="font-bold text-neutral-400 text-xs shrink-0">{item.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sub-Group 2: Cabelo & Hidratação */}
                <div className="hover:pl-2 transition-all duration-300 group/sub">
                  <h4 className="text-xs font-black text-primary uppercase tracking-wider mb-3 pb-1 border-b border-neutral-850 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Cabelo & Hidratação
                  </h4>
                  <div className="flex flex-col gap-3">
                    {cabeloHidratacao.map((item, idx) => (
                      <div key={idx} className="pb-2 border-b border-neutral-900/60 last:border-b-0">
                        <div className="flex items-baseline justify-between w-full">
                          <h5 className="font-semibold text-white text-xs group-hover/sub:text-neutral-300 transition-colors">{item.name}</h5>
                          <span className="flex-grow border-b border-dotted border-white/10 mx-1.5"></span>
                          <span className="font-bold text-neutral-400 text-xs shrink-0">{item.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sub-Group 3: Produtos */}
                <div className="hover:pl-2 transition-all duration-300 group/sub">
                  <h4 className="text-xs font-black text-primary uppercase tracking-wider mb-3 pb-1 border-b border-neutral-850 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {t("menu.wheels")}
                  </h4>
                  <div className="flex flex-col gap-3">
                    {produtos.map((item, idx) => (
                      <div key={idx} className="pb-2 border-b border-neutral-900/60 last:border-b-0">
                        <div className="flex items-baseline justify-between w-full">
                          <h5 className="font-semibold text-white text-xs group-hover/sub:text-neutral-300 transition-colors">{item.name}</h5>
                          <span className="flex-grow border-b border-dotted border-white/10 mx-1.5"></span>
                          <span className="font-bold text-neutral-400 text-xs shrink-0">{item.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            <a
              href="https://www.instagram.com/vaultnumberone_barbershop/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border border-neutral-800 hover:border-primary text-white hover:text-primary px-4 py-3.5 text-xs uppercase font-extrabold tracking-widest rounded-none transition-all duration-300 cursor-pointer text-center block spring-hover"
            >
              <span className="flex items-center justify-center gap-2">
                <Instagram className="w-3.5 h-3.5" />
                {t("menu.instagramBtn")}
              </span>
            </a>
          </div>

        </div>

        {/* Informative Note Section (Agendamentos & Tolerância) */}
        <div className="mt-20 max-w-3xl mx-auto bg-white/[0.02] border border-white/5 p-6 rounded-none flex items-start gap-4 text-left reveal-fade">
          <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">
              {t("menu.financialTitle")}
            </h4>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              {t("menu.financialDesc")}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
