import PropTypes from "prop-types";
import "../../../styles/components/projets/tag_projet/tag_projet.css";

const TagProjet = ({ tagNom }) => {
	return (
		<div className="tag_projet">
			<span>{tagNom}</span>
		</div>
	);
};

TagProjet.propTypes = {
	tagNom: PropTypes.string.isRequired,
};

TagProjet.defaultProps = {};

export default TagProjet;
