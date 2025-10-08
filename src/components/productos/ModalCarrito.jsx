import React from 'react';

const ModalCarrito = ({ 
  carrito, 
  formatearPrecio, 
  removerDelCarrito, 
  actualizarCantidad, 
  calcularTotal, 
  cerrarModal, 
  abrirPedido 
}) => {
  const cantidadTotal = carrito.reduce((total, item) => total + item.cantidad, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-hidden">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Header mejorado */}
        <div className="bg-gradient-to-r from-[#2563eb] to-[#4093bc] text-white p-6 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2">
                🛒 Tu Carrito
              </h2>
              <p className="text-blue-100 mt-1">
                {carrito.length} {carrito.length === 1 ? 'producto' : 'productos'} • {cantidadTotal} {cantidadTotal === 1 ? 'unidad' : 'unidades'}
              </p>
            </div>
            <button
              onClick={cerrarModal}
              className="text-white hover:text-red-200 text-2xl bg-white/20 rounded-full w-8 h-8 flex items-center justify-center transition-colors flex-shrink-0"
            >
              ×
            </button>
          </div>
        </div>

  {/* Contenido del carrito con scroll mejorado */}
  <div className="flex-1 overflow-y-auto overscroll-contain p-6" style={{ minHeight: '200px' }}>
          {carrito.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl text-gray-400">🛒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Tu carrito está vacío</h3>
              <p className="text-gray-600 mb-6">¡Agrega algunos productos para comenzar!</p>
              <button
                onClick={cerrarModal}
                className="bg-[#2563eb] hover:bg-[#1d50d9] text-white px-6 py-3 rounded-lg font-bold transition-colors"
              >
                Explorar Productos
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {carrito.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow bg-gradient-to-r from-white to-gray-50">
                  <div className="flex items-start gap-4">
                    {/* Imagen del producto */}
                    <div className="flex-shrink-0">
                      <img
                        src={item.variantes ? item.variantes[0].imagen : '/assets/images/productosKuyen/product1.jpg'}
                        alt={item.nombre}
                        className="w-20 h-20 object-cover rounded-lg border-2 border-gray-100"
                      />
                    </div>

                    {/* Información del producto */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 text-lg mb-1">{item.nombre}</h3>
                      <p className="text-gray-600 text-sm mb-2 line-clamp-2">{item.descripcion}</p>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-[#2563eb] text-white px-2 py-1 rounded-md text-xs font-medium">
                          {item.categoria}
                        </span>
                        <span className="text-lg font-bold text-[#2563eb]">
                          {formatearPrecio(item.precio)}
                        </span>
                      </div>

                      {/* Información adicional */}
                      {item.medidas && (
                        <p className="text-xs text-gray-500 mb-3">📏 {item.medidas}</p>
                      )}

                      {/* Controles de cantidad */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <label className="text-sm font-medium text-gray-700">Cantidad:</label>
                          <div className="flex items-center border border-gray-300 rounded-lg">
                            <button
                              onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors rounded-l-lg"
                              disabled={item.cantidad <= 1}
                            >
                              -
                            </button>
                            <span className="px-4 py-1 bg-gray-50 font-bold text-[#2563eb] min-w-[3rem] text-center">
                              {item.cantidad}
                            </span>
                            <button
                              onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors rounded-r-lg"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Botón eliminar */}
                        <button
                          onClick={() => removerDelCarrito(item.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-colors"
                          title="Eliminar producto"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>

                      {/* Subtotal */}
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Subtotal:</span>
                          <span className="font-bold text-lg text-[#2563eb]">
                            {formatearPrecio(item.precio * item.cantidad)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer con total y acciones - altura fija */}
        {carrito.length > 0 && (
          <div className="border-t bg-gradient-to-r from-gray-50 to-blue-50 p-4 sm:p-6 flex-shrink-0">
            {/* Resumen de totales */}
            <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Total productos</p>
                  <p className="text-xl font-bold text-[#2563eb]">{carrito.length}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Total unidades</p>
                  <p className="text-xl font-bold text-[#2563eb]">{cantidadTotal}</p>
                </div>
              </div>
              
              <div className="border-t pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg sm:text-xl font-bold text-gray-800">Total Estimado:</span>
                  <span className="text-xl sm:text-2xl font-bold text-[#2563eb] bg-gradient-to-r from-blue-50 to-green-50 px-3 sm:px-4 py-2 rounded-lg">
                    {formatearPrecio(calcularTotal())}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  * Los precios están sujetos a confirmación
                </p>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button
                onClick={cerrarModal}
                className="flex-1 bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-300 py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-bold transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                <span className="hidden sm:inline">Seguir Comprando</span>
                <span className="sm:hidden">Seguir</span>
              </button>
              
              <button
                onClick={abrirPedido}
                className="flex-2 bg-gradient-to-r from-[#25D366] to-[#20BA5A] hover:from-[#20BA5A] hover:to-[#1ba94a] text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-bold transition-all shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382z"/>
                </svg>
                <span className="hidden sm:inline">Hacer Pedido por WhatsApp</span>
                <span className="sm:hidden">Pedido WhatsApp</span>
              </button>
            </div>

            {/* Información adicional */}
            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                <span>🔒</span>
                Proceso seguro • Respuesta rápida por WhatsApp
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalCarrito;