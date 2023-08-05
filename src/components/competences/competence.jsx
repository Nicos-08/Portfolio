import PropTypes from "prop-types";
import "../../styles/components/competences/competence.css";
import FlecheBasIcon from "../icons/fleche_bas/fleche_bas_icon";
import { useState } from "react";

const Competence = ({ theme, competence }) => {
	const [ouvert, setOuvert] = useState(false);
	return (
		<div
			className={`competence competence--${theme} competence--${theme}--${ouvert}`}
			onClick={() => setOuvert(!ouvert)}
		>
			<div className="competence__partie_visible">
				<span
					className={`competence__partie_visible__nom competence__partie_visible__nom--${theme}`}
				>
					{competence.nom}
				</span>
				{ouvert ? (
					<div
						className="competence__partie_visible__fleche_bas_icon"
						style={{ transform: "rotate(180deg)" }}
					>
						<FlecheBasIcon theme={theme === "sombre" ? "clair" : "sombre"} />
					</div>
				) : (
					<div className="competence__partie_visible__fleche_bas_icon">
						<FlecheBasIcon theme={theme === "sombre" ? "clair" : "sombre"} />
					</div>
				)}
			</div>
			{ouvert && (
				<ul className="competence__partie_invisible">
					{competence.details.map((competence, index) => (
						<li
							key={`${competence}-${index}`}
							className={`competence__partie_invisible__element competence__partie_invisible__element--${theme}`}
						>
							{competence}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

Competence.propTypes = {
	theme: PropTypes.string.isRequired,
	competence: PropTypes.object.isRequired,
};

export default Competence;
