import PropTypes from 'prop-types';
import "../../../styles/components/icons/logo/logo_icon.css";
import logo_png from "../../../assets/img/Logo.png"

const LogoIcon = ({ format }) => {
	return (
        <div className="logo_icon">
            <img src={logo_png} alt="Logo Nicolas" className={`logo_icon--${format}`} />
        </div>
    );
};

LogoIcon.propTypes = {
    format: PropTypes.string.isRequired
};

LogoIcon.defaultProps = {};

export default LogoIcon;