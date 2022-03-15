import React from "react";
import "./ChooseUs.css";
import muscle from "../../../Resources/Images/Group 87.png";

const ChooseUs = () => {
	return (
		<section className="chooseUs d-flex justify-content-center">
			<div
				className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-6"
				p-5
			>
				<div className="bgContainer">
					<img src={muscle} alt="" />
				</div>
			</div>
			<div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-6 p-5">
				<div className="bgContainer"></div>
			</div>
			<div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-6 p-5">
				<div className="bgContainer"></div>
			</div>
		</section>
	);
};

export default ChooseUs;
