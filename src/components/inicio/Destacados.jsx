import { useState, useEffect } from 'react';

const productosDestacados = [
	{
		id: 1,
		nombre: 'Toallón Premium',
		descripcion: 'Suavidad y absorción superior. Ideal para el baño.',
		precio: 2500,
		imagen: '/assets/images/productosKuyen/product31.jpg',
		categoria: 'Toallones',
		descuento: 15,
		rating: 4.8,
		ventas: 127,
		destacado: true,
		caracteristicas: ['100% Algodón', 'Extra Absorbente', 'Secado Rápido']
	},
	{
		id: 2,
		nombre: 'Sábanas 100% Algodón',
		descripcion: 'Descanso y frescura para tus noches.',
		precio: 4200,
		imagen: '/assets/images/productosKuyen/product35.jpg',
		categoria: 'Sábanas',
		descuento: 20,
		rating: 4.9,
		ventas: 89,
		destacado: true,
		caracteristicas: ['1200 Hilos', 'Hipoalergénico', 'Frescura']
	},
	{
		id: 3,
		nombre: 'Acolchado Ultra Liviano',
		descripcion: 'Abrigo sin peso, diseño moderno.',
		precio: 8500,
		imagen: '/assets/images/productosKuyen/product80.jpg',
		categoria: 'Acolchados',
		descuento: 10,
		rating: 4.7,
		ventas: 64,
		destacado: true,
		caracteristicas: ['Ultra Liviano', 'Termorregulador', 'Anti-ácaros']
	},
	{
		id: 4,
		nombre: 'Alfombra Decorativa',
		descripcion: 'Estilo y confort para tus ambientes.',
		precio: 3800,
		imagen: '/assets/images/productosKuyen/product37.jpg',
		categoria: 'Alfombras',
		descuento: 25,
		rating: 4.6,
		ventas: 156,
		destacado: true,
		caracteristicas: ['Antideslizante', 'Fácil Limpieza', 'Diseño Moderno']
	},
];

function Destacados() {
	const [isVisible, setIsVisible] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);
	const [hoveredProduct, setHoveredProduct] = useState(null);

	useEffect(() => {
		const timer = setTimeout(() => setIsVisible(true), 300);
		return () => clearTimeout(timer);
	}, []);

	const renderStars = (rating) => {
		const stars = [];
		const fullStars = Math.floor(rating);
		const hasHalfStar = rating % 1 !== 0;

		for (let i = 0; i < fullStars; i++) {
			stars.push(
				<span key={i} className="text-yellow-400">★</span>
			);
		}

		if (hasHalfStar) {
			stars.push(
				<span key="half" className="text-yellow-400">☆</span>
			);
		}

		const emptyStars = 5 - Math.ceil(rating);
		for (let i = 0; i < emptyStars; i++) {
			stars.push(
				<span key={`empty-${i}`} className="text-gray-300">☆</span>
			);
		}

		return stars;
	};

	return (
		<section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#5DA9E9]/90 via-[#9AE6B4]/40 to-[#2B4C7E]/20 relative overflow-hidden">
			{/* Elementos decorativos de fondo responsivos */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-10 left-4 sm:top-20 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-white/10 rounded-full animate-pulse blur-xl"></div>
				<div className="absolute bottom-10 right-4 sm:bottom-20 sm:right-20 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-white/5 rounded-full animate-pulse delay-1000 blur-xl"></div>
				<div className="absolute top-1/3 right-1/4 w-3 h-3 sm:w-4 sm:h-4 bg-white/20 rotate-45 animate-ping delay-500"></div>
				<div className="absolute bottom-1/3 left-1/4 w-4 h-4 sm:w-6 sm:h-6 bg-white/15 rotate-45 animate-ping delay-1500"></div>
				{/* Ondas decorativas responsivas */}
				<div className="absolute top-0 left-0 w-full h-full">
					<svg className="absolute top-6 right-6 sm:top-10 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-white/10 animate-spin" style={{animationDuration: '20s'}} viewBox="0 0 24 24" fill="currentColor">
						<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
					</svg>
					<svg className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-white/10 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
						<circle cx="12" cy="12" r="10"/>
					</svg>
				</div>
			</div>

			<div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				
				{/* Header de la sección responsivo */}
				<div className={`text-center mb-8 sm:mb-12 md:mb-16 transform transition-all duration-1000 ${
					isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
				}`}>
					<div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 sm:px-6 sm:py-3 rounded-full mb-4 sm:mb-6 border border-white/30 shadow-lg">
						<span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
						<span className="text-xs sm:text-sm font-semibold text-white">Lo Mejor de Kuyen</span>
					</div>
					
					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 leading-tight">
						<span className="text-white drop-shadow-lg">
							Productos Destacados
						</span>
					</h2>
					
					<p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4">
						Descubrí nuestra selección premium de productos más vendidos y mejor valorados por nuestros clientes
					</p>
				</div>

				{/* Carrusel de productos destacados responsivo */}
				<div className="flex flex-col items-center justify-center w-full">
					{/* Contenedor principal del carrusel responsivo */}
					<div className="relative w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl mx-auto">
						{/* Container para mantener altura responsiva */}
						<div className="relative min-h-[500px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[650px]">
							{productosDestacados.map((producto, idx) => (
								<div
									key={producto.id}
									className={`absolute inset-0 transition-all duration-700 ease-in-out ${
										idx === activeIndex 
											? 'opacity-100 scale-100 z-10 transform-none' 
											: 'opacity-0 scale-95 z-0 pointer-events-none'
									}`}
									onMouseEnter={() => setHoveredProduct(producto.id)}
									onMouseLeave={() => setHoveredProduct(null)}
								>
									<div className="group bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-white/20 transform hover:scale-[1.02] hover:-translate-y-2">
										{/* Imagen responsiva */}
										<div className="relative overflow-hidden">
											<img
												src={producto.imagen}
												alt={producto.nombre}
												className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
											/>
											{/* Overlay gradiente */}
											<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
											
											{/* Badge de categoría responsivo */}
											<div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-gradient-to-r from-[#5DA9E9] to-[#2B4C7E] text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg backdrop-blur-sm">
												{producto.categoria}
											</div>
											
											{/* Badge de destacado responsivo */}
											<div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-2 py-1 sm:px-3 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg animate-pulse">
												⭐ TOP
											</div>

											{/* Indicador de rating flotante responsivo */}
											<div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 sm:px-3 sm:py-2 shadow-lg">
												<div className="flex items-center gap-1">
													{renderStars(producto.rating)}
													<span className="text-xs font-semibold text-gray-700 ml-1">
														{producto.rating} ({producto.ventas})
													</span>
												</div>
											</div>

											{/* Botón de vista rápida responsivo */}
											<div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
												hoveredProduct === producto.id ? 'opacity-100' : 'opacity-0'
											}`}>
												<button className="bg-white/95 backdrop-blur-sm text-[#2B4C7E] px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-3 rounded-full font-bold shadow-xl hover:bg-white transition-all duration-200 transform hover:scale-110 border border-[#5DA9E9]/20 text-sm sm:text-base">
													Ver Detalles
												</button>
											</div>
										</div>

										{/* Contenido responsivo */}
										<div className="p-4 sm:p-6 md:p-8">
											{/* Título responsivo */}
											<h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-[#2B4C7E] mb-2 sm:mb-3 group-hover:text-[#5DA9E9] transition-colors leading-tight">
												{producto.nombre}
											</h3>

											{/* Descripción responsiva */}
											<p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed">
												{producto.descripcion}
											</p>

											{/* Características responsivas */}
											<div className="mb-4 sm:mb-6">
												<h4 className="text-xs sm:text-sm font-semibold text-[#2B4C7E] mb-2 sm:mb-3">Características destacadas:</h4>
												<div className="grid grid-cols-1 gap-1 sm:gap-2">
													{producto.caracteristicas.map((caracteristica, index) => (
														<div key={index} className="flex items-center gap-2">
															<div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-[#5DA9E9] to-[#9AE6B4] rounded-full"></div>
															<span className="text-xs sm:text-sm text-gray-700 font-medium">
																{caracteristica}
															</span>
														</div>
													))}
												</div>
											</div>

											{/* Botón de compra responsivo */}
											<button className="w-full bg-gradient-to-r from-[#5DA9E9] via-[#2B4C7E] to-[#5DA9E9] hover:from-[#4A90E2] hover:via-[#1A365D] hover:to-[#4A90E2] text-white px-4 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-sm sm:text-base lg:text-lg">
												<span className="flex items-center justify-center gap-2">
													<svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
													</svg>
													Agregar al Carrito
												</span>
											</button>
										</div>
									</div>
								</div>
							))}
						</div>

						{/* Controles del carrusel responsivos */}
						<div className="flex justify-center items-center gap-4 sm:gap-6 mt-6 sm:mt-8 relative z-20">
							<button
								className="bg-white/90 backdrop-blur-sm text-[#2B4C7E] rounded-full p-2 sm:p-3 shadow-lg sm:shadow-xl hover:bg-white hover:shadow-2xl transition-all duration-300 transform hover:scale-110 border border-[#5DA9E9]/20"
								onClick={() => setActiveIndex((prev) => (prev === 0 ? productosDestacados.length - 1 : prev - 1))}
								aria-label="Anterior"
							>
								<svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
								</svg>
							</button>
							
							{/* Indicadores responsivos */}
							<div className="flex gap-2 sm:gap-3">
								{productosDestacados.map((_, idx) => (
									<button
										key={idx}
										className={`transition-all duration-300 rounded-full ${
											idx === activeIndex 
												? 'w-6 h-2 sm:w-8 sm:h-3 bg-white shadow-lg' 
												: 'w-2 h-2 sm:w-3 sm:h-3 bg-white/40 hover:bg-white/70'
										}`}
										onClick={() => setActiveIndex(idx)}
										aria-label={`Ir a producto ${idx + 1}`}
									/>
								))}
							</div>
							
							<button
								className="bg-white/90 backdrop-blur-sm text-[#2B4C7E] rounded-full p-2 sm:p-3 shadow-lg sm:shadow-xl hover:bg-white hover:shadow-2xl transition-all duration-300 transform hover:scale-110 border border-[#5DA9E9]/20"
								onClick={() => setActiveIndex((prev) => (prev === productosDestacados.length - 1 ? 0 : prev + 1))}
								aria-label="Siguiente"
							>
								<svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
								</svg>
							</button>
						</div>

						{/* Contador de productos responsivo */}
						<div className="text-center mt-4 sm:mt-6">
							<span className="text-white/80 text-xs sm:text-sm font-medium">
								{activeIndex + 1} de {productosDestacados.length}
							</span>
						</div>
					</div>
				</div>

				{/* Call to action final responsivo */}
				<div className={`text-center mt-12 sm:mt-16 md:mt-20 transform transition-all duration-1000 delay-500 ${
					isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
				}`}>
					<div className="bg-white/20 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/30 shadow-2xl">
						<h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-3 sm:mb-4 md:mb-6">
							¿Te gustaron nuestros destacados?
						</h3>
						<p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 px-4">
							Descubre más de 500 productos premium en nuestro catálogo completo
						</p>
						<a 
							href="/productos" 
							className="inline-flex items-center gap-2 sm:gap-3 bg-white text-[#2B4C7E] hover:bg-gray-50 px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-sm sm:text-base lg:text-lg"
						>
							<span>Ver Todos los Productos</span>
							<svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Destacados;
