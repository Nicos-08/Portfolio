import PropTypes from "prop-types";
import "../../../styles/components/general/button/button.css";

const Button = ({ texte }) => {
	return (
		<div className="button">
			<span>{texte}</span>
		</div>
	);
};

Button.propTypes = {
	texte: PropTypes.string.isRequired,
};

export default Button;
