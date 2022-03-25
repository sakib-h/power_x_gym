import React from "react";
import Footer from "../../Shared/Footer/Footer";
import ClassesInfo from "../ClassesInfo/ClassesInfo";
import Header from "../Header/Header";
import "./OurClasses.css";
import "./Responsive.css";
import Slide from "react-reveal/Fade";
const OurClasses = () => {
	return (
		<Slide right duration={500} className="ourClasses">
			<Header />
			<ClassesInfo />
			<Footer />
		</Slide>
	);
};

export default OurClasses;
