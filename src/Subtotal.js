import React from 'react'
import './Subtotal.css'
// import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer';

function Subtotal() {
  let rupeeIndian = Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
  });
  const [{basket}, disptach] = useStateValue();

  return (
    <div className='subtotal'>
        {/* Price*/}
        {/* <CurrencyFormat 
        renderText={(value) => (
            <>
                <p>
                    Subtotal ({basket.length} items): <strong>{`₹ `}</strong>
                </p>
                <small className='subtotal__gift'>
                    <input type='checkbox' />This order contains a gift.
                </small>
            </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'₹ '}
        /> */}
        <>
            <p>
                Subtotal ({basket.length} items): <strong>{rupeeIndian.format(getBasketTotal(basket))}</strong>
            </p>
            <small className='subtotal__gift'>
                <input type='checkbox' />This order contains a gift.
            </small>
        </>
        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal