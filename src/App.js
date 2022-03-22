import "./App.css";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from "./Components/Home/HomePage/HomePage";
import Error from "./Components/Error/Error";
import OurClasses from "./Components/Classes/OurClasses/OurClasses";
function App() {
	useEffect(() => {
		AOS.init({
			offset: 200,
			duration: 1000,
		});
		AOS.refresh();
	}, []);
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="home" element={<HomePage />} />
				<Route path="ourClasses" element={<OurClasses />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
}

export default App;
