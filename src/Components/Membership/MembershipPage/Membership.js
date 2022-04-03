import React from "react";
import { Button, Form } from "react-bootstrap";
import Footer from "../../Shared/Footer/Footer";
import Header from "../Header/Header";
import "./Membership.css";
const Membership = () => {
	return (
		<div className="membership">
			<Header />
			<section>
				<Form className="row">
					{/* First Name */}
					<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
						<Form.Group className="margin" controlId="firstName">
							<Form.Label>First Name</Form.Label>
							<Form.Control type="text" required />
						</Form.Group>
					</div>

					{/* Last Name */}
					<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
						<Form.Group className="margin" controlId="lastName">
							<Form.Label>Last Name</Form.Label>
							<Form.Control type="text" required />
						</Form.Group>
					</div>

					{/* Email */}
					<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
						{/* First Name */}
						<Form.Group className="margin" controlId="email">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" required />
						</Form.Group>
					</div>

					{/* Contact No */}
					<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
						<Form.Group className="margin" controlId="contact">
							<Form.Label>Contact Number</Form.Label>
							<Form.Control type="tel" required />
						</Form.Group>
					</div>

					{/* Date of Birth */}
					<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
						<Form.Group className="margin" controlId="contact">
							<Form.Label>Date of Birth </Form.Label>
							<Form.Control type="date" required />
						</Form.Group>
					</div>

					{/* Gender */}
					<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
						<Form.Group className="margin" controlId="contact">
							<Form.Label>Gender </Form.Label>
							<Form.Select
								aria-label="Default select example"
								required
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
							<Form.Control type="text" required />
						</Form.Group>
					</div>

					{/* Country */}
					<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
						<Form.Group className="margin" controlId="lastName">
							<Form.Label>Country/Region:</Form.Label>
							<Form.Control type="text" required />
						</Form.Group>
					</div>

					{/* City */}
					<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
						<Form.Group className="margin" controlId="lastName">
							<Form.Label>City:</Form.Label>
							<Form.Control type="text" required />
						</Form.Group>
					</div>

					{/* Country */}
					<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
						<Form.Group className="margin" controlId="lastName">
							<Form.Label>Postal Code:</Form.Label>
							<Form.Control type="text" required />
						</Form.Group>
					</div>

					<div className="buttonPadding">
						<Button variant="primary" type="submit" className="button">
							NEXT
						</Button>
					</div>
				</Form>
			</section>
			<Footer />
		</div>
	);
};

export default Membership;
