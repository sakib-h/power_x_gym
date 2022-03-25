import React from "react";
import NavBar from "../../NavBar/NavBar";
import "./AdvanceGym.css";

const AdvanceGym = () => {
	return (
		<div>
			<header className="classHeader">
				<NavBar className="navBar" />
				<h1>ADVANCE GYM</h1>
				<div className="headerBg"></div>
				<div className="overlay"></div>
			</header>
		</div>
	);
};

export default AdvanceGym;
