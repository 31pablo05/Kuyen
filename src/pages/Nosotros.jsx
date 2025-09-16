function Nosotros() {
  return (
    <div className="w-full mx-auto px-4 md:px-8 lg:px-16 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Sobre Nosotros</h1>
        <p className="text-xl text-blue-800 max-w-3xl mx-auto">
          Kuyen es más que una blanquería. Somos una empresa familiar que desde hace más de 20 años 
          se dedica a brindar productos de calidad para el hogar.
        </p>
      </section>

      {/* Historia */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Nuestra Historia</h2>
          <p className="text-gray-700 mb-4">
            Fundada en 2003, Kuyen nació del sueño de crear un espacio donde las familias pudieran 
            encontrar todo lo necesario para hacer de sus hogares un lugar acogedor y hermoso.
          </p>
          <p className="text-gray-700 mb-4">
            Comenzamos como una pequeña tienda local y, gracias a la confianza de nuestros clientes, 
            hemos crecido hasta convertirnos en referentes en blanquería y artículos para el hogar.
          </p>
          <p className="text-gray-700">
            Hoy continuamos con la misma pasión del primer día: ofrecer productos de calidad 
            con un servicio personalizado y cercano.
          </p>
        </div>
        <div className="flex justify-center">
          <img 
            src="/public/assets/react.svg" 
            alt="Historia de Kuyen" 
            className="w-full max-w-md h-80 object-cover rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Nuestra Misión</h3>
          <p className="text-gray-700">
            Brindar productos de blanquería y artículos para el hogar de la más alta calidad, 
            acompañando a nuestros clientes en la creación de espacios únicos y confortables.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Nuestra Visión</h3>
          <p className="text-gray-700">
            Ser la blanquería de referencia, reconocida por la excelencia en productos, 
            atención personalizada e innovación constante en diseño y calidad.
          </p>
        </div>
      </section>

      {/* Valores */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Nuestros Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏆</span>
            </div>
            <h4 className="text-xl font-semibold text-blue-900 mb-2">Calidad</h4>
            <p className="text-gray-700">
              Seleccionamos cuidadosamente cada producto para garantizar la mejor calidad.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h4 className="text-xl font-semibold text-blue-900 mb-2">Confianza</h4>
            <p className="text-gray-700">
              Construimos relaciones duraderas basadas en la transparencia y honestidad.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💡</span>
            </div>
            <h4 className="text-xl font-semibold text-blue-900 mb-2">Innovación</h4>
            <p className="text-gray-700">
              Constantemente actualizamos nuestro catálogo con las últimas tendencias.
            </p>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-12">Nuestro Equipo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <img 
              src="/public/assets/react.svg" 
              alt="María González" 
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h4 className="text-xl font-semibold text-blue-900 mb-2">María González</h4>
            <p className="text-blue-700 mb-2">Fundadora y Directora</p>
            <p className="text-gray-700 text-sm">
              Más de 20 años de experiencia en el sector textil y diseño de interiores.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <img 
              src="/public/assets/react.svg" 
              alt="Carlos Rodríguez" 
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h4 className="text-xl font-semibold text-blue-900 mb-2">Carlos Rodríguez</h4>
            <p className="text-blue-700 mb-2">Gerente de Ventas</p>
            <p className="text-gray-700 text-sm">
              Especialista en atención al cliente y asesoramiento personalizado.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <img 
              src="/public/assets/react.svg" 
              alt="Ana Martínez" 
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h4 className="text-xl font-semibold text-blue-900 mb-2">Ana Martínez</h4>
            <p className="text-blue-700 mb-2">Diseñadora de Productos</p>
            <p className="text-gray-700 text-sm">
              Encargada de la selección y diseño de nuevos productos para el catálogo.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Nosotros;
