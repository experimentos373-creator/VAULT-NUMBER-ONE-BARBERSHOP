export const config = {
  // Production domain for SEO sitemap & canonical links
  domain: "https://garfo-da-costa.vercel.app",

  // Contacts
  whatsappNumber: "351968178352",
  telephone: "+351968178352",
  telephoneDisplay: "+351 968 178 352",
  email: "conspiracaoiguarias@gmail.com",
  nif: "518252167",
  companyName: "Conspiração Iguarias",

  social: {
    instagram: "https://www.instagram.com/garfodacostarestaurante/",
    facebook: "https://www.facebook.com/profile.php?id=61561009121773", // Garfo Da Costa Facebook
    chefFacebook: "https://www.facebook.com/ricardo.perpetuo.79" // Chef Ricardo Perpétuo Facebook
  },

  address: {
    street: "Travessa da Arte Xávega, n.º 3",
    locality: "Costa de Lavos, Figueira da Foz",
    postalCode: "3090-458",
    country: "PT",
    countryName: "Portugal"
  },

  geo: {
    latitude: 40.082725,
    longitude: -8.889397
  },

  // Integration Keys (empty string when inactive)
  googleAnalyticsId: "",
  googleSearchConsoleKey: "",

  // Dynamic WhatsApp pre-filled messages
  whatsappMessages: {
    pt: {
      "/": "Olá Garfo da Costa! Gostaria de obter mais informações sobre o vosso menu ou jantares vínicos.",
      "/reservas": "Olá Garfo da Costa! Iniciei uma reserva online e gostaria de confirmar a disponibilidade de mesa para o vosso serviço.",
      "/contacto": "Olá Garfo da Costa! Gostaria de saber mais sobre a realização de eventos privados no vosso espaço."
    },
    en: {
      "/": "Hello Garfo da Costa! I would like to get more information about your menu or wine events.",
      "/reservas": "Hello Garfo da Costa! I started an online booking and would like to confirm table availability.",
      "/contacto": "Hello Garfo da Costa! I would like to know more about booking private events."
    },
    fr: {
      "/": "Bonjour Garfo da Costa! Je souhaite avoir plus d'informations sur votre menu ou vos événements œnologiques.",
      "/reservas": "Bonjour Garfo da Costa! J'ai initié uma réservation en ligne et je souhaite confirmer la disponibilité d'une table.",
      "/contacto": "Bonjour Garfo da Costa! Je voudrais en savoir plus sur l'organisation d'événements privés."
    }
  }
};
