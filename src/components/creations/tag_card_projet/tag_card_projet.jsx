import PropTypes from "prop-types";
import "../../../styles/components/creations/tag_card_projet/tag_card_projet.css";

const TagCardProjet = ({ theme, texte }) => {
	return (
		<div className={`tag_card_projet tag_card_projet--${theme}`}>
			<span>{texte}</span>
		</div>
	);
};

TagCardProjet.propTypes = {
	theme: PropTypes.string.isRequired,
	texte: PropTypes.string.isRequired,
};

TagCardProjet.defaultProps = {};

export default TagCardProjet;
