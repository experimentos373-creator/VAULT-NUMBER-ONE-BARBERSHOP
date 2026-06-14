import { ShieldCheck } from "lucide-react";
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
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Images stacked in an overlapping magazine layout */}
        <div className="lg:col-span-6 relative h-[420px] sm:h-[500px] flex items-center justify-center reveal-slide-left z-10">
          
          {/* Main Large Image (Fit Alignment) */}
          <div className="absolute top-[5%] left-[5%] w-[68%] h-[75%] border border-neutral-800 overflow-hidden rounded-2xl shadow-2xl bg-neutral-900">
            <img
              src="/post4.png"
              alt="Ricardo Pedrosa no Vault Number One Barbershop"
              loading="lazy"
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all duration-700"
              width="500"
              height="375"
            />
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
          <div className="absolute top-[12%] right-[8%] bg-[#0C0C0C] text-white p-5 rounded-2xl border border-neutral-800 z-30 shadow-2xl text-center flex flex-col justify-center items-center w-36 h-36">
            <ShieldCheck className="w-8 h-8 text-primary mb-2 slow-blink" />
            <span className="text-sm font-extrabold font-display block uppercase tracking-tight">Vault No. 1</span>
            <span className="text-[8px] text-neutral-400 uppercase tracking-widest mt-1">
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
                className="flex items-start gap-6 py-5 border-b border-neutral-850 group transition-colors duration-300"
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
