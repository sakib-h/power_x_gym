import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Resources/Images/logo.png";
import "./NavBar.css";

const NavBar = () => {
	return (
		<nav className="navigation">
			<Navbar collapseOnSelect expand="lg md" sticky="top">
				<Container>
					<Navbar.Brand
						href="home"
						className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3"
					>
						{" "}
						<img src={Logo} alt="" className="img-fluid" />{" "}
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ms-auto">
							<Link to="home" className="pe-5 pb-2 pt-2 ">
								Home
							</Link>
							<Link to="services" className="pe-5 pb-2 pt-2">
								Services
							</Link>
							<Link to="ourClasses" className="pe-5 pb-2 pt-2">
								Our Classes
							</Link>
							<Link to="aboutUs" className="pe-5 pb-2 pt-2">
								About Us
							</Link>
							<Link to="blog" className="pe-5 pb-2 pt-2">
								Blog
							</Link>
							<Link to="pricing" className="pe-5 pb-2 pt-2">
								Pricing
							</Link>
							<Link to="contactUs " className=" pt-2 pb-2">
								Contact Us
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</nav>
	);
};

export default NavBar;
