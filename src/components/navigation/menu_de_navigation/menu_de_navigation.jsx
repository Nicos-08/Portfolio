import PropTypes from "prop-types";
import "../../../styles/components/navigation/menu_de_navigation/menu_de_navigation.css";
import LogoIcon from "../../icons/logo/logo_icon";
import ThemeIcon from "../../icons/theme/theme_icon";
import MenuHamburgerIcon from "../../icons/menu_hamburger/menu_hamburger_icon";
import CroixIcon from "../../icons/croix/croix_icon";

const MenuDeNavigation = ({ theme, menu_ouvert, arborescence }) => {
	return (
		<div className="menu_de_navigation">
			<div className="menu_de_navigation__partie_gauche">
				<LogoIcon format="petit" />
				<div className="arborescence">
					<span
						className={`menu_de_navigation--partie_gauche--${theme}`}
					>{`Portfolio `}</span>
					{arborescence.map((onglet, index) => (
						<span
							className={`menu_de_navigation--partie_gauche--${theme}`}
							key={`${onglet}-${index}`}
						>{`/ ${onglet} `}</span>
					))}
				</div>
			</div>
			<div className="menu_de_navigation__partie_droite">
				<ThemeIcon theme={theme} />
				{menu_ouvert ? (
					<CroixIcon theme={theme} />
				) : (
					<MenuHamburgerIcon theme={theme} />
				)}
			</div>
		</div>
	);
};

MenuDeNavigation.propTypes = {
	theme: PropTypes.string.isRequired,
	menu_ouvert: PropTypes.bool,
	arborescence: PropTypes.array.isRequired,
};

MenuDeNavigation.defaultProps = {
	menu_ouvert: false,
};

export default MenuDeNavigation;
