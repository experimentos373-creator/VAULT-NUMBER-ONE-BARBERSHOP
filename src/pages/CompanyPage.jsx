import { Link } from "react-router-dom";
import { ArrowLeft, Clock, MapPin, Phone, Mail, Award, Users, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function CompanyPage() {
  const { t } = useLanguage();

  const phoneDisplay = "913 378 940";
  const phoneValue = "+351913378940";
  const emailAddress = "vendas@gatilhauto.com";
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=Estr.+da+Guia+45%2C+Valeir%C3%A3o%2C+3105-051+Leiria%2C+Portugal";

  const stats = [
    { label: t("company.stats.cars"), value: "100+", icon: <Award className="w-5 h-5 text-primary-dark" /> },
    { label: t("company.stats.clients"), value: "100%", icon: <Users className="w-5 h-5 text-primary-dark" /> },
    { label: t("company.stats.warranty"), value: "18 Meses", icon: <CheckCircle2 className="w-5 h-5 text-primary-dark" /> }
  ];

  return (
    <div className="bg-light-bg min-h-screen text-neutral-800 pt-24 md:pt-32 pb-20">
      
      {/* Back button */}
      <div className="max-w-[1400px] mx-auto px-6 mb-8 text-left">
        <Link to="/" className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors font-semibold text-sm">
          <ArrowLeft className="w-4 h-4" />
          {t("general.backToHome")}
        </Link>
      </div>

      <section className="relative">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          
          {/* Header */}
          <div className="text-left mb-16">
            <span className="text-primary-dark font-black uppercase text-xs tracking-widest bg-primary/15 px-4 py-1.5 rounded-full mb-4 inline-block">
              Quem Somos
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold font-display tracking-tight leading-none mb-4 uppercase text-neutral-900">
              {t("company.title")}
            </h1>
            <p className="text-neutral-500 font-normal max-w-xl text-sm leading-relaxed">
              {t("company.subtitle")}
            </p>
          </div>

          {/* Grid Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-20">
            
            {/* Text & History Column */}
            <div className="lg:col-span-6 space-y-6 text-left text-sm text-neutral-600 font-semibold leading-relaxed">
              <p>{t("company.text1")}</p>
              <p>{t("company.text2")}</p>

              {/* Stats badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-100">
                {stats.map((st, idx) => (
                  <div key={idx} className="bg-white border border-neutral-100 p-4 rounded-2xl text-center shadow-sm">
                    <div className="flex justify-center mb-1.5">{st.icon}</div>
                    <div className="text-xl font-black text-primary-dark font-display mb-0.5">{st.value}</div>
                    <div className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider">{st.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Overlapping Images Column - HIGH WOW FACTOR */}
            <div className="lg:col-span-6 relative h-[380px] sm:h-[450px] flex items-center justify-center z-10">
              
              <div className="absolute top-[5%] left-[5%] w-[68%] h-[75%] border border-neutral-100 overflow-hidden rounded-3xl shadow-md bg-neutral-100">
                <img
                  src="/images/about/santa_cruz_workshop.png"
                  alt="Preparação de Viaturas Gatilhauto"
                  className="w-full h-full object-cover scale-120 transition-transform duration-700 hover:scale-125"
                  loading="lazy"
                />
              </div>

              {/* Overlapping image (Workshop check) */}
              <div className="absolute bottom-[5%] right-[5%] w-[48%] h-[48%] border-4 border-light-bg z-20 overflow-hidden rounded-2xl shadow-xl bg-neutral-100">
                <img
                  src="/images/about/mechanic_working.png"
                  alt="Exposição Gatilhauto"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>

          </div>

          {/* Contact Details & Map Area */}
          <div className="bg-white border border-neutral-100 rounded-3xl p-6 md:p-8 text-left relative overflow-hidden shadow-sm">
            <div className="flex flex-col lg:flex-row gap-8 w-full">
              
              {/* Map Column */}
              <div className="w-full lg:w-3/5 h-[350px] md:h-[420px] rounded-2xl overflow-hidden border border-neutral-100 shadow-sm relative">
                <iframe 
                  title="Gatilhauto Location Map"
                  src="https://maps.google.com/maps?q=39.870143,-8.745180&z=16&output=embed&hl=pt" 
                  className="w-full h-full border-none opacity-95"
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Details Column */}
              <div className="flex flex-1 flex-col justify-between gap-6 my-4 lg:my-0">
                <div>
                  <h2 className="text-neutral-900 text-lg md:text-2xl font-extrabold uppercase font-display mb-6">
                    Gatilhauto
                  </h2>
                  
                  <div className="flex flex-col gap-6">
                    
                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-primary-dark shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <a 
                          href={mapUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-xs md:text-sm text-neutral-600 hover:text-primary-dark transition-colors font-semibold"
                        >
                          Estr. da Guia 45, Valeirão, 3105-051 Leiria
                        </a>
                      </div>
                    </div>

                    {/* Opening Hours */}
                    <div className="flex items-start gap-4">
                      <Clock className="w-5 h-5 text-primary-dark shrink-0 mt-0.5" />
                      <div className="text-xs md:text-sm text-neutral-600 whitespace-pre-wrap font-semibold leading-relaxed">
                        Segunda a Sexta: 08h30 às 19h00{"\n"}
                        Sábado: 09h00 às 13h00 e das 14h00 às 18h00{"\n"}
                        Domingo: 15h00 às 18h00
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <Mail className="w-5 h-5 text-primary-dark shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <a 
                          href={`mailto:${emailAddress}`} 
                          className="text-xs md:text-sm text-neutral-600 hover:text-primary-dark transition-colors font-semibold"
                        >
                          {emailAddress}
                        </a>
                      </div>
                    </div>

                    {/* Phone numbers */}
                    <div className="flex items-start gap-4">
                      <Phone className="w-5 h-5 text-primary-dark shrink-0 mt-0.5" />
                      <div className="flex-1 flex flex-col gap-3">
                        <div className="flex flex-col">
                          <div className="flex items-center gap-1.5">
                            <a 
                              href={`tel:${phoneValue}`} 
                              className="text-xs md:text-sm text-neutral-600 hover:text-primary-dark transition-colors font-semibold"
                            >
                              {phoneDisplay}
                            </a>
                            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-primary/10 text-primary-dark uppercase">
                              Comercial
                            </span>
                          </div>
                          <span className="text-[10px] text-neutral-400 font-bold">(Chamada para a rede móvel nacional)</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Obtain Directions Button */}
                <a 
                  href={`https://www.google.com/maps/dir/?api=1&origin=current+location&destination=Estr.+da+Guia+45%2C+Valeir%C3%A3o%2C+3105-051+Leiria%2C+Portugal`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-neutral-900 hover:scale-[0.98] active:scale-95 px-6 py-3.5 text-xs font-black uppercase tracking-wider rounded-xl md:rounded-full transition-all w-fit shadow-md shadow-primary/20"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden="true">
                    <path d="M2.98033 5.27131C0.928482 6.14199 1.10731 9.11068 3.23905 9.58908L5.72352 10.1467C6.41365 10.3015 6.98045 10.7771 7.25282 11.4299L8.23334 13.7798C9.07466 15.7961 12.0239 15.4522 12.5304 13.2848L14.6485 4.13637C15.0652 2.33668 13.322 0.873966 11.622 1.59682L2.98033 5.27131Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                  <span>Obter direcções</span>
                </a>

              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
