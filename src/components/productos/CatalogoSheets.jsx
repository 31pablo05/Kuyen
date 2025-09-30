
import React, { useContext, useState, useMemo, useCallback } from 'react';
import useGoogleSheets from '../../hooks/useGoogleSheets';
import CarritoContext from '../../context/CarritoContext';
import { GOOGLE_SHEETS_CONFIG } from '../../config/googleSheets.js';

/**
 * Componente Catálogo mejorado conectado a Google Sheets
 * Configuración en: src/config/googleSheets.js
 */
const CatalogoSheets = () => {
  const { data: productos, loading, error, refetch } = useGoogleSheets();
  const { agregarAlCarrito } = useContext(CarritoContext);
  
  // Estados locales para funcionalidades mejoradas
  const [filtroCategoria, setFiltroCategoria] = useState('todas');
  const [ordenamiento, setOrdenamiento] = useState('nombre');
  const [busqueda, setBusqueda] = useState('');
  const [imagenError, setImagenError] = useState(new Set());
  const [productosAgregando, setProductosAgregando] = useState(new Set());

  // Función memoizada para convertir enlaces de Google Drive
  const convertGoogleDriveUrl = useCallback((url) => {
    if (!url) return '/assets/images/productosKuyen/default.jpg';
    
    if (url.includes('drive.google.com/uc?')) return url;
    
    const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
    if (fileIdMatch) {
      return `https://drive.google.com/uc?export=view&id=${fileIdMatch[1]}`;
    }
    
    return url || '/assets/images/productosKuyen/default.jpg';
  }, []);

  // Función optimizada para formatear precio
  const formatearPrecio = useCallback((precio) => {
    if (!precio || isNaN(precio)) return 'Consultar precio';
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(precio);
  }, []);

  // Manejo mejorado del carrito con feedback visual
  const handleAgregarCarrito = useCallback(async (producto) => {
    if (producto.stock <= 0 || productosAgregando.has(producto.id)) return;
    
    setProductosAgregando(prev => new Set(prev).add(producto.id));
    
    try {
      await agregarAlCarrito({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        imagen: convertGoogleDriveUrl(producto.imagen),
        cantidad: 1,
        stock: producto.stock
      });
      
      // Feedback visual de éxito
      setTimeout(() => {
        setProductosAgregando(prev => {
          const newSet = new Set(prev);
          newSet.delete(producto.id);
          return newSet;
        });
      }, 1000);
    } catch (error) {
      console.error('Error al agregar producto:', error);
      setProductosAgregando(prev => {
        const newSet = new Set(prev);
        newSet.delete(producto.id);
        return newSet;
      });
    }
  }, [agregarAlCarrito, convertGoogleDriveUrl, productosAgregando]);

  // Manejo de errores de imagen optimizado
  const handleImagenError = useCallback((productoId, e) => {
    e.target.src = '/assets/images/productosKuyen/default.jpg';
    setImagenError(prev => new Set(prev).add(productoId));
  }, []);

  // Obtener categorías únicas
  const categorias = useMemo(() => {
    if (!productos) return [];
    const cats = [...new Set(productos.map(p => p.categoria).filter(Boolean))];
    return cats.sort();
  }, [productos]);

  // Filtrar y ordenar productos
  const productosFiltrados = useMemo(() => {
    if (!productos) return [];
    
    let result = [...productos];
    
    // Filtrar por búsqueda
    if (busqueda.trim()) {
      const searchTerm = busqueda.toLowerCase().trim();
      result = result.filter(p => 
        p.nombre?.toLowerCase().includes(searchTerm) ||
        p.descripcion?.toLowerCase().includes(searchTerm) ||
        p.categoria?.toLowerCase().includes(searchTerm)
      );
    }
    
    // Filtrar por categoría
    if (filtroCategoria !== 'todas') {
      result = result.filter(p => p.categoria === filtroCategoria);
    }
    
    // Ordenar
    result.sort((a, b) => {
      switch (ordenamiento) {
        case 'precio-asc':
          return (a.precio || 0) - (b.precio || 0);
        case 'precio-desc':
          return (b.precio || 0) - (a.precio || 0);
        case 'stock':
          return (b.stock || 0) - (a.stock || 0);
        case 'categoria':
          return (a.categoria || '').localeCompare(b.categoria || '');
        default:
          return (a.nombre || '').localeCompare(b.nombre || '');
      }
    });
    
    return result;
  }, [productos, busqueda, filtroCategoria, ordenamiento]);

  // Estadísticas de productos
  const estadisticas = useMemo(() => {
    if (!productos) return { total: 0, disponibles: 0, agotados: 0 };
    return {
      total: productos.length,
      disponibles: productos.filter(p => p.stock > 0).length,
      agotados: productos.filter(p => p.stock <= 0).length
    };
  }, [productos]);

  // Estados de carga, error y sin productos (mejorados)
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="relative mb-8">
            <div className="animate-spin rounded-full h-24 w-24 border-4 border-[#5DA9E9]/30 border-t-[#5DA9E9] mx-auto"></div>
            <div className="absolute inset-0 rounded-full h-24 w-24 border-4 border-[#9AE6B4]/20 animate-pulse mx-auto"></div>
            <div className="absolute inset-6 bg-gradient-to-br from-[#5DA9E9]/10 to-[#9AE6B4]/10 rounded-full"></div>
          </div>
          <h2 className="text-3xl font-bold text-[#2B4C7E] mb-4">Cargando Catálogo</h2>
          <p className="text-gray-600 text-lg mb-6">Preparando los mejores productos para ti...</p>
          <div className="flex justify-center space-x-2 mb-4">
            {[0, 1, 2].map((i) => (
              <div 
                key={i}
                className="w-3 h-3 bg-[#5DA9E9] rounded-full animate-bounce"
                style={{animationDelay: `${i * 0.2}s`}}
              ></div>
            ))}
          </div>
          <div className="text-sm text-gray-500">Conectando con Google Sheets...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-lg text-center border border-red-100">
          <div className="text-red-500 text-6xl mb-6">🚨</div>
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error de Conexión</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            No pudimos cargar los productos desde Google Sheets. 
            Verifica tu conexión a internet y vuelve a intentarlo.
          </p>
          <div className="bg-red-50 rounded-xl p-4 mb-6">
            <p className="text-sm text-red-700 font-mono">{error.message || 'Error desconocido'}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={refetch}
              className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Reintentar
              </span>
            </button>
            <button
              onClick={() => window.location.reload()}
              className="flex-1 bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              Recargar Página
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!productos || productos.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-lg text-center border border-gray-100">
          <div className="text-gray-400 text-6xl mb-6">📦</div>
          <h2 className="text-2xl font-bold text-[#2B4C7E] mb-4">Catálogo en Preparación</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Estamos trabajando para traerte los mejores productos. 
            ¡Vuelve pronto para descubrir nuestras novedades!
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={refetch}
              className="flex-1 bg-gradient-to-r from-[#5DA9E9] to-[#2B4C7E] hover:from-[#4A90E2] hover:to-[#1A365D] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Actualizar Catálogo
              </span>
            </button>
            <button
              onClick={() => window.history.back()}
              className="flex-1 bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              Volver
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-t-3xl shadow-2xl relative z-10 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header mejorado con estadísticas */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#5DA9E9]/10 to-[#9AE6B4]/10 px-6 py-3 rounded-full mb-6 border border-[#5DA9E9]/20">
            <div className="w-3 h-3 bg-[#5DA9E9] rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-[#2B4C7E] tracking-wider uppercase">
              Catálogo Premium
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#2B4C7E] via-[#5DA9E9] to-[#2B4C7E] bg-clip-text text-transparent">
              Encuentra lo que Buscas
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Cada producto está cuidadosamente seleccionado para brindarte la mejor calidad y diseño.
          </p>

          {/* Estadísticas mejoradas */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-gradient-to-r from-green-50 to-green-100 px-6 py-3 rounded-full shadow-md border border-green-200">
              <span className="text-sm font-bold text-green-700 flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                {estadisticas.disponibles} disponibles
              </span>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-3 rounded-full shadow-md border border-blue-200">
              <span className="text-sm font-bold text-blue-700">
                {estadisticas.total} productos
              </span>
            </div>
            {estadisticas.agotados > 0 && (
              <div className="bg-gradient-to-r from-red-50 to-red-100 px-6 py-3 rounded-full shadow-md border border-red-200">
                <span className="text-sm font-bold text-red-700">
                  {estadisticas.agotados} agotados
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Filtros y búsqueda mejorados */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 mb-12 shadow-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Búsqueda */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Buscar productos..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-[#5DA9E9] focus:border-transparent transition-all duration-200"
              />
              {busqueda && (
                <button
                  onClick={() => setBusqueda('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <svg className="h-4 w-4 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* Filtro por categoría */}
            <select
              value={filtroCategoria}
              onChange={(e) => setFiltroCategoria(e.target.value)}
              className="block w-full px-4 py-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#5DA9E9] focus:border-transparent transition-all duration-200"
            >
              <option value="todas">Todas las categorías</option>
              {categorias.map(categoria => (
                <option key={categoria} value={categoria}>
                  {categoria}
                </option>
              ))}
            </select>

            {/* Ordenamiento */}
            <select
              value={ordenamiento}
              onChange={(e) => setOrdenamiento(e.target.value)}
              className="block w-full px-4 py-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#5DA9E9] focus:border-transparent transition-all duration-200"
            >
              <option value="nombre">Ordenar por nombre</option>
              <option value="precio-asc">Precio: menor a mayor</option>
              <option value="precio-desc">Precio: mayor a menor</option>
              <option value="stock">Por disponibilidad</option>
              <option value="categoria">Por categoría</option>
            </select>
          </div>

          {/* Información de resultados */}
          <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
            <span>
              Mostrando {productosFiltrados.length} de {productos.length} productos
              {busqueda && ` para "${busqueda}"`}
              {filtroCategoria !== 'todas' && ` en "${filtroCategoria}"`}
            </span>
            <button
              onClick={refetch}
              className="flex items-center gap-2 text-[#2B4C7E] hover:text-[#5DA9E9] transition-colors group"
            >
              <svg className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Actualizar
            </button>
          </div>
        </div>

        {/* Grid de productos */}
        {productosFiltrados.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No se encontraron productos</h3>
            <p className="text-gray-500 mb-6">
              Intenta modificar los filtros o la búsqueda
            </p>
            <button
              onClick={() => {
                setBusqueda('');
                setFiltroCategoria('todas');
                setOrdenamiento('nombre');
              }}
              className="bg-[#5DA9E9] hover:bg-[#4A90E2] text-white px-6 py-3 rounded-xl transition-colors"
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {productosFiltrados.map((producto, index) => (
              <div
                key={producto.id}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#5DA9E9]/30 transform hover:-translate-y-2 hover:rotate-1"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Imagen con lazy loading mejorado */}
                <div className="relative overflow-hidden h-64 bg-gray-100">
                  <img
                    src={convertGoogleDriveUrl(producto.imagen)}
                    alt={producto.nombre}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    onError={(e) => handleImagenError(producto.id, e)}
                    loading="lazy"
                  />
                  
                  {/* Overlay mejorado */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Badge de stock optimizado */}
                  <div className="absolute top-4 right-4">
                    {producto.stock > 0 ? (
                      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-2 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm">
                        <span className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          {producto.stock > 10 ? '10+' : producto.stock}
                        </span>
                      </div>
                    ) : (
                      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-2 rounded-full text-xs font-bold shadow-lg">
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                          </svg>
                          AGOTADO
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Badge de categoría mejorado */}
                  {producto.categoria && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/95 backdrop-blur-sm text-[#2B4C7E] px-3 py-1 rounded-full text-xs font-semibold border border-gray-200 shadow-sm">
                        {producto.categoria}
                      </span>
                    </div>
                  )}
                </div>

                {/* Contenido mejorado */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2B4C7E] mb-3 group-hover:text-[#5DA9E9] transition-colors line-clamp-2 leading-tight">
                    {producto.nombre}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                    {producto.descripcion || 'Producto de excelente calidad disponible en Kuyen Blanquería.'}
                  </p>

                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-2xl font-bold bg-gradient-to-r from-[#5DA9E9] to-[#2B4C7E] bg-clip-text text-transparent">
                      {formatearPrecio(producto.precio)}
                    </span>
                    {producto.stock > 0 && producto.stock <= 5 && (
                      <span className="text-xs text-orange-600 font-semibold bg-orange-50 px-2 py-1 rounded-full">
                        ¡Últimas {producto.stock}!
                      </span>
                    )}
                  </div>

                  {/* Botón mejorado con estados */}
                  {producto.stock > 0 ? (
                    <button
                      onClick={() => handleAgregarCarrito(producto)}
                      disabled={productosAgregando.has(producto.id)}
                      className={`w-full px-6 py-4 rounded-2xl font-semibold transition-all duration-300 transform shadow-lg relative overflow-hidden ${
                        productosAgregando.has(producto.id)
                          ? 'bg-green-500 text-white scale-105'
                          : 'bg-gradient-to-r from-[#5DA9E9] to-[#2B4C7E] hover:from-[#4A90E2] hover:to-[#1A365D] text-white hover:scale-105 hover:shadow-xl'
                      }`}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        {productosAgregando.has(producto.id) ? (
                          <>
                            <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            Agregando...
                          </>
                        ) : (
                          <>
                            <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            Agregar al Carrito
                          </>
                        )}
                      </span>
                      {!productosAgregando.has(producto.id) && (
                        <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      )}
                    </button>
                  ) : (
                    <div className="w-full bg-gradient-to-r from-red-100 to-red-200 text-red-700 px-6 py-4 rounded-2xl font-semibold text-center border-2 border-red-200">
                      <span className="flex items-center justify-center gap-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Sin Stock
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer informativo mejorado */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#5DA9E9]/5 to-[#9AE6B4]/5 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-3">✨</div>
                <h3 className="text-lg font-bold text-[#2B4C7E] mb-2">Calidad Premium</h3>
                <p className="text-sm text-gray-600">Productos cuidadosamente seleccionados para tu hogar</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-2">🌟</div>
                <h3 className="text-lg font-bold text-[#2B4C7E] mb-1">Calidad Premium</h3>
                <p className="text-sm text-gray-600">Productos cuidadosamente seleccionados para tu hogar</p>
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