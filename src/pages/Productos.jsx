import React, { useState, useEffect } from 'react';
import { Sparkles, ShoppingBag, MessageCircle, TrendingUp, Award, Zap } from 'lucide-react';
import CatalogoEstatico from '../components/productos/CatalogoEstatico.jsx';

function Productos() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
      {/* Hero Section Premium */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Patrón de fondo animado */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Gradientes decorativos animados */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Partículas flotantes decorativas */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/5 rounded-full backdrop-blur-sm"
              style={{
                width: `${Math.random() * 60 + 20}px`,
                height: `${Math.random() * 60 + 20}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>

        {/* Contenido principal del hero */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          {/* ...badge eliminado... */}

          {/* Título principal con animación */}
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
              Nuestros{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                  Productos
                </span>
                {/* Subrayado decorativo */}
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 blur-lg opacity-50"></div>
              </span>
            </h1>
            
            {/* Subtítulo elegante */}
            <p className="text-xl md:text-2xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed font-light">
              Descubrí nuestra exclusiva colección de productos premium para el hogar.
              <br className="hidden md:block" />
              <span className="text-emerald-300 font-medium">Calidad excepcional</span> al alcance de tu mano.
            </p>
          </div>

          {/* Estadísticas destacadas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-12">
            {/* Stat 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-sm text-blue-200">Productos</div>
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">98%</div>
                  <div className="text-sm text-blue-200">Satisfacción</div>
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">24h</div>
                  <div className="text-sm text-blue-200">Respuesta</div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* CTA Principal */}
            <button
              className="group relative bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-3 overflow-hidden"
              onClick={() => {
                const catalogoSection = document.querySelector('.relative.-mt-1');
                if (catalogoSection) {
                  catalogoSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {/* Efecto de brillo */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <ShoppingBag className="w-5 h-5 relative z-10" />
              <span className="relative z-10 text-lg">Ver Catálogo Completo</span>
            </button>

            {/* CTA Secundario */}
            <a
              href="https://wa.me/5492804325023"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
            >
              <MessageCircle className="w-5 h-5 group-hover:animate-bounce" />
              <span className="text-lg">Consultar por WhatsApp</span>
            </a>
          </div>

          {/* Tags de beneficios (sin envíos a todo el país) */}
          <div className="flex flex-wrap gap-3 justify-center items-center mt-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-white/80 text-sm font-medium hover:bg-white/10 transition-colors cursor-default">
              ✨ Productos Exclusivos
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-white/80 text-sm font-medium hover:bg-white/10 transition-colors cursor-default">
              💬 Atención personalizada
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-white/80 text-sm font-medium hover:bg-white/10 transition-colors cursor-default">
              🔒 Compra segura
            </div>
          </div>
        </div>

        {/* Onda decorativa inferior */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="rgb(248, 250, 252)" fillOpacity="1"></path>
          </svg>
        </div>
      </div>

      {/* Catálogo con transición suave */}
      <div className="relative -mt-1 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
        <CatalogoEstatico />
      </div>

      {/* Animación CSS personalizada */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-15px) translateX(5px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}

export default Productos;