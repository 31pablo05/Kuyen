// Función para generar mensaje de WhatsApp mejorado y profesional
export function generarMensajeWhatsApp(carrito, datosCliente) {
  let mensaje = `Hola! Me interesa comprar estos productos, ¿los tendrás disponibles?\n\n`;
  carrito.forEach((item, index) => {
    mensaje += `${index + 1}. ${item.nombre} (${item.cantidad} ${item.cantidad === 1 ? 'unidad' : 'unidades'})\n`;
    // Agregar URL de imagen si existe
    let imagenUrl = '';
    if (item.variantes && item.variantes[0] && item.variantes[0].imagen) {
      imagenUrl = item.variantes[0].imagen;
    } else {
      imagenUrl = '/assets/images/productosKuyen/product1.jpg';
    }
    // Si la imagen es relativa, convertir a absoluta
    if (typeof window !== 'undefined' && imagenUrl.startsWith('/')) {
      imagenUrl = window.location.origin + imagenUrl;
    }
    mensaje += `Imagen: ${imagenUrl}\n`;
  });
  mensaje += `\nDatos de contacto:\n`;
  mensaje += `Nombre: ${datosCliente.nombre}\n`;
  mensaje += `Email: ${datosCliente.email}\n`;
  mensaje += `Forma de pago: ${datosCliente.formaPago}\n`;
  mensaje += `\n¿Me podrías confirmar stock y precio? Gracias!`;

  const numeroWhatsApp = '5492804325023';
  const mensajeCodificado = encodeURIComponent(mensaje);
  return `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
}