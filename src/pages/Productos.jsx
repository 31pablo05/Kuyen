import React, { useState } from 'react';
import { productos, rangosPrecios } from '../components/productos/catalogo.js';
import Buscador from '../components/productos/buscador.jsx';
import Filtros from '../components/productos/filtros.jsx';
import CardProducts from '../components/productos/cardProducts.jsx';
import CatalogoSheets from '../components/productos/CatalogoSheets.jsx';

function Productos() {
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todas');
  const [colorSeleccionado, setColorSeleccionado] = useState('');
  const [rangoPrecios, setRangoPrecios] = useState('todos');
  const [modoInventario, setModoInventario] = useState(false); // Toggle entre catálogo estático y Google Sheets

  // Función para limpiar todos los filtros
  const limpiarFiltros = () => {
    setBusqueda('');
    setCategoriaSeleccionada('todas');
    setColorSeleccionado('');
    setRangoPrecios('todos');
  };

  // Función para filtrar productos
  const productosFiltrados = productos.filter((producto) => {
    // Filtro por búsqueda
    const coincideBusqueda = producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                           producto.descripcion.toLowerCase().includes(busqueda.toLowerCase());
    
    // Filtro por categoría
    const coincideCategoria = categoriaSeleccionada === 'todas' || 
                             producto.categoria === categoriaSeleccionada;
    
    // Filtro por color
    const coincideColor = !colorSeleccionado || 
                         producto.colores.includes(colorSeleccionado);
    
    // Filtro por precio
    const rangoSeleccionado = rangosPrecios.find(r => r.id === rangoPrecios);
    const coincidePrecio = rangoSeleccionado ? 
                          producto.precio >= rangoSeleccionado.min && 
                          producto.precio <= rangoSeleccionado.max : true;

    return coincideBusqueda && coincideCategoria && coincideColor && coincidePrecio;
  });

  return (
    <div className="w-full mx-auto px-4 md:px-8 lg:px-16 py-12">
      {/* Header con toggle de modo */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Nuestros Productos
        </h1>
        <p className="text-xl text-blue-800 max-w-2xl mx-auto mb-8">
          Descubrí nuestra amplia selección de productos para el hogar. 
          Calidad, diseño y precio en cada artículo.
        </p>
        
        {/* Toggle entre catálogo estático y Google Sheets */}
        <div className="flex justify-center">
          <div className="bg-white rounded-xl p-1 shadow-lg border border-gray-200 inline-flex">
            <button
              onClick={() => setModoInventario(false)}
              className={`px-6 py-3 rounded-lg transition-all font-semibold ${
                !modoInventario 
                  ? 'bg-[#5DA9E9] text-white shadow-md transform scale-105' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              📋 Catálogo Demo
            </button>
            <button
              onClick={() => setModoInventario(true)}
              className={`px-6 py-3 rounded-lg transition-all font-semibold ${
                modoInventario 
                  ? 'bg-[#5DA9E9] text-white shadow-md transform scale-105' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              📊 Inventario Live
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          {modoInventario 
            ? '🔄 Conectado a Google Sheets - Stock en tiempo real' 
            : '🎨 Productos de demostración con filtros avanzados'
          }
        </p>
      </div>

      {/* Renderizado condicional */}
      {modoInventario ? (
        // Modo Google Sheets - Inventario en tiempo real
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 mb-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-[#2B4C7E] mb-2">
              🚀 Modo Inventario en Tiempo Real
            </h2>
            <p className="text-gray-600">
              Los productos se cargan directamente desde Google Sheets. 
              Stock y precios actualizados automáticamente.
            </p>
          </div>
          <CatalogoSheets />
        </div>
      ) : (
        // Modo catálogo estático con filtros
        <>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-[#2B4C7E] mb-2">
                🎯 Catálogo Demo con Filtros
              </h2>
              <p className="text-gray-600">
                Explora nuestros productos con filtros avanzados y búsqueda inteligente.
              </p>
            </div>

            {/* Buscador */}
            <Buscador busqueda={busqueda} setBusqueda={setBusqueda} />

            {/* Filtros */}
            <Filtros 
              categoriaSeleccionada={categoriaSeleccionada}
              setCategoriaSeleccionada={setCategoriaSeleccionada}
              colorSeleccionado={colorSeleccionado}
              setColorSeleccionado={setColorSeleccionado}
              rangoPrecios={rangoPrecios}
              setRangoPrecios={setRangoPrecios}
              limpiarFiltros={limpiarFiltros}
            />

            {/* Resultados */}
            <div className="mb-6">
              <p className="text-gray-600 text-center">
                Mostrando {productosFiltrados.length} de {productos.length} productos
              </p>
            </div>
          </div>

          {/* Grid de productos */}
          {productosFiltrados.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {productosFiltrados.map((producto) => (
                <CardProducts key={producto.id} producto={producto} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-xl text-gray-500 mb-4">
                No se encontraron productos que coincidan con tu búsqueda
              </p>
              <button
                onClick={limpiarFiltros}
                className="bg-[#5DA9E9] hover:bg-[#4A90E2] text-white px-6 py-3 rounded-lg transition-colors font-semibold"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Productos;
