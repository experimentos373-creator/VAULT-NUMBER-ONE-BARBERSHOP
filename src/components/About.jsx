import { ShieldCheck, Instagram, Heart, MessageCircle, ExternalLink } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const features = [
    {
      title: t("about.feat1.title"),
      desc: t("about.feat1.desc")
    },
    {
      title: t("about.feat2.title"),
      desc: t("about.feat2.desc")
    },
    {
      title: t("about.feat3.title"),
      desc: t("about.feat3.desc")
    }
  ];

  return (
    <section id="sobre" className="py-16 md:py-28 bg-[#121212] text-white relative overflow-hidden border-b border-neutral-900">
      {/* Subtle geometric line art background */}
      <div className="absolute right-0 top-0 w-1/3 h-full border-l border-neutral-900 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Images stacked in an overlapping magazine layout */}
        <div className="lg:col-span-6 relative h-[380px] sm:h-[500px] flex items-center justify-center reveal-slide-left z-10">
          
          {/* Main Large Image (Fit Alignment) */}
          <div className="absolute top-[5%] left-[5%] w-[70%] h-[75%] border border-neutral-800 overflow-hidden rounded-2xl shadow-2xl bg-neutral-900 group">
            <img
              src="/post4.png"
              alt="Ricardo Pedrosa no Vault Number One Barbershop"
              loading="lazy"
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all duration-700"
              width="500"
              height="375"
            />
            {/* Instagram Hover Overlay (Desktop/Tablet) */}
            <a
              href="https://www.instagram.com/vaultnumberone_barbershop/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 bg-black/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex flex-col justify-between p-6 text-white text-left z-20"
            >
              {/* Header info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Instagram className="w-5 h-5 text-primary" />
                  <span className="text-xs font-semibold tracking-wider">@vaultnumberone_barbershop</span>
                </div>
                <ExternalLink className="w-4 h-4 opacity-60 text-primary" />
              </div>

              {/* Caption in the middle */}
              <p className="text-xs leading-relaxed font-medium line-clamp-4 my-auto">
                {t("gallery.post4.caption")}
              </p>

              {/* Footer Stats */}
              <div className="flex items-center gap-6 pt-4 border-t border-white/10 text-xs font-bold">
                <span className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 fill-current text-red-500" />
                  148
                </span>
                <span className="flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4 fill-current" />
                  14
                </span>
              </div>
            </a>

            {/* Mobile Touch Overlay Bar (Alternative for Mobile Screens) */}
            <a
              href="https://www.instagram.com/vaultnumberone_barbershop/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent p-3.5 flex items-center justify-between text-white z-20 sm:hidden"
            >
              <div className="flex items-center gap-1.5">
                <Instagram className="w-4 h-4 text-primary shrink-0 animate-pulse" />
                <span className="text-[10px] font-extrabold tracking-wider">@vaultnumberone_barbershop</span>
              </div>
              <span className="text-[9px] bg-primary/20 text-primary border border-primary/25 px-2 py-0.5 font-black uppercase rounded-sm flex items-center gap-1">
                Ver <ExternalLink className="w-2.5 h-2.5" />
              </span>
            </a>
          </div>

          {/* Overlapping Image (Service) */}
          <div className="absolute bottom-[5%] right-[5%] w-[48%] h-[48%] border-4 border-[#121212] z-20 overflow-hidden rounded-xl shadow-2xl bg-neutral-900">
            <img
              src="/post1.png"
              alt="Corte de cabelo fade e barba premium"
              loading="lazy"
              className="w-full h-full object-cover opacity-85 hover:scale-[1.05] hover:opacity-100 transition-all duration-500"
              width="300"
              height="225"
            />
          </div>

          {/* Floating Certified Badge */}
          <div className="absolute top-[10%] right-[3%] sm:right-[6%] bg-[#0C0C0C] text-white p-3 sm:p-5 rounded-2xl border border-neutral-800 z-30 shadow-2xl text-center flex flex-col justify-center items-center w-28 h-28 sm:w-36 sm:h-36">
            <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-1 sm:mb-2 slow-blink" />
            <span className="text-xs sm:text-sm font-extrabold font-display block uppercase tracking-tight">Vault No. 1</span>
            <span className="text-[7px] sm:text-[8px] text-neutral-400 uppercase tracking-widest mt-1">
              {t("about.since")}
            </span>
          </div>
        </div>

        {/* Text Details & Features */}
        <div className="lg:col-span-6 flex flex-col items-start text-left reveal-slide-right">
          <span className="text-primary font-extrabold uppercase text-xs tracking-widest bg-primary/10 px-4 py-1.5 rounded-full mb-6">
            {t("about.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight leading-[1.05] mb-6 uppercase">
            {t("about.title")}
          </h2>
          <p className="text-primary font-bold mb-6 text-base font-display uppercase tracking-wide">
            {t("about.subtitle")}
          </p>
          <p className="text-neutral-300 font-normal leading-relaxed mb-4 text-base">
            {t("about.paragraph1")}
          </p>
          <p className="text-neutral-400 font-normal leading-relaxed mb-10 text-base">
            {t("about.paragraph2")}
          </p>

          {/* Highlights Editorial List */}
          <div className="w-full border-t border-neutral-800">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-6 py-5 border-b border-neutral-850 group transition-all duration-300 hover:border-neutral-700"
              >
                <span className="font-display text-3xl font-black text-primary/30 group-hover:text-primary transition-colors duration-300 leading-none pt-1">
                  {`0${idx + 1}`}
                </span>
                <div>
                  <h3 className="font-bold text-white font-display text-base mb-1 uppercase tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-neutral-450 font-normal leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
