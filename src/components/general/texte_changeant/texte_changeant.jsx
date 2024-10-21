import PropTypes from "prop-types";
import "../../../styles/components/general/texte_changeant/texte_changeant.css";
import React from "react";
import Typed from "typed.js";

const TexteChangeant = ({ theme }) => {
	const el = React.useRef(null);
	React.useEffect(() => {
		const typed = new Typed(el.current, {
			strings: ["code", "design", "montage"],
			typeSpeed: 70,
			backSpeed: 40,
			loop: true,
		});

		return () => {
			// Destroy Typed instance during cleanup to stop animation
			typed.destroy();
		};
	}, []);

	return (
		<div className={`texte_changeant texte_changeant--${theme}`}>
			<span>{"Je fais du "}</span>
			<span ref={el}></span>
		</div>
	);
};

TexteChangeant.propTypes = {
	theme: PropTypes.string.isRequired,
};

export default TexteChangeant;
