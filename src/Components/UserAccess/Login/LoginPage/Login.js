import React, { useContext, useRef, useState } from "react";
import "./Login.css";
import Footer from "../../../Shared/Footer/Footer";
import Header from "../Header/Header";
import { getIdToken } from "firebase/auth";
import { userContext } from "../../../../App";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../Firebase/AuthContext";
import { Alert, Form, Card, Container, Button } from "react-bootstrap";

const Login = () => {
	// --> Context Declaration <--
	const [user, setUser] = useContext(userContext);

	// --> State Declaration <--
	const [userInfo, setUserInfo] = useState({
		isSignedIn: false,
		displayName: "",
		email: "",
	});

	const [userInput, setUserInput] = useState({
		email: "",
		password: "",
	});

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	// --> Importing from context  <--
	const { googleLogIn, facebookLogIn, login, currentUser } = useAuth();
	
	// --> Form ref defined <--
	const emailRef = useRef();
	const passwordRef = useRef();

	// --> Navigation Handler <--
	const navigate = useNavigate();
	const location = useLocation();

	const redirectHandler = () => {
		if (location.state?.from) {
			navigate(location.state.from);
		} else {
			navigate("/home");
		}
	};

	const navigationHandler = () => {
		navigate("/signup");
	};

	// --> Sign In Existing User <--

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			setLoading(true);
			await login(emailRef.current.value, passwordRef.current.value).then(
				(res) => {
					const newUser = { ...userInfo };
					newUser.displayName = user.displayName;
					newUser.email = user.email;
					setUserInfo(newUser);
					setUser(newUser);
					// --> Store Id Token to local storage <--
					getIdToken(res.user).then((idToken) => {
						localStorage.setItem("token", idToken);
						redirectHandler();
					});
				}
			);
		} catch (err) {
			setError("Failed to Login");
		}
		setLoading(false);
	};

	// --> Google Login  <--

	const googleSignIn = async () => {
		try {
			setLoading(true);
			await googleLogIn().then((res) => {
				const newUser = { ...userInfo };
				newUser.displayName = user.displayName;
				newUser.email = user.email;
				setUserInfo(newUser);
				setUser(newUser);
				// --> Store Id Token to local storage <--
				getIdToken(res.user).then((idToken) => {
					localStorage.setItem("token", idToken);
					redirectHandler();
				});
			});
		} catch (error) {
			setError("Failed to Login");
		}
		setLoading(false);
	};

	// --> Facebook Login  <--
	const facebookSignIn = async () => {
		try {
			setLoading(true);
			await facebookLogIn().then((res) => {
				const newUser = { ...userInfo };
				newUser.displayName = user.displayName;
				newUser.email = user.email;
				setUserInfo(newUser);
				setUser(newUser);
				// --> Store Id Token to local storage <--
				getIdToken(res.user).then((idToken) => {
					localStorage.setItem("token", idToken);
					redirectHandler();
				});
			});
		} catch (error) {
			setError("Failed to Login");
		}
		setLoading(false);
	};

	return (
		<div className="login">
			<Header />
			<section>
				<Container
					className="d-flex align-items-center justify-content-center"
					style={{ minHeight: "100vh" }}
				>
					<div className="w-100" style={{ maxWidth: "500px" }}>
						<Card>
							<Card.Body>
								<h2 className="text-center">Log In Form</h2>
								{error && (
									<Alert variant="danger">{error}</Alert>
								)}
								<Form onSubmit={handleSubmit}>
									<Form.Group id="email ">
										<Form.Label>Email Address</Form.Label>
										<Form.Control
											type="email"
											ref={emailRef}
											required
										/>
									</Form.Group>

									<Form.Group id="password">
										<Form.Label>Password</Form.Label>
										<Form.Control
											type="password"
											ref={passwordRef}
											required
										/>
									</Form.Group>
									<Button
										className="w-100 submit"
										type="submit"
										disabled={loading}
									>
										Log In
									</Button>
								</Form>
							</Card.Body>
						</Card>
						<div className=" textContainer d-flex justify-content-between mt-3">
							<h6 className="forgottenPass">
								Forgotten Password?
							</h6>

							<h6 onClick={navigationHandler} className="signUp">
								Need to create an account? <span>Sign Up</span>
							</h6>
						</div>
						<h4>OR</h4>
						<div
							onClick={googleSignIn}
							className="buttonBg row align-content-center justify-content-center google"
						>
							<div className="icon col-md-2">
								<ion-icon name="logo-google"></ion-icon>
							</div>
							<div className="text col-md-10">
								<h3>CONTINUE WITH GOOGLE</h3>
							</div>
						</div>
						<div
							onClick={facebookSignIn}
							className="buttonBg row align-content-center justify-content-center facebook"
						>
							<div className="icon col-md-2 ">
								<ion-icon name="logo-facebook"></ion-icon>
							</div>
							<div className="text col-md-10">
								<h3>CONTINUE WITH FACEBOOK</h3>
							</div>
						</div>
					</div>
				</Container>
			</section>
			<Footer />
		</div>
	);
};

export default Login;
