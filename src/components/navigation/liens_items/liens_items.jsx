import PropTypes from "prop-types";
import "../../../styles/components/navigation/liens_items/liens_items.css";

const LiensItems = ({ theme, nombre, texte }) => {
	return (
		<div className="liens_items">
			<span className={`liens_items__numero liens_items--${theme}`}>
				{`0${nombre}`}
			</span>
			<span className={`liens_items__texte liens_items--${theme}`}>
				{texte}
			</span>
		</div>
	);
};

LiensItems.propTypes = {
	theme: PropTypes.string.isRequired,
	nombre: PropTypes.string.isRequired,
	texte: PropTypes.string.isRequired,
};

export default LiensItems;
