import React, { useState, useRef } from "react";
import "./SignUp.css";
import Footer from "../../../Shared/Footer/Footer";
import Header from "../Header/Header";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import { useAuth } from "../../Firebase/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/AuthContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
	// --> Form ref defined <--
	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const confirmPasswordRef = useRef();

	// --> Importing from context  <--
	const { signup, currentUser } = useAuth();
	console.log(currentUser);

	// --> State Declaration <--
	const [loading, setLoading] = useState(false);
	const [validInput, setValidInput] = useState(false);
	const [error, setError] = useState("");

	// --> Handle Hooks <--
	const navigate = useNavigate();

	// --> Navigation Handler <--
	const navigationHandler = () => {
		navigate("/login");
	};

	// --> Email validation Handler <--
	const emailValidator = () => {
		const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
			emailRef.current.value
		);
		if (!validEmail) {
			setError("Please Enter a valid Email");
			setValidInput(false);
		} else {
			setError("");
			setValidInput(true);
		}
	};

	// --> Password validation Handler <--
	const passwordValidator = () => {
		const validPassword =
			/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/.test(
				passwordRef.current.value
			);
		if (!validPassword) {
			setError(
				"Password must contain with 8-16 letters, one capital letter, one number & one special character"
			);
			setValidInput(false);
		} else {
			setError("");
			setValidInput(true);
		}
	};
	// --> Confirm Password validation Handler <--
	const confirmPasswordValidator = () => {
		const confirmPassword =
			passwordRef.current.value === confirmPasswordRef.current.value;

		if (!confirmPassword) {
			setError("Password do not Match");
			setValidInput(false);
		} else {
			setError("");
			setValidInput(true);
		}
	};

	// --> Submit Handler <--
	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			setLoading(true);
			await signup(emailRef.current.value, passwordRef.current.value);
			updateProfile(auth.currentUser, {
				displayName:
					firstNameRef.current.value +
					" " +
					lastNameRef.current.value,
			});
		} catch (error) {
			setError("Failed to create an account");
			console.log(error);
		}
		setLoading(false);
	};

	return (
		<div className="signUp">
			<Header />
			<section>
				<Container
					className="d-flex align-items-center justify-content-center"
					style={{ minHeight: "100vh" }}
				>
					<div className="w-100" style={{ maxWidth: "600px" }}>
						<Card>
							<Card.Body>
								<h2 className="text-center">Sign Up Form</h2>
								{error && (
									<Alert variant="danger">{error}</Alert>
								)}
								<Form onSubmit={handleSubmit}>
									<Form.Group id="firstName ">
										<Form.Label>First Name</Form.Label>
										<Form.Control
											type="text"
											ref={firstNameRef}
											required
										/>
									</Form.Group>

									<Form.Group id=" lastName">
										<Form.Label>Last Name</Form.Label>
										<Form.Control
											type="text"
											ref={lastNameRef}
											required
										/>
									</Form.Group>

									<Form.Group id="email ">
										<Form.Label>Email Address</Form.Label>
										<Form.Control
											type="email"
											ref={emailRef}
											required
											onInput={emailValidator}
										/>
									</Form.Group>

									<Form.Group id="password">
										<Form.Label>Password</Form.Label>
										<Form.Control
											type="password"
											ref={passwordRef}
											required
											onInput={passwordValidator}
										/>
									</Form.Group>

									<Form.Group id="confirmPassword">
										<Form.Label>
											Confirm Password
										</Form.Label>
										<Form.Control
											type="password"
											ref={confirmPasswordRef}
											required
											onInput={confirmPasswordValidator}
										/>
									</Form.Group>
									<Button
										className="w-100 submit"
										type="submit"
										disabled={loading || !validInput}
									>
										Sign Up
									</Button>
								</Form>
							</Card.Body>
						</Card>
						<div className="w-100 text-center mt-2">
							<h6 onClick={navigationHandler} className="mt-3">
								Already have an account? <span>Log In</span>
							</h6>
						</div>
					</div>
				</Container>
			</section>
			<Footer />
		</div>
	);
};

export default Signup;
