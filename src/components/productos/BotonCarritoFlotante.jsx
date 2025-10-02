import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

const BotonCarritoFlotante = ({ cantidadTotal = 3, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative">
        {/* Botón principal con efecto glassmorphism */}
        <button
          onClick={onClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative group"
          aria-label={`Carrito de compras con ${cantidadTotal} productos`}
        >
          {/* Círculo de fondo con glassmorphism */}
          <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 shadow-2xl transition-all duration-500 hover:shadow-blue-500/50 hover:scale-110">
            {/* Capa de brillo glassmorphism */}
            <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"></div>
            
            {/* Ondas de pulso animadas */}
            <div className="absolute inset-0 rounded-full bg-blue-400/30 animate-ping"></div>
            <div 
              className={`absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/40 to-purple-500/40 transition-all duration-700 ${
                isHovered ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
              }`}
            ></div>
            
            {/* Icono del carrito */}
            <div className="absolute inset-0 flex items-center justify-center">
              <ShoppingCart 
                className={`w-7 h-7 text-white transition-all duration-500 ${
                  isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
                }`}
                strokeWidth={2.5}
              />
            </div>

            {/* Partículas decorativas */}
            <div className={`absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full transition-all duration-300 ${
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}></div>
            <div className={`absolute -bottom-2 -left-1 w-1.5 h-1.5 bg-pink-300 rounded-full transition-all duration-500 delay-75 ${
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}></div>
          </div>

          {/* Badge contador con animación */}
          {cantidadTotal > 0 && (
            <div className="absolute -top-1 -right-1 min-w-[26px] h-6 flex items-center justify-center">
              {/* Resplandor del badge */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400 to-pink-500 blur-md opacity-75 animate-pulse"></div>
              
              {/* Badge principal */}
              <div className="relative bg-gradient-to-r from-red-500 to-pink-600 text-white text-xs font-bold rounded-full px-2 py-0.5 shadow-lg border-2 border-white transform transition-all duration-300 hover:scale-110">
                <span className="relative z-10">{cantidadTotal > 99 ? '99+' : cantidadTotal}</span>
              </div>
            </div>
          )}
        </button>

        {/* Tooltip moderno */}
        <div 
          className={`absolute bottom-full right-0 mb-4 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
          }`}
        >
          <div className="relative">
            {/* Contenedor del tooltip con glassmorphism */}
            <div className="bg-gray-900/95 backdrop-blur-md text-white text-sm rounded-2xl py-3 px-4 shadow-2xl border border-white/10 whitespace-nowrap">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="font-medium">
                  {cantidadTotal === 0 ? 'Tu carrito está vacío' : 
                   cantidadTotal === 1 ? '1 producto en tu carrito' : 
                   `${cantidadTotal} productos en tu carrito`}
                </span>
              </div>
              
              {/* Flecha del tooltip */}
              <div className="absolute top-full right-6 -mt-px">
                <div className="border-8 border-transparent border-t-gray-900/95"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Texto "Ver carrito" que aparece al hacer hover */}
        <div 
          className={`absolute top-1/2 right-full -translate-y-1/2 mr-4 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
          }`}
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-full py-2 px-5 shadow-xl border border-white/20 whitespace-nowrap">
            Ver carrito
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotonCarritoFlotante;