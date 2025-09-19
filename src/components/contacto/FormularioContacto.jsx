import { useState } from 'react';

function FormularioContacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
    acepto: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Crear el mensaje para WhatsApp
    const mensaje = `
🏪 *NUEVO CONTACTO - KUYEN BLANQUERÍA*

👤 *Nombre:* ${formData.nombre}
📧 *Email:* ${formData.email}
📱 *Teléfono:* ${formData.telefono || 'No proporcionado'}
📋 *Asunto:* ${formData.asunto}

💬 *Mensaje:*
${formData.mensaje}

---
Enviado desde la web de Kuyen
    `.trim();

    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // Crear URL de WhatsApp
    const urlWhatsApp = `https://wa.me/542804325023?text=${mensajeCodificado}`;
    
    // Abrir WhatsApp
    window.open(urlWhatsApp, '_blank');
    
    // Resetear formulario
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      asunto: '',
      mensaje: '',
      acepto: false
    });
    
    alert('¡Formulario enviado! Te redirigimos a WhatsApp para completar el contacto.');
  };

  return (
    <div className="bg-gradient-to-br from-white/90 via-[#5DA9E9]/5 to-[#9AE6B4]/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-[#5DA9E9]/20 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#5DA9E9]/10 to-[#9AE6B4]/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-[#9AE6B4]/10 to-[#5DA9E9]/10 rounded-full blur-xl"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-[#5DA9E9] to-[#2B4C7E] rounded-xl flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#2B4C7E] to-[#5DA9E9] bg-clip-text text-transparent">
            Envíanos un mensaje
          </h3>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group">
              <label htmlFor="nombre" className="block text-sm font-semibold text-[#2B4C7E] mb-2">
                Nombre completo *
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-[#5DA9E9]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5DA9E9]/50 focus:border-[#5DA9E9] transition-all duration-300 group-hover:border-[#5DA9E9]/50"
                  placeholder="Tu nombre completo"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#5DA9E9]/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
            
            <div className="group">
              <label htmlFor="email" className="block text-sm font-semibold text-[#2B4C7E] mb-2">
                Email *
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-[#5DA9E9]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5DA9E9]/50 focus:border-[#5DA9E9] transition-all duration-300 group-hover:border-[#5DA9E9]/50"
                  placeholder="tu@email.com"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#5DA9E9]/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          </div>

          <div className="group">
            <label htmlFor="telefono" className="block text-sm font-semibold text-[#2B4C7E] mb-2">
              Teléfono
            </label>
            <div className="relative">
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-[#5DA9E9]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5DA9E9]/50 focus:border-[#5DA9E9] transition-all duration-300 group-hover:border-[#5DA9E9]/50"
                placeholder="(011) 1234-5678"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#5DA9E9]/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>

          <div className="group">
            <label htmlFor="asunto" className="block text-sm font-semibold text-[#2B4C7E] mb-2">
              Asunto *
            </label>
            <div className="relative">
              <select
                id="asunto"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-[#5DA9E9]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5DA9E9]/50 focus:border-[#5DA9E9] transition-all duration-300 group-hover:border-[#5DA9E9]/50 appearance-none"
              >
                <option value="">Selecciona un asunto</option>
                <option value="consulta">Consulta general</option>
                <option value="presupuesto">Solicitar presupuesto</option>
                <option value="producto">Consulta sobre producto</option>
                <option value="envio">Información de envío</option>
                <option value="reclamo">Reclamo o devolución</option>
                <option value="otro">Otro</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-[#5DA9E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#5DA9E9]/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>

          <div className="group">
            <label htmlFor="mensaje" className="block text-sm font-semibold text-[#2B4C7E] mb-2">
              Mensaje *
            </label>
            <div className="relative">
              <textarea
                id="mensaje"
                name="mensaje"
                rows="5"
                value={formData.mensaje}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-[#5DA9E9]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5DA9E9]/50 focus:border-[#5DA9E9] transition-all duration-300 group-hover:border-[#5DA9E9]/50 resize-none"
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
              <div className="absolute inset-0 bg-gradient-to-r from-[#5DA9E9]/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>

          <div className="flex items-center group">
            <div className="relative">
              <input
                id="acepto"
                name="acepto"
                type="checkbox"
                checked={formData.acepto}
                onChange={handleChange}
                required
                className="h-5 w-5 text-[#5DA9E9] focus:ring-[#5DA9E9] border-2 border-[#5DA9E9]/30 rounded-md transition-all duration-300"
              />
            </div>
            <label htmlFor="acepto" className="ml-3 block text-sm text-[#2B4C7E] font-medium">
              Acepto la política de privacidad y términos de uso *
            </label>
          </div>

          <button
            type="submit"
            className="group relative w-full bg-gradient-to-r from-[#5DA9E9] via-[#2B4C7E] to-[#5DA9E9] hover:from-[#4A90E2] hover:via-[#1A365D] hover:to-[#4A90E2] text-white font-bold py-4 px-6 rounded-xl transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center justify-center gap-3">
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.624.39 3.207 1.13 4.627L2 22l5.486-1.115A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.47 0-2.902-.404-4.14-1.168l-.295-.178-3.252.661.662-3.17-.19-.325C4.404 14.902 4 13.47 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.297-6.255c-.237-.119-1.398-.688-1.615-.767-.217-.08-.375-.119-.532.119-.158.237-.61.767-.748.924-.138.158-.276.178-.513.06-.237-.119-1.002-.369-1.91-1.176-.706-.63-1.184-1.406-1.323-1.643-.138-.237-.015-.365.104-.484.107-.106.237-.276.355-.414.119-.138.158-.237.237-.395.079-.158.04-.296-.02-.414-.06-.119-.532-1.287-.729-1.762-.192-.462-.388-.399-.532-.406-.138-.007-.296-.009-.454-.009-.158 0-.414.06-.63.296-.217.237-.827.808-.827 1.969 0 1.161.846 2.285.963 2.444.119.158 1.666 2.547 4.037 3.463.565.194 1.005.31 1.35.397.567.144 1.083.124 1.491.075.455-.054 1.398-.572 1.597-1.126.198-.553.198-1.027.139-1.126-.06-.099-.217-.158-.454-.277z"/>
              </svg>
              Enviar por WhatsApp
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormularioContacto;