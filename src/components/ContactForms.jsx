import { Calendar, ExternalLink } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import WorkshopForm from "./WorkshopForm";

export default function ContactForms() {
  const { t } = useLanguage();

  return (
    <section id="formularios" className="py-16 md:py-24 bg-[#0C0C0C] border-b border-neutral-900 text-center relative scroll-margin-top-[96px]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12 reveal-slide-up text-center">
          <span className="text-black font-black uppercase text-xs tracking-widest bg-primary px-4 py-1.5 rounded-none mb-4 inline-block">
            {t("contact.servicesTitle")}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight uppercase mb-4">
            {t("contact.servicesSubtitle")}
          </h2>
          <p className="text-neutral-400 font-normal max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Recomendamos o agendamento prévio online. Selecione o método de marcação que preferir abaixo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left reveal-slide-up">
          
          {/* Card 1: Online Booking via Buk.pt (Preferred) */}
          <div className="lg:col-span-5 bg-[#121212] border border-neutral-850 p-8 rounded-2xl flex flex-col justify-between hover:border-primary/40 hover:shadow-lg transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white font-display uppercase tracking-wider mb-3">
                Marcação Online
              </h3>
              <p className="text-xs text-neutral-455 leading-relaxed mb-6 font-normal">
                Agende diretamente na nossa agenda digital através do **Buk.pt**. Escolha o seu serviço, escolha o barbeiro Ricardo Pedrosa, e selecione o dia e a hora com confirmação instantânea e sem complicações.
              </p>
            </div>
            
            <a
              href="https://vaultnumberone.buk.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-[#B8902B] text-black font-black py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-205 flex items-center justify-center gap-2 uppercase text-xs tracking-widest font-display w-full text-center spring-hover"
            >
              Agendar no Buk.pt
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Card 2: Custom Booking Form (Instagram fallback) */}
          <div className="lg:col-span-7">
            <WorkshopForm />
          </div>

        </div>

      </div>
    </section>
  );
}
