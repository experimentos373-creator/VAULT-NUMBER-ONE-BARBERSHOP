import { Facebook, Instagram, Phone, Mail, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { config } from "../config";

export default function Footer() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const prefix = language === "pt" ? "" : `/${language}`;

  const contactCards = [
    {
      name: "Instagram",
      handle: "@garfodacostarestaurante",
      icon: <Instagram className="w-5 h-5 text-emerald-750 group-hover:scale-110 transition-transform duration-300" />,
      iconBg: "bg-emerald-750/10 group-hover:bg-emerald-750/20",
      url: config.social.instagram,
      borderColor: "hover:border-emerald-750/30",
      hoverBg: "hover:bg-emerald-750/[0.02]"
    },
    {
      name: "Facebook",
      handle: "Garfo Da Costa",
      icon: <Facebook className="w-5 h-5 text-emerald-805 group-hover:scale-110 transition-transform duration-300" />,
      iconBg: "bg-emerald-805/10 group-hover:bg-emerald-805/20",
      url: config.social.facebook,
      borderColor: "hover:border-emerald-805/30",
      hoverBg: "hover:bg-emerald-805/[0.02]"
    },
    {
      name: t("contact.emailTitle"),
      handle: config.email,
      icon: <Mail className="w-5 h-5 text-[#2B4C3F] group-hover:scale-110 transition-transform duration-300" />,
      iconBg: "bg-primary/10 group-hover:bg-primary/20",
      url: `mailto:${config.email}`,
      borderColor: "hover:border-primary/30",
      hoverBg: "hover:bg-[#2B4C3F]/[0.02]"
    },
    {
      name: language === "en" ? "Phone" : "Telefone",
      handle: config.telephoneDisplay,
      icon: <Phone className="w-5 h-5 text-emerald-650 group-hover:scale-110 transition-transform duration-300" />,
      iconBg: "bg-emerald-650/10 group-hover:bg-emerald-650/20",
      url: `tel:${config.telephone}`,
      borderColor: "hover:border-emerald-650/30",
      hoverBg: "hover:bg-emerald-650/[0.02]"
    }
  ];

  return (
    <footer id="footer" className="bg-[#1A1A1A] text-white pt-16 pb-8 md:pt-24 md:pb-12 border-t border-[#E2DFD8]/20 relative overflow-hidden text-left font-sans">
      <div className="absolute right-[5%] bottom-[10%] w-[300px] h-[300px] bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Contact Banner Section */}
        <div className="bg-[#222222] border border-[#E2DFD8]/10 rounded-2xl p-6 md:p-12 mb-10 md:mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-sm">
          <div className="text-center lg:text-left">
            <span className="text-primary-light font-semibold uppercase text-[10px] tracking-wider mb-2 inline-block">
              {language === "en" ? "Reservations & Contact" : language === "fr" ? "Réservations & Contact" : "Reservas & Contacto"}
            </span>
            <h3 className="text-3xl font-normal font-serif tracking-tight mb-2 uppercase">
              {language === "en" ? "Get in Touch!" : language === "fr" ? "Contactez-nous!" : "Fale Connosco!"}
            </h3>
            <p className="text-neutral-400 text-sm font-normal max-w-md leading-relaxed">
              {language === "en" 
                ? "Secure your table to enjoy our beach-view signature dining experience by Chef Ricardo Perpétuo." 
                : language === "fr" 
                ? "Sécurisez votre table pour déguster notre cuisine d'auteur avec vue mer." 
                : "Garanta a sua mesa para desfrutar da nossa gastronomia de autor com vista panorâmica para o mar."}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
            <a
              href={`tel:${config.telephone}`}
              className="bg-primary hover:bg-[#1E362C] text-white px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 spring-hover w-full sm:w-auto text-xs uppercase tracking-wider transition-colors"
            >
              <Phone className="w-4 h-4" />
              {config.telephoneDisplay}
            </a>
            <a
              href={`mailto:${config.email}`}
              className="bg-white hover:bg-neutral-100 text-neutral-900 px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 spring-hover w-full sm:w-auto text-xs uppercase tracking-wider transition-colors"
            >
              <Mail className="w-4 h-4 text-primary" />
              {language === "en" ? "Send Email" : "Enviar E-mail"}
            </a>
          </div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactCards.map((card, idx) => (
            <a
              key={idx}
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-5 rounded-xl border border-white/5 bg-[#222222]/30 flex items-center justify-between transition-all duration-300 group hover:bg-[#222222]/70 ${card.borderColor} ${card.hoverBg} text-left`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-2.5 rounded-[4px] transition-colors ${card.iconBg}`}>
                  {card.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm mb-0.5">{card.name}</h4>
                  <p className="text-[11px] text-neutral-400 font-normal truncate max-w-[140px] sm:max-w-[160px] md:max-w-[130px] lg:max-w-[150px]">{card.handle}</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-600 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-400 font-normal">
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <a href={`${prefix}/#root`} className="flex items-center gap-3">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="font-serif tracking-tight text-white text-lg uppercase">
                Garfo da Costa
              </span>
            </a>
            <p className="text-xs text-neutral-400 mt-1">
              &copy; {currentYear} {t("general.copyright")}
            </p>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-[10px] text-neutral-500 font-medium">
                {t("general.nif")}: {config.nif} ({config.companyName})
              </span>
              <a 
                href="https://www.livroreclamacoes.pt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[10px] text-neutral-400 hover:text-white transition-colors underline font-medium"
              >
                Livro de Reclamações Eletrónico
              </a>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 font-semibold text-white uppercase text-xs tracking-wider">
            <a href={prefix === "" ? "#conceito" : `${prefix}#conceito`} className="hover:text-primary transition-colors">
              {t("nav.concept")}
            </a>
            <a href={prefix === "" ? "#especialidades" : `${prefix}#especialidades`} className="hover:text-primary transition-colors">
              {t("nav.menu")}
            </a>
            <a href={prefix === "" ? "#avaliacoes" : `${prefix}#avaliacoes`} className="hover:text-primary transition-colors">
              {t("nav.reviews")}
            </a>
            <a href={prefix === "" ? "#contacto" : `${prefix}#contacto`} className="hover:text-primary transition-colors">
              {t("nav.contact")}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
