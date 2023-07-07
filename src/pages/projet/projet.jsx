//React
import PropTypes from "prop-types";

//Styles
import "../../styles/pages/projet/projet.css";

//Composants
import Visualisateur from "../../components/projets/visualisateur/visualisateur";
import MenuDeNavigation from "../../components/navigation/menu_de_navigation/menu_de_navigation";
import Button from "../../components/general/button/button";
import CadreInfosProjet from "../../components/projets/cadre_infos_projet/cadre_infos_projet";
import ProjetsSimilaires from "../../components/projets/projets_similaires/projets_similaires";

const PageProjet = ({ projet, theme }) => {
	return (
		<div className="projet_page">
			<MenuDeNavigation
				theme={theme}
				menu_ouvert={false}
				arborescence={["Projet", projet.nom]}
			/>
			<div className="projet_page__visualisateur">
				<Visualisateur projet={projet} />
			</div>
			<div className="projet_page__contenu">
				<div className="projet_page__contenu__section_gauche">
					<div className="projet_page__contenu__section_gauche__section_texte">
						<span
							className={`projet_page__contenu__section_gauche__section_texte__titre projet_page__contenu__section_gauche__section_texte__titre--${theme}`}
						>
							{projet.nom}
						</span>
						<p
							className={`projet_page__contenu__section_gauche__section_texte__description projet_page__contenu__section_gauche__section_texte__description--${theme}`}
						>
							{projet.description}
						</p>
					</div>
					<Button texte="Retour aux projets" />
				</div>
				<div className="projet_page__contenu__section_droite">
					<CadreInfosProjet projet={projet} theme={theme} />
				</div>
			</div>
			<div className="projet_page__footer">
				<ProjetsSimilaires projet={projet} theme={theme} />
			</div>
		</div>
	);
};

PageProjet.propTypes = {
	projet: PropTypes.object.isRequired,
	theme: PropTypes.string.isRequired,
};

PageProjet.defaultProps = {};

export default PageProjet;
