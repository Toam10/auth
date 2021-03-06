import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import "./App.css";
import Login from "./screens/login";
import LoadingSuspense from "./screens/mySpace/components/loadingSuspense/loadingSuspense.component";
import Register from "./screens/register";
const MySpace = React.lazy(() => import("./screens/mySpace"));

function App() {
	const { user, isAuthenticated, isLoading } = useAuth0();
	const navigate = useNavigate();

	useEffect(() => {
		if (!isAuthenticated) return;
		navigate("/mySpace");
		localStorage.setItem("userName", user.name);
	}, [isAuthenticated, navigate, user?.name]);

	return (
		<div className="App">
			<Routes>
				<Route path="/register" element={<Register />} />
				<Route path="/" element={<Login />} />
				<Route
					path="/mySpace"
					element={<React.Suspense fallback={<LoadingSuspense />}>{!isLoading && <MySpace />}</React.Suspense>}
				/>
			</Routes>
		</div>
	);
}

export default App;
