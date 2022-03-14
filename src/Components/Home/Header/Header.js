import React from "react";
import HeaderContent from "../HeaderContent/HeaderContent";
import NavBar from "../NavBar/NavBar";
import "./Header.css";

const Header = () => {
	return (
		<header className="header">
			<div className="headerBg">
				<NavBar className="navBar" />
				<HeaderContent className="headerContent" />
			</div>
			<div className="overlay"></div>
		</header>
	);
};

export default Header;
