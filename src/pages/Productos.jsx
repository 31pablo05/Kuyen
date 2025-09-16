import { useState } from 'react';
import { productos, rangosPrecios } from '../components/productos/catalogo.js';
import Buscador from '../components/productos/buscador.jsx';
import Filtros from '../components/productos/filtros.jsx';
import CardProducts from '../components/productos/cardProducts.jsx';

function Productos() {
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todas');
  const [colorSeleccionado, setColorSeleccionado] = useState('');
  const [rangoPrecios, setRangoPrecios] = useState('todos');

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
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Nuestros Productos
        </h1>
        <p className="text-xl text-blue-800 max-w-2xl mx-auto">
          Descubrí nuestra amplia selección de productos para el hogar. 
          Calidad, diseño y precio en cada artículo.
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
        <p className="text-gray-600">
          Mostrando {productosFiltrados.length} de {productos.length} productos
        </p>
      </div>

      {/* Grid de productos */}
      {productosFiltrados.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productosFiltrados.map((producto) => (
            <CardProducts key={producto.id} producto={producto} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500 mb-4">
            No se encontraron productos que coincidan con tu búsqueda
          </p>
          <button
            onClick={limpiarFiltros}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Limpiar filtros
          </button>
        </div>
      )}
    </div>
  );
}

export default Productos;
