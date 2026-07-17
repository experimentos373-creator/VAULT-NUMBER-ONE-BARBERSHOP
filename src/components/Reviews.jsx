import { Award, Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Reviews() {
  const { t } = useLanguage();

  const reviews = [
    {
      name: t("reviews.rev1.name"),
      date: t("reviews.rev1.date"),
      text: t("reviews.rev1.text")
    },
    {
      name: t("reviews.rev2.name"),
      date: t("reviews.rev2.date"),
      text: t("reviews.rev2.text")
    },
    {
      name: t("reviews.rev3.name"),
      date: t("reviews.rev3.date"),
      text: t("reviews.rev3.text")
    },
    {
      name: t("reviews.rev4.name"),
      date: t("reviews.rev4.date"),
      text: t("reviews.rev4.text")
    }
  ];

  return (
    <section id="avaliacoes" className="py-16 md:py-28 bg-[#FDFCFA] relative overflow-hidden border-b border-[#E2DFD8] text-left font-sans">
      <div className="absolute right-0 top-0 w-1/3 h-full border-l border-[#E2DFD8]/45 pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header grid containing Travellers' Choice card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16 md:mb-24">
          <div className="lg:col-span-8 reveal-slide-left">
            <span className="text-primary font-semibold uppercase text-[10px] tracking-wider bg-[#D2ECE0] px-4 py-1.5 rounded-full mb-4 inline-block">
              {t("reviews.badge")}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal font-serif tracking-tight leading-none uppercase text-neutral-900">
              {t("reviews.title")}
            </h2>
          </div>

          {/* TripAdvisor Travelers Choice Badge card */}
          <div className="lg:col-span-4 reveal-slide-right flex justify-start lg:justify-end">
            <div className="bg-white border border-[#E2DFD8] p-5 rounded-xl shadow-sm flex items-center gap-4 max-w-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-primary slow-blink" />
              </div>
              <div>
                <p className="text-xs font-bold text-neutral-900 uppercase tracking-wide">
                  TripAdvisor 4.6 / 5
                </p>
                <span className="text-[10px] text-neutral-450 uppercase tracking-widest font-semibold block mt-0.5">
                  Travellers' Choice Winner
                </span>
                <span className="flex items-center gap-0.5 text-amber-500 mt-1">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <svg className="w-3.5 h-3.5 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <defs>
                      <linearGradient id="star-grad-reviews" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="60%" stopColor="currentColor" />
                        <stop offset="60%" stopColor="#E2DFD8" />
                      </linearGradient>
                    </defs>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="url(#star-grad-reviews)" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Asymmetrical Reviews List (Left Border Accent styled after Agostinho BIKES) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="border-l border-[#E2DFD8] pl-6 py-1 hover:border-primary transition-all duration-300 reveal-slide-up text-left group"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center gap-0.5 text-amber-500 mb-3">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>

              <p className="text-neutral-750 text-sm italic font-serif leading-relaxed mb-6 group-hover:text-black transition-colors duration-300">
                "{rev.text}"
              </p>

              <div className="flex items-center justify-between text-[10px] text-neutral-400 font-semibold uppercase tracking-wider">
                <span className="text-neutral-900 group-hover:text-primary transition-colors">{rev.name}</span>
                <span>{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
