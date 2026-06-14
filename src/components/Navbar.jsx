import { useState, useEffect, useRef } from "react";
import { Menu, X, Instagram, Globe, Scissors } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { config } from "../config";

export default function Navbar() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const desktopDropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  const languages = [
    { code: "pt", label: "PT", name: "Português" },
    { code: "en", label: "EN", name: "English" },
    { code: "es", label: "ES", name: "Español" },
    { code: "fr", label: "FR", name: "Français" },
    { code: "de", label: "DE", name: "Deutsch" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedDesktop = desktopDropdownRef.current && desktopDropdownRef.current.contains(event.target);
      const clickedMobile = mobileDropdownRef.current && mobileDropdownRef.current.contains(event.target);
      if (!clickedDesktop && !clickedMobile) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (newLang) => {
    if (newLang === language) return;
    const currentPath = location.pathname;
    const currentHash = location.hash;
    const currentSearch = location.search;

    let basePath = currentPath;
    const langPrefixes = ["/en", "/es", "/fr", "/de"];
    for (const prefix of langPrefixes) {
      if (currentPath.startsWith(prefix + "/") || currentPath === prefix) {
        basePath = currentPath.substring(prefix.length) || "/";
        break;
      }
    }

    let newPath = basePath;
    if (newLang !== "pt") {
      newPath = `/${newLang}${basePath === "/" ? "" : basePath}`;
    }

    navigate(`${newPath}${currentSearch}${currentHash}`);
  };

  const prefix = language === "pt" ? "" : `/${language}`;
  const navLinks = [
    { label: t("nav.bikes").toUpperCase(), href: `${prefix}/#menu` },
    { label: t("nav.about").toUpperCase(), href: `${prefix}/#sobre` },
    { label: t("nav.reviews").toUpperCase(), href: `${prefix}/#avaliacoes` },
    { label: t("nav.contact").toUpperCase(), href: `${prefix}/#contacto` },
  ];

  const currentLangObj = languages.find((l) => l.code === language) || languages[0];

  return (
    <div className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Announcement Bar */}
      <div className="bg-[#0A0A0A] text-neutral-300 text-[9px] font-extrabold tracking-widest uppercase py-2 text-center border-b border-neutral-900">
        {language === "en" 
          ? "Established in 2026 • Premium Men's Grooming in Guia, Pombal"
          : language === "es"
          ? "Fundada en 2026 • Estética Masculina Premium en Guia, Pombal"
          : language === "fr"
          ? "Établi en 2026 • Coiffure Masculine Premium à Guia, Pombal"
          : language === "de"
          ? "Gegründet 2026 • Premium Herrenpflege in Guia, Pombal"
          : "Inaugurada a 22 de Março de 2026 • Estética Masculina na Guia, Pombal"
        }
      </div>

      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-[#0A0A0A]/95 backdrop-blur-md shadow-lg py-4 text-white border-b border-neutral-900"
            : "bg-[#0C0C0C]/80 backdrop-blur-sm py-5 text-white border-b border-neutral-900/40"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to={prefix || "/"} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 group">
            <div className="flex items-center gap-2">
              <Scissors className="w-4 h-4 text-primary shrink-0 animate-pulse" />
              <span className="font-extrabold tracking-tighter text-xl font-display text-white">
                VAULT NUMBER<span className="text-primary font-black">.ONE</span>
              </span>
            </div>
            <span className="text-[9px] uppercase tracking-widest bg-primary text-black px-2 py-0.5 font-black rounded-sm self-start sm:self-auto">
              Barbershop
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-primary text-xs tracking-wider transition-colors relative text-neutral-300 hover:text-white font-extrabold after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}

            {/* Language Selector Dropdown */}
            <div className="relative border-l border-neutral-800 pl-4" ref={desktopDropdownRef}>
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-neutral-400 hover:text-white uppercase cursor-pointer py-1.5 px-2.5 rounded-lg bg-neutral-900/60 hover:bg-neutral-800 transition-all duration-200"
              >
                <Globe className="w-3.5 h-3.5 text-neutral-400" />
                <span>{currentLangObj.label}</span>
                <span className="text-[7px] text-neutral-400">▼</span>
              </button>
              
              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-[#121212] border border-neutral-800 rounded-xl shadow-2xl py-2 z-50 animate-menu-fade">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => {
                        handleLanguageChange(lang.code);
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-xs font-semibold flex items-center justify-between hover:bg-neutral-800 cursor-pointer ${
                        language === lang.code ? "text-primary font-black bg-neutral-800/50" : "text-neutral-300"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className={`text-[10px] tracking-wider font-extrabold w-5 text-left ${language === lang.code ? "text-primary" : "text-neutral-500"}`}>
                          {lang.label}
                        </span>
                        <span>{lang.name}</span>
                      </span>
                      <span className="flex items-center gap-2">
                        <img
                          src={`https://flagcdn.com/w20/${lang.code === "en" ? "gb" : lang.code}.png`}
                          alt=""
                          className="w-5 h-3.5 object-cover rounded-sm shadow-sm border border-neutral-800/40"
                        />
                        {language === lang.code && <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="https://www.instagram.com/vaultnumberone_barbershop/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-white text-black hover:text-black px-5 py-2.5 rounded-full font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 spring-hover shadow-md hover:shadow-primary/30 transition-all duration-300"
            >
              <Instagram className="w-3.5 h-3.5" />
              Instagram
            </a>
          </div>

          {/* Mobile Toggle & Mobile Lang Selector */}
          <div className="md:hidden flex items-center gap-2">
            {/* Simple Mobile Dropdown Select */}
            <div className="relative" ref={mobileDropdownRef}>
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-1 text-[9px] font-extrabold tracking-widest text-neutral-400 uppercase cursor-pointer py-1.5 px-2 rounded-lg bg-neutral-900/60"
              >
                <span>{currentLangObj.label}</span>
                <span className="text-[6px] text-neutral-450">▼</span>
              </button>
              
              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-[#121212] border border-neutral-800 rounded-xl shadow-2xl py-1.5 z-50 animate-menu-fade">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => {
                        handleLanguageChange(lang.code);
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-[11px] font-semibold flex items-center justify-between hover:bg-neutral-800 cursor-pointer ${
                        language === lang.code ? "text-primary font-black bg-neutral-800/50" : "text-neutral-300"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span className={`text-[9px] tracking-wider font-extrabold w-4 text-left ${language === lang.code ? "text-primary" : "text-neutral-500"}`}>
                          {lang.label}
                        </span>
                        <span>{lang.name}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <img
                          src={`https://flagcdn.com/w20/${lang.code === "en" ? "gb" : lang.code}.png`}
                          alt=""
                          className="w-5 h-3.5 object-cover rounded-sm shadow-sm border border-neutral-800/40"
                        />
                        {language === lang.code && <span className="w-1 h-1 bg-primary rounded-full animate-pulse" />}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full hover:bg-neutral-900 text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0C0C0C] border-t border-neutral-900 shadow-2xl py-6 px-6 flex flex-col gap-4 text-white font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-primary transition-colors py-3 border-b border-neutral-900 last:border-0 text-xs tracking-wider font-extrabold"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.instagram.com/vaultnumberone_barbershop/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-primary hover:bg-[#B8902B] text-black text-center py-3.5 rounded-full font-bold mt-2 shadow-md uppercase text-xs tracking-wider flex items-center justify-center gap-2 transition-colors duration-200"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}
