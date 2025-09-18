import React from 'react';
import CatalogoSheets from '../components/productos/CatalogoSheets.jsx';

function Productos() {
  // Solo modo Inventario Live (Google Sheets)
  // Eliminar estados y lógica de catálogo demo

  // ...existing code...

  return (
    <div className="w-full mx-auto px-4 md:px-8 lg:px-16 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Nuestros Productos
        </h1>
        <p className="text-xl text-blue-800 max-w-2xl mx-auto mb-8">
          Descubrí nuestra amplia selección de productos para el hogar. 
          Calidad, diseño y precio en cada artículo.
        </p>
        <p className="text-sm text-gray-500 mt-4">
          🔄 Conectado a Google Sheets - Stock en tiempo real
        </p>
      </div>
      {/* Solo modo Inventario Live */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 mb-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-[#2B4C7E] mb-2">
            🚀 Modo Inventario en Tiempo Real
          </h2>
          <p className="text-gray-600">
            Los productos se cargan directamente desde Google Sheets. 
            Stock y precios actualizados automáticamente.
          </p>
        </div>
        <CatalogoSheets />
      </div>
    </div>
  );
}

export default Productos;
