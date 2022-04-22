import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import { useAuth } from "../../UserAccess/Firebase/AuthContext";
import Header from "../Header/Header";
import "./Successful.css";

const Successful = () => {
	const { currentUser } = useAuth();
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			navigate("/userProfile");
		}, 2000);
	}, []);

	return (
		<div className="successful">
			<Header />
			<section>
				<h1 className="title">Hi, {currentUser.displayName} </h1>
				<p>Your Gym Membership is successfully updated</p>
				<Spinner animation="border" role="status">
					<span className="visually-hidden">Loading...</span>
				</Spinner>
				<p>You will be redirected to your profile shortly</p>
			</section>
			<Footer />
		</div>
	);
};

export default Successful;
