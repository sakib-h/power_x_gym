import React from "react";
import Footer from "../../Shared/Footer/Footer";
import ClassesInfo from "../ClassesInfo/ClassesInfo";
import Header from "../Header/Header";
import "./OurClasses.css";
import "./Responsive.css";
const OurClasses = () => {
	return (
		<div className="ourClasses">
			<Header />
			<ClassesInfo />
			<Footer />
		</div>
	);
};

export default OurClasses;
