import React from "react";
import NavBar from "../../NavBar/NavBar";
import "./StrengthTraining.css";

const StrengthTraining = () => {
	return (
		<div>
			<header className="classHeader">
				<NavBar className="navBar" />
				<h1>Strength Training</h1>
				<div className="headerBg"></div>
				<div className="overlay"></div>
			</header>
		</div>
	);
};

export default StrengthTraining;
