import React from 'react'
import { Link } from 'react-router-dom'
import './SubHeader.css'

function SubHeader() {
  return (
    <div className='subheader'>
        {/* Categories */}
        {/* All Button */}
        <Link to='/' className='subheader__link'>
            <div className='subheader__option2'>
                <img
                    className='subheader__burgerMenuIcon'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png'
                    alt=''
                />
                <span className='subheader__optionLine2'>All</span>
            </div>
        </Link>
        {/* Link 1 */}
        <Link to='/' className='subheader__link'>
            <div className='subheader__option'>
                <span className='subheader__optionLine1'>Amazon miniTV</span>
            </div>
        </Link>
        {/* Link 2 */}
        <Link to='/' className='subheader__link'>
            <div className='subheader__option'>
                <span className='subheader__optionLine1'>Sell</span>
            </div>
        </Link>
        {/* Link 3 */}
        <Link to='/' className='subheader__link'>
            <div className='subheader__option'>
                <span className='subheader__optionLine1'>Best Sellers</span>
            </div>
        </Link>
        {/* Link 4 */}
        <Link to='/' className='subheader__link'>
            <div className='subheader__option'>
                <span className='subheader__optionLine1'>Mobiles</span>
            </div>
        </Link>
        {/* Link 5 */}
        <Link to='/' className='subheader__link'>
            <div className='subheader__option'>
                <span className='subheader__optionLine1'>Today's Deals</span>
            </div>
        </Link>
        {/* Link 6 */}
        <Link to='/' className='subheader__link'>
            <div className='subheader__option'>
                <span className='subheader__optionLine1'>Customer Service</span>
            </div>
        </Link>
        {/* Link 7 */}
        <Link to='/' className='subheader__link'>
            <div className='subheader__option'>
                <span className='subheader__optionLine1'>Electronics</span>
            </div>
        </Link>
        {/* Link 8 */}
        <Link to='/' className='subheader__link'>
            <div className='subheader__option'>
                <span className='subheader__optionLine1'>Prime</span>
            </div>
        </Link>
        {/* Link 9 */}
        <Link to='/' className='subheader__link'>
            <div className='subheader__option'>
                <span className='subheader__optionLine1'>New Releases</span>
            </div>
        </Link>
        {/* Link 10 */}
        <Link to='/' className='subheader__link'>
            <div className='subheader__option'>
                <span className='subheader__optionLine1'>Home & Kitchen</span>
            </div>
        </Link>
        {/* Link 11 */}
        <Link to='/' className='subheader__link'>
            <div className='subheader__option'>
                <span className='subheader__optionLine1'>Amazon Pay</span>
            </div>
        </Link>
    </div>
  )
}

export default SubHeader