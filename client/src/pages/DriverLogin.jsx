import React from 'react'

const DriverLogin = () => {
  return (
    <div>
        <h2>Driver Login</h2>
        <form>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <div>
                <p>Forgot your password? <a href="/reset-password">Reset it here</a>.</p>
            </div>

            <p>Don't have an account? <a href="/signup">Sign up here</a>.</p>

            <button type="submit">Login</button>

        </form>
        <h3>Or</h3>
        <button>Login as User</button>
    </div>
  )
}

export default DriverLogin
