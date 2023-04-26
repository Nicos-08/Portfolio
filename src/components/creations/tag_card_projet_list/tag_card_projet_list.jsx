import PropTypes from "prop-types";
import "../../../styles/components/creations/tag_card_projet_list/tag_card_projet_list.css";
import TagCardProjet from "../tag_card_projet/tag_card_projet";

const TagCardProjetList = ({ theme, tags }) => {
	return (
		<div className="tag_card_projet_list">
			{tags.map((tag, index) => (
				<TagCardProjet theme={theme} texte={tag} key={`${tag}-${index}`} />
			))}
		</div>
	);
};

TagCardProjetList.propTypes = {
	theme: PropTypes.string.isRequired,
	tags: PropTypes.array.isRequired,
};

TagCardProjetList.defaultProps = {};

export default TagCardProjetList;
