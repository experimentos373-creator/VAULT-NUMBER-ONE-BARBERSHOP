import { useState, useEffect, useCallback } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, X, Phone, Maximize2, Search, ZoomIn, ZoomOut, RefreshCw, SlidersHorizontal, Heart, GitCompare, Filter } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { bikes } from "../data/bikesData";

export default function CatalogPage() {
  const { t, language } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const brandFilter = searchParams.get("marca");
  const categoryFilter = searchParams.get("categoria");
  const bikeFilter = searchParams.get("bike");
  const [searchQuery, setSearchQuery] = useState("");

  const [priceFilter, setPriceFilter] = useState("all");
  const [materialFilter, setMaterialFilter] = useState("all");
  const [motorFilter, setMotorFilter] = useState("all");
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [showCategoryFilters, setShowCategoryFilters] = useState(false);

  const filterTexts = {
    advancedFilters: {
      pt: "Filtros Avançados", en: "Advanced Filters", es: "Filtros Avanzados", fr: "Filtres Avancés", de: "Erweiterte Filter"
    },
    clearFilters: {
      pt: "Limpar Filtros", en: "Clear Filters", es: "Limpiar Filtros", fr: "Effacer les Filtres", de: "Filter löschen"
    },
    price: {
      pt: "Preço", en: "Price", es: "Precio", fr: "Prix", de: "Preis"
    },
    priceAll: {
      pt: "Todos os Preços", en: "All Prices", es: "Todos los precios", fr: "Tous les prix", de: "Alle Preise"
    },
    under5k: {
      pt: "Até 5.000 €", en: "Under 5,000 €", es: "Hasta 5.000 €", fr: "Jusqu'à 5 000 €", de: "Unter 5.000 €"
    },
    between5k8k: {
      pt: "5.000 € - 8.000 €", en: "5,000 € - 8,000 €", es: "5.000 € - 8.000 €", fr: "5 000 € - 8 000 €", de: "5.000 € - 8.000 €"
    },
    over8k: {
      pt: "Mais de 8.000 €", en: "Over 8,000 €", es: "Más de 8.000 €", fr: "Plus de 8 000 €", de: "Über 8.000 €"
    },
    motor: {
      pt: "Motor / Tração", en: "Motor / System", es: "Motor / Sistema", fr: "Moteur / Système", de: "Motor / System"
    },
    motorAll: {
      pt: "Todos os Motores", en: "All Propulsion", es: "Todos los motores", fr: "Tous les moteurs", de: "Alle Motoren"
    },
    motorBosch: {
      pt: "Bosch CX", en: "Bosch CX", es: "Bosch CX", fr: "Bosch CX", de: "Bosch CX"
    },
    motorAvinox: {
      pt: "DJI Avinox", en: "DJI Avinox", es: "DJI Avinox", fr: "DJI Avinox", de: "DJI Avinox"
    },
    motorTQ: {
      pt: "TQ HPR50", en: "TQ HPR50", es: "TQ HPR50", fr: "TQ HPR50", de: "TQ HPR50"
    },
    motorNone: {
      pt: "Sem Motor (Muscular)", en: "No Motor (Muscular)", es: "Sin Motor (Muscular)", fr: "Sans Moteur (Musculaire)", de: "Ohne Motor (Muskelkraft)"
    },
    frame: {
      pt: "Material do Quadro", en: "Frame Material", es: "Material del cuadro", fr: "Matériau du cadre", de: "Rahmenmaterial"
    },
    frameAll: {
      pt: "Todos os Quadros", en: "All Frames", es: "Todos los cuadros", fr: "Tous les cadres", de: "Alle Rahmen"
    },
    frameCarbon: {
      pt: "Carbono", en: "Carbon", es: "Carbono", fr: "Carbone", de: "Carbon"
    },
    frameAlloy: {
      pt: "Alumínio", en: "Alloy / Alumínio", es: "Aluminio", fr: "Aluminium", de: "Aluminium"
    }
  };

  const getFilterText = (key) => {
    return filterTexts[key]?.[language] || filterTexts[key]?.pt || "";
  };

  const activeFilter = categoryFilter || "all";
  const activeBrand = brandFilter || "all";
  const selectedBike = bikeFilter ? bikes.find(b => b.id === bikeFilter) : null;

  const baseScale = 1.1;
  const zoomSteps = [1.0, 1.1, 1.25, 1.5];

  const getCurrentStepIndex = () => {
    let closestIdx = 0;
    let minDiff = Infinity;
    zoomSteps.forEach((step, idx) => {
      const diff = Math.abs((scale / baseScale) - step);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = idx;
      }
    });
    return closestIdx;
  };

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("route109_favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("route109_favorites", JSON.stringify(favorites));
    window.dispatchEvent(new Event("favorites_updated"));
  }, [favorites]);

  const toggleFavorite = (id, e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
  };

  // Fullscreen Image States
  const [isFullscreenImage, setIsFullscreenImage] = useState(false);
  const [fullscreenScale, setFullscreenScale] = useState(1);
  const [fullscreenPosition, setFullscreenPosition] = useState({ x: 0, y: 0 });
  const [isFullscreenDragging, setIsFullscreenDragging] = useState(false);
  const [fullscreenDragStart, setFullscreenDragStart] = useState({ x: 0, y: 0 });

  // Comparison States
  const [compareList, setCompareList] = useState([]);
  
  const toggleCompare = (bike, e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    setCompareList(prev => {
      if (prev.find(b => b.id === bike.id)) {
        return prev.filter(b => b.id !== bike.id);
      }
      if (prev.length >= 2) {
        return [prev[0], bike];
      }
      return [...prev, bike];
    });
  };

  // Hide WhatsApp floating button when comparison drawer is open
  useEffect(() => {
    const waButton = document.getElementById("whatsapp-floating-button") || document.querySelector(".whatsapp-btn")?.parentElement;
    if (waButton) {
      if (compareList.length > 0) {
        waButton.style.display = "none";
      } else {
        waButton.style.display = "block";
      }
    }
    return () => {
      if (waButton) waButton.style.display = "block";
    };
  }, [compareList]);

  const [activeTab, setActiveTab] = useState("specs");
  
  // Interactive Zoom & Pan states
  const [scale, setScale] = useState(baseScale);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const prefix = language === "pt" ? "" : `/${language}`;

  const closeModal = useCallback(() => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("bike");
    setSearchParams(newParams);
    setActiveTab("specs");
    setScale(baseScale);
    setPosition({ x: 0, y: 0 });
  }, [searchParams, setSearchParams, baseScale]);

  // Prevent scroll when modal or fullscreen is open
  useEffect(() => {
    if (selectedBike || isFullscreenImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedBike, isFullscreenImage]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeModal]);

  const handleMouseDown = (e) => {
    if (scale <= baseScale) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging || scale <= baseScale) return;
    e.preventDefault();
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    
    const maxDragX = (scale - baseScale) * 205;
    const maxDragY = (scale - baseScale) * 155;
    const constrainedX = Math.max(-maxDragX, Math.min(maxDragX, newX));
    const constrainedY = Math.max(-maxDragY, Math.min(maxDragY, newY));
    
    setPosition({ x: constrainedX, y: constrainedY });
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    if (scale <= baseScale || e.touches.length !== 1) return;
    setIsDragging(true);
    const touch = e.touches[0];
    setDragStart({ x: touch.clientX - position.x, y: touch.clientY - position.y });
  };

  const handleTouchMove = (e) => {
    if (!isDragging || scale <= baseScale || e.touches.length !== 1) return;
    const touch = e.touches[0];
    const newX = touch.clientX - dragStart.x;
    const newY = touch.clientY - dragStart.y;
    
    const maxDragX = (scale - baseScale) * 205;
    const maxDragY = (scale - baseScale) * 155;
    const constrainedX = Math.max(-maxDragX, Math.min(maxDragX, newX));
    const constrainedY = Math.max(-maxDragY, Math.min(maxDragY, newY));
    
    setPosition({ x: constrainedX, y: constrainedY });
  };

  const handleDoubleClick = () => {
    if (scale > baseScale) {
      setScale(baseScale);
      setPosition({ x: 0, y: 0 });
    } else {
      setScale(baseScale * 1.5);
      setPosition({ x: 0, y: 0 });
    }
  };

  const getRatingDetails = (val) => {
    if (val <= 20) return { level: 1, color: "bg-red-500", label: t("catalog.stats.level.poor") };
    if (val <= 40) return { level: 2, color: "bg-orange-500", label: t("catalog.stats.level.fair") };
    if (val <= 60) return { level: 3, color: "bg-yellow-500", label: t("catalog.stats.level.good") };
    if (val <= 80) return { level: 4, color: "bg-lime-500", label: t("catalog.stats.level.verygood") };
    return { level: 5, color: "bg-emerald-500", label: t("catalog.stats.level.excellent") };
  };

  const handleRequestQuote = () => {
    const bikeModel = selectedBike.name;
    let message = `Estou interessado na bike ${bikeModel}`;
    if (language === "en") {
      message = `I am interested in the ${bikeModel} bike`;
    } else if (language === "es") {
      message = `Estoy interesado en la bicicleta ${bikeModel}`;
    } else if (language === "fr") {
      message = `Je suis intéressé par le vélo ${bikeModel}`;
    } else if (language === "de") {
      message = `Ich interessiere mich für das Fahrrad ${bikeModel}`;
    }
    const whatsappUrl = `https://wa.me/351935141143?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Dynamic page title
  useEffect(() => {
    const titles = {
      pt: "Catálogo de Bicicletas | Route N109",
      en: "Bike Catalog | Route N109",
      es: "Catálogo de Bicicletas | Route N109",
      fr: "Catalogue de Vélos | Route N109",
      de: "Fahrradkatalog | Route N109"
    };
    document.title = titles[language] || titles.pt;
  }, [language]);

  const categories = [
    { id: "all", label: t("catalog.filter.all") },
    { id: "e-mtb", label: t("catalog.filter.emtb") },
    { id: "e-urban", label: t("catalog.filter.eurban") },
    { id: "e-scooter", label: t("catalog.filter.escooter") },
    { id: "e-moto", label: t("catalog.filter.emoto") }
  ];

  let filteredBikes = bikes;
  if (activeFilter !== "all") {
    if (activeFilter === "favoritos") {
      filteredBikes = filteredBikes.filter(b => favorites.includes(b.id));
    } else {
      filteredBikes = filteredBikes.filter(b => b.category === activeFilter);
    }
  }
  if (activeBrand !== "all") {
    filteredBikes = filteredBikes.filter(b => b.brandSlug === activeBrand);
  }

  // Price Filter
  if (priceFilter === "under5000") {
    filteredBikes = filteredBikes.filter(b => b.price <= 5000);
  } else if (priceFilter === "5000to8000") {
    filteredBikes = filteredBikes.filter(b => b.price > 5000 && b.price <= 8000);
  } else if (priceFilter === "over8000") {
    filteredBikes = filteredBikes.filter(b => b.price > 8000);
  }

  // Material Filter
  if (materialFilter === "carbon") {
    filteredBikes = filteredBikes.filter(b => 
      b.name.toLowerCase().includes("carbon") || 
      b.tags.some(t => t.toLowerCase().includes("carbon")) ||
      (b.specs.frame && b.specs.frame.toLowerCase().includes("carbon"))
    );
  } else if (materialFilter === "alloy") {
    filteredBikes = filteredBikes.filter(b => 
      b.name.toLowerCase().includes("alloy") || 
      b.tags.some(t => t.toLowerCase().includes("alloy")) ||
      (b.specs.frame && b.specs.frame.toLowerCase().includes("alloy")) ||
      (b.id.includes("-r") && !b.id.includes("carbon") && !b.id.includes("neat") && !b.id.includes("zendit"))
    );
  }

  // Motor Filter
  if (motorFilter === "bosch") {
    filteredBikes = filteredBikes.filter(b => 
      b.specs.motor && b.specs.motor.toLowerCase().includes("bosch")
    );
  } else if (motorFilter === "djiavinox") {
    filteredBikes = filteredBikes.filter(b => 
      b.specs.motor && (b.specs.motor.toLowerCase().includes("avinox") || b.specs.motor.toLowerCase().includes("dji"))
    );
  } else if (motorFilter === "tq") {
    filteredBikes = filteredBikes.filter(b => 
      b.specs.motor && b.specs.motor.toLowerCase().includes("tq")
    );
  } else if (motorFilter === "muscular") {
    filteredBikes = filteredBikes.filter(b => !b.specs.motor);
  }

  if (searchQuery.trim() !== "") {
    const q = searchQuery.toLowerCase();
    filteredBikes = filteredBikes.filter(b => 
      b.name.toLowerCase().includes(q) ||
      b.brand.toLowerCase().includes(q) ||
      b.tags.some(tag => tag.toLowerCase().includes(q)) ||
      (b.specs.motor && b.specs.motor.toLowerCase().includes(q)) ||
      (b.specs.battery && b.specs.battery.toLowerCase().includes(q))
    );
  }

  // Sort popular/starred vehicles first
  const sortedBikes = [...filteredBikes].sort((a, b) => {
    if (a.isStar && !b.isStar) return -1;
    if (!a.isStar && b.isStar) return 1;
    return a.name.localeCompare(b.name);
  });

  const handleCategoryFilterChange = (id) => {
    const newParams = new URLSearchParams(searchParams);
    if (id === "all") {
      newParams.delete("categoria");
    } else {
      newParams.set("categoria", id);
    }
    setSearchParams(newParams);
  };

  const openBikeModal = (bike) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("bike", bike.id);
    setSearchParams(newParams);
    setActiveTab("specs");
    setScale(baseScale);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div className="bg-white min-h-screen pt-24 md:pt-32">
      {/* Back button */}
      <div className="max-w-[1400px] mx-auto px-6 mb-8">
        <Link to={prefix || "/"} className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors font-semibold text-sm">
          <ArrowLeft className="w-4 h-4" />
          {t("general.backToHome")}
        </Link>
      </div>

      {/* Background & Catalog Layout */}
      <section className="pb-16 md:pb-28 bg-white text-black relative">
        <div className="absolute left-0 top-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-black uppercase text-xs tracking-widest bg-primary/10 px-4 py-1.5 rounded-none mb-4 inline-block">
              {t("menu.badge")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight leading-none mb-6 uppercase text-neutral-900">
              {t("catalog.pageTitle")}
            </h1>
            <p className="text-neutral-600 text-sm md:text-base font-normal leading-relaxed">
              {t("catalog.pageSubtitle")}
            </p>
          </div>

          {/* Keyword Search */}
          <div className="max-w-md mx-auto mb-8 bg-neutral-50 border border-neutral-200 rounded-2xl px-5 py-3 flex items-center gap-3 shadow-sm hover:border-neutral-300 hover:shadow-md transition-all duration-300">
            <Search className="w-5 h-5 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("catalog.search.placeholder")}
              className="bg-transparent text-xs font-semibold text-neutral-800 w-full outline-none border-none placeholder-neutral-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-neutral-400 hover:text-neutral-800 transition-colors border-none bg-transparent cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filter Buttons Row */}
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
              {/* Category Filters Toggle */}
              <button
                onClick={() => { setShowCategoryFilters(!showCategoryFilters); setShowAdvancedFilters(false); }}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-xs font-black uppercase tracking-wider rounded-xl transition-all duration-300 border-none cursor-pointer shadow-sm hover:shadow-md ${
                  showCategoryFilters 
                    ? "bg-primary text-white" 
                    : "bg-neutral-900 hover:bg-neutral-800 text-white"
                }`}
              >
                <Filter className="w-4 h-4" />
                {language === "pt" ? "Filtros" : language === "es" ? "Filtros" : language === "fr" ? "Filtres" : language === "de" ? "Filter" : "Filters"}
                {activeFilter !== "all" && activeFilter !== "favoritos" && (
                  <span className="bg-white text-primary text-[10px] font-black rounded-full h-5 w-5 flex items-center justify-center ml-1">
                    1
                  </span>
                )}
              </button>

              {/* Favorites Toggle */}
              <button
                onClick={() => {
                  const newFilter = activeFilter === "favoritos" ? "all" : "favoritos";
                  handleCategoryFilterChange(newFilter);
                  setShowCategoryFilters(false);
                  setShowAdvancedFilters(false);
                }}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-xs font-black uppercase tracking-wider rounded-xl transition-all duration-300 border-none cursor-pointer shadow-sm hover:shadow-md ${
                  activeFilter === "favoritos" 
                    ? "bg-red-500 text-white" 
                    : "bg-neutral-900 hover:bg-neutral-800 text-white"
                }`}
              >
                <Heart className={`w-4 h-4 ${activeFilter === "favoritos" ? "fill-current" : ""}`} />
                {language === "pt" ? "Favoritos" : language === "es" ? "Favoritos" : language === "fr" ? "Favoris" : language === "de" ? "Favoriten" : "Favorites"}
                {favorites.length > 0 && (
                  <span className={`text-[10px] font-black rounded-full h-5 w-5 flex items-center justify-center ml-1 ${
                    activeFilter === "favoritos" ? "bg-white text-red-500" : "bg-red-500 text-white"
                  }`}>
                    {favorites.length}
                  </span>
                )}
              </button>

              {/* Advanced Filters Toggle */}
              <button
                onClick={() => { setShowAdvancedFilters(!showAdvancedFilters); setShowCategoryFilters(false); }}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-xs font-black uppercase tracking-wider rounded-xl transition-all duration-300 border-none cursor-pointer shadow-sm hover:shadow-md ${
                  showAdvancedFilters 
                    ? "bg-primary text-white" 
                    : "bg-neutral-900 hover:bg-neutral-800 text-white"
                }`}
              >
                <SlidersHorizontal className="w-4 h-4" />
                {getFilterText("advancedFilters")}
                {(priceFilter !== "all" || materialFilter !== "all" || motorFilter !== "all") && (
                  <span className="bg-white text-primary text-[10px] font-black rounded-full h-5 w-5 flex items-center justify-center ml-1">
                    { (priceFilter !== "all" ? 1 : 0) + (materialFilter !== "all" ? 1 : 0) + (motorFilter !== "all" ? 1 : 0) }
                  </span>
                )}
              </button>
            </div>

            {/* Category Filters Panel */}
            {showCategoryFilters && (
              <div className="w-full max-w-2xl mt-6 p-6 bg-neutral-50 border border-neutral-200 rounded-2xl shadow-inner animate-fade-in text-left">
                <div className="flex justify-between items-center mb-4 border-b border-neutral-200 pb-2">
                  <h3 className="text-xs font-black uppercase tracking-wider text-neutral-800">
                    {language === "pt" ? "Categoria" : language === "es" ? "Categoría" : language === "fr" ? "Catégorie" : language === "de" ? "Kategorie" : "Category"}
                  </h3>
                  {activeFilter !== "all" && (
                    <button
                      onClick={() => {
                        handleCategoryFilterChange("all");
                      }}
                      className="text-[10px] text-neutral-400 hover:text-red-500 font-extrabold uppercase tracking-wider bg-transparent border-none cursor-pointer transition-colors"
                    >
                      {language === "pt" ? "Limpar" : "Clear"}
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((cat, idx) => {
                    const isLastOdd = categories.length % 2 !== 0 && idx === categories.length - 1;
                    return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        handleCategoryFilterChange(cat.id);
                        setShowCategoryFilters(false);
                      }}
                      className={`text-center px-3 py-2.5 text-xs font-bold rounded-lg border transition-all duration-200 cursor-pointer ${
                        isLastOdd ? "col-span-2 max-w-[50%] mx-auto" : ""
                      } ${
                        activeFilter === cat.id
                          ? "bg-primary text-white border-primary shadow-sm"
                          : "bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-100 hover:text-neutral-900"
                      }`}
                    >
                      {cat.label}
                    </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Advanced Filters Panel */}
            {showAdvancedFilters && (
              <div className="w-full max-w-4xl mt-6 p-6 bg-neutral-50 border border-neutral-200 rounded-2xl shadow-inner animate-fade-in grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                {/* Price Filter */}
                <div>
                  <div className="flex justify-between items-center mb-3 border-b border-neutral-200 pb-1.5">
                    <h3 className="text-xs font-black uppercase tracking-wider text-neutral-800">
                      {getFilterText("price")}
                    </h3>
                    <button
                      onClick={() => {
                        setPriceFilter("all");
                        setMaterialFilter("all");
                        setMotorFilter("all");
                        setSearchQuery("");
                        const newParams = new URLSearchParams(searchParams);
                        newParams.delete("categoria");
                        newParams.delete("marca");
                        setSearchParams(newParams);
                      }}
                      className="text-[10px] text-neutral-400 hover:text-red-500 font-extrabold uppercase tracking-wider bg-transparent border-none cursor-pointer transition-colors"
                    >
                      {language === "pt" ? "Limpar Filtros" : "Clear Filters"}
                    </button>
                  </div>
                  <div className="flex flex-col gap-2">
                    {[
                      { id: "all", label: getFilterText("priceAll") },
                      { id: "under5000", label: getFilterText("under5k") },
                      { id: "5000to8000", label: getFilterText("between5k8k") },
                      { id: "over8000", label: getFilterText("over8k") }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setPriceFilter(opt.id)}
                        className={`text-left px-3 py-2 text-xs font-bold rounded-lg border transition-all duration-205 cursor-pointer ${
                          priceFilter === opt.id
                            ? "bg-primary text-white border-primary shadow-sm"
                            : "bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-100 hover:text-neutral-900"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Propulsion Filter */}
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-neutral-800 mb-3 border-b border-neutral-200 pb-1.5">
                    {getFilterText("motor")}
                  </h3>
                  <div className="flex flex-col gap-2">
                    {[
                      { id: "all", label: getFilterText("motorAll") },
                      { id: "bosch", label: getFilterText("motorBosch") },
                      { id: "djiavinox", label: getFilterText("motorAvinox") },
                      { id: "tq", label: getFilterText("motorTQ") },
                      { id: "muscular", label: getFilterText("motorNone") }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setMotorFilter(opt.id)}
                        className={`text-left px-3 py-2 text-xs font-bold rounded-lg border transition-all duration-205 cursor-pointer ${
                          motorFilter === opt.id
                            ? "bg-primary text-white border-primary shadow-sm"
                            : "bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-100 hover:text-neutral-900"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Frame Material Filter */}
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-neutral-800 mb-3 border-b border-neutral-200 pb-1.5">
                    {getFilterText("frame")}
                  </h3>
                  <div className="flex flex-col gap-2 mb-4">
                    {[
                      { id: "all", label: getFilterText("frameAll") },
                      { id: "carbon", label: getFilterText("frameCarbon") },
                      { id: "alloy", label: getFilterText("frameAlloy") }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setMaterialFilter(opt.id)}
                        className={`text-left px-3 py-2 text-xs font-bold rounded-lg border transition-all duration-205 cursor-pointer ${
                          materialFilter === opt.id
                            ? "bg-primary text-white border-primary shadow-sm"
                            : "bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-100 hover:text-neutral-900"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>

                  {(priceFilter !== "all" || materialFilter !== "all" || motorFilter !== "all") && (
                    <button
                      onClick={() => {
                        setPriceFilter("all");
                        setMaterialFilter("all");
                        setMotorFilter("all");
                      }}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-neutral-900 hover:bg-red-600 text-white text-xs font-black uppercase tracking-wider rounded-lg transition-all duration-300 border-none cursor-pointer shadow-sm"
                    >
                      <X className="w-4 h-4" />
                      {getFilterText("clearFilters")}
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Bike Grid — High-fidelity E-commerce Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sortedBikes.map((bike) => (
              <div
                key={bike.id}
                className="flex flex-col bg-white border border-neutral-200/80 rounded-2xl p-5 hover:border-neutral-300 hover:shadow-xl transition-all duration-300 text-left group h-full relative"
              >
                {bike.isStar && (
                  <div className="absolute top-3 left-3 z-10 bg-neutral-900 text-white text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 border border-neutral-800">
                    <span className="text-yellow-400 text-[10px]">★</span> {t("catalog.badge.star")}
                  </div>
                )}

                {/* Favorite Heart Button */}
                <button
                  onClick={(e) => toggleFavorite(bike.id, e)}
                  className={`absolute top-3 right-3 z-10 p-2 rounded-full backdrop-blur-md transition-all duration-300 border border-neutral-200/80 cursor-pointer shadow-sm ${
                    favorites.includes(bike.id) 
                      ? "bg-red-50 text-red-500 border-red-200 hover:bg-red-100" 
                      : "bg-white/80 text-neutral-400 border-neutral-200 hover:text-neutral-600 hover:bg-white"
                  }`}
                  aria-label="Toggle Favorite"
                >
                  <Heart className={`w-4 h-4 ${favorites.includes(bike.id) ? "fill-current" : ""}`} />
                </button>
                {/* Product Image Frame */}
                <div 
                  onClick={() => openBikeModal(bike)}
                  className="bg-white rounded-xl aspect-[4/3] flex items-center justify-center relative overflow-hidden mb-4 cursor-pointer p-4"
                >
                  <img
                    src={bike.image}
                    alt={bike.name}
                    loading="lazy"
                    className="max-w-full max-h-full object-contain scale-125 transition-transform duration-500 ease-out group-hover:scale-130 mix-blend-multiply"
                  />
                  <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Meta info (Brand Badge + Rating) */}
                <div className="flex justify-between items-center mb-3">
                  <div className="flex gap-1.5 items-center">
                    <span className="bg-neutral-100 text-neutral-800 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded">
                      {bike.brand}
                    </span>
                    {bike.specs.motor && (
                      <span className="bg-primary/10 text-primary border border-primary/20 text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded">
                        {bike.specs.motor.includes("Avinox") ? "DJI Avinox" : bike.specs.motor.includes("Bosch") ? "Bosch CX" : "E-Bike"}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-neutral-500 font-bold flex items-center gap-1">
                    <span className="text-yellow-400">★</span> {bike.rating}
                  </span>
                </div>

                {/* Product Title */}
                <h2 
                  onClick={() => openBikeModal(bike)}
                  className="text-sm font-black uppercase tracking-tight text-neutral-900 group-hover:text-primary transition-colors cursor-pointer mb-3 line-clamp-1"
                >
                  {bike.name}
                </h2>

                {/* Technical Specs (2 Columns) */}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-neutral-100/80 mb-3">
                  <div>
                    <span className="text-[8px] text-neutral-500 uppercase tracking-widest block mb-0.5 font-bold">
                      {t("catalog.specs.drivetrain")}
                    </span>
                    <span className="text-[11px] text-neutral-900 font-extrabold block truncate">
                      {bike.drivetrainShort}
                    </span>
                  </div>
                  <div>
                    <span className="text-[8px] text-neutral-500 uppercase tracking-widest block mb-0.5 font-bold">
                      {t("catalog.specs.suspension")}
                    </span>
                    <span className="text-[11px] text-neutral-900 font-extrabold block truncate">
                      {bike.suspensionShort}
                    </span>
                  </div>
                </div>

                {/* Technology Pills */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {bike.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="bg-neutral-100/70 text-neutral-600 text-[8px] font-extrabold px-1.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-auto pt-3 border-t border-neutral-100/80 flex items-center justify-between gap-3">
                  {bike.price && (
                    <div className="flex flex-col">
                      <span className="text-[8px] text-neutral-500 uppercase tracking-widest block font-bold">
                        {t("catalog.specs.pvp")}
                      </span>
                      <span className="text-[13px] text-neutral-950 font-black whitespace-nowrap">
                        {new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(bike.price)}
                      </span>
                    </div>
                  )}
                  <div className="flex-1 flex gap-2">
                    <button
                      onClick={() => openBikeModal(bike)}
                      className="flex-1 bg-neutral-950 hover:bg-primary text-white text-[10px] font-black uppercase tracking-widest text-center py-2.5 rounded-lg transition-colors cursor-pointer border-none"
                    >
                      {language === "en" ? "View" : language === "es" ? "Ver" : language === "fr" ? "Voir" : language === "de" ? "Ansehen" : "Visualizar"}
                    </button>
                    <button
                      onClick={(e) => toggleCompare(bike, e)}
                      className={`px-3 py-2.5 rounded-lg border transition-colors cursor-pointer flex items-center justify-center ${
                        compareList.some(b => b.id === bike.id)
                          ? "bg-primary border-primary text-white"
                          : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400 hover:text-neutral-900"
                      }`}
                      title={language === "pt" ? "Comparar" : "Compare"}
                      aria-label="Compare Bike"
                    >
                      <GitCompare className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredBikes.length === 0 && (
            <div className="text-center py-16 max-w-md mx-auto">
              <p className="text-neutral-500 text-sm font-semibold leading-relaxed">
                {activeFilter === "favoritos" ? (
                  language === "pt" ? "Ainda não adicionou nenhuma bicicleta aos favoritos. Clique no ícone de coração ❤️ para guardar os seus modelos preferidos!" :
                  language === "es" ? "Aún no has añadido ninguna bicicleta a favoritos. ¡Haz clic en el icono de corazón ❤️ para guardar tus modelos favoritos!" :
                  language === "fr" ? "Vous n'avez pas encore ajouté de vélo à vos favoris. Cliquez sur l'icône de cœur ❤️ pour enregistrer vos modèles préférés !" :
                  language === "de" ? "Sie haben noch keine Fahrräder zu den Favoriten hinzugefügt. Klicken Sie auf das Herzsymbol ❤️, um Ihre Lieblingsmodelle zu speichern!" :
                  "You haven't added any bikes to favorites yet. Click the heart icon ❤️ to save your favorite models!"
                ) : (
                  language === "en" ? "No bikes found with the selected filters." : "Nenhuma bicicleta encontrada com os filtros selecionados."
                )}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Modern Compact Single-Screen Modal with Specs & Performance Stats Tabs */}
      {selectedBike && (
        <div className="fixed inset-0 w-full h-full flex items-center justify-center z-50 p-4 sm:p-6 md:p-8 animate-fade-in bg-neutral-950/80 backdrop-blur-md">
          <div className="absolute inset-0 w-full h-full cursor-default" onClick={closeModal} />
          
          {/* Main Modal Box: Increased height to 560px for desktop to fit details and stats beautifully */}
          <div className="bg-neutral-950 text-white border border-neutral-900 w-full max-w-5xl rounded-2xl shadow-2xl relative z-10 flex flex-col md:flex-row overflow-hidden max-h-[90vh] md:h-[560px] animate-scale-up">
            
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white bg-neutral-900/80 p-2 rounded-full border border-neutral-800 hover:border-neutral-700 transition-colors z-20 cursor-pointer"
              aria-label={t("catalog.modal.close")}
            >
              <X className="w-4 h-4" />
            </button>

            {/* Left Frame: Zoomable & Pannable Image Container with 25% expanded initial enquadramento */}
            <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-1.5 md:p-2 border-b md:border-b-0 md:border-r border-neutral-900/60 h-[250px] md:h-full relative overflow-hidden group select-none">
              {/* Expand to Fullscreen Button */}
              <button
                onClick={() => setIsFullscreenImage(true)}
                className="absolute top-3 left-3 bg-neutral-900/90 hover:bg-neutral-850 text-white p-2 rounded-full border border-neutral-800 transition-all duration-300 z-10 cursor-pointer flex items-center justify-center shadow-lg"
                title="Expand Image"
                aria-label="Expand Image to Fullscreen"
              >
                <Maximize2 className="w-4 h-4 text-primary" />
              </button>

              <div 
                className="w-full h-full flex items-center justify-center overflow-hidden cursor-default relative"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUpOrLeave}
                onMouseLeave={handleMouseUpOrLeave}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleMouseUpOrLeave}
                onDoubleClick={handleDoubleClick}
              >
                <img 
                  src={selectedBike.image} 
                  alt={selectedBike.name} 
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                    transformOrigin: "center center",
                    transition: isDragging ? "none" : "transform 0.2s ease-out"
                  }}
                  className={`max-h-full max-w-full object-contain select-none mix-blend-multiply ${
                    scale > baseScale ? (isDragging ? "cursor-grabbing" : "cursor-grab") : "cursor-zoom-in"
                  }`}
                  draggable="false"
                />
              </div>

              {/* Floating Zoom Controls */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-1 bg-neutral-900/90 border border-neutral-800 rounded-full px-3 py-1.5 shadow-lg z-10">
                <button
                  onClick={() => {
                    const currentIdx = getCurrentStepIndex();
                    if (currentIdx > 0) {
                      const nextStep = zoomSteps[currentIdx - 1];
                      const nextScale = baseScale * nextStep;
                      setScale(nextScale);
                      if (nextStep === 1.0) setPosition({ x: 0, y: 0 });
                    }
                  }}
                  disabled={getCurrentStepIndex() === 0}
                  className="w-7 h-7 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-neutral-700 text-white cursor-pointer transition-colors border-none text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <span className="text-[10px] font-black text-neutral-300 min-w-10 text-center uppercase tracking-widest select-none">
                  {Math.round(zoomSteps[getCurrentStepIndex()] * 100)}%
                </span>
                <button
                  onClick={() => {
                    const currentIdx = getCurrentStepIndex();
                    if (currentIdx < zoomSteps.length - 1) {
                      const nextStep = zoomSteps[currentIdx + 1];
                      const nextScale = baseScale * nextStep;
                      setScale(nextScale);
                    }
                  }}
                  disabled={getCurrentStepIndex() === zoomSteps.length - 1}
                  className="w-7 h-7 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-neutral-700 text-white cursor-pointer transition-colors border-none text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed"
                  title="Zoom In"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
                {scale !== baseScale && (
                  <button
                    onClick={() => {
                      setScale(baseScale);
                      setPosition({ x: 0, y: 0 });
                    }}
                    className="ml-1 w-7 h-7 flex items-center justify-center rounded-full bg-primary hover:bg-red-700 text-white cursor-pointer transition-colors border-none"
                    title="Reset"
                  >
                    <RefreshCw className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>

            {/* Right Frame: Specifications & Call to Action (Fixed & Compact, Inner scrollable container) */}
            <div className="w-full md:w-1/2 p-6 md:p-7 flex flex-col justify-between h-full bg-neutral-950 overflow-hidden">
              
              {/* Header Title Area (Fixed) */}
              <div className="mb-4">
                {/* Category & Badge */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-primary font-black uppercase text-[8px] tracking-widest bg-primary/10 px-2.5 py-1 rounded">
                    {selectedBike.categoryLabel[language] || selectedBike.categoryLabel.pt}
                  </span>
                  <span className="text-[10px] text-neutral-400 font-bold flex items-center gap-1 md:mr-10">
                    <span className="text-yellow-400">★</span> {selectedBike.rating}
                  </span>
                </div>

                {/* Bike Title & Favorite Heart Button */}
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white leading-tight flex-1">
                    {selectedBike.name}
                  </h3>
                  <button
                    onClick={(e) => toggleFavorite(selectedBike.id, e)}
                    className={`p-2 rounded-xl transition-all duration-300 border cursor-pointer flex items-center justify-center shadow-sm ${
                      favorites.includes(selectedBike.id)
                        ? "bg-red-500/15 text-red-500 border-red-500/40"
                        : "bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white"
                    }`}
                    aria-label="Toggle Favorite"
                  >
                    <Heart className={`w-5 h-5 ${favorites.includes(selectedBike.id) ? "fill-current" : ""}`} />
                  </button>
                </div>
                {selectedBike.price && (
                  <div className="mt-2.5 flex items-baseline gap-2">
                    <span className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider">
                      {t("catalog.specs.pvp")}:
                    </span>
                    <span className="text-xl md:text-2xl font-black text-white">
                      {new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(selectedBike.price)}
                    </span>
                  </div>
                )}
              </div>

              {/* Tab Selector (Fixed) */}
              <div className="flex gap-4 border-b border-neutral-900 pb-2 mb-4">
                <button
                  onClick={() => setActiveTab("specs")}
                  className={`pb-1 text-xs font-black uppercase tracking-wider border-b-2 transition-colors cursor-pointer border-none bg-transparent outline-none ${
                    activeTab === "specs" ? "border-primary text-white" : "border-transparent text-neutral-400 hover:text-white"
                  }`}
                >
                  {t("catalog.modal.tabSpecs")}
                </button>
                <button
                  onClick={() => setActiveTab("stats")}
                  className={`pb-1 text-xs font-black uppercase tracking-wider border-b-2 transition-colors cursor-pointer border-none bg-transparent outline-none ${
                    activeTab === "stats" ? "border-primary text-white" : "border-transparent text-neutral-400 hover:text-white"
                  }`}
                >
                  {t("catalog.modal.tabStats")}
                </button>
              </div>

              {/* Scrollable Content Container */}
              <div className="flex-1 overflow-y-auto pr-1 mb-4 min-h-0">
                {activeTab === "specs" ? (
                  /* Specs Tab Content - Two-column layout using premium styled cards */
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: t("catalog.specs.frame"), value: selectedBike.specs.frame, colSpan: "col-span-2" },
                      { label: t("catalog.specs.motor") || "Motor", value: selectedBike.specs.motor, hide: !selectedBike.specs.motor },
                      { label: t("catalog.specs.battery") || "Bateria", value: selectedBike.specs.battery, hide: !selectedBike.specs.battery },
                      { label: t("catalog.specs.drivetrain"), value: selectedBike.specs.drivetrainKey ? t(selectedBike.specs.drivetrainKey) : selectedBike.specs.drivetrain, colSpan: "col-span-2" },
                      { label: t("catalog.specs.suspension"), value: selectedBike.specs.suspensionKey ? t(selectedBike.specs.suspensionKey) : selectedBike.specs.suspension, hide: !selectedBike.specs.suspension && !selectedBike.specs.suspensionKey, colSpan: "col-span-2" },
                      { label: t("catalog.specs.brakes"), value: selectedBike.specs.brakes },
                      { label: t("catalog.specs.wheels"), value: selectedBike.specs.wheels },
                      { label: t("catalog.specs.use"), value: t(selectedBike.specs.useKey), highlight: true, colSpan: "col-span-2" },
                    ].filter(s => !s.hide).map((spec, i) => (
                      <div 
                        key={i} 
                        className={`bg-neutral-900/40 border border-neutral-900/60 rounded-xl p-3 flex flex-col gap-1.5 text-left transition-colors hover:border-neutral-800 ${
                          spec.colSpan || "col-span-1"
                        }`}
                      >
                        <span className="text-[8px] font-black uppercase tracking-widest text-neutral-450">
                          {spec.label}
                        </span>
                        <span className={`text-[11px] font-semibold leading-normal ${
                          spec.highlight ? "text-primary font-black" : "text-neutral-250"
                        }`}>
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Stats Tab Content */
                  <div className="space-y-5">
                    {/* Terrains suitability */}
                    <div>
                      <h4 className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-3 pb-1 border-b border-neutral-900">
                        {t("catalog.stats.terrains")}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                        {[
                          { label: t("catalog.stats.terrain.trails"), value: selectedBike.stats?.terrains?.trails || 50 },
                          { label: t("catalog.stats.terrain.downhill"), value: selectedBike.stats?.terrains?.downhill || 50 },
                          { label: t("catalog.stats.terrain.climbing"), value: selectedBike.stats?.terrains?.climbing || 50 },
                          { label: t("catalog.stats.terrain.gravel"), value: selectedBike.stats?.terrains?.gravel || 50 },
                          { label: t("catalog.stats.terrain.urban"), value: selectedBike.stats?.terrains?.urban || 50 },
                        ].map((terrain, idx) => {
                          const { level, color, label } = getRatingDetails(terrain.value);
                          return (
                            <div key={idx} className="bg-neutral-900/40 border border-neutral-900/60 rounded-xl p-2.5 flex flex-col gap-1.5 text-left">
                              <div className="flex justify-between items-center text-[9px] font-bold text-neutral-400 leading-none">
                                <span>{terrain.label}</span>
                                <span className="text-white font-extrabold uppercase text-[8px] tracking-wide bg-neutral-900 px-1.5 py-0.5 rounded">
                                  {label}
                                </span>
                              </div>
                              <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((step) => (
                                  <div 
                                    key={step} 
                                    className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                                      step <= level ? color : "bg-neutral-800"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Performance Profile */}
                    <div>
                      <h4 className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-3 pb-1 border-b border-neutral-900">
                        {t("catalog.stats.performance")}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                        {[
                          { label: t("catalog.stats.perf.agility"), value: selectedBike.stats?.performance?.agility || 50 },
                          selectedBike.category === "e-mtb" ? { label: t("catalog.stats.perf.battery"), value: selectedBike.stats?.performance?.battery || 50 } : null,
                          selectedBike.category === "e-mtb" ? { label: t("catalog.stats.perf.power"), value: selectedBike.stats?.performance?.power || 50 } : null,
                          selectedBike.category !== "e-mtb" ? { label: t("catalog.stats.perf.weight"), value: selectedBike.stats?.performance?.weight || 50 } : null,
                          selectedBike.category !== "e-mtb" ? { label: t("catalog.stats.perf.efficiency"), value: selectedBike.stats?.performance?.power || 50 } : null,
                        ].filter(Boolean).map((perf, idx) => {
                          const { level, color, label } = getRatingDetails(perf.value);
                          return (
                            <div key={idx} className="bg-neutral-900/40 border border-neutral-900/60 rounded-xl p-2.5 flex flex-col gap-1.5 text-left">
                              <div className="flex justify-between items-center text-[9px] font-bold text-neutral-400 leading-none">
                                <span>{perf.label}</span>
                                <span className="text-white font-extrabold uppercase text-[8px] tracking-wide bg-neutral-900 px-1.5 py-0.5 rounded">
                                  {label}
                                </span>
                              </div>
                              <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((step) => (
                                  <div 
                                    key={step} 
                                    className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                                      step <= level ? color : "bg-neutral-800"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Quote Form Button (Fixed at the bottom) */}
              <div className="pt-4 border-t border-neutral-900/80">
                <button
                  onClick={handleRequestQuote}
                  className="w-full bg-primary hover:bg-red-700 text-white py-3 px-6 rounded-lg font-black text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2 transition-all shadow-lg cursor-pointer border-none outline-none hover:scale-[1.01] active:scale-99"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  {t("catalog.modal.cta")}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Fullscreen Image Overlay */}
      {isFullscreenImage && selectedBike && (
        <div className="fixed inset-0 w-full h-full bg-neutral-950 z-[999] flex flex-col items-center justify-center p-4 select-none">
          <div className="absolute top-4 right-4 flex items-center gap-3 z-10">
            {/* Reset Zoom */}
            {fullscreenScale !== 1 && (
              <button
                onClick={() => {
                  setFullscreenScale(1);
                  setFullscreenPosition({ x: 0, y: 0 });
                }}
                className="bg-neutral-900 text-white p-3 rounded-full border border-neutral-800 hover:bg-neutral-800 transition-colors cursor-pointer flex items-center justify-center"
              >
                <RefreshCw className="w-5 h-5 text-primary" />
              </button>
            )}
            {/* Close Fullscreen */}
            <button
              onClick={() => {
                setIsFullscreenImage(false);
                setFullscreenScale(1);
                setFullscreenPosition({ x: 0, y: 0 });
              }}
              className="bg-neutral-900 text-white p-3 rounded-full border border-neutral-800 hover:bg-neutral-800 transition-colors cursor-pointer flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Zoomable Image inside Fullscreen */}
          <div
            className="w-full h-full flex items-center justify-center overflow-hidden"
            onMouseDown={(e) => {
              if (fullscreenScale <= 1) return;
              setIsFullscreenDragging(true);
              setFullscreenDragStart({ x: e.clientX - fullscreenPosition.x, y: e.clientY - fullscreenPosition.y });
            }}
            onMouseMove={(e) => {
              if (!isFullscreenDragging || fullscreenScale <= 1) return;
              e.preventDefault();
              const newX = e.clientX - fullscreenDragStart.x;
              const newY = e.clientY - fullscreenDragStart.y;
              const maxDragX = (fullscreenScale - 1) * window.innerWidth / 2;
              const maxDragY = (fullscreenScale - 1) * window.innerHeight / 2;
              setFullscreenPosition({
                x: Math.max(-maxDragX, Math.min(maxDragX, newX)),
                y: Math.max(-maxDragY, Math.min(maxDragY, newY))
              });
            }}
            onMouseUp={() => setIsFullscreenDragging(false)}
            onMouseLeave={() => setIsFullscreenDragging(false)}
            onTouchStart={(e) => {
              if (fullscreenScale <= 1 || e.touches.length !== 1) return;
              setIsFullscreenDragging(true);
              const touch = e.touches[0];
              setFullscreenDragStart({ x: touch.clientX - fullscreenPosition.x, y: touch.clientY - fullscreenPosition.y });
            }}
            onTouchMove={(e) => {
              if (!isFullscreenDragging || fullscreenScale <= 1 || e.touches.length !== 1) return;
              const touch = e.touches[0];
              const newX = touch.clientX - fullscreenDragStart.x;
              const newY = touch.clientY - fullscreenDragStart.y;
              const maxDragX = (fullscreenScale - 1) * window.innerWidth / 2;
              const maxDragY = (fullscreenScale - 1) * window.innerHeight / 2;
              setFullscreenPosition({
                x: Math.max(-maxDragX, Math.min(maxDragX, newX)),
                y: Math.max(-maxDragY, Math.min(maxDragY, newY))
              });
            }}
            onTouchEnd={() => setIsFullscreenDragging(false)}
            onDoubleClick={() => {
              if (fullscreenScale > 1) {
                setFullscreenScale(1);
                setFullscreenPosition({ x: 0, y: 0 });
              } else {
                setFullscreenScale(2);
                setFullscreenPosition({ x: 0, y: 0 });
              }
            }}
          >
            <img
              src={selectedBike.image}
              alt={selectedBike.name}
              style={{
                transform: `translate(${fullscreenPosition.x}px, ${fullscreenPosition.y}px) scale(${fullscreenScale})`,
                transformOrigin: "center center",
                transition: isFullscreenDragging ? "none" : "transform 0.2s ease-out"
              }}
              className="max-w-full max-h-full object-contain select-none"
              draggable="false"
            />
          </div>

          {/* Floating Zoom Indicators for Fullscreen */}
          <div className="absolute bottom-6 flex items-center gap-4 bg-neutral-900/90 border border-neutral-800 rounded-full px-5 py-2.5 shadow-2xl">
            <button
              onClick={() => {
                const newScale = Math.max(1, fullscreenScale - 0.25);
                setFullscreenScale(newScale);
                if (newScale === 1) setFullscreenPosition({ x: 0, y: 0 });
              }}
              disabled={fullscreenScale <= 1}
              className="text-white hover:text-primary cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed bg-transparent border-none"
            >
              <ZoomOut className="w-5 h-5" />
            </button>
            <span className="text-xs font-black text-white min-w-12 text-center uppercase tracking-widest">
              {Math.round(fullscreenScale * 100)}%
            </span>
            <button
              onClick={() => {
                const newScale = Math.min(3, fullscreenScale + 0.25);
                setFullscreenScale(newScale);
              }}
              disabled={fullscreenScale >= 3}
              className="text-white hover:text-primary cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed bg-transparent border-none"
            >
              <ZoomIn className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
      {/* Floating Helper Toast when 1 bike is selected */}
      {compareList.length === 1 && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-neutral-950/95 backdrop-blur-md border border-neutral-800 text-white py-3 px-4 rounded-xl shadow-2xl z-40 flex items-center justify-between gap-3 animate-slide-up text-xs font-semibold w-[90vw] md:w-auto md:max-w-md select-none">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="truncate text-[11px] md:text-xs">
              {language === "pt" 
                ? `Selecionou a ${compareList[0].name}` 
                : `Selected ${compareList[0].name}`}
              <span className="text-neutral-400 block md:inline md:ml-1.5 font-normal">
                {language === "pt" ? "• Escolha outra para comparar" : "• Choose another to compare"}
              </span>
            </span>
          </div>
          <button 
            onClick={() => setCompareList([])}
            className="text-[9px] text-red-500 hover:text-red-400 font-extrabold uppercase tracking-wider bg-neutral-900 px-2.5 py-1.5 rounded-lg border border-neutral-850 cursor-pointer flex-shrink-0 transition-colors"
          >
            {language === "pt" ? "Cancelar" : "Cancel"}
          </button>
        </div>
      )}

      {/* Comparison Pop-up Modal (Only when 2 bikes are selected) */}
      {compareList.length === 2 && (
        <div className="fixed inset-0 bg-neutral-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 cursor-default" onClick={() => setCompareList([])} />
          
          <div className="bg-neutral-950 border border-neutral-900 text-white rounded-2xl w-[92vw] max-w-[92vw] md:w-[80vw] md:max-w-[80vw] h-[85vh] max-h-[85vh] flex flex-col overflow-hidden shadow-2xl relative z-10 animate-scale-up">
            {/* Header */}
            <div className="p-4 border-b border-neutral-900 flex justify-between items-center bg-neutral-900/40">
              <h3 className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-2">
                <GitCompare className="w-4 h-4" /> {language === "pt" ? "Comparação de Bicicletas" : "Bike Comparison"}
              </h3>
              <button
                onClick={() => setCompareList([])}
                className="text-neutral-400 hover:text-white bg-neutral-900 p-1.5 rounded-full border border-neutral-800 transition-colors cursor-pointer flex items-center justify-center"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Bike Header Cards (Side-by-side at the top, fixed) */}
            <div className="grid grid-cols-2 gap-4 bg-neutral-900/20 p-4 border-b border-neutral-900 flex-shrink-0">
              {/* Bike 1 Header */}
              <div className="text-center flex flex-col items-center">
                <div className="aspect-[4/3] flex items-center justify-center bg-white rounded-lg p-2 mb-2 w-full max-w-[160px]">
                  <img src={compareList[0].image} alt={compareList[0].name} className="max-h-full max-w-full object-contain mix-blend-multiply" />
                </div>
                <h4 className="text-xs font-black uppercase tracking-tight text-white truncate w-full text-center">
                  {compareList[0].name}
                </h4>
                <span className="text-xs font-extrabold text-primary mt-0.5 block">
                  {new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(compareList[0].price)}
                </span>
              </div>
              
              {/* Bike 2 Header */}
              <div className="text-center flex flex-col items-center">
                <div className="aspect-[4/3] flex items-center justify-center bg-white rounded-lg p-2 mb-2 w-full max-w-[160px]">
                  <img src={compareList[1].image} alt={compareList[1].name} className="max-h-full max-w-full object-contain mix-blend-multiply" />
                </div>
                <h4 className="text-xs font-black uppercase tracking-tight text-white truncate w-full text-center">
                  {compareList[1].name}
                </h4>
                <span className="text-xs font-extrabold text-primary mt-0.5 block">
                  {new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(compareList[1].price)}
                </span>
              </div>
            </div>

            {/* Scrollable Comparative Stats Rows */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
              
              {/* Motor & Bateria (Only shown if at least one bike is an e-bike) */}
              {(compareList[0].specs?.motor || compareList[1].specs?.motor) && (
                <div className="space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-widest text-primary text-center border-b border-neutral-900 pb-2">
                    {language === "pt" ? "Motor & Bateria" : "Motor & Battery"}
                  </h4>
                  
                  {/* Motor Spec comparison row */}
                  <div className="bg-neutral-900/20 border border-neutral-900/60 rounded-xl p-3 flex flex-col gap-2.5">
                    <div className="text-center text-[10px] font-black uppercase tracking-wider text-neutral-400">
                      {language === "pt" ? "Motor / Tração" : "Motor System"}
                    </div>
                    <div className="grid grid-cols-2 gap-6 divide-x divide-neutral-900/80">
                      <div className="text-left pr-1">
                        <span className="text-[10px] font-extrabold text-white leading-tight block">
                          {compareList[0].specs?.motor || (language === "pt" ? "Sem Motor (Muscular)" : "No Motor (Muscular)")}
                        </span>
                      </div>
                      <div className="text-left pl-4">
                        <span className="text-[10px] font-extrabold text-white leading-tight block">
                          {compareList[1].specs?.motor || (language === "pt" ? "Sem Motor (Muscular)" : "No Motor (Muscular)")}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Battery Spec comparison row */}
                  {(compareList[0].specs?.battery || compareList[1].specs?.battery) && (
                    <div className="bg-neutral-900/20 border border-neutral-900/60 rounded-xl p-3 flex flex-col gap-2.5">
                      <div className="text-center text-[10px] font-black uppercase tracking-wider text-neutral-400">
                        {language === "pt" ? "Bateria / Capacidade" : "Battery / Capacity"}
                      </div>
                      <div className="grid grid-cols-2 gap-6 divide-x divide-neutral-900/80">
                        <div className="text-left pr-1">
                          <span className="text-[10px] font-extrabold text-white leading-tight block">
                            {compareList[0].specs?.battery || (language === "pt" ? "Não Aplicável" : "N/A")}
                          </span>
                        </div>
                        <div className="text-left pl-4">
                          <span className="text-[10px] font-extrabold text-white leading-tight block">
                            {compareList[1].specs?.battery || (language === "pt" ? "Não Aplicável" : "N/A")}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Terrains Section */}
              <div className="space-y-4">
                <h4 className="text-xs font-black uppercase tracking-widest text-primary text-center border-b border-neutral-900 pb-2">
                  {language === "pt" ? "Terrenos Recomendados" : "Recommended Terrains"}
                </h4>
                {[
                  { key: "trails", label: language === "pt" ? "Trilhos & Montanha" : "Trails & Mountain" },
                  { key: "downhill", label: language === "pt" ? "Descidas DH" : "Downhill DH" },
                  { key: "climbing", label: language === "pt" ? "Subidas Íngremes" : "Steep Climbs" },
                  { key: "gravel", label: language === "pt" ? "Gravilha / Terra Batida" : "Gravel / Dirt Trails" },
                  { key: "urban", label: language === "pt" ? "Cidade / Urbano" : "City / Urban" },
                ].map((terrain, idx) => {
                  const val1 = compareList[0].stats?.terrains?.[terrain.key] || 50;
                  const val2 = compareList[1].stats?.terrains?.[terrain.key] || 50;
                  const rating1 = getRatingDetails(val1);
                  const rating2 = getRatingDetails(val2);
                  
                  return (
                    <div key={idx} className="bg-neutral-900/20 border border-neutral-900/60 rounded-xl p-3 flex flex-col gap-2.5">
                      <div className="text-center text-[10px] font-black uppercase tracking-wider text-neutral-400">
                        {terrain.label}
                      </div>
                      <div className="grid grid-cols-2 gap-6 divide-x divide-neutral-900/80">
                        {/* Bike 1 */}
                        <div className="flex flex-col gap-1.5 pr-1">
                          <div className="flex justify-between items-center text-[9px] font-bold text-neutral-400">
                            <span className="text-neutral-550 text-[8px] truncate">{compareList[0].name.split(" ").slice(1).join(" ")}</span>
                            <span className="text-white font-extrabold uppercase text-[7px] tracking-wide bg-neutral-900 px-1.5 py-0.5 rounded">
                              {rating1.label}
                            </span>
                          </div>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((step) => (
                              <div 
                                key={step} 
                                className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                                  step <= rating1.level ? rating1.color : "bg-neutral-850"
                                }`}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Bike 2 */}
                        <div className="flex flex-col gap-1.5 pl-4">
                          <div className="flex justify-between items-center text-[9px] font-bold text-neutral-400">
                            <span className="text-neutral-550 text-[8px] truncate">{compareList[1].name.split(" ").slice(1).join(" ")}</span>
                            <span className="text-white font-extrabold uppercase text-[7px] tracking-wide bg-neutral-900 px-1.5 py-0.5 rounded">
                              {rating2.label}
                            </span>
                          </div>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((step) => (
                              <div 
                                key={step} 
                                className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                                  step <= rating2.level ? rating2.color : "bg-neutral-850"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Performance Section */}
              <div className="space-y-4">
                <h4 className="text-xs font-black uppercase tracking-widest text-primary text-center border-b border-neutral-900 pb-2">
                  {language === "pt" ? "Perfil de Desempenho" : "Performance Profile"}
                </h4>
                {[
                  { key: "agility", label: language === "pt" ? "Agilidade / Maneabilidade" : "Agility / Handling" },
                  { key: "battery", label: language === "pt" ? "Autonomia / Bateria" : "Battery Autonomy" },
                  { key: "power", label: language === "pt" ? "Torque / Potência" : "Torque / Power" },
                ].map((perf, idx) => {
                  const hasBatteryStat = compareList[0].category === "e-mtb" || compareList[1].category === "e-mtb";
                  if (perf.key === "battery" && !hasBatteryStat) return null;
                  
                  const val1 = compareList[0].stats?.performance?.[perf.key] || 50;
                  const val2 = compareList[1].stats?.performance?.[perf.key] || 50;
                  const rating1 = getRatingDetails(val1);
                  const rating2 = getRatingDetails(perf.key === "battery" && compareList[1].category !== "e-mtb" ? 0 : val2);
                  
                  return (
                    <div key={idx} className="bg-neutral-900/20 border border-neutral-900/60 rounded-xl p-3 flex flex-col gap-2.5">
                      <div className="text-center text-[10px] font-black uppercase tracking-wider text-neutral-400">
                        {perf.label}
                      </div>
                      <div className="grid grid-cols-2 gap-6 divide-x divide-neutral-900/80">
                        {/* Bike 1 */}
                        <div className="flex flex-col gap-1.5 pr-1">
                          <div className="flex justify-between items-center text-[9px] font-bold text-neutral-400">
                            <span className="text-neutral-555 text-[8px] truncate">{compareList[0].name.split(" ").slice(1).join(" ")}</span>
                            <span className="text-white font-extrabold uppercase text-[7px] tracking-wide bg-neutral-900 px-1.5 py-0.5 rounded">
                              {rating1.label}
                            </span>
                          </div>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((step) => (
                              <div 
                                key={step} 
                                className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                                  step <= rating1.level ? rating1.color : "bg-neutral-850"
                                }`}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Bike 2 */}
                        <div className="flex flex-col gap-1.5 pl-4">
                          <div className="flex justify-between items-center text-[9px] font-bold text-neutral-400">
                            <span className="text-neutral-555 text-[8px] truncate">{compareList[1].name.split(" ").slice(1).join(" ")}</span>
                            <span className="text-white font-extrabold uppercase text-[7px] tracking-wide bg-neutral-900 px-1.5 py-0.5 rounded">
                              {perf.key === "battery" && compareList[1].category !== "e-mtb" ? "N/A" : rating2.label}
                            </span>
                          </div>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((step) => (
                              <div 
                                key={step} 
                                className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                                  perf.key === "battery" && compareList[1].category !== "e-mtb" 
                                    ? "bg-neutral-850" 
                                    : step <= rating2.level ? rating2.color : "bg-neutral-850"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
