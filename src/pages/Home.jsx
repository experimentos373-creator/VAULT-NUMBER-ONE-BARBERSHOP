import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Shield, Wrench, BadgePercent, Star, ArrowRight, Car, Compass, Fuel, Settings2, Flame, Info, MapPin, Clock, Phone, Mail, ChevronLeft, ChevronRight, ChevronDown, Gauge, Zap, Users, Calendar } from "lucide-react";
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
    <div className="flex items-center gap-1.5 border border-neutral-150 bg-neutral-50 px-2.5 py-1 rounded-full text-[9px] font-bold text-neutral-600">
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

export default function Home() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const phoneDisplay = "913 378 940";
  const phoneValue = "+351913378940";
  const emailAddress = "vendas@gatilhauto.com";
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=Estr.+da+Guia+45%2C+Valeir%C3%A3o%2C+3105-051+Leiria%2C+Portugal";

  // Search filter states
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedFuel, setSelectedFuel] = useState("");
  const [selectedSegment, setSelectedSegment] = useState("");

  const brands = allBrands;
  const fuels = [...new Set(cars.map(c => c.fuel))];
  const segmentList = ["Citadino", "Monovolume", "Carrinha", "SUV", "Utilitário"];

  const handleSearch = () => {
    let query = "?";
    if (selectedBrand) query += `brand=${encodeURIComponent(selectedBrand)}&`;
    if (selectedFuel) query += `fuel=${encodeURIComponent(selectedFuel)}&`;
    if (selectedSegment) {
      const segmentMap = {
        "citadino": "citadino",
        "monovolume": "monovolume",
        "carrinha": "carrinha",
        "suv": "suv",
        "utilitário": "utilitario",
        "utilitario": "utilitario"
      };
      const mapped = segmentMap[selectedSegment.toLowerCase()] || selectedSegment.toLowerCase();
      query += `segment=${encodeURIComponent(mapped)}&`;
    }
    navigate(`/viaturas${query.slice(0, -1)}`);
  };

  const segments = [
    { id: "citadino", name: t("segments.citadino") || "Citadino", img: "/images/cars/segment_citadino.png" },
    { id: "monovolume", name: t("segments.monovolume") || "Monovolume", img: "/images/cars/segment_monovolume.png" },
    { id: "carrinha", name: t("segments.carrinha") || "Carrinha", img: "/images/cars/segment_carrinha.png" },
    { id: "suv", name: t("segments.suv") || "SUV", img: "/images/cars/segment_suv.png" },
    { id: "utilitario", name: t("segments.utilitario") || "Utilitário", img: "/images/cars/segment_utilitario.png" }
  ];

  // Carousel logic for Featured Cars
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getVisibleCount = () => {
    if (windowWidth >= 1024) return 3; // lg
    if (windowWidth >= 768) return 2;  // md
    return 1;
  };

  const visibleCount = getVisibleCount();
  const maxCarouselIndex = Math.max(0, cars.length - visibleCount);

  const nextSlide = () => {
    if (carouselIndex < maxCarouselIndex) {
      setCarouselIndex(prev => prev + 1);
    } else {
      setCarouselIndex(0); // Wrap around to start
    }
  };

  const prevSlide = () => {
    if (carouselIndex > 0) {
      setCarouselIndex(prev => prev - 1);
    } else {
      setCarouselIndex(maxCarouselIndex); // Wrap around to end
    }
  };

  const renderCarCard = (car) => (
    <Link
      to={`/viaturas?car=${car.id}`}
      className="bg-white border border-neutral-100 rounded-3xl overflow-hidden transition-all duration-400 group hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] flex flex-col justify-between p-6 cursor-pointer h-full"
    >
      {/* Top Details (Brand/Model, Version and Price) */}
      <div>
        <div className="flex justify-between items-start gap-4 mb-3">
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
          {/* Badge 1: Destaque */}
          <span className="bg-black text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
            Destaque
          </span>
          {/* Badge 2: Garantia */}
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
    </Link>
  );

  return (
    <div className="bg-light-bg min-h-screen text-neutral-800 pt-24 md:pt-32">

      {/* 1. Hero Section */}
      <section className="relative h-[calc(100vh-120px)] min-h-[580px] max-h-[850px] max-w-[1400px] mx-auto px-6 mb-16 rounded-3xl reveal-fade shadow-sm border border-neutral-100 z-20">
        {/* Room Background Image */}
        <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
          <img
            src="/images/hero_cars.png"
            alt="Gatilhauto Showroom"
            className="w-full h-full object-cover opacity-35 scale-105"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40 md:from-white/95 md:via-white/80 md:to-white/20" />
        </div>

        {/* Content Box */}
        <div className="relative z-10 h-full flex flex-col justify-end pb-12 md:pb-16 pl-4 md:pl-10 max-w-2xl text-left">
          <span className="text-primary-dark font-black uppercase text-xs tracking-widest bg-primary/15 px-4 py-1.5 rounded-full mb-4 inline-block w-fit">
            {t("hero.badge")}
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display leading-tight uppercase mb-6 tracking-tight text-neutral-900">
            {t("hero.title")}
          </h1>

          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-10 font-medium">
            {t("hero.subtitle")}
          </p>

          {/* Floating Search Bar - 3 Dropdowns */}
          <div className="bg-white border border-neutral-100 p-3 md:py-2.5 md:px-5 rounded-2xl md:rounded-full flex flex-col md:flex-row items-center gap-3 w-full max-w-[850px] shadow-[0_15px_55px_rgba(0,0,0,0.06)]">

            {/* Brand Select */}
            <div className="w-full px-4 py-1 border-b md:border-b-0 md:border-r border-neutral-100">
              <CustomDropdown
                label={t("hero.filter.brand")}
                value={selectedBrand}
                options={brands}
                onChange={setSelectedBrand}
                icon={<Car className="w-4 h-4" />}
                minimal={true}
              />
            </div>

            {/* Segment Select */}
            <div className="w-full px-4 py-1 border-b md:border-b-0 md:border-r border-neutral-100">
              <CustomDropdown
                label={t("hero.filter.segment")}
                value={selectedSegment}
                options={segmentList}
                onChange={setSelectedSegment}
                icon={<Compass className="w-4 h-4" />}
                minimal={true}
              />
            </div>

            {/* Fuel Select */}
            <div className="w-full px-4 py-1">
              <CustomDropdown
                label={t("hero.filter.fuel")}
                value={selectedFuel}
                options={fuels}
                onChange={setSelectedFuel}
                icon={<Fuel className="w-4 h-4" />}
                minimal={true}
              />
            </div>

            {/* Search Submit Button */}
            <button
              onClick={handleSearch}
              className="bg-primary hover:bg-primary-dark text-neutral-950 p-3.5 rounded-xl md:rounded-full shrink-0 flex items-center justify-center cursor-pointer transition-colors shadow-lg shadow-primary/20 w-full md:w-auto md:ml-2 md:mr-1.5"
              aria-label="Search"
            >
              <Search className="w-4 h-4 font-black" />
              <span className="md:hidden font-bold uppercase tracking-wider text-xs ml-2">{t("hero.filter.search")}</span>
            </button>

          </div>

          {/* Google Reviews Badge */}
          <div className="mt-8 flex items-center gap-2 text-xs font-bold text-neutral-500">
            <div className="flex text-yellow-500 gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <a href="#footer" className="hover:text-primary-dark transition-colors hover:underline">
              {t("hero.googleRating")}
            </a>
          </div>

        </div>
      </section>


      {/* 3. Featured Vehicles Section - Matches Peugeot 2008 Visual Card */}
      <section className="max-w-[1400px] mx-auto px-6 mb-20 reveal-slide-up">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold font-display uppercase tracking-tight text-left text-neutral-900">
              {t("featured.title")}
            </h2>
          </div>
          
          {/* Desktop Navigation Header */}
          <div className="hidden sm:flex items-center justify-end gap-6 w-auto">
            <Link
              to="/viaturas"
              className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-primary-dark transition-colors shrink-0"
            >
              <span>{t("featured.viewAll")}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            {/* Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-xl bg-white border border-neutral-100 hover:bg-neutral-50 hover:border-neutral-200 text-neutral-500 hover:text-neutral-800 transition-all cursor-pointer shadow-sm active:scale-95 flex items-center justify-center"
                aria-label="Previous Car"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-xl bg-white border border-neutral-100 hover:bg-neutral-50 hover:border-neutral-200 text-neutral-500 hover:text-neutral-800 transition-all cursor-pointer shadow-sm active:scale-95 flex items-center justify-center"
                aria-label="Next Car"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile: 3 Vehicles Vertical Stack */}
        <div className="flex flex-col gap-6 sm:hidden mb-8">
          {cars.slice(0, 3).map((car) => (
            <div key={car.id} className="w-full">
              {renderCarCard(car)}
            </div>
          ))}
        </div>

        {/* Mobile: View All Button */}
        <div className="flex sm:hidden justify-center mb-10">
          <Link 
            to="/viaturas" 
            className="w-full text-center bg-neutral-900 text-white font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-widest shadow-md hover:bg-neutral-800 transition-colors"
          >
            {t("featured.viewAll")}
          </Link>
        </div>

        {/* Desktop/Tablet: Cars Carousel */}
        <div className="hidden sm:block relative overflow-hidden w-full -mx-4 px-4 py-2">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${carouselIndex * (100 / visibleCount)}%)` }}
          >
            {cars.map((car) => (
              <div key={car.id} className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-4">
                {renderCarCard(car)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Value Propositions Section */}
      <section className="max-w-[1400px] mx-auto px-6 mb-24 reveal-slide-up">
        <div className="bg-white border border-neutral-100 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-sm">
          <div className="absolute left-0 bottom-0 w-[200px] h-[200px] bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

          <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
            <h2 className="text-2xl md:text-3xl font-extrabold font-display uppercase tracking-tight mb-4 text-neutral-900">
              {t("values.title")}
            </h2>
            <p className="text-neutral-500 text-sm leading-relaxed">
              {t("values.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 text-left">
            {/* Feat 1 */}
            <div className="flex gap-4">
              <div className="bg-primary/10 p-3 rounded-2xl h-fit">
                <Shield className="w-6 h-6 text-primary-dark" />
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 font-display text-sm uppercase tracking-wide mb-2">
                  {t("values.feat1.title")}
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-semibold">
                  {t("values.feat1.desc")}
                </p>
              </div>
            </div>

            {/* Feat 2 */}
            <div className="flex gap-4">
              <div className="bg-primary/10 p-3 rounded-2xl h-fit">
                <Wrench className="w-6 h-6 text-primary-dark" />
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 font-display text-sm uppercase tracking-wide mb-2">
                  {t("values.feat2.title")}
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-semibold">
                  {t("values.feat2.desc")}
                </p>
              </div>
            </div>

            {/* Feat 3 */}
            <div className="flex gap-4">
              <div className="bg-primary/10 p-3 rounded-2xl h-fit">
                <BadgePercent className="w-6 h-6 text-primary-dark" />
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 font-display text-sm uppercase tracking-wide mb-2">
                  {t("values.feat3.title")}
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-semibold">
                  {t("values.feat3.desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5 FAQ Section */}
      <section className="max-w-[1400px] mx-auto px-6 mb-24 reveal-slide-up">
        <div className="bg-white border border-neutral-100 rounded-3xl p-8 md:p-12 shadow-sm text-left">
          
          {/* Header */}
          <div className="w-full mb-10">
            <span className="text-primary-dark font-black uppercase text-xs tracking-widest bg-primary/15 px-4 py-1.5 rounded-full mb-4 inline-block">
              FAQ
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold font-display uppercase tracking-tight mb-3 text-neutral-900">
              {t("faq.title")}
            </h2>
            <p className="text-neutral-500 text-sm leading-relaxed font-semibold">
              {t("faq.subtitle")}
            </p>
          </div>

          {/* Accordion container */}
          <div className="space-y-4 w-full">
            {[
              { q: t("faq.q1"), a: t("faq.a1") },
              { q: t("faq.q2"), a: t("faq.a2") },
              { q: t("faq.q3"), a: t("faq.a3") },
              { q: t("faq.q4"), a: t("faq.a4") }
            ].map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index} 
                  className={`border rounded-2xl transition-all duration-350 ${
                    isOpen 
                      ? "border-primary/40 bg-neutral-50/50 shadow-sm" 
                      : "border-neutral-100 bg-white hover:border-neutral-200"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer focus:outline-none"
                  >
                    <span className="font-extrabold font-display text-sm md:text-base text-neutral-900 pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-350 ${
                        isOpen ? "transform rotate-180 text-primary-dark" : ""
                      }`} 
                    />
                  </button>
                  
                  <div 
                    className={`transition-all duration-350 overflow-hidden ${
                      isOpen ? "max-h-[300px] border-t border-neutral-100" : "max-h-0"
                    }`}
                  >
                    <div className="p-5 md:p-6 text-xs md:text-sm text-neutral-500 font-semibold leading-relaxed whitespace-pre-wrap">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. Contact Details & Map Area */}
      <section className="max-w-[1400px] mx-auto px-6 mb-24 reveal-slide-up">
        <div className="bg-white border border-neutral-100 rounded-3xl p-6 md:p-8 text-left relative overflow-hidden shadow-sm">
          <div className="flex flex-col lg:flex-row gap-8 w-full">
            
            {/* Map Column */}
            <div className="w-full lg:w-3/5 h-[350px] md:h-[420px] rounded-2xl overflow-hidden border border-neutral-100 shadow-sm relative">
              <iframe 
                title="Gatilhauto Location Map"
                src="https://maps.google.com/maps?q=39.870143,-8.745180&z=16&output=embed&hl=pt" 
                className="w-full h-full border-none opacity-95"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Details Column */}
            <div className="flex flex-1 flex-col justify-between gap-6 my-4 lg:my-0">
              <div>
                <h2 className="text-neutral-900 text-lg md:text-2xl font-extrabold uppercase font-display mb-6">
                  Gatilhauto
                </h2>
                
                <div className="flex flex-col gap-6">
                  
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-primary-dark shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <a 
                        href={mapUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-xs md:text-sm text-neutral-600 hover:text-primary-dark transition-colors font-semibold"
                      >
                        Estr. da Guia 45, Valeirão, 3105-051 Leiria
                      </a>
                    </div>
                  </div>

                  {/* Opening Hours */}
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-primary-dark shrink-0 mt-0.5" />
                    <div className="text-xs md:text-sm text-neutral-600 whitespace-pre-wrap font-semibold leading-relaxed">
                      Segunda a Sexta: 08h30 às 19h00{"\n"}
                      Sábado: 09h00 às 13h00 e das 14h00 às 18h00{"\n"}
                      Domingo: 15h00 às 18h00
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-primary-dark shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <a 
                        href={`mailto:${emailAddress}`} 
                        className="text-xs md:text-sm text-neutral-600 hover:text-primary-dark transition-colors font-semibold"
                      >
                        {emailAddress}
                      </a>
                    </div>
                  </div>

                  {/* Phone numbers */}
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-primary-dark shrink-0 mt-0.5" />
                    <div className="flex-1 flex flex-col gap-3">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5">
                          <a 
                            href={`tel:${phoneValue}`} 
                            className="text-xs md:text-sm text-neutral-600 hover:text-primary-dark transition-colors font-semibold"
                          >
                            {phoneDisplay}
                          </a>
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-primary/10 text-primary-dark uppercase">
                            Comercial
                          </span>
                        </div>
                        <span className="text-[10px] text-neutral-400 font-bold">(Chamada para a rede móvel nacional)</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Obtain Directions Button */}
              <a 
                href={`https://www.google.com/maps/dir/?api=1&origin=current+location&destination=Estr.+da+Guia+45%2C+Valeir%C3%A3o%2C+3105-051+Leiria%2C+Portugal`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-neutral-900 hover:scale-[0.98] active:scale-95 px-6 py-3.5 text-xs font-black uppercase tracking-wider rounded-xl md:rounded-full transition-all w-fit shadow-md shadow-primary/20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden="true">
                  <path d="M2.98033 5.27131C0.928482 6.14199 1.10731 9.11068 3.23905 9.58908L5.72352 10.1467C6.41365 10.3015 6.98045 10.7771 7.25282 11.4299L8.23334 13.7798C9.07466 15.7961 12.0239 15.4522 12.5304 13.2848L14.6485 4.13637C15.0652 2.33668 13.322 0.873966 11.622 1.59682L2.98033 5.27131Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <span>Obter direcções</span>
              </a>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
