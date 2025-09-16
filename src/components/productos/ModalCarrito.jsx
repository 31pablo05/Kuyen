import { useCarrito } from '../../context/CarritoContext.jsx';

function ModalCarrito() {
  const { 
    productosCarrito, 
    modalCarritoAbierto, 
    setModalCarritoAbierto,
    setModalPedidoAbierto,
    removerDelCarrito,
    actualizarCantidad,
    calcularTotal,
    vaciarCarrito
  } = useCarrito();

  if (!modalCarritoAbierto) return null;

  const formatearPrecio = (precio) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(precio);
  };

  const handleContinuarPedido = () => {
    setModalCarritoAbierto(false);
    setModalPedidoAbierto(true);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-[#F5F5F5] p-6 rounded-t-xl">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-[#2B4C7E]">Tu Carrito</h2>
            <button
              onClick={() => setModalCarritoAbierto(false)}
              className="text-gray-500 hover:text-gray-700 p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Contenido */}
        <div className="p-6">
          {productosCarrito.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 text-lg mb-4">Tu carrito está vacío</p>
              <button
                onClick={() => setModalCarritoAbierto(false)}
                className="bg-[#5DA9E9] hover:bg-[#4A90E2] text-white px-6 py-3 rounded-lg transition-colors"
              >
                Seguir comprando
              </button>
            </div>
          ) : (
            <>
              {/* Lista de productos */}
              <div className="space-y-4 mb-6">
                {productosCarrito.map((producto) => (
                  <div key={producto.id} className="flex items-center gap-4 bg-[#F5F5F5] rounded-lg p-4">
                    <img 
                      src={producto.imagen} 
                      alt={producto.nombre}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#2B4C7E]">{producto.nombre}</h3>
                      {producto.colorSeleccionado && (
                        <p className="text-sm text-gray-600">Color: {producto.colorSeleccionado}</p>
                      )}
                      <p className="text-sm text-gray-600">Precio: {formatearPrecio(producto.precio)}</p>
                    </div>

                    {/* Controles de cantidad */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => actualizarCantidad(producto.id, producto.cantidad - 1)}
                        className="bg-[#5DA9E9] hover:bg-[#4A90E2] text-white w-8 h-8 rounded-full flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-medium">{producto.cantidad}</span>
                      <button
                        onClick={() => actualizarCantidad(producto.id, producto.cantidad + 1)}
                        className="bg-[#5DA9E9] hover:bg-[#4A90E2] text-white w-8 h-8 rounded-full flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>

                    {/* Subtotal */}
                    <div className="text-right">
                      <p className="font-bold text-[#2B4C7E]">
                        {formatearPrecio(producto.precio * producto.cantidad)}
                      </p>
                    </div>

                    {/* Botón eliminar */}
                    <button
                      onClick={() => removerDelCarrito(producto.id)}
                      className="text-red-500 hover:text-red-700 p-1"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="border-t border-[#9AE6B4] pt-4 mb-6">
                <div className="flex justify-between items-center text-xl font-bold text-[#2B4C7E]">
                  <span>Total:</span>
                  <span>{formatearPrecio(calcularTotal())}</span>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="flex gap-4">
                <button
                  onClick={vaciarCarrito}
                  className="flex-1 bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  Vaciar carrito
                </button>
                <button
                  onClick={handleContinuarPedido}
                  className="flex-1 bg-[#9AE6B4] hover:bg-[#7ED6C7] text-[#2B4C7E] px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Continuar pedido
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ModalCarrito;