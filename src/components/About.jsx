import { Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t, language } = useLanguage();
  const prefix = language === "pt" ? "" : `/${language}`;

  const features = [
    {
      title: t("about.feat1.title"),
      desc: t("about.feat1.desc")
    },
    {
      title: t("about.feat2.title"),
      desc: t("about.feat2.desc")
    },
    {
      title: t("about.feat3.title"),
      desc: t("about.feat3.desc")
    }
  ];

  const menuSlug = language === "pt" ? "reservas" : "reservations";

  return (
    <section id="conceito" className="py-16 md:py-28 bg-[#FDFCFA] relative overflow-hidden border-b border-[#E2DFD8]">
      <div className="absolute right-0 top-0 w-1/3 h-full border-l border-[#E2DFD8]/45 pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6 relative h-[420px] sm:h-[500px] flex items-center justify-center reveal-slide-left z-10">
          <div className="absolute top-[5%] left-[5%] w-[68%] h-[75%] border border-[#E2DFD8] overflow-hidden rounded-2xl shadow-lg bg-neutral-100">
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
              alt="Cozinha de autor Chef Ricardo Perpétuo"
              className="w-full h-full object-cover transition-all duration-700 hover:scale-102"
              loading="lazy"
            />
          </div>

          <div className="absolute bottom-[5%] right-[5%] w-[48%] h-[48%] border-4 border-[#FDFCFA] z-20 overflow-hidden rounded-2xl shadow-2xl bg-neutral-150">
            <img
              src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80"
              alt="Jantares vínicos Herdade das Servas"
              className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-500"
              loading="lazy"
            />
          </div>

          <div className="absolute top-[12%] right-[8%] bg-primary text-white p-5 rounded-2xl border border-[#E2DFD8]/20 z-30 shadow-lg text-center flex flex-col justify-center items-center w-36 h-36">
            <Award className="w-8 h-8 text-primary-light mb-2 slow-blink" />
            <span className="text-sm font-semibold font-serif block uppercase tracking-tight leading-tight">Garfo da Costa</span>
            <span className="text-[7px] text-[#D2ECE0] uppercase tracking-widest mt-1">
              Costa de Lavos
            </span>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col items-start text-left reveal-slide-right">
          <span className="text-primary font-semibold uppercase text-[10px] tracking-wider bg-[#D2ECE0] px-4 py-1.5 rounded-full mb-6">
            {t("about.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-normal text-neutral-900 font-serif tracking-tight leading-[1.1] mb-4 uppercase">
            {t("about.title")}
          </h2>
          <p className="text-primary font-semibold mb-6 text-sm uppercase tracking-wider">
            {t("about.subtitle")}
          </p>
          <p className="text-neutral-600 font-normal leading-relaxed mb-4 text-sm font-sans">
            {t("about.paragraph1")}
          </p>
          <p className="text-neutral-600 font-normal leading-relaxed mb-10 text-sm font-sans">
            {t("about.paragraph2")}
          </p>

          <div className="w-full border-t border-[#E2DFD8]">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-6 py-5 border-b border-[#E2DFD8]/40 group transition-colors duration-300"
              >
                <span className="font-serif text-3xl font-normal text-primary/30 group-hover:text-primary transition-colors duration-300 leading-none pt-1">
                  {`0${idx + 1}`}
                </span>
                <div>
                  <h3 className="font-semibold text-neutral-900 font-serif text-base mb-1 uppercase tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-neutral-500 font-normal leading-relaxed font-sans">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              to={`${prefix}/${menuSlug}`}
              className="inline-flex items-center gap-2 bg-primary hover:bg-[#1E362C] text-white px-6 py-3.5 rounded-full font-semibold text-[10px] uppercase tracking-wider transition-all duration-300 spring-hover shadow-md"
            >
              <span>{t("hero.ctaBook")}</span>
              <ArrowRight className="w-4 h-4 text-primary-light" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
