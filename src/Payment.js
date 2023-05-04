import React from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';

function Payment() {
  const [{ basket , user}, dispatch] = useStateValue();

  return (
    <div className='payment'>
        <h1>
            Checkout (<Link to='/checkout'>{basket.length} items</Link>)
        </h1>
        <div className='payment__container'>
            {/* Delivery Address */}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>786 Aayush Residence</p>
                    <p>Delhi, India</p>
                </div>
            </div>
            {/* Review Items */}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review Items and delivery</h3>
                </div>
                <div className='payment__reviewItems'>
                    {
                        basket.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))
                    }
                </div>
            </div>
            {/* Payment Methods */}
            <div className='payment__sction'>
                <div className='payment__title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment__methodDetails'>
                    {/* Stripe Payment Functionality*/}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment