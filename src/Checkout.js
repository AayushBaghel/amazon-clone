import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import { auth } from './firebase'

function Checkout() {
    const [{basket}, user] = useStateValue();
    return (
    <div className='checkout'>
        <div className='checkout__adContainer'>
            <img 
                    className='checkout__ad'
                    src='https://m.media-amazon.com/images/G/31/img17/AmazonPay/Siddhi/CBCC_1-PC-Header_Non-Prime_pc._CB590617846_.jpg'
                    alt=''
            />
            {basket?.length > 0 && (
                <div className='checkout__right'>
                    <Subtotal />
                </div>
            )}
        </div>
        <div className='checkout__left'>
            {basket?.length === 0 ? (
                <div className='checkout__empty'>
                    <img 
                        className='checkout__emptyImage' 
                        src='https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg'
                        alt=''
                    />
                    <div>
                        <h2>Your Amazon Cart is empty</h2>
                        <p>
                            You have no items in your basket. To buy one or more items, click 
                            "Add to basket" next to the item.
                        </p>
                    </div>
                </div>
            ) : (
                <div className='checkout__notempty'>
                    {/* <h3>{auth.currentUser?"Hello, "+auth.currentUser.email.substring(0,auth.currentUser.email.lastIndexOf("@")):"no user found"}</h3> */}
                    <h2 className='checkout__notemptyTitle'>Your Amazon Cart</h2>
                    {/* List out all of the checkout products */}
                    {basket.map((item) =>(
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            rating={item.rating}
                        />
                    ))}
                </div>
            )
            }
        </div>
    </div>
  )
}

export default Checkout