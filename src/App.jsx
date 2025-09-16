import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext.jsx';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import Inicio from './pages/Inicio.jsx';
import Productos from './pages/Productos.jsx';
import Nosotros from './pages/Nosotros.jsx';
import Contacto from './pages/Contacto.jsx';
import BotonCarritoFlotante from './components/productos/BotonCarritoFlotante.jsx';
import ModalCarrito from './components/productos/ModalCarrito.jsx';
import ModalPedido from './components/productos/ModalPedido.jsx';
import './App.css';

function App() {
	return (
		<CarritoProvider>
			<Router>
				<div className="flex flex-col min-h-screen bg-gray-50">
					<Navbar />
					<main className="flex-1">
						<Routes>
							<Route path="/" element={<Inicio />} />
							<Route path="/productos" element={<Productos />} />
							<Route path="/nosotros" element={<Nosotros />} />
							<Route path="/contacto" element={<Contacto />} />
						</Routes>
					</main>
					<Footer />
					
					{/* Componentes del carrito */}
					<BotonCarritoFlotante />
					<ModalCarrito />
					<ModalPedido />
				</div>
			</Router>
		</CarritoProvider>
	);
}

export default App;
