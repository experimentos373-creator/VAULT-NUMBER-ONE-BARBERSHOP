import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

const translations = {
  pt: {
    "nav.home": "Início",
    "nav.stock": "Stock Viaturas",
    "nav.services": "Avaliar Retoma",
    "nav.company": "A Empresa",
    "general.backToHome": "Voltar ao Início",
    "general.loading": "A carregar...",
    "general.contact": "Contacto",
    "general.phone": "Telefone",
    "general.email": "E-mail",
    "general.address": "Morada",
    "general.hours": "Horário de Funcionamento",
    "general.hoursWeek": "Segunda a Sexta",
    "general.hoursWeekend": "Sábado e Domingo",
    "general.closed": "Encerrado",
    "general.whatsappLead": "Olá! Gostaria de obter mais informações sobre o seguinte veículo: {carName} ({year}) no valor de {price}€.",
    
    // Home Page
    "hero.badge": "Stand de Confiança no Pombal",
    "hero.title": "Carros Usados Como Novos",
    "hero.subtitle": "Encontre opções verificadas com 18 meses de garantia e uma assistência pós-venda personalizada no Pombal.",
    "hero.filter.brand": "Marca",
    "hero.filter.model": "Modelo",
    "hero.filter.fuel": "Combustível",
    "hero.filter.transmission": "Transmissão",
    "hero.filter.segment": "Segmento",
    "hero.filter.search": "Pesquisar Viatura",
    "hero.googleRating": "Google Rating 4.6 - Vê as nossas avaliações",

    "segments.title": "Que segmento procura?",
    "segments.citadino": "Citadinos",
    "segments.monovolume": "Monovolumes",
    "segments.carrinha": "Carrinhas / Familiares",
    "segments.suv": "SUVs / 4x4",
    "segments.utilitario": "Utilitários",

    "featured.title": "As nossas viaturas",
    "featured.viewAll": "Ver todo o stock",
    
    "values.title": "Porque escolher a Gatilhauto?",
    "values.subtitle": "Transparência, qualidade e compromisso total no pós-venda.",
    "values.feat1.title": "Garantia de 18 Meses",
    "values.feat1.desc": "Todas as nossas viaturas incluem garantia completa para a sua total tranquilidade.",
    "values.feat2.title": "Revisão Geral Efetuada",
    "values.feat2.desc": "Antes da entrega, cada carro é inspecionado minuciosamente na nossa oficina oficial.",
    "values.feat3.title": "Financiamento à Medida",
    "values.feat3.desc": "Aprovamos o seu crédito automóvel em menos de 24 horas com as melhores taxas do mercado.",

    // Stock Page
    "stock.title": "O Nosso Stock de Viaturas",
    "stock.subtitle": "Explore os nossos carros inspecionados prontos para entrega imediata.",
    "stock.filter.allBrands": "Todas as Marcas",
    "stock.filter.allFuels": "Todos os Combustíveis",
    "stock.filter.allTransmissions": "Todas as Transmissões",
    "stock.filter.placeholder": "Procurar por marca ou modelo...",
    "stock.noResults": "Não encontrámos nenhuma viatura com os filtros selecionados.",
    "stock.card.year": "Ano",
    "stock.card.kms": "Kms",
    "stock.card.viewDetails": "Ver Detalhes",
    "stock.card.detailsTitle": "Especificações Técnicas",
    "stock.card.requestQuote": "Pedir Informações / Reservar",
    "stock.card.financeSim": "Simulação de Financiamento",
    "stock.filter.favorites": "Favoritos",
    "stock.card.interested": "Interessado",
    "stock.card.compare": "Comparar",
    "stock.compare.title": "Comparador de Veículos",
    "stock.compare.clear": "Limpar Tudo",
    "stock.compare.limit": "Limite de comparação atingido (máx. 3 viaturas)",
    "stock.compare.selected": "Selecionado para comparar",
    "stock.compare.selectTwo": "Escolha mais uma viatura para comparar",
    "stock.compare.close": "Fechar",
    "stock.noFavorites": "Ainda não adicionou nenhum veículo aos favoritos. Clique no ícone de coração ❤️ para guardar os seus modelos preferidos!",

    // Services Page
    "services.title": "Avaliar Retoma",
    "services.subtitle": "Quer vender o seu carro ou dar como retoma? Preencha os dados abaixo para receber uma avaliação gratuita.",
    "services.finance.title": "Simulador de Crédito Automóvel",
    "services.finance.carValue": "Valor da Viatura (€)",
    "services.finance.deposit": "Entrada Inicial (€)",
    "services.finance.term": "Prazo de Financiamento (Meses)",
    "services.finance.calculate": "Calcular Prestação Mensal",
    "services.finance.monthly": "Prestação Mensal Estimada",
    "services.finance.disclaimer": "*Nota: Os valores apresentados são simulações meramente indicativas e não constituem uma proposta de crédito vinculativa ou contratual.",
    "services.finance.submit": "Solicitar Aprovação de Crédito",
    
    "services.retoma.title": "Avalie a sua Retoma",
    "services.retoma.subtitle": "Preencha os dados do seu veículo atual para receber uma proposta de compra rápida.",
    "services.retoma.brand": "Marca do seu veículo",
    "services.retoma.model": "Modelo e Versão",
    "services.retoma.year": "Ano de Registo",
    "services.retoma.kms": "Quilometragem (km)",
    "services.retoma.phone": "Contacto Telefónico / WhatsApp",
    "services.retoma.submit": "Submeter para Avaliação",
    "services.retoma.success": "Obrigado! Recebemos os dados do seu veículo e entraremos em contacto muito em breve.",

    // Company Page
    "company.title": "A Empresa - Gatilhauto",
    "company.subtitle": "Compromisso e seriedade no mercado automóvel há mais de uma década.",
    "company.text1": "A Gatilhauto nasceu com o objetivo claro de trazer transparência e profissionalismo ao mercado de carros usados em Pombal. Ao longo dos anos, tornámo-nos uma referência na região de Mata Mourisca e Pombal, baseando a nossa atividade na venda de veículos de qualidade superior e, acima de tudo, num serviço de pós-venda dedicado e fiável.",
    "company.text2": "O nosso foco não é apenas vender um automóvel, mas sim garantir que cada cliente e respetiva família encontrem a viatura que melhor serve as suas necessidades do dia a dia, com total segurança mecânica e transparência contratual.",
    "company.stats.cars": "+100 Viaturas Entregues",
    "company.stats.warranty": "Garantia Total",
    
    // FAQ Section
    "faq.title": "Perguntas Frequentes",
    "faq.subtitle": "Esclareça as suas dúvidas sobre a compra, venda e garantia das nossas viaturas.",
    "faq.q1": "Como funciona a garantia de 18 meses?",
    "faq.a1": "Todas as nossas viaturas incluem uma garantia completa de 18 meses em conformidade com a lei. A garantia cobre motor, caixa de velocidades e componentes mecânicos e elétricos principais, com assistência nas nossas oficinas parceiras autorizadas.",
    "faq.q2": "Aceitam carros com crédito por liquidar como retoma?",
    "faq.a2": "Sim, aceitamos! Tratamos de todo o processo de liquidação ou transferência do financiamento existente junto das entidades bancárias parceiras, facilitando a transição para a compra do seu novo veículo.",
    "faq.q3": "Quais os documentos necessários para a venda direta ou retoma?",
    "faq.a3": "Para avaliar e concluir o negócio, necessita do Cartão de Cidadão do proprietário, Documento Único Automóvel (DUA), Título de Registo de Propriedade e a última folha da Inspeção Periódica Obrigatória (IPO) com o selo correspondente.",
    "faq.q4": "Efetuam entregas em todo o país?",
    "faq.a4": "Sim, efetuamos entregas personalizadas do seu novo veículo em qualquer ponto de Portugal Continental. Consulte as condições de transporte e prazos com a nossa equipa comercial durante o processo de compra."
  },
  en: {
    "nav.home": "Home",
    "nav.stock": "Used Stock",
    "nav.services": "Trade-in",
    "nav.company": "About Us",
    "general.backToHome": "Back to Home",
    "general.loading": "Loading...",
    "general.contact": "Contact",
    "general.phone": "Phone",
    "general.email": "Email",
    "general.address": "Address",
    "general.hours": "Opening Hours",
    "general.hoursWeek": "Monday to Friday",
    "general.hoursWeekend": "Saturday and Sunday",
    "general.closed": "Closed",
    "general.whatsappLead": "Hello! I would like to get more information about the following vehicle: {carName} ({year}) priced at {price}€.",
    
    // Home Page
    "hero.badge": "Trusted Dealership in Pombal",
    "hero.title": "Used Cars Like New",
    "hero.subtitle": "Find verified options with 18-month complete warranty and personalized after-sales assistance in Pombal.",
    "hero.filter.brand": "Make",
    "hero.filter.model": "Model",
    "hero.filter.fuel": "Fuel",
    "hero.filter.transmission": "Transmission",
    "hero.filter.segment": "Segment",
    "hero.filter.search": "Search Vehicles",
    "hero.googleRating": "Google Rating 4.6 - Check our reviews",

    "segments.title": "Which segment are you looking for?",
    "segments.citadino": "City Cars",
    "segments.monovolume": "Minivans",
    "segments.carrinha": "Station Wagons / Families",
    "segments.suv": "SUVs / 4x4s",
    "segments.utilitario": "Hatchbacks",

    "featured.title": "Our Vehicles",
    "featured.viewAll": "View all stock",
    
    "values.title": "Why choose Gatilhauto?",
    "values.subtitle": "Transparency, quality, and complete commitment in after-sales service.",
    "values.feat1.title": "18-Month Warranty",
    "values.feat1.desc": "All of our vehicles include a comprehensive warranty for your total peace of mind.",
    "values.feat2.title": "Fully Inspected",
    "values.feat2.desc": "Before delivery, every car undergoes a detailed inspection in our official workshop.",
    "values.feat3.title": "Tailored Financing",
    "values.feat3.desc": "We get your car loan approved in less than 24 hours with the best rates in the market.",

    // Stock Page
    "stock.title": "Our Used Stock",
    "stock.subtitle": "Explore our inspected cars ready for immediate delivery.",
    "stock.filter.allBrands": "All Brands",
    "stock.filter.allFuels": "All Fuels",
    "stock.filter.allTransmissions": "All Transmissions",
    "stock.filter.placeholder": "Search by brand or model...",
    "stock.noResults": "We couldn't find any vehicles matching your filters.",
    "stock.card.year": "Year",
    "stock.card.kms": "Kms",
    "stock.card.viewDetails": "View Details",
    "stock.card.detailsTitle": "Technical Specifications",
    "stock.card.requestQuote": "Inquire / Reserve",
    "stock.card.financeSim": "Finance Simulation",
    "stock.filter.favorites": "Favorites",
    "stock.card.interested": "Interested",
    "stock.card.compare": "Compare",
    "stock.compare.title": "Vehicle Comparison",
    "stock.compare.clear": "Clear All",
    "stock.compare.limit": "Comparison limit reached (max 3 cars)",
    "stock.compare.selected": "Selected to compare",
    "stock.compare.selectTwo": "Choose another car to compare",
    "stock.compare.close": "Close",
    "stock.noFavorites": "You haven't added any vehicles to favorites yet. Click the heart icon ❤️ to save your favorite models!",

    // Services Page
    "services.title": "Trade-in Evaluation",
    "services.subtitle": "Want to sell your car or use it as a trade-in? Fill out the details below to receive a free evaluation.",
    "services.finance.title": "Car Loan Simulator",
    "services.finance.carValue": "Vehicle Value (€)",
    "services.finance.deposit": "Down Payment (€)",
    "services.finance.term": "Loan Term (Months)",
    "services.finance.calculate": "Calculate Monthly Payment",
    "services.finance.monthly": "Estimated Monthly Payment",
    "services.finance.disclaimer": "*Note: The values shown are indicative simulations and do not constitute a binding or contractual credit offer.",
    "services.finance.submit": "Apply for Credit Approval",
    
    "services.retoma.title": "Evaluate Your Trade-in",
    "services.retoma.subtitle": "Fill in the details of your current vehicle to receive a quick purchase offer.",
    "services.retoma.brand": "Your vehicle's brand",
    "services.retoma.model": "Model and Version",
    "services.retoma.year": "Registration Year",
    "services.retoma.kms": "Mileage (km)",
    "services.retoma.phone": "Phone / WhatsApp Contact",
    "services.retoma.submit": "Submit for Evaluation",
    "services.retoma.success": "Thank you! We have received your vehicle details and will get in touch shortly.",

    // Company Page
    "company.title": "The Company - Gatilhauto",
    "company.subtitle": "Commitment and integrity in the automotive market for over a decade.",
    "company.text1": "Gatilhauto was born with the clear goal of bringing transparency and professionalism to the used car market in Pombal. Over the years, we have become a reference in the Mata Mourisca and Pombal region, basing our business on selling top-quality cars and, above all, offering reliable after-sales support.",
    "company.text2": "Our focus is not just to sell a car, but to ensure that each client and their family find the vehicle that best serves their daily needs, with complete mechanical safety and contractual clarity.",
    "company.stats.warranty": "Full Warranty",
    
    // FAQ Section
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Clear up your doubts about purchasing, selling, and warranty of our vehicles.",
    "faq.q1": "How does the 18-month warranty work?",
    "faq.a1": "All of our vehicles include a complete 18-month warranty in compliance with the law. The warranty covers the engine, gearbox, and main mechanical and electrical components, with assistance at our authorized partner workshops.",
    "faq.q2": "Do you accept cars with outstanding loans as a trade-in?",
    "faq.a2": "Yes, we do! We handle the entire liquidation or transfer process of the existing financing with partner banking entities, facilitating the transition to the purchase of your new vehicle.",
    "faq.q3": "What documents are needed for direct sale or trade-in?",
    "faq.a3": "To evaluate and complete the transaction, you need the owner's Citizen Card, Single Automobile Document (DUA), Property Registration Title, and the latest Mandatory Periodic Inspection (IPO) sheet with the corresponding stamp.",
    "faq.q4": "Do you deliver nationwide?",
    "faq.a4": "Yes, we carry out personalized deliveries of your new vehicle to any point in Mainland Portugal. Consult shipping conditions and deadlines with our sales team during the purchase process."
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("carros_lang") || "pt";
  });

  useEffect(() => {
    localStorage.setItem("carros_lang", language);
  }, [language]);

  const t = (key) => {
    return translations[language]?.[key] || translations["pt"]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
