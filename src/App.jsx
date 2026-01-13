import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import MyCourses from "./components/MyCourses/MyCourses.jsx";
import Header from "./components/Header/Header.jsx";
import ModuleRegister from "./components/ModuleRegister/ModuleRegister.jsx";

function App() {
	return (
		<BrowserRouter>
		<Header /> 
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/courses" element={<MyCourses />} />
				<Route path="/module" element={<ModuleRegister />} />

			</Routes>
		</BrowserRouter>
	);
}

export default App;
