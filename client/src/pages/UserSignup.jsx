import React from 'react'

function UserSignup() {
    return (
			<div>
				<h2>User Signup</h2>
				<form>
					<div>
						<label htmlFor="name">Name:</label>
						<input type="text" id="name" name="name" required />
					</div>
					<div>
						<label htmlFor="email">Email:</label>
						<input type="email" id="email" name="email" required />
					</div>
					<div>
						<label htmlFor="password">Password:</label>
						<input type="password" id="password" name="password" required />
					</div>
					<p>
						Already have an account? <a href="/login">Login here</a>.
					</p>
					<button type="submit">Sign Up</button>
				</form>
                <h3>Or</h3>
				<button onClick={() => window.location.href='/driver-signup'}>Sign Up as Driver</button>

			</div>
		);
}

export default UserSignup
