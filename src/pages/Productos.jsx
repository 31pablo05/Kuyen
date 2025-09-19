import React from 'react';
import CatalogoSheets from '../components/productos/CatalogoSheets.jsx';

function Productos() {
  // Solo modo Inventario Live (Google Sheets)
  // Eliminar estados y lógica de catálogo demo

  // ...existing code...

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#2B4C7E] via-[#5DA9E9] to-[#2B4C7E] py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Nuestros <span className="text-[#9AE6B4]">Productos</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            Descubrí nuestra exclusiva colección de productos para el hogar. 
            <br className="hidden md:block" />
            Calidad premium, diseño elegante y los mejores precios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
              <span className="text-white font-semibold">✨ Productos Exclusivos</span>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
              <span className="text-white font-semibold">💳 Mejores Precios</span>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>

      {/* Catálogo */}
      <div className="relative -mt-10">
        <CatalogoSheets />
      </div>
    </div>
  );
}

export default Productos;
