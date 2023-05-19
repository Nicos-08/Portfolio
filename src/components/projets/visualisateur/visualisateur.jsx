import PropTypes from "prop-types";
import "../../../styles/components/projets/visualisateur/visualisateur.css";
import FlecheDroiteIcon from "../../icons/fleche_droite/fleche_droite_icon";
import FlecheGaucheIcon from "../../icons/fleche_gauche/fleche_gauche_icon";
import PleinEcranIcon from "../../icons/plein_ecran/plein_ecran_icon";
import { useState } from "react";

const Visualisateur = ({ projet }) => {
	const [slide, setSlide] = useState(1);
	if (slide === 0) {
		setSlide(projet.images.length + 1);
	}
	return (
		<div className="visualisateur">
			<div
				className="visualisateur__fleche_gauche_icon"
				onClick={() => setSlide(slide - 1)}
			>
				<FlecheGaucheIcon theme="clair" />
			</div>
			<div
				className="visualisateur__fleche_droite_icon"
				onClick={() => setSlide(slide + 1)}
			>
				<FlecheDroiteIcon theme="clair" />
			</div>
			<div className="visualisateur__plein_ecran_icon">
				<PleinEcranIcon />
			</div>
			<div className="visualisateur__images">
				<div
					style={{ backgroundImage: `url(${projet.imagePrincipale})` }}
					className="visualisateur__images__img visualisateur__images__img_principale"
				/>
				{projet.images.map((img, index) => (
					<div
						style={{ backgroundImage: `url(${img})` }}
						key={`image ${index}`}
						className={`visualisateur__images__img visualisateur__images__img_${index}`}
					/>
				))}
			</div>
		</div>
	);
};

Visualisateur.propTypes = {
	projet: PropTypes.object.isRequired,
};

Visualisateur.defaultProps = {};

export default Visualisateur;
