import "./App.css";
import React, { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from "./Components/Home/HomePage/HomePage";
import Error from "./Components/Error/Error";
import OurClasses from "./Components/Classes/OurClasses/OurClasses";
import AdvanceGym from "./Components/Classes/ClassSchedule/AdvanceGym/AdvanceGym";
import PsychoTraining from "./Components/Classes/ClassSchedule/PsychoTraining/PsychoTraining";
import SelfDefence from "./Components/Classes/ClassSchedule/SelfDefence/SelfDefence";
import CardioTraining from "./Components/Classes/ClassSchedule/CardioTraining/CardioTraining";
import StrengthTraining from "./Components/Classes/ClassSchedule/StrengthTraining/StrengthTraining";
import PricingPlans from "./Components/PricingPlans/PricingPlans/PricingPlans";
import Login from "./Components/UserAccess/Login/LoginPage/Login";
import SignUp from "./Components/UserAccess/SignUp/SignupPage/SignUp";
import PrivateOutlet from "./Components/UserAccess/PrivateOutlet/PrivateOutlet";
import Membership from "./Components/Membership/MembershipPage/Membership";
import { AuthProvider } from "./Components/UserAccess/Firebase/AuthContext";
import Services from "./Components/Services/Services/Services";
import AboutUs from "./Components/AboutUs/AboutUs/AboutUs";
import Blog from "./Components/Blog/Blog/Blog";
import ContactUs from "./Components/ContactUs/ContactUs/ContactUs";
export const userContext = createContext();

function App() {
	const [user, setUser] = useState({});

	useEffect(() => {
		AOS.init({
			offset: 150,
			duration: 500,
		});
		AOS.refresh();
	}, []);
	return (
		<AuthProvider>
			<userContext.Provider className="App" value={[user, setUser]}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="home" element={<HomePage />} />
					<Route path="services" element={<Services />} />
					<Route path="ourClasses" element={<OurClasses />} />
					<Route path="aboutUs" element={<AboutUs />} />
					<Route path="blog" element={<Blog />} />
					<Route path="pricing" element={<PricingPlans />} />
					<Route path="contactUs" element={<ContactUs />} />
					<Route path="psychoTraining" element={<PsychoTraining />} />
					<Route path="selfDefence" element={<SelfDefence />} />
					<Route path="advanceGym" element={<AdvanceGym />} />
					<Route path="cardioTraining" element={<CardioTraining />} />
					<Route
						path="strengthTraining"
						element={<StrengthTraining />}
					/>
					<Route path="login" element={<Login />} />
					<Route path="signup" element={<SignUp />} />
					<Route path="" element={<PrivateOutlet />}>
						<Route path="membership" element={<Membership />} />
					</Route>
					<Route path="*" element={<Error />} />
				</Routes>
			</userContext.Provider>
		</AuthProvider>
	);
}

export default App;
