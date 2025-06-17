import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Services from "./pages/Services.jsx"
import Features from "./pages/Features.jsx"
import UserSignup from "./pages/UserSignup.jsx"
import UserLogin from "./pages/UserLogin.jsx"
import DriverSignup from "./pages/DriverSignup.jsx"
import DriverLogin from "./pages/DriverLogin.jsx"

function App() {
    return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/services" element={<Services />} />
				<Route path="/features" element={<Features />} />
				<Route path="/signup" element={<UserSignup />} />
				<Route path="/login" element={<UserLogin />} />
				<Route path="/driver-signup" element={<DriverSignup />} />
				<Route path="/driver-login" element={<DriverLogin />} />
			</Routes>
		</div>
	);
}

export default App
