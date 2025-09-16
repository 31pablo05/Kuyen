import { categorias, colores, rangosPrecios } from './catalogo.js';

function Filtros({ 
  categoriaSeleccionada, 
  setCategoriaSeleccionada, 
  colorSeleccionado, 
  setColorSeleccionado,
  rangoPrecios,
  setRangoPrecios,
  limpiarFiltros 
}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-[#9AE6B4] border-opacity-20">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-[#2B4C7E]">Filtros</h3>
        <button
          onClick={limpiarFiltros}
          className="text-sm text-[#5DA9E9] hover:text-[#2B4C7E] underline font-medium transition-colors"
        >
          Limpiar filtros
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Filtro por categoría */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Categoría
          </label>
          <select
            value={categoriaSeleccionada}
            onChange={(e) => setCategoriaSeleccionada(e.target.value)}
            className="w-full px-3 py-2 border border-[#5DA9E9] border-opacity-30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5DA9E9] focus:border-[#5DA9E9]"
          >
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.nombre}
              </option>
            ))}
          </select>
        </div>

        {/* Filtro por color */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Color
          </label>
          <select
            value={colorSeleccionado}
            onChange={(e) => setColorSeleccionado(e.target.value)}
            className="w-full px-3 py-2 border border-[#5DA9E9] border-opacity-30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5DA9E9] focus:border-[#5DA9E9]"
          >
            <option value="">Todos los colores</option>
            {colores.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>

        {/* Filtro por precio */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Precio
          </label>
          <select
            value={rangoPrecios}
            onChange={(e) => setRangoPrecios(e.target.value)}
            className="w-full px-3 py-2 border border-[#5DA9E9] border-opacity-30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5DA9E9] focus:border-[#5DA9E9]"
          >
            {rangosPrecios.map((rango) => (
              <option key={rango.id} value={rango.id}>
                {rango.nombre}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filtros;
