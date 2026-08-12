// ============================================================================
// ROUTE N109 - CATALOGO DE VEICULOS (MOTOS, SCOOTERS E VEICULOS ELETRICOS)
// ============================================================================

export const bikes = [
  {
    id: "lisbon-sx",
    price: 1180,
    name: "Lisbon Sx",
    brand: "Lisbon",
    brandSlug: "lisbon",
    isStar: true,
    category: "e-scooter",
    categoryLabel: {
      pt: "Veloc\u00edpede / Scooter El\u00e9trica", en: "Electric Vehicle", es: "Vehículo Eléctrico", fr: "Véhicule Électrique", de: "Elektrisches Fahrzeug"
    },
    image: "/images/vehicles/lisbon_sx.webp",
    rating: "4.8 (15)",
    drivetrainShort: "Motor Elétrico de Alta Eficiência",
    suspensionShort: "Suspensão Hidráulica Dianteira/Traseira",
    maxSpeed: "25 km/h (Uso Sem Carta)",
    autonomy: "40 a 60 km",
    powerNominal: "250W",
    tags: ["Uso Sem Carta", "Mobilidade Sustentável"],
    specs: {
      frame: "Chassi em liga de aço de alta resistência",
      drivetrain: "Motor traseiro de cubo / transmissão elétrica",
      suspension: "Forqueta dianteira hidráulica e amortecedores traseiros",
      brakes: "Sistema de travagem de disco/tambor",
      wheels: "Jantes de alta resistência com pneus tubeless",
      motor: "Motor de 250W",
      battery: "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 35, range: 45, offroad: 10 },
      performance: { battery: 50, agility: 80, power: 40, weight: 60 }
    }
  ,
    features: ["Velocípede sem carta", "Alarme"],
    warranty: {
      motor: "2 anos de garantia moto",
      battery: "6 meses de garantia de bateria"
    }
  },
  {
    id: "neovolt-standard",
    price: 1180,
    name: "Neovolt",
    brand: "Neovolt",
    brandSlug: "neovolt",
    isStar: true,
    category: "e-scooter",
    categoryLabel: {
      pt: "Veloc\u00edpede / Scooter El\u00e9trica", en: "Electric Vehicle", es: "Vehículo Eléctrico", fr: "Véhicule Électrique", de: "Elektrisches Fahrzeug"
    },
    image: "/images/vehicles/neovolt_standard.webp",
    rating: "4.8 (15)",
    drivetrainShort: "Motor Elétrico Neovolt Standard",
    suspensionShort: "Suspensão Hidráulica Conforto",
    maxSpeed: "25 km/h (Uso Sem Carta)",
    autonomy: "40 a 60 km",
    powerNominal: "250W",
    tags: ["Uso Sem Carta", "Mobilidade Sustentável"],
    specs: {
      frame: "Chassi em liga de aço de alta resistência",
      drivetrain: "Motor traseiro de cubo / transmissão elétrica",
      suspension: "Forqueta dianteira hidráulica e amortecedores traseiros",
      brakes: "Sistema de travagem de disco/tambor",
      wheels: "Jantes de alta resistência com pneus tubeless",
      motor: "Motor de 250W",
      battery: "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 35, range: 45, offroad: 10 },
      performance: { battery: 50, agility: 80, power: 40, weight: 60 }
    }
  ,
    features: ["Velocípede sem carta", "Travão de disco frente e atrás", "Top case", "Iluminação LED", "Alarme"],
    colors: ["Preto com Azul", "Preto com Vermelho"],
    warranty: {
      motor: "2 anos de garantia motor e controladora",
      battery: "6 meses de garantia de bateria"
    }
  },
  {
    id: "vortex-fox",
    price: 1250,
    name: "Vortex Fox",
    brand: "Vespy",
    brandSlug: "vespy",
    isStar: true,
    category: "e-scooter",
    categoryLabel: {
      pt: "Veloc\u00edpede / Scooter El\u00e9trica", en: "Electric Vehicle", es: "Vehículo Eléctrico", fr: "Véhicule Électrique", de: "Elektrisches Fahrzeug"
    },
    image: "/images/vehicles/vortex_fox.webp",
    rating: "4.8 (15)",
    drivetrainShort: "Motor Elétrico Vortex Fox 60V",
    suspensionShort: "Forqueta Hidráulica e Duplo Amortecedor",
    maxSpeed: "40 km/h (Uso Sem Carta)",
    autonomy: "40 a 60 km",
    powerNominal: "250W",
    tags: ["Uso Sem Carta", "Mobilidade Sustentável"],
    specs: {
      frame: "Chassi em liga de aço de alta resistência",
      drivetrain: "Motor traseiro de cubo / transmissão elétrica",
      suspension: "Forqueta dianteira hidráulica e amortecedores traseiros",
      brakes: "Sistema de travagem de disco/tambor",
      wheels: "Jantes de alta resistência com pneus tubeless",
      motor: "Motor de 250W",
      battery: "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 35, range: 45, offroad: 10 },
      performance: { battery: 50, agility: 80, power: 40, weight: 60 }
    }
  ,
    features: ["Velocípede que não necessita de carta de habilitação", "Velocidade máxima de até 40km/h", "Autonomia de 40 a 60 km", "Travão de disco frente e atrás", "Alarme", "Bateria de Chumbo Ácido"],
    warranty: {
      motor: "2 anos de garantia motor e controladora",
      battery: "6 meses de garantia de bateria"
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
      pt: "Triciclo / Quadriciclo de Mobilidade", en: "Electric Vehicle", es: "Vehículo Eléctrico", fr: "Véhicule Électrique", de: "Elektrisches Fahrzeug"
    },
    image: "/images/vehicles/tokio_3_rodas.webp",
    rating: "4.8 (15)",
    drivetrainShort: "Motor Elétrico com Marcha-Atrás e Diferencial",
    suspensionShort: "Suspensão Conforto Tripla para Mobilidade Reduzida",
    maxSpeed: "40 km/h (3 Modos + Reverse)",
    autonomy: "40 a 60 km",
    powerNominal: "250W",
    tags: ["Uso Sem Carta", "Mobilidade Sustentável"],
    specs: {
      frame: "Chassi em liga de aço de alta resistência",
      drivetrain: "Motor traseiro de cubo / transmissão elétrica",
      suspension: "Forqueta dianteira hidráulica e amortecedores traseiros",
      brakes: "Sistema de travagem de disco/tambor",
      wheels: "Jantes de alta resistência com pneus tubeless",
      motor: "Motor de 250W",
      battery: "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 35, range: 45, offroad: 10 },
      performance: { battery: 50, agility: 80, power: 40, weight: 60 }
    }
  ,
    features: ["Velocípede que não necessita de carta de habilitação", "Velocidade máxima de até 40km/h", "Autonomia de 40 a 60 km", "Travão de disco frente e atrás", "Alarme", "Sensor de assento"],
    warranty: {
      motor: "2 anos de garantia moto",
      battery: "6 meses de garantia de bateria"
    }
  },
  {
    id: "tokio-i32-4-rodas",
    price: 1950,
    name: "Tokio i3.2 4 Rodas",
    brand: "Voltrish",
    brandSlug: "voltrish",
    isStar: false,
    category: "e-scooter",
    categoryLabel: {
      pt: "Triciclo / Quadriciclo de Mobilidade", en: "Electric Vehicle", es: "Vehículo Eléctrico", fr: "Véhicule Électrique", de: "Elektrisches Fahrzeug"
    },
    image: "/images/vehicles/tokio_i32_4_rodas.webp",
    rating: "4.8 (15)",
    drivetrainShort: "Quadriciclo Elétrico com Tração Estável",
    suspensionShort: "Suspensão Independente às 4 Rodas",
    maxSpeed: "20 km/h (4 Rodas Estáveis)",
    autonomy: "40 a 60 km",
    powerNominal: "250W",
    tags: ["Uso Sem Carta", "Mobilidade Sustentável"],
    specs: {
      frame: "Chassi em liga de aço de alta resistência",
      drivetrain: "Motor traseiro de cubo / transmissão elétrica",
      suspension: "Forqueta dianteira hidráulica e amortecedores traseiros",
      brakes: "Sistema de travagem de disco/tambor",
      wheels: "Jantes de alta resistência com pneus tubeless",
      motor: "Motor de 250W",
      battery: "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 35, range: 45, offroad: 10 },
      performance: { battery: 50, agility: 80, power: 40, weight: 60 }
    }
  ,
    features: ["Velocípede que não necessita de carta de habilitação", "Velocidade máxima de até 20km/h", "Autonomia de 40 a 60 km", "Alarme", "Sensor de assento"],
    warranty: {
      motor: "2 anos de garantia moto",
      battery: "6 meses de garantia de bateria"
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
      pt: "Triciclo / Quadriciclo de Mobilidade", en: "Electric Vehicle", es: "Vehículo Eléctrico", fr: "Véhicule Électrique", de: "Elektrisches Fahrzeug"
    },
    image: "/images/vehicles/tokio_extreme_4_rodas.webp",
    rating: "4.8 (15)",
    drivetrainShort: "Quadriciclo Cabinado com Capota Integrada",
    suspensionShort: "Suspensão Independente e Proteção Intempérie Capota",
    maxSpeed: "25 km/h (Quadriciclo Cabinado)",
    autonomy: "40 a 60 km",
    powerNominal: "250W",
    tags: ["Uso Sem Carta", "Mobilidade Sustentável"],
    specs: {
      frame: "Chassi em liga de aço de alta resistência",
      drivetrain: "Motor traseiro de cubo / transmissão elétrica",
      suspension: "Forqueta dianteira hidráulica e amortecedores traseiros",
      brakes: "Sistema de travagem de disco/tambor",
      wheels: "Jantes de alta resistência com pneus tubeless",
      motor: "Motor de 250W",
      battery: "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 35, range: 45, offroad: 10 },
      performance: { battery: 50, agility: 80, power: 40, weight: 60 }
    }
  ,
    features: ["Velocípede que não necessita de carta de habilitação", "Velocidade máxima de até 25km/h", "Autonomia de 40 a 60 km", "Travão de disco frente e atrás", "Alarme", "Sensor de assento"],
    warranty: {
      motor: "2 anos de garantia moto",
      battery: "6 meses de garantia de bateria"
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
      pt: "Veloc\u00edpede / Scooter El\u00e9trica", en: "Electric Vehicle", es: "Vehículo Eléctrico", fr: "Véhicule Électrique", de: "Elektrisches Fahrzeug"
    },
    image: "/images/vehicles/neovolt_weride.webp",
    rating: "4.8 (15)",
    drivetrainShort: "Motor Elétrico 72V Brushless High Torque",
    suspensionShort: "Suspensão Hidráulica Dianteira e Duplo Amortecedor Traseiro",
    maxSpeed: "25 km/h (Sem Carta)",
    autonomy: "40 a 60 km",
    powerNominal: "250W",
    tags: ["Uso Sem Carta", "Mobilidade Sustentável"],
    specs: {
      frame: "Chassi em liga de aço de alta resistência",
      drivetrain: "Motor traseiro de cubo / transmissão elétrica",
      suspension: "Forqueta dianteira hidráulica e amortecedores traseiros",
      brakes: "Sistema de travagem de disco/tambor",
      wheels: "Jantes de alta resistência com pneus tubeless",
      motor: "Motor de 250W",
      battery: "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 35, range: 45, offroad: 10 },
      performance: { battery: 50, agility: 80, power: 40, weight: 60 }
    }
  ,
    features: ["Velocípede sem carta", "Travão de disco frente e atrás", "Top case", "Iluminação LED", "Alarme"],
    colors: ["Preto", "Cinzento", "Branco"],
    warranty: {
      motor: "2 anos de garantia motor e controladora",
      battery: "6 meses de garantia de bateria"
    }
  },
  {
    id: "voltrish-london-xrp",
    price: 1480,
    name: "VOLTRISH LONDON XRP",
    brand: "Voltrish",
    brandSlug: "voltrish",
    isStar: true,
    category: "e-scooter",
    categoryLabel: {
      pt: "Veloc\u00edpede / Scooter El\u00e9trica", en: "Electric Vehicle", es: "Vehículo Eléctrico", fr: "Véhicule Électrique", de: "Elektrisches Fahrzeug"
    },
    image: "/images/vehicles/voltrish_london_xrp.webp",
    rating: "4.8 (15)",
    drivetrainShort: "Motor Elétrico London XRP 800W",
    suspensionShort: "Suspensão Hidráulica Dupla",
    maxSpeed: "25 km/h (Uso Sem Carta)",
    autonomy: "40 a 60 km",
    powerNominal: "250W",
    tags: ["Uso Sem Carta", "Mobilidade Sustentável"],
    specs: {
      frame: "Chassi em liga de aço de alta resistência",
      drivetrain: "Motor traseiro de cubo / transmissão elétrica",
      suspension: "Forqueta dianteira hidráulica e amortecedores traseiros",
      brakes: "Sistema de travagem de disco/tambor",
      wheels: "Jantes de alta resistência com pneus tubeless",
      motor: "Motor de 250W",
      battery: "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 35, range: 45, offroad: 10 },
      performance: { battery: 50, agility: 80, power: 40, weight: 60 }
    }
  ,
    features: ["Velocípede sem carta", "Travão de disco frente e atrás", "Top case", "Iluminação LED", "72 Volts", "Alarme"],
    warranty: {
      motor: "2 anos de garantia motor e controladora",
      battery: "6 meses de garantia de bateria"
    }
  },
  {
    id: "vespy-sky",
    price: 1180,
    name: "Vespy Sky",
    brand: "Vespy",
    brandSlug: "vespy",
    isStar: false,
    category: "e-scooter",
    categoryLabel: {
      pt: "Veloc\u00edpede / Scooter El\u00e9trica", en: "Electric Vehicle", es: "Vehículo Eléctrico", fr: "Véhicule Électrique", de: "Elektrisches Fahrzeug"
    },
    image: "/images/vehicles/vortex_sky.webp",
    rating: "4.8 (15)",
    drivetrainShort: "Motor Elétrico Vortex Sky",
    suspensionShort: "Suspensão Hidráulica Urbana",
    maxSpeed: "25 km/h (Uso Sem Carta)",
    autonomy: "40 a 60 km",
    powerNominal: "250W",
    tags: ["Uso Sem Carta", "Mobilidade Sustentável"],
    specs: {
      frame: "Chassi em liga de aço de alta resistência",
      drivetrain: "Motor traseiro de cubo / transmissão elétrica",
      suspension: "Forqueta dianteira hidráulica e amortecedores traseiros",
      brakes: "Sistema de travagem de disco/tambor",
      wheels: "Jantes de alta resistência com pneus tubeless",
      motor: "Motor de 250W",
      battery: "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 35, range: 45, offroad: 10 },
      performance: { battery: 50, agility: 80, power: 40, weight: 60 }
    }
  ,
    features: ["Velocípede sem carta", "60V 20aH Bateria de Chumbo", "Travão de disco frente e atrás", "Marcha-Atrás", "Top case", "Iluminação LED", "Alarme"],
    warranty: {
      motor: "2 anos de garantia motor e controladora",
      battery: "6 meses de garantia de bateria"
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
      pt: "Veloc\u00edpede / Scooter El\u00e9trica", en: "Electric Vehicle", es: "Vehículo Eléctrico", fr: "Véhicule Électrique", de: "Elektrisches Fahrzeug"
    },
    image: "/images/vehicles/s4_gow.webp",
    rating: "4.8 (15)",
    drivetrainShort: "Motor Elétrico S4 Gow 800W",
    suspensionShort: "Suspensão Dianteira/Traseira Conforto",
    maxSpeed: "25 km/h (Uso Sem Carta)",
    autonomy: "40 a 60 km",
    powerNominal: "250W",
    tags: ["Uso Sem Carta", "Mobilidade Sustentável"],
    specs: {
      frame: "Chassi em liga de aço de alta resistência",
      drivetrain: "Motor traseiro de cubo / transmissão elétrica",
      suspension: "Forqueta dianteira hidráulica e amortecedores traseiros",
      brakes: "Sistema de travagem de disco/tambor",
      wheels: "Jantes de alta resistência com pneus tubeless",
      motor: "Motor de 250W",
      battery: "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 35, range: 45, offroad: 10 },
      performance: { battery: 50, agility: 80, power: 40, weight: 60 }
    }
  ,
    features: ["Velocípede sem carta", "Travão de disco frente e atrás", "Top case", "Iluminação LED", "72 Volts", "Alarme"],
    colors: ["Branco com Vermelho", "Cinza com Vermelho"],
    warranty: {
      motor: "2 anos de garantia motor e controladora",
      battery: "6 meses de garantia de bateria"
    }
  },
  {
    id: "scooty-250-power",
    price: 1380,
    name: "SCOOTY 250 POWER",
    brand: "Scooty",
    brandSlug: "scooty",
    isStar: false,
    category: "e-scooter",
    categoryLabel: {
      pt: "Veloc\u00edpede / Scooter El\u00e9trica", en: "Electric Vehicle", es: "Vehículo Eléctrico", fr: "Véhicule Électrique", de: "Elektrisches Fahrzeug"
    },
    image: "/images/vehicles/scooty_250_power.webp",
    rating: "4.8 (15)",
    drivetrainShort: "Motor Elétrico Scooty 250 Power",
    suspensionShort: "Suspensão Hidráulica Dianteira",
    maxSpeed: "25 km/h (Uso Sem Carta)",
    autonomy: "40 a 70 km",
    powerNominal: "250W",
    tags: ["Uso Sem Carta", "Mobilidade Sustentável"],
    specs: {
      frame: "Chassi em liga de aço de alta resistência",
      drivetrain: "Motor traseiro de cubo / transmissão elétrica",
      suspension: "Forqueta dianteira hidráulica e amortecedores traseiros",
      brakes: "Sistema de travagem de disco/tambor",
      wheels: "Jantes de alta resistência com pneus tubeless",
      motor: "Motor de 250W",
      battery: "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 35, range: 45, offroad: 10 },
      performance: { battery: 50, agility: 80, power: 40, weight: 60 }
    }
  ,
    features: ["Velocípede sem carta", "72V 20aH Bateria de Chumbo", "Travão de disco frente e atrás", "Top case", "Iluminação LED", "Alarme"],
    warranty: {
      motor: "2 anos de garantia motor e controladora",
      battery: "6 meses de garantia de bateria"
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
      pt: "Veloc\u00edpede / Scooter El\u00e9trica", en: "Electric Vehicle", es: "Vehículo Eléctrico", fr: "Véhicule Électrique", de: "Elektrisches Fahrzeug"
    },
    image: "/images/vehicles/zoa_72v.webp",
    rating: "4.8 (15)",
    drivetrainShort: "Motor Elétrico de Alta Eficiência 72V",
    suspensionShort: "Forqueta Hidráulica e Suspensão Traseira Reforçada",
    maxSpeed: "25 km/h (Sem Carta)",
    autonomy: "40 a 60 km",
    powerNominal: "250W",
    tags: ["Uso Sem Carta", "Mobilidade Sustentável"],
    specs: {
      frame: "Chassi em liga de aço de alta resistência",
      drivetrain: "Motor traseiro de cubo / transmissão elétrica",
      suspension: "Forqueta dianteira hidráulica e amortecedores traseiros",
      brakes: "Sistema de travagem de disco/tambor",
      wheels: "Jantes de alta resistência com pneus tubeless",
      motor: "Motor de 250W",
      battery: "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 35, range: 45, offroad: 10 },
      performance: { battery: 50, agility: 80, power: 40, weight: 60 }
    }
  ,
    features: ["Velocípede sem carta", "Travão de disco frente e atrás", "Top case", "Iluminação LED", "72 Volts", "Alarme"],
    colors: ["Cinza", "Preto"],
    warranty: {
      motor: "2 anos de garantia motor e controladora",
      battery: "6 meses de garantia de bateria"
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
      pt: "Veloc\u00edpede / Scooter El\u00e9trica", en: "Electric Vehicle", es: "Vehículo Eléctrico", fr: "Véhicule Électrique", de: "Elektrisches Fahrzeug"
    },
    image: "/images/vehicles/neovolt_flow.webp",
    rating: "4.8 (15)",
    drivetrainShort: "Motor Elétrico Neovolt Flow",
    suspensionShort: "Suspensão Hidráulica Dupla",
    maxSpeed: "25 km/h (Uso Sem Carta)",
    autonomy: "40 a 60 km",
    powerNominal: "250W",
    tags: ["Uso Sem Carta", "Mobilidade Sustentável"],
    specs: {
      frame: "Chassi em liga de aço de alta resistência",
      drivetrain: "Motor traseiro de cubo / transmissão elétrica",
      suspension: "Forqueta dianteira hidráulica e amortecedores traseiros",
      brakes: "Sistema de travagem de disco/tambor",
      wheels: "Jantes de alta resistência com pneus tubeless",
      motor: "Motor de 250W",
      battery: "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 35, range: 45, offroad: 10 },
      performance: { battery: 50, agility: 80, power: 40, weight: 60 }
    }
  ,
    features: ["Velocípede sem carta", "Travão de disco frente e atrás", "Alarme"],
    warranty: {
      motor: "2 anos de garantia motor e controladora",
      battery: "6 meses de garantia de bateria"
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
      pt: "Veloc\u00edpede / Scooter El\u00e9trica", en: "Electric Vehicle", es: "Vehículo Eléctrico", fr: "Véhicule Électrique", de: "Elektrisches Fahrzeug"
    },
    image: "/images/vehicles/neovolt_pulse.webp",
    rating: "4.8 (15)",
    drivetrainShort: "Motor Elétrico Neovolt Pulse",
    suspensionShort: "Suspensão Hidráulica Sport",
    maxSpeed: "25 km/h (Uso Sem Carta)",
    autonomy: "40 a 60 km",
    powerNominal: "250W",
    tags: ["Uso Sem Carta", "Mobilidade Sustentável"],
    specs: {
      frame: "Chassi em liga de aço de alta resistência",
      drivetrain: "Motor traseiro de cubo / transmissão elétrica",
      suspension: "Forqueta dianteira hidráulica e amortecedores traseiros",
      brakes: "Sistema de travagem de disco/tambor",
      wheels: "Jantes de alta resistência com pneus tubeless",
      motor: "Motor de 250W",
      battery: "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 35, range: 45, offroad: 10 },
      performance: { battery: 50, agility: 80, power: 40, weight: 60 }
    }
  ,
    features: ["Velocípede sem carta", "Travão de disco frente e atrás", "Alarme"],
    warranty: {
      motor: "2 anos de garantia motor e controladora",
      battery: "6 meses de garantia de bateria"
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
      pt: "Veloc\u00edpede / Scooter El\u00e9trica", en: "Electric Vehicle", es: "Vehículo Eléctrico", fr: "Véhicule Électrique", de: "Elektrisches Fahrzeug"
    },
    image: "/images/vehicles/neovolt_gox.webp",
    rating: "4.8 (15)",
    drivetrainShort: "Motor Elétrico Neovolt GO.X",
    suspensionShort: "Suspensão Hidráulica Urbana",
    maxSpeed: "25 km/h (Uso Sem Carta)",
    autonomy: "40 a 60 km",
    powerNominal: "250W",
    tags: ["Uso Sem Carta", "Mobilidade Sustentável"],
    specs: {
      frame: "Chassi em liga de aço de alta resistência",
      drivetrain: "Motor traseiro de cubo / transmissão elétrica",
      suspension: "Forqueta dianteira hidráulica e amortecedores traseiros",
      brakes: "Sistema de travagem de disco/tambor",
      wheels: "Jantes de alta resistência com pneus tubeless",
      motor: "Motor de 250W",
      battery: "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 35, range: 45, offroad: 10 },
      performance: { battery: 50, agility: 80, power: 40, weight: 60 }
    }
  ,
    features: ["Velocípede sem carta", "Travão de disco frente e atrás", "Alarme"],
    warranty: {
      motor: "2 anos de garantia motor e controladora",
      battery: "6 meses de garantia de bateria"
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
      pt: "Veloc\u00edpede / Scooter El\u00e9trica", en: "Electric Vehicle", es: "Vehículo Eléctrico", fr: "Véhicule Électrique", de: "Elektrisches Fahrzeug"
    },
    image: "/images/vehicles/vision_sport.webp",
    rating: "4.8 (15)",
    drivetrainShort: "Motor Elétrico Sport 72V",
    suspensionShort: "Suspensão Sport Ajustável",
    maxSpeed: "25 km/h (Sem Carta)",
    autonomy: "40 a 60 km",
    powerNominal: "250W",
    tags: ["Uso Sem Carta", "Mobilidade Sustentável"],
    specs: {
      frame: "Chassi em liga de aço de alta resistência",
      drivetrain: "Motor traseiro de cubo / transmissão elétrica",
      suspension: "Forqueta dianteira hidráulica e amortecedores traseiros",
      brakes: "Sistema de travagem de disco/tambor",
      wheels: "Jantes de alta resistência com pneus tubeless",
      motor: "Motor de 250W",
      battery: "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 35, range: 45, offroad: 10 },
      performance: { battery: 50, agility: 80, power: 40, weight: 60 }
    }
  ,
    features: ["Velocípede sem carta", "Travão de disco frente e atrás", "Alarme"],
    warranty: {
      motor: "2 anos de garantia motor e controladora",
      battery: "6 meses de garantia de bateria"
    }
  },
  {
    id: "f9-voltrish",
    price: 1480,
    name: "F9 VOLTRISH",
    brand: "Voltrish",
    brandSlug: "voltrish",
    isStar: false,
    category: "e-scooter",
    categoryLabel: {
      pt: "Veloc\u00edpede / Scooter El\u00e9trica", en: "Electric Vehicle", es: "Vehículo Eléctrico", fr: "Véhicule Électrique", de: "Elektrisches Fahrzeug"
    },
    image: "/images/vehicles/f9_voltrish.webp",
    rating: "4.8 (15)",
    drivetrainShort: "Motor Elétrico F9 Voltrish",
    suspensionShort: "Suspensão Hidráulica Dupla",
    maxSpeed: "25 km/h (Uso Sem Carta)",
    autonomy: "40 a 60 km",
    powerNominal: "250W",
    tags: ["Uso Sem Carta", "Mobilidade Sustentável"],
    specs: {
      frame: "Chassi em liga de aço de alta resistência",
      drivetrain: "Motor traseiro de cubo / transmissão elétrica",
      suspension: "Forqueta dianteira hidráulica e amortecedores traseiros",
      brakes: "Sistema de travagem de disco/tambor",
      wheels: "Jantes de alta resistência com pneus tubeless",
      motor: "Motor de 250W",
      battery: "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 35, range: 45, offroad: 10 },
      performance: { battery: 50, agility: 80, power: 40, weight: 60 }
    }
  ,
    features: ["Velocípede sem carta", "Travão de disco frente e atrás", "Alarme"],
    warranty: {
      motor: "2 anos de garantia motor e controladora",
      battery: "6 meses de garantia de bateria"
    }
  },
  {
    id: "azores",
    price: 1380,
    name: "AZORES",
    brand: "Azores",
    brandSlug: "azores",
    isStar: false,
    category: "e-scooter",
    categoryLabel: {
      pt: "Veloc\u00edpede / Scooter El\u00e9trica", en: "Electric Vehicle", es: "Vehículo Eléctrico", fr: "Véhicule Électrique", de: "Elektrisches Fahrzeug"
    },
    image: "/images/vehicles/azores.webp",
    rating: "4.8 (15)",
    drivetrainShort: "Motor Elétrico 72V High Efficiency",
    suspensionShort: "Suspensão Reforçada com Amortecimento Duplo",
    maxSpeed: "25 km/h (Sem Carta)",
    autonomy: "40 a 60 km",
    powerNominal: "250W",
    tags: ["Uso Sem Carta", "Mobilidade Sustentável"],
    specs: {
      frame: "Chassi em liga de aço de alta resistência",
      drivetrain: "Motor traseiro de cubo / transmissão elétrica",
      suspension: "Forqueta dianteira hidráulica e amortecedores traseiros",
      brakes: "Sistema de travagem de disco/tambor",
      wheels: "Jantes de alta resistência com pneus tubeless",
      motor: "Motor de 250W",
      battery: "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 35, range: 45, offroad: 10 },
      performance: { battery: 50, agility: 80, power: 40, weight: 60 }
    }
  ,
    features: ["Velocípede sem carta", "Travão de disco frente e atrás", "Alarme"],
    warranty: {
      motor: "2 anos de garantia motor e controladora",
      battery: "6 meses de garantia de bateria"
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
      pt: "Veloc\u00edpede / Scooter El\u00e9trica", en: "Electric Vehicle", es: "Vehículo Eléctrico", fr: "Véhicule Électrique", de: "Elektrisches Fahrzeug"
    },
    image: "/images/vehicles/we_fun.webp",
    rating: "4.8 (15)",
    drivetrainShort: "Motor Elétrico We-Fun Urbano",
    suspensionShort: "Suspensão Urbana Conforto",
    maxSpeed: "25 km/h (Uso Sem Carta)",
    autonomy: "40 a 60 km",
    powerNominal: "250W",
    tags: ["Uso Sem Carta", "Mobilidade Sustentável"],
    specs: {
      frame: "Chassi em liga de aço de alta resistência",
      drivetrain: "Motor traseiro de cubo / transmissão elétrica",
      suspension: "Forqueta dianteira hidráulica e amortecedores traseiros",
      brakes: "Sistema de travagem de disco/tambor",
      wheels: "Jantes de alta resistência com pneus tubeless",
      motor: "Motor de 250W",
      battery: "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 35, range: 45, offroad: 10 },
      performance: { battery: 50, agility: 80, power: 40, weight: 60 }
    }
  ,
    features: ["Velocípede sem carta", "Travão de disco frente e atrás", "Alarme"],
    warranty: {
      motor: "2 anos de garantia motor e controladora",
      battery: "6 meses de garantia de bateria"
    }
  },
  {
    id: "rio-j2-72v",
    price: 1480,
    name: "RIO J2 72V",
    brand: "Rio",
    brandSlug: "rio",
    isStar: false,
    category: "e-scooter",
    categoryLabel: {
      pt: "Veloc\u00edpede / Scooter El\u00e9trica", en: "Electric Vehicle", es: "Vehículo Eléctrico", fr: "Véhicule Électrique", de: "Elektrisches Fahrzeug"
    },
    image: "/images/vehicles/rio_j2_72v.webp",
    rating: "4.8 (15)",
    drivetrainShort: "Motor Elétrico 72V High Torque",
    suspensionShort: "Suspensão Hidráulica Dianteira/Traseira",
    maxSpeed: "25 km/h (Sem Carta)",
    autonomy: "40 a 60 km",
    powerNominal: "250W",
    tags: ["Uso Sem Carta", "Mobilidade Sustentável"],
    specs: {
      frame: "Chassi em liga de aço de alta resistência",
      drivetrain: "Motor traseiro de cubo / transmissão elétrica",
      suspension: "Forqueta dianteira hidráulica e amortecedores traseiros",
      brakes: "Sistema de travagem de disco/tambor",
      wheels: "Jantes de alta resistência com pneus tubeless",
      motor: "Motor de 250W",
      battery: "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 35, range: 45, offroad: 10 },
      performance: { battery: 50, agility: 80, power: 40, weight: 60 }
    }
  ,
    features: ["Velocípede sem carta", "Travão de disco frente e atrás", "Alarme"],
    warranty: {
      motor: "2 anos de garantia motor e controladora",
      battery: "6 meses de garantia de bateria"
    }
  },
  {
    id: "voltrish-21",
    price: 1480,
    name: "VOLTRISH 21",
    brand: "Voltrish",
    brandSlug: "voltrish",
    isStar: false,
    category: "e-scooter",
    categoryLabel: {
      pt: "Veloc\u00edpede / Scooter El\u00e9trica", en: "Electric Vehicle", es: "Vehículo Eléctrico", fr: "Véhicule Électrique", de: "Elektrisches Fahrzeug"
    },
    image: "/images/vehicles/voltrish_21.webp",
    rating: "4.8 (15)",
    drivetrainShort: "Motor Elétrico Voltrish 21",
    suspensionShort: "Suspensão Hidráulica Dianteira",
    maxSpeed: "25 km/h (Uso Sem Carta)",
    autonomy: "40 a 60 km",
    powerNominal: "250W",
    tags: ["Uso Sem Carta", "Mobilidade Sustentável"],
    specs: {
      frame: "Chassi em liga de aço de alta resistência",
      drivetrain: "Motor traseiro de cubo / transmissão elétrica",
      suspension: "Forqueta dianteira hidráulica e amortecedores traseiros",
      brakes: "Sistema de travagem de disco/tambor",
      wheels: "Jantes de alta resistência com pneus tubeless",
      motor: "Motor de 250W",
      battery: "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 35, range: 45, offroad: 10 },
      performance: { battery: 50, agility: 80, power: 40, weight: 60 }
    }
  ,
    features: ["Velocípede sem carta", "Travão de disco frente e atrás", "Alarme"],
    warranty: {
      motor: "2 anos de garantia motor e controladora",
      battery: "6 meses de garantia de bateria"
    }
  },
  {
    id: "vista-3-rodas",
    price: 1850,
    name: "VISTA 3 RODAS",
    brand: "Vista",
    brandSlug: "vista",
    isStar: false,
    category: "e-scooter",
    categoryLabel: {
      pt: "Triciclo / Quadriciclo de Mobilidade", en: "Electric Vehicle", es: "Vehículo Eléctrico", fr: "Véhicule Électrique", de: "Elektrisches Fahrzeug"
    },
    image: "/images/vehicles/vista_3_rodas.webp",
    rating: "4.8 (15)",
    drivetrainShort: "Triciclo de Mobilidade Conforto Vista",
    suspensionShort: "Suspensão Macia de Alto Conforto",
    maxSpeed: "25 km/h",
    autonomy: "40 a 60 km",
    powerNominal: "250W",
    tags: ["Uso Sem Carta", "Mobilidade Sustentável"],
    specs: {
      frame: "Chassi em liga de aço de alta resistência",
      drivetrain: "Motor traseiro de cubo / transmissão elétrica",
      suspension: "Forqueta dianteira hidráulica e amortecedores traseiros",
      brakes: "Sistema de travagem de disco/tambor",
      wheels: "Jantes de alta resistência com pneus tubeless",
      motor: "Motor de 250W",
      battery: "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 35, range: 45, offroad: 10 },
      performance: { battery: 50, agility: 80, power: 40, weight: 60 }
    }
  ,
    features: ["Velocípede sem carta", "Travão de disco frente e atrás", "Alarme"],
    warranty: {
      motor: "2 anos de garantia motor e controladora",
      battery: "6 meses de garantia de bateria"
    }
  },
  {
    id: "triciclo-kiev",
    price: 1780,
    name: "TRICICULO KIEV",
    brand: "Kiev",
    brandSlug: "kiev",
    isStar: false,
    category: "e-scooter",
    categoryLabel: {
      pt: "Triciclo / Quadriciclo de Mobilidade", en: "Electric Vehicle", es: "Vehículo Eléctrico", fr: "Véhicule Électrique", de: "Elektrisches Fahrzeug"
    },
    image: "/images/vehicles/triciclo_kiev.webp",
    rating: "4.8 (15)",
    drivetrainShort: "Triciclo Kiev Mobilidade Urbana",
    suspensionShort: "Suspensão Dianteira Hidráulica",
    maxSpeed: "25 km/h",
    autonomy: "40 a 60 km",
    powerNominal: "250W",
    tags: ["Uso Sem Carta", "Mobilidade Sustentável"],
    specs: {
      frame: "Chassi em liga de aço de alta resistência",
      drivetrain: "Motor traseiro de cubo / transmissão elétrica",
      suspension: "Forqueta dianteira hidráulica e amortecedores traseiros",
      brakes: "Sistema de travagem de disco/tambor",
      wheels: "Jantes de alta resistência com pneus tubeless",
      motor: "Motor de 250W",
      battery: "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 35, range: 45, offroad: 10 },
      performance: { battery: 50, agility: 80, power: 40, weight: 60 }
    }
  ,
    features: ["Velocípede sem carta", "Travão de disco frente e atrás", "Alarme"],
    warranty: {
      motor: "2 anos de garantia motor e controladora",
      battery: "6 meses de garantia de bateria"
    }
  },
  {
    id: "g2-pro-1050w",
    price: 1180,
    name: "G2 Pro 1050W",
    brand: "G2",
    brandSlug: "g2",
    isStar: false,
    category: "e-scooter",
    categoryLabel: {
      pt: "Veloc\u00edpede / Scooter El\u00e9trica", en: "Electric Vehicle", es: "Vehículo Eléctrico", fr: "Véhicule Électrique", de: "Elektrisches Fahrzeug"
    },
    image: "/images/vehicles/g2_pro_1050w.webp",
    rating: "4.8 (15)",
    drivetrainShort: "Motor Elétrico G2 Pro 1050W",
    suspensionShort: "Suspensão Dupla por Braço Oscilante",
    maxSpeed: "25 km/h (Limitado)",
    autonomy: "40 a 60 km",
    powerNominal: "250W",
    tags: ["Uso Sem Carta", "Mobilidade Sustentável"],
    specs: {
      frame: "Chassi em liga de aço de alta resistência",
      drivetrain: "Motor traseiro de cubo / transmissão elétrica",
      suspension: "Forqueta dianteira hidráulica e amortecedores traseiros",
      brakes: "Sistema de travagem de disco/tambor",
      wheels: "Jantes de alta resistência com pneus tubeless",
      motor: "Motor de 250W",
      battery: "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 35, range: 45, offroad: 10 },
      performance: { battery: 50, agility: 80, power: 40, weight: 60 }
    }
  ,
    features: ["Velocípede sem carta", "Travão de disco frente e atrás", "Alarme"],
    warranty: {
      motor: "2 anos de garantia motor e controladora",
      battery: "6 meses de garantia de bateria"
    }
  },
  {
    id: "triciclo-fun-2-lugares",
    price: 1680,
    name: "TRICICULO FUN 2 LUGARES",
    brand: "Fun",
    brandSlug: "fun",
    isStar: false,
    category: "e-scooter",
    categoryLabel: {
      pt: "Triciclo / Quadriciclo de Mobilidade", en: "Electric Vehicle", es: "Vehículo Eléctrico", fr: "Véhicule Électrique", de: "Elektrisches Fahrzeug"
    },
    image: "/images/vehicles/triciclo_fun.webp",
    rating: "4.8 (15)",
    drivetrainShort: "Triciclo Elétrico de 2 Lugares",
    suspensionShort: "Suspensão Reforçada Duplo Amortecedor",
    maxSpeed: "25 km/h (Com Marcha-Atrás)",
    autonomy: "40 a 60 km",
    powerNominal: "250W",
    tags: ["Uso Sem Carta", "Mobilidade Sustentável"],
    specs: {
      frame: "Chassi em liga de aço de alta resistência",
      drivetrain: "Motor traseiro de cubo / transmissão elétrica",
      suspension: "Forqueta dianteira hidráulica e amortecedores traseiros",
      brakes: "Sistema de travagem de disco/tambor",
      wheels: "Jantes de alta resistência com pneus tubeless",
      motor: "Motor de 250W",
      battery: "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 35, range: 45, offroad: 10 },
      performance: { battery: 50, agility: 80, power: 40, weight: 60 }
    }
  ,
    features: ["Velocípede sem carta", "Travão de disco frente e atrás", "Alarme"],
    warranty: {
      motor: "2 anos de garantia motor e controladora",
      battery: "6 meses de garantia de bateria"
    }
  },
  {
    id: "seventeen-qc-3-lugares",
    price: 1870,
    name: "SEVENTEEN QC 3 LUGARES",
    brand: "Seventeen",
    brandSlug: "seventeen",
    isStar: true,
    category: "e-scooter",
    categoryLabel: {
      pt: "Triciclo / Quadriciclo de Mobilidade", en: "Electric Vehicle", es: "Vehículo Eléctrico", fr: "Véhicule Électrique", de: "Elektrisches Fahrzeug"
    },
    image: "/images/vehicles/seventeen_qc_3_lugares.webp",
    rating: "4.8 (15)",
    drivetrainShort: "Triciclo Elétrico Familiar 3 Lugares",
    suspensionShort: "Suspensão Traseira Dupla Reforçada Carga",
    maxSpeed: "25 km/h (3 Velocidades + Reverse)",
    autonomy: "40 a 60 km",
    powerNominal: "250W",
    tags: ["Uso Sem Carta", "Mobilidade Sustentável"],
    specs: {
      frame: "Chassi em liga de aço de alta resistência",
      drivetrain: "Motor traseiro de cubo / transmissão elétrica",
      suspension: "Forqueta dianteira hidráulica e amortecedores traseiros",
      brakes: "Sistema de travagem de disco/tambor",
      wheels: "Jantes de alta resistência com pneus tubeless",
      motor: "Motor de 250W",
      battery: "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 35, range: 45, offroad: 10 },
      performance: { battery: 50, agility: 80, power: 40, weight: 60 }
    }
  ,
    features: ["Velocípede sem carta", "Travão de disco frente e atrás", "Alarme"],
    warranty: {
      motor: "2 anos de garantia motor e controladora",
      battery: "6 meses de garantia de bateria"
    }
  },
  {
    id: "seventeen-qs-4-rodas",
    price: 1950,
    name: "SEVENTEEN QS 4 RODAS",
    brand: "Seventeen",
    brandSlug: "seventeen",
    isStar: true,
    category: "e-scooter",
    categoryLabel: {
      pt: "Triciclo / Quadriciclo de Mobilidade", en: "Electric Vehicle", es: "Vehículo Eléctrico", fr: "Véhicule Électrique", de: "Elektrisches Fahrzeug"
    },
    image: "/images/vehicles/seventeen_qs_4_rodas.webp",
    rating: "4.8 (15)",
    drivetrainShort: "Quadriciclo Elétrico de Grande Conforto",
    suspensionShort: "Suspensão Independente às 4 Rodas",
    maxSpeed: "25 km/h (4 Rodas Estabilidade Total)",
    autonomy: "40 a 60 km",
    powerNominal: "250W",
    tags: ["Uso Sem Carta", "Mobilidade Sustentável"],
    specs: {
      frame: "Chassi em liga de aço de alta resistência",
      drivetrain: "Motor traseiro de cubo / transmissão elétrica",
      suspension: "Forqueta dianteira hidráulica e amortecedores traseiros",
      brakes: "Sistema de travagem de disco/tambor",
      wheels: "Jantes de alta resistência com pneus tubeless",
      motor: "Motor de 250W",
      battery: "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 35, range: 45, offroad: 10 },
      performance: { battery: 50, agility: 80, power: 40, weight: 60 }
    }
  ,
    features: ["Velocípede sem carta", "Travão de disco frente e atrás", "Alarme"],
    warranty: {
      motor: "2 anos de garantia motor e controladora",
      battery: "6 meses de garantia de bateria"
    }
  },
  {
    id: "raider-mini-33",
    price: 1780,
    name: "RAIDER  MINI 33, 3 RODAS 3 LUGARES",
    brand: "Raider",
    brandSlug: "raider",
    isStar: true,
    category: "e-scooter",
    categoryLabel: {
      pt: "Triciclo / Quadriciclo de Mobilidade", en: "Electric Vehicle", es: "Vehículo Eléctrico", fr: "Véhicule Électrique", de: "Elektrisches Fahrzeug"
    },
    image: "/images/vehicles/raider_mini33.webp",
    rating: "4.8 (15)",
    drivetrainShort: "Motor Elétrico 3 Rodas 3 Lugares",
    suspensionShort: "Suspensão Reforçada Multilink",
    maxSpeed: "25 km/h (Com Marcha-Atrás)",
    autonomy: "40 a 60 km",
    powerNominal: "250W",
    tags: ["Uso Sem Carta", "Mobilidade Sustentável"],
    specs: {
      frame: "Chassi em liga de aço de alta resistência",
      drivetrain: "Motor traseiro de cubo / transmissão elétrica",
      suspension: "Forqueta dianteira hidráulica e amortecedores traseiros",
      brakes: "Sistema de travagem de disco/tambor",
      wheels: "Jantes de alta resistência com pneus tubeless",
      motor: "Motor de 250W",
      battery: "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 35, range: 45, offroad: 10 },
      performance: { battery: 50, agility: 80, power: 40, weight: 60 }
    }
  ,
    features: ["Velocípede sem carta", "Travão de disco frente e atrás", "Alarme"],
    warranty: {
      motor: "2 anos de garantia motor e controladora",
      battery: "6 meses de garantia de bateria"
    }
  },
  {
    id: "rio-j2-60v",
    price: 1380,
    name: "RIO J2 60V",
    brand: "Rio",
    brandSlug: "rio",
    isStar: false,
    category: "e-scooter",
    categoryLabel: {
      pt: "Veloc\u00edpede / Scooter El\u00e9trica", en: "Electric Vehicle", es: "Vehículo Eléctrico", fr: "Véhicule Électrique", de: "Elektrisches Fahrzeug"
    },
    image: "/images/vehicles/rio_j2_60v.webp",
    rating: "4.8 (15)",
    drivetrainShort: "Motor Elétrico RIO J2 60V",
    suspensionShort: "Suspensão Hidráulica Dianteira/Traseira",
    maxSpeed: "25 km/h (Sem Carta)",
    autonomy: "40 a 60 km",
    powerNominal: "250W",
    tags: ["Uso Sem Carta", "Mobilidade Sustentável"],
    specs: {
      frame: "Chassi em liga de aço de alta resistência",
      drivetrain: "Motor traseiro de cubo / transmissão elétrica",
      suspension: "Forqueta dianteira hidráulica e amortecedores traseiros",
      brakes: "Sistema de travagem de disco/tambor",
      wheels: "Jantes de alta resistência com pneus tubeless",
      motor: "Motor de 250W",
      battery: "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 35, range: 45, offroad: 10 },
      performance: { battery: 50, agility: 80, power: 40, weight: 60 }
    }
  ,
    features: ["Velocípede sem carta", "Travão de disco frente e atrás", "Alarme"],
    warranty: {
      motor: "2 anos de garantia motor e controladora",
      battery: "6 meses de garantia de bateria"
    }
  },
  {
    id: "triciclo-space-3-lugares",
    price: 1850,
    name: "Triciculo Space 3 lugares",
    brand: "Space",
    brandSlug: "space",
    isStar: false,
    category: "e-scooter",
    categoryLabel: {
      pt: "Triciclo / Quadriciclo de Mobilidade", en: "Electric Vehicle", es: "Vehículo Eléctrico", fr: "Véhicule Électrique", de: "Elektrisches Fahrzeug"
    },
    image: "/images/vehicles/triciclo_space_3_lugares.webp",
    rating: "4.8 (15)",
    drivetrainShort: "Triciclo Space 3 Lugares Espaçoso",
    suspensionShort: "Suspensão Heavy Duty para 3 Pessoas",
    maxSpeed: "25 km/h (Com Marcha-Atrás)",
    autonomy: "40 a 60 km",
    powerNominal: "250W",
    tags: ["Uso Sem Carta", "Mobilidade Sustentável"],
    specs: {
      frame: "Chassi em liga de aço de alta resistência",
      drivetrain: "Motor traseiro de cubo / transmissão elétrica",
      suspension: "Forqueta dianteira hidráulica e amortecedores traseiros",
      brakes: "Sistema de travagem de disco/tambor",
      wheels: "Jantes de alta resistência com pneus tubeless",
      motor: "Motor de 250W",
      battery: "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 35, range: 45, offroad: 10 },
      performance: { battery: 50, agility: 80, power: 40, weight: 60 }
    }
  ,
    features: ["Velocípede sem carta", "Travão de disco frente e atrás", "Alarme"],
    warranty: {
      motor: "2 anos de garantia motor e controladora",
      battery: "6 meses de garantia de bateria"
    }
  },
  {
    id: "seventeen-sporte",
    price: 1480,
    name: "Seventeen sporte",
    brand: "Seventeen",
    brandSlug: "seventeen",
    isStar: false,
    category: "e-scooter",
    categoryLabel: {
      pt: "Veloc\u00edpede / Scooter El\u00e9trica", en: "Electric Vehicle", es: "Vehículo Eléctrico", fr: "Véhicule Électrique", de: "Elektrisches Fahrzeug"
    },
    image: "/images/vehicles/seventeen_sporte.webp",
    rating: "4.8 (15)",
    drivetrainShort: "Motor Elétrico Seventeen Sporte",
    suspensionShort: "Suspensão Sport Dupla",
    maxSpeed: "25 km/h (Sem Carta)",
    autonomy: "40 a 60 km",
    powerNominal: "250W",
    tags: ["Uso Sem Carta", "Mobilidade Sustentável"],
    specs: {
      frame: "Chassi em liga de aço de alta resistência",
      drivetrain: "Motor traseiro de cubo / transmissão elétrica",
      suspension: "Forqueta dianteira hidráulica e amortecedores traseiros",
      brakes: "Sistema de travagem de disco/tambor",
      wheels: "Jantes de alta resistência com pneus tubeless",
      motor: "Motor de 250W",
      battery: "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 35, range: 45, offroad: 10 },
      performance: { battery: 50, agility: 80, power: 40, weight: 60 }
    }
  ,
    features: ["Velocípede sem carta", "Travão de disco frente e atrás", "Alarme"],
    warranty: {
      motor: "2 anos de garantia motor e controladora",
      battery: "6 meses de garantia de bateria"
    }
  },
  {
    id: "mx1-rio",
    price: 1380,
    name: "Mx1 Rio",
    brand: "Rio",
    brandSlug: "rio",
    isStar: false,
    category: "e-scooter",
    categoryLabel: {
      pt: "Veloc\u00edpede / Scooter El\u00e9trica", en: "Electric Vehicle", es: "Vehículo Eléctrico", fr: "Véhicule Électrique", de: "Elektrisches Fahrzeug"
    },
    image: "/images/vehicles/mx1_rio.webp",
    rating: "4.8 (15)",
    drivetrainShort: "Motor Elétrico Mx1 Rio 60V",
    suspensionShort: "Suspensão Hidráulica Dianteira",
    maxSpeed: "25 km/h (Sem Carta)",
    autonomy: "40 a 60 km",
    powerNominal: "250W",
    tags: ["Uso Sem Carta", "Mobilidade Sustentável"],
    specs: {
      frame: "Chassi em liga de aço de alta resistência",
      drivetrain: "Motor traseiro de cubo / transmissão elétrica",
      suspension: "Forqueta dianteira hidráulica e amortecedores traseiros",
      brakes: "Sistema de travagem de disco/tambor",
      wheels: "Jantes de alta resistência com pneus tubeless",
      motor: "Motor de 250W",
      battery: "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 35, range: 45, offroad: 10 },
      performance: { battery: 50, agility: 80, power: 40, weight: 60 }
    }
  ,
    features: ["Velocípede sem carta", "Travão de disco frente e atrás", "Alarme"],
    warranty: {
      motor: "2 anos de garantia motor e controladora",
      battery: "6 meses de garantia de bateria"
    }
  },
  {
    id: "acm-power-es-049",
    price: 1180,
    name: "ACM Power Es-049",
    brand: "ACM",
    brandSlug: "acm",
    isStar: false,
    category: "e-scooter",
    categoryLabel: {
      pt: "Veloc\u00edpede / Scooter El\u00e9trica", en: "Electric Vehicle", es: "Vehículo Eléctrico", fr: "Véhicule Électrique", de: "Elektrisches Fahrzeug"
    },
    image: "/images/vehicles/acm_power_es049.webp",
    rating: "4.8 (15)",
    drivetrainShort: "Motor Elétrico ACM Power 049",
    suspensionShort: "Suspensão Urbana Conforto",
    maxSpeed: "25 km/h (Sem Carta)",
    autonomy: "40 a 60 km",
    powerNominal: "250W",
    tags: ["Uso Sem Carta", "Mobilidade Sustentável"],
    specs: {
      frame: "Chassi em liga de aço de alta resistência",
      drivetrain: "Motor traseiro de cubo / transmissão elétrica",
      suspension: "Forqueta dianteira hidráulica e amortecedores traseiros",
      brakes: "Sistema de travagem de disco/tambor",
      wheels: "Jantes de alta resistência com pneus tubeless",
      motor: "Motor de 250W",
      battery: "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 35, range: 45, offroad: 10 },
      performance: { battery: 50, agility: 80, power: 40, weight: 60 }
    }
  ,
    features: ["Velocípede sem carta", "Travão de disco frente e atrás", "Alarme"],
    warranty: {
      motor: "2 anos de garantia motor e controladora",
      battery: "6 meses de garantia de bateria"
    }
  },
  {
    id: "acm-power-es-55",
    price: 1250,
    name: "ACM Power Es-55",
    brand: "ACM",
    brandSlug: "acm",
    isStar: false,
    category: "e-scooter",
    categoryLabel: {
      pt: "Veloc\u00edpede / Scooter El\u00e9trica", en: "Electric Vehicle", es: "Vehículo Eléctrico", fr: "Véhicule Électrique", de: "Elektrisches Fahrzeug"
    },
    image: "/images/vehicles/acm_power_es55.webp",
    rating: "4.8 (15)",
    drivetrainShort: "Motor Elétrico ACM Power 055",
    suspensionShort: "Suspensão Hidráulica Dianteira",
    maxSpeed: "25 km/h (Sem Carta)",
    autonomy: "40 a 60 km",
    powerNominal: "250W",
    tags: ["Uso Sem Carta", "Mobilidade Sustentável"],
    specs: {
      frame: "Chassi em liga de aço de alta resistência",
      drivetrain: "Motor traseiro de cubo / transmissão elétrica",
      suspension: "Forqueta dianteira hidráulica e amortecedores traseiros",
      brakes: "Sistema de travagem de disco/tambor",
      wheels: "Jantes de alta resistência com pneus tubeless",
      motor: "Motor de 250W",
      battery: "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      useKey: "bike.voltrish.use"
    },
    stats: {
      terrains: { highway: 5, urban: 90, climbing: 35, range: 45, offroad: 10 },
      performance: { battery: 50, agility: 80, power: 40, weight: 60 }
    }
  ,
    features: ["Velocípede sem carta", "Travão de disco frente e atrás", "Alarme"],
    warranty: {
      motor: "2 anos de garantia motor e controladora",
      battery: "6 meses de garantia de bateria"
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
