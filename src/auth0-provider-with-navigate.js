import React from "react";
import { useNavigate } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithNavigate = ({ children }) => {
	const navigate = useNavigate();
	const domain = process.env.REACT_APP_AUTH0_DOMAIN;
	const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

	const onRedirectCallBack = (appState) => {
		navigate(appState?.returnTo || window.location.pathname, { replace: true });
	};

	return (
		<Auth0Provider
			domain={domain}
			clientId={clientId}
			redirectUri={window.location.origin}
			onRedirectCallback={onRedirectCallBack}
		>
			{children}
		</Auth0Provider>
	);
};

export default Auth0ProviderWithNavigate;
