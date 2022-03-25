import React from "react";
import { useNavigate } from "react-router-dom";
import "./ClassesInfo.css";

const ClassesInfo = () => {
	const navigate = useNavigate();
	const psychoTrainingHandler = () => {
		navigate("/psychoTraining");
	};
	const selfDefenceHandler = () => {
		navigate("/selfDefence");
	};
	const advanceGymHandler = () => {
		navigate("/advanceGym");
	};
	const cardioTrainingHandler = () => {
		navigate("/cardioTraining");
	};
	const strengthTrainingHandler = () => {
		navigate("/strengthTraining");
	};
	return (
		<section className="classInfo row justify-content-between">
			<div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 p-2">
				<div className="training1Bg cardBg">
					<div
						className="textBg row align-content-center"
						onClick={psychoTrainingHandler}
					>
						<h5 className="align-self-center">PSYCHO TRAINING</h5>
					</div>
				</div>
			</div>

			<div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 p-2">
				<div className="training2Bg cardBg">
					<div
						className="textBg row align-content-center"
						onClick={selfDefenceHandler}
					>
						<h5 className="align-self-center">SELF DEFENCE</h5>
					</div>
				</div>
			</div>

			<div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 p-2">
				<div className="training3Bg cardBg">
					<div
						className="textBg row align-content-center"
						onClick={advanceGymHandler}
					>
						<h5 className="align-self-center">ADVANCE GYM</h5>
					</div>
				</div>
			</div>

			<div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 p-2">
				<div className="training4Bg cardBg">
					<div
						className="textBg row align-content-center"
						onClick={cardioTrainingHandler}
					>
						<h5 className="align-self-center">CARDIO TRAINING</h5>
					</div>
				</div>
			</div>

			<div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 p-2">
				<div className="training5Bg cardBg">
					<div
						className="textBg row align-content-center"
						onClick={strengthTrainingHandler}
					>
						<h5 className="align-self-center">STRENGTH TRAINING</h5>
					</div>
				</div>
			</div>

			<div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 p-2">
				<div className="training6Bg cardBg">
					<div
						className="textBg row align-content-center"
						onClick={psychoTrainingHandler}
					>
						<h5 className="align-self-center">PSYCHO TRAINING</h5>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ClassesInfo;
