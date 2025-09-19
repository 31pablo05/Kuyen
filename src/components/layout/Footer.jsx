function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-[#2B4C7E] to-[#1A365D] text-white py-12 sm:py-16 mt-12 sm:mt-16 relative overflow-hidden">
      {/* Elementos decorativos de fondo optimizados */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 sm:right-20 w-24 sm:w-32 h-24 sm:h-32 bg-[#5DA9E9]/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-5 sm:left-10 w-20 sm:w-24 h-20 sm:h-24 bg-[#9AE6B4]/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#9AE6B4] rotate-45 animate-ping delay-500"></div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-[#5DA9E9] rotate-45 animate-ping delay-1500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo y descripción optimizado */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="relative group">
                <img 
                  src="/assets/logo/5.png" 
                  alt="Kuyen Logo" 
                  className="h-12 sm:h-16 w-auto transition-all duration-300 group-hover:scale-110 drop-shadow-lg filter brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#9AE6B4]/20 to-[#5DA9E9]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-1 bg-gradient-to-r from-[#9AE6B4] to-[#5DA9E9] bg-clip-text text-transparent">
                  Kuyen
                </h3>
                <p className="text-[#9AE6B4] text-sm font-medium">
                  Blanquería Premium
                </p>
              </div>
            </div>
            
            <p className="text-[#9AE6B4] mb-4 sm:mb-6 opacity-90 leading-relaxed text-sm sm:text-base">
              Tu blanquería de confianza. Productos de calidad premium para hacer de tu hogar 
              un lugar más cómodo, hermoso y acogedor. Más de 500 productos disponibles.
            </p>
            
            {/* Redes sociales optimizadas */}
            <div className="flex space-x-3 sm:space-x-4">
              <a href="https://www.facebook.com/blanquearia.kuyen" target="_blank" rel="noopener noreferrer" className="group relative p-2.5 sm:p-3 bg-[#5DA9E9]/10 rounded-full hover:bg-[#5DA9E9]/20 transition-all duration-300 transform hover:scale-110">
                <svg className="w-5 h-5 text-[#1877F3] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.104C23.405 24 24 23.408 24 22.674V1.326C24 .592 23.405 0 22.675 0"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group relative p-2.5 sm:p-3 bg-[#5DA9E9]/10 rounded-full hover:bg-[#5DA9E9]/20 transition-all duration-300 transform hover:scale-110">
                <svg className="w-5 h-5 text-[#E4405F] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.5 5.5 0 1 1-5.5 5.5a5.5 5.5 0 0 1 5.5-5.5zm0 1.5a4 4 0 1 0 4 4a4 4 0 0 0-4-4zm5.25.75a1.25 1.25 0 1 1-1.25 1.25a1.25 1.25 0 0 1 1.25-1.25z"/>
                </svg>
              </a>
              <a href="https://wa.me/2804325023" target="_blank" rel="noopener noreferrer" className="group relative p-3 bg-[#25D366]/20 rounded-full hover:bg-[#25D366]/30 transition-all duration-300 transform hover:scale-110">
                <svg className="w-5 h-5 text-[#25D366] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.624 1.934 6.6L4 29l7.6-1.934A12.96 12.96 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.657 0-3.243-.336-4.7-.98l-.34-.15-4.52.98.98-4.52-.15-.34A9.96 9.96 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.2-7.6c-.28-.14-1.66-.82-1.92-.9-.26-.09-.45-.14-.64.14-.19.28-.74.93-.91 1.12-.17.19-.32.2-.59.07-.28-.14-1.18-.41-2.24-1.34-.83-.74-1.39-1.65-1.55-1.92-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.19-.28.28-.47.09-.19.05-.35-.03-.49-.08-.14-.7-1.7-.96-2.32-.25-.61-.5-.53-.69-.54-.18-.01-.38-.01-.59-.01-.2 0-.53.08-.81.39-.28.31-1.07 1.08-1.07 2.64 0 1.56 1.14 3.07 1.3 3.29.16.22 2.24 3.43 5.43 4.81.76.33 1.36.53 1.83.68.77.25 1.47.21 2.02.13.62-.09 1.91-.77 2.18-1.52.27-.75.27-1.39.19-1.52-.08-.13-.28-.21-.59-.37z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#9AE6B4] flex items-center gap-2">
              <span className="w-2 h-2 bg-[#9AE6B4] rounded-full"></span>
              Enlaces rápidos
            </h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-white opacity-90 hover:text-[#9AE6B4] hover:opacity-100 transition-all duration-200 flex items-center group">
                <span className="w-1 h-1 bg-[#5DA9E9] rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                Inicio
              </a></li>
              <li><a href="/productos" className="text-white opacity-90 hover:text-[#9AE6B4] hover:opacity-100 transition-all duration-200 flex items-center group">
                <span className="w-1 h-1 bg-[#5DA9E9] rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                Productos
              </a></li>
              <li><a href="/nosotros" className="text-white opacity-90 hover:text-[#9AE6B4] hover:opacity-100 transition-all duration-200 flex items-center group">
                <span className="w-1 h-1 bg-[#5DA9E9] rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                Nosotros
              </a></li>
              <li><a href="/contacto" className="text-white opacity-90 hover:text-[#9AE6B4] hover:opacity-100 transition-all duration-200 flex items-center group">
                <span className="w-1 h-1 bg-[#5DA9E9] rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                Contacto
              </a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#9AE6B4] flex items-center gap-2">
              <span className="w-2 h-2 bg-[#9AE6B4] rounded-full"></span>
              Contacto
            </h4>
            <ul className="space-y-3 text-white opacity-90 bg-gradient-to-br from-[#5DA9E9]/10 via-[#9AE6B4]/10 to-[#2B4C7E]/10 rounded-xl p-4 shadow-lg border border-[#5DA9E9]/20">
              <li className="flex items-start group">
                <span className="text-[#9AE6B4] mr-3 mt-1 group-hover:scale-110 transition-transform">📍</span>
                <div>
                  <a
                    href="https://www.google.com/maps/search/Aaron+Jenkins+1529+Trelew+Chubut"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group-hover:text-[#9AE6B4] transition-colors font-semibold underline hover:opacity-80"
                  >
                    Aaron Jenkins 1529, Trelew, Chubut
                  </a>
                  <span className="block text-xs text-[#9AE6B4]/80">Showroom Principal</span>
                </div>
              </li>
              <li className="flex items-start group">
                <span className="text-[#9AE6B4] mr-3 mt-1 group-hover:scale-110 transition-transform">🛒</span>
                <div>
                  <a
                    href="https://www.google.com/maps?q=-43.241201,-65.315248"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group-hover:text-[#9AE6B4] transition-colors font-semibold underline hover:opacity-80"
                  >
                    Feria Barrio San Martín
                  </a>
                  <span className="block text-xs text-[#9AE6B4]/80">Fines de semana - Coordenadas: -43.241201, -65.315248</span>
                </div>
              </li>
              <li className="flex items-start group">
                <span className="text-[#9AE6B4] mr-3 mt-1 group-hover:scale-110 transition-transform">📞</span>
                <div>
                  <a href="tel:+542804325023" className="group-hover:text-[#9AE6B4] transition-colors">
                    (2804) 32-5023
                  </a>
                </div>
              </li>
              <li className="flex items-start group">
                <span className="text-[#9AE6B4] mr-3 mt-1 group-hover:scale-110 transition-transform">✉️</span>
                <div>
                  <a href="mailto:info@kuyen.com" className="group-hover:text-[#9AE6B4] transition-colors">
                    info@kuyen.com
                  </a>
                </div>
              </li>
              <li className="flex items-start group">
                <span className="text-[#9AE6B4] mr-3 mt-1 group-hover:scale-110 transition-transform">🕐</span>
                <div>
                  <span className="group-hover:text-[#9AE6B4] transition-colors">Lun - Sáb: 9:00 - 18:00</span>
                </div>
              </li>
            </ul>

            
          </div>
        </div>

        <div className="border-t border-[#5DA9E9] border-opacity-30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white opacity-80 text-center md:text-left">
              © 2024 Kuyen Blanquería. Todos los derechos reservados.
              <div className="mt-2 text-xs text-white/80 flex items-center justify-center gap-2">
                Desarrollado con <span className="text-red-400">♥</span> por
                <a href="https://devcraftpablo.online/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#9AE6B4] ml-1">Pablo Proboste</a>
              </div>
            </p>
            <div className="flex items-center gap-6 text-sm text-white opacity-80">
              <a href="/privacy" className="hover:text-[#9AE6B4] transition-colors">Privacidad</a>
              <a href="/terms" className="hover:text-[#9AE6B4] transition-colors">Términos</a>
              <a href="/cookies" className="hover:text-[#9AE6B4] transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
