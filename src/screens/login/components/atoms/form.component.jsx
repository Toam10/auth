import React from "react";
import "./atoms.styles.css";

const Form = ({ children, attr }) => {
	const onSubmit = (event) => {
		event.preventDefault();
	};
	return (
		<form id="login-form" {...attr} onSubmit={onSubmit}>
			{children}
		</form>
	);
};

export default Form;
