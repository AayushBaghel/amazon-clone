import React, { useEffect, useState } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { getBasketTotal } from './reducer';
import axios from './axios';

function Payment() {
  const navigate = useNavigate();
  const [{ basket , user}, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const [clientSecret, setClientSecret] = useState(true);
  useEffect(() => {
    //generate the special stripe secret which allows is to charge a customer
    const getClientSecret = async () => {
        //axios is a way of making request (post, get)
        const response = await axios({
            method: 'post',
            // Stripe expects the total in a currencies subunits
            url: `/payments/create?total=${getBasketTotal(basket) * 100}`
        });
        setClientSecret(response.data.clientSecret)
    }

    getClientSecret();

  }, [basket])

  console.log('THE SECRET IS >>>', clientSecret)

  const handleSubmit = async event => {
    //Stripe Payment
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: elements.getElement(CardElement)
        }
    }).then(({ paymentIntent }) => {
        //paymentIntent = payment confirmation
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        navigate('/orders', {replace: true})
    })
  }

  const handleChange = async event => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  }

  let rupeeIndian = Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

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
                <div className='payment__review'>
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
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment__method'>
                    {/* Stripe Payment Functionality*/}
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />
                        <div className='payment__priceContainer'>
                            <h3>Order Total: { rupeeIndian.format(getBasketTotal(basket)) }</h3>
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                        </div>
                        {/* Errors */}
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment