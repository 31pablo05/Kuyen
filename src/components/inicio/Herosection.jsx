import { useState, useEffect } from 'react';

function Herosection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const textos = [
    "Calidad premium para tu hogar",
    "Comodidad y estilo en cada producto",
    "La mejor blanquería al mejor precio"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Cambiar texto cada 3 segundos
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % textos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [textos.length]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F5F5F5] via-white to-[#9AE6B4]/10 px-2 sm:px-6 lg:px-8 py-6 sm:py-12">
      {/* Elementos decorativos de fondo optimizados */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Círculos animados responsivos */}
        <div className="absolute top-10 left-5 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 bg-[#5DA9E9]/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-10 sm:right-20 w-20 sm:w-24 h-20 sm:h-24 bg-[#9AE6B4]/20 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 sm:w-16 h-12 sm:h-16 bg-[#2B4C7E]/10 rounded-full animate-pulse delay-500"></div>
        
        {/* Formas geométricas */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-[#5DA9E9] rotate-45 animate-ping delay-700"></div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-[#9AE6B4] rotate-45 animate-ping delay-1000"></div>
        
        {/* Líneas decorativas */}
        <div className="absolute top-0 left-1/4 w-px h-24 sm:h-32 bg-gradient-to-b from-[#5DA9E9]/30 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-px h-32 sm:h-40 bg-gradient-to-t from-[#9AE6B4]/30 to-transparent animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-12">
          
          {/* Contenido de texto optimizado */}
          <div className={`flex-1 text-center lg:text-left transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            
            {/* Badge superior responsivo */}
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md mb-4 sm:mb-6 border border-[#5DA9E9]/20">
              <img 
                src="/assets/logo/5.png" 
                alt="Kuyen Logo" 
                className="h-8 w-auto"
              />
              <div className="w-2 h-2 bg-[#9AE6B4] rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-[#2B4C7E]">Blanquería Premium</span>
            </div>

            {/* Título principal */}
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight text-center lg:text-left">
              <span className="block bg-gradient-to-r from-[#5DA9E9] via-[#2B4C7E] to-[#5DA9E9] bg-clip-text text-transparent animate-gradient bg-300% mb-1 sm:mb-2">
                Kuyen
              </span>
              <span className="block text-lg sm:text-2xl lg:text-4xl font-semibold text-[#2B4C7E] drop-shadow-md">
                Blanquería Moderna
              </span>
            </h1>

            {/* Subtítulo animado */}
            <div className="h-12 sm:h-16 mb-6 sm:mb-8 flex items-center justify-center lg:justify-start">
              <p className={`text-base sm:text-xl lg:text-2xl text-[#2B4C7E] font-bold drop-shadow-md transition-all duration-500 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                {textos[currentText]}
              </p>
            </div>

            {/* Descripción */}
            <p className="text-sm sm:text-lg text-[#2B4C7E] font-semibold drop-shadow mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto lg:mx-0 leading-relaxed text-center lg:text-left">
              Descubrí nuestra colección de toallones, sábanas, acolchados, alfombras, mochilas y cortinas.<br className="hidden sm:block" />
              <span className="block mt-1">Calidad premium, diseños modernos y los mejores precios para transformar tu hogar.</span>
            </p>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start w-full">
              <a 
                href="/productos" 
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#5DA9E9] to-[#2B4C7E] text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Explorar Productos</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2] to-[#1A365D] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a 
                href="/contacto" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm text-[#2B4C7E] rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-[#5DA9E9]/20 hover:bg-white"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>Contactanos</span>
                </span>
              </a>
            </div>

            {/* Estadísticas */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#5DA9E9]/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#5DA9E9]">500+</div>
                <div className="text-sm text-[#2B4C7E]/60">Productos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#9AE6B4]">1000+</div>
                <div className="text-sm text-[#2B4C7E]/60">Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#2B4C7E]">5★</div>
                <div className="text-sm text-[#2B4C7E]/60">Calidad</div>
              </div>
            </div>
          </div>

          {/* Imagen principal */}
          <div className={`w-full mt-6 sm:mt-8 lg:mt-0 lg:flex-1 flex justify-center lg:justify-end transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="relative group">
              
              {/* Imagen principal con efectos */}
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl bg-gradient-to-br from-white to-[#F5F5F5] p-2 sm:p-4">
                <img 
                  src="/assets/images/banner/bannerkuyen.PNG" 
                  alt="Kuyen Banner - Productos de Blanquería" 
                  className="w-full max-w-xs sm:max-w-md lg:max-w-lg h-auto object-contain transform transition-all duration-700 group-hover:scale-105" 
                />
                
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#5DA9E9]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl sm:rounded-3xl"></div>
              </div>

              {/* Elementos decorativos alrededor de la imagen - responsivos */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#5DA9E9] to-[#2B4C7E] rounded-xl sm:rounded-2xl rotate-12 animate-pulse shadow-lg flex items-center justify-center">
                <img 
                  src="/assets/logo/5.png" 
                  alt="Kuyen Logo" 
                  className="h-8 sm:h-12 w-auto filter invert"
                />
              </div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-[#9AE6B4] rounded-lg sm:rounded-xl rotate-45 animate-bounce delay-500 shadow-md"></div>
              <div className="absolute top-1/2 -left-6 sm:-left-8 w-4 h-4 sm:w-6 sm:h-6 bg-[#5DA9E9] rounded-full animate-ping delay-1000"></div>
              <div className="absolute top-1/4 -right-6 sm:-right-8 w-3 h-3 sm:w-4 sm:h-4 bg-[#9AE6B4] rotate-45 animate-pulse delay-700"></div>
              
              {/* Círculo de fondo */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#5DA9E9]/10 to-[#9AE6B4]/10 rounded-full scale-110 animate-pulse"></div>
              
              {/* Anillo exterior */}
              <div className="absolute inset-0 -z-20 border-2 border-[#5DA9E9]/20 rounded-full scale-125 animate-spin-slow"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-1 sm:gap-2 text-[#2B4C7E]/60">
          <span className="text-xs sm:text-sm font-medium">Descubre más</span>
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
