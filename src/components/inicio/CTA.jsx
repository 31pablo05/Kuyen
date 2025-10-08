function CTA() {
  return (
    <section className="w-full max-w-6xl mx-auto py-8 md:py-12 px-4 sm:px-6 md:px-8 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#11b189] via-[#2563eb] to-[#182e59] rounded-2xl md:rounded-3xl shadow-2xl"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl md:rounded-3xl"></div>
      
      {/* Elementos decorativos flotantes - ajustados para móvil */}
      <div className="absolute top-4 md:top-8 left-4 md:left-8 w-12 md:w-20 h-12 md:h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 w-10 md:w-16 h-10 md:h-16 bg-white/15 rounded-full blur-lg animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-2 md:w-3 h-2 md:h-3 bg-white/30 rounded-full animate-ping delay-500"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 md:px-6 py-2 rounded-full mb-4 md:mb-6 border border-white/30">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
          <span className="text-xs md:text-sm font-medium text-white">¡Conectá con Kuyen!</span>
        </div>

        {/* Título principal - mejor responsive */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6 drop-shadow-lg px-2">
          ¡Descubrí la calidad de Kuyen!
        </h2>
        
        {/* Descripción - mejorada para móvil */}
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-3xl leading-relaxed font-medium px-2">
          Renová tu hogar con nuestros productos de calidad: toallones, sábanas, acolchados, alfombras, mochilas y cortinas.
          <span className="block mt-2 font-semibold">Calidad, diseño y precio en un solo lugar.</span>
        </p>

        {/* Sección de ubicación destacada - optimizada para móvil */}
        <div className="bg-white/15 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 mb-6 md:mb-8 border border-white/20 max-w-2xl w-full mx-2">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
            <div className="w-8 md:w-10 h-8 md:h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xl md:text-2xl">📍</span>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white text-center sm:text-left">
              ¡Encontranos los fines de semana!
            </h3>
          </div>
          <p className="text-white/90 text-base md:text-lg font-medium mb-3 md:mb-4">
            Visitá nuestro stand en la <span className="bg-white/25 px-2 md:px-3 py-1 rounded-lg font-bold whitespace-nowrap">Feria del Barrio San Martín</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4 text-white/80 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <span className="text-base md:text-lg">🕐</span>
              <span className="font-semibold">Sábados y Domingos</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base md:text-lg">💰</span>
              <span className="font-semibold">Los mejores precios</span>
            </div>
          </div>
        </div>

        {/* Botones de acción - stack completo en móvil */}
        <div className="flex flex-col gap-4 md:gap-6 w-full max-w-lg md:max-w-2xl px-2">
          {/* Botón WhatsApp - prioridad en móvil */}
          <a 
            href="https://wa.me/5492804325023" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative overflow-hidden px-6 md:px-8 py-4 bg-[#25D366] text-white rounded-xl md:rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full flex items-center justify-center gap-3 text-base md:text-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#25D366] to-[#128C7E] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 md:w-7 h-6 md:h-7 animate-pulse">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.624.39 3.207 1.13 4.627L2 22l5.486-1.115A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.47 0-2.902-.404-4.14-1.168l-.295-.178-3.252.661.662-3.17-.19-.325C4.404 14.902 4 13.47 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.297-6.255c-.237-.119-1.398-.688-1.615-.767-.217-.08-.375-.119-.532.119-.158.237-.61.767-.748.924-.138.158-.276.178-.513.06-.237-.119-1.002-.369-1.91-1.176-.706-.63-1.184-1.406-1.323-1.643-.138-.237-.015-.365.104-.484.107-.106.237-.276.355-.414.119-.138.158-.237.237-.395.079-.158.04-.296-.02-.414-.06-.119-.532-1.287-.729-1.762-.192-.462-.388-.399-.532-.406-.138-.007-.296-.009-.454-.009-.158 0-.414.06-.63.296-.217.237-.827.808-.827 1.969 0 1.161.846 2.285.963 2.444.119.158 1.666 2.547 4.037 3.463.565.194 1.005.31 1.35.397.567.144 1.083.124 1.491.075.455-.054 1.398-.572 1.597-1.126.198-.553.198-1.027.139-1.126-.06-.099-.217-.158-.454-.277z"/>
              </svg>
              <div className="text-center md:text-left">
                <div className="text-sm opacity-90">Consultá por WhatsApp</div>
                <div className="font-black text-lg md:text-xl">2804 325023</div>
              </div>
            </div>
          </a>

          {/* Botón Ver productos */}
          <a 
            href="/productos" 
            className="group relative overflow-hidden px-6 md:px-8 py-4 bg-white text-[#182e59] rounded-xl md:rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full flex items-center justify-center gap-3 text-base md:text-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center gap-3">
              <span className="text-xl md:text-2xl">🛍️</span>
              <span>Ver Catálogo Completo</span>
            </div>
          </a>
        </div>

        {/* Información adicional - stack en móvil */}
        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-6 text-white/80 text-xs md:text-sm">
          <div className="flex items-center justify-center gap-2">
            <span>✅</span>
            <span>Calidad garantizada</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>🚚</span>
            <span>Envíos disponibles</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>💳</span>
            <span>Múltiples medios de pago</span>
          </div>
        </div>
      </div>
    </section>
  );
}export default CTA;
