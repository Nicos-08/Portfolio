import PropTypes from "prop-types";
import "../../../styles/components/creations/tags_list/tags_list.css";
import Filtre from "../filtre/filtre";

const TagsList = ({ theme, visibles, modifierVisibles }) => {
	function filtrer(nomFiltre) {
		if (visibles.includes(nomFiltre)) {
			modifierVisibles(
				visibles.filter((element) => {
					return element !== nomFiltre;
				})
			);
		} else {
			modifierVisibles([...visibles, nomFiltre]);
		}
	}
	return (
		<div className="tags_list">
			<Filtre
				theme={theme}
				type="Code"
				onClick={() => filtrer("Programmation")}
			/>
			<Filtre theme={theme} type="Design" onClick={() => filtrer("Design")} />
			<Filtre theme={theme} type="Films" onClick={() => filtrer("Films")} />
		</div>
	);
};

TagsList.propTypes = {
	theme: PropTypes.string.isRequired,
};

TagsList.defaultProps = {};

export default TagsList;
