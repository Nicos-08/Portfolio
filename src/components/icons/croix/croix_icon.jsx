import PropTypes from "prop-types";
import "../../../styles/components/icons/croix/croix_icon.css";

const CroixIcon = ({ theme }) => {
	return (
		<div className="croix_icon">
			<svg
				width="43"
				height="43"
				viewBox="0 0 43 43"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					className={`croix_icon--${theme}`}
					x="17.1997"
					y="-0.00012207"
					width="8.60001"
					height="43"
					rx="4.3"
					fill="#BCC6FF"
				/>
				<rect
					className={`croix_icon--${theme}`}
					y="25.7997"
					width="8.6"
					height="43"
					rx="4.3"
					transform="rotate(-90 0 25.7997)"
					fill="#BCC6FF"
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
