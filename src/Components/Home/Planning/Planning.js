import React from "react";
import progressIcon from "../../../Resources/Images/Group 80.png";
import workoutIcon from "../../../Resources/Images/Group 81.png";
import nutritionIcon from "../../../Resources/Images/Group 82.png";
import "./Planning.css";

const Planning = () => {
	return (
		<section className="planning" data-aos="zoom-in-left">
			<div className="card-group row">
				<div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 cardContainer">
					<div className="bg-Container  progressBg">
						<div className="cardContent">
							<div className="icon">
								<img
									src={progressIcon}
									alt=""
									className="img-fluid"
								/>
							</div>
							<h2>PROGRESSION</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Cum, harum deserunt dolorum
								accusamus quam eaque? Hic deleniti architecto
								eos quis quos provident dicta neque
								necessitatibus.
							</p>
						</div>
					</div>
				</div>
				<div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 cardContainer">
					<div className="bg-Container  workoutBg">
						<div className="cardContent">
							<div className="icon">
								<img
									src={workoutIcon}
									alt=""
									className="img-fluid"
								/>
							</div>
							<h2>WORKOUT</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Cum, harum deserunt dolorum
								accusamus quam eaque? Hic deleniti architecto
								eos quis quos provident dicta neque
								necessitatibus.
							</p>
						</div>
					</div>
				</div>
				<div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 cardContainer">
					<div className="bg-Container  nutritionBg">
						<div className="cardContent">
							<div className="icon">
								<img
									src={nutritionIcon}
									alt=""
									className="img-fluid"
								/>
							</div>
							<h2>NUTRITION</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Cum, harum deserunt dolorum
								accusamus quam eaque? Hic deleniti architecto
								eos quis quos provident dicta neque
								necessitatibus.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Planning;
