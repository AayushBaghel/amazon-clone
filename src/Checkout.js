import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
    const [{basket}] = useStateValue();
    return (
    <div className='checkout'>
        <img 
            className='checkout__ad'
            src='https://m.media-amazon.com/images/G/31/img17/AmazonPay/Siddhi/CBCC_1-PC-Header_Non-Prime_pc._CB590617846_.jpg'
            alt=''
        />
        {basket?.length === 0 ? (
            <div>
                <h2>Your Shopping Basket is empty</h2>
                <p>
                    You have no items in your basket. To buy one or more items, click 
                    "Add to basket" next to the item.
                </p>
            </div>
        ) : (
            <div>
                <h2 className='checkout__title'>Your Shopping Basket</h2>
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
  )
}

export default Checkout