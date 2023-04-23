import PropTypes from "prop-types";
import "../../../styles/components/icons/menu_hamburger/menu_hamburger_icon.css";

const MenuHamburgerIcon = ({ theme }) => {
	return (
		<div className="menu_hamburger_icon">
			<svg
				width="43"
				height="43"
				viewBox="0 0 43 43"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					className={`menu_hamburger_icon--${theme}`}
					width="17"
					height="17"
					rx="5"
				/>
				<rect
					className={`menu_hamburger_icon--${theme}`}
					y="25.3846"
					width="17"
					height="17"
					rx="5"
				/>
				<rect
					className={`menu_hamburger_icon--${theme}`}
					x="25.3845"
					width="17"
					height="17"
					rx="5"
				/>
				<rect
					className={`menu_hamburger_icon--${theme}`}
					x="25.3848"
					y="25.3846"
					width="17"
					height="17"
					rx="5"
				/>
			</svg>
		</div>
	);
};

MenuHamburgerIcon.propTypes = {
	theme: PropTypes.string.isRequired,
};

MenuHamburgerIcon.defaultProps = {};

export default MenuHamburgerIcon;
