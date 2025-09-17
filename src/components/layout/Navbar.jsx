import { useState, useEffect } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
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
      

      <nav className={`w-full sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-[#5DA9E9]/20' 
          : 'bg-white/90 backdrop-blur-md shadow-lg border-b border-[#F5F5F5]'
      }`}>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
          
          {/* Logo optimizado para móvil */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2 sm:gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#5DA9E9]/30 to-[#2B4C7E]/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150"></div>
                <div className="relative bg-gradient-to-br from-[#F8FAFC] to-white p-1.5 sm:p-2 rounded-xl border border-[#5DA9E9]/20 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <img 
                    src="/assets/logo/5.png" 
                    alt="Kuyen Logo" 
                    className="h-8 sm:h-10 md:h-12 w-auto transition-all duration-300 group-hover:scale-110 filter group-hover:brightness-110"
                  />
                </div>
              </div>
              <div className="hidden xs:block">
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl md:text-2xl font-black bg-gradient-to-r from-[#5DA9E9] via-[#2B4C7E] to-[#5DA9E9] bg-clip-text text-transparent group-hover:from-[#4A90E2] group-hover:to-[#1A365D] transition-all duration-300">
                    Kuyen
                  </span>
                  <div className="flex items-center gap-1 -mt-1">
                    <span className="text-xs text-[#2B4C7E]/70 font-medium hidden sm:block">Blanquería Premium</span>
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
          
          {/* Desktop Navigation optimizada */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className={`relative px-3 lg:px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 group ${
                    activeLink === link.href 
                      ? 'text-white bg-gradient-to-r from-[#5DA9E9] to-[#2B4C7E] shadow-lg' 
                      : 'text-[#2B4C7E] hover:text-[#5DA9E9] hover:bg-[#F8FAFC]'
                  }`}
                  onClick={() => setActiveLink(link.href)}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-sm group-hover:scale-110 transition-transform duration-200">
                      {link.icon}
                    </span>
                    <span className="hidden lg:block">{link.label}</span>
                    <span className="lg:hidden">{link.label.substring(0, 3)}</span>
                  </span>
                  {activeLink !== link.href && (
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#5DA9E9] to-[#2B4C7E] group-hover:w-full transition-all duration-300"></span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button optimizado */}
          <div className="hidden lg:flex items-center">
            <a 
              href="/productos" 
              className="relative inline-flex items-center gap-2 bg-gradient-to-r from-[#5DA9E9] via-[#2B4C7E] to-[#5DA9E9] hover:from-[#4A90E2] hover:via-[#1A365D] hover:to-[#4A90E2] text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full font-bold text-sm transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="relative z-10">Comprar</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
          </div>

          {/* Mobile menu button optimizado */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2 text-[#2B4C7E] hover:text-[#5DA9E9] hover:bg-[#F8FAFC] rounded-lg transition-all duration-300 group"
              aria-label="Menú"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
                <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 top-3 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu optimizado */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100 pb-4 sm:pb-6' : 'max-h-0 opacity-0 pb-0'
        } overflow-hidden`}>
          <div className="mt-3 sm:mt-4 bg-gradient-to-br from-white to-[#F8FAFC] rounded-2xl shadow-xl border border-[#5DA9E9]/20 overflow-hidden mx-1">
            
            {/* Mobile user section optimizada */}
            <div className="bg-gradient-to-r from-[#5DA9E9]/10 to-[#9AE6B4]/10 p-3 sm:p-4 border-b border-[#F5F5F5]">
              <div className="flex items-center gap-3">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-[#5DA9E9] to-[#2B4C7E] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg sm:text-xl font-bold">👤</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#2B4C7E]">¡Bienvenido a Kuyen!</div>
                  <div className="text-xs text-[#2B4C7E]/70">Descubre productos premium</div>
                </div>
              </div>
            </div>

            {/* Mobile navigation links optimizados */}
            <div className="p-1 sm:p-2">
              {navLinks.map((link, index) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className={`flex items-center gap-3 px-3 sm:px-4 py-3 mx-1 sm:mx-2 my-1 rounded-xl transition-all duration-300 ${
                    activeLink === link.href 
                      ? 'bg-gradient-to-r from-[#5DA9E9] to-[#2B4C7E] text-white shadow-lg' 
                      : 'text-[#2B4C7E] hover:bg-[#F8FAFC] hover:text-[#5DA9E9]'
                  }`}
                  onClick={() => {
                    setActiveLink(link.href);
                    setIsMenuOpen(false);
                  }}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className={`text-lg transition-transform duration-200 ${
                    activeLink === link.href ? 'scale-110' : ''
                  }`}>
                    {link.icon}
                  </span>
                  <span className="font-medium text-sm sm:text-base">{link.label}</span>
                  {activeLink === link.href && (
                    <span className="ml-auto">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  )}
                </a>
              ))}
            </div>

            {/* Mobile CTA Button optimizado */}
            <div className="p-3 sm:p-4 bg-gradient-to-r from-[#F8FAFC] to-white border-t border-[#F5F5F5]">
              <a 
                href="/productos" 
                className="block w-full bg-gradient-to-r from-[#5DA9E9] via-[#2B4C7E] to-[#5DA9E9] text-white text-center px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg relative overflow-hidden group"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Comprar Ahora
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
