export const bikes = [
  // ================= E-MTB (Bicicletas Elétricas de Montanha) =================
  {
    id: "crafty-carbon-rr-s",
    price: 8899,
    name: "Mondraker Crafty Carbon RR S",
    brand: "Mondraker",
    brandSlug: "mondraker",
    isStar: true,
    category: "e-mtb",
    categoryLabel: {
      pt: "E-MTB Enduro / Flagship", en: "E-MTB Enduro / Flagship", es: "E-MTB Enduro / Flagship", fr: "E-MTB Enduro / Flagship", de: "E-MTB Enduro / Flagship"
    },
    image: "/images/bikes/crafty-rr-s.webp",
    rating: "5.0 (86)",
    drivetrainShort: "SRAM XX AXS 12s",
    suspensionShort: "Fox 38 Factory 160mm",
    tags: ["XX Eagle T-Type", "Mavic E-Deemax S", "Bosch CX 800Wh"],
    specs: {
      frame: "Crafty Stealth Air Full Carbon, Zero Suspension System, 150mm",
      drivetrain: "SRAM XX Eagle AXS T-Type, 12s",
      suspension: "Fox 38 Float GRIP2 Factory 160mm / Fox Float X Factory",
      brakes: "SRAM Maven Ultimate, 4-Piston",
      wheels: "Mavic E-Deemax S 29",
      motor: "Bosch Performance Line CX (85Nm)",
      battery: "Bosch PowerTube 800Wh",
      useKey: "bike.crafty.use"
    },
    stats: {
      terrains: { trails: 95, downhill: 90, climbing: 95, gravel: 25, urban: 15 },
      performance: { battery: 98, agility: 80, power: 95, weight: 60 }
    }
  },
  {
    id: "neat-rr-sl",
    price: 10499,
    name: "Mondraker Neat RR SL",
    brand: "Mondraker",
    brandSlug: "mondraker",
    isStar: true,
    category: "e-mtb",
    categoryLabel: {
      pt: "Light E-MTB / Flagship", en: "Light E-MTB / Flagship", es: "Light E-MTB / Flagship", fr: "Light E-MTB / Flagship", de: "Light E-MTB / Flagship"
    },
    image: "/images/bikes/neat-rr-sl.webp",
    rating: "4.9 (42)",
    drivetrainShort: "SRAM XX AXS 12s",
    suspensionShort: "Fox 36 Factory 160mm",
    tags: ["TQ HPR50 50Nm", "SRAM XX T-Type", "Ultra Light Carbon"],
    specs: {
      frame: "Neat Stealth Air Full Carbon, Zero Suspension System, 150mm",
      drivetrain: "SRAM XX Eagle AXS T-Type, 12s",
      suspension: "Fox 36 Float GRIP2 Factory 160mm / Fox Float X Factory",
      brakes: "SRAM Level Ultimate, 4-Piston",
      wheels: "Mavic Crossmax SL S 29",
      motor: "TQ HPR50 (50Nm)",
      battery: "TQ Integrated 360Wh",
      useKey: "bike.neat.use"
    },
    stats: {
      terrains: { trails: 92, downhill: 80, climbing: 85, gravel: 40, urban: 25 },
      performance: { battery: 55, agility: 96, power: 65, weight: 85 }
    }
  },
  {
    id: "zendit-xr",
    price: 11399,
    name: "Mondraker Zendit XR",
    brand: "Mondraker",
    brandSlug: "mondraker",
    isStar: true,
    category: "e-mtb",
    categoryLabel: {
      pt: "E-MTB Enduro / DJI Avinox", en: "E-MTB Enduro / DJI Avinox", es: "E-MTB Enduro / DJI Avinox", fr: "E-MTB Enduro / DJI Avinox", de: "E-MTB Enduro / DJI Avinox"
    },
    image: "/images/bikes/zendit-xr.webp",
    rating: "5.0 (34)",
    drivetrainShort: "SRAM XX AXS 12s",
    suspensionShort: "Fox Podium Factory 170mm",
    tags: ["DJI Avinox 130Nm", "SRAM XX T-Type", "800Wh Battery"],
    specs: {
      frame: "Zendit Stealth Air Full Carbon, Zero Suspension System, 165mm",
      drivetrain: "SRAM XX Eagle AXS T-Type, 12s",
      suspension: "Fox Podium Factory GRIP X2 170mm / Fox Float X2 Factory",
      brakes: "SRAM Maven Ultimate, 4-Piston",
      wheels: "DT Swiss Carbon 29/27.5 Mullet",
      motor: "DJI Avinox M2S (130Nm, 1300W peak)",
      battery: "DJI Avinox Integrated 800Wh",
      useKey: "bike.zendit.use"
    },
    stats: {
      terrains: { trails: 98, downhill: 95, climbing: 98, gravel: 20, urban: 10 },
      performance: { battery: 98, agility: 85, power: 100, weight: 62 }
    }
  },
  {
    id: "chaser-r",
    price: 4899,
    name: "Mondraker Chaser R",
    brand: "Mondraker",
    brandSlug: "mondraker",
    isStar: false,
    category: "e-mtb",
    categoryLabel: {
      pt: "E-MTB Trail / Alloy", en: "E-MTB Trail / Alloy", es: "E-MTB Trail / Alloy", fr: "E-MTB Trail / Alloy", de: "E-MTB Trail / Alloy"
    },
    image: "/images/bikes/chaser-r.webp",
    rating: "4.8 (112)",
    drivetrainShort: "SRAM SX 12s",
    suspensionShort: "RockShox 35 Gold 160mm",
    tags: ["Stealth Alloy", "SRAM SX Eagle", "Bosch CX 750Wh"],
    specs: {
      frame: "Chaser Stealth Alloy, Zero Suspension System, 150mm",
      drivetrain: "SRAM SX Eagle, 12s",
      suspension: "RockShox 35 Gold RL 160mm / RockShox Deluxe Select+ RT",
      brakes: "SRAM DB8, 4-Piston",
      wheels: "Mavic E-Deemax 29",
      motor: "Bosch Performance Line CX (85Nm)",
      battery: "Bosch PowerTube 750Wh",
      useKey: "bike.chaser.use"
    },
    stats: {
      terrains: { trails: 88, downhill: 75, climbing: 85, gravel: 45, urban: 35 },
      performance: { battery: 92, agility: 75, power: 95, weight: 52 }
    }
  },

  // ================= E-URBAN (Bicicletas Elétricas Urbanas / Cargo) =================
  {
    id: "specialized-turbo-como",
    price: 3499,
    name: "Specialized Turbo Como 4.0",
    brand: "Specialized",
    brandSlug: "specialized",
    isStar: true,
    category: "e-urban",
    categoryLabel: {
      pt: "Urbana / Conforto Low-Step", en: "Urban / Low-Step Comfort", es: "Urbana / Confort Low-Step", fr: "Urbain / Enjambement Bas", de: "City / Tiefeinsteiger"
    },
    image: "/images/bikes/arid-r.webp",
    rating: "4.9 (78)",
    drivetrainShort: "SRAM NX 11s",
    suspensionShort: "SR Suntour Mobie 80mm",
    tags: ["Low-Step Frame", "Specialized 2.0 Motor", "Integrated Rack & Lights"],
    specs: {
      frame: "E5 Aluminum, Bottom Bracket Motor Mount, Fully Integrated Battery",
      drivetrain: "SRAM NX, 11-speed",
      suspension: "SR Suntour MobieA32, 80mm travel",
      brakes: "SRAM Level, Hydraulic Disc, 2-Piston",
      wheels: "Double-wall Alloy 650b",
      motor: "Specialized 2.0 (70Nm)",
      battery: "Specialized U2-710Wh",
      useKey: "bike.urban.use"
    },
    stats: {
      terrains: { trails: 15, downhill: 5, climbing: 70, gravel: 55, urban: 100 },
      performance: { battery: 90, agility: 85, power: 80, weight: 65 }
    }
  },
  {
    id: "cube-kathmandu-hybrid",
    price: 3299,
    name: "Cube Kathmandu Hybrid ONE",
    brand: "Cube",
    brandSlug: "cube",
    isStar: false,
    category: "e-urban",
    categoryLabel: {
      pt: "Trekking / Touring", en: "Trekking / Touring", es: "Trekking / Touring", fr: "Trekking / Randonnée", de: "Trekking / Touring"
    },
    image: "/images/bikes/prime.jpg",
    rating: "4.8 (94)",
    drivetrainShort: "Shimano Deore 10s",
    suspensionShort: "SR Suntour NVX 100mm",
    tags: ["Trekking Ready", "Bosch CX 750Wh", "Integrated Carrier 3.0"],
    specs: {
      frame: "Aluminium Superlite, Gravity Casting, Trekking Comfort Geometry",
      drivetrain: "Shimano Deore RD-M5130, 10-speed",
      suspension: "SR Suntour NVX30 Coil, 100mm",
      brakes: "Shimano BR-MT200, Hydr. Disc",
      wheels: "CUBE EX23, 36H, Disc",
      motor: "Bosch Performance Line CX (85Nm)",
      battery: "Bosch PowerTube 750Wh",
      useKey: "bike.urban.use"
    },
    stats: {
      terrains: { trails: 30, downhill: 10, climbing: 85, gravel: 75, urban: 90 },
      performance: { battery: 92, agility: 75, power: 95, weight: 60 }
    }
  },
  {
    id: "riese-muller-load",
    price: 7899,
    name: "Riese & Müller Load 75 Vario",
    brand: "Riese & Müller",
    brandSlug: "riese-muller",
    isStar: true,
    category: "e-urban",
    categoryLabel: {
      pt: "Cargo E-Bike / Suspensão Total", en: "Cargo E-Bike / Full Suspension", es: "Cargo E-Bike / Suspensión Total", fr: "Biporteur Électrique / Tout Suspendu", de: "Lastenrad E-Bike / Vollgefedert"
    },
    image: "/images/bikes/chaser.jpg",
    rating: "5.0 (46)",
    drivetrainShort: "Enviolo 380 Hub / Gates Belt",
    suspensionShort: "Suntour Mobie front / X-Fusion rear",
    tags: ["Gates Carbon Belt", "Enviolo Internal Hub", "Huge Cargo Bay"],
    specs: {
      frame: "Load 75 Full Suspension Aluminium Frame",
      drivetrain: "Enviolo 380 continuous hub gear with Gates Carbon Drive belt",
      suspension: "Suntour Mobie 20\" / X-Fusion Glyde Shock",
      brakes: "Tektro TRP C 2.3 Cargo Hydraulic",
      wheels: "Alloy Cargo Double Wall (20\" Front / 26\" Rear)",
      motor: "Bosch Cargo Line (85Nm)",
      battery: "Bosch PowerTube 500Wh (Dual battery optional)",
      useKey: "bike.cargo.use"
    },
    stats: {
      terrains: { trails: 5, downhill: 2, climbing: 80, gravel: 40, urban: 100 },
      performance: { battery: 95, agility: 70, power: 98, weight: 40 }
    }
  },

  // ================= E-SCOOTER (Trotinetas Elétricas) =================
  {
    id: "ninebot-max-g2",
    price: 899,
    name: "Segway-Ninebot MAX G2",
    brand: "Segway-Ninebot",
    brandSlug: "segway",
    isStar: true,
    category: "e-scooter",
    categoryLabel: {
      pt: "Trotinete / Conforto Urbano", en: "Scooter / Urban Comfort", es: "Patinete / Confort Urbano", fr: "Trottinette / Confort Urbain", de: "E-Scooter / Komfort"
    },
    image: "/images/bikes/arid-rr.webp",
    rating: "4.9 (185)",
    drivetrainShort: "Traseira 450W-900W max",
    suspensionShort: "Dupa Suspensão (Hidráulica / Mola)",
    tags: ["Traction Control (TCS)", "Find My Tracking", "Tubeless 10\" Self-Healing"],
    specs: {
      frame: "Aço de liga de grau aeroespacial de alta resistência",
      drivetrain: "Motor de cubo sem escovas (450W nominal, 900W pico)",
      suspension: "Amortecedor hidráulico dianteiro / Mola traseira dupla",
      brakes: "Tambor dianteiro / Eletrónico traseiro E-ABS",
      wheels: "10 polegadas Tubeless Pneumático com camada auto-regeneradora",
      motor: "Segway Brushless Hub Motor (70km autonomia)",
      battery: "551 Wh Smart BMS Battery Pack",
      useKey: "scooter.ninebot.use"
    },
    stats: {
      terrains: { trails: 10, downhill: 5, climbing: 60, gravel: 35, urban: 100 },
      performance: { battery: 85, agility: 92, power: 65, weight: 80 }
    }
  },
  {
    id: "xiaomi-scooter-4-pro",
    price: 699,
    name: "Xiaomi Electric Scooter 4 Pro",
    brand: "Xiaomi",
    brandSlug: "xiaomi",
    isStar: false,
    category: "e-scooter",
    categoryLabel: {
      pt: "Trotinete / Commuter Diário", en: "Scooter / Daily Commuter", es: "Patinete / Commuter Diario", fr: "Trottinette / Trajet Quotidien", de: "E-Scooter / Pendler"
    },
    image: "/images/bikes/podium.webp",
    rating: "4.7 (142)",
    drivetrainShort: "Dianteira 350W-700W max",
    suspensionShort: "Rígida (Câmara-de-ar amortece)",
    tags: ["Magnetic Charging", "Xiaomi Home App", "Tubeless DuraGel 10\""],
    specs: {
      frame: "Liga de alumínio aeroespacial de alta resistência",
      drivetrain: "Motor de cubo sem escovas (350W nominal, 700W pico)",
      suspension: "Garfo Rígido",
      brakes: "E-ABS Dianteiro / Disco Traseiro",
      wheels: "10 polegadas Xiaomi DuraGel auto-regeneradoras",
      motor: "Xiaomi Brushless Hub Motor (55km autonomia)",
      battery: "446 Wh High-security Battery",
      useKey: "scooter.xiaomi.use"
    },
    stats: {
      terrains: { trails: 5, downhill: 5, climbing: 50, gravel: 20, urban: 100 },
      performance: { battery: 70, agility: 95, power: 55, weight: 88 }
    }
  },
  {
    id: "dualtron-victor-luxury",
    price: 2299,
    name: "Dualtron Victor Luxury",
    brand: "Minimotors Dualtron",
    brandSlug: "dualtron",
    isStar: true,
    category: "e-scooter",
    categoryLabel: {
      pt: "Trotinete / Alta Performance", en: "Scooter / High Performance", es: "Patinete / Alto Rendimiento", fr: "Trottinette / Haute Performance", de: "E-Scooter / High Performance"
    },
    image: "/images/bikes/summum-rr.webp",
    rating: "5.0 (58)",
    drivetrainShort: "Motor Duplo 4000W max",
    suspensionShort: "Suspensão de Borracha Ajustável",
    tags: ["Dual Brushless Motor", "EY3 Smart Display", "60V 30Ah LG Battery"],
    specs: {
      frame: "Liga de alumínio de grau de aviação 6082-T6",
      drivetrain: "Motores de cubo duplo (4000W máx. pico)",
      suspension: "Suspensão de borracha tipo cartucho dianteira e traseira (9 níveis)",
      brakes: "Travões de disco hidráulicos Zoom dianteiros e traseiros com ABS",
      wheels: "Pneumáticos largos de 10 polegadas x 3.0",
      motor: "Minimotors Dual Hub Motors (capacidade de velocidade de 80km/h)",
      battery: "1800 Wh LG Li-on Battery Pack",
      useKey: "scooter.dualtron.use"
    },
    stats: {
      terrains: { trails: 30, downhill: 40, climbing: 100, gravel: 50, urban: 90 },
      performance: { battery: 95, agility: 80, power: 100, weight: 50 }
    }
  },

  // ================= E-MOTO (Motos & Ciclomotores Elétricos) =================
  {
    id: "surron-light-bee-x",
    price: 4990,
    name: "Sur-Ron Light Bee X",
    brand: "Sur-Ron",
    brandSlug: "sur-ron",
    isStar: true,
    category: "e-moto",
    categoryLabel: {
      pt: "Off-Road / Ciclomotor Elétrico", en: "Off-Road / Electric Dirt Moped", es: "Off-Road / Ciclomotor Eléctrico", fr: "Tout-Terrain / Cyclomoteur Électrique", de: "Offroad / E-Dirtbike"
    },
    image: "/images/bikes/zendit-rr.webp",
    rating: "5.0 (134)",
    drivetrainShort: "Motor Central PMSM 6000W pico",
    suspensionShort: "DNM/KKE Invertida Regulável 200mm",
    tags: ["High Torque Chain Drive", "Lightweight Alloy Frame (56kg)", "60V 40Ah LG Pack"],
    specs: {
      frame: "Liga de alumínio forjado G3 ultraleve",
      drivetrain: "Motor central síncrono de íman permanente (PMSM) com correia/corrente",
      suspension: "DNM/KKE suspensão dianteira invertida 200mm / amortecedor traseiro Intersect TR",
      brakes: "Disco hidráulico de 4 pistões Sur-ron com pastilhas de metal",
      wheels: "Rodas offroad de raios de 19 polegadas (Dianteira/Traseira)",
      motor: "Sur-ron PMSM (Torque de 250Nm, velocidade de 75km/h)",
      battery: "2400 Wh 60V 40Ah Panasonic/LG lithium pack",
      useKey: "moto.surron.use"
    },
    stats: {
      terrains: { trails: 100, downhill: 95, climbing: 100, gravel: 95, urban: 40 },
      performance: { battery: 80, agility: 98, power: 100, weight: 65 }
    }
  },
  {
    id: "super-soco-tc-max",
    price: 4799,
    name: "Super Soco TC Max",
    brand: "Super Soco",
    brandSlug: "super-soco",
    isStar: false,
    category: "e-moto",
    categoryLabel: {
      pt: "Moto Elétrica / L3e (125cc)", en: "Electric Motorcycle / L3e (125cc equiv)", es: "Moto Eléctrica / L3e (125cc)", fr: "Moto Électrique / L3e (equiv 125cc)", de: "Elektromotorrad / L3e (125cc Klasse)"
    },
    image: "/images/bikes/fpodium-rr.webp",
    rating: "4.8 (89)",
    drivetrainShort: "Motor Central Correia 5000W pico",
    suspensionShort: "Garfo Invertido Hidráulico / Monoamortecedor",
    tags: ["Equivalente a 125cc", "Estilo Retro Cafe Racer", "72V 45Ah Removível"],
    specs: {
      frame: "Quadro principal em aço carbono com subquadro de alumínio",
      drivetrain: "Motor central com transmissão por correia dentada silenciosa",
      suspension: "Garfo dianteiro invertido / Monoamortecedor traseiro regulável",
      brakes: "Sistema de travagem combinada (CBS) com discos hidráulicos",
      wheels: "Rodas raiadas de 17 polegadas estilo retro",
      motor: "Super Soco Mid-Drive (Pico de 5kW, velocidade de 95km/h)",
      battery: "3240 Wh 72V 45Ah bateria extraível premium",
      useKey: "moto.supersoco.use"
    },
    stats: {
      terrains: { trails: 5, downhill: 5, climbing: 75, gravel: 30, urban: 100 },
      performance: { battery: 85, agility: 88, power: 85, weight: 60 }
    }
  },
  {
    id: "segway-e125s",
    price: 3899,
    name: "Segway E125S",
    brand: "Segway-Ninebot",
    brandSlug: "segway",
    isStar: true,
    category: "e-moto",
    categoryLabel: {
      pt: "Scooter Inteligente / L1e (50cc)", en: "Smart Scooter / L1e (50cc equiv)", es: "Scooter Inteligente / L1e (50cc)", fr: "Scooter Connecté / L1e (equiv 50cc)", de: "E-Roller Smart / L1e (50cc Klasse)"
    },
    image: "/images/bikes/neat_rr.webp",
    rating: "4.9 (52)",
    drivetrainShort: "Motor no Cubo Segway 3000W pico",
    suspensionShort: "Telescópica Dianteira / Amortecedor Duplo",
    tags: ["RideyGo! Smart App System", "ABS Braking System", "Dual Removable Batteries"],
    specs: {
      frame: "Estrutura tubular de aço estrutural de alta resistência",
      drivetrain: "Motor de cubo elétrico Segway integrado na roda traseira",
      suspension: "Garfo dianteiro telescópico / Amortecedor traseiro hidráulico duplo",
      brakes: "Travões de disco hidráulicos dianteiros e traseiros com ABS",
      wheels: "Jantes de liga leve de 12 polegadas",
      motor: "Segway Electric Hub Motor (velocidade de 45km/h, 140km autonomia máxima)",
      battery: "Duas baterias extraíveis de 48V 30Ah (Total 2880Wh)",
      useKey: "moto.segway.use"
    },
    stats: {
      terrains: { trails: 0, downhill: 0, climbing: 65, gravel: 10, urban: 100 },
      performance: { battery: 95, agility: 90, power: 75, weight: 55 }
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
