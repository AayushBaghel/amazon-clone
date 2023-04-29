import React from 'react'
import './Category.css'
import { Link } from 'react-router-dom'

function Category({ id, title, image1, image2, image3, image4, title1, title2, title3, title4 }) {
  return (
    <div className='category'>
        <p className='category__title'>
            { title }
        </p>
        <div className='category__4in1'>
            <div className='category__2in1'>
                <Link to='/' className='category__subcategoryLink'>
                    <div className='category__subcategory'>
                        <img
                            className='category__subcategoryImage'
                            src= {image1}
                            alt=''
                        />
                        <p className='category__subcategoryTitle'>{ title1 }</p>
                    </div>
                </Link>
                <Link to='/' className='category__subcategoryLink'>
                    <div className='category__subcategory'>
                        <img
                            className='category__subcategoryImage'
                            src= {image2}
                            alt=''
                        />
                        <p className='category__subcategoryTitle'>{ title2 }</p>
                    </div>
                </Link>
            </div>
            <div className='category__2in1'>
                <Link to='/' className='category__subcategoryLink'>
                    <div className='category__subcategory'>
                        <img
                            className='category__subcategoryImage'
                            src= {image3}
                            alt=''
                        />
                        <p className='category__subcategoryTitle'>{ title3 }</p>
                    </div>
                </Link>
                <Link to='/' className='category__subcategoryLink'>
                    <div className='category__subcategory'>
                        <img
                            className='category__subcategoryImage'
                            src= {image4}
                            alt=''
                        />
                        <p className='category__subcategoryTitle'>{ title4 }</p>
                    </div>
                </Link>
            </div>
        </div>
        <Link className='category__seemore'>
            <span>See more</span>
        </Link>
    </div>
  )
}

export default Category