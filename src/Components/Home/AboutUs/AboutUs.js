import React from "react";
import image from "../../../Resources/Images/aboutUs.jpg";
import "./AboutUs.css";
import "./responsive.css";
const AboutUs = () => {
	return (
		<section className="aboutUs">
			<div className="row align-items-center justify-content-between">
				<div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
					<img src={image} alt="" className="img-fluid" />
				</div>
				<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
					<h1>ABOUT US</h1>
					<h2>WE ARE HERE TO DREAM</h2>
					<h3>OUR TEAM IS HERE SERVE YOU</h3>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Expedita ipsum illum quis perferendis velit enim
						vitae assumenda officia pariatur nisi animi fuga ratione
						architecto, odio consectetur. A laboriosam officia
						voluptates, est sint nobis accusamus exercitationem
						aperiam ratione, accusantium cumque consectetur!
						Similique repellat vel alias quasi minus reiciendis ad
						magnam fugiat!
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
