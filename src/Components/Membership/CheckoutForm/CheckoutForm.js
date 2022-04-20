import React, { useEffect, useState } from "react";

// stripe components
import {
	PaymentElement,
	useStripe,
	useElements,
} from "@stripe/react-stripe-js";
import { useAuth } from "../../UserAccess/Firebase/AuthContext";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const [message, setMessage] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const { currentUser } = useAuth();
	const cartInfo = JSON.parse(localStorage.getItem("cartInfo"));
	const navigate = useNavigate();

	useEffect(() => {
		if (!stripe) {
			return;
		}

		const clientSecret = new URLSearchParams(window.location.search).get(
			"payment_intent_client_secret"
		);

		if (!clientSecret) {
			return;
		}

		stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
			switch (paymentIntent.status) {
				case "succeeded":
					setMessage("Payment succeeded!");
					alert("Payment succeeded");
					const userInfo = {
						email: currentUser.email,
						isPaymentDone: true,
						plan: cartInfo.plan,
						created: new Date(),
					};
					const cart = {
						plan: "",
						price: "",
						quantity: "",
					};
					fetch(`http://localhost:5000/createMembership`, {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(userInfo),
					})
						.then((res) => res.json())
						.then((success) => {
							if (success) {
								localStorage.setItem(
									"cartInfo",
									JSON.stringify(cart)
								);
								navigate("/membership");
							} else {
								alert("Submission failed, please try again");
							}
						});
					break;
				case "processing":
					setMessage("Your payment is processing.");
					break;
				case "requires_payment_method":
					setMessage(
						"Your payment was not successful, please try again."
					);
					break;
				default:
					setMessage("Something went wrong.");
					break;
			}
		});
	}, [stripe]);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js has not yet loaded.
			// Make sure to disable form submission until Stripe.js has loaded.
			return;
		}

		setIsLoading(true);

		const { error } = await stripe.confirmPayment({
			elements,
			confirmParams: {
				// Make sure to change this to your payment completion page
				return_url: "http://localhost:3000/payment",
			},
		});

		// This point will only be reached if there is an immediate error when
		// confirming the payment. Otherwise, your customer will be redirected to
		// your `return_url`. For some payment methods like iDEAL, your customer will
		// be redirected to an intermediate site first to authorize the payment, then
		// redirected to the `return_url`.
		if (error.type === "card_error" || error.type === "validation_error") {
			setMessage(error.message);
			console.log(error.message);
		} else {
			setMessage("An unexpected error occurred.");
		}

		setIsLoading(false);
	};
	return (
		<div>
			<form id="payment-form" onSubmit={handleSubmit}>
				<PaymentElement id="payment-element" />
				<button
					disabled={isLoading || !stripe || !elements}
					id="submit"
				>
					<span id="button-text">
						{isLoading ? (
							<div className="spinner" id="spinner"></div>
						) : (
							"Pay now"
						)}
					</span>
				</button>
				{/* Show any error or success messages */}
				{message && <div id="payment-message">{message}</div>}
			</form>
		</div>
	);
};

export default CheckoutForm;
