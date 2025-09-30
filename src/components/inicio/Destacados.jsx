import { useState, useEffect } from 'react';

function Destacados() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === productosDestacados.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-400">★</span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-yellow-400">☆</span>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-300">☆</span>
      );
    }

    return stars;
  };

  const productosDestacados = [
    {
      id: 1,
      nombre: 'Toallón Premium',
      descripcion: 'Suavidad y absorción superior. Ideal para el baño.',
      precio: 2500,
      precioAnterior: 2941,
      imagen: '/assets/images/productosKuyen/product31.jpg',
      categoria: 'Toallones',
      descuento: 15,
      rating: 4.8,
      ventas: 127,
      caracteristicas: ['100% Algodón', 'Extra Absorbente', 'Secado Rápido']
    },
    {
      id: 2,
      nombre: 'Sábanas 100% Algodón',
      descripcion: 'Descanso y frescura para tus noches.',
      precio: 4200,
      precioAnterior: 5250,
      imagen: '/assets/images/productosKuyen/product35.jpg',
      categoria: 'Sábanas',
      descuento: 20,
      rating: 4.9,
      ventas: 89,
      caracteristicas: ['1200 Hilos', 'Hipoalergénico', 'Frescura']
    },
    {
      id: 3,
      nombre: 'Acolchado Ultra Liviano',
      descripcion: 'Abrigo sin peso, diseño moderno.',
      precio: 8500,
      precioAnterior: 9444,
      imagen: '/assets/images/productosKuyen/product80.jpg',
      categoria: 'Acolchados',
      descuento: 10,
      rating: 4.7,
      ventas: 64,
      caracteristicas: ['Ultra Liviano', 'Termorregulador', 'Anti-ácaros']
    },
    {
      id: 4,
      nombre: 'Alfombra Decorativa',
      descripcion: 'Estilo y confort para tus ambientes.',
      precio: 3800,
      precioAnterior: 5067,
      imagen: '/assets/images/productosKuyen/product37.jpg',
      categoria: 'Alfombras',
      descuento: 25,
      rating: 4.6,
      ventas: 156,
      caracteristicas: ['Antideslizante', 'Fácil Limpieza', 'Diseño Moderno']
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
      
      {/* Fondo animado similar al Hero */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(93, 169, 233, 0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
        
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
        
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-teal-500/20 backdrop-blur-xl px-6 py-3 rounded-full shadow-2xl mb-6 border border-cyan-400/30">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-white tracking-wide">Lo Mejor de Kuyen</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent animate-gradient-x">
              Productos Destacados
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Descubrí nuestra selección premium de productos más vendidos y mejor valorados
          </p>
        </div>

        {/* Carrusel de productos */}
        <div className="flex flex-col items-center justify-center w-full">
          <div className="relative w-full max-w-5xl mx-auto">
            <div className="relative min-h-[600px] sm:min-h-[650px] lg:min-h-[700px]">
              {productosDestacados.map((producto, idx) => (
                <div
                  key={producto.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    idx === activeIndex 
                      ? 'opacity-100 scale-100 z-10' 
                      : 'opacity-0 scale-95 z-0 pointer-events-none'
                  }`}
                  onMouseEnter={() => setHoveredProduct(producto.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <div className="group bg-gradient-to-br from-slate-800/90 to-blue-900/90 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 overflow-hidden border border-white/10 transform hover:scale-[1.02]">
                    
                    <div className="flex flex-col lg:flex-row">
                      {/* Imagen del producto */}
                      <div className="relative lg:w-1/2 overflow-hidden">
                        <img
                          src={producto.imagen}
                          alt={producto.nombre}
                          className="w-full h-64 sm:h-80 lg:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        
                        {/* Badges */}
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                          {producto.categoria}
                        </div>
                        
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                          -{producto.descuento}% OFF
                        </div>

                        {/* Rating flotante */}
                        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-xl">
                          <div className="flex items-center gap-2">
                            {renderStars(producto.rating)}
                            <span className="text-sm font-bold text-gray-800">
                              {producto.rating}
                            </span>
                            <span className="text-xs text-gray-500">
                              ({producto.ventas})
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Contenido del producto */}
                      <div className="lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                        {/* Info principal */}
                        <div>
                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 group-hover:text-cyan-400 transition-colors">
                            {producto.nombre}
                          </h3>

                          <p className="text-slate-300 text-base sm:text-lg mb-6 leading-relaxed">
                            {producto.descripcion}
                          </p>

                          {/* Características */}
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">
                              Características destacadas
                            </h4>
                            <div className="grid gap-3">
                              {producto.caracteristicas.map((caracteristica, index) => (
                                <div key={index} className="flex items-center gap-3 group/item">
                                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full group-hover/item:scale-150 transition-transform" />
                                  <span className="text-sm sm:text-base text-slate-300 font-medium">
                                    {caracteristica}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Precio */}
                          <div className="mb-6">
                            <div className="flex items-baseline gap-3 mb-2">
                              <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                ${producto.precio.toLocaleString()}
                              </span>
                              <span className="text-lg text-slate-500 line-through">
                                ${producto.precioAnterior.toLocaleString()}
                              </span>
                            </div>
                            <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              Ahorrás ${(producto.precioAnterior - producto.precio).toLocaleString()}
                            </div>
                          </div>
                        </div>

                        {/* Botones de acción */}
                        <div className="flex flex-col sm:flex-row gap-3">
                          <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-cyan-500/50 flex items-center justify-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <span>Agregar al Carrito</span>
                          </button>
                          
                          <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 border border-white/20 hover:border-cyan-400/50 flex items-center justify-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            Ver Detalles
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Controles del carrusel */}
            <div className="flex justify-center items-center gap-6 mt-8 relative z-20">
              <button
                className="bg-white/10 backdrop-blur-xl text-white rounded-full p-3 shadow-xl hover:bg-white/20 hover:shadow-2xl transition-all duration-300 transform hover:scale-110 border border-white/20 hover:border-cyan-400/50"
                onClick={() => setActiveIndex((prev) => (prev === 0 ? productosDestacados.length - 1 : prev - 1))}
                aria-label="Anterior"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex gap-3">
                {productosDestacados.map((_, idx) => (
                  <button
                    key={idx}
                    className={`transition-all duration-300 rounded-full ${
                      idx === activeIndex 
                        ? 'w-10 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg' 
                        : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                    }`}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Ir a producto ${idx + 1}`}
                  />
                ))}
              </div>
              
              <button
                className="bg-white/10 backdrop-blur-xl text-white rounded-full p-3 shadow-xl hover:bg-white/20 hover:shadow-2xl transition-all duration-300 transform hover:scale-110 border border-white/20 hover:border-cyan-400/50"
                onClick={() => setActiveIndex((prev) => (prev === productosDestacados.length - 1 ? 0 : prev + 1))}
                aria-label="Siguiente"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="text-center mt-6">
              <span className="text-white/60 text-sm font-medium">
                {activeIndex + 1} de {productosDestacados.length}
              </span>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className={`text-center mt-16 sm:mt-20 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4">
              ¿Te gustaron nuestros destacados?
            </h3>
            <p className="text-slate-300 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
              Descubre más de <span className="text-cyan-400 font-bold">500 productos premium</span> en nuestro catálogo completo
            </p>
            <a 
              href="/productos" 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-cyan-500/50"
            >
              <span>Ver Todos los Productos</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default Destacados;