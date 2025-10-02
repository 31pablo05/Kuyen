import React, { useState } from 'react';
import { ShoppingCart, Check, Heart, Eye, Package, Sparkles } from 'lucide-react';

const ProductCard = ({ producto, formatearPrecio, agregarAlCarrito }) => {
  const [agregado, setAgregado] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleAgregar = () => {
    agregarAlCarrito(producto);
    setAgregado(true);
    setTimeout(() => setAgregado(false), 2000);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div 
      className="group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 border border-gray-100/50 hover:border-blue-200/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Brillo de fondo animado */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#5DA9E9]/50 via-transparent to-[#9AE6B4]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Contenedor de imagen mejorado */}
  <div className="relative h-72 overflow-hidden bg-gradient-to-br from-[#5DA9E9]/10 via-[#9AE6B4]/10 to-white/10">
        {/* Imagen del producto */}
        <img
          src={imageError ? '/assets/images/productosKuyen/product1.jpg' : (producto.variantes ? producto.variantes[0].imagen : '/assets/images/productosKuyen/product1.jpg')}
          alt={producto.nombre}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
          onError={handleImageError}
        />
        
        {/* Overlay gradiente elegante */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-[#5DA9E9]/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
        
        {/* Badges superiores */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
          {/* Badge destacado */}
          {producto.destacado && (
            <div className="flex items-center gap-1.5 bg-gradient-to-r from-[#9AE6B4] to-[#5DA9E9] text-[#2B4C7E] px-3 py-1.5 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm animate-pulse">
              <Sparkles className="w-3 h-3 text-[#2B4C7E]" />
              Destacado
            </div>
          )}
          {/* Badge categoría */}
          <div className="bg-white/95 backdrop-blur-md text-[#2B4C7E] px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg border border-white/50">
            {producto.categoria.charAt(0).toUpperCase() + producto.categoria.slice(1)}
          </div>
        </div>

        {/* Botones de acción flotantes */}
        <div className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
          {/* Botón favorito */}
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="w-10 h-10 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 group/fav"
          >
            <Heart 
              className={`w-5 h-5 transition-all duration-300 ${isFavorite ? 'fill-red-500 text-red-500 scale-110' : 'text-slate-600 group-hover/fav:text-red-500'}`}
            />
          </button>
          
          {/* Botón vista rápida */}
          <button className="w-10 h-10 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 group/eye">
            <Eye className="w-5 h-5 text-slate-600 group-hover/eye:text-blue-600 transition-colors" />
          </button>
        </div>

        {/* Precio destacado con efecto premium */}
        <div className="absolute bottom-4 left-4 z-10">
          <div className="relative">
            {/* Resplandor del precio */}
            <div className="absolute inset-0 bg-[#5DA9E9] blur-xl opacity-50 rounded-2xl"></div>
            {/* Precio */}
            <div className="relative bg-gradient-to-r from-[#5DA9E9] to-[#2B4C7E] text-white px-5 py-2.5 rounded-2xl font-bold text-xl shadow-2xl border border-white/20 backdrop-blur-sm">
              {formatearPrecio(producto.precio)}
            </div>
          </div>
        </div>

        {/* Indicador de colores mejorado */}
        {producto.colores && producto.colores.length > 0 && (
          <div className="absolute bottom-4 right-4 flex gap-1.5 z-10">
            {producto.colores.slice(0, 4).map((color, index) => (
              <div
                key={index}
                className="w-6 h-6 rounded-full border-3 border-white shadow-lg hover:scale-125 transition-transform duration-300 cursor-pointer"
                style={{ backgroundColor: color.toLowerCase() }}
                title={color}
              ></div>
            ))}
            {producto.colores.length > 4 && (
              <div className="w-6 h-6 rounded-full bg-[#2B4C7E] border-3 border-white shadow-lg flex items-center justify-center text-[10px] font-bold text-white hover:scale-125 transition-transform duration-300">
                +{producto.colores.length - 4}
              </div>
            )}
          </div>
        )}

        {/* Barra de progreso de popularidad */}
  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9AE6B4] via-[#5DA9E9] to-[#2B4C7E] transition-all duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
      </div>

      {/* Contenido de la tarjeta */}
      <div className="relative p-6 space-y-4">
        {/* Título y descripción */}
        <div>
          <h3 className="font-bold text-xl text-[#2B4C7E] mb-2 group-hover:text-[#5DA9E9] transition-colors line-clamp-1 leading-tight">
            {producto.nombre}
          </h3>
          <p className="text-sm text-[#2B4C7E]/80 line-clamp-2 leading-relaxed">
            {producto.descripcion}
          </p>
        </div>

        {/* Características en grid */}
        <div className="grid grid-cols-2 gap-2">
          {/* Medidas */}
          <div className="flex items-center gap-2 bg-[#E3F4FD] rounded-xl px-3 py-2 hover:bg-[#B3E0F7] transition-colors">
            <div className="w-8 h-8 bg-gradient-to-br from-[#5DA9E9] to-[#2B4C7E] rounded-lg flex items-center justify-center flex-shrink-0">
              <Package className="w-4 h-4 text-[#2B4C7E]" />
            </div>
            <span className="text-xs text-[#2B4C7E] font-medium truncate">{producto.medidas}</span>
          </div>

          {/* Variantes */}
          {producto.variantes && producto.variantes.length > 1 && (
            <div className="flex items-center gap-2 bg-[#E6F9F0] rounded-xl px-3 py-2 hover:bg-[#9AE6B4]/40 transition-colors">
              <div className="w-8 h-8 bg-gradient-to-br from-[#9AE6B4] to-[#5DA9E9] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-lg">🔄</span>
              </div>
              <span className="text-xs font-medium truncate" style={{color: '#68D391'}}>{producto.variantes.length} modelos</span>
            </div>
          )}

          {/* Colores */}
          {producto.colores && (
            <div className="flex items-center gap-2 bg-[#E6F9F0] rounded-xl px-3 py-2 hover:bg-[#9AE6B4]/40 transition-colors">
              <div className="w-8 h-8 bg-gradient-to-br from-[#9AE6B4] to-[#5DA9E9] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-lg">🎨</span>
              </div>
              <span className="text-xs font-medium truncate" style={{color: '#68D391'}}>{producto.colores.length} {producto.colores.length === 1 ? 'color' : 'colores'}</span>
            </div>
          )}

          {/* Stock */}
          <div className="flex items-center gap-2 bg-[#E6F9F0] rounded-xl px-3 py-2 hover:bg-[#9AE6B4]/40 transition-colors">
            <div className="w-8 h-8 bg-gradient-to-br from-[#9AE6B4] to-[#5DA9E9] rounded-lg flex items-center justify-center flex-shrink-0">
              <Check className="w-4 h-4 text-[#68D391]" />
            </div>
            <span className="text-xs font-medium truncate" style={{color: '#68D391'}}>En stock</span>
          </div>
        </div>

        {/* Botón agregar mejorado */}
        <button
          onClick={handleAgregar}
          disabled={agregado}
          className={`w-full relative overflow-hidden rounded-2xl font-bold transition-all duration-500 flex items-center justify-center gap-2 group/btn ${
            agregado 
              ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 scale-95' 
              : 'bg-gradient-to-r from-[#68D391] via-[#5DA9E9] to-[#2B4C7E] hover:from-[#5DA9E9] hover:via-[#68D391] hover:to-[#2B4C7E] text-white py-4 hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-blue-500/50'
          }`}
        >
          {/* Efecto de brillo que se mueve */}
          {!agregado && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
          )}
          
          <div className="relative flex items-center gap-2">
            {agregado ? (
              <>
                <Check className="w-5 h-5 animate-bounce" />
                <span className="text-base">¡Agregado exitosamente!</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-5 h-5 group-hover/btn:animate-pulse" />
                <span className="text-base">Agregar al carrito</span>
              </>
            )}
          </div>
        </button>

        {/* Footer informativo (sin envío gratis) */}
        <div className="flex items-center justify-center gap-4 pt-3 border-t border-gray-100">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-blue-600 transition-colors cursor-pointer">
            <span className="text-base">💬</span>
            <span className="font-medium">Consulta</span>
          </div>
          <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-blue-600 transition-colors cursor-pointer">
            <span className="text-base">🔒</span>
            <span className="font-medium">Compra segura</span>
          </div>
        </div>
      </div>

      {/* Efecto de esquina decorativo */}
  <div className="absolute top-0 right-0 w-20 h-20 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'linear-gradient(135deg, #9AE6B410 0%, #5DA9E910 100%)', borderBottomLeftRadius: '9999px', opacity: 0}}></div>
    </div>
  );
};

export default ProductCard;