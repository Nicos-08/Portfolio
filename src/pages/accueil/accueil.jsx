//React
import { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//Styles
import "../../styles/pages/accueil/accueil.css";

//Composants
import MenuDeNavigation from "../../components/navigation/menu_de_navigation/menu_de_navigation";
import LogoIcon from "../../components/icons/logo/logo_icon";
import Button from "../../components/general/button/button";
import TexteChangeant from "../../components/general/texte_changeant/texte_changeant";

const PageAccueil = ({ theme, setTheme }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className={`page_accueil page_accueil--${theme}`}>
			<MenuDeNavigation theme={theme} arborescence={[]} setTheme={setTheme} />
			<div className="page_accueil__contenu">
				<div className="page_accueil__contenu__logo">
					<div className="page_accueil__contenu__logo__logo_original">
						<LogoIcon format="grand" />
					</div>
					<div className="page_accueil__contenu__logo__logo_flou">
						<LogoIcon format="enorme" />
					</div>
				</div>
				<div className="page_accueil__contenu__textes">
					<span className="page_accueil__contenu__textes__nom">
						Je m'appelle Nicolas
					</span>
					<TexteChangeant theme={theme} />
				</div>
			</div>
			<div className="page_accueil__cta">
				<Link to="/creations">
					<Button texte="Voir mes créations" />
				</Link>
			</div>
		</div>
	);
};

PageAccueil.propTypes = {
	theme: PropTypes.string.isRequired,
	setTheme: PropTypes.func.isRequired,
};

export default PageAccueil;
