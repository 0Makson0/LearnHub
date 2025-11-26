import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import CreateCourse from "./components/CreateCourse/CreateCourse.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
		<Route path="/CC" element={<CreateCourse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
