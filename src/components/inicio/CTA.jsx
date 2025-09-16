function CTA() {
  return (
    <section className="w-full py-10 flex flex-col items-center bg-gradient-to-r from-[#9AE6B4] to-[#5DA9E9] rounded-xl shadow-lg mt-8">
      <h2 className="text-3xl font-bold text-[#2B4C7E] mb-4">¡Descubrí la calidad de Kuyen!</h2>
      <p className="text-lg text-[#2B4C7E] mb-6 text-center max-w-xl opacity-90">
        Renová tu hogar con nuestros productos: toallones, sábanas, acolchados, alfombras, mochilas y cortinas. Calidad, diseño y precio en un solo lugar.
      </p>
      <a 
        href="/productos" 
        className="px-8 py-4 bg-[#2B4C7E] text-white rounded-lg font-semibold shadow-lg hover:bg-[#1A365D] hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        Ver productos
      </a>
    </section>
  );
}export default CTA;
