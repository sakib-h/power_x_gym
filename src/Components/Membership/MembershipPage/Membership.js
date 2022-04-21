import React, { useRef, useState, useEffect } from "react";
import { Button, Form, ProgressBar } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import { useAuth } from "../../UserAccess/Firebase/AuthContext";
import Header from "../Header/Header";
import "./Membership.css";
const Membership = () => {
	// --> State declaration <--
	const [error, setError] = useState({
		firstName: "",
		lastName: "",
		email: "",
		number: "",
	});
	const { currentUser } = useAuth();
	const [formValid, setFormValid] = useState(false);

	// --> Form ref Declaration <--
	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const emailRef = useRef();
	const numberRef = useRef();
	const dateRef = useRef();
	const genderRef = useRef();
	const addressRef = useRef();
	const countryRef = useRef();
	const cityRef = useRef();
	const postalCodeRef = useRef();

	//! --> Form Validation Starts <--

	// --> Fist Name Validation  <--
	const firstNameValidationHandler = () => {
		const validName = /^([a-zA-Z ]){2,30}$/.test(
			firstNameRef.current.value
		);
		if (!validName) {
			const inputError = { ...error };
			inputError.firstName =
				"Only contains alphabets and only space character between words and total characters in the field should be in between 2 and 30.";
			setError(inputError);
			setFormValid(false);
		} else {
			const inputError = { ...error };
			inputError.firstName = "";
			setError(inputError);
			setFormValid(true);
		}
	};

	// --> Last Name Validation  <--
	const lastNameValidation = () => {
		const validName = /^([a-zA-Z ]){2,30}$/.test(lastNameRef.current.value);
		if (!validName) {
			const inputError = { ...error };
			inputError.lastName =
				"Only contains alphabets and only space character between words and total characters in the field should be in between 2 and 30.";
			setError(inputError);
			setFormValid(false);
		} else {
			const inputError = { ...error };
			inputError.lastName = "";
			setError(inputError);
			setFormValid(true);
		}
	};

	// --> Email Validation  <--
	const emailValidation = () => {
		const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
			emailRef.current.value
		);
		if (!validEmail) {
			const inputError = { ...error };
			inputError.email = "Please enter a valid email";
			setError(inputError);
			setFormValid(false);
		} else {
			const inputError = { ...error };
			inputError.email = "";
			setError(inputError);
			setFormValid(true);
		}
	};

	// --> Contact No Validation  <--
	const numberValidation = () => {
		const validNumber = /^[0-9]+$/.test(numberRef.current.value);
		if (!validNumber) {
			const inputError = { ...error };
			inputError.number = "Please enter a valid phone number";
			setError(inputError);
			setFormValid(false);
		} else {
			const inputError = { ...error };
			inputError.number = "";
			setError(inputError);
			setFormValid(true);
		}
	};
	const userMail = currentUser.email;
	useEffect(() => {
		fetch(`http://localhost:5000/user/${userMail}`)
			.then((res) => res.json())
			.then((data) => console.log(data));
	}, []);

	// --> Submit Handler <--
	const navigate = useNavigate();

	// !Get the cart item from local storage
	// const cartInfo = JSON.parse(localStorage.getItem("cartInfo"));

	const splittedName = currentUser.displayName.split(" ");
	const firstName = splittedName[0];
	const lastName = splittedName[1];

	// Submit Handler
	const clickHandler = (event) => {
		// Get data from form & local storage
		const userData = {
			firstName: firstNameRef.current.value,
			lastName: lastNameRef.current.value,
			number: numberRef.current.value,
			birthDate: dateRef.current.value,
			gender: genderRef.current.value,
			address: addressRef.current.value,
			country: countryRef.current.value,
			city: cityRef.current.value,
			postalCode: postalCodeRef.current.value,
		};
		// Sending user info to backend

		fetch(`http://localhost:5000/update/${userMail}`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(userData),
		})
			.then((res) => res.json())
			.then((acknowledged) => {
				if (acknowledged) {
					navigate("/membership-created-successfully");
				} else {
					alert("Update failed try again letter");
				}
			});
		event.preventDefault();
	};
	return (
		<div>
			<div className="membership">
				<Header />
				<section>
					{/* Progress Bar */}
					<div className="progressContainer">
						<ProgressBar
							id="progress"
							variant="warning"
							now={50}
						></ProgressBar>
						<div className="d-flex justify-content-between">
							<div className="circle1 active">1</div>
							<div className="circle2 active">2</div>
							<div className="circle3 ">3</div>
						</div>
						<div className="d-flex justify-content-between textField">
							<h6 className="firstText">Bank Payment</h6>
							<h6 className="secondText">Personal Details</h6>
							<h6 className="thirdText">Membership Created</h6>
						</div>
					</div>

					{/* User Form */}
					<Form className="row">
						{/* First Name */}
						<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
							<Form.Group
								className="margin"
								controlId="firstName"
							>
								<Form.Label>First Name</Form.Label>
								<Form.Control
									type="text"
									required
									ref={firstNameRef}
									value={firstName}
									onInput={firstNameValidationHandler}
								/>
								<h6 className="text-danger pt-1">
									{error.firstName}
								</h6>
							</Form.Group>
						</div>

						{/* Last Name */}
						<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
							<Form.Group className="margin" controlId="lastName">
								<Form.Label>Last Name</Form.Label>
								<Form.Control
									type="text"
									required
									ref={lastNameRef}
									defaultValue={lastName}
									onInput={lastNameValidation}
								/>
								<h6 className="text-danger pt-1">
									{error.lastName}
								</h6>
							</Form.Group>
						</div>

						{/* Email */}
						<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
							{/* First Name */}
							<Form.Group className="margin" controlId="email">
								<Form.Label>Email</Form.Label>
								<Form.Control
									type="email"
									required
									ref={emailRef}
									onInput={emailValidation}
									value={currentUser.email}
									disabled
								/>
								<h6 className="text-danger pt-1">
									{error.email}
								</h6>
							</Form.Group>
						</div>

						{/* Contact No */}
						<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
							<Form.Group className="margin" controlId="contact">
								<Form.Label>Contact Number</Form.Label>
								<Form.Control
									type="tel"
									required
									ref={numberRef}
									onInput={numberValidation}
								/>
								<h6 className="text-danger pt-1">
									{error.number}
								</h6>
							</Form.Group>
						</div>

						{/* Date of Birth */}
						<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
							<Form.Group className="margin" controlId="contact">
								<Form.Label>Date of Birth </Form.Label>
								<Form.Control
									type="date"
									required
									ref={dateRef}
								/>
							</Form.Group>
						</div>

						{/* Gender */}
						<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
							<Form.Group className="margin" controlId="contact">
								<Form.Label>Gender </Form.Label>
								<Form.Select
									aria-label="Default select example"
									required
									ref={genderRef}
								>
									<option>Gender</option>
									<option value="male">Male</option>
									<option value="female">Female</option>
									<option value="other">Other</option>
								</Form.Select>
							</Form.Group>
						</div>

						{/* Address */}
						<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
							<Form.Group className="margin" controlId="lastName">
								<Form.Label>Address line 1:</Form.Label>
								<Form.Control
									type="text"
									required
									ref={addressRef}
								/>
							</Form.Group>
						</div>

						{/* Country */}
						<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
							<Form.Group className="margin" controlId="lastName">
								<Form.Label>Country/Region:</Form.Label>
								<Form.Control
									type="text"
									required
									ref={countryRef}
								/>
							</Form.Group>
						</div>

						{/* City */}
						<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
							<Form.Group className="margin" controlId="lastName">
								<Form.Label>City:</Form.Label>
								<Form.Control
									type="text"
									required
									ref={cityRef}
								/>
							</Form.Group>
						</div>

						{/* Country */}
						<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
							<Form.Group className="margin" controlId="lastName">
								<Form.Label>Postal Code:</Form.Label>
								<Form.Control
									type="text"
									required
									ref={postalCodeRef}
								/>
							</Form.Group>
						</div>

						<div className="buttons d-flex justify-content-between">
							<Button
								type="submit"
								className="button"
								disabled={!formValid}
								onClick={clickHandler}
							>
								Next
							</Button>
						</div>
					</Form>
				</section>
				<Footer />
			</div>
		</div>
	);
};

export default Membership;
