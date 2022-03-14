import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Header from "../Header/Header";
import Planning from "../Planning/Planning";
import "./HomePage.css";

const HomePage = () => {
	return (
		<div className="homePage">
			<Header className="header" />
			<Planning />
			<AboutUs />
		</div>
	);
};

export default HomePage;
