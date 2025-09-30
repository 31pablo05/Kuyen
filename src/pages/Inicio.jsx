import Herosection from '../components/inicio/Herosection.jsx';
import Destacados from '../components/inicio/Destacados.jsx';
import PorqueElegirnos from '../components/inicio/PorqueElegirnos.jsx';
import CTA from '../components/inicio/CTA.jsx';

function Inicio() {
	return (
		<div className="w-full">
			<Herosection />
			<Destacados />
			<PorqueElegirnos />
			<CTA />
		</div>
	);
}

export default Inicio;