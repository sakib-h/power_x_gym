import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import ChooseUs from "../ChooseUs/ChooseUs";
import Footer from "../../Shared/Footer/Footer";
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
			<Footer />
		</div>
	);
};

export default HomePage;
