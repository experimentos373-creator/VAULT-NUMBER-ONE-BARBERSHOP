import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Search, X, Calendar, Compass, Shield, Wrench, ArrowLeft, Fuel, Info, MessageSquare, Calculator, Flame, Settings2, Heart, GitCompare, Gauge, Zap, Users } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { cars, allBrands } from "../data/carsData";
import CustomDropdown from "../components/CustomDropdown";

const renderPriceRatingBar = (ratingValue) => {
  const levels = [
    { label: "Preço Elevado", color: "bg-red-500" },
    { label: "Preço Moderado", color: "bg-orange-400" },
    { label: "Preço Justo", color: "bg-yellow-500" },
    { label: "Bom Preço", color: "bg-emerald-500" },
    { label: "Ótimo Preço", color: "bg-teal-500" }
  ];
  
  const current = levels[(ratingValue - 1) || 0] || levels[2];
  
  return (
    <div className="flex items-center gap-1.5 border border-neutral-155 bg-neutral-50 px-2.5 py-1 rounded-full text-[9px] font-bold text-neutral-600">
      <span className="shrink-0">{current.label}</span>
      <div className="flex gap-0.5 items-center">
        {[1, 2, 3, 4, 5].map((index) => (
          <span 
            key={index} 
            className={`w-2.5 h-0.5 rounded-full transition-all duration-300 ${
              index <= ratingValue 
                ? current.color 
                : "bg-neutral-250"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function StockPage() {
  const { t, language } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [fuelFilter, setFuelFilter] = useState("");
  const [transFilter, setTransFilter] = useState("");
  const [priceRange, setPriceRange] = useState(45000); // max price

  const [selectedCar, setSelectedCar] = useState(null);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("gatilhauto_favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const [compareList, setCompareList] = useState([]);

  useEffect(() => {
    localStorage.setItem("gatilhauto_favorites", JSON.stringify(favorites));
    window.dispatchEvent(new Event("favorites_updated"));
  }, [favorites]);

  useEffect(() => {
    if (compareList.length < 2) {
      setIsCompareModalOpen(false);
    }
  }, [compareList]);

  const toggleFavorite = (id, e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleCompare = (car, e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    setCompareList((prev) => {
      if (prev.find((c) => c.id === car.id)) {
        return prev.filter((c) => c.id !== car.id);
      }
      if (prev.length >= 3) {
        alert(t("stock.compare.limit"));
        return prev;
      }
      return [...prev, car];
    });
  };

  const brands = allBrands;
  const fuels = [...new Set(cars.map(c => c.fuel))];

  // Parse query params for direct links or back navigation modal opening
  const params = new URLSearchParams(location.search);
  const carParam = params.get("car");
  const brandParam = params.get("brand");
  const fuelParam = params.get("fuel");
  const transParam = params.get("transmission");
  const segmentParam = params.get("segment");
  const categoryParam = params.get("categoria");

  useEffect(() => {
    // Set initial filters from URL if present
    if (brandParam) setBrandFilter(brandParam);
    if (fuelParam) setFuelFilter(fuelParam);
    if (transParam) setTransFilter(transParam);
  }, [brandParam, fuelParam, transParam]);

  useEffect(() => {
    if (carParam) {
      const foundCar = cars.find(c => c.id === carParam);
      if (foundCar) {
        setSelectedCar(foundCar);
        document.body.style.overflow = "hidden"; // lock scroll
      } else {
        setSelectedCar(null);
      }
    } else {
      setSelectedCar(null);
      document.body.style.overflow = "unset"; // unlock scroll
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [carParam]);

  const openCarModal = (carId) => {
    const newParams = new URLSearchParams(location.search);
    newParams.set("car", carId);
    navigate({ search: newParams.toString() });
  };

  const closeCarModal = () => {
    const newParams = new URLSearchParams(location.search);
    newParams.delete("car");
    navigate({ search: newParams.toString() });
  };

  const handleWhatsAppContact = (car) => {
    const defaultMsg = t("general.whatsappLead")
      .replace("{carName}", car.model)
      .replace("{year}", car.year)
      .replace("{price}", car.price.toLocaleString());
    
    const encoded = encodeURIComponent(defaultMsg);
    window.open(`https://wa.me/+351913378940?text=${encoded}`, "_blank");
  };

  // Filter cars
  const filteredCars = cars.filter((car) => {
    const matchesSearch = 
      car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.brand.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesBrand = brandFilter ? car.brand === brandFilter : true;
    const matchesFuel = fuelFilter ? car.fuel === fuelFilter : true;
    const matchesTrans = transFilter ? car.transmission === transFilter : true;
    const matchesPrice = car.price <= priceRange;
    const matchesSegment = segmentParam ? car.segment === segmentParam : true;
    const matchesFavorites = categoryParam === "favoritos" ? favorites.includes(car.id) : true;

    return matchesSearch && matchesBrand && matchesFuel && matchesTrans && matchesPrice && matchesSegment && matchesFavorites;
  });

  return (
    <div className="bg-light-bg min-h-screen text-neutral-800 pt-24 md:pt-32 pb-20">
      
      {/* Back button */}
      <div className="max-w-[1400px] mx-auto px-6 mb-8 text-left">
        <Link to="/" className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors font-semibold text-sm">
          <ArrowLeft className="w-4 h-4" />
          {t("general.backToHome")}
        </Link>
      </div>

      <section className="relative">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          
          {/* Header */}
          <div className="text-left mb-12">
            <span className="text-primary-dark font-black uppercase text-xs tracking-widest bg-primary/15 px-4 py-1.5 rounded-full mb-4 inline-block">
              {segmentParam ? `${t("nav.stock")} • ${segmentParam.toUpperCase()}` : t("nav.stock")}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold font-display tracking-tight leading-none mb-4 uppercase text-neutral-900">
              {t("stock.title")}
            </h1>
            <p className="text-neutral-500 font-normal max-w-xl text-sm leading-relaxed">
              {t("stock.subtitle")}
            </p>
          </div>

          {/* Interactive Filters Grid */}
          <div className="bg-white border border-neutral-100 p-6 rounded-3xl mb-12 flex flex-col gap-6 text-left shadow-[0_15px_45px_rgba(0,0,0,0.03)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Keyword Search */}
              <div className="bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-2.5 flex items-center gap-3">
                <Search className="w-4 h-4 text-neutral-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t("stock.filter.placeholder")}
                  className="bg-transparent text-xs font-semibold text-neutral-800 w-full outline-none border-none placeholder-neutral-400"
                />
              </div>

              {/* Brand Filter */}
              <div className="w-full">
                <CustomDropdown
                  label={t("stock.filter.allBrands")}
                  value={brandFilter}
                  options={brands}
                  onChange={setBrandFilter}
                />
              </div>

              {/* Fuel Filter */}
              <div className="w-full">
                <CustomDropdown
                  label={t("stock.filter.allFuels")}
                  value={fuelFilter}
                  options={fuels}
                  onChange={setFuelFilter}
                />
              </div>

              {/* Transmission Filter */}
              <div className="w-full">
                <CustomDropdown
                  label={t("stock.filter.allTransmissions")}
                  value={transFilter === "Automatic" ? "Automático" : transFilter}
                  options={["Manual", "Automatic"]}
                  onChange={(val) => setTransFilter(val)}
                />
              </div>

            </div>

            {/* Price Slider */}
            <div className="flex flex-col md:flex-row md:items-center gap-6 border-t border-neutral-100 pt-6">
              <div className="w-full md:w-1/2">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2">
                  <span className="text-neutral-500">Preço Máximo:</span>
                  <span className="text-primary-dark">{priceRange.toLocaleString()} €</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="50000"
                  step="1000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full h-1 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary border-none"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-wrap justify-end gap-3 items-center">
                {categoryParam === "favoritos" ? (
                  <Link 
                    to="/viaturas" 
                    className="text-xs font-bold text-red-500 hover:text-red-650 uppercase tracking-widest flex items-center gap-1.5 bg-red-50 border border-red-200 px-3.5 py-1.5 rounded-full"
                  >
                    <X className="w-3.5 h-3.5" />
                    <span>Ver Todo o Stock</span>
                  </Link>
                ) : (
                  <Link 
                    to="/viaturas?categoria=favoritos" 
                    className="text-xs font-bold text-neutral-500 hover:text-red-550 uppercase tracking-widest flex items-center gap-1.5 bg-neutral-50 border border-neutral-200 px-3.5 py-1.5 rounded-full hover:bg-neutral-100/50 transition-colors"
                  >
                    <Heart className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{t("stock.filter.favorites")} ({favorites.length})</span>
                  </Link>
                )}
                {segmentParam && (
                  <Link 
                    to={categoryParam === "favoritos" ? "/viaturas?categoria=favoritos" : "/viaturas"} 
                    className="text-xs font-bold text-neutral-500 hover:text-primary-dark uppercase tracking-widest flex items-center gap-1.5 bg-neutral-50 border border-neutral-200 px-3.5 py-1.5 rounded-full hover:bg-neutral-100/50 transition-colors"
                  >
                    <X className="w-3.5 h-3.5" />
                    <span>Limpar Filtro Segmento: {segmentParam.toUpperCase()}</span>
                  </Link>
                )}
              </div>
            </div>

          </div>

          {/* Cars Grid List - Matches Peugeot 2008 layout */}
          {filteredCars.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCars.map((car) => (
                <div
                  key={car.id}
                  onClick={() => openCarModal(car.id)}
                  className="relative bg-white border border-neutral-100 rounded-3xl overflow-hidden transition-all duration-400 group hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] flex flex-col justify-between p-6 cursor-pointer"
                >
                  {/* Favorite Heart Button (Top Right) */}
                  <button
                    onClick={(e) => toggleFavorite(car.id, e)}
                    className={`absolute top-3 right-3 z-10 p-2.5 rounded-full backdrop-blur-md transition-all duration-300 border cursor-pointer shadow-sm ${
                      favorites.includes(car.id)
                        ? "bg-red-50 text-red-500 border-red-200 hover:bg-red-100"
                        : "bg-white/80 text-neutral-400 border-neutral-200 hover:text-neutral-600 hover:bg-white"
                    }`}
                    aria-label="Toggle Favorite"
                  >
                    <Heart className={`w-4 h-4 ${favorites.includes(car.id) ? "fill-current" : ""}`} />
                  </button>

                  {/* Top Details (Brand/Model, Version and Price) */}
                  <div>
                    <div className="flex justify-between items-start gap-4 mb-3 pt-6">
                      <div className="text-left">
                        <h3 className="font-extrabold text-neutral-900 font-display text-xl leading-tight group-hover:text-primary-dark transition-colors">
                          {car.brand} {car.model.split(" ")[0]}
                        </h3>
                      </div>
                      <span className="font-black text-neutral-900 text-xl tracking-tight shrink-0">
                        {car.price.toLocaleString()} €
                      </span>
                    </div>

                    {/* Subtitle / Engine Version with left border */}
                    <div className="text-left border-l-3 border-primary pl-2.5 py-0.5 mb-5">
                      <p className="text-xs text-neutral-500 font-semibold truncate max-w-[280px]">
                        {car.model.split(" ").slice(1).join(" ")}
                      </p>
                    </div>

                    {/* Badges container */}
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                      <span className="bg-black text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                        Destaque
                      </span>
                      <span className="bg-neutral-50 border border-neutral-150 text-[9px] font-bold text-neutral-600 px-3 py-1 rounded-full">
                        Garantia: <span className="text-primary-dark font-extrabold">{car.warranty}</span>
                      </span>
                      {/* Badge 3: Price Rating Bar */}
                      {renderPriceRatingBar(car.priceRating)}
                    </div>
                  </div>

                  {/* Middle Frame: Car Image with rounded corners */}
                  <div className="relative aspect-vehicle overflow-hidden rounded-2xl bg-neutral-50 border border-neutral-100 mb-6 shrink-0">
                    <img 
                      src={car.image} 
                      alt={car.model} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Bottom Frame: Tech Specs Grid (3 cols, 2 rows) */}
                  <div className="border-t border-neutral-100 pt-5 grid grid-cols-3 gap-y-5 gap-x-2 text-left">
                    <div className="flex flex-col items-start">
                      <Calendar className="w-4 h-4 text-primary mb-1.5 shrink-0" />
                      <div className="text-xs md:text-sm text-neutral-900 font-black tracking-tight">{car.month ? `${car.month.substring(0, 3)}/${car.year}` : car.year}</div>
                      <div className="text-[10px] md:text-[11px] text-neutral-450 font-bold uppercase tracking-wider mt-0.5">Mês/Ano</div>
                    </div>
                    <div className="flex flex-col items-start">
                      <Gauge className="w-4 h-4 text-primary mb-1.5 shrink-0" />
                      <div className="text-xs md:text-sm text-neutral-900 font-black tracking-tight">{car.kms.toLocaleString()} km</div>
                      <div className="text-[10px] md:text-[11px] text-neutral-450 font-bold uppercase tracking-wider mt-0.5">Quilómetros</div>
                    </div>
                    <div className="flex flex-col items-start">
                      <Fuel className="w-4 h-4 text-primary mb-1.5 shrink-0" />
                      <div className="text-xs md:text-sm text-neutral-900 font-black tracking-tight truncate w-full">{car.fuelLabel[language] || car.fuel}</div>
                      <div className="text-[10px] md:text-[11px] text-neutral-450 font-bold uppercase tracking-wider mt-0.5">Combustível</div>
                    </div>
                    <div className="flex flex-col items-start">
                      <Settings2 className="w-4 h-4 text-primary mb-1.5 shrink-0" />
                      <div className="text-xs md:text-sm text-neutral-900 font-black tracking-tight">{car.transmission === "Automatic" ? "Automática" : "Manual"}</div>
                      <div className="text-[10px] md:text-[11px] text-neutral-450 font-bold uppercase tracking-wider mt-0.5">Transmissão</div>
                    </div>
                    <div className="flex flex-col items-start">
                      <Zap className="w-4 h-4 text-primary mb-1.5 shrink-0" />
                      <div className="text-xs md:text-sm text-neutral-900 font-black tracking-tight">{car.power}</div>
                      <div className="text-[10px] md:text-[11px] text-neutral-450 font-bold uppercase tracking-wider mt-0.5">Potência</div>
                    </div>
                    <div className="flex flex-col items-start">
                      <Users className="w-4 h-4 text-primary mb-1.5 shrink-0" />
                      <div className="text-xs md:text-sm text-neutral-900 font-black tracking-tight">5 lug.</div>
                      <div className="text-[10px] md:text-[11px] text-neutral-450 font-bold uppercase tracking-wider mt-0.5">Capacidade</div>
                    </div>
                  </div>

                  {/* Bottom Action Row (WhatsApp Lead & Details & Compare) */}
                  <div className="mt-5 pt-4 border-t border-neutral-100 flex gap-2 items-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openCarModal(car.id);
                      }}
                      className="flex-grow bg-neutral-50 border border-neutral-200 hover:border-neutral-300 text-neutral-700 py-2.5 px-3 rounded-xl font-bold text-[11px] md:text-[12px] uppercase tracking-wider text-center transition-colors cursor-pointer"
                    >
                      {t("stock.card.viewDetails")}
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleWhatsAppContact(car);
                      }}
                      className="bg-emerald-500 hover:bg-emerald-600 text-white p-2.5 rounded-xl font-bold text-center transition-colors cursor-pointer border-none flex items-center justify-center gap-1.5"
                      title={t("stock.card.interested")}
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span className="text-[11px] md:text-[12px] uppercase font-black tracking-wider">{t("stock.card.interested")}</span>
                    </button>
                    <button
                      onClick={(e) => toggleCompare(car, e)}
                      className={`p-2.5 rounded-xl border transition-colors cursor-pointer flex items-center justify-center shrink-0 ${
                        compareList.find((c) => c.id === car.id)
                          ? "bg-primary border-primary text-neutral-950"
                          : "bg-white text-neutral-500 border-neutral-200 hover:border-neutral-400 hover:text-neutral-900"
                      }`}
                      title={t("stock.card.compare")}
                      aria-label="Compare Car"
                    >
                      <GitCompare className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white border border-neutral-100 rounded-3xl">
              <Info className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
              <p className="text-neutral-500 text-sm font-semibold">{t("stock.noResults")}</p>
            </div>
          )}

        </div>
      </section>

      {/* 4. Car Specs Detail Modal - Premium Clean Light Modal */}
      {selectedCar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          
          {/* Translucent Backdrop */}
          <div 
            onClick={closeCarModal}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
          />
          
          {/* Modal Container */}
          <div className="relative w-[92vw] md:w-[80vw] max-w-7xl bg-white border border-neutral-100 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] animate-modal-scale z-10 flex flex-col md:flex-row h-[92vh] md:h-[80vh] max-h-[92vh] md:max-h-[80vh]">
            
            {/* Left Frame: Car Image & Visual Badge */}
            <div className="w-full md:w-1/2 bg-neutral-50 flex items-center justify-center relative border-b md:border-b-0 md:border-r border-neutral-100 h-[240px] shrink-0 md:h-full">
              <img 
                src={selectedCar.image} 
                alt={selectedCar.model} 
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 bg-primary text-neutral-950 font-extrabold uppercase tracking-widest text-[9px] px-3.5 py-1.5 rounded-full shadow-md z-10">
                Garantia: {selectedCar.warranty}
              </span>
            </div>

            {/* Right Frame: Specifications & Call to Actions */}
            <div className="w-full md:w-1/2 flex flex-col overflow-hidden bg-white text-left relative h-full">
              
              {/* Scrollable specs container */}
              <div className="flex-grow overflow-y-auto p-5 md:p-8 pb-4">
                {/* Header */}
                <div className="flex justify-between items-start mb-4 pr-12">
                  <div className="pr-4">
                    <span className="text-[10px] text-primary-dark font-black uppercase tracking-widest block mb-0.5">
                      {selectedCar.brand}
                    </span>
                    <h2 className="text-xl font-extrabold font-display uppercase tracking-tight text-neutral-900 leading-tight">
                      {selectedCar.model}
                    </h2>
                  </div>
                  <span className="font-black text-neutral-900 text-xl tracking-tight shrink-0 whitespace-nowrap">
                    {selectedCar.price.toLocaleString()} €
                  </span>
                </div>

                {/* Tech Specs Compact Key-Value Rows */}
                <div className="space-y-1.5 border-t border-neutral-100 pt-3">
                  <h3 className="text-xs md:text-sm font-black text-neutral-900 uppercase tracking-widest mb-3">
                    {t("stock.card.detailsTitle")}
                  </h3>
                  {[
                    { label: "Mês/Ano", value: `${selectedCar.monthLabel[language] || selectedCar.month} / ${selectedCar.year}` },
                    { label: "Quilometragem", value: `${selectedCar.kms.toLocaleString()} km` },
                    { label: "Combustível", value: selectedCar.fuelLabel[language] || selectedCar.fuel },
                    { label: "Transmissão", value: selectedCar.transmissionLabel[language] || selectedCar.transmission },
                    { label: "Potência", value: selectedCar.power },
                    { label: "Cilindrada", value: selectedCar.engine },
                    { label: "Cor Exterior", value: selectedCar.colorLabel[language] || selectedCar.color }
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center py-1.5 border-b border-neutral-100 last:border-0">
                      <span className="text-[10px] md:text-[11px] text-neutral-450 font-bold uppercase tracking-wide">{row.label}</span>
                      <span className="text-[12px] md:text-sm text-neutral-900 font-extrabold text-right">{row.value}</span>
                    </div>
                  ))}

                  {/* Upgraded visual stats for Consumption and CO2 */}
                  {selectedCar.specs?.consumption && (
                    <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                      <span className="text-[10px] md:text-[11px] text-neutral-450 font-bold uppercase tracking-wide">Consumo Médio</span>
                      <div className="flex items-center gap-3">
                        <span className="text-[12px] md:text-sm text-neutral-900 font-black">{selectedCar.specs.consumption}</span>
                        <div className="w-20 bg-neutral-100 h-1.5 rounded-full overflow-hidden flex">
                          <div 
                            className={`h-full rounded-full transition-all duration-500 ${
                              parseFloat(selectedCar.specs.consumption) <= 4.5 
                                ? "bg-emerald-500" 
                                : parseFloat(selectedCar.specs.consumption) <= 6.5 
                                ? "bg-yellow-500" 
                                : "bg-red-500"
                            }`} 
                            style={{ width: `${Math.min((parseFloat(selectedCar.specs.consumption) / 10) * 100, 105)}%` }} 
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedCar.specs?.co2 && (
                    <div className="flex justify-between items-center py-1.5 border-b border-neutral-100 last:border-0">
                      <span className="text-[10px] md:text-[11px] text-neutral-450 font-bold uppercase tracking-wide">Emissões CO2</span>
                      <div className="flex items-center gap-3">
                        <span className="text-[12px] md:text-sm text-neutral-900 font-black">{selectedCar.specs.co2}</span>
                        <div className="w-20 bg-neutral-100 h-1.5 rounded-full overflow-hidden flex">
                          <div 
                            className={`h-full rounded-full transition-all duration-500 ${
                              parseFloat(selectedCar.specs.co2) <= 100 
                                ? "bg-emerald-500" 
                                : parseFloat(selectedCar.specs.co2) <= 150 
                                ? "bg-yellow-500" 
                                : "bg-red-500"
                            }`} 
                            style={{ width: `${Math.min((parseFloat(selectedCar.specs.co2) / 250) * 100, 105)}%` }} 
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Equipment Highlights */}
                <div className="mt-5 border-t border-neutral-100 pt-3">
                  <h3 className="text-xs md:text-sm font-black text-neutral-900 uppercase tracking-widest mb-3">Equipamento em Destaque</h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[11px] md:text-xs text-neutral-600 font-semibold">
                    {selectedCar.specs.equipment.slice(0, 6).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 truncate">
                        <span className="w-1.5 h-1.5 bg-primary-dark rounded-full shrink-0 animate-pulse" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Fixed Action Button Footer */}
              <div className="p-5 md:px-8 md:py-6 border-t border-neutral-100 bg-neutral-50 flex-shrink-0">
                {/* WhatsApp Reservation Button */}
                <button
                  onClick={() => handleWhatsAppContact(selectedCar)}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3.5 px-6 rounded-2xl font-black text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-colors cursor-pointer border-none shadow-md shadow-emerald-500/10"
                >
                  <MessageSquare className="w-4 h-full shrink-0" />
                  <span>{t("stock.card.requestQuote")}</span>
                </button>
              </div>
            </div>

            {/* Close Button X */}
            <button
              onClick={closeCarModal}
              className="absolute top-4 right-4 p-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-500 hover:text-neutral-800 rounded-xl border border-neutral-200 cursor-pointer transition-colors shadow-sm"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

          </div>
        </div>
      )}

      {/* Floating Comparison Drawer */}
      {compareList.length > 0 && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md border border-neutral-200 text-neutral-800 py-4 px-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-45 flex flex-col md:flex-row items-center justify-between gap-4 w-[90vw] md:max-w-2xl select-none">
          <div className="flex items-center gap-3 overflow-x-auto w-full md:w-auto py-1">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <div className="flex gap-2 min-w-0">
              {compareList.map((car) => (
                <div key={car.id} className="relative flex items-center gap-2 bg-neutral-50 border border-neutral-200 rounded-xl px-2 py-1 shrink-0">
                  <img src={car.image} alt={car.model} className="w-8 h-6 object-cover rounded-md" />
                  <span className="text-[10px] font-bold text-neutral-900 truncate max-w-[80px]">{car.brand} {car.model.split(" ")[0]}</span>
                  <button 
                    onClick={(e) => toggleCompare(car, e)}
                    className="p-0.5 hover:bg-neutral-200 text-neutral-450 hover:text-neutral-800 rounded cursor-pointer border-none bg-transparent"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto shrink-0 justify-end">
            <button 
              onClick={() => setCompareList([])}
              className="text-[9px] text-neutral-550 hover:text-neutral-800 font-extrabold uppercase tracking-wider bg-neutral-50 hover:bg-neutral-100 px-3 py-2 rounded-xl border border-neutral-200 cursor-pointer transition-colors"
            >
              {t("stock.compare.clear")}
            </button>
            {compareList.length >= 2 ? (
              <button 
                onClick={() => setIsCompareModalOpen(true)}
                className="text-[9px] bg-primary hover:bg-primary-dark text-neutral-950 font-bold uppercase tracking-wider px-4 py-2 rounded-xl border-none cursor-pointer transition-colors flex items-center gap-1.5 shadow-md shadow-primary/10"
              >
                <GitCompare className="w-3.5 h-3.5" />
                <span>Comparar ({compareList.length})</span>
              </button>
            ) : (
              <span className="text-[10px] text-neutral-450 font-bold italic pr-1">
                {t("stock.compare.selectTwo")}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Comparison Modal Overlay */}
      {isCompareModalOpen && compareList.length >= 2 && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          <div 
            onClick={() => setIsCompareModalOpen(false)}
            className="absolute inset-0 cursor-pointer"
          />
          
          <div className="bg-white border border-neutral-100 text-neutral-800 rounded-3xl w-[92vw] md:w-[80vw] max-w-7xl h-[92vh] md:h-[88vh] max-h-[92vh] md:max-h-[88vh] flex flex-col overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] relative z-10 animate-modal-scale text-left">
            {/* Header */}
            <div className="p-4 border-b border-neutral-100 flex justify-between items-center bg-neutral-50/50 flex-shrink-0">
              <h3 className="text-sm md:text-base font-black uppercase tracking-widest text-primary-dark flex items-center gap-2">
                <GitCompare className="w-5 h-5" /> {t("stock.compare.title")}
              </h3>
              <button
                onClick={() => setIsCompareModalOpen(false)}
                className="text-neutral-400 hover:text-neutral-800 bg-neutral-100 hover:bg-neutral-200 p-2 rounded-xl border border-neutral-200 transition-colors cursor-pointer flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Bike Header Cards (Side-by-side at the top, fixed) */}
            <div className="grid gap-3 bg-neutral-50/30 px-5 py-3 border-b border-neutral-100 flex-shrink-0" style={{ gridTemplateColumns: `repeat(${compareList.length}, minmax(0, 1fr))` }}>
              {compareList.map((car) => (
                <div key={car.id} className="text-center flex flex-col items-center">
                  <div className="h-16 sm:h-20 md:h-24 aspect-video flex items-center justify-center bg-neutral-50 border border-neutral-150 rounded-xl overflow-hidden p-1 mb-1.5 w-auto shadow-sm transition-transform duration-300 hover:scale-102">
                    <img src={car.image} alt={car.model} className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <h4 className="text-[11px] md:text-xs font-black uppercase tracking-tight text-neutral-900 truncate w-full text-center">
                    {car.brand}
                    <span className="block text-[9px] md:text-[10px] text-neutral-500 font-semibold normal-case truncate">{car.model.split(" ")[0]}</span>
                  </h4>
                  <span className="text-[10px] md:text-xs font-black text-primary-dark mt-0.5 block">
                    {car.price.toLocaleString()} €
                  </span>
                </div>
              ))}
            </div>

            {/* Scrollable Comparative Stats Rows */}
            <div className="flex-grow overflow-y-auto p-4 md:p-5 space-y-3 bg-neutral-50/20">
              {[
                { label: "Mês/Ano", key: "year", custom: (c) => c.month ? `${c.monthLabel[language] || c.month} / ${c.year}` : c.year },
                { label: "Quilometragem", key: "kms", custom: (c) => `${c.kms.toLocaleString()} km` },
                { label: "Combustível", key: "fuel", custom: (c) => c.fuelLabel[language] || c.fuel },
                { label: "Transmissão", key: "transmission", custom: (c) => c.transmissionLabel[language] || c.transmission },
                { label: "Potência", key: "power" },
                { label: "Cilindrada", key: "engine" },
                { label: "Cor Exterior", key: "color", custom: (c) => c.colorLabel[language] || c.color },
                { label: "Consumo Médio", key: "consumption", custom: (c) => c.specs?.consumption || "N/A" },
                { label: "Emissões CO2", key: "co2", custom: (c) => c.specs?.co2 || "N/A" },
                { label: "Garantia", key: "warranty" },
                { 
                  label: "Equipamento Destacado", 
                  key: "equipment", 
                  custom: (c) => (
                    <div className="flex justify-center w-full">
                      <ul className="text-[9px] md:text-[10px] text-neutral-600 space-y-1 text-left font-bold max-w-[240px] w-full">
                        {c.specs?.equipment.slice(0, 5).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 leading-tight">
                            <span className="w-1 h-1 bg-primary rounded-full shrink-0 mt-1.5" />
                            <span className="break-words">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) 
                }
              ].map((row, idx) => (
                <div key={idx} className="bg-white border border-neutral-100 rounded-xl py-2 px-3 md:py-2.5 md:px-4 shadow-sm flex flex-col gap-1">
                  <div className="text-center text-[9px] md:text-[10px] font-black uppercase tracking-wider text-neutral-400">
                    {row.label}
                  </div>
                  <div 
                    className="grid gap-4 divide-x divide-neutral-100" 
                    style={{ gridTemplateColumns: `repeat(${compareList.length}, minmax(0, 1fr))` }}
                  >
                    {compareList.map((car) => (
                      <div key={car.id} className="px-3 flex flex-col justify-center items-center">
                        <div className="text-[11px] md:text-xs font-extrabold text-neutral-800 leading-tight w-full text-center">
                          {row.custom ? row.custom(car) : car[row.key]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer simulation */}
            <div className="p-4 border-t border-neutral-100 bg-neutral-50 flex justify-end gap-3 flex-shrink-0">
              <button
                onClick={() => setIsCompareModalOpen(false)}
                className="bg-neutral-200 hover:bg-neutral-300 text-neutral-700 py-2.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider cursor-pointer border-none transition-colors"
              >
                {t("stock.compare.close")}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
