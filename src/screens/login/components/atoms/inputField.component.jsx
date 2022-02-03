import React from "react";
import "./atoms.styles.css";

const InputField = (attr) => {
	return <input className="login-inputs" {...attr} />;
};

export default InputField;
