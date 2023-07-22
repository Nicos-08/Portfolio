//React
import PropTypes from "prop-types";
import { useState } from "react";

//Styles
import "../../styles/pages/competences/competences.css";

//Composants
import MenuDeNavigation from "../../components/navigation/menu_de_navigation/menu_de_navigation";
import HeaderAvecFiltres from "../../components/general/header_avec_filtres/header_avec_filtres";
import Competence from "../../components/competences/competence";

//Data
import competences from "../../data/competences";

const PageCompetences = ({ theme, setTheme }) => {
	// console.log(setTheme);
	const [visibles, modifierVisibles] = useState([
		"Programmation",
		"Design",
		"Films",
	]);
	return (
		<div className="competences_page">
			<MenuDeNavigation
				theme={theme}
				menu_ouvert={false}
				arborescence={["Compétences"]}
				setTheme={setTheme}
			/>
			<div className="competences_page__header">
				<HeaderAvecFiltres
					theme={theme}
					type="Mes compétences"
					visibles={visibles}
					modifierVisibles={modifierVisibles}
				/>
			</div>
			<div className="competences_page__container_competences">
				{competences.map(
					(competence, index) =>
						visibles.includes(competence.theme) && (
							<Competence
								competence={competence}
								theme={theme}
								key={`competence-${index}`}
							/>
						)
				)}
			</div>
		</div>
	);
};

PageCompetences.propTypes = {
	theme: PropTypes.string.isRequired,
	setTheme: PropTypes.func.isRequired,
};

PageCompetences.defaultProps = {};

export default PageCompetences;
