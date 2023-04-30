import PropTypes from "prop-types";
import "../../../styles/components/projets/cadre_infos_projet/cadre_infos_projet.css";
import TagProjet from "../tag_projet/tag_projet";
import Button from "../../general/button/button";
import DureeProjet from "../duree_projet/duree_projet";

const CadreInfosProjet = ({ theme, projet }) => {
	return (
		<div className={`cadre_infos_projet cadre_infos_projet--${theme}`}>
			<span className="cadre_infos_projet__theme">{projet.theme}</span>
			<div className="cadre_infos_projet__tags">
				{projet.tags.map((tag, index) => (
					<TagProjet tagNom={tag} key={`${tag}-${index}`} />
				))}
			</div>
			<DureeProjet dates={projet.dates} />
			<Button texte="Accéder" />
		</div>
	);
};

CadreInfosProjet.propTypes = {
	theme: PropTypes.string.isRequired,
	projet: PropTypes.object.isRequired,
};

CadreInfosProjet.defaultProps = {};

export default CadreInfosProjet;
