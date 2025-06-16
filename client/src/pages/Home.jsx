import "../assets/css/Home.css";

function Home() {
	return (
		<>
			<nav className="navbar">
				<a href="#" className="logo">
					Drive<span>X</span>
				</a>
				<ul className="nav-list">
					<li>
						<a href="#home">Home</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#services">Services</a>
					</li>
					<li>
						<a href="#features">Features</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>

				<div className="nav-btns">
					<a href="#" className="btn btn-primary">
						Sign Up
					</a>
					<a href="#" className="btn btn-secondary">
						Login
					</a>
				</div>
			</nav>
		</>
	);
}

export default Home;
