import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Header.css";

const Header = () => {
	return (
		<header className="classHeader">
			<NavBar className="navBar" />
			<h1>ADMIN DASHBOARD</h1>
			<div className="headerBg"></div>
			<div className="overlay"></div>
		</header>
	);
};

export default Header;
