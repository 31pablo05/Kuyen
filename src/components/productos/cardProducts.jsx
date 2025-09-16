import { useState } from 'react';
import { useCarrito } from '../../context/CarritoContext.jsx';
import CarruselVariantes from './CarruselVariantes.jsx';
import SelectorVariantes from './SelectorVariantes.jsx';

function CardProducts({ producto }) {
  const { agregarAlCarrito } = useCarrito();
  
  // Estado para manejar variantes
  const [varianteSeleccionada, setVarianteSeleccionada] = useState(
    producto.variantes ? producto.variantes[0] : null
  );
  const [colorSeleccionado, setColorSeleccionado] = useState(producto.colores[0] || '');
  const [cantidad, setCantidad] = useState(1);
  const [mostrandoDetalles, setMostrandoDetalles] = useState(false);

  const formatearPrecio = (precio) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(precio);
  };

  const handleAgregarAlCarrito = () => {
    // Crear producto con variante seleccionada
    const productoConVariante = {
      ...producto,
      varianteSeleccionada: varianteSeleccionada,
      imagenSeleccionada: varianteSeleccionada?.imagen || producto.imagen
    };
    
    agregarAlCarrito(productoConVariante, cantidad, colorSeleccionado);
    
    // Mostrar feedback visual
    const button = document.getElementById(`btn-${producto.id}`);
    const originalText = button.textContent;
    button.textContent = '¡Agregado!';
    button.style.backgroundColor = '#9AE6B4';
    
    setTimeout(() => {
      button.textContent = originalText;
      button.style.backgroundColor = '';
    }, 1500);
  };

  const handleCambiarVariante = (nuevaVariante) => {
    setVarianteSeleccionada(nuevaVariante);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover group">
      {/* Carrusel de imágenes o imagen única */}
      <div className="relative">
        {producto.variantes && producto.variantes.length > 1 ? (
          <CarruselVariantes 
            variantes={producto.variantes}
            onCambiarVariante={handleCambiarVariante}
          />
        ) : (
          <div className="relative">
            <img 
              src={varianteSeleccionada?.imagen || producto.imagen} 
              alt={producto.nombre}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        )}
        
        {producto.destacado && (
          <div className="absolute top-2 left-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse z-20">
            ⭐ Destacado
          </div>
        )}
        
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
          <button 
            onClick={() => setMostrandoDetalles(!mostrandoDetalles)}
            className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#2B4C7E] mb-2 hover:text-[#5DA9E9] transition-colors">
          {producto.nombre}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {producto.descripcion}
        </p>

        {/* Medidas */}
        <p className="text-sm text-gray-500 mb-3">
          <span className="font-medium">Medidas:</span> {producto.medidas}
        </p>

        {/* Selector de variantes */}
        {producto.variantes && producto.variantes.length > 1 && (
          <SelectorVariantes 
            variantes={producto.variantes}
            varianteSeleccionada={varianteSeleccionada}
            onSeleccionarVariante={setVarianteSeleccionada}
          />
        )}

        {/* Colores disponibles */}
        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-2">
            <span className="font-medium">Color:</span>
          </p>
          <select 
            value={colorSeleccionado}
            onChange={(e) => setColorSeleccionado(e.target.value)}
            className="w-full px-3 py-1 border border-[#5DA9E9] border-opacity-30 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#5DA9E9]"
          >
            {producto.colores.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>

        {/* Cantidad */}
        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-2">
            <span className="font-medium">Cantidad:</span>
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCantidad(Math.max(1, cantidad - 1))}
              className="bg-[#5DA9E9] hover:bg-[#4A90E2] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm"
            >
              -
            </button>
            <span className="w-12 text-center font-medium">{cantidad}</span>
            <button
              onClick={() => setCantidad(cantidad + 1)}
              className="bg-[#5DA9E9] hover:bg-[#4A90E2] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm"
            >
              +
            </button>
          </div>
        </div>

        {/* Mostrar detalles expandidos */}
        {mostrandoDetalles && (
          <div className="mb-4 p-3 bg-[#F5F5F5] rounded-lg">
            <h4 className="font-medium text-[#2B4C7E] mb-2">Detalles del producto:</h4>
            <p className="text-sm text-gray-600 mb-2">{producto.descripcion}</p>
            
            {varianteSeleccionada?.descripcionVariante && (
              <p className="text-sm text-gray-600 mb-2">
                <strong>Variante:</strong> {varianteSeleccionada.descripcionVariante}
              </p>
            )}
            
            <div className="mt-2">
              <p className="text-sm"><strong>Colores disponibles:</strong></p>
              <div className="flex flex-wrap gap-1 mt-1">
                {producto.colores.map((color, index) => (
                  <span 
                    key={index}
                    className="text-xs bg-[#9AE6B4] bg-opacity-30 text-[#2B4C7E] px-2 py-1 rounded-full"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>
            
            {producto.variantes && producto.variantes.length > 1 && (
              <div className="mt-2">
                <p className="text-sm"><strong>Modelos disponibles:</strong></p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {producto.variantes.map((variante, index) => (
                    <span 
                      key={index}
                      className={`text-xs px-2 py-1 rounded-full ${
                        varianteSeleccionada?.id === variante.id
                          ? 'bg-[#5DA9E9] text-white'
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {variante.nombre}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Precio y botón */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#5DA9E9] to-[#2B4C7E] bg-clip-text text-transparent">
              {formatearPrecio(producto.precio)}
            </span>
            {cantidad > 1 && (
              <span className="text-sm text-gray-600">
                Total: {formatearPrecio(producto.precio * cantidad)}
              </span>
            )}
          </div>
          
          <button 
            id={`btn-${producto.id}`}
            onClick={handleAgregarAlCarrito}
            className="w-full bg-gradient-to-r from-[#5DA9E9] to-[#2B4C7E] hover:from-[#4A90E2] hover:to-[#1A365D] text-white px-4 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg font-semibold"
          >
            🛒 Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardProducts;
