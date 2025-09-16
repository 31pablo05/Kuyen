import FormularioContacto from '../components/contacto/FormularioContacto.jsx';
import InfoContacto from '../components/contacto/InfoContacto.jsx';

function Contacto() {
  return (
    <div className="w-full mx-auto px-4 md:px-8 lg:px-16 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Contactanos
        </h1>
        <p className="text-xl text-blue-800 max-w-2xl mx-auto">
          ¿Tenés dudas sobre nuestros productos? ¿Querés hacer un pedido especial? 
          Estamos aquí para ayudarte. Ponete en contacto con nosotros.
        </p>
      </div>

      {/* Contenido principal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Formulario */}
        <div>
          <FormularioContacto />
        </div>

        {/* Información de contacto */}
        <div>
          <InfoContacto />
        </div>
      </div>

      {/* Sección adicional */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">¿Por qué elegirnos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚚</span>
            </div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Envío gratis</h3>
            <p className="text-gray-600">En compras superiores a $5.000</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💳</span>
            </div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Pagos seguros</h3>
            <p className="text-gray-600">Múltiples medios de pago disponibles</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⭐</span>
            </div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Calidad garantizada</h3>
            <p className="text-gray-600">Productos seleccionados cuidadosamente</p>
          </div>
        </div>
      </div>
    </div>
  );
}export default Contacto;
