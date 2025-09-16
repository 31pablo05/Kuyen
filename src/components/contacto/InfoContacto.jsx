function InfoContacto() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h3 className="text-2xl font-bold text-blue-900 mb-6">Información de contacto</h3>
      
      <div className="space-y-6">
        {/* Dirección */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-900 mb-1">Dirección</h4>
            <p className="text-gray-600">Av. Principal 123</p>
            <p className="text-gray-600">Ciudad Autónoma de Buenos Aires</p>
            <p className="text-gray-600">Argentina</p>
          </div>
        </div>

        {/* Teléfono */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-900 mb-1">Teléfono</h4>
            <p className="text-gray-600">(011) 1234-5678</p>
            <p className="text-gray-600">WhatsApp: +54 9 11 1234-5678</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-900 mb-1">Email</h4>
            <p className="text-gray-600">info@kuyen.com</p>
            <p className="text-gray-600">ventas@kuyen.com</p>
          </div>
        </div>

        {/* Horarios */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-900 mb-1">Horarios de atención</h4>
            <p className="text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>
            <p className="text-gray-600">Sábados: 9:00 - 15:00</p>
            <p className="text-gray-600">Domingos: Cerrado</p>
          </div>
        </div>
      </div>

      {/* Mapa (placeholder) */}
      <div className="mt-8">
        <h4 className="text-lg font-semibold text-blue-900 mb-4">Ubicación</h4>
        <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Mapa de ubicación</p>
        </div>
      </div>
    </div>
  );
}

export default InfoContacto;