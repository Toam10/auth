import React, { useEffect, useState } from "react";
import "./atoms.styles.css";

const TitleAnimation = ({ children }) => {
	const [text, setText] = useState("");

	useEffect(() => {
		const interval = setInterval(() => {
			setText((text) => (text.length >= children.length ? text : (text += children[text.length])));
		}, 150);
		return () => clearInterval(interval);
	}, [children]);

	return <>{text && <h1 id="register-title-animation">{text}</h1>}</>;
};

export default TitleAnimation;
