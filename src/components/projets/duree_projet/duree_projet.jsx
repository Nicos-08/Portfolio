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

		if (dateDebutAnnee === dateFinAnnee) {
			if (dateFinMois - dateDebutMois === 0) {
				return "1 mois";
			} else {
				return `${dateFinMois - dateDebutMois} mois`;
			}
		} else {
			if (dateDebutMois > dateFinMois) {
				return `${12 - dateDebutMois + dateFinMois} mois et ${
					dateFinAnnee - dateDebutAnnee - 1
				} an${dateFinAnnee - dateDebutAnnee - 1 !== 1 && "s"}`;
			} else {
				return `${dateFinMois - dateDebutMois} mois et ${
					dateFinAnnee - dateDebutAnnee
				} an${dateFinAnnee - dateDebutAnnee - 1 >= 1 ? "s" : ""}`;
			}
		}
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
			<div className="duree_projet__fleche_et_duree">
				<span>{trouverDuree(dates)}</span>
				<svg
					width="211"
					height="24"
					viewBox="0 0 211 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="duree_projet__fleche_et_duree__fleche"
				>
					<path d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5V10.5ZM210.061 13.0607C210.646 12.4749 210.646 11.5251 210.061 10.9393L200.515 1.3934C199.929 0.807611 198.979 0.807611 198.393 1.3934C197.808 1.97919 197.808 2.92893 198.393 3.51472L206.879 12L198.393 20.4853C197.808 21.0711 197.808 22.0208 198.393 22.6066C198.979 23.1924 199.929 23.1924 200.515 22.6066L210.061 13.0607ZM2 13.5H200.89V10.5H2V13.5ZM200.89 13.5H209V10.5H200.89V13.5Z" />
				</svg>
			</div>
			<span className="duree_projet__date_fin">{fin}</span>
		</div>
	);
};

DureeProjet.propTypes = {
	dates: PropTypes.object.isRequired,
};

DureeProjet.defaultProps = {};

export default DureeProjet;
