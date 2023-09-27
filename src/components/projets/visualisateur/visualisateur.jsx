import PropTypes from "prop-types";
import "../../../styles/components/projets/visualisateur/visualisateur.css";
import { useEffect, useState } from "react";
import ReactImageGallery from "react-image-gallery";

const Visualisateur = ({ projet }) => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		if (projet.images !== undefined) {
			const updatedImages = [...projet.imagePrincipale];

			for (let image of projet.images) {
				updatedImages.push(image);
			}

			setImages(updatedImages);
		}
	}, [projet.imagePrincipale, projet.images]);

	return (
		<div className="visualisateur">
			{projet.video === undefined ? (
				<ReactImageGallery
					items={images}
					infinite={false}
					showPlayButton={false}
				/>
			) : (
				<div className="visualisateur__video_container">
					<iframe
						width="560"
						height="315"
						src={projet.video}
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
					></iframe>
				</div>
			)}
		</div>
	);
};

Visualisateur.propTypes = {
	projet: PropTypes.object.isRequired,
};

export default Visualisateur;
