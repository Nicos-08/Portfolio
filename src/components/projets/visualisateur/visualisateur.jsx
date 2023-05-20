import PropTypes from "prop-types";
import "../../../styles/components/projets/visualisateur/visualisateur.css";
import FlecheDroiteIcon from "../../icons/fleche_droite/fleche_droite_icon";
import FlecheGaucheIcon from "../../icons/fleche_gauche/fleche_gauche_icon";
import PleinEcranIcon from "../../icons/plein_ecran/plein_ecran_icon";
import { useEffect, useState } from "react";
import ReactImageGallery from "react-image-gallery";

const Visualisateur = ({ projet }) => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		const updatedImages = [...projet.imagePrincipale];

		for (const image of projet.images) {
			updatedImages.push(image);
		}

		setImages(updatedImages);
	}, [projet.imagePrincipale, projet.images]);

	return (
		<ReactImageGallery
			items={images}
			infinite={false}
			showPlayButton={false}
			// renderCustomControls={_renderCustomControls}
		/>
	);
};

Visualisateur.propTypes = {
	projet: PropTypes.object.isRequired,
};

Visualisateur.defaultProps = {};

export default Visualisateur;
