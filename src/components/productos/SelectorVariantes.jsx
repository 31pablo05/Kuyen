function SelectorVariantes({ variantes, varianteSeleccionada, onSeleccionarVariante }) {
  if (variantes.length <= 1) return null;

  return (
    <div className="mb-4">
      <p className="text-sm text-gray-500 mb-2">
        <span className="font-medium">Modelo/Diseño:</span>
      </p>
      
      {/* Selector dropdown para móviles */}
      <div className="md:hidden">
        <select 
          value={varianteSeleccionada?.id || variantes[0]?.id}
          onChange={(e) => {
            const variante = variantes.find(v => v.id === e.target.value);
            onSeleccionarVariante(variante);
          }}
          className="w-full px-3 py-2 border border-[#5DA9E9] border-opacity-30 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#5DA9E9]"
        >
          {variantes.map((variante) => (
            <option key={variante.id} value={variante.id}>
              {variante.nombre}
            </option>
          ))}
        </select>
      </div>

      {/* Botones para desktop */}
      <div className="hidden md:flex flex-wrap gap-2">
        {variantes.map((variante) => (
          <button
            key={variante.id}
            onClick={() => onSeleccionarVariante(variante)}
            className={`px-3 py-2 rounded-lg text-xs transition-all transform hover:scale-105 ${
              varianteSeleccionada?.id === variante.id
                ? 'bg-[#5DA9E9] text-white shadow-md'
                : 'bg-[#F5F5F5] text-[#2B4C7E] hover:bg-[#9AE6B4] hover:bg-opacity-30'
            }`}
          >
            {variante.nombre}
          </button>
        ))}
      </div>

      {/* Descripción de la variante seleccionada */}
      {varianteSeleccionada?.descripcionVariante && (
        <div className="mt-2 p-2 bg-[#F5F5F5] rounded-md">
          <p className="text-xs text-gray-600 italic">
            {varianteSeleccionada.descripcionVariante}
          </p>
        </div>
      )}
    </div>
  );
}

export default SelectorVariantes;