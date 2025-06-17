import "../assets/css/Home.css";
import hero from "../assets/images/hero.png";

function Home() {
	return (
		<>
			<nav className="navbar">
				<a href="#" className="logo">
					Drive<span>X</span>
				</a>

				<ul className="nav-list">
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/about">About</a>
					</li>
					<li>
						<a href="/services">Services</a>
					</li>
					<li>
						<a href="/features">Features</a>
					</li>
					<li>
						<a href="/contact">Contact</a>
					</li>
				</ul>

				<div className="nav-btns">
					<a href="/signup" className="btn btn-primary">
						Sign Up
					</a>
					<a href="/login" className="btn btn-secondary">
						Login
					</a>
				</div>
			</nav>

			<div className="hero-banner">
				<div className="hero-left">
					<h1>
						Welcome to <span>DriveX</span>
					</h1>
					<h3>Your Reliable Ride-Sharing Partner</h3>
					<p>
						DriveX simplifies your daily commute with smart, safe, and
						affordable ride-sharing. Whether you're heading to work, college, or
						anywhere in the city — we’re here to move you forward.
					</p>
					<div className="hero-buttons">
						<a href="/signup" className="btn btn-primary">
							Join Now
						</a>
						<a href="/features" className="btn btn-secondary">
							Explore Features
						</a>
					</div>
				</div>
				<div className="hero-right">
					<img src={hero} alt="DriveX Ride" />
				</div>
			</div>
		</>
	);
}

export default Home;
