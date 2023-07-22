//React
import PropTypes from "prop-types";
import { useState } from "react";

//Styles
import "../../styles/pages/creations/creations.css";

//Composants
import MenuDeNavigation from "../../components/navigation/menu_de_navigation/menu_de_navigation";
import HeaderAvecFiltres from "../../components/general/header_avec_filtres/header_avec_filtres";
import Card from "../../components/creations/card/card";

//Data
import creations from "../../data/creations";

const PageCreations = ({ theme, setTheme }) => {
	const [visibles, modifierVisibles] = useState([
		"Programmation",
		"Design",
		"Films",
	]);
	return (
		<div className="creations_page">
			<MenuDeNavigation
				theme={theme}
				arborescence={["Créations"]}
				setTheme={setTheme}
			/>
			<div className="creations_page__header">
				<HeaderAvecFiltres
					type="Mes créations"
					theme={theme}
					visibles={visibles}
					modifierVisibles={modifierVisibles}
				/>
			</div>
			<div className="creations_page__container_projets">
				{creations.map(
					(projet, index) =>
						visibles.includes(projet.theme) && (
							<Card projet={projet} theme={theme} key={`${projet}-${index}`} />
						)
				)}
			</div>
		</div>
	);
};

PageCreations.propTypes = {
	theme: PropTypes.string.isRequired,
	setTheme: PropTypes.func.isRequired,
};

PageCreations.defaultProps = {};

export default PageCreations;
