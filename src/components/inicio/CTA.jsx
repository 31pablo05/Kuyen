function CTA() {
  return (
    <section className="w-full max-w-4xl mx-auto py-8 px-4 sm:px-8 flex flex-col items-center bg-gradient-to-r from-[#9AE6B4] to-[#5DA9E9] rounded-xl shadow-lg mt-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2B4C7E] mb-4 text-center sm:text-left w-full sm:w-auto">¡Descubrí la calidad de Kuyen!</h2>
      <p className="text-base sm:text-lg text-[#2B4C7E] mb-4 text-center max-w-2xl opacity-90">
        Renová tu hogar con nuestros productos: toallones, sábanas, acolchados, alfombras, mochilas y cortinas.<br />
        Calidad, diseño y precio en un solo lugar.<br />
        <span className="block mt-4 text-lg sm:text-xl font-semibold text-[#1A365D]">Los fines de semana estamos en la <span className="bg-white/40 px-2 py-1 rounded">feria del barrio San Martín</span> con los mejores precios.</span>
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 w-full justify-center">
        <a 
          href="https://wa.me/542804325023" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-lg font-semibold shadow-lg hover:bg-[#128C7E] hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2C6.477 2 2 6.477 2 12c0 1.624.39 3.207 1.13 4.627L2 22l5.486-1.115A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.47 0-2.902-.404-4.14-1.168l-.295-.178-3.252.661.662-3.17-.19-.325C4.404 14.902 4 13.47 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.297-6.255c-.237-.119-1.398-.688-1.615-.767-.217-.08-.375-.119-.532.119-.158.237-.61.767-.748.924-.138.158-.276.178-.513.06-.237-.119-1.002-.369-1.91-1.176-.706-.63-1.184-1.406-1.323-1.643-.138-.237-.015-.365.104-.484.107-.106.237-.276.355-.414.119-.138.158-.237.237-.395.079-.158.04-.296-.02-.414-.06-.119-.532-1.287-.729-1.762-.192-.462-.388-.399-.532-.406-.138-.007-.296-.009-.454-.009-.158 0-.414.06-.63.296-.217.237-.827.808-.827 1.969 0 1.161.846 2.285.963 2.444.119.158 1.666 2.547 4.037 3.463.565.194 1.005.31 1.35.397.567.144 1.083.124 1.491.075.455-.054 1.398-.572 1.597-1.126.198-.553.198-1.027.139-1.126-.06-.099-.217-.158-.454-.277z"/></svg>
          2804 325023
        </a>
        <a 
          href="/productos" 
          className="px-8 py-4 bg-[#2B4C7E] text-white rounded-lg font-semibold shadow-lg hover:bg-[#1A365D] hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center"
        >
          Ver productos
        </a>
      </div>
    </section>
  );
}export default CTA;
