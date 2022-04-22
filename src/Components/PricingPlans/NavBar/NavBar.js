import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../Resources/Images/logo.png";
import { useAuth } from "../../UserAccess/Firebase/AuthContext";
import "./NavBar.css";
import "./Responsive.css";

const NavBar = () => {
	const { currentUser } = useAuth();
	const splittedName = currentUser.displayName.split(" ");
	const firstName = splittedName[0];
	const navigate = useNavigate();
	const navigationHandler = () => {
		navigate("/home");
	};

	return (
		<div className="blog">
			<nav className="navigation">
				<Navbar collapseOnSelect expand="lg md" sticky="top">
					<div
						className="col-5 col-sm-4 col-md-4 col-lg-2 col-xl-3 col-xxl-3 logo"
						onClick={navigationHandler}
					>
						{" "}
						<img src={Logo} alt="" className="img-fluid" />{" "}
					</div>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ms-auto">
							<Link to="/home" className=" me-2 ">
								Home
							</Link>
							<Link to="/services" className=" me-2">
								Services
							</Link>
							<Link to="/ourClasses" className=" me-2">
								Our Classes
							</Link>
							<Link to="/membership" className=" me-2">
								Membership
							</Link>
							<Link to="/aboutUs" className=" me-2 ">
								About Us
							</Link>
							<Link to="/blog" className=" me-2">
								Blog
							</Link>
							<Link to="/pricing" className="active me-2">
								Pricing
							</Link>
							<Link to="/contactUs " className=" me-2">
								Contact Us
							</Link>
							{currentUser ? (
								<Link to="/userProfile " className="">
									{firstName}
								</Link>
							) : (
								<Link to="/login " className="">
									Login
								</Link>
							)}
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</nav>
		</div>
	);
};

export default NavBar;
