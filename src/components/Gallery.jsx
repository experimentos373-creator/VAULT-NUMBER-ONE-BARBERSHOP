import { Instagram, Heart, MessageCircle, ExternalLink } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Gallery() {
  const { t, language } = useLanguage();

  const statsLabels = {
    pt: { posts: "publicações", followers: "seguidores", following: "a seguir", followersVal: "352", followingVal: "27" },
    en: { posts: "posts", followers: "followers", following: "following", followersVal: "352", followingVal: "27" },
    es: { posts: "publicaciones", followers: "seguidores", following: "seguidos", followersVal: "352", followingVal: "27" },
    fr: { posts: "publications", followers: "abonnés", following: "abonnements", followersVal: "352", followingVal: "27" },
    de: { posts: "Beiträge", followers: "Abonnenten", following: "abonniert", followersVal: "352", followingVal: "27" }
  };
  const stats = statsLabels[language] || statsLabels.pt;

  const posts = [
    {
      url: "/post4.png",
      caption: t("gallery.post3.caption"),
      likes: "185",
      comments: "21",
      link: "https://www.instagram.com/vaultnumberone_barbershop/"
    },
    {
      url: "/post2.png",
      caption: t("gallery.post5.caption"),
      likes: "92",
      comments: "5",
      link: "https://www.instagram.com/vaultnumberone_barbershop/"
    },
    {
      url: "/post5.png",
      caption: t("gallery.post4.caption"),
      likes: "148",
      comments: "14",
      link: "https://www.instagram.com/vaultnumberone_barbershop/"
    },
    {
      url: "/post1.png",
      caption: t("gallery.post1.caption"),
      likes: "120",
      comments: "9",
      link: "https://www.instagram.com/vaultnumberone_barbershop/"
    },
    {
      url: "/post3.png",
      caption: t("gallery.post6.caption"),
      likes: "155",
      comments: "11",
      link: "https://www.instagram.com/vaultnumberone_barbershop/"
    },
    {
      url: "/post6.png",
      caption: t("gallery.post2.caption"),
      likes: "210",
      comments: "25",
      link: "https://www.instagram.com/vaultnumberone_barbershop/"
    }
  ];


  return (
    <section id="galeria" className="py-16 md:py-28 bg-[#121212] text-white relative border-b border-neutral-900">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="reveal-slide-up mb-16 text-center">
          <span className="text-black font-black uppercase text-xs tracking-widest bg-primary px-4 py-1.5 rounded-none mb-6 inline-block">
            {t("gallery.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight leading-none mb-4 uppercase">
            {t("gallery.title")}
          </h2>
          <p className="text-neutral-400 font-normal max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            {t("gallery.subtitle")}
          </p>
        </div>

        {/* Simulated Instagram Profile Header Card */}
        <div className="max-w-3xl mx-auto bg-[#0C0C0C] border border-neutral-900 p-6 sm:p-8 rounded-2xl mb-12 flex flex-col sm:flex-row items-center gap-6 sm:gap-10 reveal-slide-up">
          {/* Avatar with gradient border */}
          <div className="relative p-[3px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 shrink-0">
            <div className="bg-[#0C0C0C] p-1 rounded-full">
              <img
                src="/favicon.png"
                alt="Vault Number One Logo"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
          </div>

          {/* Profile details */}
          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 justify-center sm:justify-start">
              <h3 className="text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-1">
                vaultnumberone_barbershop
                {/* Instagram Verified Badge SVG */}
                <svg className="w-4 h-4 text-[#0095f6]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </h3>
              <a
                href="https://www.instagram.com/vaultnumberone_barbershop/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0095f6] hover:bg-[#1877f2] text-white px-6 py-1.5 rounded-lg text-xs font-bold transition-all text-center"
              >
                Seguir
              </a>
            </div>

            {/* Stats */}
            <div className="flex justify-center sm:justify-start gap-6 text-sm mb-4 text-neutral-300">
              <span><strong>9</strong> {stats.posts}</span>
              <span><strong>{stats.followersVal}</strong> {stats.followers}</span>
              <span><strong>{stats.followingVal}</strong> {stats.following}</span>
            </div>

            {/* Bio */}
            <div className="text-xs text-neutral-400 leading-relaxed font-medium">
              <p className="font-bold text-white">VAULT NUMBER ONE BARBERSHOP</p>
              <p className="text-primary font-bold">Barbeiro @ricardofpedrosa</p>
              <p>📍 GUIA, POMBAL</p>
              <p>Avenida José Maria Duarte Júnior, 5, Rés do Chão, Direito</p>
              <p className="mt-1 text-[10px] text-neutral-500 uppercase tracking-wider">Marcações: vaultnumberone.buk.pt</p>
            </div>
          </div>
        </div>

        {/* Symmetric Instagram Post Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <a
              key={idx}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl border border-neutral-900 bg-[#0C0C0C] block reveal-slide-up"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Image */}
              <img
                src={post.url}
                alt={post.caption}
                loading="lazy"
                className="w-full h-full object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
              />

              {/* Instagram Hover Overlay */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white text-left z-20">
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
                  {post.caption}
                </p>

                {/* Footer Stats */}
                <div className="flex items-center gap-6 pt-4 border-t border-white/10 text-xs font-bold">
                  <span className="flex items-center gap-1.5">
                    <Heart className="w-4 h-4 fill-current text-red-500" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4 fill-current" />
                    {post.comments}
                  </span>
                </div>
              </div>
              
              {/* Thin overlay border inside the frame */}
              <div className="absolute inset-2 border border-white/10 rounded-xl pointer-events-none z-10" />
            </a>
          ))}
        </div>

        {/* Follow CTA Button */}
        <div className="mt-16 text-center reveal-slide-up">
          <a
            href="https://www.instagram.com/vaultnumberone_barbershop/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary hover:bg-white text-black hover:text-black px-8 py-4 rounded-full font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl spring-hover"
          >
            <Instagram className="w-4 h-4" />
            Ver no Instagram
          </a>
        </div>

      </div>
    </section>
  );
}
