import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../Header/Header";
import "./PricingPlans.css";
const PricingPlans = () => {
	return (
		<div className="pricingPlans">
			<Header />
			<section className="pricing  d-flex justify-content-between">
				<div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 p-3">
					<div className="contentContainer">
						<div className="bg1">
							<div className="content flex-column justify-content-center">
								<div className="text">
									<h6>BUILD MONTHLY</h6>
									<h2>ADVANCE PLAN</h2>
									<h1>$140</h1>
								</div>
								<div className="features">
									<div className="feature d-flex align-content-center">
										<ion-icon name="checkmark-outline"></ion-icon>
										<p>Mobile-Optimized</p>
									</div>
									<div className="feature d-flex align-content-center">
										<ion-icon name="checkmark-outline"></ion-icon>
										<p>Best Hosting</p>
									</div>
									<div className="feature d-flex  align-content-center">
										<ion-icon name="checkmark-outline"></ion-icon>
										<p>Free Custom</p>
									</div>
									<div className="feature d-flex align-content-center">
										<ion-icon name="checkmark-outline"></ion-icon>
										<p>Outstanding</p>
									</div>
									<div className="feature d-flex align-content-center">
										<ion-icon name="checkmark-outline"></ion-icon>
										<p>Happy Customers</p>
									</div>
								</div>
								<div className="button">
									<button>PURCHASE</button>
								</div>
							</div>
							<div className="colorOverlay"></div>
						</div>
					</div>
				</div>

				<div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 p-3">
					<div className="contentContainer">
						<div className="bg2">
							<div className="content flex-column justify-content-center ">
								<div className="text">
									<h6>BUILD MONTHLY</h6>
									<h2>BASIC PLAN</h2>
									<h1>$120</h1>
								</div>
								<div className="features">
									<div className="feature d-flex align-content-center">
										<ion-icon name="checkmark-outline"></ion-icon>
										<p>Mobile-Optimized</p>
									</div>
									<div className="feature d-flex align-content-center">
										<ion-icon name="checkmark-outline"></ion-icon>
										<p>Best Hosting</p>
									</div>
									<div className="feature d-flex  align-content-center">
										<ion-icon name="checkmark-outline"></ion-icon>
										<p>Free Custom</p>
									</div>
									<div className="feature d-flex align-content-center">
										<ion-icon name="checkmark-outline"></ion-icon>
										<p>Outstanding</p>
									</div>
									<div className="feature d-flex align-content-center">
										<ion-icon name="checkmark-outline"></ion-icon>
										<p>Happy Customers</p>
									</div>
								</div>
								<div className="button">
									<button>PURCHASE</button>
								</div>
							</div>
							<div className="colorOverlay"></div>
						</div>
					</div>
				</div>
				<div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 p-3">
					<div className="contentContainer">
						<div className="bg3">
							<div className="content flex-column justify-content-center">
								<div className="text">
									<h6>BUILD MONTHLY</h6>
									<h2>BEGINNERS PLAN</h2>
									<h1>$90</h1>
								</div>
								<div className="features">
									<div className="feature d-flex align-content-center">
										<ion-icon name="checkmark-outline"></ion-icon>
										<p>Mobile-Optimized</p>
									</div>
									<div className="feature d-flex align-content-center">
										<ion-icon name="checkmark-outline"></ion-icon>
										<p>Best Hosting</p>
									</div>
									<div className="feature d-flex  align-content-center">
										<ion-icon name="checkmark-outline"></ion-icon>
										<p>Free Custom</p>
									</div>
									<div className="feature d-flex align-content-center">
										<ion-icon name="checkmark-outline"></ion-icon>
										<p>Outstanding</p>
									</div>
									<div className="feature d-flex align-content-center">
										<ion-icon name="checkmark-outline"></ion-icon>
										<p>Happy Customers</p>
									</div>
								</div>
								<div className="button">
									<button>PURCHASE</button>
								</div>
							</div>
							<div className="colorOverlay"></div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default PricingPlans;
