import { useState, useEffect, useRef } from 'react';

function Herosection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const heroRef = useRef(null);

  const textos = [
    "Calidad premium para tu hogar",
    "Comodidad y estilo en cada producto",
    "La mejor blanquería al mejor precio"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % textos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

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
        {/* Orbes flotantes con blur */}
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
        
        {/* Partículas flotantes */}
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

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16">
          
          {/* Contenido de texto mejorado */}
          <div className={`flex-1 text-center lg:text-left transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            
            {/* Badge superior con efecto glassmorphism */}
            <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-lg px-5 py-2.5 rounded-full shadow-lg mb-6 border border-white/20 hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <img 
                  src="/assets/logo/5.png" 
                  alt="Kuyen Logo" 
                  className="h-8 w-auto"
                />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-ping" />
              </div>
              <div className="h-4 w-px bg-gradient-to-b from-transparent via-blue-400/50 to-transparent" />
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Blanquería Premium
              </span>
            </div>

            {/* Título principal con animación de reveal */}
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

            {/* Subtítulo animado con transición suave */}
            <div className="h-16 sm:h-20 mb-8 flex items-center justify-center lg:justify-start overflow-hidden">
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-600 relative">
                {textos.map((texto, index) => (
                  <span
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ${
                      index === currentText
                        ? 'opacity-100 translate-y-0'
                        : index < currentText
                        ? 'opacity-0 -translate-y-full'
                        : 'opacity-0 translate-y-full'
                    }`}
                  >
                    {texto}
                  </span>
                ))}
              </p>
            </div>

            {/* Descripción mejorada */}
            <p className="text-base sm:text-lg text-slate-600 font-medium mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-center lg:text-left">
              Descubrí nuestra colección exclusiva de{' '}
              <span className="text-blue-600 font-semibold">toallones</span>,{' '}
              <span className="text-emerald-600 font-semibold">sábanas</span>,{' '}
              <span className="text-blue-600 font-semibold">acolchados</span> y más.
              <span className="block mt-2 text-slate-500">
                Calidad premium que transforma tu hogar en un espacio de confort y estilo.
              </span>
            </p>

            {/* Botones de acción mejorados */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a 
                href="/productos" 
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
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
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-white/20 animate-shimmer" />
                </div>
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

            {/* Estadísticas mejoradas con contadores animados */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8 border-t border-slate-200/50">
              {[
                { value: '500+', label: 'Productos', color: 'from-blue-600 to-blue-700' },
                { value: '1000+', label: 'Clientes Felices', color: 'from-emerald-500 to-emerald-600' },
                { value: '5★', label: 'Calidad Premium', color: 'from-amber-500 to-amber-600' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="group text-center hover:scale-110 transition-transform duration-300 cursor-default"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Imagen principal mejorada */}
          <div className={`w-full lg:flex-1 flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            <div className="relative group cursor-pointer">
              
              {/* Contenedor de imagen con efectos avanzados */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-white via-slate-50 to-blue-50 p-6 transition-all duration-500 group-hover:shadow-blue-500/20 group-hover:scale-105">
                <img 
                  src="/assets/images/banner/bannerkuyen.PNG" 
                  alt="Kuyen Banner - Productos de Blanquería" 
                  className="w-full max-w-md lg:max-w-lg h-auto object-contain transform transition-all duration-700 group-hover:scale-110" 
                />
                
                {/* Overlay con efecto de brillo */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl" />
                
                {/* Efecto de escaneo de luz */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 animate-shine" />
                </div>
              </div>

              {/* Elementos decorativos flotantes mejorados */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl rotate-12 shadow-xl flex items-center justify-center group-hover:rotate-45 transition-all duration-500 animate-float">
                <img 
                  src="/assets/logo/logokuyen.svg" 
                  alt="Kuyen Logo" 
                  className="h-12 w-auto"
                />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl rotate-45 shadow-lg group-hover:rotate-90 transition-all duration-500 animate-float-delayed" />
              
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-blue-500 rounded-full shadow-lg animate-pulse-glow" />
              
              <div className="absolute top-1/4 -right-8 w-8 h-8 bg-emerald-400 rounded-lg rotate-45 shadow-md animate-float" 
                style={{ animationDelay: '1s' }}
              />
              
              {/* Anillos decorativos animados */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-full scale-110 animate-pulse-slow" />
                <div className="absolute inset-0 border-2 border-blue-400/30 rounded-full scale-125 animate-spin-very-slow" />
                <div className="absolute inset-0 border-2 border-emerald-400/30 rounded-full scale-150 animate-spin-reverse-slow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll mejorado */}
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

      {/* Estilos de animación personalizados */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        
        @keyframes float-particle {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(10px, -10px); }
          50% { transform: translate(-5px, -20px); }
          75% { transform: translate(-10px, -10px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; box-shadow: 0 0 20px currentColor; }
          50% { opacity: 1; box-shadow: 0 0 40px currentColor; }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, -10px); }
        }
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }
        
        @keyframes spin-very-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse-slow {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes shine {
          to { transform: translateX(200%); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }
        
        .animate-spin-very-slow {
          animation: spin-very-slow 20s linear infinite;
        }
        
        .animate-spin-reverse-slow {
          animation: spin-reverse-slow 15s linear infinite;
        }
        
        .animate-shine {
          animation: shine 2s ease-in-out;
        }
        
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
}

export default Herosection;