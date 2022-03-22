import React from "react";
import "./ChooseUs.css";
import muscle from "../../../Resources/Images/Group 87.png";
import cardio from "../../../Resources/Images/Group 88.png";
import gift from "../../../Resources/Images/gift-2.png";
import "./Responsive.css";

const ChooseUs = () => {
	return (
		<section className="chooseUs">
			<h2>
				<span>WHY</span> CHOOSE US
			</h2>
			<div className=" row justify-content-center">
				<div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 p-3">
					<div className="bgContainer">
						<img src={muscle} alt="" />
						<h4>FREE FITNESS TRAINING</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Rerum tempora non quaerat eaque? Hic
							perspiciatis minus praesentium. Iste totam, dolor
							aut magni laboriosam sequi, illum labore ipsa animi,
							necessitatibus qui?
						</p>
					</div>
				</div>
				<div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 p-3">
					<div className="bgContainer">
						<img src={cardio} alt="" />
						<h4>TONS OF CARDIO & STRENGTH</h4>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Facere, et? Hic perspiciatis repudiandae,
							expedita illum ipsum accusamus incidunt
							reprehenderit libero itaque quasi eveniet iusto
							consequatur unde quibusdam. Laboriosam, ea veniam?
						</p>
					</div>
				</div>
				<div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 p-3">
					<div className="bgContainer">
						<img src={gift} alt="" />
						<h4>NO COMMITMENT MEMBERSHIP</h4>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Quaerat modi optio voluptate maxime esse
							obcaecati error eveniet eum omnis ratione ipsam,
							mollitia numquam quo quis, vitae nemo voluptatibus
							nulla distinctio magnam enim fugiat! Nemo, optio.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ChooseUs;
