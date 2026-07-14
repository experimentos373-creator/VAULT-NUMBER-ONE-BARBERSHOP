import { PhoneCall } from "lucide-react";

export default function WhatsAppButton() {
  const phoneValue = "+351913378940";
  const defaultMessage = "Olá! Visitei o vosso stand online Gatilhauto e gostaria de obter mais informações sobre o vosso stock de viaturas.";

  const handleWhatsAppClick = () => {
    const encodedText = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${phoneValue}?text=${encodedText}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center justify-center">
      
      {/* Decorative pulse glow rings */}
      <span className="absolute inline-flex h-14 w-14 rounded-full bg-emerald-500/30 animate-ping opacity-75" />
      <span className="absolute inline-flex h-16 w-16 rounded-full bg-emerald-500/10 animate-pulse" />

      {/* Floating Button */}
      <button
        onClick={handleWhatsAppClick}
        className="relative bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer border-none outline-none"
        aria-label="Contact on WhatsApp"
      >
        {/* Simple phone call icon from lucide-react */}
        <PhoneCall className="w-6 h-6 text-white animate-pulse" />
        
        {/* Hover Label Tooltip */}
        <span className="absolute right-full mr-3.5 bg-dark-card border border-dark-border text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Conversar no WhatsApp
        </span>
      </button>

    </div>
  );
}
