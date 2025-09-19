import { useState, useEffect } from 'react';

function PorqueElegirnos() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredBenefit, setHoveredBenefit] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('porque-elegirnos');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const beneficios = [
    {
      titulo: 'Calidad Premium',
      descripcion: 'Productos seleccionados con los mejores materiales para tu confort y durabilidad.',
      icono: '🏆',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-50',
      stats: '5+ años',
      subtitle: 'Experiencia garantizada',
      features: ['Materiales importados', 'Control de calidad', 'Certificaciones']
    },
    {
      titulo: 'Variedad de Productos',
      descripcion: 'Toallones, sábanas, acolchados, alfombras, mochilas y cortinas para todos los gustos.',
      icono: '🛍️',
      color: 'from-blue-400 to-purple-500',
      bgColor: 'bg-blue-50',
      stats: '500+',
      subtitle: 'Productos disponibles',
      features: ['Últimas tendencias', 'Todos los tamaños', 'Diseños exclusivos']
    },
    {
      titulo: 'Atención Personalizada',
      descripcion: 'Te asesoramos para que encuentres lo que realmente necesitás para tu hogar.',
      icono: '🤝',
      color: 'from-green-400 to-teal-500',
      bgColor: 'bg-green-50',
      stats: '24/7',
      subtitle: 'Atención disponible',
      features: ['Asesoramiento experto', 'WhatsApp directo', 'Seguimiento post-venta']
    },
    {
      titulo: 'Precios Competitivos',
      descripcion: 'Ofertas y promociones todo el año para que ahorres sin resignar calidad.',
      icono: '💰',
      color: 'from-red-400 to-pink-500',
      bgColor: 'bg-red-50',
      stats: '30%',
      subtitle: 'Descuentos promedio',
      features: ['Promociones semanales', 'Descuentos por volumen', 'Planes de pago']
    }
  ];

  return (
    <section 
      id="porque-elegirnos" 
      className="w-full py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-[#F8FAFC] to-[#F1F5F9] relative overflow-hidden"
    >
      {/* Elementos decorativos de fondo responsivos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-4 sm:top-20 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-[#5DA9E9]/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-4 sm:bottom-20 sm:right-20 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-[#9AE6B4]/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 sm:w-3 sm:h-3 bg-[#5DA9E9] rotate-45 animate-ping delay-700"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#9AE6B4] rotate-45 animate-ping delay-1200"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header de la sección responsivo */}
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#5DA9E9]/10 to-[#9AE6B4]/10 px-4 py-2 sm:px-6 sm:py-2 rounded-full mb-3 sm:mb-4 border border-[#5DA9E9]/20">
            <span className="w-2 h-2 bg-[#5DA9E9] rounded-full animate-pulse"></span>
            <span className="text-xs sm:text-sm font-medium text-[#2B4C7E]">Nuestra Propuesta de Valor</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-[#2B4C7E] via-[#5DA9E9] to-[#2B4C7E] bg-clip-text text-transparent animate-gradient bg-300%">
              ¿Por qué elegirnos?
            </span>
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg text-[#2B4C7E]/70 max-w-2xl mx-auto leading-relaxed px-4">
            Más de 5 años brindando productos de calidad superior con el mejor servicio al cliente
          </p>
        </div>

        {/* Estadísticas destacadas responsivas */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12 lg:mb-16 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center p-3 sm:p-4 bg-white/70 backdrop-blur-sm rounded-lg sm:rounded-xl border border-[#5DA9E9]/10">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#2B4C7E]">10,000+</div>
            <div className="text-xs sm:text-sm text-[#2B4C7E]/70">Clientes satisfechos</div>
          </div>
          <div className="text-center p-3 sm:p-4 bg-white/70 backdrop-blur-sm rounded-lg sm:rounded-xl border border-[#5DA9E9]/10">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#2B4C7E]">98%</div>
            <div className="text-xs sm:text-sm text-[#2B4C7E]/70">Satisfacción cliente</div>
          </div>
          <div className="text-center p-3 sm:p-4 bg-white/70 backdrop-blur-sm rounded-lg sm:rounded-xl border border-[#5DA9E9]/10">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#2B4C7E]">5+</div>
            <div className="text-xs sm:text-sm text-[#2B4C7E]/70">Años de experiencia</div>
          </div>
          <div className="text-center p-3 sm:p-4 bg-white/70 backdrop-blur-sm rounded-lg sm:rounded-xl border border-[#5DA9E9]/10">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#2B4C7E]">24/7</div>
            <div className="text-xs sm:text-sm text-[#2B4C7E]/70">Atención disponible</div>
          </div>
        </div>

        {/* Grid de beneficios responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {beneficios.map((beneficio, idx) => (
            <div 
              key={idx} 
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-[#F5F5F5] hover:border-[#5DA9E9]/30 transform hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${(idx * 150) + 500}ms` }}
              onMouseEnter={() => setHoveredBenefit(idx)}
              onMouseLeave={() => setHoveredBenefit(null)}
            >
              {/* Fondo decorativo */}
              <div className={`absolute inset-0 bg-gradient-to-br ${beneficio.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Contenido */}
              <div className="relative p-8 flex flex-col items-center text-center h-full">
                
                {/* Ícono con efecto responsivo */}
                <div className={`relative mb-4 sm:mb-6 transform transition-all duration-500 ${
                  hoveredBenefit === idx ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
                }`}>
                  <div className={`absolute inset-0 bg-gradient-to-r ${beneficio.color} rounded-full blur-xl opacity-30 scale-150`}></div>
                  <div className={`relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${beneficio.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <span className="text-xl sm:text-2xl lg:text-3xl filter drop-shadow-sm">{beneficio.icono}</span>
                  </div>
                </div>

                {/* Estadística destacada responsiva */}
                <div className="mb-3 sm:mb-4">
                  <div className={`text-xl sm:text-2xl lg:text-3xl font-black bg-gradient-to-r ${beneficio.color} bg-clip-text text-transparent`}>
                    {beneficio.stats}
                  </div>
                  <div className="text-xs text-[#2B4C7E]/70 font-medium">
                    {beneficio.subtitle}
                  </div>
                </div>

                {/* Título responsivo */}
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#2B4C7E] mb-2 sm:mb-3 group-hover:text-[#5DA9E9] transition-colors">
                  {beneficio.titulo}
                </h3>

                {/* Descripción responsiva */}
                <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed flex-grow">
                  {beneficio.descripcion}
                </p>

                {/* Features expandidas */}
                <div className={`transition-all duration-500 overflow-hidden ${
                  hoveredBenefit === idx ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="space-y-2 mb-4">
                    {beneficio.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-center gap-2 text-xs text-[#2B4C7E]/80">
                        <div className={`w-2 h-2 bg-gradient-to-r ${beneficio.color} rounded-full`}></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Botón de acción */}
                <button className={`w-full bg-gradient-to-r ${beneficio.color} hover:shadow-lg text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm ${
                  hoveredBenefit === idx ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                }`}>
                  Conocé más
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de garantía responsiva */}
        <div className={`mt-8 sm:mt-12 lg:mt-16 text-center transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-[#5DA9E9]/10 via-white to-[#9AE6B4]/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-[#5DA9E9]/20 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-[#5DA9E9] to-[#2B4C7E] rounded-full flex items-center justify-center">
                  <span className="text-lg sm:text-xl lg:text-2xl">🛡️</span>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-sm sm:text-base lg:text-xl font-bold text-[#2B4C7E]">Garantía de Satisfacción</div>
                  <div className="text-xs sm:text-sm text-[#2B4C7E]/70">30 días para cambios sin preguntas</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 sm:gap-4">
                
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-[#2B4C7E] to-[#9AE6B4] rounded-full flex items-center justify-center">
                  <span className="text-lg sm:text-xl lg:text-2xl">💎</span>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-sm sm:text-base lg:text-xl font-bold text-[#2B4C7E]">Calidad Premium</div>
                  <div className="text-xs sm:text-sm text-[#2B4C7E]/70">Productos certificados y duraderos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}export default PorqueElegirnos;
