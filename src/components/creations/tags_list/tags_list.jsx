import PropTypes from "prop-types";
import "../../../styles/components/creations/tags_list/tags_list.css";
import Filtre from "../filtre/filtre";

const TagsList = ({ theme }) => {
	return (
		<div className="tags_list">
			<Filtre theme={theme} type="Code" />
			<Filtre theme={theme} type="Design" />
			<Filtre theme={theme} type="Films" />
		</div>
	);
};

TagsList.propTypes = {
	theme: PropTypes.string.isRequired,
};

TagsList.defaultProps = {};

export default TagsList;
