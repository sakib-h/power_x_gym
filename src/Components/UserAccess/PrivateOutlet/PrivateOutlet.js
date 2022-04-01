import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { userContext } from "../../../App";
import { useAuth } from "../Firebase/AuthContext";

const PrivateOutlet = () => {
	const [user, setUser] = useContext(userContext);
	const { currentUser } = useAuth();
	const location = useLocation();
	return currentUser ? (
		<Outlet />
	) : (
		<Navigate to="/login" replace state={{ from: location }} />
	);
};

export default PrivateOutlet;
