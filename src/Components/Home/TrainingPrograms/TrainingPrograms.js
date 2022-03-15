import React from "react";
import "./TrainingPrograms.css";
import yoga from "../../../Resources/Images/yogaTraining.png";
import cardio from "../../../Resources/Images/cardioTraining.jpg";
const TrainingPrograms = () => {
	return (
		<section className="trainingProgram">
			<h2>
				TRAINING <span>PROGRAMS</span>{" "}
			</h2>
			<div className="programsCard d-flex justify-content-center">
				<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 pe-2">
					<div class="bgContainerYoga">
						<div className="content">
							<div className="contentBg d-flex align-items-center">
								<h3>YOGA TRAINING SESSION</h3>
								<ion-icon name="arrow-forward-outline"></ion-icon>
							</div>
						</div>
					</div>
				</div>
				<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ps-2">
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
		</section>
	);
};

export default TrainingPrograms;
