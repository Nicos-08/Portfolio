import PropTypes from "prop-types";
import "../../../styles/components/contact/reseau_social/reseau_social.css";

import reseaux_sociaux from "../../../data/reseaux_sociaux";
import { useState } from "react";

const ReseauSocial = ({ theme, reseau }) => {
	const [ouvert, setOuvert] = useState(false);
	return (
		<a
			className="reseau_social"
			href={reseaux_sociaux[reseau].lien}
			target="_blank"
			rel="noreferrer"
		>
			<div
				className={`reseau_social__visible`}
				onMouseEnter={() => setOuvert(true)}
				onMouseLeave={() => setOuvert(false)}
			>
				<div className="reseau_social__visible__flou">
					<img src={reseaux_sociaux[reseau].image} alt={`${reseau} logo`} />
				</div>
				<img src={reseaux_sociaux[reseau].image} alt={`${reseau} logo`} />
			</div>
			{ouvert && (
				<div
					className={`reseau_social__invisible reseau_social__invisible--${theme}`}
				>
					<span
						className={`reseau_social__invisible__nom reseau_social__invisible__nom--${theme}`}
					>
						{reseaux_sociaux[reseau].texte}
					</span>
				</div>
			)}
		</a>
	);
};

ReseauSocial.propTypes = {
	theme: PropTypes.string.isRequired,
	reseau: PropTypes.string.isRequired,
};

export default ReseauSocial;
