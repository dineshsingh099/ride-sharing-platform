import React from 'react'

function UserLogin() {
    return (
        <div>
            <h2>User Login</h2>
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
            <button onClick={() => window.location.href='/driver-login'}>Login as Driver</button>
        </div>
    )
}

export default UserLogin
