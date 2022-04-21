import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Header from "../Header/Header";

const Successful = () => {
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			navigate("/userProfile");
		}, 3000);
	}, []);

	return (
		<div>
			<Header />
			<h1 className="text-center">Hi </h1>
			<Footer />
		</div>
	);
};

export default Successful;
