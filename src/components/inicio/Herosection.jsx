import { useState, useEffect, useRef, useMemo } from 'react';

// Array de imágenes para el carrusel - movido fuera del componente
const CAROUSEL_IMAGES = [
  {
    src: "/assets/images/banner/bannerkuyen.PNG",
    alt: "Colección Kuyen",
    title: "Nuestra Colección"
  },
  {
    src: "/assets/images/productosKuyen/product1.jpg",
    alt: "Productos Premium",
    title: "Productos de Calidad"
  },
  {
    src: "/assets/images/productosKuyen/product15.jpg",
    alt: "Sábanas y Textiles",
    title: "Textiles para el Hogar"
  },
  {
    src: "/assets/images/productosKuyen/product30.jpg",
    alt: "Blanquería Exclusiva",
    title: "Colección Exclusiva"
  },
  {
    src: "/assets/images/banner/nosotrosKuyen.jpg",
    alt: "Nosotros Kuyen",
    title: "Conocé Kuyen"
  },
  {
    src: "/assets/images/productosKuyen/product45.jpg",
    alt: "Productos Destacados",
    title: "Productos Destacados"
  }
];

function Herosection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPaused, setIsPaused] = useState(false);
  const heroRef = useRef(null);

  const textos = [
    "Calidad premium para tu hogar",
    "Comodidad y estilo en cada producto",
    "La mejor blanquería al mejor precio"
  ];

  // Usar useMemo para las imágenes del carrusel
  const carouselImages = useMemo(() => CAROUSEL_IMAGES, []);

  // Debug: verificar rutas de imágenes
  useEffect(() => {
    console.log('Carrusel iniciado con imágenes:', carouselImages.map(img => img.src));
  }, [carouselImages]);

  useEffect(() => {
    setIsVisible(true);
    
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % textos.length);
    }, 4000);

    return () => clearInterval(textInterval);
  }, [textos.length]);

  // Carrusel automático
  useEffect(() => {
    if (isPaused) return;

    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(imageInterval);
  }, [isPaused, carouselImages.length]);

  // Efecto parallax sutil al mover el mouse
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <section 
      ref={heroRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
    >
      {/* Patrón de fondo mesh gradient animado */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-emerald-400/20 transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }}
        />
      </div>

      {/* Grid decorativo de fondo */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(93,169,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(93,169,233,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Elementos decorativos mejorados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-float-delayed"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-br from-blue-400 to-emerald-400 rounded-full opacity-40"
            style={{
              top: `${15 + i * 12}%`,
              left: `${10 + i * 11}%`,
              animation: `float-particle ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16 min-h-screen py-8">
          
          {/* Contenido de texto */}
          <div className={`w-full lg:w-1/2 lg:flex-shrink-0 text-center lg:text-left transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            
            {/* Logo eliminado, solo el título principal queda */}

            {/* Título principal */}
            <h1 className="mb-6 leading-tight text-center lg:text-left">
              <span className="block text-5xl sm:text-6xl lg:text-8xl font-black mb-3 relative">
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-emerald-500 bg-clip-text text-transparent blur-sm animate-pulse-slow">
                    Kuyen
                  </span>
                  <span className="relative bg-gradient-to-r from-blue-500 via-blue-600 to-emerald-500 bg-clip-text text-transparent">
                    Kuyen
                  </span>
                </span>
              </span>
              <span className="block text-xl sm:text-2xl lg:text-4xl font-bold text-slate-700 mt-2">
                <span className="inline-block animate-fade-in-up">Blanquería</span>
                <span className="inline-block animate-fade-in-up animation-delay-200 ml-3">Moderna</span>
              </span>
            </h1>

            {/* Subtítulo animado - corregido para mostrar todo el texto */}
            <div className="relative mb-8 flex items-center justify-center lg:justify-start" style={{height: '2.5em'}}>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-600 w-full text-center lg:text-left" style={{minHeight: '2.5em', position: 'relative'}}>
                {textos.map((texto, index) => (
                  <span
                    key={index}
                    className={`absolute left-0 right-0 transition-all duration-700 ${
                      index === currentText
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 pointer-events-none'
                    }`}
                    style={{top: 0}}
                  >
                    {texto}
                  </span>
                ))}
              </p>
            </div>

            {/* Descripción */}
            <p className="text-base sm:text-lg text-slate-600 font-medium mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-center lg:text-left">
              Descubrí nuestra colección exclusiva de{' '}
              <span className="text-blue-600 font-semibold">toallones</span>,{' '}
              <span className="text-emerald-600 font-semibold">sábanas</span>,{' '}
              <span className="text-blue-600 font-semibold">acolchados</span> y más.
              <span className="block mt-2 text-slate-500">
                Calidad premium que transforma tu hogar en un espacio de confort y estilo.
              </span>
            </p>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a 
                href="/productos" 
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <span>Explorar Productos</span>
                  <svg 
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-emerald-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </a>
              
              <a 
                href="/contacto" 
                className="group inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-slate-200 hover:border-blue-400 hover:bg-white"
              >
                <span className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>Contactanos</span>
                </span>
              </a>
            </div>

            {/* Estadísticas */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8 border-t border-slate-200/50">
              {[
                { value: '500+', label: 'Productos', color: 'from-blue-600 to-blue-700' },
                { value: '1000+', label: 'Clientes Felices', color: 'from-emerald-500 to-emerald-600' },
                { value: '5★', label: 'Calidad Premium', color: 'from-amber-500 to-amber-600' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="group text-center hover:scale-110 transition-transform duration-300 cursor-default"
                >
                  <div className={`text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CARRUSEL DE IMÁGENES MEJORADO */}
          <div className={`w-full lg:w-1/2 lg:flex-shrink-0 flex justify-center transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            <div className="w-full max-w-2xl">
              <div className="relative group">
              
              {/* Contenedor del carrusel - corregido para visibilidad y responsividad */}
              <div 
                className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-white via-slate-50 to-blue-50 p-2 sm:p-4 transition-all duration-500 group-hover:shadow-blue-500/20"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* Imágenes del carrusel */}
                <div className="relative w-full h-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200">
                  {carouselImages.map((image, index) => (
                    <img
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-700 ease-in-out ${index === currentImage ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                      onLoad={() => console.log(`✓ Imagen cargada: ${image.src}`)}
                      onError={(e) => {
                        console.error(`✗ Error cargando imagen: ${image.src}`);
                        e.target.style.display = 'none';
                      }}
                      loading="eager"
                    />
                  ))}
                  {/* Indicador de imagen actual para debug */}
                  <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-lg text-sm z-40">
                    Imagen: {currentImage + 1}/{carouselImages.length}
                  </div>
                  {/* Fallback si no hay imágenes en el array */}
                  {carouselImages.length === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-emerald-100 rounded-xl">
                      <div className="text-center p-8">
                        <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center">
                          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-700 mb-2">Kuyen Blanquería</h3>
                        <p className="text-slate-600">No hay imágenes disponibles.</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Título de la imagen actual y estado han sido removidos para no tapar la imagen */}

                {/* Controles del carrusel */}
                <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
                  <button
                    onClick={prevImage}
                    className="bg-white/95 backdrop-blur-sm hover:bg-white text-slate-700 p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 opacity-80 hover:opacity-100 border border-white/50"
                    aria-label="Imagen anterior"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="bg-white/95 backdrop-blur-sm hover:bg-white text-slate-700 p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 opacity-80 hover:opacity-100 border border-white/50"
                    aria-label="Imagen siguiente"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Botón de pausa/play eliminado */}

                {/* Indicadores de posición (dots) */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-30 bg-white/80 backdrop-blur-md px-4 py-3 rounded-full shadow-xl border border-white/50">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`transition-all duration-300 rounded-full border-2 ${
                        index === currentImage
                          ? 'w-8 h-3 bg-gradient-to-r from-blue-600 to-emerald-600 border-blue-600 shadow-lg'
                          : 'w-3 h-3 bg-slate-300 hover:bg-slate-400 border-slate-300 hover:border-slate-400 hover:scale-110'
                      }`}
                      aria-label={`Ir a imagen ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Overlay con efecto de brillo */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl pointer-events-none" />
              </div>

              {/* Elemento flotante del logo, ahora delante del carrusel */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl rotate-12 shadow-xl flex items-center justify-center group-hover:rotate-45 transition-all duration-500 animate-float z-50">
                <img src="/assets/logo/logo.svg" alt="Logo Kuyen" className="w-14 h-14" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl rotate-45 shadow-lg group-hover:rotate-90 transition-all duration-500 animate-float-delayed" />
              
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-blue-500 rounded-full shadow-lg animate-pulse-glow" />
              
              <div className="absolute top-1/4 -right-8 w-8 h-8 bg-emerald-400 rounded-lg rotate-45 shadow-md animate-float" 
                style={{ animationDelay: '1s' }}
              />
              
              {/* Anillos decorativos animados */}
              <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-full scale-110 animate-pulse-slow" />
                <div className="absolute inset-0 border-2 border-blue-400/30 rounded-full scale-125 animate-spin-very-slow" />
                <div className="absolute inset-0 border-2 border-emerald-400/30 rounded-full scale-150 animate-spin-reverse-slow" />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="flex flex-col items-center gap-2 text-slate-500 group cursor-pointer hover:text-blue-600 transition-colors duration-300">
          <span className="text-sm font-semibold tracking-wide">Descubre más</span>
          <div className="relative">
            <svg className="w-6 h-6 animate-bounce-gentle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herosection;