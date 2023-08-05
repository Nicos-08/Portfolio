import PropTypes from "prop-types";
import "../../../styles/components/navigation/liens_menu/liens_menu.css";
import LiensItems from "../liens_items/liens_items";

const LiensMenu = ({ theme }) => {
	return (
		<div className="liens_menu">
			<LiensItems theme={theme} nombre="1" texte="Accueil" />
			<LiensItems theme={theme} nombre="2" texte="Creations" />
			<LiensItems theme={theme} nombre="3" texte="Competences" />
			<LiensItems theme={theme} nombre="4" texte="Contact" />
		</div>
	);
};

LiensMenu.propTypes = {
	theme: PropTypes.string.isRequired,
};

export default LiensMenu;
