import React, { useContext, useState } from "react";
import "./Login.css";
import Footer from "../../../Shared/Footer/Footer";
import Header from "../Header/Header";
import { initializeApp } from "firebase/app";
import FirebaseConfig from "../../Config/FirebaseConfig";
import { useForm } from "react-hook-form";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	FacebookAuthProvider,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { userContext } from "../../../../App";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [user, setUser] = useContext(userContext);
	const [userInfo, setUserInfo] = useState({
		displayName: "",
		email: "",
	});
	const [userInput, setUserInput] = useState({
		email: "",
		password: "",
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	// --> Sign In Existing User <--

	const inputHandler = (event) => {
		if (event.target.id === "email") {
			const loginInfo = { ...userInput };
			loginInfo.email = event.target.value;
			setUserInput(loginInfo);
		}
		if (event.target.id === "password") {
			const loginInfo = { ...userInput };
			loginInfo.password = event.target.value;
			setUserInput(loginInfo);
		}
	};
	const onSubmit = (data) => {
		signInWithEmailAndPassword(auth, userInput.email, userInput.password)
			.then((res) => {
				console.log(res.user);
			})
			.catch((err) => {
				const errorCode = err.code;
				const errorMessage = err.message;
				console.log(errorCode, errorMessage);
			});
	};

	// --> Firebase Initialization <--
	const app = initializeApp(FirebaseConfig);
	const auth = getAuth(app);

	// --> Google Login  <--
	const googleProvider = new GoogleAuthProvider();
	const googleSignIn = () => {
		signInWithPopup(auth, googleProvider)
			.then((res) => {
				const newUser = { ...userInfo };
				newUser.displayName = res.displayName;
				newUser.email = res.email;
				setUserInfo(newUser);
				setUser(newUser);
			})
			.catch((err) => {
				const errorCode = err.code;
				const errorMessage = err.message;
				console.log(errorCode, errorMessage);
			});
	};

	// --> Facebook Login  <--
	const facebookProvider = new FacebookAuthProvider();
	const facebookSignIn = () => {
		signInWithPopup(auth, facebookProvider)
			.then((res) => {
				const newUser = { ...userInfo };
				newUser.displayName = res.displayName;
				newUser.email = res.email;
				setUserInfo(newUser);
				setUser(newUser);
				console.log(res);
			})
			.catch((err) => {
				// Handle Errors here.
				const errorCode = err.code;
				const errorMessage = err.message;
				console.log(errorCode, errorMessage);
			});
	};

	const navigate = useNavigate();
	const signUpNavigation = () => {
		navigate("/signup");
	};

	return (
		<div className="login">
			<Header />
			<section>
				<div className="formContainer">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="formGroup">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								id="email"
								onInput={inputHandler}
								{...register("email", { required: true })}
							/>
							{errors.email?.type === "required" &&
								"email is required"}
						</div>

						<div className="formGroup">
							<label htmlFor="password">Password</label>
							<input
								type="password"
								id="password"
								onInput={inputHandler}
								{...register("password", { required: true })}
							/>
							{errors.password?.type === "required" &&
								"Password is required"}
							<div className="formText d-flex justify-content-between align-content-center">
								<h6
									className="signUp"
									onClick={signUpNavigation}
								>
									Need to create an account?
								</h6>
								<h6 className="forgottenPass">
									Forgotten Password?
								</h6>
							</div>
						</div>

						<input
							type="submit"
							value="SIGN IN"
							className="submit"
						/>
					</form>
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
			</section>
			<Footer />
		</div>
	);
};

export default Login;
