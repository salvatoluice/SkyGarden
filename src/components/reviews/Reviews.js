import React from 'react'
import './reviews.css'
import { ImQuotesLeft } from 'react-icons/im'

const Reviews = () => {
  return (
    <div className='reviews_container'>
        <h2>What Our Customers Say</h2>
        <div className='reviews'>
            <div className='reviews_body'>
                <h1><ImQuotesLeft /></h1>
                <p>Excellent customer service and speed</p>
                <h3>William</h3>
                <p>13 Dec 2022</p>
            </div>
            <div className='reviews_body'>
                <h1><ImQuotesLeft /></h1>
                <p>Great service, love the product as well!!</p>
                <h3>Manasvi Harania</h3>
                <p>07 Dec 2022</p>
            </div>
            <div className='reviews_body'>
                <h1><ImQuotesLeft /></h1>
                <p>The rider _ delivery person</p>
                <h3>Sophie</h3>
                <p>01 Dec 2022</p>
            </div>
        </div>
    </div>
  )
}

export default Reviews