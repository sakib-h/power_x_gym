import React from "react";
import "./TrainingPrograms.css";
import "./Responsive.css";
const TrainingPrograms = () => {
	return (
		<section className="trainingProgram" data-aos="fade-down">
			<h2>
				TRAINING <span>PROGRAMS</span>{" "}
			</h2>
			<div className="programsCard row justify-content-center">
				<div className=" card col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
					<div className="p-1">
						<div class="bgContainerYoga">
							<div className="content">
								<div className="contentBg d-flex align-items-center">
									<h3>YOGA TRAINING SESSION</h3>
									<ion-icon name="arrow-forward-outline"></ion-icon>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className=" card col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
					<div className="p-1">
						<div class="bgContainerCardio">
							<div className="content">
								<div className="contentBg d-flex align-items-center justify-content-center">
									<h3>CARDIO TRAINING SESSION</h3>
									<ion-icon name="arrow-forward-outline"></ion-icon>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TrainingPrograms;
