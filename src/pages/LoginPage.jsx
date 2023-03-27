import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../components/LoginPage.css"



function LoginPage() {
  return (
    <>
      <div className='login'>
        <form action="#" method="POST">
          <h1>Login</h1>

          <label htmlFor="email">Email</label>
          <input type="email" id="login-email" name="email" required />
          <br />

          <div className='forgot-password-header'>
            <label htmlFor="password" id='password-label'> Password</label>
            <a href="#" id='forgot-password-label'>Forgot?</a>
          </div>
          

          <input type="password" id="login-password" name="password" required />
          <br />
          <br />


          <button type="submit" id='submit'>Sign In</button>
          <p ><a href="#">Create Account</a></p>
      
        </form>
      </div>
    </>

  )
}

export default LoginPage