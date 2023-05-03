import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
  const [{ basket }, user] = useStateValue();
  const handleAuthentication = () => {
    if(user != null) {
        auth.signOut().then(function() {
            //sign out successful
            console.log('signed out');
        }).catch(function(error) {
            //An error happppened
            console.log(error);
        });
    }
    // if(user) {
    //     auth.signOut();
    // }
  }

  return (
    <nav className='header'>
        {/* logo on the left -> img */}
        <Link to='/'>
            <img
                className='header__logo'
                src='https://onlinebusinessmanager.com/wp-content/uploads/2018/09/white-amazon-logo-png-6.png'
                alt=''
            />
        </Link>
        {/* Location */}
        <Link to='/login' className='header__link'>
            <div className='header__option2'>
                <img
                    className='header__loc'
                    src='https://www.pngkey.com/png/full/235-2350342_location-white-location-icon-with-transparent-background.png'
                    alt=''
                />
                <div className='header__option'>
                    <span className='header__optionLine1'>Hello </span>
                    <span className='header__optionLine2'>Select your address</span>
                </div>
            </div>
        </Link>
        {/* Search Box */}
        <div className='header__search'>
            <input type='text' className='header__searchInput' />
            <img
                className='header__searchIcon'
                src='https://openclipart.org/image/2400px/svg_to_png/213239/Search-icon.png'
                alt=''
            />
        </div>
        {/* Container for all 4 links */}
        <div className='header__nav'>
            {/* Language */}
            <Link to='/' className='header__link'>
                <div className='header__option2'>
                    <img
                        className='header__lang'
                        src='https://www.mmppicture.co.in/wp-content/uploads/2021/01/Indian-Flag-PNG-9.png'
                        alt=''
                    />
                    <span className='header__optionLine2'>EN</span>
                </div>
            </Link>
            {/* Sign In */}
            <Link to= {user? "/login" : "/"} className='header__link'>
                <div onClick={handleAuthentication} className='header__option'>
                    <span className='header__optionLine1'>{!auth.currentUser ? 'Hello, sign in' : 'Hello, ' + auth.currentUser.email.substring(0, auth.currentUser.email.lastIndexOf("@")) }</span>
                    <span className='header__optionLine2'>{!auth.currentUser ? 'Account & Lists': 'Sign Out'}</span>
                </div>
            </Link>
            {/* Return and orders */}
            <Link to="/" className='header__link'>
                <div className='header__option'>
                    <span className='header__optionLine1'>Returns </span>
                    <span className='header__optionLine2'>& Orders</span>
                </div>
            </Link>
            {/* Cart with numbers */}
            <Link to="/checkout" className='header__link'>
                <div className='header__optionBasket'>
                <img
                    className='header__basketIcon'
                    src='http://getdrawings.com/free-icon-bw/shopping-car-icon-21.png'
                    alt=''
                />
                    <span className='header__optionLine2'>{basket?.length}</span>
                </div>
            </Link>
        </div>
    </nav>
  )
}

export default Header