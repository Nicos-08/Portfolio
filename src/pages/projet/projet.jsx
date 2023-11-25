//React
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

//Styles
import "../../styles/pages/projet/projet.css";

//Composants
import Visualisateur from "../../components/projets/visualisateur/visualisateur";
import MenuDeNavigation from "../../components/navigation/menu_de_navigation/menu_de_navigation";
import CadreInfosProjet from "../../components/projets/cadre_infos_projet/cadre_infos_projet";
import ProjetsSimilaires from "../../components/projets/projets_similaires/projets_similaires";
import Button from "../../components/general/button/button";

//Data
import creations from "../../data/creations";

const PageProjet = ({ theme, setTheme }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const { id } = useParams();
	const projet = creations[id];

	return (
		<div className="projet_page">
			<MenuDeNavigation
				theme={theme}
				menu_ouvert={false}
				arborescence={["Créations", projet.nom]}
				setTheme={setTheme}
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
							style={{ whiteSpace: "pre-line" }}
						>
							{projet.description}
						</p>
					</div>
					<Link to="/creations">
						<Button texte="Retour aux projets" />
					</Link>
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
	theme: PropTypes.string.isRequired,
	setTheme: PropTypes.func.isRequired,
};

export default PageProjet;
