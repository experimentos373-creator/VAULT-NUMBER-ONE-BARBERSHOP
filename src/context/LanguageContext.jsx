/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { useLocation } from "react-router-dom";

const LanguageContext = createContext();

const TRANSLATIONS = {
  pt: {
    // Navbar
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.services": "Serviços",
    "nav.gallery": "Galeria",
    "nav.reviews": "Avaliações",
    "nav.contact": "Contacto",
    
    // Hero
    "hero.badge": "Estética Masculina & Barbearia",
    "hero.supportBadge": "Inaugurada a 22 de Março de 2026",
    "hero.title1": "VAULT NUMBER",
    "hero.title2": "ONE BARBERSHOP",
    "hero.subtitle": "O seu espaço de estética masculina e barbearia na localidade da Guia, Pombal. Um projeto do barbeiro Ricardo Pedrosa focado na precisão de cortes fade, mullets modernos e cuidado personalizado com a barba.",
    "hero.cta": "Ver Serviços",
    "hero.ctaSec": "Marcar Cadeira",

    // About
    "about.badge": "O Barbeiro & O Espaço",
    "about.title": "Estilo Clássico, Atitude Moderna",
    "about.subtitle": "Ricardo Pedrosa — Fundador & Especialista",
    "about.paragraph1": "A Vault Number One Barbershop nasceu da ambição do barbeiro Ricardo Pedrosa em criar um espaço próprio de excelência após anos de dedicação ao setor. Com semanas de planeamento e trabalho árduo, o projeto ganhou vida na Guia, concelho de Pombal, afirmando o compromisso de estar entre os melhores da região.",
    "about.paragraph2": "Focamo-nos na barbearia clássica combinada com as tendências mais modernas do setor. Cada cliente é atendido de forma personalizada, num ambiente industrial e descontraído que funciona como um ponto de partilha e convívio, ideal para relaxar além do serviço de corte.",
    "about.since": "Desde 2026",
    "about.feat1.title": "Cortes Modernos & Estilizados",
    "about.feat1.desc": "Especialista em técnicas avançadas de fade, modern mullet e cortes estilizados sob medida para cada cliente.",
    "about.feat2.title": "Barba de Alta Precisão",
    "about.feat2.desc": "Alinhamento, tratamento e cuidado com a barba utilizando navalha, toalha quente e produtos premium.",
    "about.feat3.title": "Ambiente Social Premium",
    "about.feat3.desc": "Design industrial acolhedor e descontraído, ideal para conviver, tomar uma bebida e relaxar.",

    // Menu / Brands
    "menu.badge": "Serviços & Estilo",
    "menu.title": "Menu de Serviços",
    "menu.subtitle": "Oferecemos cortes clássicos e modernos, além de tratamentos especializados de barba. Escolha o serviço ideal para o seu estilo.",
    "menu.tabBrands": "Serviços Individuais",
    "menu.tabCustom": "Combos & Pacotes",
    "menu.customTitle": "Combos Especiais & Produtos",
    "menu.customDesc": "Quer uma experiência completa? Os nossos combos combinam corte e barba com tratamentos premium para que saia com o visual impecável. Dispomos também de produtos profissionais (ceras, pomadas e óleos de barba) para manutenção em casa.",
    "menu.modelsTitle": "Exemplos de Especialidades",
    "menu.ctaCustom": "Escolher Combo",
    "menu.ctaInfo": "Reservar Serviço",
    "menu.instagramBtn": "Ver Trabalho no Instagram",
    "menu.suspensions": "Cabelo",
    "menu.suspensionsDesc": "Cortes tesoura, fade, mullet e técnicas modernas de estilização.",
    "menu.brakes": "Barba",
    "menu.brakesDesc": "Alinhamento à navalha, toalha quente e hidratação profunda.",
    "menu.wheels": "Produtos",
    "menu.wheelsDesc": "Ceras, óleos e pomadas modeladoras de marcas líderes.",
    "menu.financialTitle": "Agendamentos & Tolerância",
    "menu.financialDesc": "Recomendamos a marcação prévia para garantir o seu horário com o barbeiro Ricardo Pedrosa. Dispomos de uma tolerância de 10 minutos após o horário agendado de forma a garantir a qualidade e pontualidade de todos os serviços seguintes.",

    // Service categories details
    "menu.brand.category.cortes": "Cabelo & Estilo Masculino",
    "menu.brand.tagline.cortes": "Especialidade da Casa",
    "menu.brand.desc.cortes": "Domínio total das técnicas de fade (degradê), mullets contemporâneos, cortes desestruturados e estilos mais clássicos à tesoura.",
    "menu.brand.model.fade.desc": "Transição suave e limpa, adaptada ao formato da sua cabeça e fisionomia.",
    "menu.brand.model.mullet.desc": "O corte clássico redefinido para uma atitude moderna, descontraída e estilosa.",
    "menu.brand.model.classic.desc": "Corte tradicional à tesoura e máquina, focado no equilíbrio e acabamento limpo.",
    "menu.brand.model.stylized.desc": "Desenhos, riscos, texturizações e estilos de assinatura à medida.",

    "menu.brand.category.barbas": "Tratamento de Barba & Navalha",
    "menu.brand.tagline.barbas": "Precisão e Cuidado",
    "menu.brand.desc.barbas": "Muito mais do que apenas aparar. Um ritual completo com navalha de barbear, hidratação profunda e massagem facial.",
    "menu.brand.model.align.desc": "Desenho limpo e simétrico das linhas do rosto e pescoço com navalha.",
    "menu.brand.model.hot_towel.desc": "O ritual tradicional da toalha quente para abrir os poros e acalmar a pele.",
    "menu.brand.model.hydration.desc": "Aplicação de óleos essenciais e bálsamos para amaciar os fios e nutrir a pele.",

    // Gallery
    "gallery.badge": "Instagram Feed",
    "gallery.title": "A Nossa Cadeira no Instagram",
    "gallery.subtitle": "Siga-nos em @vaultnumberone_barbershop para ver as fotos dos cortes reais dos nossos clientes, dicas de estilo e o nosso dia a dia.",
    "gallery.post1.caption": "Um degradê (fade) limpo e preciso. A qualidade está nos detalhes! 💈✂️",
    "gallery.post2.caption": "Cuidado da barba com navalha e toalha quente. Um verdadeiro ritual! 🪒🔥",
    "gallery.post3.caption": "Modern Mullet finalizado com pomada mate de alta performance. 💥😎",
    "gallery.post4.caption": "O nosso espaço industrial na Guia está pronto para o receber. Entre e sinta-se em casa! ☕🍻",
    "gallery.post5.caption": "Penteado e estilização clássica-moderna. O barbeiro Ricardo em ação. 🪒⚙️",
    "gallery.post6.caption": "Antes e Depois de respeito. Mude o seu visual com quem entende do assunto! ⚡✂️",

    // Reviews
    "reviews.badge": "Avaliações Reais",
    "reviews.title": "Quem Confia na Vault Number One",
    "reviews.ratingText": "Classificação máxima de 5.0 estrelas pelos clientes locais",
    "reviews.rev1.date": "Há 1 mês",
    "reviews.rev1.text": "Boa tarde, cortei o cabelo nesta barbearia e o serviço foi excepcional e muito rigoroso. O Barbeiro Ricardo é muito profissional e simpático. Voltarei em breve!",
    "reviews.rev2.date": "Há 2 meses",
    "reviews.rev2.text": "Serviço simplesmente 5⭐️! As marcações são fáceis e os horários são cumpridos com rigor, o que faz toda a diferença. O ambiente é excelente, super acolhedor.",
    "reviews.rev3.date": "Há 1 mês",
    "reviews.rev3.text": "O espaço é acolhedor e o Ricardo para além da simpatia demonstra ser um profissional impecável. Certamente voltarei em breve!",
    "reviews.rev4.date": "Há 2 meses",
    "reviews.rev4.text": "Serviço fantástico, recomendo vivamente! Muito profissionalismo no corte e na barba.",
    "reviews.rev5.date": "Há 2 meses",
    "reviews.rev5.text": "Excelente atendimento, corte preciso e pontualidade impecável. Um espaço de referência na Guia.",
    "reviews.rev6.date": "Há 2 meses",
    "reviews.rev6.text": "Excelente profissional. Espaço espetacular, muito limpo e o Ricardo é super atencioso.",

    // Location & Contact
    "contact.badge": "Onde nos Encontrar",
    "contact.title": "Localização & Contactos",
    "contact.servicesTitle": "Agendamentos Directos",
    "contact.servicesSubtitle": "Marcações & Preços",
    "contact.desc": "Situada na Avenida José Maria Duarte Júnior, 5, na Guia, concelho de Pombal. Estamos localizados mesmo ao lado do restaurante 'O Barriguitas'. Estacionamento fácil disponível no local.",
    "contact.addressTitle": "A nossa Morada",
    "contact.phoneTitle": "Instagram",
    "contact.emailTitle": "E-mail de Contacto",
    "contact.tabHours": "Horário",
    "contact.tabBudget": "Simulador",
    "contact.tabBooking": "Marcação",
    "contact.closed": "Encerrado",
    "contact.weekdays": "Terça a Sexta-feira",
    "contact.saturday": "Sábado",
    "contact.sunday": "Segunda e Domingo",
    "contact.hoursTitle": "Horário de Atendimento",
    "contact.hoursSubtitle": "Planeie a sua marcação de cabelo e barba",
    "contact.hoursNote": "Recomendamos que realize o agendamento prévio com antecedência para garantir a vaga nos dias mais concorridos (fim de semana).",
    "contact.mapTitle": "Mapa de Localização",

    // Budget Form
    "form.budget.title": "Simulador de Preço",
    "form.budget.name": "O seu nome",
    "form.budget.contact": "Contacto para agendamento (ex: @user)",
    "form.budget.services": "Serviços Pretendidos (ex: Corte + Barba)",
    "form.budget.desc": "Preferência de produtos ou notas especiais",
    "form.budget.submit": "Enviar Simulação pelo Instagram",
    "form.budget.success": "Simulação copiada para a área de transferência! A abrir o Instagram...",

    // Workshop Form
    "form.workshop.title": "Marcação por Instagram",
    "form.workshop.name": "O seu nome",
    "form.workshop.contact": "Contacto de Instagram (ex: @user)",
    "form.workshop.style": "Estilo / Pedido especial",
    "form.workshop.date": "Data pretendida",
    "form.workshop.type": "Tipo de Serviço",
    "form.workshop.type.select": "Selecione o serviço...",
    "form.workshop.type.diagBosch": "Corte de Cabelo Fade / Degradê",
    "form.workshop.type.diagDJI": "Corte Modern Mullet / Estilizado",
    "form.workshop.type.suspension": "Serviço Completo de Barba & Toalha Quente",
    "form.workshop.type.brakes": "Combo Cabelo + Barba Premium",
    "form.workshop.type.general": "Corte de Cabelo Clássico / Tesoura",
    "form.workshop.desc": "Hora de preferência ou notas para o Ricardo",
    "form.workshop.submit": "Agendar Serviço pelo Instagram",
    "form.workshop.success": "Pedido copiado para a área de transferência! A abrir o Instagram...",

    // General UI
    "general.backToHome": "Voltar à Página Inicial",
    "general.pageNotFound": "Página Não Encontrada",
    "general.pageNotFoundDesc": "Pedimos desculpa, mas a página solicitada não existe.",
    "general.brandsProducts": "Serviços individuais",
    "general.servicesWorkshop": "Combos & Reservas",
    "general.contactUs": "Agendar Cadeira",
    "general.budgetSubtitle": "Escolha os serviços pretendidos para simular o valor estimado e enviar o seu pedido por mensagem direta no Instagram.",
    "general.workshopSubtitle": "Selecione a data e o tipo de serviço que deseja agendar. O seu pedido será copiado para que o envie por mensagem direta no Instagram.",
    "general.certified": "Especialistas",

    // Footer
    "footer.title": "Tem alguma dúvida?",
    "footer.desc": "Gostaria de marcar um atendimento exclusivo ou tem alguma dúvida sobre os serviços? Contacte diretamente o barbeiro Ricardo Pedrosa.",
    "footer.callBtn": "Instagram",
    "footer.emailBtn": "Enviar E-mail",
    "footer.emailCard": "E-mail Geral",
    "footer.quickLinks": "Navegação",
    "footer.copyright": "Vault Number One Barbershop. Ricardo Pedrosa — Barbeiro e Proprietário. Website desenvolvido e todos os direitos reservados a "
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.gallery": "Gallery",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    
    // Hero
    "hero.badge": "Men's Grooming & Barbershop",
    "hero.supportBadge": "Opened on March 22, 2026",
    "hero.title1": "VAULT NUMBER",
    "hero.title2": "ONE BARBERSHOP",
    "hero.subtitle": "Your premier men's grooming and barbershop in Guia, Pombal. A personal project of barber Ricardo Pedrosa focusing on precise fades, modern mullets, and custom beard care.",
    "hero.cta": "Our Services",
    "hero.ctaSec": "Book a Chair",

    // About
    "about.badge": "The Barber & The Space",
    "about.title": "Classic Style, Modern Attitude",
    "about.subtitle": "Ricardo Pedrosa — Founder & Specialist",
    "about.paragraph1": "Vault Number One Barbershop was born from Ricardo Pedrosa's ambition to create a premium grooming space after years in the barber industry. With weeks of meticulous planning and hard work, the shop opened in Guia, Pombal, with a pledge to stand among the best.",
    "about.paragraph2": "We specialize in classic barbering techniques fused with modern aesthetic trends. Every client receives tailored styling in an industrial, laid-back setting designed for conversation, drinks, and relaxation.",
    "about.since": "Since 2026",
    "about.feat1.title": "Modern & Creative Cuts",
    "about.feat1.desc": "Expertise in skin fades, modern mullets, and structured haircuts tailored to your facial structure.",
    "about.feat2.title": "High-Precision Shaving",
    "about.feat2.desc": "Beard sculpting and shaving using traditional razors, hot towels, and premium grooming oils.",
    "about.feat3.title": "Premium Social Lounge",
    "about.feat3.desc": "Warm industrial lounge concept where you can chat, grab a drink, and feel at home.",

    // Menu / Brands
    "menu.badge": "Services & Pricing",
    "menu.title": "Menu of Services",
    "menu.subtitle": "We offer top-notch haircuts and beard treatments. Choose the service that fits your style best.",
    "menu.tabBrands": "Individual Services",
    "menu.tabCustom": "Combos & Packs",
    "menu.customTitle": "Special Combos & Products",
    "menu.customDesc": "For the full grooming experience, choose our combined haircut & beard packages. We also offer professional pomades, waxes, and beard oils for home styling.",
    "menu.modelsTitle": "Featured Services",
    "menu.ctaCustom": "Choose Combo",
    "menu.ctaInfo": "Book Service",
    "menu.instagramBtn": "See Portfolio on Instagram",
    "menu.suspensions": "Hair",
    "menu.suspensionsDesc": "Scissor cuts, fades, mullets, and modern styling techniques.",
    "menu.brakes": "Beard",
    "menu.brakesDesc": "Blade shaping, hot towel treatment, and deep conditioning.",
    "menu.wheels": "Products",
    "menu.wheelsDesc": "Premium waxes, beard oils, and styling clays.",
    "menu.financialTitle": "Bookings & Grace Period",
    "menu.financialDesc": "Booking in advance is highly recommended to secure your slot with Ricardo Pedrosa. We maintain a 10-minute grace period to ensure the schedule runs smoothly for all clients.",

    // Service categories details
    "menu.brand.category.cortes": "Hair & Style",
    "menu.brand.tagline.cortes": "House Specialty",
    "menu.brand.desc.cortes": "Complete mastery of skin fades, contemporary mullets, textured scissor cuts, and classic crop designs.",
    "menu.brand.model.fade.desc": "Smooth, clean skin transition customized to your skull shape and hairline.",
    "menu.brand.model.mullet.desc": "The classic retro design redefined with a modern, rebellious, and textured edge.",
    "menu.brand.model.classic.desc": "Traditional scissor and clipper cut, focused on structure and clean lines.",
    "menu.brand.model.stylized.desc": "Hair designs, razor lines, and custom texture finishes.",

    "menu.brand.category.barbas": "Beard Grooming & Shaving",
    "menu.brand.tagline.barbas": "Precision & Care",
    "menu.brand.desc.barbas": "More than just a trim. A complete grooming experience with straight razor, hot towel, and skincare.",
    "menu.brand.model.align.desc": "Crisp, symmetrical outlines on cheek and neck lines with a straight razor.",
    "menu.brand.model.hot_towel.desc": "Classic hot towel treatment to open pores and refresh your skin.",
    "menu.brand.model.hydration.desc": "Premium oils and balms to soften beard hair and moisturize skin.",

    // Gallery
    "gallery.badge": "Instagram Feed",
    "gallery.title": "Our Chair on Instagram",
    "gallery.subtitle": "Follow us at @vaultnumberone_barbershop to view actual haircuts, style guides, and daily shop updates.",
    "gallery.post1.caption": "Clean, surgical skin fade. Quality is in the details! 💈✂️",
    "gallery.post2.caption": "Beard care with straight razor and hot towel. A true ritual! 🪒🔥",
    "gallery.post3.caption": "Modern Mullet styled with premium matte clay. 💥😎",
    "gallery.post4.caption": "Our industrial-themed shop in Guia is ready for you. Stop by and relax! ☕🍻",
    "gallery.post5.caption": "Classic-modern styling. Barber Ricardo in action. 🪒⚙️",
    "gallery.post6.caption": "Transformation of the day. Refresh your style with experts! ⚡✂️",

    // Reviews
    "reviews.badge": "Real Reviews",
    "reviews.title": "Who Trusts Vault Number One",
    "reviews.ratingText": "Top 5.0 star rating from local clients",
    "reviews.rev1.date": "1 month ago",
    "reviews.rev1.text": "Good afternoon, I got my haircut at this barbershop and the service was exceptional and very meticulous. Barber Ricardo is highly professional and friendly. I will return soon!",
    "reviews.rev2.date": "2 months ago",
    "reviews.rev2.text": "Simply 5⭐️ service! Booking is easy and schedules are followed with strict punctuality, which makes all the difference. The atmosphere is excellent and super welcoming.",
    "reviews.rev3.date": "1 month ago",
    "reviews.rev3.text": "The space is cozy and Ricardo, besides being friendly, shows that he is an impeccable professional. I will certainly return soon!",
    "reviews.rev4.date": "2 months ago",
    "reviews.rev4.text": "Fantastic service, highly recommend! Very professional hair and beard styling.",
    "reviews.rev5.date": "2 months ago",
    "reviews.rev5.text": "Excellent service, precise cut, and impeccable punctuality. A reference space in Guia.",
    "reviews.rev6.date": "2 months ago",
    "reviews.rev6.text": "Excellent professional. Spectacular and clean space, and Ricardo is super attentive.",

    // Location & Contact
    "contact.badge": "Where to Find Us",
    "contact.title": "Location & Contacts",
    "contact.servicesTitle": "Online Bookings",
    "contact.servicesSubtitle": "Bookings & Prices",
    "contact.desc": "Located on Avenida José Maria Duarte Júnior, 5, in Guia, Pombal. Right next to 'O Barriguitas' restaurant. Free parking is available.",
    "contact.addressTitle": "Our Address",
    "contact.phoneTitle": "Instagram",
    "contact.emailTitle": "Contact E-mail",
    "contact.tabHours": "Hours",
    "contact.tabBudget": "Simulator",
    "contact.tabBooking": "Booking",
    "contact.closed": "Closed",
    "contact.weekdays": "Tuesday to Friday",
    "contact.saturday": "Saturday",
    "contact.sunday": "Monday & Sunday",
    "contact.hoursTitle": "Opening Hours",
    "contact.hoursSubtitle": "Plan your haircut and beard session",
    "contact.hoursNote": "We recommend booking in advance to secure your spot, especially for weekend appointments.",
    "contact.mapTitle": "Location Map",

    // Budget Form
    "form.budget.title": "Price Simulator",
    "form.budget.name": "Your name",
    "form.budget.contact": "Instagram contact (e.g. @user)",
    "form.budget.services": "Desired Services (e.g. Cut + Beard)",
    "form.budget.desc": "Product preferences or special instructions",
    "form.budget.submit": "Send Simulation to Instagram",
    "form.budget.success": "Simulation copied to clipboard! Opening Instagram...",

    // Workshop Form
    "form.workshop.title": "Book via Instagram",
    "form.workshop.name": "Your name",
    "form.workshop.contact": "Instagram handle (e.g. @user)",
    "form.workshop.style": "Desired style / Special requests",
    "form.workshop.date": "Preferred date",
    "form.workshop.type": "Service Type",
    "form.workshop.type.select": "Select a service...",
    "form.workshop.type.diagBosch": "Skin Fade / Taper Cut",
    "form.workshop.type.diagDJI": "Modern Mullet / Design Cut",
    "form.workshop.type.suspension": "Beard Shave & Hot Towel Treatment",
    "form.workshop.type.brakes": "Premium Haircut & Beard Combo",
    "form.workshop.type.general": "Classic Scissor Haircut",
    "form.workshop.desc": "Preferred time or notes for Ricardo",
    "form.workshop.submit": "Book Service on Instagram",
    "form.workshop.success": "Booking details copied to clipboard! Opening Instagram...",

    // General UI
    "general.backToHome": "Back to Home Page",
    "general.pageNotFound": "Page Not Found",
    "general.pageNotFoundDesc": "We apologize, but the requested page does not exist.",
    "general.brandsProducts": "Individual Services",
    "general.servicesWorkshop": "Combos & Bookings",
    "general.contactUs": "Book a Chair",
    "general.budgetSubtitle": "Select your desired services to calculate estimated pricing and request booking details via Instagram direct message.",
    "general.workshopSubtitle": "Select your preferred date and service. Your booking details will be copied so you can send them via Instagram direct message.",
    "general.certified": "Specialists",

    // Footer
    "footer.title": "Any Questions?",
    "footer.desc": "Need a special appointment or have questions about our services? Contact barber Ricardo Pedrosa directly.",
    "footer.callBtn": "Instagram",
    "footer.emailBtn": "Send E-mail",
    "footer.emailCard": "General Email",
    "footer.quickLinks": "Links",
    "footer.copyright": "Vault Number One Barbershop. Ricardo Pedrosa — Barber & Owner. Website developed and all rights reserved to "
  }
};

export function LanguageProvider({ children }) {
  const { pathname } = useLocation();

  // Determine active language from URL prefix
  let language = "pt"; // default
  const paths = pathname.split("/");
  if (paths.includes("en")) language = "en";
  else if (paths.includes("es")) language = "es";
  else if (paths.includes("fr")) language = "fr";
  else if (paths.includes("de")) language = "de";

  // Provide simple translation key lookup
  const t = (key) => {
    // Fallback translations if ES, FR, DE are requested, fall back to PT
    const currentTranslations = TRANSLATIONS[language] || TRANSLATIONS.pt;
    const fallbackTranslations = TRANSLATIONS.pt;
    return currentTranslations[key] !== undefined ? currentTranslations[key] : (fallbackTranslations[key] !== undefined ? fallbackTranslations[key] : key);
  };

  return (
    <LanguageContext.Provider value={{ language, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
