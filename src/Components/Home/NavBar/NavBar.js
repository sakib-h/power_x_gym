import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Resources/Images/logo.png";
import "./NavBar.css";
import "./Responsive.css";

const NavBar = () => {
	const navigationHandler = () => {
		console.log("Clicked");
	};
	return (
		<nav className="navigation">
			<Navbar collapseOnSelect expand="lg md" sticky="top">
				<div
					href="home"
					className="col-5 col-sm-4 col-md-4 col-lg-2 col-xl-3 col-xxl-3 logo"
					onClick={navigationHandler}
				>
					{" "}
					<img src={Logo} alt="" className="img-fluid" />{" "}
				</div>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ms-auto">
						<Link to="home" className=" me-2 ">
							Home
						</Link>
						<Link to="services" className=" me-2">
							Services
						</Link>
						<Link to="ourClasses" className=" me-2 ">
							Our Classes
						</Link>
						<Link to="aboutUs" className=" me-2 ">
							About Us
						</Link>
						<Link to="blog" className=" me-2">
							Blog
						</Link>
						<Link to="pricing" className=" me-2">
							Pricing
						</Link>
						<Link to="contactUs ">Contact Us</Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</nav>
	);
};

export default NavBar;
