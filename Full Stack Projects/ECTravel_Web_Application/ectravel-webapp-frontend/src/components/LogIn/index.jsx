import React from 'react'
import "./LogIn.css";
import { Link } from 'react-router-dom';
const LogIn = () => {
  return (
    <div className='LogIn'>
        <div className="login-container">
            <h1>Login</h1>
            <div className='input-box-wrapper'>
                <input className='login-input-box' type="text" required/>
                <span></span>
                <label>Email ID</label>
            </div>
            <div className='input-box-wrapper'>
                <input className='login-input-box' type="text" required/>
                <span></span>
                <label>Password</label>
            </div>
            <Link >Forget password?</Link>
            <input className='login-input-box login-submit-btn' type="submit" />
            <div className='login-bottom'>
            <p>Not have an account?</p><Link to="/signup">Sign up</Link>
            </div>
        </div>
    </div>
  )
}

export default LogIn