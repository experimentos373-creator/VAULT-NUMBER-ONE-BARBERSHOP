import { useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Menu from "../components/Menu";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
import Location from "../components/Location";
import { useLanguage } from "../context/LanguageContext";
import { config } from "../config";

export default function Home() {
  const { language } = useLanguage();

  useEffect(() => {
    // 1. Dynamic Page Title & Meta Description based on active language
    const titles = {
      pt: "Garfo da Costa | Cozinha de Autor pelo Chef Ricardo Perpétuo em Figueira da Foz",
      en: "Garfo da Costa | Signature Cuisine by Chef Ricardo Perpétuo in Figueira da Foz",
      fr: "Garfo da Costa | Cuisine d'Auteur par le Chef Ricardo Perpétuo à Figueira da Foz"
    };

    const descs = {
      pt: "Restaurante Garfo da Costa na Costa de Lavos, Figueira da Foz. Cozinha de autor liderada pelo Chef Ricardo Perpétuo, com peixe fresco e jantares vínicos.",
      en: "Garfo da Costa Restaurant at Costa de Lavos, Figueira da Foz. Signature cuisine led by Chef Ricardo Perpétuo, featuring fresh fish and exclusive wine events.",
      fr: "Restaurant Garfo da Costa à Costa de Lavos, Figueira da Foz. Cuisine d'auteur dirigée par le Chef Ricardo Perpétuo, avec du poisson frais et des soirées œnologiques."
    };

    document.title = titles[language] || titles.pt;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", descs[language] || descs.pt);
    }

    // 2. LocalBusiness & WebSite JSON-LD schemas
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "@id": `${config.domain}/#restaurant`,
      "name": "Garfo da Costa",
      "image": `${config.domain}/favicon.png`,
      "url": config.domain,
      "telephone": config.telephone,
      "servesCuisine": ["Portuguese", "Seafood", "Signature"],
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
          "dayOfWeek": ["Monday", "Thursday", "Friday"],
          "opens": "12:00",
          "closes": "15:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday"],
          "opens": "19:00",
          "closes": "22:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Tuesday"],
          "opens": "12:00",
          "closes": "15:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Thursday"],
          "opens": "19:00",
          "closes": "22:30"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Friday"],
          "opens": "19:00",
          "closes": "23:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday"],
          "opens": "12:00",
          "closes": "23:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Sunday"],
          "opens": "12:00",
          "closes": "22:00"
        }
      ],
      "sameAs": [
        config.social.instagram,
        config.social.facebook,
        config.social.chefFacebook
      ]
    };

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Garfo da Costa",
      "url": config.domain
    };

    const script1 = document.createElement("script");
    script1.type = "application/ld+json";
    script1.text = JSON.stringify(localBusinessSchema);
    script1.id = "restaurant-schema";
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.type = "application/ld+json";
    script2.text = JSON.stringify(websiteSchema);
    script2.id = "website-schema";
    document.head.appendChild(script2);

    // 3. Dynamic Hreflang Tags for SEO indexing
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

    const lFR = document.createElement("link");
    lFR.rel = "alternate";
    lFR.hreflang = "fr";
    lFR.href = `${config.domain}/fr`;
    lFR.id = "hreflang-fr";
    document.head.appendChild(lFR);

    const lDefault = document.createElement("link");
    lDefault.rel = "alternate";
    lDefault.hreflang = "x-default";
    lDefault.href = config.domain;
    lDefault.id = "hreflang-default";
    document.head.appendChild(lDefault);

    return () => {
      const s1 = document.getElementById("restaurant-schema");
      const s2 = document.getElementById("website-schema");
      if (s1) s1.remove();
      if (s2) s2.remove();

      const hPT = document.getElementById("hreflang-pt");
      const hEN = document.getElementById("hreflang-en");
      const hFR = document.getElementById("hreflang-fr");
      const hDefault = document.getElementById("hreflang-default");
      if (hPT) hPT.remove();
      if (hEN) hEN.remove();
      if (hFR) hFR.remove();
      if (hDefault) hDefault.remove();
    };
  }, [language]);

  return (
    <>
      <Hero />
      <main>
        <About />
        <Menu />
        <Gallery />
        <Reviews />
        <Location />
      </main>
    </>
  );
}
