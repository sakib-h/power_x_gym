import React from "react";
import NavBar from "../../NavBar/NavBar";
import "./PsychoTraining.css";
const PsychoTraining = () => {
	return (
		<div>
			<header className="classHeader">
				<NavBar className="navBar" />
				<h1>Psycho Training</h1>
				<div className="headerBg"></div>
				<div className="overlay"></div>
			</header>
		</div>
	);
};

export default PsychoTraining;
