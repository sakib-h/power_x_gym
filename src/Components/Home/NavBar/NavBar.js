import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../../App";
import Logo from "../../../Resources/Images/logo.png";
import "./NavBar.css";
import "./Responsive.css";
import { getAuth, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import FirebaseConfig from "../../UserAccess/Firebase/FirebaseConfig";

const NavBar = () => {
	const [user, setUser] = useContext(userContext);
	const navigate = useNavigate();
	const navigationHandler = () => {
		navigate("/home");
	};
	const app = initializeApp(FirebaseConfig);
	const auth = getAuth(app);
	const signOutHandler = async () => {
		try {
			signOut(auth)
				.then(() => {
					// Sign-out successful.
				})
				.catch((err) => console.log(err));
		} catch (error) {
			// An error happened.
		}
	};

	return (
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
						<Link to="/home" className=" me-2 active ">
							Home
						</Link>
						<Link to="/services" className=" me-2">
							Services
						</Link>
						<Link to="/ourClasses" className=" me-2 ">
							Our Classes
						</Link>
						<Link to="/aboutUs" className=" me-2 ">
							About Us
						</Link>
						<Link to="/blog" className=" me-2">
							Blog
						</Link>
						<Link to="/pricing" className=" me-2">
							Pricing
						</Link>
						<Link to="/contactUs " className=" me-2">
							Contact Us
						</Link>
						<Link to="/login " className="">
							Login
						</Link>
						<button className="logOut" onClick={signOutHandler}>
							Logout
						</button>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</nav>
	);
};

export default NavBar;
