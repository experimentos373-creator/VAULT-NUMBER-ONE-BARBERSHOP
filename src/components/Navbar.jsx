import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu as MenuIcon, X, Phone, Globe, ChevronDown, Heart } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [favCount, setFavCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const saved = localStorage.getItem("gatilhauto_favorites");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setFavCount(parsed.length);
        } catch (e) {
          setFavCount(0);
        }
      } else {
        setFavCount(0);
      }
    };

    updateCount();
    window.addEventListener("favorites_updated", updateCount);
    window.addEventListener("storage", updateCount);
    return () => {
      window.removeEventListener("favorites_updated", updateCount);
      window.removeEventListener("storage", updateCount);
    };
  }, []);

  const phoneDisplay = "913 378 940";
  const phoneValue = "+351913378940";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.stock"), path: "/viaturas" },
    { name: t("nav.services"), path: "/servicos" },
    { name: t("nav.company"), path: "/empresa" }
  ];

  const languages = [
    { code: "pt", label: "PT", flag: "/images/flag_pt.svg" },
    { code: "en", label: "EN", flag: "/images/flag_en.svg" }
  ];

  const currentLang = languages.find(l => l.code === language) || languages[0];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-3 bg-white/95 border-b border-neutral-100 shadow-sm backdrop-blur-md" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse" />
          <span className="font-extrabold tracking-tighter text-neutral-900 font-display text-xl sm:text-2xl transition-colors group-hover:text-primary">
            GATILHAUTO <span className="text-primary font-black font-display font-medium">STAND</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`font-display text-sm font-semibold tracking-wide uppercase transition-colors relative py-1.5 ${
                  isActive ? "text-primary font-bold" : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Contacts & Lang Selectors */}
        <div className="hidden lg:flex items-center gap-6">
          
          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-600 hover:text-neutral-950 cursor-pointer select-none py-2"
            >
              <img src={currentLang.flag} alt={currentLang.label} className="w-4 h-3.5 object-cover rounded shadow-sm border border-neutral-150" />
              <span>{currentLang.label}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${langDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white border border-neutral-100 rounded-xl p-1.5 shadow-xl animate-menu-fade w-24">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`flex items-center gap-2.5 w-full px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-left transition-colors cursor-pointer ${
                      language === lang.code ? "bg-primary/10 text-primary font-bold" : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                    }`}
                  >
                    <img src={lang.flag} alt={lang.label} className="w-4 h-3.5 object-cover rounded shadow-sm border border-neutral-150" />
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Favorites Link */}
          <Link
            to="/viaturas?categoria=favoritos"
            className="relative p-2 text-neutral-600 hover:text-red-500 hover:bg-neutral-100/60 rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center"
            title={language === "pt" ? "Ver Favoritos" : "View Favorites"}
          >
            <Heart className={`w-4.5 h-4.5 transition-colors ${favCount > 0 ? "fill-red-500 text-red-500" : "text-neutral-500"}`} />
            {favCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[8px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center animate-bounce shadow-md">
                {favCount}
              </span>
            )}
          </Link>

          <div className="h-6 w-[1px] bg-neutral-200" />

          {/* Quick Call Button */}
          <a
            href={`tel:${phoneValue}`}
            className="flex items-center gap-2.5 bg-primary hover:bg-primary-dark text-neutral-950 font-bold font-display px-5 py-2.5 rounded-full text-xs uppercase tracking-widest transition-all shadow-md shadow-primary/15 hover:shadow-primary/30"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{phoneDisplay}</span>
          </a>
        </div>

        {/* Mobile Menu Actions */}
        <div className="flex lg:hidden items-center gap-4">
          
          {/* Mobile Favorites Link */}
          <Link
            to="/viaturas?categoria=favoritos"
            className="relative p-2 text-neutral-600 hover:text-red-500 hover:bg-neutral-100/60 rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center mr-1"
            title={language === "pt" ? "Ver Favoritos" : "View Favorites"}
          >
            <Heart className={`w-5 h-5 transition-colors ${favCount > 0 ? "fill-red-500 text-red-500" : "text-neutral-500"}`} />
            {favCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[8px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center animate-bounce shadow-md">
                {favCount}
              </span>
            )}
          </Link>

          {/* Mobile Language Button */}
          <button
            onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
            className="p-2 text-neutral-600 hover:text-neutral-900 cursor-pointer select-none"
            aria-label="Toggle language"
          >
            <Globe className="w-5 h-5" />
          </button>

          {/* Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-neutral-600 hover:text-neutral-900 p-2 cursor-pointer select-none"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu Container */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-neutral-100 shadow-xl animate-menu-fade py-6 px-6">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-semibold font-display uppercase tracking-wider py-1 border-b border-neutral-100/50 ${
                    isActive ? "text-primary font-bold" : "text-neutral-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 flex flex-col gap-4">
              <a
                href={`tel:${phoneValue}`}
                className="flex items-center justify-center gap-2.5 bg-primary text-neutral-950 font-bold font-display py-3.5 rounded-xl text-xs uppercase tracking-widest"
              >
                <Phone className="w-4 h-4" />
                <span>Ligar: {phoneDisplay}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
