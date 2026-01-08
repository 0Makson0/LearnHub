import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import MyCourses from "./components/MyCourses/MyCourses.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
	return (
		<BrowserRouter>
		<Header /> 
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/courses" element={<MyCourses />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
