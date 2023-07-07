//React
import PropTypes from "prop-types";

//Styles
import "../../styles/pages/navigation/navigation.css";

//Composants
import MenuDeNavigation from "../../components/navigation/menu_de_navigation/menu_de_navigation";

const PageNavigation = ({ theme }) => {
	return (
		<div className="page_navigation">
			<MenuDeNavigation theme={theme} arborescence={["Menu de navigation"]} />
			<div className="page_navigation__container_liens">
				<div className={`page_navigation__container_liens__item`}>
					<span
						className={`page_navigation__container_liens__item__numero page_navigation__container_liens__item__numero--${theme}`}
					>
						01
					</span>
					<span
						className={`page_navigation__container_liens__item__nom page_navigation__container_liens__item__nom--${theme}`}
					>
						Accueil
					</span>
				</div>
				<div className={`page_navigation__container_liens__item`}>
					<span
						className={`page_navigation__container_liens__item__numero page_navigation__container_liens__item__numero--${theme}`}
					>
						02
					</span>
					<span
						className={`page_navigation__container_liens__item__nom page_navigation__container_liens__item__nom--${theme}`}
					>
						Creations
					</span>
				</div>
				<div className={`page_navigation__container_liens__item`}>
					<span
						className={`page_navigation__container_liens__item__numero page_navigation__container_liens__item__numero--${theme}`}
					>
						03
					</span>
					<span
						className={`page_navigation__container_liens__item__nom page_navigation__container_liens__item__nom--${theme}`}
					>
						Competences
					</span>
				</div>
				<div className={`page_navigation__container_liens__item`}>
					<span
						className={`page_navigation__container_liens__item__numero page_navigation__container_liens__item__numero--${theme}`}
					>
						04
					</span>
					<span
						className={`page_navigation__container_liens__item__nom page_navigation__container_liens__item__nom--${theme}`}
					>
						Contact
					</span>
				</div>
			</div>
		</div>
	);
};

PageNavigation.propTypes = {
	theme: PropTypes.string.isRequired,
};

PageNavigation.defaultProps = {};

export default PageNavigation;
