import { useState } from 'react';
import { useCarrito } from '../../context/CarritoContext.jsx';

function ModalPedido() {
  const { 
    productosCarrito, 
    modalPedidoAbierto, 
    setModalPedidoAbierto,
    calcularTotal,
    vaciarCarrito
  } = useCarrito();

  const [datosCliente, setDatosCliente] = useState({
    nombre: '',
    telefono: '',
    email: '',
    direccion: '',
    formaPago: 'efectivo',
    tipoEntrega: 'retiro',
    comentarios: ''
  });

  const [errores, setErrores] = useState({});

  if (!modalPedidoAbierto) return null;

  const formatearPrecio = (precio) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(precio);
  };

  const validarFormulario = () => {
    const nuevosErrores = {};

    if (!datosCliente.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio';
    }

    if (!datosCliente.telefono.trim()) {
      nuevosErrores.telefono = 'El teléfono es obligatorio';
    }

    if (datosCliente.tipoEntrega === 'envio' && !datosCliente.direccion.trim()) {
      nuevosErrores.direccion = 'La dirección es obligatoria para envío';
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const generarMensajeWhatsApp = () => {
    const total = calcularTotal();
    const cantidadProductos = productosCarrito.reduce((total, item) => total + item.cantidad, 0);
    
    let mensaje = `🛍️ *PEDIDO KUYEN BLANQUERÍA*\n\n`;
    mensaje += `👤 *Cliente:* ${datosCliente.nombre}\n`;
    mensaje += `📞 *Teléfono:* ${datosCliente.telefono}\n`;
    
    if (datosCliente.email) {
      mensaje += `📧 *Email:* ${datosCliente.email}\n`;
    }
    
    mensaje += `\n📦 *PRODUCTOS (${cantidadProductos} unidades):*\n`;
    
    productosCarrito.forEach((producto, index) => {
      mensaje += `${index + 1}. ${producto.nombre}\n`;
      if (producto.colorSeleccionado) {
        mensaje += `   Color: ${producto.colorSeleccionado}\n`;
      }
      mensaje += `   Cantidad: ${producto.cantidad}\n`;
      mensaje += `   Precio unitario: ${formatearPrecio(producto.precio)}\n`;
      mensaje += `   Subtotal: ${formatearPrecio(producto.precio * producto.cantidad)}\n\n`;
    });

    mensaje += `💰 *TOTAL: ${formatearPrecio(total)}*\n\n`;

    mensaje += `💳 *Forma de pago:* `;
    switch(datosCliente.formaPago) {
      case 'efectivo':
        mensaje += 'Efectivo';
        break;
      case 'debito':
        mensaje += 'Tarjeta de débito';
        break;
      case 'credito':
        mensaje += 'Tarjeta de crédito';
        break;
      default:
        mensaje += datosCliente.formaPago;
    }

    mensaje += `\n\n🚚 *Entrega:* `;
    if (datosCliente.tipoEntrega === 'retiro') {
      mensaje += 'Retiro en showroom';
    } else {
      mensaje += `Envío a domicilio\n📍 *Dirección:* ${datosCliente.direccion}`;
    }

    if (datosCliente.comentarios) {
      mensaje += `\n\n💬 *Comentarios:* ${datosCliente.comentarios}`;
    }

    mensaje += `\n\n✅ *Pedido realizado desde la web de Kuyen Blanquería*`;

    return encodeURIComponent(mensaje);
  };

  const enviarPedido = () => {
    if (!validarFormulario()) {
      return;
    }

    const mensaje = generarMensajeWhatsApp();
    const numeroWhatsApp = '2804325023';
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
    
    // Abrir WhatsApp
    window.open(urlWhatsApp, '_blank');
    
    // Limpiar carrito y cerrar modal
    vaciarCarrito();
    setModalPedidoAbierto(false);
    
    // Mostrar mensaje de confirmación
    alert('¡Pedido enviado! Serás redirigido a WhatsApp para confirmar tu pedido.');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDatosCliente(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error si existe
    if (errores[name]) {
      setErrores(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-[#F5F5F5] p-6 rounded-t-xl">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-[#2B4C7E]">Finalizar Pedido</h2>
            <button
              onClick={() => setModalPedidoAbierto(false)}
              className="text-gray-500 hover:text-gray-700 p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Formulario */}
            <div>
              <h3 className="text-lg font-semibold text-[#2B4C7E] mb-4">Datos del cliente</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={datosCliente.nombre}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5DA9E9] ${
                      errores.nombre ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tu nombre completo"
                  />
                  {errores.nombre && <p className="text-red-500 text-sm mt-1">{errores.nombre}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={datosCliente.telefono}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5DA9E9] ${
                      errores.telefono ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="(011) 1234-5678"
                  />
                  {errores.telefono && <p className="text-red-500 text-sm mt-1">{errores.telefono}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email (opcional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={datosCliente.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5DA9E9]"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Forma de pago
                  </label>
                  <select
                    name="formaPago"
                    value={datosCliente.formaPago}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5DA9E9]"
                  >
                    <option value="efectivo">Efectivo</option>
                    <option value="debito">Tarjeta de débito</option>
                    <option value="credito">Tarjeta de crédito</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tipo de entrega
                  </label>
                  <select
                    name="tipoEntrega"
                    value={datosCliente.tipoEntrega}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5DA9E9]"
                  >
                    <option value="retiro">Retiro en showroom</option>
                    <option value="envio">Envío a domicilio</option>
                  </select>
                </div>

                {datosCliente.tipoEntrega === 'envio' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Dirección de envío *
                    </label>
                    <textarea
                      name="direccion"
                      value={datosCliente.direccion}
                      onChange={handleInputChange}
                      rows="2"
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5DA9E9] ${
                        errores.direccion ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Calle, número, piso, departamento, localidad"
                    />
                    {errores.direccion && <p className="text-red-500 text-sm mt-1">{errores.direccion}</p>}
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Comentarios adicionales
                  </label>
                  <textarea
                    name="comentarios"
                    value={datosCliente.comentarios}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5DA9E9]"
                    placeholder="Horarios de entrega, preferencias, etc."
                  />
                </div>
              </div>
            </div>

            {/* Resumen del pedido */}
            <div>
              <h3 className="text-lg font-semibold text-[#2B4C7E] mb-4">Resumen del pedido</h3>
              
              <div className="bg-[#F5F5F5] rounded-lg p-4 space-y-3">
                {productosCarrito.map((producto) => (
                  <div key={producto.id} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-[#2B4C7E]">{producto.nombre}</p>
                      {producto.colorSeleccionado && (
                        <p className="text-sm text-gray-600">Color: {producto.colorSeleccionado}</p>
                      )}
                      <p className="text-sm text-gray-600">Cantidad: {producto.cantidad}</p>
                    </div>
                    <p className="font-semibold text-[#2B4C7E]">
                      {formatearPrecio(producto.precio * producto.cantidad)}
                    </p>
                  </div>
                ))}
                
                <div className="border-t border-[#9AE6B4] pt-3 mt-3">
                  <div className="flex justify-between items-center text-xl font-bold text-[#2B4C7E]">
                    <span>Total:</span>
                    <span>{formatearPrecio(calcularTotal())}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-[#9AE6B4] bg-opacity-20 rounded-lg">
                <h4 className="font-semibold text-[#2B4C7E] mb-2">📍 Información del showroom</h4>
                <p className="text-sm text-[#2B4C7E]">
                  <strong>Dirección:</strong> Av. Principal 123, Ciudad<br/>
                  <strong>Horarios:</strong> Lun-Sáb 9:00-18:00<br/>
                  <strong>Teléfono:</strong> (011) 1234-5678
                </p>
              </div>
            </div>
          </div>

          {/* Botón de envío */}
          <div className="mt-8 pt-6 border-t border-[#F5F5F5]">
            <button
              onClick={enviarPedido}
              className="w-full bg-[#2B4C7E] hover:bg-[#1A365D] text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
              </svg>
              Enviar pedido por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalPedido;