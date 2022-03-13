import React from "react";
import HeaderContent from "../HeaderContent/HeaderContent";
import NavBar from "../NavBar/NavBar";
import "./Header.css";

const Header = () => {
	return (
		<header className="header">
			<div className=" bgContainer ">
				<NavBar className="navBar" />
				<HeaderContent className="headerContent" />
			</div>
		</header>
	);
};

export default Header;
