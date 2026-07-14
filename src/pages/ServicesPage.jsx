import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowLeft, ShieldCheck, Phone, User, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function ServicesPage() {
  const { t } = useLanguage();

  // Form submission state
  const [retomaFormSubmitted, setRetomaFormSubmitted] = useState(false);

  // Form Field States
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [retomaBrand, setRetomaBrand] = useState("");
  const [retomaModel, setRetomaModel] = useState("");
  const [retomaYear, setRetomaYear] = useState("");
  const [retomaKms, setRetomaKms] = useState("");

  const handleRetomaSubmit = (e) => {
    e.preventDefault();
    if (!retomaBrand || !retomaModel || !retomaYear || !retomaKms || !userName || !userPhone) return;
    setRetomaFormSubmitted(true);
  };

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
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          
          {/* Section Header */}
          <div className="mb-12 reveal-slide-up">
            <span className="text-primary-dark font-black uppercase text-xs tracking-widest bg-primary/15 px-4 py-1.5 rounded-full mb-4 inline-block">
              Serviços Gatilhauto
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold font-display tracking-tight leading-none mb-4 uppercase text-neutral-900">
              {t("services.title")}
            </h1>
            <p className="text-neutral-500 font-normal max-w-xl mx-auto text-sm leading-relaxed">
              {t("services.subtitle")}
            </p>
          </div>

          {/* Form Container */}
          <div className="max-w-xl mx-auto bg-white border border-neutral-100 rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.03)] relative text-left">
            
            <div className="animate-menu-fade">
              <h2 className="text-xl font-bold font-display uppercase tracking-wider text-neutral-900 mb-2 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary-dark" />
                <span>{t("services.retoma.title")}</span>
              </h2>
              <p className="text-xs text-neutral-500 mb-6 font-semibold">
                {t("services.retoma.subtitle")}
              </p>

              {!retomaFormSubmitted ? (
                <form onSubmit={handleRetomaSubmit} className="space-y-5">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block mb-2">
                        {t("services.retoma.brand")}
                      </label>
                      <input
                        type="text"
                        value={retomaBrand}
                        onChange={(e) => setRetomaBrand(e.target.value)}
                        placeholder="Ex: Mercedes-Benz"
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-xs font-semibold text-neutral-800 outline-none focus:border-primary/50 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block mb-2">
                        {t("services.retoma.model")}
                      </label>
                      <input
                        type="text"
                        value={retomaModel}
                        onChange={(e) => setRetomaModel(e.target.value)}
                        placeholder="Ex: Classe A 180d AMG"
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-xs font-semibold text-neutral-800 outline-none focus:border-primary/50 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block mb-2">
                        {t("services.retoma.year")}
                      </label>
                      <input
                        type="number"
                        min="1980"
                        max="2027"
                        value={retomaYear}
                        onChange={(e) => setRetomaYear(e.target.value)}
                        placeholder="Ex: 2018"
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-xs font-semibold text-neutral-800 outline-none focus:border-primary/50 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block mb-2">
                        {t("services.retoma.kms")}
                      </label>
                      <input
                        type="number"
                        min="0"
                        value={retomaKms}
                        onChange={(e) => setRetomaKms(e.target.value)}
                        placeholder="Ex: 145000"
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-xs font-semibold text-neutral-800 outline-none focus:border-primary/50 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Contact information fields */}
                  <div className="border-t border-neutral-100 pt-4 space-y-4">
                    <div>
                      <label className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block mb-2">
                        Nome do proprietário
                      </label>
                      <div className="bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-2.5 flex items-center gap-3">
                        <User className="w-4 h-4 text-neutral-400" />
                        <input
                          type="text"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                          placeholder="Nome Completo"
                          className="bg-transparent text-xs font-semibold text-neutral-800 w-full outline-none border-none"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block mb-2">
                        {t("services.retoma.phone")}
                      </label>
                      <div className="bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-2.5 flex items-center gap-3">
                        <Phone className="w-4 h-4 text-neutral-400" />
                        <input
                          type="tel"
                          value={userPhone}
                          onChange={(e) => setUserPhone(e.target.value)}
                          placeholder="Telemóvel"
                          className="bg-transparent text-xs font-semibold text-neutral-800 w-full outline-none border-none"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-neutral-950 py-4 rounded-xl font-bold text-xs uppercase tracking-widest text-center transition-colors shadow-lg shadow-primary/10 cursor-pointer border-none"
                  >
                    {t("services.retoma.submit")}
                  </button>

                </form>
              ) : (
                <div className="text-center py-10 animate-menu-fade">
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
                  <h3 className="text-lg font-bold font-display uppercase tracking-wider text-neutral-900 mb-2">Proposta Submetida!</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed max-w-sm mx-auto font-semibold">
                    {t("services.retoma.success")}
                  </p>
                </div>
              )}
            </div>

            {/* Trust Assurance Badge */}
            <div className="mt-8 border-t border-neutral-100 pt-4 flex items-center justify-center gap-2.5 text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-primary-dark shrink-0" />
              <span>Conexão Segura SSL • Gatilhauto Pombal</span>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
