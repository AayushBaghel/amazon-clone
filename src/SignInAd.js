import React from 'react'
import './SignInAd.css'
import { Link } from 'react-router-dom'

function SignInAd() {
  return (
    <div className='signinad'>
        <p className='signinad__title'>
        Sign in for your best experience
        </p>
        <button className='signinad__button'>
          <p className='signinad__buttonText'>Sign in securely</p>
        </button>
    </div>
  )
}

export default SignInAd