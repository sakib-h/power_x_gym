import React, { useContext, useState } from "react";
import "./SignUp.css";
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
} from "firebase/auth";
import { userContext } from "../../../../App";
import { useNavigate } from "react-router-dom";

const Signup = () => {
	const [user, setUser] = useContext(userContext);
	const [userInfo, setUserInfo] = useState({
		displayName: "",
		email: "",
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);

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
	const navigationHandler = () => {
		navigate("/login");
	};

	return (
		<div className="signUp">
			<Header />
			<section>
				<div className="formContainer">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="formGroup">
							<label htmlFor="firstName">First Name</label>
							<input
								type="text"
								id="firstName"
								{...register("firstName", { required: true })}
							/>
							{errors.firstName?.type === "required" &&
								"First name is required"}
						</div>

						<div className="formGroup">
							<label htmlFor="lastName">Last Name</label>
							<input
								type="text"
								id="lastName"
								{...register("lastName", { required: true })}
							/>
							{errors.lastName?.type === "required" &&
								"Last name is required"}
						</div>

						<div className="formGroup">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								id="email"
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
								{...register("password", { required: true })}
							/>
							{errors.password?.type === "required" &&
								"Password is required"}
						</div>

						<div className="formGroup">
							<label htmlFor="confirmPassword">
								Confirm Password
							</label>
							<input
								type="confirmPassword"
								id="password"
								{...register("confirmPassword", {
									required: true,
								})}
							/>
							{errors.confirmPassword?.type === "required" &&
								"Password did not Matched"}
						</div>
						<input
							type="submit"
							value="CREATE AN ACCOUNT"
							className="submit"
						/>
					</form>
					<h6>
						Already a User?{" "}
						<span onClick={navigationHandler}>Login</span>
					</h6>
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

export default Signup;
