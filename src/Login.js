import React, { useState } from 'react';
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function Login() {
  const [{}, user] = useStateValue();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = e => {
    e.preventDefault();

    auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            navigate('/')
            console.log('signed in')
        })
        .catch(error => alert(error.message))
  }
  const register = e => {
    e.preventDefault();
    auth 
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //it successfully created a new user with email and password
            console.log(auth);
            if(auth) {
                navigate('/')
                console.log('user registered')
            }
        })
        .catch(error => alert(error.message))
  }

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
                <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                <h5>Password</h5>
                <input type='password' value={password} onChange={e=> setPassword(e.target.value)} />
                <button type='submit' onClick={signIn} className='login__signinButton1'>Sign in</button>
            </form>
            <p>
                By signing-in you agree to Amazon's Clone [MADE BY: AAYUSH BAGHEL] Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
            <button onClick={register} className='login__signinButton2'>Create your Amazon Account</button>
        </div>
        {/* Create New Account */}
    </div>
  )
}

export default Login