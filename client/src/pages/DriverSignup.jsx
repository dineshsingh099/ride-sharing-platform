import React from 'react'

const DriverSignup = () => {
  return (
    <div>
      <h2>Driver Signup</h2>
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
        <div>
          <label htmlFor="vehicle">Vehicle Information:</label>
          <input type="text" id="vehicle" name="vehicle" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default DriverSignup
