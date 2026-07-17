import { createContext, useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LanguageContext = createContext();

const TRANSLATIONS = {
  pt: {
    // Navbar
    "nav.home": "Início",
    "nav.concept": "O Conceito",
    "nav.menu": "Especialidades",
    "nav.reviews": "Avaliações",
    "nav.contact": "Localização",
    "nav.reservations": "Reservar Mesa",
    "nav.admin": "Consola",

    // Hero
    "hero.badge": "Cozinha de Autor • Chef Ricardo Perpétuo",
    "hero.title": "Garfo da Costa",
    "hero.subtitle": "Uma experiência gastronómica única onde o requinte e a arte se encontram com a frescura do mar da Costa de Lavos.",
    "hero.ctaMenu": "Ver Especialidades",
    "hero.ctaBook": "Reservar Mesa",

    // About
    "about.badge": "Requinte, Arte & Paixão",
    "about.title": "Cozinha com Assinatura",
    "about.subtitle": "Chef Ricardo Perpétuo",
    "about.paragraph1": "Liderado pelo prestigiado Chef Ricardo Perpétuo, o Garfo da Costa é um refúgio gastronómico na praia da Costa de Lavos. O nosso menu celebra a frescura ímpar do peixe e marisco da nossa costa, elevados pela técnica refinada e criatividade da cozinha de autor.",
    "about.paragraph2": "Em harmonia com a nossa gastronomia, realizamos regularmente jantares vínicos em estreita parceria com conceituados produtores nacionais, como a Herdade das Servas. O nosso espaço foi planeado para ser inclusivo, dispondo de acessibilidade total para mobilidade reduzida, facilidade de estacionamento na Travessa da Arte Xávega e conveniência com pagamentos Visa, Mastercard e Multibanco.",
    "about.feat1.title": "Vista Panorâmica para o Mar",
    "about.feat1.desc": "Desfrute de uma vista inesquecível sobre o areal da Costa de Lavos durante a sua experiência gastronómica.",
    "about.feat2.title": "Jantares Vínicos Exclusivos",
    "about.feat2.desc": "Parcerias regulares com produtores de referência para criar noites de harmonização perfeitas.",
    "about.feat3.title": "Conveniência & Inclusão",
    "about.feat3.desc": "Espaço totalmente adaptado para mobilidade reduzida, com parqueamento fácil e cartões de crédito/débito.",

    // Menu
    "menu.badge": "Menu de Autor",
    "menu.title": "A Nossa Carta",
    "menu.subtitle": "Ingredientes frescos do mar combinados com carnes selecionadas de alta qualidade e sobremesas requintadas.",
    "menu.tabSpecialities": "Especialidades da Casa",
    "menu.tabExecutive": "Menu Executivo (Semana)",
    "menu.execTitle": "Menu de Almoço Semanal",
    "menu.execDesc": "Disponível durante a semana ao almoço (segunda, terça, quinta e sexta). O nosso Chef prepara diariamente opções frescas para satisfazer todos os paladares.",
    "menu.exec.fish": "Prato de Peixe Fresco",
    "menu.exec.fishDesc": "Peixe capturado no nosso litoral, grelhado ou cozinhado com acompanhamentos da época.",
    "menu.exec.meat": "Prato de Carne Selecionada",
    "menu.exec.meatDesc": "Cortes tenros com guarnições tradicionais preparadas com o toque moderno do Chef.",
    "menu.exec.veg": "Alternativa Vegetariana de Autor",
    "menu.exec.vegDesc": "Uma harmonia de legumes frescos e cereais preparados de forma criativa.",
    "menu.ctaInfo": "Consultar Menu Completo no Restaurante",

    // Especialidades Items
    "menu.item.lingueirao.title": "Arroz de Lingueirão",
    "menu.item.lingueirao.desc": "É o prato mais elogiado pelos clientes e críticos. É frequentemente descrito como 'o melhor arroz de lingueirão' da região, destacando-se pela frescura e sabor intenso.",
    "menu.item.lingueirao.tag": "A Grande Estrela",
    "menu.item.espetada.title": "Espetada Terra e Mar",
    "menu.item.espetada.desc": "Uma combinação sofisticada que une a vitela (terra) ao camarão (mar).",
    "menu.item.espetada.tag": "Recomendado",
    "menu.item.linguini.title": "Linguini Nero do Mar",
    "menu.item.linguini.desc": "Massa negra com uma seleção de mariscos (camarão, amêijoa e mexilhão).",
    "menu.item.linguini.tag": "Assinatura",
    "menu.item.tagliatelle.title": "Camarão Salteado",
    "menu.item.tagliatelle.desc": "Delicioso camarão salteado com alho, malagueta e gengibre. Uma entrada de marisco de sabor marcante.",
    "menu.item.tagliatelle.tag": "Entrada",
    "menu.item.vitela.title": "Naco de Vitela",
    "menu.item.vitela.desc": "Para quem prefere carne, este é o corte de eleição da casa, servido com acompanhamentos sazonais.",
    "menu.item.vitela.tag": "Destaque",
    "menu.item.magret.title": "Magret de Pato",
    "menu.item.magret.desc": "Peito de pato suculento fatiado, acompanhado por batatas fondant e cogumelos salteados, perfumado com redução de laranja.",
    "menu.item.magret.tag": "Especialidade",
    "menu.item.barriga.title": "Barriga de Porco",
    "menu.item.barriga.desc": "Barriga de porco cozinhada a baixa temperatura com pele crocante, servida sobre puré de batata aveludado e cebola frita.",
    "menu.item.barriga.tag": "Chef's Choice",
    "menu.item.bife.title": "Bife à Garfo",
    "menu.item.bife.desc": "Naco de carne tenra banhado em molho de natas da casa, rodeado de estaladiças batatas fritas às rodelas.",
    "menu.item.bife.tag": "Clássico",
    "menu.item.robalo.title": "Filetes de Robalo",
    "menu.item.robalo.desc": "Filetes de robalo fritos no ponto, servidos com um cremoso arroz de peixe cozinhado lentamente.",
    "menu.item.robalo.tag": "Destaque",
    "menu.item.crocante.title": "Crocante de Peixe do Mar",
    "menu.item.crocante.desc": "Um prato que brinca com texturas, muito apreciado pela crocância do peixe aliada à cremosidade do arroz de amêijoas.",
    "menu.item.crocante.tag": "Popular",
    "menu.item.basca.title": "Torta Basca",
    "menu.item.basca.desc": "Uma sobremesa cremosa e muito popular no restaurante.",
    "menu.item.basca.tag": "Assinatura",
    "menu.item.chia.title": "Pudim de Chia",
    "menu.item.chia.desc": "Uma sobremesa fresca e saudável: pudim de sementes de chia com coco, coberto com granola crocante e frutas da época.",
    "menu.item.chia.tag": "Leve",

    // Reviews
    "reviews.badge": "Testemunhos de Excelência",
    "reviews.title": "O que dizem os nossos clientes",
    "reviews.ratingText": "Classificação 4.6 / 5 no TripAdvisor • Travellers' Choice",
    "reviews.rev1.name": "Maria & Manuel",
    "reviews.rev1.date": "Janeiro 2026",
    "reviews.rev1.text": "Cozinha de nível Michelin. O sabor de cada prato que nos chega à mesa revela sabedoria, excellence e amor por aquilo que se faz. O melhor arroz de lingueirão. Sem qualquer dúvida.",
    "reviews.rev2.name": "Ângelo Paz",
    "reviews.rev2.date": "Maio 2026",
    "reviews.rev2.text": "É uma 'injustiça' toda esta discrição... o nível da qualidade da refeição e do atendimento são de tão elevada qualidade. Local pacato, restaurante pelo qual se passa e não se repara, até que entrando, se torna numa agradável surpresa.",
    "reviews.rev3.name": "Sherpa",
    "reviews.rev3.date": "Fevereiro 2026",
    "reviews.rev3.text": "Simplesmente perfeito! Ambiente calmo, fácil conversar... vista de mar. O chef veio à mesa onde demos os parabéns pela apresentação, sabores, cor, explosão de sabores...",
    "reviews.rev4.name": "Discover",
    "reviews.rev4.date": "Outubro 2025",
    "reviews.rev4.text": "Fomos surpreendidos por este pequeno paraíso à beira mar. O atendimento é simpático, jovem e atencioso. Voltaremos de certeza!",

    // Location
    "contact.badge": "Praia da Costa de Lavos",
    "contact.title": "Onde Nos Encontrar",
    "contact.desc": "Localizado à beira-mar na Travessa da Arte Xávega, o Garfo da Costa oferece uma atmosfera tranquila e elegante. Planeie a sua visita e garanta a sua mesa com antecedência.",
    "contact.addressTitle": "A Nossa Morada",
    "contact.phoneTitle": "Telefone / Reservas",
    "contact.emailTitle": "E-mail Geral",
    "contact.hoursTitle": "Horários de Funcionamento",
    "contact.hoursSubtitle": "Cozinha de autor ao almoço e ao jantar",
    "contact.hoursNote": "Devido à lotação limitada e à preparação minuciosa de cada prato de autor, recomendamos vivamente a realização de reserva prévia online ou telefónica, especialmente nos fins de semana.",
    "contact.mapTitle": "Localização no Google Maps",
    "contact.closed": "Encerrado (Descanso Semanal)",
    "contact.lunch": "Almoço",
    "contact.dinner": "Jantar",
    "contact.continuous": "Serviço Contínuo",

    // Weekdays
    "day.monday": "Segunda-feira",
    "day.tuesday": "Terça-feira",
    "day.wednesday": "Quarta-feira",
    "day.thursday": "Quinta-feira",
    "day.friday": "Sexta-feira",
    "day.saturday": "Sábado",
    "day.sunday": "Domingo",

    // Booking Form
    "booking.title": "Efetuar Reserva Online",
    "booking.subtitle": "Preencha o formulário abaixo para registar a sua intenção de reserva. Os lugares são limitados.",
    "booking.name": "O seu Nome Completo",
    "booking.email": "O seu E-mail",
    "booking.phone": "Número de Telefone/Telemóvel",
    "booking.date": "Data Pretendida",
    "booking.time": "Hora da Refeição",
    "booking.time.select": "Selecione um horário...",
    "booking.guests": "Número de Pessoas",
    "booking.guests.select": "Selecione a quantidade...",
    "booking.obs": "Observações / Pedidos Especiais",
    "booking.obs.placeholder": "Ex: Cadeira de bebé, restrições alimentares, mobilidade reduzida...",
    "booking.submit": "Solicitar Reserva via WhatsApp",
    "booking.policy": "A reserva online é guardada no nosso sistema. O envio via WhatsApp agiliza a confirmação imediata pela nossa equipa.",
    "booking.success": "Reserva registada no sistema! A redirecionar para confirmação por WhatsApp...",
    "booking.error": "Por favor, preencha todos os campos obrigatórios corretamente.",
    "booking.info.vibe": "Espaço ideal para casais, famílias e grupos de amigos.",
    "booking.info.limit": "Permitimos reservas online para grupos até 30 pessoas. Para eventos maiores, contacte-nos por telefone.",

    // Admin Panel
    "admin.title": "Consola de Gestão de Reservas",
    "admin.subtitle": "Consulte e gira as reservas locais registadas no sistema (armazenadas localmente no browser).",
    "admin.password": "Palavra-passe de Acesso",
    "admin.login": "Entrar",
    "admin.loginError": "Palavra-passe incorreta.",
    "admin.table.name": "Cliente",
    "admin.table.date": "Data & Hora",
    "admin.table.phone": "Contacto",
    "admin.table.guests": "Pessoas",
    "admin.table.obs": "Notas",
    "admin.table.status": "Estado",
    "admin.table.actions": "Ações",
    "admin.status.pending": "Pendente",
    "admin.status.confirmed": "Confirmada",
    "admin.status.cancelled": "Cancelada",
    "admin.action.confirm": "Confirmar",
    "admin.action.cancel": "Cancelar",
    "admin.action.delete": "Eliminar",
    "admin.noBookings": "Nenhuma reserva guardada no sistema até ao momento.",
    "admin.total": "Total de Reservas",
    "admin.active": "Reservas Ativas",

    // General UI
    "general.nif": "NIF",
    "general.accessibility": "Acessível para Mobilidade Reduzida",
    "general.parking": "Estacionamento Facilitado",
    "general.payment": "Visa, Mastercard e Multibanco",
    "general.privateEvents": "Aceitamos Eventos Privados",
    "general.backToHome": "Voltar à Página Inicial",
    "general.pageNotFound": "Página não encontrada",
    "general.copyright": "© 2026 Conspiração Iguarias. Todos os direitos reservados. Chef Ricardo Perpétuo."
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.concept": "Concept",
    "nav.menu": "Menu",
    "nav.reviews": "Reviews",
    "nav.contact": "Location",
    "nav.reservations": "Book a Table",
    "nav.admin": "Console",

    // Hero
    "hero.badge": "Signature Cuisine • Chef Ricardo Perpétuo",
    "hero.title": "Garfo da Costa",
    "hero.subtitle": "A unique dining experience where refinement and art meet the freshness of the sea at Costa de Lavos.",
    "hero.ctaMenu": "Explore Specialities",
    "hero.ctaBook": "Book Table",

    // About
    "about.badge": "Refinement, Art & Passion",
    "about.title": "Signature Dining",
    "about.subtitle": "Chef Ricardo Perpétuo",
    "about.paragraph1": "Led by the prestigious Chef Ricardo Perpétuo, Garfo da Costa is a culinary sanctuary on Costa de Lavos beach. Our menu celebrates the unmatched freshness of our coast's fish and seafood, elevated by refined technique and signature creativity.",
    "about.paragraph2": "In harmony with our gastronomy, we regularly host exclusive wine dinners in partnership with renowned national producers, such as Herdade das Servas. Our venue is fully inclusive, offering complete accessibility for guests with reduced mobility, easy parking nearby at Travessa da Arte Xávega, and convenience with Visa, Mastercard, and Multibanco payments.",
    "about.feat1.title": "Panoramic Ocean View",
    "about.feat1.desc": "Enjoy a spectacular view of Costa de Lavos sandbanks during your gourmet dining experience.",
    "about.feat2.title": "Exclusive Wine Dinners",
    "about.feat2.desc": "Regular partnerships with elite winemakers to create the perfect pairing evenings.",
    "about.feat3.title": "Convenience & Inclusion",
    "about.feat3.desc": "Fully accessible venue for reduced mobility, with stress-free parking and credit/debit card support.",

    // Menu
    "menu.badge": "Chef's Signature",
    "menu.title": "Our Selection",
    "menu.subtitle": "Fresh ingredients from the sea combined with high-quality selected meats and gourmet desserts.",
    "menu.tabSpecialities": "House Specialities",
    "menu.tabExecutive": "Weekday Executive Menu",
    "menu.execTitle": "Weekly Lunch Menu",
    "menu.execDesc": "Available during weekday lunch hours (Monday, Tuesday, Thursday, and Friday). Our Chef prepares fresh daily specials to satisfy every palate.",
    "menu.exec.fish": "Fresh Fish Special",
    "menu.exec.fishDesc": "Locally caught ocean fish, grilled or slow-cooked with seasonal vegetables.",
    "menu.exec.meat": "Selected Meat Choice",
    "menu.exec.meatDesc": "Tender cuts served with traditional sides crafted with the Chef's modern touch.",
    "menu.exec.veg": "Signature Vegetarian Alternative",
    "menu.exec.vegDesc": "A creative balance of fresh local vegetables and whole grains.",
    "menu.ctaInfo": "Consult Full Menu at the Restaurant",

    // Especialidades Items
    "menu.item.lingueirao.title": "Razor Clam Rice",
    "menu.item.lingueirao.desc": "Highly praised by guests and food critics. Frequently described as the best razor clam rice in the region, standing out for its freshness and intense flavor.",
    "menu.item.lingueirao.tag": "The Star",
    "menu.item.espetada.title": "Land and Sea Skewer",
    "menu.item.espetada.desc": "A sophisticated pairing that beautifully unites tender veal (land) with succulent shrimp (sea).",
    "menu.item.espetada.tag": "Recommended",
    "menu.item.linguini.title": "Seafood Black Linguini",
    "menu.item.linguini.desc": "Squid ink pasta tossed with a premium selection of fresh seafood, including shrimp, clams, and mussels.",
    "menu.item.linguini.tag": "Signature",
    "menu.item.tagliatelle.title": "Sautéed Prawns",
    "menu.item.tagliatelle.desc": "Delicious sautéed prawns with garlic, chili, and ginger. A flavorful signature seafood starter.",
    "menu.item.tagliatelle.tag": "Starter",
    "menu.item.vitela.title": "Veal Steak",
    "menu.item.vitela.desc": "For meat lovers, this is the house's signature prime cut, served with fresh seasonal sides.",
    "menu.item.vitela.tag": "Featured",
    "menu.item.magret.title": "Duck Magret",
    "menu.item.magret.desc": "Tender sliced duck breast served with fondant potatoes and sautéed mushrooms, finished with an orange reduction.",
    "menu.item.magret.tag": "Speciality",
    "menu.item.barriga.title": "Crispy Pork Belly",
    "menu.item.barriga.desc": "Slow-cooked pork belly with crispy crackling, served over smooth potato puree and crispy fried onions.",
    "menu.item.barriga.tag": "Chef's Choice",
    "menu.item.bife.title": "Garfo Steak",
    "menu.item.bife.desc": "Tender steak smothered in our house cream sauce, surrounded by crunchy round potato chips.",
    "menu.item.bife.tag": "Classic",
    "menu.item.robalo.title": "Sea Bass Fillets",
    "menu.item.robalo.desc": "Crispy pan-seared sea bass fillets served with a slowly simmered traditional creamy fish rice.",
    "menu.item.robalo.tag": "Featured",
    "menu.item.crocante.title": "Crispy Sea Fish",
    "menu.item.crocante.desc": "A dish that plays with textures, highly appreciated for the contrast between the crispy fish and the creaminess of the clam rice.",
    "menu.item.crocante.tag": "Popular",
    "menu.item.basca.title": "Torta Basca",
    "menu.item.basca.desc": "A smooth, creamy dessert that is incredibly popular among our guests.",
    "menu.item.basca.tag": "Signature",
    "menu.item.chia.title": "Chia Pudding",
    "menu.item.chia.desc": "A fresh and healthy dessert: chia seed pudding with coconut milk, topped with crunchy granola and fresh fruit.",
    "menu.item.chia.tag": "Light",

    // Reviews
    "reviews.badge": "Testimonials of Excellence",
    "reviews.title": "What our guests say",
    "reviews.ratingText": "Rated 4.6 / 5 on TripAdvisor • Travellers' Choice",
    "reviews.rev1.name": "Maria & Manuel",
    "reviews.rev1.date": "January 2026",
    "reviews.rev1.text": "Michelin-level cuisine. The flavor of each dish brought to the table reveals wisdom, excellence, and love for what is done. The best razor clam rice. Without a doubt.",
    "reviews.rev2.name": "Ângelo Paz",
    "reviews.rev2.date": "May 2026",
    "reviews.rev2.text": "It is an 'injustice' all this discretion... the level of quality of the meal and the service are of such high quality. Peaceful place, a restaurant you pass by and don't notice, until you enter, and it becomes a pleasant surprise.",
    "reviews.rev3.name": "Sherpa",
    "reviews.rev3.date": "February 2026",
    "reviews.rev3.text": "Simply perfect! Calm atmosphere, easy to talk... ocean view. The chef came to the table where we congratulated him on the presentation, flavors, color, explosion of flavors...",
    "reviews.rev4.name": "Discover",
    "reviews.rev4.date": "October 2025",
    "reviews.rev4.text": "We were surprised by this little paradise by the sea. The service is friendly, young, and attentive. We will definitely return!",

    // Location
    "contact.badge": "Costa de Lavos Beach",
    "contact.title": "Where to Find Us",
    "contact.desc": "Located right on the beach at Travessa da Arte Xávega, Garfo da Costa offers a peaceful and elegant atmosphere. Plan your visit and secure your table in advance.",
    "contact.addressTitle": "Our Address",
    "contact.phoneTitle": "Phone / Bookings",
    "contact.emailTitle": "General Email",
    "contact.hoursTitle": "Opening Hours",
    "contact.hoursSubtitle": "Signature cuisine at lunch and dinner",
    "contact.hoursNote": "Due to limited seating and the meticulous preparation of each signature dish, we strongly recommend making a prior online or phone booking, especially on weekends.",
    "contact.mapTitle": "Location on Google Maps",
    "contact.closed": "Closed (Weekly Rest)",
    "contact.lunch": "Lunch",
    "contact.dinner": "Dinner",
    "contact.continuous": "All-Day Service",

    // Weekdays
    "day.monday": "Monday",
    "day.tuesday": "Tuesday",
    "day.wednesday": "Wednesday",
    "day.thursday": "Thursday",
    "day.friday": "Friday",
    "day.saturday": "Saturday",
    "day.sunday": "Sunday",

    // Booking Form
    "booking.title": "Make an Online Booking",
    "booking.subtitle": "Fill out the form below to request a table. Seating capacity is limited.",
    "booking.name": "Your Full Name",
    "booking.email": "Your Email",
    "booking.phone": "Phone / Mobile Number",
    "booking.date": "Preferred Date",
    "booking.time": "Meal Time",
    "booking.time.select": "Select time...",
    "booking.guests": "Number of Guests",
    "booking.guests.select": "Select guest count...",
    "booking.obs": "Remarks / Special Requests",
    "booking.obs.placeholder": "E.g.: Baby chair, dietary restrictions, reduced mobility...",
    "booking.submit": "Request Booking via WhatsApp",
    "booking.policy": "Online bookings are saved in our database. Sending via WhatsApp speeds up instant confirmation from our team.",
    "booking.success": "Booking saved in our database! Redirecting to WhatsApp for confirmation...",
    "booking.error": "Please fill out all required fields correctly.",
    "booking.info.vibe": "Perfect environment for couples, families, and groups of friends.",
    "booking.info.limit": "We accept online bookings for groups up to 30 people. For larger events, please contact us by phone.",

    // Admin Panel
    "admin.title": "Booking Management Console",
    "admin.subtitle": "Consult and manage local bookings saved in the database (stored locally in the browser).",
    "admin.password": "Access Password",
    "admin.login": "Enter",
    "admin.loginError": "Incorrect password.",
    "admin.table.name": "Customer",
    "admin.table.date": "Date & Time",
    "admin.table.phone": "Contact",
    "admin.table.guests": "Guests",
    "admin.table.obs": "Notes",
    "admin.table.status": "Status",
    "admin.table.actions": "Actions",
    "admin.status.pending": "Pending",
    "admin.status.confirmed": "Confirmed",
    "admin.status.cancelled": "Cancelled",
    "admin.action.confirm": "Confirm",
    "admin.action.cancel": "Cancel",
    "admin.action.delete": "Delete",
    "admin.noBookings": "No bookings stored in the database yet.",
    "admin.total": "Total Bookings",
    "admin.active": "Active Bookings",

    // General UI
    "general.nif": "Tax ID",
    "general.accessibility": "Reduced Mobility Accessible",
    "general.parking": "Easy Nearby Parking",
    "general.payment": "Visa, Mastercard & Multibanco",
    "general.privateEvents": "Private Events Welcome",
    "general.backToHome": "Back to Home Page",
    "general.pageNotFound": "Page Not Found",
    "general.copyright": "© 2026 Conspiração Iguarias. All rights reserved. Chef Ricardo Perpétuo."
  },
  fr: {
    // Navbar
    "nav.home": "Accueil",
    "nav.concept": "Concept",
    "nav.menu": "Spécialités",
    "nav.reviews": "Avis",
    "nav.contact": "Localisation",
    "nav.reservations": "Réserver",
    "nav.admin": "Console",

    // Hero
    "hero.badge": "Cuisine d'Auteur • Chef Ricardo Perpétuo",
    "hero.title": "Garfo da Costa",
    "hero.subtitle": "Une expérience gastronomique unique où le raffinement et l'art rencontrent la fraîcheur marine de Costa de Lavos.",
    "hero.ctaMenu": "Voir Spécialités",
    "hero.ctaBook": "Réserver Table",

    // About
    "about.badge": "Raffinement, Art & Passion",
    "about.title": "Cuisine Signature",
    "about.subtitle": "Chef Ricardo Perpétuo",
    "about.paragraph1": "Dirigé par le prestigieux Chef Ricardo Perpétuo, Garfo da Costa é um refuge gastronomique sur la plage de Costa de Lavos. Notre menu célèbre la fraîcheur exceptionnelle du poisson et des fruits de mer de notre littoral, magnifiés par la technique raffinée et la créativité d'une cuisine d'auteur.",
    "about.paragraph2": "En harmonie avec notre cuisine, nous organisons régulièrement des dîners œnologiques exclusifs en étroite collaboration avec des producteurs nationaux de renom, comme Herdade das Servas. Notre espace a été conçu pour être inclusif, disposant d'une accessibilité totale pour les personnes à mobilité réduite, d'un parking facile à proximité sur la Travessa da Arte Xávega, et acceptant les paiements Visa, Mastercard et Multibanco.",
    "about.feat1.title": "Vue Panoramique sur Mer",
    "about.feat1.desc": "Profitez d'une vue inoubliable sur la plage de Costa de Lavos pendant votre voyage gastronomique.",
    "about.feat2.title": "Dîners Œnologiques Exclusifs",
    "about.feat2.desc": "Collaborations régulières avec des vignerons de référence pour des soirées d'accords parfaits.",
    "about.feat3.title": "Praticité & Accessibilité",
    "about.feat3.desc": "Espace entièrement adapté aux PMR, avec stationnement facile et acceptation de toutes les cartes.",

    // Menu
    "menu.badge": "Menu d'Auteur",
    "menu.title": "Notre Carte",
    "menu.subtitle": "Ingrédients frais de l'océan combinés avec des viandes de qualité sélectionnées et des desserts raffinés.",
    "menu.tabSpecialities": "Spécialités de la Maison",
    "menu.tabExecutive": "Menu Exécutif (Semaine)",
    "menu.execTitle": "Menu du Déjeuner de Semaine",
    "menu.execDesc": "Disponible pendant le déjeuner en semaine (lundi, mardi, jeudi et vendredi). Notre Chef prépare chaque jour des plats frais pour satisfaire tous les goûts.",
    "menu.exec.fish": "Plat de Poisson Frais",
    "menu.exec.fishDesc": "Poisson sauvage de notre côte, grillé ou cuisiné avec des accompagnements de saison.",
    "menu.exec.meat": "Plat de Viande Sélectionnée",
    "menu.exec.meatDesc": "Morceaux de viande tendres servis avec des garnitures traditionnelles revisitées par le Chef.",
    "menu.exec.veg": "Alternative Végétarienne Signature",
    "menu.exec.vegDesc": "Une harmonie créative de légumes frais du terroir et de céréales.",
    "menu.ctaInfo": "Consulter le Menu Complet au Restaurant",

    // Especialidades Items
    "menu.item.lingueirao.title": "Riz aux Couteaux",
    "menu.item.lingueirao.desc": "Le plat le plus salué par les clients et les critiques. Souvent décrit comme le meilleur riz aux couteaux de la région, réputé pour sa fraîcheur et sa saveur intense.",
    "menu.item.lingueirao.tag": "Signature",
    "menu.item.espetada.title": "Brochette Terre et Mer",
    "menu.item.espetada.desc": "Une alliance sophistiquée mariant harmonieusement le veau tendre (terre) et la crevette juteuse (mer).",
    "menu.item.espetada.tag": "Recommandé",
    "menu.item.linguini.title": "Linguine Noire aux Fruits de Mer",
    "menu.item.linguini.desc": "Pâtes à l'encre de seiche accompagnées d'une sélection de fruits de mer (crevettes, palourdes et moules).",
    "menu.item.linguini.tag": "Raffiné",
    "menu.item.tagliatelle.title": "Crevettes Sautées",
    "menu.item.tagliatelle.desc": "Délicieuses crevettes sautées à l'ail, au piment et au gingembre. Une entrée de fruits de mer signature pleine de saveurs.",
    "menu.item.tagliatelle.tag": "Entrée",
    "menu.item.vitela.title": "Pavé de Veau",
    "menu.item.vitela.desc": "Pour les amateurs de viande, c'est le morceau de choix de la maison, servi avec des accompagnements de saison.",
    "menu.item.vitela.tag": "Vedette",
    "menu.item.magret.title": "Magret de Canard",
    "menu.item.magret.desc": "Poitrine de canard tendre tranchée, servie avec des pommes de terre fondantes et champignons sautés, réduction d'orange.",
    "menu.item.magret.tag": "Spécialité",
    "menu.item.barriga.title": "Poitrine de Porc Croustillante",
    "menu.item.barriga.desc": "Poitrine de porc confite, peau croustillante, servie sur lit de purée de pommes de terre veloutée et oignons frits.",
    "menu.item.barriga.tag": "Chef's Choice",
    "menu.item.bife.title": "Steak Garfo",
    "menu.item.bife.desc": "Pavé de bœuf tendre nappé de notre sauce crème maison, entouré de frites de pommes de terre croustillantes en rondelles.",
    "menu.item.bife.tag": "Classique",
    "menu.item.robalo.title": "Filets de Bar",
    "menu.item.robalo.desc": "Filets de bar croustillants à l'extérieur, servis avec un riz crémeux au poisson mijoté lentement.",
    "menu.item.robalo.tag": "Vedette",
    "menu.item.crocante.title": "Croustillant de Poisson de Mer",
    "menu.item.crocante.desc": "Un plat jouant sur les textures, très apprécié pour le contraste entre le poisson croustillant et l'onctuosité du riz aux palourdes.",
    "menu.item.crocante.tag": "Populaire",
    "menu.item.basca.title": "Torta Basca",
    "menu.item.basca.desc": "Un dessert crémeux et fondant, particulièrement populaire auprès de nos clients.",
    "menu.item.basca.tag": "Signature",
    "menu.item.chia.title": "Pudding de Chia",
    "menu.item.chia.desc": "Un dessert frais et sain: pudding de graines de chia au lait de coco, granola maison croustillant et fruits de saison.",
    "menu.item.chia.tag": "Léger",

    // Reviews
    "reviews.badge": "Témoignages d'Excellence",
    "reviews.title": "Ce que disent nos clients",
    "reviews.ratingText": "Note de 4.6 / 5 sur TripAdvisor • Travellers' Choice",
    "reviews.rev1.name": "Maria & Manuel",
    "reviews.rev1.date": "Janvier 2026",
    "reviews.rev1.text": "Cuisine de niveau Michelin. Le goût de chaque plat qui arrive à table révèle savoir-faire, excellence et amour du métier. Le meilleur riz aux couteaux. Sans aucun doute.",
    "reviews.rev2.name": "Ângelo Paz",
    "reviews.rev2.date": "Mai 2026",
    "reviews.rev2.text": "C'est une 'injustice' toute cette discrétion... le niveau de qualité du repas et du service sont incroyablement élevés. Lieu paisible, restaurant devant lequel on passe sans faire attention, jusqu'à ce qu'on y entre et que ce soit une merveilleuse surprise.",
    "reviews.rev3.name": "Sherpa",
    "reviews.rev3.date": "Février 2026",
    "reviews.rev3.text": "Tout simplement parfait! Ambiance calme, idéal pour discuter... vue mer. Le chef est venu à table et nous l'avons félicité pour la présentation, les saveurs, les couleurs, une véritable explosion en bouche...",
    "reviews.rev4.name": "Discover",
    "reviews.rev4.date": "Octobre 2025",
    "reviews.rev4.text": "Nous avons été surpris par ce petit coin de paradis au bord de l'eau. Le service est accueillant, jeune et attentionné. Nous y retournerons!",

    // Location
    "contact.badge": "Plage de Costa de Lavos",
    "contact.title": "Nous situer",
    "contact.desc": "Situé face à l'océan sur la Travessa da Arte Xávega, le Garfo da Costa vous accueille dans une atmosphère calme et élégante. Planifiez votre repas et réservez votre table.",
    "contact.addressTitle": "Notre Adresse",
    "contact.phoneTitle": "Téléphone / Réservations",
    "contact.emailTitle": "E-mail Général",
    "contact.hoursTitle": "Horaires d'Ouverture",
    "contact.hoursSubtitle": "Cuisine d'auteur au déjeuner et au dîner",
    "contact.hoursNote": "En raison de notre capacité d'accueil limitée et du soin apporté à chaque création, nous vous recommandons fortement de réserver en ligne ou par téléphone.",
    "contact.mapTitle": "Carte de Localisation Google Maps",
    "contact.closed": "Fermé (Repos Hebdomadaire)",
    "contact.lunch": "Déjeuner",
    "contact.dinner": "Dîner",
    "contact.continuous": "Service Continu",

    // Weekdays
    "day.monday": "Lundi",
    "day.tuesday": "Mardi",
    "day.wednesday": "Mercredi",
    "day.thursday": "Jeudi",
    "day.friday": "Vendredi",
    "day.saturday": "Samedi",
    "day.sunday": "Dimanche",

    // Booking Form
    "booking.title": "Réserver une Table en Ligne",
    "booking.subtitle": "Remplissez les détails ci-dessous pour faire une demande de réservation. Places limitées.",
    "booking.name": "Nom et Prénom",
    "booking.email": "Votre E-mail",
    "booking.phone": "Numéro de Téléphone",
    "booking.date": "Date Souhaitée",
    "booking.time": "Heure du Repas",
    "booking.time.select": "Sélectionnez l'heure...",
    "booking.guests": "Nombre de Convives",
    "booking.guests.select": "Sélectionnez le nombre...",
    "booking.obs": "Demandes Spéciales / Remarques",
    "booking.obs.placeholder": "Ex: Siège bébé, restrictions alimentaires, mobilité réduite...",
    "booking.submit": "Envoyer Demande via WhatsApp",
    "booking.policy": "Votre réservation est enregistrée dans notre système local. Envoyer la demande par WhatsApp permet une confirmation immédiate par notre équipe.",
    "booking.success": "Réservation enregistrée! Redirection vers WhatsApp pour validation...",
    "booking.error": "Veuillez remplir correctement tous les champs obligatoires.",
    "booking.info.vibe": "Espace idéal pour les couples, les familles et les groupes d'amis.",
    "booking.info.limit": "Réservations en ligne acceptées jusqu'à 30 personnes. Au-delà, veuillez nous contacter directement par téléphone.",

    // Admin Panel
    "admin.title": "Console de Gestion des Réservations",
    "admin.subtitle": "Consultez et gérez les réservations enregistrées localement (stockées dans le navigateur).",
    "admin.password": "Mot de Passe de Connexion",
    "admin.login": "Entrer",
    "admin.loginError": "Mot de passe incorrect.",
    "admin.table.name": "Client",
    "admin.table.date": "Date & Heure",
    "admin.table.phone": "Contact",
    "admin.table.guests": "Personnes",
    "admin.table.obs": "Notes",
    "admin.table.status": "Statut",
    "admin.table.actions": "Actions",
    "admin.status.pending": "En attente",
    "admin.status.confirmed": "Confirmée",
    "admin.status.cancelled": "Annulée",
    "admin.action.confirm": "Confirmer",
    "admin.action.cancel": "Annuler",
    "admin.action.delete": "Supprimer",
    "admin.noBookings": "Aucune réservation enregistrée pour le moment.",
    "admin.total": "Total Réservations",
    "admin.active": "Réservations Actives",

    // General UI
    "general.nif": "NIF",
    "general.accessibility": "Accessible aux PMR",
    "general.parking": "Stationnement Facile",
    "general.payment": "Visa, Mastercard et Multibanco",
    "general.privateEvents": "Événements Privés Acceptés",
    "general.backToHome": "Retour à l'Accueil",
    "general.pageNotFound": "Page non trouvée",
    "general.copyright": "© 2026 Conspiração Iguarias. Tous droits réservés. Chef Ricardo Perpétuo."
  }
};

export function LanguageProvider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  const getLanguageFromPath = (path) => {
    if (path.startsWith("/en") || path === "/en") return "en";
    if (path.startsWith("/fr") || path === "/fr") return "fr";
    return "pt";
  };

  const [language, setLanguage] = useState(() => getLanguageFromPath(location.pathname));

  useEffect(() => {
    const lang = getLanguageFromPath(location.pathname);
    setLanguage(lang);
  }, [location.pathname]);

  const changeLanguage = (newLang) => {
    if (newLang === language) return;

    let cleanPath = location.pathname;
    if (cleanPath.startsWith("/en")) {
      cleanPath = cleanPath.substring(3);
    } else if (cleanPath.startsWith("/fr")) {
      cleanPath = cleanPath.substring(3);
    }
    if (cleanPath === "") cleanPath = "/";

    let targetPath = cleanPath;
    if (newLang === "en") {
      targetPath = `/en${cleanPath === "/" ? "" : cleanPath}`;
    } else if (newLang === "fr") {
      targetPath = `/fr${cleanPath === "/" ? "" : cleanPath}`;
    }

    setLanguage(newLang);
    navigate(targetPath + location.search + location.hash);
  };

  const t = (key) => {
    const translation = TRANSLATIONS[language]?.[key] || TRANSLATIONS.pt?.[key] || key;
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
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
