//React
import PropTypes from "prop-types";

//Styles
import "../../styles/pages/competences/competences.css";

//Composants
import MenuDeNavigation from "../../components/navigation/menu_de_navigation/menu_de_navigation";
import HeaderAvecFiltres from "../../components/general/header_avec_filtres/header_avec_filtres";
import Competence from "../../components/competences/competence";

//Data
import competences from "../../data/competences";

const PageCompetences = ({ theme }) => {
	return (
		<div className="competences_page">
			<MenuDeNavigation
				theme={theme}
				menu_ouvert={false}
				arborescence={["Compétences"]}
			/>
			<div className="competences_page__header">
				<HeaderAvecFiltres theme={theme} type="Mes compétences" />
			</div>
			<div className="competences_page__container_competences">
				{competences.map((competence, index) => (
					<Competence
						competence={competence}
						theme={theme}
						key={`competence-${index}`}
					/>
				))}
			</div>
		</div>
	);
};

PageCompetences.propTypes = {
	theme: PropTypes.string.isRequired,
};

PageCompetences.defaultProps = {};

export default PageCompetences;
