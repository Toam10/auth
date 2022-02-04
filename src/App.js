import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "./App.css";
import Login from "./screens/login";
import LoadingSuspense from "./screens/mySpace/components/loadingSuspense/loadingSuspense.component";
import Register from "./screens/register";
const MySpace = React.lazy(() => import("./screens/mySpace"));

function App() {
	const { user, isAuthenticated, isLoading } = useAuth0();
	return (
		<div className="App">
			<Register />
			<Login />
			<React.Suspense fallback={<LoadingSuspense />}>{!isLoading && <MySpace />}</React.Suspense>
		</div>
	);
}

export default App;
