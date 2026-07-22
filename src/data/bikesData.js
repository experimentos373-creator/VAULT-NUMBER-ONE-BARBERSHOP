// ============================================================================
// ROUTE N109 - CATALOGO DE VEICULOS (MOTOS, SCOOTERS E VEICULOS ELETRICOS)
// ============================================================================

export const bikes = [
  {
    id: "voltrish-london-xrp",
    price: 1480,
    name: "Voltrish London XRP",
    brand: "Voltrish",
    brandSlug: "voltrish",
    isStar: true,
    category: "e-scooter",
    categoryLabel: {
      pt: "Velocípede com Motor Elétrico", en: "Electric Velocipede / Moped", es: "Velocípedo con Motor Eléctrico", fr: "Vélocipède Électrique", de: "Elektrisches Leichtkraftrad"
    },
    image: "/images/vehicles/voltrish_london.png",
    rating: "4.8 (19)",
    drivetrainShort: "Motor Roda 250W (Pico 500W)",
    suspensionShort: "Suspensão Hidráulica Frontal",
    maxSpeed: "25 km/h",
    autonomy: "~55 km",
    powerNominal: "250W",
    tags: ["Destaque", "Bateria Lítio Removível", "Uso Sem Carta"],
    specs: {
      frame: "Aço de liga de alta resistência",
      drivetrain: "Motor integrado na roda traseira (sem escovas)",
      suspension: "Forqueta telescópica dianteira / Amortecedores traseiros reforçados",
      brakes: "Travão de tambor dianteiro e disco hidráulico traseiro",
      wheels: "Jantes de 14 polegadas com pneus urbanos",
      motor: "Motor elétrico hub de alta eficiência 250W (limitado a 25 km/h)",
      battery: "Bateria de iões de lítio removível 48V 20Ah",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 95, climbing: 25, range: 55, offroad: 10 },
      performance: { battery: 55, agility: 90, power: 25, weight: 80 }
    }
  },
  {
    id: "vespy-sky",
    price: 1180,
    name: "Vespy Sky",
    brand: "Vespy",
    brandSlug: "vespy",
    isStar: true,
    category: "e-scooter",
    categoryLabel: {
      pt: "Velocípede Estilo Vintage", en: "Vintage Electric Scooter", es: "Velocípedo Retro", fr: "Vélocipède Style Rétro", de: "Retro Elektroroller"
    },
    image: "/images/vehicles/vespy_sky.png",
    rating: "4.7 (14)",
    drivetrainShort: "Motor Cubo 250W",
    suspensionShort: "Suspensão Dianteira Clássica",
    maxSpeed: "25 km/h",
    autonomy: "~40 km",
    powerNominal: "250W",
    tags: ["Estilo Clássico", "Compacta e Leve", "Uso Sem Carta"],
    specs: {
      frame: "Chassi de aço tubular estilo clássico",
      drivetrain: "Motor traseiro elétrico direto",
      suspension: "Suspensão dianteira clássica de braço oscilante",
      brakes: "Travão de disco dianteiro e tambor traseiro",
      wheels: "Pneus retro tubeless de 10 polegadas",
      motor: "Motor hub traseiro silencioso 250W",
      battery: "Bateria de iões de lítio 48V 12Ah",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 95, climbing: 15, range: 40, offroad: 5 },
      performance: { battery: 40, agility: 95, power: 15, weight: 85 }
    }
  },
  {
    id: "s4-gow",
    price: 1480,
    name: "S4 Gow",
    brand: "S4",
    brandSlug: "s4",
    isStar: false,
    category: "e-scooter",
    categoryLabel: {
      pt: "Velocípede com Motor Elétrico", en: "Electric Velocipede / Moped", es: "Velocípedo con Motor Eléctrico", fr: "Vélocipède Électrique", de: "Elektrisches Leichtkraftrad"
    },
    image: "/images/vehicles/s4_gow.png",
    rating: "4.7 (11)",
    drivetrainShort: "Motor Roda 500W",
    suspensionShort: "Duplo Amortecedor Hidráulico",
    maxSpeed: "25 km/h",
    autonomy: "~50 km",
    powerNominal: "500W",
    tags: ["Design Desportivo", "Bateria Lítio 60V", "Uso Sem Carta"],
    specs: {
      frame: "Chassi reforçado em liga de aço carbono",
      drivetrain: "Transmissão elétrica direta no cubo traseiro",
      suspension: "Garfo dianteiro telescópico / Amortecedores hidráulicos duplos",
      brakes: "Travão de disco dianteiro e traseiro",
      wheels: "Jantes de liga leve de 12 polegadas",
      motor: "Motor sem escovas brushless 500W (limitado a 25 km/h)",
      battery: "Bateria de iões de lítio 60V 20Ah",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 35, range: 50, offroad: 10 },
      performance: { battery: 50, agility: 88, power: 35, weight: 75 }
    }
  },
  {
    id: "scooty-250-power",
    price: 1380,
    name: "Scooty 250 Power",
    brand: "Scooty",
    brandSlug: "scooty",
    isStar: false,
    category: "e-scooter",
    categoryLabel: {
      pt: "Velocípede com Motor Elétrico", en: "Electric Velocipede / Moped", es: "Velocípedo con Motor Eléctrico", fr: "Vélocipède Électrique", de: "Elektrisches Leichtkraftrad"
    },
    image: "/images/vehicles/scooty_250_power.png",
    rating: "4.6 (15)",
    drivetrainShort: "Motor Roda 250W",
    suspensionShort: "Suspensão Comfort",
    maxSpeed: "25 km/h",
    autonomy: "~50 km",
    powerNominal: "250W",
    tags: ["Confortável", "Pneus Largos", "Uso Sem Carta"],
    specs: {
      frame: "Aço de liga leve de alta resistência",
      drivetrain: "Motor de cubo elétrico na roda traseira",
      suspension: "Forqueta dianteira telescópica",
      brakes: "Travão de tambor dianteiro e disco traseiro",
      wheels: "Rodas de 14 polegadas com pneus largos",
      motor: "Motor traseiro 250W para mobilidade urbana",
      battery: "Bateria de iões de lítio 48V 20Ah",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 95, climbing: 20, range: 50, offroad: 8 },
      performance: { battery: 50, agility: 90, power: 20, weight: 78 }
    }
  },
  {
    id: "zoa-plus-72v",
    price: 1550,
    name: "Zoa + 72v",
    brand: "Zoa",
    brandSlug: "zoa",
    isStar: false,
    category: "e-scooter",
    categoryLabel: {
      pt: "Scooter Elétrica Urbana", en: "Urban Electric Scooter", es: "Scooter Eléctrica Urbana", fr: "Scooter Électrique Urbain", de: "Urbaner Elektroroller"
    },
    image: "/images/vehicles/zoa_72v.png",
    rating: "4.8 (21)",
    drivetrainShort: "Motor Hub 1200W (Pico 2000W)",
    suspensionShort: "Suspensão Hidráulica Desportiva",
    maxSpeed: "45 km/h",
    autonomy: "~70 km",
    powerNominal: "1200W",
    tags: ["Binário Elevado", "Sistema 72V Eficiente", "Bateria Lítio Removível"],
    specs: {
      frame: "Estrutura tubular de aço com reforço central",
      drivetrain: "Motor elétrico integrado na roda traseira",
      suspension: "Suspensão dianteira telescópica / Amortecedores desportivos traseiros",
      brakes: "Travões de disco hidráulicos dianteiros e traseiros",
      wheels: "Jantes de liga desportivas de 12 polegadas tubeless",
      motor: "Motor elétrico hub de alta potência (1200W nominal, máx 45 km/h)",
      battery: "Bateria de lítio premium de 72V 20Ah",
      useKey: "bike.tinbot49e.use"
    },
    stats: {
      terrains: { highway: 10, urban: 90, climbing: 60, range: 70, offroad: 10 },
      performance: { battery: 70, agility: 85, power: 55, weight: 65 }
    }
  },
  {
    id: "neovolt-we-ride-72v",
    price: 1380,
    name: "NEOVOLT WE-RIDE 72V",
    brand: "Neovolt",
    brandSlug: "neovolt",
    isStar: false,
    category: "e-scooter",
    categoryLabel: {
      pt: "Scooter Elétrica Urbana", en: "Urban Electric Scooter", es: "Scooter Eléctrica Urbana", fr: "Scooter Électrique Urbain", de: "Urbaner Elektroroller"
    },
    image: "/images/vehicles/neovolt_weride.png",
    rating: "4.6 (12)",
    drivetrainShort: "Motor Roda 1000W",
    suspensionShort: "Amortecedor Hidráulico Traseiro",
    maxSpeed: "45 km/h",
    autonomy: "~60 km",
    powerNominal: "1000W",
    tags: ["Robusta", "Sistema de 72V", "Painel Digital LCD"],
    specs: {
      frame: "Chassi em liga de aço carbono",
      drivetrain: "Motor integrado na roda traseira",
      suspension: "Forqueta dianteira telescópica / Amortecedor hidráulico traseiro",
      brakes: "Travão de disco à frente e tambor traseiro",
      wheels: "Jantes de liga leve de 10 polegadas tubeless",
      motor: "Motor hub traseiro elétrico 1000W",
      battery: "Bateria de 72V 20Ah (Lítio ou Grafeno)",
      useKey: "bike.tinbot49e.use"
    },
    stats: {
      terrains: { highway: 10, urban: 95, climbing: 50, range: 60, offroad: 5 },
      performance: { battery: 60, agility: 82, power: 45, weight: 62 }
    }
  },
  {
    id: "neovolt-flow",
    price: 1580,
    name: "NEOVOLT FLOW",
    brand: "Neovolt",
    brandSlug: "neovolt",
    isStar: true,
    category: "e-scooter",
    categoryLabel: {
      pt: "Scooter Elétrica Urbana Premium", en: "Premium Urban Electric Scooter", es: "Scooter Eléctrica Premium", fr: "Scooter Électrique Premium", de: "Premium Elektroroller"
    },
    image: "/images/vehicles/neovolt_flow.png",
    rating: "4.9 (25)",
    drivetrainShort: "Motor Roda 1200W",
    suspensionShort: "Suspensão Hidráulica Comfort",
    maxSpeed: "45 km/h",
    autonomy: "~75 km",
    powerNominal: "1200W",
    tags: ["Destaque", "Bateria Grafeno de Alta Densidade", "Design Fluído"],
    specs: {
      frame: "Chassi aerodinâmico em aço de alta resistência",
      drivetrain: "Transmissão direta por motor na roda traseira",
      suspension: "Suspensão hidráulica progressiva dianteira e traseira",
      brakes: "Travão de disco dianteiro e traseiro com CBS",
      wheels: "Jantes de alumínio de 12 polegadas",
      motor: "Motor elétrico hub de alta estabilidade 1200W",
      battery: "Bateria de Grafeno 72V 23Ah de longa durabilidade",
      useKey: "bike.tinbot49e.use"
    },
    stats: {
      terrains: { highway: 15, urban: 90, climbing: 55, range: 75, offroad: 5 },
      performance: { battery: 75, agility: 88, power: 50, weight: 63 }
    }
  },
  {
    id: "neovolt-pulse",
    price: 1580,
    name: "Neovolt Pulse",
    brand: "Neovolt",
    brandSlug: "neovolt",
    isStar: true,
    category: "e-scooter",
    categoryLabel: {
      pt: "Scooter Elétrica Urbana Desportiva", en: "Sporty Urban Electric Scooter", es: "Scooter Eléctrica Deportiva", fr: "Scooter Électrique Sportif", de: "Sportlicher Elektroroller"
    },
    image: "/images/vehicles/neovolt_pulse.png",
    rating: "4.9 (32)",
    drivetrainShort: "Motor Roda 1200W (Pico Desportivo)",
    suspensionShort: "Amortecedores Desportivos Reguláveis",
    maxSpeed: "45 km/h",
    autonomy: "~70 km",
    powerNominal: "1200W",
    tags: ["Destaque", "Bateria Lítio Removível", "Visual Agressivo"],
    specs: {
      frame: "Estrutura reforçada de desenho desportivo",
      drivetrain: "Motor elétrico integrado na roda traseira",
      suspension: "Garfo hidráulico dianteiro / Amortecedores desportivos reguláveis",
      brakes: "Travão de disco hidráulico dianteiro e traseiro CBS",
      wheels: "Jantes de liga leve desportivas de 12 polegadas",
      motor: "Motor sem escovas brushless 1200W de resposta rápida",
      battery: "Bateria de iões de lítio removível 72V 23Ah",
      useKey: "bike.tinbot49e.use"
    },
    stats: {
      terrains: { highway: 15, urban: 90, climbing: 58, range: 70, offroad: 8 },
      performance: { battery: 70, agility: 90, power: 55, weight: 64 }
    }
  },
  {
    id: "neovolt-go-x",
    price: 1250,
    name: "NEOVOLT GO.X",
    brand: "Neovolt",
    brandSlug: "neovolt",
    isStar: false,
    category: "e-scooter",
    categoryLabel: {
      pt: "Velocípede com Motor Elétrico", en: "Electric Velocipede / Moped", es: "Velocípedo con Motor Eléctrico", fr: "Vélocipède Électrique", de: "Elektrisches Leichtkraftrad"
    },
    image: "/images/vehicles/neovolt_gox.png",
    rating: "4.7 (16)",
    drivetrainShort: "Motor Roda 250W",
    suspensionShort: "Suspensão Dianteira Comfort",
    maxSpeed: "25 km/h",
    autonomy: "~45 km",
    powerNominal: "250W",
    tags: ["Super Leve", "Bateria Lítio Removível", "Uso Sem Carta"],
    specs: {
      frame: "Aço de liga leve de alta resistência",
      drivetrain: "Motor integrated na roda traseira (transmissão direta)",
      suspension: "Forqueta dianteira telescópica",
      brakes: "Travão de tambor dianteiro e disco traseiro",
      wheels: "Jantes de 14 polegadas with pneus urbanos",
      motor: "Motor traseiro silencioso 250W",
      battery: "Bateria de iões de lítio removível 48V 20Ah",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 95, climbing: 20, range: 45, offroad: 10 },
      performance: { battery: 45, agility: 92, power: 18, weight: 82 }
    }
  },
  {
    id: "vision-sport-72v",
    price: 1450,
    name: "Vision modelo sport 72v",
    brand: "Vision",
    brandSlug: "vision",
    isStar: false,
    category: "e-scooter",
    categoryLabel: {
      pt: "Scooter Elétrica Urbana", en: "Urban Electric Scooter", es: "Scooter Eléctrica Urbana", fr: "Scooter Électrique Urbain", de: "Urbaner Elektroroller"
    },
    image: "/images/vehicles/vision_sport.png",
    rating: "4.8 (18)",
    drivetrainShort: "Motor Roda 1200W",
    suspensionShort: "Amortecedores Traseiros a Gás",
    maxSpeed: "45 km/h",
    autonomy: "~60 km",
    powerNominal: "1200W",
    tags: ["Suspensão a Gás", "Painel Desportivo", "Iluminação LED Completa"],
    specs: {
      frame: "Liga de aço com carenagens desportivas",
      drivetrain: "Transmissão direta por motor integrado",
      suspension: "Forqueta telescópica dianteira / Amortecedores traseiros desportivos a gás",
      brakes: "Travão de disco hidráulico dianteiro e traseiro com CBS",
      wheels: "Jantes desportivas de 12 polegadas",
      motor: "Motor hub traseiro sem escovas 1200W",
      battery: "Bateria de iões de lítio de 72V 20Ah",
      useKey: "bike.tinbot49e.use"
    },
    stats: {
      terrains: { highway: 10, urban: 90, climbing: 52, range: 60, offroad: 5 },
      performance: { battery: 60, agility: 86, power: 50, weight: 66 }
    }
  },
  {
    id: "azores",
    price: 1250,
    name: "AZORES",
    brand: "Azores",
    brandSlug: "azores",
    isStar: false,
    category: "e-scooter",
    categoryLabel: {
      pt: "Velocípede com Motor Elétrico", en: "Electric Velocipede / Moped", es: "Velocípedo con Motor Eléctrico", fr: "Vélocipède Électrique", de: "Elektrisches Leichtkraftrad"
    },
    image: "/images/vehicles/azores.png",
    rating: "4.7 (10)",
    drivetrainShort: "Motor Roda 250W",
    suspensionShort: "Suspensão Dianteira Comfort",
    maxSpeed: "25 km/h",
    autonomy: "~45 km",
    powerNominal: "250W",
    tags: ["Prática", "Citadina Simples", "Uso Sem Carta"],
    specs: {
      frame: "Chassi em aço de liga de alta resistência",
      drivetrain: "Motor traseiro direto",
      suspension: "Forqueta dianteira telescópica",
      brakes: "Travão de tambor dianteiro e disco traseiro",
      wheels: "Jantes de liga de 14 polegadas",
      motor: "Motor elétrico integrado na roda 250W",
      battery: "Bateria de iões de lítio 48V 20Ah",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 95, climbing: 18, range: 45, offroad: 8 },
      performance: { battery: 45, agility: 90, power: 18, weight: 80 }
    }
  },
  {
    id: "we-fun",
    price: 1250,
    name: "We-Fun",
    brand: "We-Fun",
    brandSlug: "we-fun",
    isStar: false,
    category: "e-scooter",
    categoryLabel: {
      pt: "Velocípede com Motor Elétrico", en: "Electric Velocipede / Moped", es: "Velocípedo con Motor Eléctrico", fr: "Vélocipède Électrique", de: "Elektrisches Leichtkraftrad"
    },
    image: "/images/vehicles/we_fun.png",
    rating: "4.6 (13)",
    drivetrainShort: "Motor Roda 250W",
    suspensionShort: "Suspensão Telescópica Dianteira",
    maxSpeed: "25 km/h",
    autonomy: "~48 km",
    powerNominal: "250W",
    tags: ["Design Jovem", "Bateria Lítio Removível", "Uso Sem Carta"],
    specs: {
      frame: "Aço de liga leve reforçado",
      drivetrain: "Motor de cubo elétrico traseiro",
      suspension: "Forqueta telescópica de mola",
      brakes: "Travões de disco dianteiros e traseiros",
      wheels: "Jantes de liga leve de 14 polegadas",
      motor: "Motor elétrico hub traseiro 250W",
      battery: "Bateria de iões de lítio 48V 20Ah",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 95, climbing: 22, range: 48, offroad: 10 },
      performance: { battery: 48, agility: 91, power: 20, weight: 79 }
    }
  },
  {
    id: "rio-j2-72v",
    price: 1450,
    name: "RIO J2 72V",
    brand: "Rio",
    brandSlug: "rio",
    isStar: false,
    category: "e-scooter",
    categoryLabel: {
      pt: "Scooter Elétrica Urbana", en: "Urban Electric Scooter", es: "Scooter Eléctrica Urbana", fr: "Scooter Électrique Urbain", de: "Urbaner Elektroroller"
    },
    image: "/images/vehicles/rio_j2_72v.png",
    rating: "4.8 (22)",
    drivetrainShort: "Motor Roda 1200W",
    suspensionShort: "Amortecimento Duplo Comfort",
    maxSpeed: "45 km/h",
    autonomy: "~60 km",
    powerNominal: "1200W",
    tags: ["Design Moderno", "Bateria Lítio 72V", "Painel Digital Avançado"],
    specs: {
      frame: "Liga de aço tubular de alta estabilidade",
      drivetrain: "Transmissão direta no cubo traseiro",
      suspension: "Suspensão dianteira telescópica / Amortecedores duplos traseiros",
      brakes: "Travões de disco hidráulicos dianteiros e traseiros com CBS",
      wheels: "Jantes de alumínio de 12 polegadas com pneus desportivos",
      motor: "Motor brushless elétrico na roda traseira 1200W",
      battery: "Bateria de lítio de 72V 20Ah",
      useKey: "bike.tinbot49e.use"
    },
    stats: {
      terrains: { highway: 10, urban: 90, climbing: 55, range: 60, offroad: 5 },
      performance: { battery: 60, agility: 85, power: 50, weight: 64 }
    }
  },
  {
    id: "voltrish-21",
    price: 899,
    name: "Voltrish 21",
    brand: "Voltrish",
    brandSlug: "voltrish",
    isStar: false,
    category: "e-scooter",
    categoryLabel: {
      pt: "Velocípede com Motor Elétrico", en: "Electric Velocipede / Moped", es: "Velocípedo con Motor Eléctrico", fr: "Vélocipède Électrique", de: "Elektrisches Leichtkraftrad"
    },
    image: "/images/vehicles/voltrish_21.png",
    rating: "4.6 (9)",
    drivetrainShort: "Motor Roda 250W",
    suspensionShort: "Forqueta Telescópica Dianteira",
    maxSpeed: "25 km/h",
    autonomy: "~35 km",
    powerNominal: "250W",
    tags: ["Entrada de Gama", "Preço Super Acessível", "Uso Sem Carta"],
    specs: {
      frame: "Aço tubular leve e prático",
      drivetrain: "Motor traseiro de cubo direto",
      suspension: "Forqueta telescópica dianteira simples",
      brakes: "Travões de tambor dianteiro e traseiro",
      wheels: "Jantes de 14 polegadas simples",
      motor: "Motor elétrico integrado 250W",
      battery: "Bateria de iões de lítio 48V 12Ah",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 95, climbing: 15, range: 35, offroad: 5 },
      performance: { battery: 35, agility: 93, power: 15, weight: 88 }
    }
  },
  {
    id: "vista-3-rodas",
    price: 1850,
    name: "Vista 3 Rodas",
    brand: "Vista",
    brandSlug: "vista",
    isStar: false,
    category: "e-scooter",
    categoryLabel: {
      pt: "Triciclo de Mobilidade Reduzida", en: "Mobility Scooter (3-Wheeled)", es: "Vehículo de Movilidad de 3 Ruedas", fr: "Scooter de Mobilité (3 roues)", de: "3-Rad Seniorenmobil"
    },
    image: "/images/vehicles/vista_3_rodas.png",
    rating: "4.9 (18)",
    drivetrainShort: "Motor Traseiro 800W com Diferencial",
    suspensionShort: "Suspensão Comfort Extra",
    maxSpeed: "25 km/h",
    autonomy: "~45 km",
    powerNominal: "800W",
    tags: ["Estabilidade Elevada", "Velocidade Regulável", "Uso Sem Carta"],
    specs: {
      frame: "Chassi reforçado em aço de acesso baixo",
      drivetrain: "Motor traseiro com eixo diferencial (marcha atrás integrada)",
      suspension: "Amortecedores duplos dianteiros e traseiros Comfort",
      brakes: "Travões mecânicos e hidráulicos com sistema de parqueamento",
      wheels: "3 rodas de 10 polegadas com pneus largos de alta aderência",
      motor: "Motor elétrico traseiro de 800W com excelente binário de subida",
      battery: "Bateria de 60V 20Ah (Chumbo-Ácido / Grafeno)",
      useKey: "bike.runner.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 40, range: 45, offroad: 20 },
      performance: { battery: 45, agility: 75, power: 40, weight: 50 }
    }
  },
  {
    id: "triciclo-kiev",
    price: 1150,
    name: "Triciclo Kiev",
    brand: "Kiev",
    brandSlug: "kiev",
    isStar: false,
    category: "e-scooter",
    categoryLabel: {
      pt: "Triciclo Utilitário / Carga", en: "Utility Electric Tricycle", es: "Triciclo Eléctrico de Carga", fr: "Tricycle Électrique de Charge", de: "Lasten-Dreirad"
    },
    image: "/images/vehicles/triciclo_kiev_showcase.png",
    rating: "4.7 (12)",
    drivetrainShort: "Motor Roda Traseiro 500W-800W",
    suspensionShort: "Suspensão de Carga Traseira",
    maxSpeed: "25 km/h",
    autonomy: "~40 km",
    powerNominal: "500W",
    tags: ["Excelente para Carga", "Cesto de Carga Traseiro", "Uso Sem Carta"],
    specs: {
      frame: "Estrutura robusta em aço tubular industrial",
      drivetrain: "Eixo de transmissão direto traseiro com diferencial",
      suspension: "Forqueta dianteira reforçada / Amortecedores duplos de carga atrás",
      brakes: "Travão a tambor traseiro e disco dianteiro",
      wheels: "Jantes reforçadas de 10 polegadas com pneus de carga",
      motor: "Motor elétrico robusto 500W com marcha atrás",
      battery: "Bateria de chumbo-ácido selada 60V 20Ah",
      useKey: "bike.runner.use"
    },
    stats: {
      terrains: { highway: 2, urban: 90, climbing: 30, range: 40, offroad: 15 },
      performance: { battery: 40, agility: 70, power: 30, weight: 52 }
    }
  },
  {
    id: "tokio-3-rodas-mobilidade",
    price: 1850,
    name: "Tokio 3 rodas mobilidade reduzida",
    brand: "Voltrish",
    brandSlug: "voltrish",
    isStar: false,
    category: "e-scooter",
    categoryLabel: {
      pt: "Triciclo de Mobilidade Reduzida", en: "Mobility Scooter (3-Wheeled)", es: "Vehículo de Movilidad de 3 Ruedas", fr: "Scooter de Mobilité (3 roues)", de: "3-Rad Seniorenmobil"
    },
    image: "/images/vehicles/tokio_3_rodas.png",
    rating: "4.8 (15)",
    drivetrainShort: "Motor Traseiro 1000W com Diferencial",
    suspensionShort: "Suspensão Total Hidráulica",
    maxSpeed: "25 km/h",
    autonomy: "~45 km",
    powerNominal: "1000W",
    tags: ["Marcha Atrás", "Cesto Traseiro Grande", "Segurança Máxima"],
    specs: {
      frame: "Chassi reforçado em liga de aço de acesso baixo",
      drivetrain: "Motor de tração traseira com diferencial traseiro",
      suspension: "Amortecedores hidráulicos nas 3 rodas para conforto total",
      brakes: "Travões de disco hidráulicos com manípulo de parque",
      wheels: "Jantes de alumínio de 10 polegadas com pneus de tração",
      motor: "Motor elétrico de 1000W (seletor de 3 velocidades: 12 / 17 / 25 km/h)",
      battery: "Bateria de iões de lítio ou grafeno 60V 20Ah",
      useKey: "bike.runner.use"
    },
    stats: {
      terrains: { highway: 5, urban: 92, climbing: 45, range: 45, offroad: 15 },
      performance: { battery: 45, agility: 78, power: 45, weight: 48 }
    }
  },
  {
    id: "neovolt-standard",
    price: 1180,
    name: "Neovolt",
    brand: "Neovolt",
    brandSlug: "neovolt",
    isStar: false,
    category: "e-scooter",
    categoryLabel: {
      pt: "Velocípede com Motor Elétrico", en: "Electric Velocipede / Moped", es: "Velocípedo con Motor Eléctrico", fr: "Vélocipède Électrique", de: "Elektrisches Leichtkraftrad"
    },
    image: "/images/vehicles/neovolt_standard.png",
    rating: "4.7 (14)",
    drivetrainShort: "Motor Roda 250W",
    suspensionShort: "Suspensão Telescópica Dianteira",
    maxSpeed: "25 km/h",
    autonomy: "~40 km",
    powerNominal: "250W",
    tags: ["Clássica e Prática", "Bateria Lítio 48V", "Uso Sem Carta"],
    specs: {
      frame: "Chassi em aço tubular leve",
      drivetrain: "Motor integrado na roda traseira",
      suspension: "Forqueta dianteira telescópica",
      brakes: "Travão de disco dianteiro e traseiro",
      wheels: "Jantes de liga de 14 polegadas",
      motor: "Motor elétrico hub silencioso 250W",
      battery: "Bateria de iões de lítio 48V 12Ah",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 95, climbing: 18, range: 40, offroad: 5 },
      performance: { battery: 40, agility: 92, power: 18, weight: 84 }
    }
  },
  {
    id: "lisbon-sx",
    price: 1180,
    name: "Lisbon Sx",
    brand: "Neovolt",
    brandSlug: "neovolt",
    isStar: false,
    category: "e-scooter",
    categoryLabel: {
      pt: "Velocípede com Motor Elétrico", en: "Electric Velocipede / Moped", es: "Velocípedo con Motor Eléctrico", fr: "Vélocipède Électrique", de: "Elektrisches Leichtkraftrad"
    },
    image: "/images/vehicles/lisbon_sx.png",
    rating: "4.7 (11)",
    drivetrainShort: "Motor Roda 250W",
    suspensionShort: "Suspensão Dianteira Comfort",
    maxSpeed: "25 km/h",
    autonomy: "~45 km",
    powerNominal: "250W",
    tags: ["Modelo Citadino", "Bateria Lítio Removível", "Uso Sem Carta"],
    specs: {
      frame: "Aço de liga de alta resistência",
      drivetrain: "Motor integrado na roda traseira",
      suspension: "Forqueta dianteira telescópica",
      brakes: "Travão de tambor dianteiro e disco traseiro",
      wheels: "Jantes de 14 polegadas com pneus urbanos",
      motor: "Motor elétrico traseiro 250W",
      battery: "Bateria de iões de lítio removível 48V 20Ah",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 95, climbing: 20, range: 45, offroad: 8 },
      performance: { battery: 45, agility: 90, power: 20, weight: 81 }
    }
  },
  {
    id: "triciclo-fun-2-lugares",
    price: 1850,
    name: "TRICICULO FUN 2 LUGARES",
    brand: "Vista",
    brandSlug: "vista",
    isStar: false,
    category: "e-scooter",
    categoryLabel: {
      pt: "Triciclo de Mobilidade de 2 Lugares", en: "2-Seater Mobility Scooter", es: "Vehículo de Movilidad de 2 Plazas", fr: "Scooter de Mobilité 2 places", de: "2-Sitzer Seniorenmobil"
    },
    image: "/images/vehicles/triciclo_fun.png",
    rating: "4.8 (14)",
    drivetrainShort: "Motor Traseiro 1000W com Diferencial",
    suspensionShort: "Suspensão Comfort Dupla",
    maxSpeed: "25 km/h",
    autonomy: "~45 km",
    powerNominal: "1000W",
    tags: ["Assento Duplo em Linha", "Marcha Atrás com Alarme", "Uso Sem Carta"],
    specs: {
      frame: "Liga de aço tubular de grande rigidez",
      drivetrain: "Eixo de transmissão direto traseiro com diferencial (marcha atrás)",
      suspension: "Amortecedores duplos dianteiros e traseiros Comfort reforçados",
      brakes: "Travões de disco hidráulicos dianteiros e traseiros",
      wheels: "Jantes de liga leve de 10 polegadas, pneus largos",
      motor: "Motor sem escovas brushless traseiro de 1000W",
      battery: "Bateria de lítio de 60V 20Ah",
      useKey: "bike.runner.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 42, range: 45, offroad: 15 },
      performance: { battery: 45, agility: 76, power: 45, weight: 46 }
    }
  },
  {
    id: "luna-qc-3-lugares",
    price: 1870,
    name: "LUNA QC 3 LUGARES",
    brand: "Luna",
    brandSlug: "luna",
    isStar: false,
    category: "e-scooter",
    categoryLabel: {
      pt: "Triciclo de Lazer / Mobilidade", en: "3-Wheeled / 3-Seater Leisure Vehicle", es: "Triciclo de Movilidad 3 Plazas", fr: "Tricycle de Loisir / 3 places", de: "3-Rad 3-Sitzer Freizeitfahrzeug"
    },
    image: "/images/vehicles/luna_qc_showcase.png",
    rating: "4.8 (19)",
    drivetrainShort: "Motor Traseiro 1000W com Diferencial",
    suspensionShort: "Suspensão Total Hidráulica",
    maxSpeed: "25 km/h",
    autonomy: "~45 km",
    powerNominal: "1000W",
    tags: ["Banco Triplo Ajustável", "Velocidades Limitáveis", "Uso Sem Carta"],
    specs: {
      frame: "Chassi tubular longo de alta resistência",
      drivetrain: "Transmissão traseira com diferencial elétrico (marcha atrás)",
      suspension: "Suspensão telescópica dianteira e traseira hidráulica progressiva",
      brakes: "Travão de disco dianteiro e traseiro com acionamento manual e de pé",
      wheels: "3 jantes de alumínio de 10 polegadas com pneus largos",
      motor: "Motor elétrico hub de 1000W com bom desempenho em declives",
      battery: "Bateria de 60V 20Ah (Lítio ou Grafeno)",
      useKey: "bike.runner.use"
    },
    stats: {
      terrains: { highway: 5, urban: 88, climbing: 40, range: 45, offroad: 12 },
      performance: { battery: 45, agility: 74, power: 42, weight: 44 }
    }
  },
  {
    id: "luna-qs-4-rodas",
    price: 1950,
    name: "LUNA QS 4 RODAS",
    brand: "Luna",
    brandSlug: "luna",
    isStar: true,
    category: "e-scooter",
    categoryLabel: {
      pt: "Quadriciclo de Mobilidade Reduzida", en: "4-Wheeled Mobility Scooter", es: "Vehículo de Movilidad de 4 Ruedas", fr: "Scooter de Mobilité 4 roues", de: "4-Rad Seniorenmobil"
    },
    image: "/images/vehicles/luna_qs_showcase.png",
    rating: "4.9 (23)",
    drivetrainShort: "Motor Traseiro 1000W com Diferencial",
    suspensionShort: "Suspensão Total Quadriciclo",
    maxSpeed: "25 km/h",
    autonomy: "~50 km",
    powerNominal: "1000W",
    tags: ["Destaque", "4 Rodas - Estabilidade Total", "Travão de Parque"],
    specs: {
      frame: "Chassi largo em aço de alta resistência com carenagem protectora",
      drivetrain: "Tração traseira com eixo diferencial e diferencial elétrico",
      suspension: "Amortecedores hidráulicos nas 4 rodas para atenção especial à estabilidade",
      brakes: "Travões hidráulicos com sistema de bloqueio de estacionamento",
      wheels: "4 jantes de liga de 10 polegadas com pneus desportivos tubeless",
      motor: "Motor sem escovas de 1000W de potência constante",
      battery: "Bateria de iões de lítio de 60V 20Ah",
      useKey: "bike.runner.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 45, range: 50, offroad: 25 },
      performance: { battery: 50, agility: 72, power: 45, weight: 42 }
    }
  },
  {
    id: "raider-mini-33",
    price: 1780,
    name: "RAIDER  MINI 33, 3 RODAS 3 LUGARES",
    brand: "Raider",
    brandSlug: "raider",
    isStar: false,
    category: "e-scooter",
    categoryLabel: {
      pt: "Triciclo de Lazer Familiar", en: "Leisure Family Tricycle (3-Seater)", es: "Triciclo de Ocio Familiar 3 Plazas", fr: "Tricycle de Loisir Familial 3 places", de: "Freizeit-Dreirad 3-Sitzer"
    },
    image: "/images/vehicles/raider_mini33_showcase.png",
    rating: "4.8 (17)",
    drivetrainShort: "Motor Traseiro 1000W com Diferencial",
    suspensionShort: "Suspensão Comfort Dupla",
    maxSpeed: "25 km/h",
    autonomy: "~50 km",
    powerNominal: "1000W",
    tags: ["Banco Ajustável Modular", "Bateria Lítio Removível", "3 Lugares Reais"],
    specs: {
      frame: "Estrutura tubular longa reforçada com para-choques",
      drivetrain: "Motor de tração traseira com diferencial e marcha atrás",
      suspension: "Forqueta dianteira telescópica / Amortecedores traseiros duplos",
      brakes: "Travões de disco dianteiro e traseiro de acionamento combinado",
      wheels: "Jantes de liga leve de 10 polegadas com pneus largos",
      motor: "Motor de 1000W silencioso (seletor de 3 velocidades e marcha atrás)",
      battery: "Bateria de iões de lítio removível de 60V 24Ah",
      useKey: "bike.runner.use"
    },
    stats: {
      terrains: { highway: 5, urban: 88, climbing: 42, range: 50, offroad: 15 },
      performance: { battery: 50, agility: 75, power: 45, weight: 45 }
    }
  },
  {
    id: "tokio-extreme-4-rodas-capota",
    price: 2300,
    name: "Tokio EXTREME 4 rodas com capota",
    brand: "Voltrish",
    brandSlug: "voltrish",
    isStar: true,
    category: "e-scooter",
    categoryLabel: {
      pt: "Quadriciclo de Mobilidade com Capota", en: "Enclosed Mobility Scooter (4-Wheeled)", es: "Vehículo de Movilidad con Techo", fr: "Scooter de Mobilité avec Capote", de: "Kabinenroller Seniorenmobil"
    },
    image: "/images/vehicles/tokio_extreme_showcase.png",
    rating: "5.0 (26)",
    drivetrainShort: "Motor Traseiro 1000W com Diferencial",
    suspensionShort: "Suspensão Total Elevada",
    maxSpeed: "25 km/h",
    autonomy: "~45 km",
    powerNominal: "1000W",
    tags: ["Destaque", "Capota Rígida e Para-brisas", "Limpador de Vidro Elétrico"],
    specs: {
      frame: "Chassi quadriciclo longo em aço de alta resistência com teto e para-brisas integrados",
      drivetrain: "Motor traseiro com eixo diferencial (marcha atrás integrada com câmara)",
      suspension: "Suspensão independente nas 4 rodas com amortecimento regulável",
      brakes: "Travão hidráulico integral de disco às 4 rodas",
      wheels: "4 jantes de liga leve de 10 polegadas com pneus tubeless largos",
      motor: "Motor elétrico com diferencial de 1000W (marcha atrás e velocidades selecionáveis)",
      battery: "Bateria de lítio premium de 60V 20Ah",
      useKey: "bike.runner.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 48, range: 45, offroad: 20 },
      performance: { battery: 45, agility: 70, power: 45, weight: 35 }
    }
  },
  {
    id: "rio-j2-60v",
    price: 1350,
    name: "RIO J2 60V",
    brand: "Rio",
    brandSlug: "rio",
    isStar: false,
    category: "e-scooter",
    categoryLabel: {
      pt: "Scooter Elétrica Urbana", en: "Urban Electric Scooter", es: "Scooter Eléctrica Urbana", fr: "Scooter Électrique Urbain", de: "Urbaner Elektroroller"
    },
    image: "/images/vehicles/rio_j2_60v.png",
    rating: "4.7 (19)",
    drivetrainShort: "Motor Roda 1000W",
    suspensionShort: "Amortecimento Duplo Comfort",
    maxSpeed: "25 km/h ou 45 km/h",
    autonomy: "~50 km",
    powerNominal: "1000W",
    tags: ["Excelente Relação Preço", "Bateria Lítio 60V", "Citadina Ágil"],
    specs: {
      frame: "Liga de aço tubular de alta estabilidade",
      drivetrain: "Transmissão direta no cubo traseiro",
      suspension: "Suspensão dianteira telescópica / Amortecedores duplos traseiros",
      brakes: "Travões de disco hidráulicos dianteiros e traseiros com CBS",
      wheels: "Jantes de alumínio de 12 polegadas com pneus urbanos",
      motor: "Motor brushless elétrico na roda traseira 1000W",
      battery: "Bateria de lítio de 60V 20Ah",
      useKey: "bike.tinbot49e.use"
    },
    stats: {
      terrains: { highway: 10, urban: 92, climbing: 48, range: 50, offroad: 5 },
      performance: { battery: 50, agility: 86, power: 45, weight: 68 }
    }
  }
];

export const catalogSlugs = {
  pt: "catalogo",
  en: "catalog",
  es: "catalogo",
  fr: "catalogue",
  de: "katalog"
};
