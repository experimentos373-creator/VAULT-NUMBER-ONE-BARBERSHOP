import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function SEOPage() {
  const { slug } = useParams();
  const { t, language } = useLanguage();
  const prefix = language === "pt" ? "" : `/${language}`;

  useEffect(() => {
    document.title = `${t("general.pageNotFound")} | Garfo da Costa`;
  }, [t]);

  return (
    <div className="py-32 text-center bg-[#FDFCFA] min-h-[70vh] flex flex-col justify-center items-center font-sans text-left">
      <div className="max-w-md mx-auto px-6 text-center">
        <h2 className="text-3xl font-normal font-serif mb-4 uppercase text-neutral-900">
          {t("general.pageNotFound")}
        </h2>
        <p className="text-neutral-500 mb-8 text-sm">
          {language === "en" 
            ? "We are sorry, but the page you are looking for does not exist." 
            : language === "fr"
            ? "Nous sommes désolés, mais la page que vous recherchez n'existe pas."
            : "Pedimos desculpa, mas a página que procura não existe ou foi movida."}
        </p>
        <Link 
          to={prefix || "/"} 
          className="bg-primary hover:bg-[#1E362C] text-white font-semibold py-3 px-6 rounded-full transition-colors uppercase text-xs tracking-wider inline-block shadow-md spring-hover"
        >
          {t("general.backToHome")}
        </Link>
      </div>
    </div>
  );
}
