import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/Home/HomePage/HomePage";
import Error from "./Components/Error/Error";
import OurClasses from "./Components/Classes/OurClasses/OurClasses";
function App() {
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
