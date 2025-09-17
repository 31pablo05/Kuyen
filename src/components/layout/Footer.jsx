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
                <svg className="w-4 sm:w-5 h-4 sm:h-5 text-[#9AE6B4] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.104C23.405 24 24 23.408 24 22.674V1.326C24 .592 23.405 0 22.675 0"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group relative p-2.5 sm:p-3 bg-[#5DA9E9]/10 rounded-full hover:bg-[#5DA9E9]/20 transition-all duration-300 transform hover:scale-110">
                <svg className="w-4 sm:w-5 h-4 sm:h-5 text-[#9AE6B4] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.094 12 2.094zm0-2.163C8.741 0 8.332.012 7.052.07 5.782.127 4.515.399 3.54 1.374c-.974.974-1.246 2.241-1.308 3.608C2.175 7.353 2.163 7.733 2.163 12s.012 4.647.07 5.918c.062 1.366.334 2.633 1.308 3.608.974.974 2.241 1.246 3.608 1.308 1.266.058 1.646.069 4.85.069s3.584-.012 4.85-.07c1.366-.062 2.633-.334 3.608-1.308.974-.974 1.246-2.241 1.308-3.608.058-1.271.07-1.651.07-5.918s-.012-4.647-.07-5.918c-.062-1.366-.334-2.633-1.308-3.608-.974-.974-2.241-1.246-3.608-1.308C15.647.012 15.267 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
              <a href="https://wa.me/2804325023" target="_blank" rel="noopener noreferrer" className="group relative p-3 bg-[#25D366]/20 rounded-full hover:bg-[#25D366]/30 transition-all duration-300 transform hover:scale-110">
                <svg className="w-5 h-5 text-[#25D366] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
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
            <ul className="space-y-3 text-white opacity-90">
              <li className="flex items-start group">
                <span className="text-[#9AE6B4] mr-3 mt-1 group-hover:scale-110 transition-transform">📍</span>
                <div>
                  <span className="group-hover:text-[#9AE6B4] transition-colors">Av. Principal 123, Ciudad</span>
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
