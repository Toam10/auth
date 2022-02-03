import React, { useReducer } from "react";
import { INPUT_ATTR } from "../../constants/main.constants";
import Button from "../atoms/button.component";
import Form from "../atoms/form.component";
import InputField from "../atoms/inputField.component";
import "./main.styles.css";

const inputsReducer = (state, action) => {
	return { ...state, [action.type]: action.payload };
};

const Main = () => {
	const [inputsVal, dispatch] = useReducer(inputsReducer, {});
	const handleInput = ({ target: { name, value } }) => dispatch({ type: name, payload: value });

	return (
		<Form>
			{INPUT_ATTR.map((attr) => {
				return <InputField key={attr.name} {...attr} onChange={handleInput} value={inputsVal[attr.name] || ""} />;
			})}
			<Button type={"submit"}>Login</Button>
		</Form>
	);
};

export default Main;
