import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Phone, Mail, ArrowUpRight, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();
  const [activeReview, setActiveReview] = useState(0);

  const phoneDisplay = "913 378 940";
  const phoneValue = "+351913378940";
  const emailAddress = "vendas@gatilhauto.com";
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=Estr.+da+Guia+45%2C+Valeir%C3%A3o%2C+3105-051+Leiria%2C+Portugal";

  const reviews = [
    {
      author: "Rafaela Paixão",
      time: "há 9 meses",
      text: "Super recomendo! Comprei meu carro com Gatilhauto e foi uma experiência incrível! Profissionalismo, transparência e um atendimento excepcional. O carro é fantástico e estou muito satisfeita com a compra. Obrigado por tudo! 😊👍"
    },
    {
      author: "Dina Pedrosa",
      time: "há 10 meses",
      text: "Serviço 5 estrelas. Adoramos a transparência e disponibilidade em querer responder às nossas necessidades enquanto família, e estamos muito contentes com a compra."
    },
    {
      author: "Ricardo Ferreira",
      time: "há um ano",
      text: "Comprei recentemente um carro na Gatilhauto e fiquei extremamente satisfeito com todo o processo! Desde o primeiro contacto até à entrega final, o atendimento foi impecável!"
    },
    {
      author: "Hugo Marto",
      time: "há 10 meses",
      text: "Comprei o meu carro a quase 3 anos e além de terem feito de tudo para conseguir ficar com o carro, foram sempre impecáveis no pós venda, tanto o Wilson como o restante staff."
    },
    {
      author: "Nathalie Ribeiro",
      time: "há um ano",
      text: "Recomendo… atendimento e prestação de serviço no topo mesmo. Conseguiu deixar o meu carro ainda mais limpo que quando o comprei, cheirooso e fez o serviço o mais rápido possível."
    },
    {
      author: "Nádia Duarte",
      time: "há 10 meses",
      text: "Recentemente adquiri um carro e estou satisfeita com a compra e com o atendimento foi impecável. Recomendo e aconselho a Gatilhauto."
    }
  ];

  const contactCards = [
    {
      name: "Instagram",
      handle: "@gatilhauto",
      icon: <Instagram className="w-5 h-5 text-pink-500 group-hover:scale-110 transition-transform duration-300" />,
      iconBg: "bg-pink-500/10 group-hover:bg-pink-500/20",
      url: "https://www.instagram.com/gatilhauto/",
      borderColor: "hover:border-pink-500/30",
      hoverBg: "hover:bg-pink-500/[0.02]"
    },
    {
      name: "Facebook",
      handle: "Gatilhauto Pombal",
      icon: <Facebook className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform duration-300" />,
      iconBg: "bg-blue-500/10 group-hover:bg-blue-500/20",
      url: "https://www.facebook.com/gatilhauto/",
      borderColor: "hover:border-blue-500/30",
      hoverBg: "hover:bg-blue-500/[0.02]"
    },
    {
      name: t("general.email") || "E-mail",
      handle: emailAddress,
      icon: <Mail className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform duration-300" />,
      iconBg: "bg-red-500/10 group-hover:bg-red-500/20",
      url: `mailto:${emailAddress}`,
      borderColor: "hover:border-red-500/30",
      hoverBg: "hover:bg-red-500/[0.02]"
    },
    {
      name: t("general.phone") || "Telefone",
      handle: phoneDisplay,
      icon: <Phone className="w-5 h-5 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />,
      iconBg: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
      url: `tel:${phoneValue}`,
      borderColor: "hover:border-emerald-500/30",
      hoverBg: "hover:bg-emerald-500/[0.02]"
    }
  ];

  // Auto rotate reviews every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <footer id="footer" className="bg-white text-neutral-800 pt-20 pb-8 border-t border-neutral-200 relative overflow-hidden text-left">
      <div className="absolute right-[5%] bottom-[15%] w-[300px] h-[300px] bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Google Reviews Showcase - HIGH WOW FACTOR */}
        <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-primary/10 opacity-30 select-none hidden md:block">
            <Star className="w-48 h-48 fill-current" />
          </div>
          
          <div className="max-w-3xl relative z-10">
            <div className="flex items-center gap-1.5 text-yellow-500 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
              <span className="text-neutral-800 font-extrabold text-sm ml-2 tracking-wide font-display uppercase">Recomendado no Google</span>
            </div>
            
            <div className="min-h-[140px] md:min-h-[100px] flex flex-col justify-between">
              <p className="text-neutral-700 italic text-base md:text-lg leading-relaxed mb-6 font-semibold">
                "{reviews[activeReview].text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-neutral-900 font-display text-sm">{reviews[activeReview].author}</h4>
                  <span className="text-xs text-neutral-400 font-bold">{reviews[activeReview].time} • Crítica do Google</span>
                </div>
                
                {/* Manual Navigation Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))}
                    className="p-2 rounded-xl bg-white border border-neutral-200 hover:bg-neutral-50 text-neutral-500 hover:text-neutral-800 transition-colors cursor-pointer"
                    aria-label="Previous Review"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActiveReview((prev) => (prev + 1) % reviews.length)}
                    className="p-2 rounded-xl bg-white border border-neutral-200 hover:bg-neutral-50 text-neutral-500 hover:text-neutral-800 transition-colors cursor-pointer"
                    aria-label="Next Review"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactCards.map((card, idx) => (
            <a
              key={idx}
              href={card.url}
              target={card.url.startsWith("http") ? "_blank" : undefined}
              rel={card.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`p-5 rounded-2xl border border-neutral-200 bg-neutral-50 flex items-center justify-between transition-all duration-300 group hover:bg-white ${card.borderColor} ${card.hoverBg}`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-2.5 rounded-xl transition-colors ${card.iconBg}`}>
                  {card.icon}
                </div>
                <div>
                  <h4 className="font-bold text-neutral-950 font-display text-sm mb-0.5">{card.name}</h4>
                  <p className="text-[11px] text-neutral-500 font-semibold truncate max-w-[150px]">{card.handle}</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary-dark" />
            </a>
          ))}
        </div>

        {/* Middle Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 border-t border-neutral-100 pt-16">
          
          {/* Brand Info */}
          <div>
            <h3 className="font-extrabold tracking-tighter text-neutral-900 font-display text-lg uppercase mb-5">
              GATILHAUTO <span className="text-primary font-black font-display font-medium">STAND</span>
            </h3>
            <p className="text-xs text-neutral-500 leading-relaxed font-semibold max-w-xs">
              Compra e venda de veículos usados e semi-novos com total transparência e garantia. Stand localizado em Mata Mourisca, Pombal.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-bold text-neutral-900 font-display text-xs uppercase tracking-widest mb-5">Links Rápidos</h4>
            <div className="flex flex-col gap-3.5 text-xs text-neutral-500 font-semibold">
              <Link to="/" className="hover:text-primary-dark transition-colors">Início</Link>
              <Link to="/viaturas" className="hover:text-primary-dark transition-colors">Stock Completo</Link>
              <Link to="/servicos" className="hover:text-primary-dark transition-colors">Financiamento & Simuladores</Link>
              <Link to="/empresa" className="hover:text-primary-dark transition-colors">Quem Somos</Link>
            </div>
          </div>

          {/* Opening Hours & Location Info */}
          <div>
            <h4 className="font-bold text-neutral-900 font-display text-xs uppercase tracking-widest mb-5">{t("general.hours")}</h4>
            <div className="flex flex-col gap-3 text-xs text-neutral-500 font-semibold">
              <div className="flex flex-col gap-1.5 py-1 border-b border-neutral-100/50">
                <span className="text-[10px] text-neutral-400 font-bold uppercase">Segunda a Sexta:</span>
                <span className="font-bold text-neutral-800">08h30 - 19h00</span>
              </div>
              <div className="flex flex-col gap-1.5 py-1 border-b border-neutral-100/50">
                <span className="text-[10px] text-neutral-400 font-bold uppercase">Sábado:</span>
                <span className="font-bold text-neutral-800">09h00 - 13h00 / 14h00 - 18h00</span>
              </div>
              <div className="flex flex-col gap-1.5 py-1 border-b border-neutral-100/50">
                <span className="text-[10px] text-neutral-400 font-bold uppercase">Domingo:</span>
                <span className="font-bold text-neutral-800">15h00 - 18h00</span>
              </div>
              <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-neutral-800 transition-colors mt-2 block underline font-semibold">
                Estr. da Guia 45, Valeirão, 3105-051 Leiria
              </a>
            </div>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-neutral-100 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-400 font-semibold">
          <p className="text-center md:text-left">
            &copy; {currentYear} Gatilhauto Stand Automóvel. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1.5">
            Desenvolvido por
            <a 
              href="https://p-d-agency.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary-dark transition-colors underline font-bold text-neutral-500"
            >
              P&D Agency
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
