import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import ChooseUs from "../ChooseUs/ChooseUs";
import Header from "../Header/Header";
import Planning from "../Planning/Planning";
import TrainingPrograms from "../TrainingPrograms/TrainingPrograms";
import "./HomePage.css";

const HomePage = () => {
	return (
		<div className="homePage">
			<Header className="header" />
			<Planning />
			<AboutUs />
			<TrainingPrograms />
			<ChooseUs />
		</div>
	);
};

export default HomePage;
