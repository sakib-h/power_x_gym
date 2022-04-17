import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Form, ProgressBar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Header from "../Header/Header";
import "./Payment.css";

// stripe components
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const Payment = () => {
	const stripePromise = loadStripe(
		"pk_test_51KN98OL7tQ6jANmIfhWNbalEAq8ZLqfIo9uwm4SpAWl1Qq0jb4kPXPHlpQySdF8Hk8lAQh7Se1A2bFg6HmngrGGl00vZK1vTpb"
	);

	const [clientSecret, setClientSecret] = useState("");

	const cartInfo = JSON.parse(localStorage.getItem("cartInfo"));
	const cart = {
		selectedPlan: cartInfo.plan,
		price: cartInfo.price,
		quantity: cartInfo.quantity,
	};

	useEffect(() => {
		// Create PaymentIntent as soon as the page loads
		fetch("http://localhost:5000/create-payment-intent", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(cart),
		})
			.then((res) => res.json())
			.then((data) => {
				setClientSecret(data.clientSecret);
			});
	}, []);

	const appearance = {
		theme: "stripe",
	};

	const options = {
		clientSecret,
		appearance,
	};
	return (
		<div className="payment">
			<Header />
			<section className="paymentSystem">
				{/* Progress Bar */}
				<div className="progressContainer">
					<ProgressBar
						id="progress"
						variant="warning"
						now={0}
					></ProgressBar>
					<div className="row justify-content-between">
						<div className="circle1 active">1</div>
						<div className="circle2 ">2</div>
						<div className="circle3 ">3</div>
					</div>
					<div className="d-flex justify-content-between textField">
						<h6 className="firstText">Bank Payment</h6>
						<h6 className="secondText">Personal Details</h6>
						<h6 className="thirdText">Membership Created</h6>
					</div>
				</div>

				{/* Stripe Form */}

				<div className="paymentArea d-flex justify-content-between ">
					<div className="cart col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
						<h1 className="cartTitle">Cart</h1>
						<h5>Selected Plan: {cartInfo.plan}</h5>
						<h2>Price: ${cartInfo.price}</h2>
					</div>
					<div className="stripePayment col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
						{clientSecret && (
							<Elements options={options} stripe={stripePromise}>
								<CheckoutForm />
							</Elements>
						)}
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default Payment;
