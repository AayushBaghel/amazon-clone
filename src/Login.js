import React from 'react';
import "./Login.css"
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='login'>
        {/* Header with amazon logo */}
        <div className='login__header'>
            <Link to='/'>
                <img 
                    className='login__headerLogo'
                    src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
                    alt=''
                />
            </Link>
        </div>
        {/* Sign In card */}
        <div className='login__signin'>
            <span className='login__signinTitle'>Sign in</span>
            <form>
                <h5>Email or moible phone number</h5>
                <input type='text' />
                <h5>Password</h5>
                <input type='password' />
                <button className='login__signinButton1'>Sign in</button>
            </form>
            <p>
                By signing-in you agree to Amazon's Clone [MADE BY: AAYUSH BAGHEL] Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
            <button className='login__signinButton2'>Create your Amazon Account</button>
        </div>
        {/* Create New Account */}
    </div>
  )
}

export default Login