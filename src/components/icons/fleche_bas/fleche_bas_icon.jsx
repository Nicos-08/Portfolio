import PropTypes from "prop-types";
import "../../../styles/components/icons/fleche_bas/fleche_bas_icon.css";

const FlecheBasIcon = ({ theme }) => {
	return (
		<div className="fleche_bas_icon">
			<svg
				width="32"
				height="20"
				viewBox="0 0 32 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					width="3.73763"
					height="22.794"
					rx="1.86881"
					transform="matrix(-0.70966 -0.704545 -0.694434 0.719556 32 3.59839)"
					className={`fleche_bas_icon--${theme}`}
				/>
				<rect
					width="3.73876"
					height="22.7871"
					rx="1.86938"
					transform="matrix(0.694434 -0.719556 -0.70966 -0.704545 16.1709 19.9998)"
					className={`fleche_bas_icon--${theme}`}
				/>
			</svg>
		</div>
	);
};

FlecheBasIcon.propTypes = {
	theme: PropTypes.string.isRequired,
};

FlecheBasIcon.defaultProps = {};

export default FlecheBasIcon;
