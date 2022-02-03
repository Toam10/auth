import React from "react";
import "./atoms.styles.css";

const InputField = (attr) => {
	return <input className="register-inputs" {...attr} />;
};

export default InputField;
