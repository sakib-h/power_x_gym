import React from "react";
import { useAuth } from "../../UserAccess/Firebase/AuthContext";
import NavBar from "../NavBar/NavBar";
import "./Header.css";

const Header = () => {
	const { currentUser } = useAuth();
	return (
		<header className="classHeader">
			<NavBar className="navBar" />
			<h1>
				{" "}
				{currentUser.displayName.toUpperCase()}, YOUR GYM MEMBERSHIP
			</h1>
			<div className="headerBg"></div>
			<div className="overlay"></div>
		</header>
	);
};

export default Header;
