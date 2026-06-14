import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import WorkshopForm from "../components/WorkshopForm";
import { ArrowLeft, Award, Scissors } from "lucide-react";
import { config } from "../config";
import { SEO_DATA } from "../data/seoData";

export default function SEOPage() {
  const { slug } = useParams();
  const { t, language } = useLanguage();

  const prefix = language === "pt" ? "" : `/${language}`;

  const dataMap = SEO_DATA[language] || SEO_DATA["pt"];
  const pageData = dataMap[slug];

  useEffect(() => {
    if (pageData) {
      document.title = pageData.metaTitle;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", pageData.metaDesc);
      }

      // 1. Breadcrumb Schema
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": t("nav.home"),
            "item": config.domain
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": pageData.h1,
            "item": `${config.domain}${prefix}/${slug}`
          }
        ]
      };

      const scriptBreadcrumb = document.createElement("script");
      scriptBreadcrumb.type = "application/ld+json";
      scriptBreadcrumb.text = JSON.stringify(breadcrumbSchema);
      scriptBreadcrumb.id = "breadcrumb-schema";
      document.head.appendChild(scriptBreadcrumb);

      // 2. Specific Schema based on formType
      if (pageData.formType === "budget") {
        const productSchema = {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": pageData.h1,
          "image": `${config.domain}${pageData.image}`,
          "description": pageData.intro,
          "brand": {
            "@type": "Brand",
            "name": "Vault Number One Barbershop"
          },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "EUR",
            "lowPrice": "10",
            "highPrice": "30",
            "offerCount": "6"
          }
        };

        const scriptSpecific = document.createElement("script");
        scriptSpecific.type = "application/ld+json";
        scriptSpecific.text = JSON.stringify(productSchema);
        scriptSpecific.id = "seo-specific-schema";
        document.head.appendChild(scriptSpecific);
      } else if (pageData.formType === "workshop") {
        const faqSchema = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": language === "en" 
                ? `How to book the service ${pageData.h1} in Pombal?`
                : language === "es"
                ? `¿Cómo reservar el servicio ${pageData.h1} en Pombal?`
                : language === "fr"
                ? `Comment réserver le service ${pageData.h1} à Pombal?`
                : language === "de"
                ? `Wie buche ich den Service ${pageData.h1} in Pombal?`
                : `Como agendar o serviço ${pageData.h1} em Pombal?`,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": language === "en"
                  ? "You can request an appointment by filling out the booking form on this page. The details will be prepared so you can send them directly to our Instagram for scheduling confirmation."
                  : language === "es"
                  ? "Puede solicitar la cita completando el formulario de reserva en esta página. Los detalles se prepararán para que los envíe directamente a nuestro Instagram para la confirmación de la cita."
                  : language === "fr"
                  ? "Vous pouvez demander un rendez-vous en remplissant le formulaire de réservation sur cette page. Les détails seront préparés pour que vous puissiez les envoyer directement sur notre Instagram pour confirmation de l'heure."
                  : language === "de"
                  ? "Sie können einen Termin anfragen, indem Sie das Buchungsformular auf dieser Seite ausfüllen. Die Details werden vorbereitet, damit Sie sie zur Bestätigung direkt an unser Instagram senden können."
                  : "Pode solicitar o agendamento preenchendo o formulário de marcação nesta página. Os dados serão copiados para que os envie diretamente para o nosso Instagram para confirmação de horário."
              }
            },
            {
              "@type": "Question",
              "name": language === "en"
                ? "Who will perform my haircut at Vault Number One?"
                : language === "es"
                ? "¿Quién realizará mi corte en Vault Number One?"
                : language === "fr"
                ? "Qui va faire ma coupe chez Vault Number One?"
                : language === "de"
                ? "Wer schneidet mir bei Vault Number One die Haare?"
                : "Quem realiza o meu corte na Vault Number One?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": language === "en"
                  ? "All haircut and beard services are performed by barber Ricardo Pedrosa himself, ensuring dedicated, premium quality."
                  : language === "es"
                  ? "Todos los servicios de corte y barba son realizados por el propio barbero Ricardo Pedrosa, asegurando una dedicación exclusiva y de alta calidad."
                  : language === "fr"
                  ? "Tous les services de coupe et de barbe sont effectués par le coiffeur Ricardo Pedrosa lui-même, garantissant une qualité supérieure."
                  : language === "de"
                  ? "Alle Haarschnitte und Bartpflege-Dienstleistungen werden von Barbier Ricardo Pedrosa selbst durchgeführt, um höchste Qualität zu garantieren."
                  : "Todos os serviços de corte e barba são realizados pelo próprio barbeiro Ricardo Pedrosa, garantindo dedicação exclusiva e qualidade premium."
              }
            }
          ]
        };

        const scriptSpecific = document.createElement("script");
        scriptSpecific.type = "application/ld+json";
        scriptSpecific.text = JSON.stringify(faqSchema);
        scriptSpecific.id = "seo-specific-schema";
        document.head.appendChild(scriptSpecific);
      }

      // 3. Dynamic Hreflang Alternate Link Tags for multi-language indexing
      const languages = ["pt", "en", "es", "fr", "de"];
      const hreflangElements = [];

      languages.forEach((lang) => {
        const link = document.createElement("link");
        link.rel = "alternate";
        link.hreflang = lang;
        link.href = lang === "pt" ? `${config.domain}/${slug}` : `${config.domain}/${lang}/${slug}`;
        link.id = `hreflang-${lang}`;
        document.head.appendChild(link);
        hreflangElements.push(link);
      });

      const lDefault = document.createElement("link");
      lDefault.rel = "alternate";
      lDefault.hreflang = "x-default";
      lDefault.href = `${config.domain}/${slug}`;
      lDefault.id = "hreflang-default";
      document.head.appendChild(lDefault);
      hreflangElements.push(lDefault);

      return () => {
        const sB = document.getElementById("breadcrumb-schema");
        const sS = document.getElementById("seo-specific-schema");
        if (sB) sB.remove();
        if (sS) sS.remove();

        hreflangElements.forEach((el) => {
          if (el && el.parentNode) {
            el.remove();
          }
        });
      };
    }
  }, [pageData, slug, language, prefix, t]);

  if (!pageData) {
    return (
      <div className="py-28 text-center bg-[#0C0C0C] text-white min-h-[60vh] flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-4 font-display uppercase tracking-wider text-primary">
          {t("general.pageNotFound")}
        </h2>
        <p className="text-neutral-400 mb-8">
          {t("general.pageNotFoundDesc")}
        </p>
        <Link to={prefix || "/"} className="bg-primary hover:bg-[#B8902B] text-black font-extrabold py-3 px-6 rounded-full transition-colors duration-200 uppercase text-xs tracking-wider">
          {t("general.backToHome")}
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#121212] text-white min-h-screen pt-28 md:pt-36">
      {/* Header section with back button */}
      <div className="max-w-7xl mx-auto px-6 mb-8 text-left">
        <Link to={prefix || "/"} className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors font-semibold text-sm">
          <ArrowLeft className="w-4 h-4 text-primary" />
          {t("general.backToHome")}
        </Link>
      </div>

      <section className="py-8 md:py-16 bg-[#121212] relative overflow-hidden border-b border-neutral-900 text-left">
        {/* Subtle geometric line art background */}
        <div className="absolute right-0 top-0 w-1/3 h-full border-l border-neutral-900 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Images stacked in an overlapping magazine layout */}
          <div className="lg:col-span-6 relative h-[320px] sm:h-[450px] flex items-center justify-center z-10">
            <div className="absolute top-[5%] left-[5%] w-[85%] h-[85%] border border-neutral-800 overflow-hidden rounded-2xl shadow-2xl bg-neutral-900">
              <img
                src={pageData.image}
                alt={pageData.h1}
                className="w-full h-full object-cover opacity-80 transition-all duration-700"
              />
            </div>
            {/* Floating Certified Badge */}
            <div className="absolute top-[12%] right-[8%] bg-neutral-950 text-white p-5 rounded-2xl border border-neutral-800 z-30 shadow-lg text-center flex flex-col justify-center items-center w-28 h-28 sm:w-36 sm:h-36">
              {pageData.formType === "budget" ? (
                <Award className="w-8 h-8 text-primary mb-2 slow-blink" />
              ) : (
                <Scissors className="w-8 h-8 text-primary mb-2 slow-blink" />
              )}
              <span className="text-xs sm:text-sm font-extrabold font-display block uppercase tracking-tight">VAULT NO. 1</span>
              <span className="text-[7px] sm:text-[8px] text-neutral-400 uppercase tracking-widest mt-1">
                {t("general.certified")}
              </span>
            </div>
          </div>

          {/* Text Details & Features */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-primary font-extrabold uppercase text-xs tracking-widest bg-primary/10 px-4 py-1.5 rounded-full mb-6">
              {pageData.formType === "budget" ? t("general.brandsProducts") : t("general.servicesWorkshop")}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight leading-[1.05] mb-4 uppercase">
              {pageData.h1}
            </h1>
            <p className="text-primary font-bold mb-6 text-sm sm:text-base font-display uppercase tracking-wide">
              {pageData.subtitle}
            </p>
            <p className="text-neutral-300 font-normal leading-relaxed mb-10 text-base">
              {pageData.intro}
            </p>

            {/* Highlights Editorial List */}
            <div className="w-full border-t border-neutral-850">
              {pageData.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-6 py-5 border-b border-neutral-855 group transition-colors duration-300"
                >
                  <span className="font-display text-2xl font-black text-primary/30 group-hover:text-primary transition-colors duration-300 leading-none pt-1">
                    {`0${idx + 1}`}
                  </span>
                  <div>
                    <h3 className="font-bold text-white font-display text-base mb-1 uppercase tracking-wide">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-neutral-400 font-normal leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Forms Area */}
      <section className="py-16 md:py-24 bg-[#0C0C0C] border-t border-neutral-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white font-display uppercase mb-4 tracking-wider">
            {t("general.contactUs")}
          </h2>
          <p className="text-neutral-400 mb-12 max-w-xl mx-auto text-sm leading-relaxed">
            {pageData.formType === "budget" 
              ? t("general.budgetSubtitle") 
              : t("general.workshopSubtitle")
            }
          </p>

          <div className="max-w-lg mx-auto bg-neutral-900 rounded-2xl shadow-xl p-2 border border-neutral-850">
            <WorkshopForm />
          </div>
        </div>
      </section>
    </div>
  );
}
