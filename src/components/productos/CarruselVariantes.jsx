import { useState } from 'react';

function CarruselVariantes({ variantes, onCambiarVariante }) {
  const [indiceActual, setIndiceActual] = useState(0);

  const cambiarVariante = (indice) => {
    setIndiceActual(indice);
    onCambiarVariante(variantes[indice]);
  };

  const anteriorVariante = () => {
    const nuevoIndice = indiceActual === 0 ? variantes.length - 1 : indiceActual - 1;
    cambiarVariante(nuevoIndice);
  };

  const siguienteVariante = () => {
    const nuevoIndice = indiceActual === variantes.length - 1 ? 0 : indiceActual + 1;
    cambiarVariante(nuevoIndice);
  };

  // Si solo hay una variante, no mostrar carrusel
  if (variantes.length <= 1) {
    return (
      <div className="relative w-full h-48">
        <img 
          src={variantes[0]?.imagen} 
          alt={variantes[0]?.nombre}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full h-48 group">
      {/* Imagen principal */}
      <img 
        src={variantes[indiceActual]?.imagen} 
        alt={variantes[indiceActual]?.nombre}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />

      {/* Botones de navegación */}
      <button
        onClick={anteriorVariante}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={siguienteVariante}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicadores de puntos */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
        {variantes.map((_, indice) => (
          <button
            key={indice}
            onClick={() => cambiarVariante(indice)}
            className={`w-2 h-2 rounded-full transition-all ${
              indice === indiceActual 
                ? 'bg-white scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>

      {/* Contador de variantes */}
      <div className="absolute top-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded-full">
        {indiceActual + 1}/{variantes.length}
      </div>

      {/* Etiqueta de variante */}
      <div className="absolute bottom-8 left-2 bg-[#5DA9E9] bg-opacity-90 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
        {variantes[indiceActual]?.nombre}
      </div>
    </div>
  );
}

export default CarruselVariantes;