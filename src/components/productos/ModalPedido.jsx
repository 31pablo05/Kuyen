import React from 'react';

const ModalPedido = ({ 
  carrito, 
  formatearPrecio, 
  calcularTotal, 
  datosCliente, 
  setDatosCliente, 
  enviarPedido, 
  cerrarModal, 
  volverAlCarrito 
}) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDatosCliente(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Obtener cantidad total de productos
  const cantidadTotal = carrito.reduce((total, item) => total + item.cantidad, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start sm:items-center justify-center z-50 p-2 sm:p-4 overflow-hidden">
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Header mejorado */}
        <div className="bg-gradient-to-r from-[#2563eb] to-[#4093bc] text-white p-4 sm:p-6 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">🛒 Finalizar Pedido</h2>
              <p className="text-blue-100 mt-1 text-sm sm:text-base">Completa tus datos para enviar por WhatsApp</p>
            </div>
            <button
              onClick={cerrarModal}
              className="text-white hover:text-red-200 text-2xl bg-white/20 rounded-full w-8 h-8 flex items-center justify-center transition-colors flex-shrink-0"
            >
              ×
            </button>
          </div>
        </div>

        {/* Contenido con scroll mejorado */}
        <div className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-6">
          {/* Resumen del pedido mejorado */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#11b189] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <h3 className="text-lg font-bold text-[#2563eb]">Resumen del Pedido</h3>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-4 rounded-xl border border-blue-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Total de productos</p>
                  <p className="text-xl font-bold text-[#2563eb]">{carrito.length}</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Cantidad total</p>
                  <p className="text-xl font-bold text-[#2563eb]">{cantidadTotal} unidades</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                {carrito.map((item) => (
                  <div key={item.id} className="flex justify-between items-center py-2 px-3 bg-white rounded-lg">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.variantes ? item.variantes[0].imagen : '/assets/images/productosKuyen/product1.jpg'}
                        alt={item.nombre}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div>
                        <span className="font-medium text-gray-800">{item.nombre}</span>
                        <p className="text-xs text-gray-500">Cantidad: {item.cantidad}</p>
                      </div>
                    </div>
                    <span className="font-bold text-[#2563eb]">{formatearPrecio(item.precio * item.cantidad)}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg sm:text-xl font-bold text-gray-800">Total Estimado:</span>
                  <span className="text-xl sm:text-2xl font-bold text-[#2563eb] bg-white px-3 sm:px-4 py-2 rounded-lg shadow-sm">
                    {formatearPrecio(calcularTotal())}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-2">* Los precios están sujetos a confirmación</p>
              </div>
            </div>
          </div>

          {/* Formulario mejorado */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#11b189] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <h3 className="text-lg font-bold text-[#2563eb]">Tus Datos</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="flex items-center gap-2">
                    👤 Nombre completo *
                    {datosCliente.nombre.trim().length >= 2 && (
                      <span className="text-green-500 text-xs">✓</span>
                    )}
                  </span>
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={datosCliente.nombre}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4093bc] focus:border-[#4093bc] transition-colors"
                  placeholder="Ej: Juan Pérez"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="flex items-center gap-2">
                    📧 Email *
                    {/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datosCliente.email) && (
                      <span className="text-green-500 text-xs">✓</span>
                    )}
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={datosCliente.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4093bc] focus:border-[#4093bc] transition-colors"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  💳 Forma de pago preferida
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['efectivo', 'transferencia', 'tarjeta'].map((pago) => (
                    <label key={pago} className="cursor-pointer">
                      <input
                        type="radio"
                        name="formaPago"
                        value={pago}
                        checked={datosCliente.formaPago === pago}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className={`p-3 rounded-lg border-2 text-center transition-all ${
                        datosCliente.formaPago === pago
                          ? 'border-[#4093bc] bg-blue-50 text-[#2563eb]'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}>
                        <div className="text-lg">
                          {pago === 'efectivo' && '💵'}
                          {pago === 'transferencia' && '🏦'}
                          {pago === 'tarjeta' && '💳'}
                        </div>
                        <div className="text-sm font-medium capitalize">{pago}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Información adicional */}
          <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
            <div className="flex items-start gap-2">
              <span className="text-amber-600 text-lg">ℹ️</span>
              <div>
                <h4 className="font-semibold text-amber-800">Información importante:</h4>
                <ul className="text-sm text-amber-700 mt-1 space-y-1">
                  <li>• Te contactaremos por WhatsApp para confirmar disponibilidad</li>
                  <li>• Los precios pueden variar según stock actual</li>
                  <li>• Tiempo de respuesta estimado: 2-4 horas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer mejorado - sin recorte en móvil */}
        <div className="border-t bg-gray-50 p-3 sm:p-6 flex-shrink-0">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <button
              onClick={volverAlCarrito}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-bold transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="hidden sm:inline">Volver al Carrito</span>
              <span className="sm:hidden">Volver</span>
            </button>
            <button
              onClick={enviarPedido}
              disabled={!datosCliente.nombre.trim() || !datosCliente.email.trim()}
              className="flex-2 bg-[#25D366] hover:bg-[#20BA5A] disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-bold transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382z"/>
              </svg>
              <span className="hidden sm:inline">Enviar Pedido por WhatsApp</span>
              <span className="sm:hidden">Enviar WhatsApp</span>
            </button>
          </div>
          
          <div className="mt-2 sm:mt-3 text-center">
            <p className="text-xs text-gray-500">
              🔒 Tus datos están seguros y solo se usarán para procesar tu pedido
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPedido;