import PropTypes from "prop-types";
import "../../../styles/components/icons/film/film_icon.css";

const FilmIcon = ({ theme }) => {
	return (
		<div className="film_icon">
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					className={`film_icon--${theme}`}
					d="M10 19V1M5.5 19V14.5M5.5 5.5V1M14.5 19V14.5M14.5 5.5V1M1 5.5H19M1 14.5H19M19 14.68V5.32C19 3.80786 19 3.05178 18.7057 2.47423C18.4469 1.96619 18.0339 1.55314 17.5258 1.29428C16.9482 1 16.1922 1 14.68 1H5.32C3.80786 1 3.05178 1 2.47423 1.29428C1.96619 1.55314 1.55314 1.96619 1.29428 2.47423C1 3.05178 1 3.80786 1 5.32V14.68C1 16.1922 1 16.9482 1.29428 17.5258C1.55314 18.0339 1.96619 18.4469 2.47423 18.7057C3.05178 19 3.80786 19 5.32 19H14.68C16.1922 19 16.9482 19 17.5258 18.7057C18.0339 18.4469 18.4469 18.0339 18.7057 17.5258C19 16.9482 19 16.1922 19 14.68Z"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</div>
	);
};

FilmIcon.propTypes = {
	theme: PropTypes.string.isRequired,
};

export default FilmIcon;
