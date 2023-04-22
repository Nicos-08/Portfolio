import PropTypes from "prop-types";
import "../../../styles/components/icons/fleche_droite/fleche_droite_icon.css";

const FlecheDroiteIcon = ({ theme }) => {
	return (
		<div className="fleche_droite_icon">
			<svg
				width="49"
				height="48"
				viewBox="0 0 49 48"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					x="24.22"
					y="47.0735"
					width="7.46107"
					height="33.2878"
					rx="3.73054"
					transform="rotate(-134.387 24.22 47.0735)"
					className={`fleche_droite_icon--${theme}`}
				/>
				<rect
					x="48.0081"
					y="23.7884"
					width="7.46107"
					height="33.2878"
					rx="3.73054"
					transform="rotate(135.613 48.0081 23.7884)"
					className={`fleche_droite_icon--${theme}`}
				/>
			</svg>
		</div>
	);
};

FlecheDroiteIcon.propTypes = {
	theme: PropTypes.string.isRequired,
};

FlecheDroiteIcon.defaultProps = {};

export default FlecheDroiteIcon;
