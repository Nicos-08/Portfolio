import PropTypes from "prop-types";
import "../../../styles/components/icons/croix/croix_icon.css";

const CroixIcon = ({ theme }) => {
	return (
		<div className="croix_icon">
			<svg
				width="78"
				height="78"
				viewBox="0 0 78 78"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					className={`croix_icon--${theme}`}
					x="54.0242"
					y="15.4352"
					width="10.9146"
					height="54.5729"
					rx="5.45729"
					transform="rotate(45 54.0242 15.4352)"
				/>
				<rect
					className={`croix_icon--${theme}`}
					x="15.4358"
					y="23.1531"
					width="10.9146"
					height="54.5729"
					rx="5.45729"
					transform="rotate(-45 15.4358 23.1531)"
				/>
			</svg>
		</div>
	);
};

CroixIcon.propTypes = {
	theme: PropTypes.string.isRequired,
};

CroixIcon.defaultProps = {};

export default CroixIcon;
