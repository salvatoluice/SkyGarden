import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './category.css'

const Mobiles = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://skygardenbackend-production.up.railway.app/mobiles")
    .then((res => res.json()))
    .then((data) => setData(data));
  }, [])


  return (
    <div className='app_mobiles'>
      <div className='header_starter'>
        <div className='text'>
          <h1>Mobile phones & Tablets</h1>
          <p>Buy Smartphones, Featured Phones, Tablets or Mobile Accessories at great
            prices and top brands from the sellers around Nairobi. Same day delivery
            for all Nairobi orders.</p>
        </div>
        <div className='image'>
          <img src='https://skygardenwe.blob.core.windows.net/media/original_images/smartphones_EZ8eMfR.png' alt='' />
        </div>
      </div>

      <div className='products'>
      <h3>Mobile Phones</h3>
      <div className='container'>
        {data.map((product) => {
          return (
          <Link to={`/mobiles/${product.id}`}>
            <div className='card' key={product.id}>
              <img src={product.image} />
              <h3>{product.title.substring(0, 12)}...</h3>
              <p>{product.seller}</p>
              <h3>{product.price}</h3>
              <Link to={`/products/${product.id}`}>BUY NOW</Link>
            </div>
          </Link>
          )
        })}
      </div>
    </div>
    </div>
  )
}

export default Mobiles