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
      <div className="min-h-screen bg-gradient-to-br from-[#5DA9E9]/10 to-[#9AE6B4]/10 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#5DA9E9] mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-[#2B4C7E] mb-2">Cargando Catálogo</h2>
          <p className="text-gray-600">Conectando con inventario...</p>
        </div>
      </div>
    );
  }

  // Estado de error
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
        <div className="bg-white rounded-2xl p-8 shadow-xl max-w-md text-center">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error al Cargar</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={refetch}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  // Si no hay productos
  if (!productos || productos.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#5DA9E9]/10 to-[#9AE6B4]/10 flex items-center justify-center">
        <div className="bg-white rounded-2xl p-8 shadow-xl max-w-md text-center">
          <div className="text-gray-400 text-5xl mb-4">📦</div>
          <h2 className="text-2xl font-bold text-[#2B4C7E] mb-4">Catálogo Vacío</h2>
          <p className="text-gray-600 mb-6">No hay productos disponibles en este momento.</p>
          <button
            onClick={refetch}
            className="bg-[#5DA9E9] hover:bg-[#4A90E2] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Actualizar
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#5DA9E9]/10 to-[#9AE6B4]/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#5DA9E9]/10 px-6 py-2 rounded-full mb-4 border border-[#5DA9E9]/20">
            <span className="w-2 h-2 bg-[#5DA9E9] rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-[#2B4C7E]">Inventario en Tiempo Real</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-[#5DA9E9] via-[#2B4C7E] to-[#5DA9E9] bg-clip-text text-transparent">
              Nuestro Catálogo
            </span>
          </h1>
          
          <p className="text-lg text-[#2B4C7E]/70 max-w-2xl mx-auto mb-6">
            Productos actualizados directamente desde nuestro inventario. Stock y precios en tiempo real.
          </p>

          <div className="flex justify-center gap-4 mb-8">
            <div className="bg-white/80 px-4 py-2 rounded-full shadow-md">
              <span className="text-sm font-semibold text-[#2B4C7E]">
                {productos.length} productos disponibles
              </span>
            </div>
            <button
              onClick={refetch}
              className="bg-[#5DA9E9]/10 hover:bg-[#5DA9E9]/20 text-[#2B4C7E] px-4 py-2 rounded-full transition-colors border border-[#5DA9E9]/30"
            >
              🔄 Actualizar
            </button>
            {GOOGLE_SHEETS_CONFIG.ENABLE_AUTO_REFRESH && (
              <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">
                🔄 Auto-actualización activa
              </div>
            )}
          </div>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {productos.map((producto) => (
            <div
              key={producto.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#5DA9E9]/30 transform hover:-translate-y-2"
            >
              {/* Imagen */}
              <div className="relative overflow-hidden">
                <img
                  src={producto.imagen || '/assets/images/productosKuyen/default.jpg'}
                  alt={producto.nombre}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = '/assets/images/productosKuyen/default.jpg';
                  }}
                />
                
                {/* Badge de stock */}
                <div className="absolute top-3 right-3">
                  {producto.stock > 0 ? (
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      Stock: {producto.stock}
                    </div>
                  ) : (
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                      AGOTADO
                    </div>
                  )}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                {/* Título */}
                <h3 className="text-xl font-bold text-[#2B4C7E] mb-2 group-hover:text-[#5DA9E9] transition-colors line-clamp-2">
                  {producto.nombre}
                </h3>

                {/* Descripción */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  {producto.descripcion || 'Producto de excelente calidad disponible en Kuyen Blanquería.'}
                </p>

                {/* Precio */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold bg-gradient-to-r from-[#5DA9E9] to-[#2B4C7E] bg-clip-text text-transparent">
                    {formatearPrecio(producto.precio)}
                  </span>
                  {producto.categoria && (
                    <span className="text-xs bg-[#9AE6B4]/20 text-[#2B4C7E] px-2 py-1 rounded-full">
                      {producto.categoria}
                    </span>
                  )}
                </div>

                {/* Botón de compra */}
                {producto.stock > 0 ? (
                  <button
                    onClick={() => handleAgregarCarrito(producto)}
                    className="w-full bg-gradient-to-r from-[#5DA9E9] to-[#2B4C7E] hover:from-[#4A90E2] hover:to-[#1A365D] text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                      Agregar al Carrito
                    </span>
                  </button>
                ) : (
                  <div className="w-full bg-red-100 text-red-600 px-4 py-3 rounded-xl font-semibold text-center border border-red-200">
                    <span className="flex items-center justify-center gap-2">
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

        {/* Footer informativo */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#5DA9E9]/20 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-[#2B4C7E] mb-2">
              📊 Inventario Actualizado
            </h3>
            <p className="text-sm text-gray-600">
              Los precios y stock se actualizan automáticamente desde nuestro sistema de inventario. 
              Si ves algún error, contáctanos por WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogoSheets;