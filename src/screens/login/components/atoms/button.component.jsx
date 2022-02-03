import React from "react";
import "./atoms.styles.css";

const Button = ({ type, children }) => {
	return (
		<button id="login-button" type={type}>
			{children}
		</button>
	);
};

export default Button;
