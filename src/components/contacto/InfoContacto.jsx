function InfoContacto() {
  return (
    <div className="bg-gradient-to-br from-white/90 via-[#9AE6B4]/5 to-[#5DA9E9]/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-[#9AE6B4]/20 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#9AE6B4]/10 to-[#5DA9E9]/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-[#5DA9E9]/10 to-[#9AE6B4]/10 rounded-full blur-xl"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-[#9AE6B4] to-[#5DA9E9] rounded-xl flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#2B4C7E] to-[#5DA9E9] bg-clip-text text-transparent">
            Información de contacto
          </h3>
        </div>
        
        <div className="space-y-8">
          {/* WhatsApp */}
          <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300 transform hover:scale-105">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:rotate-12">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.624.39 3.207 1.13 4.627L2 22l5.486-1.115A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.47 0-2.902-.404-4.14-1.168l-.295-.178-3.252.661.662-3.17-.19-.325C4.404 14.902 4 13.47 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.297-6.255c-.237-.119-1.398-.688-1.615-.767-.217-.08-.375-.119-.532.119-.158.237-.61.767-.748.924-.138.158-.276.178-.513.06-.237-.119-1.002-.369-1.91-1.176-.706-.63-1.184-1.406-1.323-1.643-.138-.237-.015-.365.104-.484.107-.106.237-.276.355-.414.119-.138.158-.237.237-.395.079-.158.04-.296-.02-.414-.06-.119-.532-1.287-.729-1.762-.192-.462-.388-.399-.532-.406-.138-.007-.296-.009-.454-.009-.158 0-.414.06-.63.296-.217.237-.827.808-.827 1.969 0 1.161.846 2.285.963 2.444.119.158 1.666 2.547 4.037 3.463.565.194 1.005.31 1.35.397.567.144 1.083.124 1.491.075.455-.054 1.398-.572 1.597-1.126.198-.553.198-1.027.139-1.126-.06-.099-.217-.158-.454-.277z"/>
                </svg>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#2B4C7E] mb-2 group-hover:text-[#25D366] transition-colors duration-300">WhatsApp</h4>
              <a 
                href="https://wa.me/542804325023" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#2B4C7E] hover:text-[#25D366] font-semibold transition-colors duration-300 flex items-center gap-2"
              >
                <span>+54 2804 325023</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <p className="text-[#2B4C7E]/70 text-sm mt-1">Contacto directo e inmediato</p>
            </div>
          </div>

          {/* Showroom */}
          <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300 transform hover:scale-105">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 bg-gradient-to-br from-[#5DA9E9] to-[#2B4C7E] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:rotate-12">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#2B4C7E] mb-2 group-hover:text-[#5DA9E9] transition-colors duration-300">Showroom Principal</h4>
              <div className="space-y-1">
                <p className="text-[#2B4C7E] font-semibold">Aaron Jenkins 1529</p>
                <p className="text-[#2B4C7E]/70">Trelew, Chubut</p>
                <p className="text-[#2B4C7E]/70">Argentina</p>
              </div>
              <div className="mt-2">
                <span className="inline-flex items-center gap-1 text-xs bg-[#5DA9E9]/10 text-[#5DA9E9] px-2 py-1 rounded-full">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Permanente
                </span>
              </div>
            </div>
          </div>

          {/* Feria */}
          <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300 transform hover:scale-105">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 bg-gradient-to-br from-[#9AE6B4] to-[#5DA9E9] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:rotate-12">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#2B4C7E] mb-2 group-hover:text-[#9AE6B4] transition-colors duration-300">Feria Barrio San Martín</h4>
              <div className="space-y-1">
                <p className="text-[#2B4C7E] font-semibold">Coordenadas: -43.241201, -65.315248</p>
                <p className="text-[#2B4C7E]/70">Trelew, Chubut</p>
                <p className="text-[#2B4C7E]/70">Argentina</p>
              </div>
              <div className="mt-2 flex gap-2">
                <span className="inline-flex items-center gap-1 text-xs bg-[#9AE6B4]/20 text-[#2B4C7E] px-2 py-1 rounded-full">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  Fines de semana
                </span>
                <a 
                  href={`https://www.google.com/maps?q=-43.241201,-65.315248`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs bg-[#5DA9E9]/20 text-[#5DA9E9] px-2 py-1 rounded-full hover:bg-[#5DA9E9]/30 transition-colors duration-300"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Ver en Maps
                </a>
              </div>
            </div>
          </div>

          {/* Horarios */}
          <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300 transform hover:scale-105">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 bg-gradient-to-br from-[#2B4C7E] to-[#5DA9E9] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:rotate-12">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#2B4C7E] mb-3 group-hover:text-[#5DA9E9] transition-colors duration-300">Horarios de atención</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center bg-white/30 px-3 py-2 rounded-lg">
                  <span className="text-[#2B4C7E] font-medium">Showroom</span>
                  <span className="text-[#2B4C7E]/80 text-sm">Lun-Vie 9:00-18:00</span>
                </div>
                <div className="flex justify-between items-center bg-white/30 px-3 py-2 rounded-lg">
                  <span className="text-[#2B4C7E] font-medium">Feria</span>
                  <span className="text-[#2B4C7E]/80 text-sm">Sáb-Dom 8:00-14:00</span>
                </div>
                <div className="flex justify-between items-center bg-white/30 px-3 py-2 rounded-lg">
                  <span className="text-[#2B4C7E] font-medium">WhatsApp</span>
                  <span className="text-[#25D366] text-sm font-semibold">24/7 Disponible</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mapa mejorado */}
        <div className="mt-8">
          <h4 className="text-lg font-bold text-[#2B4C7E] mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-[#5DA9E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Ubicaciones
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#5DA9E9]/10 to-[#2B4C7E]/10 p-4 border border-[#5DA9E9]/20 hover:border-[#5DA9E9]/40 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-between mb-2">
                <h5 className="font-semibold text-[#2B4C7E]">Showroom</h5>
                <span className="text-xs bg-[#5DA9E9]/20 text-[#5DA9E9] px-2 py-1 rounded-full">Principal</span>
              </div>
              <p className="text-sm text-[#2B4C7E]/80 mb-3">Aaron Jenkins 1529</p>
              <a 
                href="https://www.google.com/maps/search/Aaron+Jenkins+1529+Puerto+Madryn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#5DA9E9] hover:text-[#2B4C7E] transition-colors duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Ver en Maps
              </a>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#9AE6B4]/10 to-[#5DA9E9]/10 p-4 border border-[#9AE6B4]/20 hover:border-[#9AE6B4]/40 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-between mb-2">
                <h5 className="font-semibold text-[#2B4C7E]">Feria</h5>
                <span className="text-xs bg-[#9AE6B4]/30 text-[#2B4C7E] px-2 py-1 rounded-full">Fin de semana</span>
              </div>
              <p className="text-sm text-[#2B4C7E]/80 mb-3">Barrio San Martín</p>
              <a 
                href={`https://www.google.com/maps?q=-43.241201,-65.315248`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#9AE6B4] hover:text-[#2B4C7E] transition-colors duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Ver en Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoContacto;