import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "./atoms.styles.css";

const Form = ({ children, attr }) => {
	const { loginWithRedirect } = useAuth0();
	const onSubmit = (event) => {
		event.preventDefault();
		loginWithRedirect();
	};
	return (
		<form method={"POST"} id="login-form" {...attr} onSubmit={(event) => onSubmit(event)}>
			{children}
		</form>
	);
};

export default Form;
