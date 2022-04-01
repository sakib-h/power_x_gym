import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Header.css";

const Header = () => {
	return (
		<header className="classHeader">
			<NavBar className="navBar" />
			<h1>GYM MEMBERSHIP</h1>
			<div className="headerBg"></div>
			<div className="overlay"></div>
		</header>
	);
};

export default Header;
