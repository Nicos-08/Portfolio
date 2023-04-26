import PropTypes from "prop-types";
import "../../../styles/components/icons/code/code_icon.css";

const CodeIcon = ({ theme }) => {
	return (
		<div className="code_icon">
			<svg
				width="25"
				height="24"
				viewBox="0 0 25 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clipPath="url(#clip0_135_471)">
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M7.07358 8.13043C7.55785 7.64159 7.55785 6.84975 7.07358 6.3609L7.05731 6.34425C6.57305 5.85541 5.78846 5.85541 5.30419 6.34425L0.863201 10.8261C0.378933 11.3149 0.378933 12.1083 0.863201 12.5971L5.30419 17.0786C5.78846 17.5675 6.57305 17.5675 7.05731 17.0786L7.07358 17.0623C7.55785 16.5734 7.55785 15.7816 7.07358 15.2927L4.40323 12.5971C3.91896 12.1083 3.91896 11.3149 4.40323 10.8261L7.07358 8.13043ZM24.1368 10.8261L19.6958 6.34425C19.2128 5.85541 18.427 5.85541 17.9427 6.34425L17.9264 6.3609C17.4421 6.84975 17.4421 7.64159 17.9264 8.13043L20.598 10.8261C21.0823 11.3149 21.0823 12.1083 20.598 12.5971L17.9264 15.2927C17.4421 15.7816 17.4421 16.5734 17.9264 17.0623L17.9427 17.0786C18.427 17.5675 19.2128 17.5675 19.6958 17.0786L24.1368 12.5971C24.6211 12.1083 24.6211 11.3149 24.1368 10.8261ZM16.6802 5.59055L10.2857 19.2713C10.0785 19.7014 9.71505 20.2328 9.24616 20.2328H9.22133C8.30959 20.2328 7.71542 18.9947 8.11857 18.1598L14.4759 4.60864C14.6831 4.17981 15.4509 3.84353 15.4509 3.84353V3.81177C16.6914 3.81177 17.0821 4.75574 16.6802 5.59055Z"
						className={`code_icon--${theme}`}
					/>
				</g>
				<defs>
					<clipPath id="clip0_135_471">
						<rect
							width="24"
							height="24"
							fill="white"
							transform="translate(0.5)"
						/>
					</clipPath>
				</defs>
			</svg>
		</div>
	);
};

CodeIcon.propTypes = {
	theme: PropTypes.string.isRequired,
};

export default CodeIcon;
