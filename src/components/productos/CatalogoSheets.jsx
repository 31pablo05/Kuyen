import React, { useContext } from 'react';
import useGoogleSheets from '../../hooks/useGoogleSheets';
import CarritoContext from '../../context/CarritoContext';
import { GOOGLE_SHEETS_CONFIG } from '../../config/googleSheets.js';

/**
 * Componente Catálogo conectado a Google Sheets
 * Configuración en: src/config/googleSheets.js
 */
const CatalogoSheets = () => {
  const { data: productos, loading, error, refetch } = useGoogleSheets();
  const { agregarAlCarrito } = useContext(CarritoContext);

  // Función para convertir enlaces de Google Drive al formato directo
  const convertGoogleDriveUrl = (url) => {
    if (!url) return '/assets/images/productosKuyen/default.jpg';
    
    // Si ya es un enlace directo, devolverlo tal como está
    if (url.includes('drive.google.com/uc?')) {
      return url;
    }
    
    // Convertir enlace de Drive al formato directo
    const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
    if (fileIdMatch) {
      return `https://drive.google.com/uc?export=view&id=${fileIdMatch[1]}`;
    }
    
    // Si no es un enlace de Drive, devolverlo tal como está
    return url || '/assets/images/productosKuyen/default.jpg';
  };

  const formatearPrecio = (precio) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(precio);
  };

  const handleAgregarCarrito = (producto) => {
    if (producto.stock > 0) {
      agregarAlCarrito({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        imagen: producto.imagen || '/assets/images/productosKuyen/default.jpg',
        cantidad: 1,
        stock: producto.stock
      });
    }
  };

  // Estado de carga
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-20 w-20 border-4 border-[#5DA9E9]/30 border-t-[#5DA9E9] mx-auto mb-6"></div>
            <div className="absolute inset-0 rounded-full h-20 w-20 border-4 border-[#9AE6B4]/20 animate-pulse mx-auto"></div>
          </div>
          <h2 className="text-3xl font-bold text-[#2B4C7E] mb-3">Cargando Productos</h2>
          <p className="text-gray-600 text-lg">Estamos preparando todo para ti...</p>
          <div className="mt-4 flex justify-center space-x-1">
            <div className="w-2 h-2 bg-[#5DA9E9] rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-[#5DA9E9] rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 bg-[#5DA9E9] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>
      </div>
    );
  }

  // Estado de error
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center">
        <div className="bg-white rounded-3xl p-10 shadow-2xl max-w-lg text-center border border-red-100">
          <div className="text-red-500 text-6xl mb-6">😕</div>
          <h2 className="text-3xl font-bold text-red-600 mb-4">¡Oops! Algo salió mal</h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            No pudimos cargar los productos en este momento. 
            Por favor, inténtalo nuevamente.
          </p>
          <button
            onClick={refetch}
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            🔄 Intentar de nuevo
          </button>
        </div>
      </div>
    );
  }

  // Si no hay productos
  if (!productos || productos.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="bg-white rounded-3xl p-10 shadow-2xl max-w-lg text-center border border-gray-100">
          <div className="text-gray-400 text-6xl mb-6">�️</div>
          <h2 className="text-3xl font-bold text-[#2B4C7E] mb-4">Próximamente</h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Estamos preparando productos increíbles para ti. 
            ¡Vuelve pronto para descubrir nuestras novedades!
          </p>
          <button
            onClick={refetch}
            className="bg-gradient-to-r from-[#5DA9E9] to-[#2B4C7E] hover:from-[#4A90E2] hover:to-[#1A365D] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            🔄 Actualizar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-t-3xl shadow-2xl relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header mejorado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#5DA9E9]/10 to-[#9AE6B4]/10 px-8 py-3 rounded-full mb-6 border border-[#5DA9E9]/20">
            <div className="w-3 h-3 bg-[#5DA9E9] rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-[#2B4C7E] tracking-wider uppercase">
              Productos Destacados
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#2B4C7E] via-[#5DA9E9] to-[#2B4C7E] bg-clip-text text-transparent">
              Encuentra lo que Buscas
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Cada producto está cuidadosamente seleccionado para brindarte la mejor calidad y diseño para tu hogar.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md border border-gray-100">
              <span className="text-sm font-semibold text-[#2B4C7E] flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                {productos.length} productos disponibles
              </span>
            </div>
            <button
              onClick={refetch}
              className="bg-white/80 backdrop-blur-sm hover:bg-white text-[#2B4C7E] px-6 py-3 rounded-full transition-all duration-300 border border-gray-100 hover:shadow-md group"
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Actualizar
              </span>
            </button>
          </div>
        </div>

        {/* Grid de productos rediseñado */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {productos.map((producto) => (
            <div
              key={producto.id}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#5DA9E9]/30 transform hover:-translate-y-3 hover:rotate-1"
            >
              {/* Imagen mejorada */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={convertGoogleDriveUrl(producto.imagen)}
                  alt={producto.nombre}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = '/assets/images/productosKuyen/default.jpg';
                  }}
                  loading="lazy"
                />
                
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Badge de stock mejorado */}
                <div className="absolute top-4 right-4">
                  {producto.stock > 0 ? (
                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm">
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        Stock: {producto.stock}
                      </span>
                    </div>
                  ) : (
                    <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg animate-pulse">
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                        </svg>
                        AGOTADO
                      </span>
                    </div>
                  )}
                </div>

                {/* Badge de categoría */}
                {producto.categoria && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-[#2B4C7E] px-3 py-1 rounded-full text-xs font-semibold border border-gray-200">
                      {producto.categoria}
                    </span>
                  </div>
                )}
              </div>

              {/* Contenido mejorado */}
              <div className="p-6">
                {/* Título */}
                <h3 className="text-xl font-bold text-[#2B4C7E] mb-3 group-hover:text-[#5DA9E9] transition-colors line-clamp-2 leading-tight">
                  {producto.nombre}
                </h3>

                {/* Descripción */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  {producto.descripcion || 'Producto de excelente calidad disponible en Kuyen Blanquería.'}
                </p>

                {/* Precio destacado */}
                <div className="mb-6">
                  <span className="text-3xl font-bold bg-gradient-to-r from-[#5DA9E9] to-[#2B4C7E] bg-clip-text text-transparent">
                    {formatearPrecio(producto.precio)}
                  </span>
                </div>

                {/* Botón de compra mejorado */}
                {producto.stock > 0 ? (
                  <button
                    onClick={() => handleAgregarCarrito(producto)}
                    className="w-full bg-gradient-to-r from-[#5DA9E9] to-[#2B4C7E] hover:from-[#4A90E2] hover:to-[#1A365D] text-white px-6 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                      Agregar al Carrito
                    </span>
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                ) : (
                  <div className="w-full bg-gradient-to-r from-red-100 to-red-200 text-red-700 px-6 py-4 rounded-2xl font-semibold text-center border-2 border-red-200">
                    <span className="flex items-center justify-center gap-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Producto Agotado
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer informativo rediseñado */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#5DA9E9]/5 to-[#9AE6B4]/5 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-4xl mb-2">✨</div>
                <h3 className="text-lg font-bold text-[#2B4C7E] mb-1">Calidad Premium</h3>
                <p className="text-sm text-gray-600">Productos cuidadosamente seleccionados</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🚚</div>
                <h3 className="text-lg font-bold text-[#2B4C7E] mb-1">Envío Rápido</h3>
                <p className="text-sm text-gray-600">Recibí tu pedido en tiempo récord</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">💬</div>
                <h3 className="text-lg font-bold text-[#2B4C7E] mb-1">Atención Personalizada</h3>
                <p className="text-sm text-gray-600">Estamos aquí para ayudarte</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogoSheets;