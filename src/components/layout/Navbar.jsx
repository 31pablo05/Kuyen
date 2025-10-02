import { useState, useEffect } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    setIsLoaded(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  const navLinks = [
    { href: '/', label: 'Inicio', icon: '🏠' },
    { href: '/productos', label: 'Productos', icon: '🛍️' },
    { href: '/nosotros', label: 'Nosotros', icon: '👥' },
    { href: '/contacto', label: 'Contacto', icon: '📞' }
  ];

  return (
    <>
      <nav className={`w-full sticky top-0 z-50 transition-all duration-700 ease-out ${
        isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } ${
        scrolled 
          ? 'bg-gradient-to-r from-[#5DA9E9]/95 via-white/95 to-[#9AE6B4]/95 backdrop-blur-xl shadow-2xl border-b border-[#2B4C7E]/30' 
          : 'bg-gradient-to-r from-[#5DA9E9]/80 via-white/90 to-[#9AE6B4]/80 backdrop-blur-md shadow-xl border-b border-[#5DA9E9]/30'
      }`}>

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-2 h-2 bg-[#5DA9E9]/20 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-2 right-1/3 w-1 h-1 bg-[#9AE6B4]/30 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1 left-1/2 w-1.5 h-1.5 bg-[#2B4C7E]/15 rounded-full animate-ping" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 relative">
        <div className="flex flex-wrap justify-between items-center h-14 sm:h-16 md:h-20 min-h-[56px]">
          
          {/* Enhanced Logo - responsivo */}
          <div className="flex-shrink-0 min-w-[40px]">
            <a href="/" className="flex items-center gap-2 sm:gap-3 group">
              <div className="relative">
                {/* Multiple glow layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#5DA9E9]/40 to-[#2B4C7E]/40 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-150 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#9AE6B4]/30 to-[#5DA9E9]/30 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 scale-125"></div>
                <div className="relative bg-gradient-to-br from-[#5DA9E9]/20 to-[#9AE6B4]/20 backdrop-blur-sm p-1 rounded-xl border border-[#5DA9E9]/30 shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:border-[#5DA9E9]/60">
                  <img 
                    src="/assets/logo/logokuyen.svg" 
                    alt="Kuyen Logo" 
                    className="h-8 sm:h-12 md:h-14 w-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 filter group-hover:brightness-110"
                    style={{ boxShadow: 'none', borderRadius: '0', background: 'none', border: 'none' }}
                  />
                </div>
              </div>
              <div className="hidden xs:block">
                <div className="flex flex-col">
                  <span className="text-base sm:text-lg md:text-2xl font-black bg-gradient-to-r from-[#5DA9E9] via-[#2B4C7E] to-[#5DA9E9] bg-clip-text text-transparent group-hover:from-[#4A90E2] group-hover:to-[#1A365D] transition-all duration-500 group-hover:scale-105">
                    Kuyen
                  </span>
                  <div className="flex items-center gap-1 -mt-1">
                    <span className="text-xs text-[#2B4C7E]/70 font-medium hidden sm:block group-hover:text-[#2B4C7E] transition-colors duration-300">Blanquería Premium</span>
                    <div className="flex gap-0.5">
                      <span className="w-1 h-1 bg-[#5DA9E9] rounded-full animate-pulse"></span>
                      <span className="w-1 h-1 bg-[#9AE6B4] rounded-full animate-pulse delay-300"></span>
                      <span className="w-1 h-1 bg-[#2B4C7E] rounded-full animate-pulse delay-600"></span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          
          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link, index) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className={`relative px-3 lg:px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-500 group overflow-hidden ${
                    activeLink === link.href 
                      ? 'text-white bg-gradient-to-r from-[#2B4C7E] to-[#5DA9E9] shadow-xl scale-105' 
                      : 'text-[#2B4C7E] hover:text-white hover:bg-gradient-to-r hover:from-[#5DA9E9]/80 hover:to-[#2B4C7E]/80 backdrop-blur-sm hover:scale-105 hover:shadow-lg'
                  }`}
                  onClick={() => setActiveLink(link.href)}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: isLoaded ? `slideInDown 0.6s ease-out forwards` : ''
                  }}
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <span className="flex items-center gap-2 relative z-10">
                    <span className="text-sm group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                      {link.icon}
                    </span>
                    <span className="hidden lg:block">{link.label}</span>
                    <span className="lg:hidden">{link.label.substring(0, 3)}</span>
                  </span>
                  
                  {/* Enhanced bottom border animation */}
                  {activeLink !== link.href && (
                    <>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#5DA9E9] to-[#2B4C7E] group-hover:w-full transition-all duration-500"></span>
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#9AE6B4] to-[#5DA9E9] group-hover:w-full transition-all duration-700 delay-100"></span>
                    </>
                  )}

                  {/* Floating animation for active link */}
                  {activeLink === link.href && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#5DA9E9]/20 to-[#2B4C7E]/20 rounded-xl animate-pulse"></div>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced CTA Button */}
          <div className="hidden lg:flex items-center">
            <a 
              href="/productos" 
              className="relative inline-flex items-center gap-2 bg-gradient-to-r from-[#5DA9E9] via-[#2B4C7E] to-[#5DA9E9] hover:from-[#4A90E2] hover:via-[#1A365D] hover:to-[#4A90E2] text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full font-bold text-sm transition-all duration-500 transform hover:scale-110 hover:-rotate-1 shadow-xl hover:shadow-2xl overflow-hidden group"
              style={{
                animation: isLoaded ? `slideInRight 0.8s ease-out 0.5s both` : ''
              }}
            >
              {/* Multiple animated backgrounds */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-[#5DA9E9] via-[#9AE6B4] to-[#2B4C7E] rounded-full opacity-0 group-hover:opacity-30 blur animate-pulse"></div>
              
              <svg className="w-4 h-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="relative z-10">Comprar</span>
              
              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-full opacity-0 group-active:opacity-100 group-active:scale-110 bg-white/20 transition-all duration-200"></div>
            </a>
          </div>

          {/* Enhanced Mobile menu button - alineado */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative flex items-center justify-center p-2 text-[#2B4C7E] hover:text-white hover:bg-gradient-to-r hover:from-[#5DA9E9] hover:to-[#2B4C7E] rounded-lg transition-all duration-300 group hover:scale-110 hover:rotate-3"
              aria-label="Menú"
              style={{ minWidth: '44px', minHeight: '44px' }}
            >
              {/* Button glow effect - ahora envuelve correctamente las barras */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 bg-gradient-to-r from-[#5DA9E9]/20 to-[#2B4C7E]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur"></div>
              </div>
              <div className="relative w-6 h-6 flex items-center justify-center">
                <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-500 ${isMenuOpen ? 'rotate-45 top-3 scale-110' : 'top-1 group-hover:w-7'}`}></span>
                <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 top-3 ${isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100 group-hover:w-5'}`}></span>
                <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-500 ${isMenuOpen ? '-rotate-45 top-3 scale-110' : 'top-5 group-hover:w-7'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile menu */}
        <div className={`md:hidden transition-all duration-700 ease-out ${
          isMenuOpen ? 'max-h-screen opacity-100 pb-4 sm:pb-6 scale-100' : 'max-h-0 opacity-0 pb-0 scale-95'
        } overflow-hidden transform-gpu`}>
          <div className="mt-3 sm:mt-4 bg-gradient-to-br from-[#5DA9E9]/10 via-white/95 to-[#9AE6B4]/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#5DA9E9]/30 overflow-hidden mx-1 relative">
            
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#5DA9E9]/10 to-transparent rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#9AE6B4]/10 to-transparent rounded-full blur-lg"></div>
            
            {/* Enhanced Mobile user section */}
            <div className="bg-gradient-to-r from-[#5DA9E9]/20 via-[#9AE6B4]/20 to-[#5DA9E9]/20 p-3 sm:p-4 border-b border-[#5DA9E9]/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full animate-pulse" style={{animationDuration: '3s'}}></div>
              
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-[#5DA9E9] to-[#2B4C7E] rounded-full flex items-center justify-center shadow-xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img src="/assets/logo/logokuyen.svg" alt="Logo Kuyen" className="w-7 sm:w-9 h-7 sm:h-9 object-contain animate-bounce" style={{animationDuration: '2s'}} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#2B4C7E] animate-pulse">¡Bienvenido a Kuyen!</div>
                  <div className="text-xs text-[#2B4C7E]/70">Descubre productos premium</div>
                </div>
              </div>
            </div>

            {/* Enhanced Mobile navigation links */}
            <div className="p-1 sm:p-2">
              {navLinks.map((link, index) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className={`flex items-center gap-3 px-3 sm:px-4 py-3 mx-1 sm:mx-2 my-1 rounded-xl transition-all duration-500 relative overflow-hidden group ${
                    activeLink === link.href 
                      ? 'bg-gradient-to-r from-[#2B4C7E] to-[#5DA9E9] text-white shadow-xl scale-105' 
                      : 'text-[#2B4C7E] hover:bg-gradient-to-r hover:from-[#5DA9E9]/20 hover:to-[#9AE6B4]/20 hover:text-[#2B4C7E] backdrop-blur-sm hover:scale-105'
                  }`}
                  onClick={() => {
                    setActiveLink(link.href);
                    setIsMenuOpen(false);
                  }}
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    animation: isMenuOpen ? `slideInLeft 0.5s ease-out forwards` : ''
                  }}
                >
                  {/* Hover background animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <span className={`text-lg transition-all duration-300 relative z-10 ${
                    activeLink === link.href ? 'scale-125 animate-pulse' : 'group-hover:scale-110 group-hover:rotate-12'
                  }`}>
                    {link.icon}
                  </span>
                  <span className="font-medium text-sm sm:text-base relative z-10">{link.label}</span>
                  
                  {activeLink === link.href && (
                    <span className="ml-auto animate-bounce relative z-10">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  )}
                </a>
              ))}
            </div>

            {/* Enhanced Mobile CTA Button */}
            <div className="p-3 sm:p-4 bg-gradient-to-r from-[#5DA9E9]/10 via-[#9AE6B4]/10 to-[#5DA9E9]/10 border-t border-[#5DA9E9]/30 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full animate-pulse" style={{animationDuration: '4s'}}></div>
              
              <a 
                href="/productos" 
                className="block w-full bg-gradient-to-r from-[#5DA9E9] via-[#2B4C7E] to-[#5DA9E9] text-white text-center px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-500 transform hover:scale-105 hover:-rotate-1 shadow-xl relative overflow-hidden group"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg className="w-4 sm:w-5 h-4 sm:h-5 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Comprar Ahora
                  <div className="ml-1 flex gap-1">
                    <span className="w-1 h-1 bg-white/60 rounded-full animate-bounce" style={{animationDelay: '0s'}}></span>
                    <span className="w-1 h-1 bg-white/60 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
                    <span className="w-1 h-1 bg-white/60 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></span>
                  </div>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add custom CSS animations */}
      {/* Animaciones CSS movidas a App.css */}
    </nav>
    </>
  );
}

export default Navbar;