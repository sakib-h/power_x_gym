import React from "react";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import Planning from "../Planning/Planning";

const HomePage = () => {
	return (
		<div className="homePage">
			<Header className="header" />
			<Planning />
		</div>
	);
};

export default HomePage;
