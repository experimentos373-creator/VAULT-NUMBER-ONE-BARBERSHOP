import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { CheckCircle2, Instagram } from "lucide-react";

const WHATSAPP_LABELS = {
  pt: {
    title: "*Nova Marcação de Cadeira - Vault Number One*",
    name: "*Nome:*",
    contact: "*Contacto:*",
    style: "*Estilo/Pedido:*",
    service: "*Serviço:*",
    date: "*Data Pretendida:*",
    obs: "*Observações:*",
    none: "Nenhuma"
  },
  en: {
    title: "*New Chair Booking - Vault Number One*",
    name: "*Name:*",
    contact: "*Contact:*",
    style: "*Desired Style / Request:*",
    service: "*Service:*",
    date: "*Preferred Date:*",
    obs: "*Notes:*",
    none: "None"
  }
};

const PLACEHOLDERS = {
  pt: {
    name: "Ex: Pedro Santos",
    contact: "Ex: 912 345 678",
    style: "Ex: Degradê com risco lateral ou barba clássica",
    desc: "Notas ou preferência de horário (ex: final da tarde)..."
  },
  en: {
    name: "E.g. Peter Smith",
    contact: "E.g. +351 912 345 678",
    style: "E.g. Skin fade with razor line or classic beard",
    desc: "Notes or preferred time (e.g. late afternoon)..."
  }
};

export default function WorkshopForm() {
  const { t, language } = useLanguage();
  const [showSuccess, setShowSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    nome: "",
    contacto: "",
    estiloPedido: "",
    dataPretendida: "",
    tipoServico: "corte_cabelo",
    observacoes: ""
  });

  const serviceOptions = [
    { value: "corte_cabelo", label: "Corte de Cabelo — 14 €", ptDesc: "Cortes Fade/Degradê (Zero ou Shaver), Cortes técnicos (Taper Fade, Burst Fade, Mullet, Crop...), sociais ou exclusivamente à tesoura. Lavagem de cabelo incluída.", enDesc: "Fade/Skin Fade, Taper Fade, Burst Fade, Mullet, Crop, social or exclusively scissor cuts. Hair wash included." },
    { value: "corte_estudante", label: "Corte de Cabelo (Estudante) — 12 €", ptDesc: "Corte aplicável a estudantes do 1° ao 12° ano de escolaridade (apresentar comprovativo, ex: cartão da escola). Lavagem de cabelo incluída.", enDesc: "Haircut applicable to students from 1st to 12th grade (must show student ID). Hair wash included." },
    { value: "corte_pente", label: "Corte c/ pente — 9 €", ptDesc: "Corte de cabelo realizado à máquina e que envolva apenas pentes (pente meio para cima). Lavagem de cabelo incluída.", enDesc: "Haircut performed with clippers and using guards only (from 0.5 guard upwards). Hair wash included." },
    { value: "rapadela", label: "Rapadela — 8 €", ptDesc: "Rapadela de cabelo realizada à máquina com Shaver ou Navalha, dependendo da sua preferência.", enDesc: "Shaved head performed with shaver or straight razor, depending on preference." },
    { value: "barba", label: "Corte de barba — 10 €", ptDesc: "Serviço destinado a todas as variantes e rituais de um corte de barba.", enDesc: "Service designed for all variants and rituals of beard grooming." },
    { value: "pack_cabelo_barba", label: "Pack Cabelo e Barba — 20 €", ptDesc: "Pack completo combinado de cabelo e barba.", enDesc: "Combined hair and beard service package." },
    { value: "pack_pente_barba", label: "Pack Corte c/ pente e Barba — 18 €", ptDesc: "Junção dos serviços de Corte c/ pente e Barba.", enDesc: "Combined clipper-only haircut and beard trim." },
    { value: "pack_rapadela_barba", label: "Pack Rapadela e Barba — 16 €", ptDesc: "Junção dos serviços Rapadela e Corte de Barba. Toalha quente incluída.", enDesc: "Combined shaved head and beard cut. Hot towel included." }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedService = serviceOptions.find(o => o.value === formData.tipoServico) || serviceOptions[0];
    const serviceLabel = selectedService.label;

    const labels = WHATSAPP_LABELS[language] || WHATSAPP_LABELS["pt"];

    const message = `${labels.title}\n\n` +
      `${labels.name} ${formData.nome}\n` +
      `${labels.contact} ${formData.contacto}\n` +
      `${labels.style} ${formData.estiloPedido}\n` +
      `${labels.service} ${serviceLabel}\n` +
      `${labels.date} ${formData.dataPretendida}\n` +
      `${labels.obs} ${formData.observacoes || labels.none}`;

    // Copy to clipboard for easy pasting on Instagram DM
    navigator.clipboard.writeText(message).catch(err => {
      console.error("Failed to copy booking text: ", err);
    });

    const instagramUrl = "https://www.instagram.com/vaultnumberone_barbershop/";

    setShowSuccess(true);
    setTimeout(() => {
      window.open(instagramUrl, "_blank");
      setShowSuccess(false);
      setFormData({
        nome: "",
        contacto: "",
        estiloPedido: "",
        dataPretendida: "",
        tipoServico: "corte_cabelo",
        observacoes: ""
      });
    }, 2500);
  };

  const activePlaceholders = PLACEHOLDERS[language] || PLACEHOLDERS["pt"];
  const currentService = serviceOptions.find(o => o.value === formData.tipoServico) || serviceOptions[0];
  const serviceDesc = language === "en" ? currentService.enDesc : currentService.ptDesc;

  return (
    <div className="relative">
      {/* Success Modal */}
      {showSuccess && (
        <div className="absolute inset-0 bg-[#0C0C0C]/95 z-50 flex flex-col justify-center items-center p-6 text-center animate-menu-fade rounded-2xl border border-neutral-800">
          <CheckCircle2 className="w-16 h-16 text-primary mb-4 animate-bounce" />
          <h4 className="text-xl font-bold text-white mb-2 font-display uppercase tracking-wider">
            {t("form.workshop.title")}
          </h4>
          <p className="text-sm text-neutral-400 font-medium leading-relaxed max-w-xs">
            {t("form.workshop.success")}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5 bg-[#121212] p-6 rounded-2xl border border-neutral-850 w-full text-left">
        <h3 className="text-lg font-bold text-white border-b border-neutral-900 pb-3 mb-4 font-display uppercase tracking-wider text-primary">
          {t("form.workshop.title")}
        </h3>
        
        <div>
          <label htmlFor="workshop-nome" className="block text-xs font-bold text-neutral-450 mb-1.5 font-display uppercase tracking-wider">
            {t("form.workshop.name")} *
          </label>
          <input
            type="text"
            id="workshop-nome"
            name="nome"
            required
            value={formData.nome}
            onChange={handleChange}
            placeholder={activePlaceholders.name}
            className="w-full px-4 py-2.5 bg-[#1A1A1A] border border-neutral-850 rounded-lg text-white placeholder-neutral-600 focus:ring-2 focus:ring-primary/45 focus:border-primary focus:outline-none transition-all duration-200 text-sm"
          />
        </div>

        <div>
          <label htmlFor="workshop-contacto" className="block text-xs font-bold text-neutral-450 mb-1.5 font-display uppercase tracking-wider">
            {t("form.workshop.contact")} *
          </label>
          <input
            type="text"
            id="workshop-contacto"
            name="contacto"
            required
            value={formData.contacto}
            onChange={handleChange}
            placeholder={activePlaceholders.contact}
            className="w-full px-4 py-2.5 bg-[#1A1A1A] border border-neutral-850 rounded-lg text-white placeholder-neutral-600 focus:ring-2 focus:ring-primary/45 focus:border-primary focus:outline-none transition-all duration-200 text-sm"
          />
        </div>

        <div>
          <label htmlFor="workshop-estiloPedido" className="block text-xs font-bold text-neutral-450 mb-1.5 font-display uppercase tracking-wider">
            {t("form.workshop.style")} *
          </label>
          <input
            type="text"
            id="workshop-estiloPedido"
            name="estiloPedido"
            required
            value={formData.estiloPedido}
            onChange={handleChange}
            placeholder={activePlaceholders.style}
            className="w-full px-4 py-2.5 bg-[#1A1A1A] border border-neutral-850 rounded-lg text-white placeholder-neutral-600 focus:ring-2 focus:ring-primary/45 focus:border-primary focus:outline-none transition-all duration-200 text-sm"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="workshop-tipo" className="block text-xs font-bold text-neutral-450 mb-1.5 font-display uppercase tracking-wider">
              {t("form.workshop.type")} *
            </label>
            <select
              id="workshop-tipo"
              name="tipoServico"
              value={formData.tipoServico}
              onChange={handleChange}
              className="w-full px-3 py-2.5 bg-[#1A1A1A] border border-neutral-850 rounded-lg text-white focus:ring-2 focus:ring-primary/40 focus:border-primary focus:outline-none transition-all duration-200 text-xs cursor-pointer"
            >
              {serviceOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-[#121212] text-white">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="workshop-data" className="block text-xs font-bold text-neutral-450 mb-1.5 font-display uppercase tracking-wider">
              {t("form.workshop.date")} *
            </label>
            <input
              type="date"
              id="workshop-data"
              name="dataPretendida"
              required
              value={formData.dataPretendida}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-[#1A1A1A] border border-neutral-850 rounded-lg text-white focus:ring-2 focus:ring-primary/45 focus:border-primary focus:outline-none transition-all duration-200 text-sm cursor-pointer"
            />
          </div>
        </div>

        {/* Selected Service Description Overlay */}
        <div>
          <span className="block text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-1.5 font-display">Detalhes do Serviço Seleccionado</span>
          <p className="text-xs text-neutral-400 leading-relaxed bg-[#1A1A1A] p-4.5 border border-neutral-900 rounded-lg font-light">
            {serviceDesc}
          </p>
        </div>

        <div>
          <label htmlFor="workshop-observacoes" className="block text-xs font-bold text-neutral-450 mb-1.5 font-display uppercase tracking-wider">
            {t("form.workshop.desc")}
          </label>
          <textarea
            id="workshop-observacoes"
            name="observacoes"
            rows="2"
            value={formData.observacoes}
            onChange={handleChange}
            placeholder={activePlaceholders.desc}
            className="w-full px-4 py-2.5 bg-[#1A1A1A] border border-neutral-850 rounded-lg text-white placeholder-neutral-600 focus:ring-2 focus:ring-primary/45 focus:border-primary focus:outline-none transition-all duration-200 text-sm"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-primary hover:bg-white text-black font-black py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer spring-hover uppercase text-xs tracking-widest font-display"
        >
          <Instagram className="w-4 h-4" />
          {t("form.workshop.submit")}
        </button>
      </form>
    </div>
  );
}
