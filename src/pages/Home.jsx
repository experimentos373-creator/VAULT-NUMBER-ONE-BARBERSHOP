import { useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Menu from "../components/Menu";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
import Location from "../components/Location";
import ContactForms from "../components/ContactForms";
import { useLanguage } from "../context/LanguageContext";
import { config } from "../config";

export default function Home() {
  const { language } = useLanguage();

  useEffect(() => {
    // 1. Dynamic Page Title & Meta Description based on language
    const titles = {
      pt: "Vault Number One Barbershop | Barbearia na Guia, Pombal",
      en: "Vault Number One Barbershop | Barber Shop in Guia, Pombal",
      es: "Vault Number One Barbershop | Barbería en Guia, Pombal",
      fr: "Vault Number One Barbershop | Coiffeur Masculin à Guia, Pombal",
      de: "Vault Number One Barbershop | Herrenfriseur in Guia, Pombal"
    };

    const descs = {
      pt: "Vault Number One Barbershop na Guia, Pombal. Espaço de estética masculina liderado pelo barbeiro Ricardo Pedrosa. Cortes fade, mullets modernos e barba ritual.",
      en: "Vault Number One Barbershop in Guia, Pombal. Premium men's grooming space led by barber Ricardo Pedrosa. Fades, modern mullets, and traditional hot towel shaves.",
      es: "Vault Number One Barbershop en Guia, Pombal. Estética masculina premium por el barbero Ricardo Pedrosa. Cortes fade, mullet moderno y barba ritual.",
      fr: "Vault Number One Barbershop à Guia, Pombal. Espace coiffure homme par le barbier Ricardo Pedrosa. Fades, mullets modernes et barbe traditionnelle.",
      de: "Vault Number One Barbershop in Guia, Pombal. Exklusiver Herrensalon von Ricardo Pedrosa. Skin Fades, Modern Mullets und klassische Bartpflege."
    };

    document.title = titles[language] || titles.pt;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", descs[language] || descs.pt);
    }

    // 2. Google LocalBusiness & WebSite JSON-LD Schemas
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "BarberShop",
      "@id": `${config.domain}/#organization`,
      "name": "Vault Number One Barbershop",
      "image": `${config.domain}/favicon.png`,
      "url": config.domain,
      "telephone": config.telephone,
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": config.address.street,
        "addressLocality": config.address.locality,
        "postalCode": config.address.postalCode,
        "addressCountry": config.address.country
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": config.geo.latitude,
        "longitude": config.geo.longitude
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "19:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "sameAs": [
        "https://www.instagram.com/vaultnumberone_barbershop/"
      ]
    };

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Vault Number One Barbershop",
      "url": config.domain
    };

    const script1 = document.createElement("script");
    script1.type = "application/ld+json";
    script1.text = JSON.stringify(localBusinessSchema);
    script1.id = "local-business-schema";
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.type = "application/ld+json";
    script2.text = JSON.stringify(websiteSchema);
    script2.id = "website-schema";
    document.head.appendChild(script2);

    // 3. Dynamic Hreflang Alternate Link Tags for multi-language indexing
    const lPT = document.createElement("link");
    lPT.rel = "alternate";
    lPT.hreflang = "pt";
    lPT.href = config.domain;
    lPT.id = "hreflang-pt";
    document.head.appendChild(lPT);

    const lEN = document.createElement("link");
    lEN.rel = "alternate";
    lEN.hreflang = "en";
    lEN.href = `${config.domain}/en`;
    lEN.id = "hreflang-en";
    document.head.appendChild(lEN);

    const lDefault = document.createElement("link");
    lDefault.rel = "alternate";
    lDefault.hreflang = "x-default";
    lDefault.href = config.domain;
    lDefault.id = "hreflang-default";
    document.head.appendChild(lDefault);

    return () => {
      const s1 = document.getElementById("local-business-schema");
      const s2 = document.getElementById("website-schema");
      if (s1) s1.remove();
      if (s2) s2.remove();

      const hPT = document.getElementById("hreflang-pt");
      const hEN = document.getElementById("hreflang-en");
      const hDefault = document.getElementById("hreflang-default");
      if (hPT) hPT.remove();
      if (hEN) hEN.remove();
      if (hDefault) hDefault.remove();
    };
  }, [language]);

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Main Content Sections */}
      <main>
        {/* About Section */}
        <About />

        {/* Interactive Menu Section */}
        <Menu />

        {/* Gallery Section */}
        <Gallery />

        {/* Customer Reviews Section */}
        <Reviews />

        {/* Contact/Booking Forms Section */}
        <ContactForms />

        {/* Location & Weekly Opening Hours Section */}
        <Location />
      </main>
    </>
  );
}
