import FormularioContacto from '../components/contacto/FormularioContacto.jsx';
import InfoContacto from '../components/contacto/InfoContacto.jsx';

function Contacto() {
  return (
    <div className="w-full mx-auto px-4 md:px-8 lg:px-16 py-12 bg-gradient-to-br from-[#F5F5F5] via-white to-[#11b189]/5 min-h-screen relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#2563eb]/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-40 h-40 bg-[#11b189]/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-[#182e59]/10 rounded-full blur-lg animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#2563eb] rotate-45 animate-ping delay-700"></div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-[#11b189] rotate-45 animate-ping delay-1200"></div>
      </div>

      {/* Header */}
      <div className="text-center mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2563eb]/10 to-[#11b189]/10 px-6 py-2 rounded-full mb-4 border border-[#2563eb]/20">
          <span className="w-2 h-2 bg-[#2563eb] rounded-full animate-pulse"></span>
          <span className="text-sm font-medium text-[#111d3b]">Hablemos</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-[#2563eb] via-[#182e59] to-[#11b189] bg-clip-text text-transparent animate-gradient bg-300%">
          Contactanos
        </h1>
        <p className="text-lg md:text-xl text-[#111d3b] max-w-2xl mx-auto font-semibold drop-shadow-sm">
          ¿Tenés dudas sobre nuestros productos? ¿Querés hacer un pedido especial? 
          Estamos aquí para ayudarte. Ponete en contacto con nosotros.
        </p>
      </div>

      {/* Contenido principal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        {/* Formulario */}
        <div className="relative">
          {/* Fondo decorativo para el formulario */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb]/5 via-white/80 to-[#11b189]/5 backdrop-blur-sm rounded-3xl border border-[#2563eb]/20 shadow-xl"></div>
          <div className="relative z-10">
            <FormularioContacto />
          </div>
        </div>

        {/* Información de contacto */}
        <div className="relative">
          {/* Fondo decorativo para la info de contacto */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#11b189]/5 via-white/80 to-[#2563eb]/5 backdrop-blur-sm rounded-3xl border border-[#11b189]/20 shadow-xl"></div>
          <div className="relative z-10">
            <InfoContacto />
          </div>
        </div>
      </div>

      {/* Sección adicional */}
      <div className="mt-16 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2563eb]/10 to-[#11b189]/10 px-6 py-2 rounded-full mb-6 border border-[#2563eb]/20">
          <span className="w-2 h-2 bg-[#11b189] rounded-full animate-pulse"></span>
          <span className="text-sm font-medium text-[#111d3b]">Ventajas</span>
        </div>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 bg-gradient-to-r from-[#182e59] via-[#2563eb] to-[#11b189] bg-clip-text text-transparent">
          ¿Por qué elegirnos?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="group transform transition-all duration-500 hover:scale-105">
            <div className="bg-gradient-to-br from-[#2563eb]/10 via-white/90 to-[#11b189]/10 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-[#2563eb]/20 hover:shadow-2xl transition-all duration-500 hover:border-[#2563eb]/40">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2563eb]/30 to-[#11b189]/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-[#2563eb] to-[#182e59] rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:rotate-12">
                  <span className="text-2xl filter drop-shadow-sm">💳</span>
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#111d3b] mb-2 group-hover:text-[#2563eb] transition-colors duration-300">
                Pagos seguros
              </h3>
              <p className="text-[#111d3b]/80 font-medium">Múltiples medios de pago disponibles</p>
            </div>
          </div>
          
          <div className="group transform transition-all duration-500 hover:scale-105 delay-100">
            <div className="bg-gradient-to-br from-[#11b189]/10 via-white/90 to-[#2563eb]/10 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-[#11b189]/20 hover:shadow-2xl transition-all duration-500 hover:border-[#11b189]/40">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-[#11b189]/30 to-[#2563eb]/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-[#11b189] to-[#4093bc] rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:rotate-12">
                  <span className="text-2xl filter drop-shadow-sm">⭐</span>
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#111d3b] mb-2 group-hover:text-[#2563eb] transition-colors duration-300">
                Calidad garantizada
              </h3>
              <p className="text-[#111d3b]/80 font-medium">Productos seleccionados cuidadosamente</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}export default Contacto;
