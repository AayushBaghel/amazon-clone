import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating}) {

  let rupeeIndian = Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
  });

  const [{ basket },dispatch] = useStateValue();

  const addToBasket = () => {
    //add item to basket
    dispatch({
        type: 'ADD_TO_BASKET',
        item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating
        }
    })
  };

  return (
    <div className='product'>
        <div className="product__info">
            <p className='product__title'>
                { title }
            </p>
            <p className="product__price">
                {/* <small>₹ </small> */}
                <strong>{ rupeeIndian.format(price) }</strong>
            </p>
            <div className='product__rating'>
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p>⭐</p>
                    ))
                }
            </div>
        </div>
        <img 
            className='product__image'
            src={image}
            alt=''
        />
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product