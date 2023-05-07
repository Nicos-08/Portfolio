import PropTypes from "prop-types";
import "../../../styles/components/projets/projets_similaires/projets_similaires.css";
import Card from "../../creations/card/card";
import creations from "../../../data/creations";

const ProjetsSimilaires = ({ theme, projet }) => {
	class tags_communs_projets {
		constructor(projet, tags_communs) {
			this.projet = projet;
			this.tags_communs = tags_communs;
		}
	}

	function creer_liste_tags_communs() {
		let projets_communs = [];
		for (const projet_recherche of creations) {
			if (projet_recherche.nom !== projet.nom) {
				let objet = new tags_communs_projets(projet_recherche, 0);
				for (const tag_recherche of projet.tags) {
					for (const tag_projet of projet_recherche.tags) {
						if (tag_recherche === tag_projet) {
							objet.tags_communs++;
						}
					}
				}
				projets_communs.push(objet);
			}
		}
		return projets_communs;
	}

	function trier_liste_tags_communs() {
		let liste_tags_communs = creer_liste_tags_communs();
		let a_supprimer = 0;
		for (const projet of liste_tags_communs) {
			if (projet.tags_communs !== 0) {
				liste_tags_communs.sort((a, b) => b.tags_communs - a.tags_communs);
			} else {
				a_supprimer++;
			}
		}
		for (let index = 0; index < a_supprimer; index++) {
			liste_tags_communs.pop();
		}
		return liste_tags_communs;
	}

	let tags_communs = trier_liste_tags_communs();

	return (
		<div className="projets_similaires">
			<span
				className={`projets_similaires__span projets_similaires__span--${theme}`}
			>
				Projets similaires :
			</span>
			<div
				className={`projets_similaires__caroussel projets_similaires__caroussel--${theme}`}
			>
				{tags_communs.map((tag, index) => (
					<Card theme={theme} projet={tag.projet} key={`${tag}-${index}`} />
				))}
			</div>
		</div>
	);
};

ProjetsSimilaires.propTypes = {
	theme: PropTypes.string.isRequired,
	projet: PropTypes.object.isRequired,
};

ProjetsSimilaires.defaultProps = {};

export default ProjetsSimilaires;
