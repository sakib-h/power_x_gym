import React from "react";
import logo from "../../../Resources/Images/logo.png";
import "./Footer.css";
import "./Responsive.css";
const Footer = () => {
	return (
		<footer className="footer">
			<div className="footerContainer row align-items-top justify-content-between ">
				<div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 pt-5 pe-3">
					<img src={logo} alt="" className="img-fluid" />
				</div>
				<div className="row col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9 pt-5 ps-3 justify-content-between">
					<div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
						<div className="header">
							<h6>Need Help?</h6>
						</div>
						<div className="text">
							<p>Help Center</p>
							<p>Email Support</p>
							<p>Live Chat</p>
							<p>Gift Certificates</p>
							<p>Send us Feedback</p>
						</div>
					</div>
					<div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
						<div className="header">
							<h6> Digital Resources</h6>
						</div>
						<div className="text">
							<p>Articles</p>
							<p>E-books</p>
						</div>
					</div>
					<div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
						<div className="header">
							<h6>Contact with Us</h6>
						</div>
						<div className="text">
							<p className="icon d-flex  align-items-center">
								<ion-icon name="logo-youtube"></ion-icon>
								<ion-icon name="logo-facebook"></ion-icon>
								<ion-icon name="logo-instagram"></ion-icon>
								<ion-icon name="logo-twitter"></ion-icon>
								<ion-icon name="logo-whatsapp"></ion-icon>
							</p>
							<p>Forum</p>
						</div>
					</div>
					<div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
						<div className="header">
							<h6>Join our Newsletter</h6>
						</div>
						<div className="text">
							<p>
								Get exclusive news, features, and updates from
								The Power X Gym
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
