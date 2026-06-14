export const config = {
  // Production domain for SEO sitemap & canonical links
  domain: "https://vault-number-one-barbershop.vercel.app",

  // Contacts
  whatsappNumber: "351916334276", // Update with Ricardo Pedrosa's actual phone number
  telephone: "+351916334276",
  telephoneDisplay: "+351 916 334 276",
  email: "ricardopedrosa.barber@gmail.com", // Placeholder, easily editable
  
  address: {
    street: "Avenida José Maria Duarte Júnior, 5",
    locality: "Guia, Pombal",
    postalCode: "3105-082",
    country: "PT",
    countryName: "Portugal",
    reference: "Ao lado do restaurante 'O Barriguitas'"
  },
  
  geo: {
    latitude: 39.9458413,
    longitude: -8.7844762
  },

  // Integration Keys (set empty string if not active)
  googleAnalyticsId: "", 
  googleSearchConsoleKey: "",

  // Dynamic WhatsApp pre-filled messages based on active page
  whatsappMessages: {
    pt: {
      "/": "Olá Vault Number One Barbershop! Gostaria de obter mais informações.",
      "/cortes-modernos": "Olá Vault Number One! Gostaria de agendar um corte moderno (Fade / Mullet).",
      "/barba-guia": "Olá Vault Number One! Gostaria de agendar um tratamento de barba.",
      "/barbearia-pombal": "Olá Vault Number One! Gostaria de saber os horários disponíveis para marcação na Guia, Pombal.",
      "/ricardo-pedrosa": "Olá Ricardo Pedrosa! Gostaria de reservar um horário para atendimento personalizado.",
      "/orcamento": "Olá! Gostaria de simular o preço para os serviços selecionados.",
      "/marcacao-barbearia": "Olá! Gostaria de agendar um serviço na barbearia."
    },
    en: {
      "/": "Hello Vault Number One Barbershop! I would like to get more information.",
      "/cortes-modernos": "Hello Vault Number One! I would like to book a modern haircut (Fade / Mullet).",
      "/barba-guia": "Hello Vault Number One! I would like to book a beard treatment.",
      "/barbearia-pombal": "Hello Vault Number One! I would like to check available hours for booking in Guia, Pombal.",
      "/ricardo-pedrosa": "Hello Ricardo Pedrosa! I would like to book a personalized appointment.",
      "/orcamento": "Hello! I would like to simulate the pricing for the selected services.",
      "/marcacao-barbearia": "Hello! I would like to book a service at the barbershop."
    }
  }
};
