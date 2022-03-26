import React from "react";
import NavBar from "../../NavBar/NavBar";
import "./PsychoTraining.css";
import image from "../../../../Resources/Images/training1.png";
import Footer from "../../../Shared/Footer/Footer";
const PsychoTraining = () => {
	const classSchedule = [
		{
			date: "Monday",
			time: "8:00 AM - 9:00 AM",
		},
		{
			date: "Tuesday",
			time: "10:00 AM - 11:00 AM",
		},
		{
			date: "Wednesday",
			time: "7:00 AM - 8:00 AM",
		},
		{
			date: "Thursday",
			time: "5:00 PM - 6:00 PM",
		},
		{
			date: "Friday",
			time: "6:00 AM - 7:00 AM",
		},
		{
			date: "Saturday",
			time: "7:00 PM - 8:00 PM",
		},
	];

	return (
		<div className="psychoTraining">
			<header className="classHeader">
				<NavBar className="navBar" />
				<h1>Psycho Training</h1>
				<div className="headerBg"></div>
				<div className="overlay"></div>
			</header>
			<section className="row justify-content-center">
				<div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7 pe-4">
					<img
						src={image}
						alt="Psycho Training"
						className="img-fluid"
					/>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Doloribus nostrum deleniti illum reprehenderit minus
						pariatur ullam, modi optio voluptas error iure ex
						provident culpa praesentium odio consequuntur asperiores
						quae, recusandae ea! Et, doloremque atque porro, vel,
						cum animi exercitationem sequi praesentium aliquam
						repudiandae voluptatum. Deserunt amet in error enim
						rerum sed perferendis odit, consectetur placeat maxime
						voluptatem! Minus quaerat laudantium corporis maxime ex
						numquam rem in, optio distinctio inventore, hic, illum
						non voluptates temporibus! Praesentium est impedit
						perferendis molestias sed, nobis, unde, rerum cupiditate
						cumque facilis quisquam a adipisci! Magni consequuntur
						nihil maiores consequatur odit illo deserunt
						reprehenderit consectetur animi.
					</p>

					<div className="d-flex align-items-center">
						<ion-icon name="checkmark-circle-sharp"></ion-icon>
						<h4>Having Slimmer Shapely Thighs</h4>
					</div>

					<div className="d-flex align-items-center">
						<ion-icon name="checkmark-circle-sharp"></ion-icon>
						<h4>Getting Stronger Body</h4>
					</div>

					<div className="d-flex align-items-center">
						<ion-icon name="checkmark-circle-sharp"></ion-icon>
						<h4>Increased Metabolism</h4>
					</div>

					<div className="d-flex align-items-center">
						<ion-icon name="checkmark-circle-sharp"></ion-icon>
						<h4>Increased Muscular Endurance</h4>
					</div>

					<div className="d-flex align-items-center">
						<ion-icon name="checkmark-circle-sharp"></ion-icon>
						<h4>Maximum Results in Less Time</h4>
					</div>

					<div className="d-flex align-items-center">
						<ion-icon name="checkmark-circle-sharp"></ion-icon>
						<h4>Firm Hips and Tummy</h4>
					</div>
				</div>
				<div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5 ps-4">
					<h1>
						{" "}
						<span>CLASS</span> SCHEDULE
					</h1>
					<div className="row">
						{classSchedule.map((data) => (
							<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 pe-2">
								<div className="bgContainer">
									<h5>{data.date}</h5>
									<small>{data.time}</small>
								</div>
							</div>
						))}
					</div>
					<button>JOIN US</button>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default PsychoTraining;
