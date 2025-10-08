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
			<div className="w-full py-8 md:py-16 px-2 md:px-4 bg-gradient-to-br from-slate-50 via-white to-[#11b189]/5">
				<CTA />
			</div>
		</div>
	);
}

export default Inicio;