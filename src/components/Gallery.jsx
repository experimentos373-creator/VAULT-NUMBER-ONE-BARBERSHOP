import { Eye } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Gallery() {
  const { t } = useLanguage();

  const items = [
    {
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/93/71/26/caption.jpg?w=800&h=-1&s=1",
      caption: "Cozinha de autor Chef Ricardo Perpétuo"
    },
    {
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/b6/f1/ee/caption.jpg?w=800&h=-1&s=1",
      caption: "Peixe fresco grelhado da Costa de Lavos"
    },
    {
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/37/92/26/pratos-da-casa.jpg?w=800&h=-1&s=1",
      caption: "Vista de mar da Costa de Lavos"
    },
    {
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/e3/9b/97/caption.jpg?w=800&h=-1&s=1",
      caption: "Linguini nero do mar"
    },
    {
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/0e/6f/37/caption.jpg?w=800&h=-1&s=1",
      caption: "Vinhos selecionados Herdade das Servas"
    },
    {
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/b3/b7/f9/caption.jpg?w=800&h=-1&s=1",
      caption: "Arroz de lingueirão clássico"
    }
  ];

  return (
    <section id="galeria" className="py-16 bg-[#FDFCFA] border-b border-[#E2DFD8] relative overflow-hidden font-sans text-left">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 reveal-slide-up">
          <div>
            <span className="text-primary font-semibold uppercase text-[10px] tracking-wider bg-[#D2ECE0] px-4 py-1.5 rounded-full mb-4 inline-block">
              {t("nav.concept")}
            </span>
            <h2 className="text-4xl md:text-5xl font-normal font-serif text-neutral-900 uppercase">
              Momentos & Sabores
            </h2>
          </div>
          <p className="text-neutral-500 text-xs md:text-sm font-normal max-w-sm leading-relaxed">
            Uma janela para a nossa cozinha e a atmosfera que nos rodeia na Figueira da Foz.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden aspect-[4/3] bg-neutral-100 border border-[#E2DFD8] rounded-2xl reveal-slide-up cursor-pointer"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <img
                src={item.url}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-neutral-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-white font-serif text-base uppercase mb-1 tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.caption}
                </span>
                <span className="text-primary-light font-semibold text-[8px] uppercase tracking-widest flex items-center gap-1.5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-[50ms]">
                  <Eye className="w-3.5 h-3.5" /> Garfo da Costa
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
