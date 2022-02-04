import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "./mySpace.styles.css";

const MySpace = () => {
	const { logout } = useAuth0();
	return (
		<>
			<h1>This is My Space</h1>
			<button onClick={() => logout()}>Logout</button>
		</>
	);
};

export default MySpace;
