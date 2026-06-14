import { useLanguage } from "../context/LanguageContext";
import { Instagram } from "lucide-react";

export default function WhatsAppButton() {
  const { language } = useLanguage();

  const ariaLabels = {
    pt: "Siga-nos no Instagram",
    en: "Follow us on Instagram",
    es: "Síguenos en Instagram",
    fr: "Suivez-nous sur Instagram",
    de: "Folgen Sie uns auf Instagram"
  };
  const ariaLabel = ariaLabels[language] || ariaLabels.pt;
  const instagramUrl = "https://www.instagram.com/vaultnumberone_barbershop/";

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Floating Instagram Button */}
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary hover:bg-white text-black p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label={ariaLabel}
      >
        <Instagram className="w-6 h-6" />
      </a>
    </div>
  );
}

