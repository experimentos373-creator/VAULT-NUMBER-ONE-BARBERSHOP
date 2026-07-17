import { Calendar, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { config } from "../config";

export default function Location() {
  const { t } = useLanguage();

  const schedules = [
    { day: t("day.monday"), hours: "12:00 – 15:00 / 19:00 – 22:00" },
    { day: t("day.tuesday"), hours: "12:00 – 15:00" },
    { day: t("day.wednesday"), hours: t("contact.closed"), closed: true },
    { day: t("day.thursday"), hours: "12:00 – 15:00 / 19:00 – 22:30" },
    { day: t("day.friday"), hours: "12:00 – 15:00 / 19:00 – 23:00" },
    { day: t("day.saturday"), hours: "12:00 – 23:00" },
    { day: t("day.sunday"), hours: "12:00 – 22:00" }
  ];

  return (
    <section id="contacto" className="py-16 md:py-28 bg-[#FDFCFA] text-black relative border-b border-[#E2DFD8] text-left font-sans">
      <div className="absolute left-0 top-0 w-1/3 h-full border-r border-[#E2DFD8]/45 pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Main Grid: Info columns + Map column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Info Side (col-span-5) */}
          <div className="lg:col-span-5 space-y-10 reveal-slide-left">
            <div>
              <span className="text-primary font-semibold uppercase text-[10px] tracking-wider bg-[#D2ECE0] px-4 py-1.5 rounded-full mb-4 inline-block">
                {t("contact.badge")}
              </span>
              <h2 className="text-4xl md:text-5xl font-normal font-serif text-neutral-900 uppercase mb-4 leading-none">
                {t("contact.title")}
              </h2>
              <p className="text-neutral-600 text-xs md:text-sm font-normal leading-relaxed font-sans">
                {t("contact.desc")}
              </p>
            </div>

            {/* Structured Contact Rows */}
            <div className="space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center shrink-0 rounded-lg">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                    {t("contact.addressTitle")}
                  </h4>
                  <p className="text-xs text-neutral-900 font-semibold">
                    {config.address.street}
                  </p>
                  <p className="text-[11px] text-neutral-500 font-medium">
                    {config.address.postalCode} {config.address.locality}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center shrink-0 rounded-lg">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                    {t("contact.phoneTitle")}
                  </h4>
                  <a href={`tel:${config.telephone}`} className="text-xs text-neutral-900 font-bold hover:text-primary transition-colors block">
                    {config.telephoneDisplay}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center shrink-0 rounded-lg">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                    {t("contact.emailTitle")}
                  </h4>
                  <a href={`mailto:${config.email}`} className="text-xs text-neutral-900 font-bold hover:text-primary transition-colors block">
                    {config.email}
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Schedules and Map Column (col-span-7) */}
          <div className="lg:col-span-7 space-y-12 reveal-slide-right">
            
            {/* Dot-leaders Weekly Schedules */}
            <div className="bg-white border border-[#E2DFD8] p-6 md:p-8 rounded-2xl shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900 border-b border-[#E2DFD8] pb-3 mb-6 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                {t("contact.hoursTitle")}
              </h3>
              
              <div className="space-y-4">
                {schedules.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-end text-xs group">
                    <span className="font-semibold text-neutral-800 group-hover:text-primary transition-colors uppercase text-[11px]">
                      {item.day}
                    </span>
                    
                    {/* Dot Leader Fill line */}
                    <div className="grow mx-4 border-b border-dotted border-[#E2DFD8] h-1.5" />
                    
                    <span className={`font-semibold shrink-0 uppercase tracking-wide text-[10px] ${
                      item.closed ? "text-red-500" : "text-neutral-900"
                    }`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-neutral-450 leading-relaxed italic border-t border-[#E2DFD8]/60 pt-4 mt-6">
                {t("contact.hoursNote")}
              </p>
            </div>

            {/* Embedded Google Map */}
            <div className="bg-white border border-[#E2DFD8] p-2 rounded-2xl shadow-sm">
              <h4 className="text-[9px] uppercase tracking-wider font-extrabold text-neutral-450 px-2 py-1 flex items-center justify-between">
                <span>{t("contact.mapTitle")}</span>
                <span className="text-primary tracking-widest">COSTA DE LAVOS, FIGUEIRA DA FOZ</span>
              </h4>
              <div className="aspect-[21/9] w-full border border-neutral-100/60 overflow-hidden rounded-xl">
                <iframe
                  title="Google Map Garfo da Costa"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3052.2845997780487!2d-8.878061524533841!3d40.09136717537873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd223961a397d5d3%3A0x1378574c01cd49b!2sGarfo%20da%20Costa!5e0!3m2!1spt-PT!2spt!4v1784292812927!5m2!1spt-PT!2spt"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
