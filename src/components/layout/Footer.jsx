import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle, ArrowRight, Store, Heart, Sparkles } from 'lucide-react';

function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-br from-[#2B4C7E] via-[#1A365D] to-[#2B4C7E] text-white mt-20 overflow-hidden">
      {/* Patrón de fondo decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      {/* Gradientes animados de fondo con los colores correctos */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#5DA9E9]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#9AE6B4]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#5DA9E9]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Partículas decorativas flotantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/5 rounded-full"
            style={{
              width: `${Math.random() * 40 + 10}px`,
              height: `${Math.random() * 40 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 15}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Sección superior del footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Logo y descripción mejorados */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#5DA9E9]/30 to-[#9AE6B4]/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <img 
                  src="/assets/logo/5.png" 
                  alt="Kuyen Logo" 
                  className="relative h-16 w-auto transition-all duration-300 group-hover:scale-110 drop-shadow-2xl"
                />
              </div>
              <div>
                <h3 className="text-3xl font-black mb-1 bg-gradient-to-r from-[#9AE6B4] via-[#5DA9E9] to-[#9AE6B4] bg-clip-text text-transparent">
                  Kuyen
                </h3>
                <p className="text-[#9AE6B4] text-sm font-semibold tracking-wide flex items-center gap-2">
                  Blanquería Premium
                  <Sparkles className="w-3 h-3 text-[#9AE6B4] animate-pulse" />
                </p>
              </div>
            </div>
            
            <p className="text-blue-100/80 leading-relaxed text-base max-w-md">
              Tu blanquería de confianza. Productos de calidad premium para hacer de tu hogar 
              un lugar más cómodo, hermoso y acogedor.
            </p>

            {/* Estadísticas rápidas */}
            <div className="flex gap-4 flex-wrap">
              <div className="bg-white/5 backdrop-blur-sm border border-[#5DA9E9]/20 rounded-xl px-4 py-2 hover:bg-white/10 hover:border-[#5DA9E9]/40 transition-all">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-xs text-[#9AE6B4]">Productos</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-[#5DA9E9]/20 rounded-xl px-4 py-2 hover:bg-white/10 hover:border-[#5DA9E9]/40 transition-all">
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-xs text-[#9AE6B4]">Años</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-[#5DA9E9]/20 rounded-xl px-4 py-2 hover:bg-white/10 hover:border-[#5DA9E9]/40 transition-all">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-xs text-[#9AE6B4]">Satisfacción</div>
              </div>
            </div>
            
            {/* Redes sociales modernas con colores correctos */}
            <div>
              <p className="text-sm text-[#9AE6B4] mb-3 font-medium flex items-center gap-2">
                Seguinos en redes
                <div className="h-px flex-1 bg-gradient-to-r from-[#5DA9E9]/50 to-transparent"></div>
              </p>
              <div className="flex gap-3">
                <a 
                  href="https://www.facebook.com/blanquearia.kuyen" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-[#5DA9E9] rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative w-12 h-12 bg-gradient-to-br from-[#5DA9E9] to-[#2B4C7E] hover:from-[#4A90E2] hover:to-[#1A365D] rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-xl">
                    <Facebook className="w-5 h-5 text-white" fill="white" />
                  </div>
                </a>
                
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-[#5DA9E9] rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative w-12 h-12 bg-gradient-to-br from-[#5DA9E9] to-[#9AE6B4] hover:from-[#4A90E2] hover:to-[#68D391] rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-xl">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                </a>
                
                <a 
                  href="https://wa.me/2804325023" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-[#9AE6B4] rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative w-12 h-12 bg-gradient-to-br from-[#9AE6B4] to-[#68D391] hover:from-[#68D391] hover:to-[#48BB78] rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-xl">
                    <MessageCircle className="w-5 h-5 text-[#2B4C7E]" fill="currentColor" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white flex items-center gap-2 mb-6">
              <div className="w-1 h-6 bg-gradient-to-b from-[#9AE6B4] to-[#5DA9E9] rounded-full"></div>
              Enlaces Rápidos
            </h4>
            <nav className="space-y-3">
              {[
                { name: 'Inicio', href: '/' },
                { name: 'Productos', href: '/productos' },
                { name: 'Nosotros', href: '/nosotros' },
                { name: 'Contacto', href: '/contacto' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-3 text-blue-100/80 hover:text-[#9AE6B4] transition-all duration-300"
                >
                  <div className="w-6 h-6 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-[#5DA9E9]/20 transition-all">
                    <ArrowRight className="w-3 h-3 text-[#9AE6B4] group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <span className="font-medium">{link.name}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Información de contacto */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white flex items-center gap-2 mb-6">
              <div className="w-1 h-6 bg-gradient-to-b from-[#9AE6B4] to-[#5DA9E9] rounded-full"></div>
              Contacto
            </h4>
            <div className="space-y-4">
              {/* Ubicación showroom */}
              <a
                href="https://www.google.com/maps/search/Aaron+Jenkins+1529+Trelew+Chubut"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-[#9AE6B4]/30 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[#9AE6B4]/20 to-[#68D391]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5 text-[#9AE6B4]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium text-sm group-hover:text-[#9AE6B4] transition-colors">
                    Aaron Jenkins 1529
                  </p>
                  <p className="text-blue-200/60 text-xs">Trelew, Chubut - Showroom Principal</p>
                </div>
              </a>

              {/* Feria */}
              <a
                href="https://www.google.com/maps?q=-43.241201,-65.315248"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-[#5DA9E9]/30 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[#5DA9E9]/20 to-[#4A90E2]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Store className="w-5 h-5 text-[#5DA9E9]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium text-sm group-hover:text-[#5DA9E9] transition-colors">
                    Feria Barrio San Martín
                  </p>
                  <p className="text-blue-200/60 text-xs">Fines de semana</p>
                </div>
              </a>

              {/* Teléfono */}
              <a
                href="tel:+542804325023"
                className="group flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-[#5DA9E9]/30 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[#5DA9E9]/20 to-[#2B4C7E]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-[#5DA9E9]" />
                </div>
                <span className="text-white font-medium text-sm group-hover:text-[#5DA9E9] transition-colors">
                  (2804) 32-5023
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@kuyen.com"
                className="group flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-[#9AE6B4]/30 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[#9AE6B4]/20 to-[#5DA9E9]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-[#9AE6B4]" />
                </div>
                <span className="text-white font-medium text-sm group-hover:text-[#9AE6B4] transition-colors">
                  info@kuyen.com
                </span>
              </a>

              {/* Horarios */}
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#9AE6B4]/10 to-[#5DA9E9]/10 backdrop-blur-sm rounded-xl border border-[#9AE6B4]/20">
                <div className="w-10 h-10 bg-gradient-to-br from-[#9AE6B4]/20 to-[#68D391]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#9AE6B4]" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Lun - Sáb</p>
                  <p className="text-[#9AE6B4] text-xs font-semibold">9:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria elegante */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-[#5DA9E9]/50 to-transparent mb-8"></div>

        {/* Sección inferior del footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-blue-100/60 text-sm mb-2">
              © 2024 Kuyen Blanquería. Todos los derechos reservados.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-blue-200/60">
              <span>Desarrollado con</span>
              <Heart className="w-3 h-3 text-[#9AE6B4] fill-[#9AE6B4] animate-pulse" />
              <span>por</span>
              <a 
                href="https://devcraftpablo.online/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#9AE6B4] hover:text-[#68D391] font-semibold underline decoration-dotted underline-offset-2 transition-colors"
              >
                Pablo Proboste
              </a>
            </div>
          </div>

          {/* Links legales */}
          <div className="flex items-center gap-6">
            {['Privacidad', 'Términos', 'Cookies'].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-sm text-blue-100/60 hover:text-[#9AE6B4] transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9AE6B4] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Animación CSS personalizada */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-15px) translateX(5px);
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;