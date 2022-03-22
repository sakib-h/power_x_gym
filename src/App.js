import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/Home/HomePage/HomePage";
import Error from "./Components/Error/Error";
function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="home" element={<HomePage />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
}

export default App;
