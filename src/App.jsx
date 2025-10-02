import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import Inicio from './pages/Inicio.jsx';
import Productos from './pages/Productos.jsx';
import Nosotros from './pages/Nosotros.jsx';
import Contacto from './pages/Contacto.jsx';
import './App.css';

function App() {
	return (
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
			</div>
		</Router>
	);
}

export default App;
