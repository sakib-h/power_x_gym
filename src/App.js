import "./App.css";
import React, { useEffect } from "react";
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
function App() {
	useEffect(() => {
		AOS.init({
			offset: 150,
			duration: 500,
		});
		AOS.refresh();
	}, []);
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="home" element={<HomePage />} />
				<Route path="ourClasses" element={<OurClasses />} />
				<Route path="pricing" element={<PricingPlans />} />
				<Route path="psychoTraining" element={<PsychoTraining />} />
				<Route path="selfDefence" element={<SelfDefence />} />
				<Route path="advanceGym" element={<AdvanceGym />} />
				<Route path="cardioTraining" element={<CardioTraining />} />
				<Route path="strengthTraining" element={<StrengthTraining />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
}

export default App;
