import PropTypes from "prop-types";
import "../../../styles/components/creations/filtre/filtre.css";
import CodeIcon from "../../icons/code/code_icon";
import DesignIcon from "../../icons/design/design_icon";
import FilmIcon from "../../icons/film/film_icon";

const Filtre = ({ theme, type }) => {
	let icon;
	let text;
	if (type === "Code") {
		icon = <CodeIcon theme={theme} />;
		text = "Code";
	} else if (type === "Design") {
		icon = <DesignIcon theme={theme} />;
		text = "Design";
	} else if (type === "Film" || type === "Films") {
		icon = <FilmIcon theme={theme} />;
		text = "Films";
	} else {
		text = "Erreur";
	}
	return (
		<div className={`filtre filtre--${theme}`}>
			{icon}
			<span className={`filtre__span filtre__span--${theme}`}>{text}</span>
		</div>
	);
};

Filtre.propTypes = {
	theme: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
};

Filtre.defaultProps = {};

export default Filtre;
