import React from "react";
import TitleAnimation from "../atoms/titleAnimation.component";
import "./header.styles.css";

const Header = () => {
	return (
		<header>
			<TitleAnimation>{"_ Register Here _"}</TitleAnimation>
		</header>
	);
};

export default Header;
