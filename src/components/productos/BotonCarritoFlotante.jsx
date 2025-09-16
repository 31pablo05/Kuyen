import { useCarrito } from '../../context/CarritoContext.jsx';

function BotonCarritoFlotante() {
  const { productosCarrito, obtenerCantidadTotal, setModalCarritoAbierto } = useCarrito();

  if (productosCarrito.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setModalCarritoAbierto(true)}
        className="bg-[#2B4C7E] hover:bg-[#1A365D] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center gap-3"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
        </svg>
        <span className="bg-[#9AE6B4] text-[#2B4C7E] rounded-full px-2 py-1 text-sm font-bold min-w-[24px] text-center">
          {obtenerCantidadTotal()}
        </span>
      </button>
    </div>
  );
}

export default BotonCarritoFlotante;