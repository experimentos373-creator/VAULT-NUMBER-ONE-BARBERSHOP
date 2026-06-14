import { Instagram, Phone, Mail, ArrowUpRight, Scissors } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { config } from "../config";

export default function Footer() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      handle: "@vaultnumberone_barbershop",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://www.instagram.com/vaultnumberone_barbershop/",
      color: "hover:border-amber-500/40 hover:bg-amber-500/5 hover:text-primary"
    }
  ];

  const prefix = language === "pt" ? "" : `/${language}`;

  return (
    <footer id="footer" className="bg-[#0A0A0A] text-white pt-16 pb-8 md:pt-24 md:pb-12 border-t border-neutral-900 relative overflow-hidden text-left">
      {/* Decorative ambient light */}
      <div className="absolute right-[5%] bottom-[10%] w-[300px] h-[300px] bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Contact Banner Section */}
        <div className="bg-[#121212] border border-neutral-850 rounded-none p-6 md:p-12 mb-10 md:mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-sm">
          <div className="text-center lg:text-left">
            <h3 className="text-3xl font-extrabold font-display tracking-tight mb-2 uppercase text-white">
              {t("footer.title")}
            </h3>
            <p className="text-neutral-400 text-sm font-normal max-w-md leading-relaxed">
              {t("footer.desc")}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
            <a
              href="https://www.instagram.com/vaultnumberone_barbershop/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-white text-black font-extrabold px-6 py-4 rounded-full flex items-center justify-center gap-2 spring-hover shadow-md w-full sm:w-auto text-xs uppercase tracking-wider transition-colors duration-200"
            >
              <Instagram className="w-4 h-4" />
              {t("footer.callBtn")}: @vaultnumberone_barbershop
            </a>
            <a
              href={`mailto:${config.email}`}
              className="bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white px-6 py-4 rounded-full font-bold flex items-center justify-center gap-2 spring-hover shadow-md w-full sm:w-auto text-xs uppercase tracking-wider transition-colors duration-200"
            >
              <Mail className="w-4 h-4 text-primary" />
              {t("footer.emailBtn")}
            </a>
          </div>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Social Links */}
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-none border border-neutral-850 bg-[#121212]/40 flex items-center justify-between transition-all duration-350 group ${social.color}`}
            >
              <div className="flex items-center gap-4">
                <div className="bg-neutral-900 p-3 rounded-none border border-neutral-800 group-hover:bg-neutral-800 transition-colors">
                  {social.icon}
                </div>
                <div>
                  <h4 className="font-bold text-white font-display text-sm mb-0.5">{social.name}</h4>
                  <p className="text-[11px] text-neutral-400 font-normal">{social.handle}</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-500 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
            </a>
          ))}

          {/* Email Card */}
          <a
            href={`mailto:${config.email}`}
            className="p-6 rounded-none border border-neutral-850 bg-[#121212]/40 flex items-center justify-between transition-all duration-300 group hover:border-primary/40 hover:bg-neutral-900/40 text-left"
          >
            <div className="flex items-center gap-4">
              <div className="bg-neutral-900 p-3 rounded-none border border-neutral-800 group-hover:bg-neutral-800 transition-colors">
                <Mail className="w-5 h-5 text-neutral-300 group-hover:text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-white font-display text-sm mb-0.5">
                  {t("footer.emailCard")}
                </h4>
                <p className="text-[11px] text-neutral-400 font-normal truncate max-w-[140px]">
                  {config.email}
                </p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-neutral-500 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
          </a>

        </div>

        {/* Divider */}
        <div className="border-t border-neutral-900 pt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-400 font-normal">
          
          {/* Logo & copyright */}
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <a href={`${prefix}/#home`} className="flex items-center gap-3">
              <Scissors className="w-4 h-4 text-primary shrink-0" />
              <span className="font-extrabold tracking-tighter text-white font-display text-lg uppercase">
                Vault <span className="text-primary font-black font-display">Number One</span>
              </span>
            </a>
            <p className="text-xs text-neutral-400 mt-1">
              &copy; {currentYear} {t("footer.copyright")}
              <a 
                href="https://p-d-agency.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors underline font-medium"
              >
                P&D Agency
              </a>.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-8 font-semibold text-white">
            <a href={`${prefix}/#menu`} className="hover:text-primary transition-colors">
              {t("nav.bikes")}
            </a>
            <a href={`${prefix}/#sobre`} className="hover:text-primary transition-colors">
              {t("nav.about")}
            </a>
            <a href={`${prefix}/#galeria`} className="hover:text-primary transition-colors">
              {t("nav.gallery")}
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
