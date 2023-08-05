import PropTypes from "prop-types";
import "../../../styles/components/projets/duree_projet/duree_projet.css";

const DureeProjet = ({ dates }) => {
	let dateDebutMoisNombre = parseFloat(dates.debut.mois);
	let dateDebutAnneeNombre = parseFloat(dates.debut.annee);

	let dateFinMoisNombre = parseFloat(dates.fin.mois);
	let dateFinAnneeNombre = parseFloat(dates.fin.annee);

	function trouverDuree(objetDates) {
		let dateDebut = objetDates.debut;
		let dateFin = objetDates.fin;
		let dateDebutMois = parseFloat(dateDebut.mois);
		let dateDebutAnnee = parseFloat(dateDebut.annee);
		let dateFinMois = parseFloat(dateFin.mois);
		let dateFinAnnee = parseFloat(dateFin.annee);

		if (dateDebutAnnee === dateFinAnnee && dateFinMois - dateDebutMois === 0) {
			return "1 mois";
		}

		const diffMois =
			dateDebutAnnee === dateFinAnnee
				? dateFinMois - dateDebutMois
				: 12 - dateDebutMois + dateFinMois;

		const diffAnnees =
			dateFinAnnee - dateDebutAnnee - (dateFinMois < dateDebutMois ? 1 : 0);

		const moisTxt = `${diffMois} mois`;
		const anneesTxt = `${diffAnnees} an${diffAnnees !== 1 ? "s" : ""}`;

		return diffAnnees > 0 ? `${moisTxt} et ${anneesTxt}` : moisTxt;
	}

	function trouverNomMois(numero) {
		if (numero === 1) {
			return "Janvier";
		} else if (numero === 2) {
			return "Février";
		} else if (numero === 3) {
			return "Mars";
		} else if (numero === 4) {
			return "Avril";
		} else if (numero === 5) {
			return "Mai";
		} else if (numero === 6) {
			return "Juin";
		} else if (numero === 7) {
			return "Juillet";
		} else if (numero === 8) {
			return "Août";
		} else if (numero === 9) {
			return "Septembre";
		} else if (numero === 10) {
			return "Octobre";
		} else if (numero === 11) {
			return "Novembre";
		} else if (numero === 12) {
			return "Décembre";
		}
	}

	let debutMoisNom = trouverNomMois(dateDebutMoisNombre);
	let finMoisNom = trouverNomMois(dateFinMoisNombre);

	let debut = debutMoisNom + " " + dateDebutAnneeNombre;
	let fin = finMoisNom + " " + dateFinAnneeNombre;

	return (
		<div className="duree_projet">
			<span className="duree_projet__date_debut">{debut}</span>
			<div className="duree_projet__ligne_et_duree">
				<span>{trouverDuree(dates)}</span>
				<div className="duree_projet__ligne_et_duree__ligne"></div>
			</div>
			<span className="duree_projet__date_fin">{fin}</span>
		</div>
	);
};

DureeProjet.propTypes = {
	dates: PropTypes.object.isRequired,
};

export default DureeProjet;
