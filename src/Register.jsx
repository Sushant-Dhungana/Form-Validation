import React from 'react'

function Register() {
  return (
      <main>
    <div>Register</div>
    <form>
        <input type="username" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button>Sign Up</button>
    </form>
    <p>Already Registered</p>
    <a href="/login">Sign In</a>
    </main>
  )
}

export default Register