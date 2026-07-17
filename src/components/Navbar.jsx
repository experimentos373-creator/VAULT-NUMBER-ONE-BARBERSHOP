import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, Globe, Calendar, Settings } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { config } from "../config";

export default function Navbar() {
  const { t, language, changeLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  
  const desktopDropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  const languages = [
    { code: "pt", label: "PT", name: "Português", flag: "pt" },
    { code: "en", label: "EN", name: "English", flag: "gb" },
    { code: "fr", label: "FR", name: "Français", flag: "fr" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const handleLanguageChange = (code) => {
    changeLanguage(code);
    setIsLangDropdownOpen(false);
  };

  const prefix = language === "pt" ? "" : `/${language}`;
  const isHome = location.pathname === "/" || location.pathname === "/en" || location.pathname === "/fr";

  const getHref = (hash) => {
    if (isHome) {
      return hash;
    }
    return `${prefix || "/"}${hash}`;
  };

  const menuSlugMap = {
    pt: "reservas",
    en: "reservations",
    fr: "reservations"
  };

  const adminSlugMap = {
    pt: "admin/reservas",
    en: "admin/reservations",
    fr: "admin/reservations"
  };

  const navLinks = [
    { label: t("nav.home"), href: isHome ? "#root" : (prefix || "/") },
    { label: t("nav.concept"), href: getHref("#conceito") },
    { label: t("nav.menu"), href: getHref("#especialidades") },
    { label: t("nav.reviews"), href: getHref("#avaliacoes") },
    { label: t("nav.contact"), href: getHref("#contacto") }
  ];

  const currentLangObj = languages.find((l) => l.code === language) || languages[0];

  return (
    <div className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="bg-[#1A1A1A] text-white text-[9px] font-semibold tracking-widest uppercase py-2 text-center border-b border-white/5">
        {language === "en"
          ? "Travellers' Choice Winner • Coastal Signature Gastronomy"
          : language === "fr"
          ? "Gagnant Travellers' Choice • Gastronomie Signature Côtière"
          : "Vencedor Travellers' Choice • Gastronomia de Autor à Beira-Mar"}
      </div>

      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-[#FDFCFA]/95 backdrop-blur-md shadow-sm py-3 text-[#1A1A1A] border-b border-[#E2DFD8]"
            : "bg-[#FDFCFA]/80 backdrop-blur-sm py-4 text-[#1A1A1A] border-b border-[#E2DFD8]/30"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
          <Link to={prefix || "/"} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 group">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full inline-block animate-pulse"></span>
              <span className="font-semibold tracking-tight text-lg font-serif uppercase">
                Garfo da Costa
              </span>
            </div>
            <span className="text-[8px] uppercase tracking-wider bg-primary text-white px-2 py-0.5 font-semibold rounded-full self-start sm:self-auto">
              Chef Ricardo Perpétuo
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6 font-medium">
            {navLinks.map((link) => (
              link.href.startsWith("#") ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-primary text-[11px] uppercase tracking-wider transition-colors relative font-medium after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="hover:text-primary text-[11px] uppercase tracking-wider transition-colors relative font-medium after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all hover:after:w-full"
                >
                  {link.label}
                </Link>
              )
            ))}

            <div className="relative border-l border-[#E2DFD8] pl-4" ref={desktopDropdownRef}>
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-[#1A1A1A]/80 hover:text-black uppercase cursor-pointer py-1.5 px-3.5 rounded-full bg-neutral-100/60 hover:bg-neutral-150 transition-all duration-200"
              >
                <Globe className="w-3.5 h-3.5 text-neutral-400" />
                <span>{currentLangObj.label}</span>
                <span className="text-[6px] text-neutral-400">▼</span>
              </button>
              
              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-[#E2DFD8] rounded-xl shadow-xl py-2 z-50 animate-menu-fade">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full text-left px-4 py-2.5 text-xs font-semibold flex items-center justify-between hover:bg-neutral-50 cursor-pointer ${
                        language === lang.code ? "text-primary font-black bg-neutral-50" : "text-neutral-700"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className={`text-[10px] tracking-wider font-extrabold w-5 text-left ${language === lang.code ? "text-primary" : "text-neutral-400"}`}>
                          {lang.label}
                        </span>
                        <span>{lang.name}</span>
                      </span>
                      <span className="flex items-center gap-2">
                        <img
                          src={`https://flagcdn.com/w20/${lang.flag}.png`}
                          alt=""
                          className="w-5 h-3.5 object-cover rounded-[3px] shadow-sm border border-neutral-200/40"
                        />
                        {language === lang.code && <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              to={`${prefix}/${adminSlugMap[language]}`}
              className="p-2 text-neutral-650 hover:text-primary hover:bg-[#D2ECE0]/50 rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center"
              title={t("nav.admin")}
            >
              <Settings className="w-4 h-4" />
            </Link>

            <Link
              to={`${prefix}/${menuSlugMap[language]}`}
              className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-full font-semibold text-[10px] uppercase tracking-wider flex items-center gap-2 spring-hover shadow-md hover:shadow-primary/20"
            >
              <Calendar className="w-3.5 h-3.5" />
              {t("nav.reservations")}
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <Link
              to={`${prefix}/${adminSlugMap[language]}`}
              className="p-2 text-neutral-650 hover:text-primary hover:bg-[#D2ECE0]/50 rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center mr-1"
              title={t("nav.admin")}
            >
              <Settings className="w-4.5 h-4.5" />
            </Link>

            <div className="relative" ref={mobileDropdownRef}>
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-1 text-[9px] font-extrabold tracking-widest text-neutral-700 uppercase cursor-pointer py-1.5 px-3 rounded-full bg-neutral-100/60"
              >
                <span>{currentLangObj.label}</span>
                <span className="text-[6px] text-neutral-400">▼</span>
              </button>
              
              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white border border-[#E2DFD8] rounded-xl shadow-xl py-1.5 z-50 animate-menu-fade">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full text-left px-3 py-2 text-[11px] font-semibold flex items-center justify-between hover:bg-neutral-50 cursor-pointer ${
                        language === lang.code ? "text-primary font-black bg-neutral-50" : "text-neutral-700"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span className={`text-[9px] tracking-wider font-extrabold w-4 text-left ${language === lang.code ? "text-primary" : "text-neutral-400"}`}>
                          {lang.label}
                        </span>
                        <span>{lang.name}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <img
                          src={`https://flagcdn.com/w20/${lang.flag}.png`}
                          alt=""
                          className="w-5 h-3.5 object-cover rounded-[3px] shadow-sm border border-neutral-200/40"
                        />
                        {language === lang.code && <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full hover:bg-neutral-100 text-black transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-neutral-100 shadow-2xl py-6 px-6 flex flex-col gap-4 text-black font-semibold rounded-b-2xl">
            {navLinks.map((link) => (
              link.href.startsWith("#") ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-primary transition-colors py-3 border-b border-neutral-100 last:border-0 text-xs tracking-wider uppercase font-bold"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-primary transition-colors py-3 border-b border-neutral-100 last:border-0 text-xs tracking-wider uppercase font-bold"
                >
                  {link.label}
                </Link>
              )
            ))}
            
            <Link
              to={`${prefix}/${menuSlugMap[language]}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-primary hover:bg-primary-hover text-white text-center py-3.5 rounded-full font-bold mt-2 shadow-md uppercase text-xs tracking-wider flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              {t("nav.reservations")}
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
