import PropTypes from "prop-types";
import "../../../styles/components/icons/fleche_gauche/fleche_gauche_icon.css";

const FlecheGaucheIcon = ({ theme, onClick }) => {
	return (
		<div className="fleche_gauche_icon" onClick={onClick}>
			<svg
				width="48"
				height="48"
				viewBox="0 0 48 48"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					width="7.46107"
					height="33.2878"
					rx="3.73054"
					transform="matrix(0.699506 -0.714627 -0.714627 -0.699506 23.7883 48)"
					className={`fleche_gauche_icon--${theme}`}
				/>
				<rect
					width="7.46107"
					height="33.2878"
					rx="3.73054"
					transform="matrix(0.714627 0.699506 0.699506 -0.714627 0.000244141 24.715)"
					className={`fleche_gauche_icon--${theme}`}
				/>
			</svg>
		</div>
	);
};

FlecheGaucheIcon.propTypes = {
	theme: PropTypes.string.isRequired,
};

export default FlecheGaucheIcon;
