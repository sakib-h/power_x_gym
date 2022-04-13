import React, { useContext, useRef, useState } from "react";
import { Button, Form, ProgressBar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Header from "../Header/Header";
import "./Payment.css";

// stripe components
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { userContext } from "../../../App";
const Payment = () => {
	const [user, setUser] = useContext(userContext);

	const stripePromise = loadStripe(
		"pk_test_51KN98OL7tQ6jANmIfhWNbalEAq8ZLqfIo9uwm4SpAWl1Qq0jb4kPXPHlpQySdF8Hk8lAQh7Se1A2bFg6HmngrGGl00vZK1vTpb"
	);

	const options = {
		// passing the client secret obtained from the server
		clientSecret:
			"pi_1DqPEe2eZvKYlo2ClQt8EHvd_secret_vygiwSSEb3o6MYaij73r2IB7W",
	};
	return (
		<div className="payment">
			<Header />
			<section>
				{/* Progress Bar */}
				<div className="progressContainer">
					<ProgressBar
						id="progress"
						variant="warning"
						now={50}
					></ProgressBar>
					<div className="row justify-content-between">
						<div className="circle1 active">1</div>
						<div className="circle2 active">2</div>
						<div className="circle3 ">3</div>
					</div>
					<div className="d-flex justify-content-between textField">
						<h6 className="firstText">Personal Details</h6>
						<h6 className="secondText">Bank Payment</h6>
						<h6 className="thirdText">Membership Created</h6>
					</div>
				</div>

				{/* User Form */}
				<Elements stripe={stripePromise} options={options}>
					<CheckoutForm />
				</Elements>

				<div className="buttons d-flex justify-content-between">
					<Button className="button back" disabled>
						Prev
					</Button>

					<Button type="submit" className="button next">
						Next
					</Button>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default Payment;
