import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { config } from "../config";
import { Calendar, User, Phone, Mail, Clock, Users, FileText, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Reservations() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    obs: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    document.title = `${t("booking.title")} | Garfo da Costa`;
    window.scrollTo(0, 0);
  }, [t]);

  const lunchSlots = ["12:00", "12:30", "13:00", "13:30", "14:00"];
  const dinnerSlots = ["19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMessage("");
  };

  const validateForm = () => {
    if (!formData.name.trim()) return false;
    if (!formData.email.trim() || !formData.email.includes("@")) return false;
    if (!formData.phone.trim() || formData.phone.length < 9) return false;
    if (!formData.date) return false;
    if (!formData.time) return false;
    if (!formData.guests) return false;
    return true;
  };

  // Format date from YYYY-MM-DD to DD/MM/YYYY
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [y, m, d] = dateStr.split("-");
    return `${d}/${m}/${y}`;
  };

  // Determine meal period from time
  const getMealPeriod = (time) => {
    if (!time) return "";
    const hour = parseInt(time.split(":")[0], 10);
    if (language === "en") return hour < 17 ? "Lunch" : "Dinner";
    if (language === "fr") return hour < 17 ? "Déjeuner" : "Dîner";
    return hour < 17 ? "Almoço" : "Jantar";
  };

  const buildWhatsAppUrl = () => {
    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const date = formatDate(formData.date);
    const time = formData.time;
    const guests = formData.guests;
    const obs = formData.obs.trim();
    const meal = getMealPeriod(time);

    let text;
    if (language === "en") {
      text = `\uD83C\uDF7D\uFE0F *RESERVATION REQUEST*\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `\uD83D\uDCCD *Garfo da Costa*\n\n` +
        `\uD83D\uDC64 *Name:* ${name}\n` +
        `\uD83D\uDCE7 *Email:* ${email}\n` +
        `\uD83D\uDCDE *Phone:* ${phone}\n\n` +
        `\uD83D\uDCC5 *Date:* ${date}\n` +
        `\uD83D\uDD50 *Time:* ${time} (${meal})\n` +
        `\uD83D\uDC65 *Guests:* ${guests} ${parseInt(guests) === 1 ? "person" : "people"}\n` +
        (obs ? `\n\uD83D\uDCDD *Notes:* ${obs}\n` : "") +
        `\n━━━━━━━━━━━━━━━━━━━━\n` +
        `Please confirm table availability.\nThank you! \uD83D\uDE4F`;
    } else if (language === "fr") {
      text = `\uD83C\uDF7D\uFE0F *DEMANDE DE RÉSERVATION*\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `\uD83D\uDCCD *Garfo da Costa*\n\n` +
        `\uD83D\uDC64 *Nom:* ${name}\n` +
        `\uD83D\uDCE7 *Email:* ${email}\n` +
        `\uD83D\uDCDE *Téléphone:* ${phone}\n\n` +
        `\uD83D\uDCC5 *Date:* ${date}\n` +
        `\uD83D\uDD50 *Heure:* ${time} (${meal})\n` +
        `\uD83D\uDC65 *Convives:* ${guests} ${parseInt(guests) === 1 ? "personne" : "personnes"}\n` +
        (obs ? `\n\uD83D\uDCDD *Remarques:* ${obs}\n` : "") +
        `\n━━━━━━━━━━━━━━━━━━━━\n` +
        `Veuillez confirmer la disponibilité.\nMerci! \uD83D\uDE4F`;
    } else {
      text = `\uD83C\uDF7D\uFE0F *PEDIDO DE RESERVA*\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `\uD83D\uDCCD *Garfo da Costa*\n\n` +
        `\uD83D\uDC64 *Nome:* ${name}\n` +
        `\uD83D\uDCE7 *Email:* ${email}\n` +
        `\uD83D\uDCDE *Telefone:* ${phone}\n\n` +
        `\uD83D\uDCC5 *Data:* ${date}\n` +
        `\uD83D\uDD50 *Hora:* ${time} (${meal})\n` +
        `\uD83D\uDC65 *Pessoas:* ${guests} ${parseInt(guests) === 1 ? "pessoa" : "pessoas"}\n` +
        (obs ? `\n\uD83D\uDCDD *Observações:* ${obs}\n` : "") +
        `\n━━━━━━━━━━━━━━━━━━━━\n` +
        `Por favor, confirme a disponibilidade da mesa.\nObrigado! \uD83D\uDE4F`;
    }

    return `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setErrorMessage(t("booking.error"));
      return;
    }

    // Open WhatsApp directly with formatted reservation data
    window.open(buildWhatsAppUrl(), "_blank");
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFCFA] pt-32 pb-20 font-sans text-left">
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link to={language === "pt" ? "/" : `/${language}`} className="text-xs uppercase tracking-wider text-neutral-400 hover:text-primary transition-colors font-semibold">
            &larr; {t("general.backToHome")}
          </Link>
        </div>

        {/* Page Title */}
        <div className="mb-12 border-b border-[#E2DFD8] pb-6">
          <h1 className="text-4xl md:text-5xl font-normal font-serif text-neutral-900 uppercase mb-3">
            {t("booking.title")}
          </h1>
          <p className="text-neutral-500 text-sm md:text-base leading-relaxed">
            {t("booking.subtitle")}
          </p>
        </div>

        {isSubmitted ? (
          /* Success Screen */
          <div className="bg-white border border-[#E2DFD8] p-8 md:p-12 text-center rounded-2xl shadow-sm animate-menu-fade">
            <div className="w-16 h-16 bg-[#D2ECE0] text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-normal font-serif uppercase text-neutral-900 mb-4">
              {language === "en" ? "Booking Requested" : language === "fr" ? "Réservation Enregistrée" : "Reserva Registada"}
            </h2>
            
            <p className="text-neutral-600 text-sm max-w-md mx-auto leading-relaxed mb-8">
              {t("booking.success")}
            </p>

            {/* Summary Details Box */}
            <div className="bg-[#F4F3EF] border border-[#E2DFD8] p-6 max-w-md mx-auto text-left rounded-xl mb-8 font-sans">
              <h3 className="font-semibold text-neutral-900 uppercase text-[10px] tracking-wider border-b border-[#E2DFD8] pb-2 mb-3">
                {language === "en" ? "Details Summary" : language === "fr" ? "Résumé des Détails" : "Resumo da Reserva"}
              </h3>
              <div className="space-y-2 text-xs text-neutral-700">
                <p><strong>{language === "en" ? "Name" : "Nome"}:</strong> {formData.name}</p>
                <p><strong>{language === "en" ? "Date" : "Data"}:</strong> {formatDate(formData.date)}</p>
                <p><strong>{language === "en" ? "Time" : "Hora"}:</strong> {formData.time}</p>
                <p><strong>{language === "en" ? "Guests" : "Pessoas"}:</strong> {formData.guests}</p>
                <p><strong>{language === "en" ? "Phone" : "Telefone"}:</strong> {formData.phone}</p>
                {formData.obs && <p><strong>{language === "en" ? "Notes" : "Observações"}:</strong> {formData.obs}</p>}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-[#1E362C] text-white px-8 py-4 rounded-full font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 w-full sm:w-auto shadow-md spring-hover"
              >
                <span>{t("booking.submit")}</span>
                <ArrowRight className="w-4 h-4 text-primary-light" />
              </a>
              <Link
                to={language === "pt" ? "/" : `/${language}`}
                className="border border-[#E2DFD8] hover:bg-[#F4F3EF] text-neutral-700 px-8 py-4 rounded-full font-semibold text-xs uppercase tracking-wider w-full sm:w-auto text-center transition-all"
              >
                {t("general.backToHome")}
              </Link>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Form Column (col-span-7) */}
            <form onSubmit={handleSubmit} className="lg:col-span-7 bg-white border border-[#E2DFD8] p-6 md:p-8 rounded-2xl shadow-sm space-y-6">
              
              {errorMessage && (
                <div className="bg-red-50 text-red-600 border-l-4 border-red-500 p-4 text-xs font-semibold uppercase">
                  {errorMessage}
                </div>
              )}

              {/* Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-neutral-400" />
                  {t("booking.name")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-[#FDFCFA] border border-[#E2DFD8] px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary rounded-xl transition-colors"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-neutral-400" />
                    {t("booking.email")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-[#FDFCFA] border border-[#E2DFD8] px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary rounded-xl transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-neutral-400" />
                    {t("booking.phone")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-[#FDFCFA] border border-[#E2DFD8] px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary rounded-xl transition-colors"
                  />
                </div>
              </div>

              {/* Date & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Date */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="date" className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                    {t("booking.date")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full bg-[#FDFCFA] border border-[#E2DFD8] px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary rounded-xl transition-colors"
                  />
                </div>

                {/* Guests */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="guests" className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-neutral-400" />
                    {t("booking.guests")} <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    required
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full bg-[#FDFCFA] border border-[#E2DFD8] px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary rounded-xl transition-colors appearance-none"
                  >
                    {Array.from({ length: 30 }).map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} {i + 1 === 1 ? (language === "en" ? "Person" : "Pessoa") : (language === "en" ? "People" : "Pessoas")}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Time Slots Selection */}
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-neutral-400" />
                  {t("booking.time")} <span className="text-red-500">*</span>
                </span>
                
                <div className="space-y-4">
                  {/* Lunch Slots */}
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-neutral-400 font-extrabold block mb-2">{t("contact.lunch")}</span>
                    <div className="flex flex-wrap gap-2">
                      {lunchSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, time: slot }))}
                          className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all ${
                            formData.time === slot
                              ? "bg-primary text-white border-primary"
                              : "bg-[#FDFCFA] text-neutral-700 border-[#E2DFD8] hover:border-neutral-400"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dinner Slots */}
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-neutral-400 font-extrabold block mb-2">{t("contact.dinner")}</span>
                    <div className="flex flex-wrap gap-2">
                      {dinnerSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, time: slot }))}
                          className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all ${
                            formData.time === slot
                              ? "bg-primary text-white border-primary"
                              : "bg-[#FDFCFA] text-neutral-700 border-[#E2DFD8] hover:border-neutral-400"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Special Obs */}
              <div className="flex flex-col gap-2">
                <label htmlFor="obs" className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-neutral-400" />
                  {t("booking.obs")}
                </label>
                <textarea
                  id="obs"
                  name="obs"
                  rows="3"
                  placeholder={t("booking.obs.placeholder")}
                  value={formData.obs}
                  onChange={handleInputChange}
                  className="w-full bg-[#FDFCFA] border border-[#E2DFD8] px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary rounded-xl transition-colors resize-none"
                />
              </div>

              {/* Policy note */}
              <p className="text-[11px] text-neutral-400 leading-relaxed italic">
                {t("booking.policy")}
              </p>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-primary hover:bg-[#1E362C] text-white py-4 rounded-full font-semibold text-xs uppercase tracking-wider shadow-md spring-hover cursor-pointer text-center flex items-center justify-center gap-2"
              >
                <span>{t("booking.submit")}</span>
                <ArrowRight className="w-4 h-4 text-primary-light" />
              </button>

            </form>

            {/* Sidebar Column (col-span-5) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Vibe Summary Box */}
              <div className="bg-[#222222] border border-[#E2DFD8]/10 p-6 rounded-2xl text-white">
                <h3 className="font-serif text-lg font-normal uppercase text-white mb-3 tracking-wide">
                  Garfo da Costa
                </h3>
                <div className="w-8 h-[1px] bg-primary-light mb-4" />
                
                <p className="text-xs text-neutral-300 leading-relaxed mb-6">
                  {t("booking.info.vibe")}
                </p>

                <div className="text-xs space-y-3 font-semibold uppercase text-primary-light tracking-wide">
                  <p>✔ {t("general.accessibility")}</p>
                  <p>✔ {t("general.parking")}</p>
                  <p>✔ {t("general.payment")}</p>
                  <p>✔ {t("general.privateEvents")}</p>
                </div>
              </div>

              {/* Warning/Capacity details Box */}
              <div className="bg-white border border-[#E2DFD8] p-6 rounded-2xl">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-neutral-850 mb-2">
                  {language === "en" ? "Capacity Policies" : language === "fr" ? "Règles de Capacité" : "Políticas de Lotação"}
                </h4>
                <p className="text-xs text-neutral-500 leading-relaxed mb-4">
                  {t("booking.info.limit")}
                </p>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  {t("contact.hoursNote")}
                </p>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
