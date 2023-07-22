//React
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useEffect } from "react";

//Styles
import "../../styles/pages/navigation/navigation.css";

//Composants
import MenuDeNavigation from "../../components/navigation/menu_de_navigation/menu_de_navigation";

const PageNavigation = ({ theme, setTheme }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="page_navigation">
			<MenuDeNavigation
				theme={theme}
				arborescence={["Menu de navigation"]}
				setTheme={setTheme}
			/>
			<div className="page_navigation__container_liens">
				<div className={`page_navigation__container_liens__item`}>
					<Link to="/">
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
					</Link>
				</div>
				<div className={`page_navigation__container_liens__item`}>
					<Link to="/creations">
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
					</Link>
				</div>
				<div className={`page_navigation__container_liens__item`}>
					<Link to="/competences">
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
					</Link>
				</div>
				<div className={`page_navigation__container_liens__item`}>
					<Link to="/contact">
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
					</Link>
				</div>
			</div>
		</div>
	);
};

PageNavigation.propTypes = {
	theme: PropTypes.string.isRequired,
	setTheme: PropTypes.func.isRequired,
};

PageNavigation.defaultProps = {};

export default PageNavigation;
