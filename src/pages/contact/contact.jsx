//React
import PropTypes from "prop-types";

//Styles
import "../../styles/pages/contact/contact.css";

//Composants
import ReseauSocial from "../../components/contact/reseau_social/reseau_social";
import MenuDeNavigation from "../../components/navigation/menu_de_navigation/menu_de_navigation";

//Data

const PageContact = ({ theme, setTheme }) => {
	return (
		<div className={`contact_page contact_page--${theme}`}>
			<MenuDeNavigation theme={theme} arborescence={["Contact"]} setTheme={setTheme} />
			<div className="contact_page__contenu">
				<span
					className={`contact_page__contenu__titre contact_page__contenu__titre--${theme}`}
				>
					Envie de me contacter ?
				</span>
				<div className="contact_page__contenu__reseaux">
					<ReseauSocial reseau="instagram" theme={theme} />
					<ReseauSocial reseau="github" theme={theme} />
					<ReseauSocial reseau="emails" theme={theme} />
				</div>
			</div>
		</div>
	);
};

PageContact.propTypes = {
	theme: PropTypes.string.isRequired,
	setTheme: PropTypes.func.isRequired,
};

PageContact.defaultProps = {};

export default PageContact;
