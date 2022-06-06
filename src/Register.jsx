import React from 'react'

function Register() {
  return (
      <main>
    <div>Register</div>
    <form>
    <label htmlFor="username">
    Username:
        <input type="text" id="Username" />
        </label>
        <label htmlFor="password">
            Password:
        <input type="password" id="Password" />
        </label>
        <label htmlFor="Confirm_pwd">
            Confirm Password:
        <input type="password" id="Confirm_Pwd" />
        </label>
        <button>Sign Up</button>
    </form>
    <p>Already Registered</p>
    <a href="/login">Sign In</a>
    </main>
  )
}

export default Register