function Nosotros() {
  return (
    <div className="w-full mx-auto px-4 md:px-8 lg:px-16 py-12 bg-gradient-to-br from-[#F5F5F5] via-white to-[#9AE6B4]/5 min-h-screen">
      {/* Hero Section */}
      <section className="text-center mb-16 relative">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-[#5DA9E9]/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-1/4 w-24 h-24 bg-[#9AE6B4]/15 rounded-full blur-lg animate-bounce delay-1000"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#5DA9E9]/10 to-[#9AE6B4]/10 px-6 py-2 rounded-full mb-4 border border-[#5DA9E9]/20">
            <span className="w-2 h-2 bg-[#5DA9E9] rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-[#2B4C7E]">Conocé Kuyen</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-[#5DA9E9] via-[#2B4C7E] to-[#9AE6B4] bg-clip-text text-transparent animate-gradient bg-300%">
            Sobre Nosotros
          </h1>
          <p className="text-lg md:text-xl text-[#2B4C7E] max-w-3xl mx-auto font-semibold drop-shadow-sm">
            Kuyen es más que una blanquería. Somos una empresa familiar que desde hace más de 5 años 
            se dedica a brindar productos de calidad para el hogar.
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 relative">
        {/* Elementos decorativos para esta sección */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-[#9AE6B4]/20 rounded-full blur-lg animate-pulse delay-500"></div>
        <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-[#5DA9E9]/20 rounded-full blur-md animate-bounce delay-700"></div>
        
        <div className="relative z-10 group">
          <div className="bg-gradient-to-br from-white/80 to-[#5DA9E9]/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[#5DA9E9]/20 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#2B4C7E] to-[#5DA9E9] bg-clip-text text-transparent mb-6">
              Nuestra Historia
            </h2>
            <div className="space-y-4">
              <p className="text-[#2B4C7E] font-medium leading-relaxed">
                Fundada en 2003, Kuyen nació del sueño de crear un espacio donde las familias pudieran 
                encontrar todo lo necesario para hacer de sus hogares un lugar acogedor y hermoso.
              </p>
              <p className="text-[#2B4C7E]/80 leading-relaxed">
                Comenzamos como una pequeña tienda local y, gracias a la confianza de nuestros clientes, 
                hemos crecido hasta convertirnos en referentes en blanquería y artículos para el hogar.
              </p>
              <p className="text-[#2B4C7E]/80 leading-relaxed">
                Hoy continuamos con la misma pasión del primer día: ofrecer productos de calidad 
                con un servicio personalizado y cercano.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center relative z-10 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#5DA9E9]/30 to-[#9AE6B4]/30 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>
            <img 
              src="/assets/images/banner/nosotrosKuyen.jpg" 
              alt="Historia de Kuyen" 
              className="relative w-full max-w-md h-80 object-cover rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 border-4 border-white/50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B4C7E]/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-[#5DA9E9]/5 to-[#9AE6B4]/5 rounded-full blur-2xl"></div>
        
        <div className="group relative z-10">
          <div className="bg-gradient-to-br from-[#5DA9E9]/10 via-white/90 to-[#9AE6B4]/10 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-[#5DA9E9]/30 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#5DA9E9] to-[#2B4C7E] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🎯</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#2B4C7E] to-[#5DA9E9] bg-clip-text text-transparent">
                Nuestra Misión
              </h3>
            </div>
            <p className="text-[#2B4C7E] font-medium leading-relaxed">
              Brindar productos de blanquería y artículos para el hogar de la más alta calidad, 
              acompañando a nuestros clientes en la creación de espacios únicos y confortables.
            </p>
          </div>
        </div>
        
        <div className="group relative z-10">
          <div className="bg-gradient-to-br from-[#9AE6B4]/10 via-white/90 to-[#5DA9E9]/10 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-[#9AE6B4]/30 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#9AE6B4] to-[#5DA9E9] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🔮</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#5DA9E9] to-[#9AE6B4] bg-clip-text text-transparent">
                Nuestra Visión
              </h3>
            </div>
            <p className="text-[#2B4C7E] font-medium leading-relaxed">
              Ser la blanquería de referencia, reconocida por la excelencia en productos, 
              atención personalizada e innovación constante en diseño y calidad.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="mb-16 relative">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-0 left-10 w-28 h-28 bg-[#5DA9E9]/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-0 right-10 w-32 h-32 bg-[#9AE6B4]/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#5DA9E9] rotate-45 animate-ping delay-500"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#5DA9E9]/10 to-[#9AE6B4]/10 px-6 py-2 rounded-full mb-4 border border-[#5DA9E9]/20">
              <span className="w-2 h-2 bg-[#9AE6B4] rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-[#2B4C7E]">Lo que nos define</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-[#2B4C7E] via-[#5DA9E9] to-[#9AE6B4] bg-clip-text text-transparent animate-gradient bg-300%">
              Nuestros Valores
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center transform transition-all duration-500 hover:scale-105">
              <div className="bg-gradient-to-br from-white/80 via-[#5DA9E9]/5 to-[#9AE6B4]/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[#5DA9E9]/20 hover:shadow-2xl transition-all duration-500 hover:border-[#5DA9E9]/40">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#5DA9E9]/30 to-[#9AE6B4]/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-[#5DA9E9] to-[#2B4C7E] rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:rotate-12">
                    <span className="text-3xl filter drop-shadow-sm">🏆</span>
                  </div>
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-[#2B4C7E] mb-4 group-hover:text-[#5DA9E9] transition-colors duration-300">
                  Calidad
                </h4>
                <p className="text-[#2B4C7E]/80 font-medium leading-relaxed">
                  Seleccionamos cuidadosamente cada producto para garantizar la mejor calidad.
                </p>
              </div>
            </div>
            
            <div className="group text-center transform transition-all duration-500 hover:scale-105 delay-100">
              <div className="bg-gradient-to-br from-white/80 via-[#9AE6B4]/5 to-[#5DA9E9]/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[#9AE6B4]/20 hover:shadow-2xl transition-all duration-500 hover:border-[#9AE6B4]/40">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#9AE6B4]/30 to-[#5DA9E9]/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-[#9AE6B4] to-[#5DA9E9] rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:rotate-12">
                    <span className="text-3xl filter drop-shadow-sm">🤝</span>
                  </div>
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-[#2B4C7E] mb-4 group-hover:text-[#5DA9E9] transition-colors duration-300">
                  Confianza
                </h4>
                <p className="text-[#2B4C7E]/80 font-medium leading-relaxed">
                  Construimos relaciones duraderas basadas en la transparencia y honestidad.
                </p>
              </div>
            </div>
            
            <div className="group text-center transform transition-all duration-500 hover:scale-105 delay-200">
              <div className="bg-gradient-to-br from-white/80 via-[#2B4C7E]/5 to-[#5DA9E9]/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[#2B4C7E]/20 hover:shadow-2xl transition-all duration-500 hover:border-[#2B4C7E]/40">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2B4C7E]/30 to-[#5DA9E9]/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-[#2B4C7E] to-[#5DA9E9] rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:rotate-12">
                    <span className="text-3xl filter drop-shadow-sm">💡</span>
                  </div>
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-[#2B4C7E] mb-4 group-hover:text-[#5DA9E9] transition-colors duration-300">
                  Innovación
                </h4>
                <p className="text-[#2B4C7E]/80 font-medium leading-relaxed">
                  Constantemente actualizamos nuestro catálogo con las últimas tendencias.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
}

export default Nosotros;
