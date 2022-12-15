import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Computing = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/computings")
    .then((res => res.json()))
    .then((data) => setData(data));
  }, [])


  return (
    <div className='app_computers'>
      <div className='header_starter'>
        <div className='text'>
          <h1>Computing Accessories</h1>
          <p>Computer accessories that suit your needs</p>
        </div>
        <div className='image'>
          <img src='https://skygardenwe.blob.core.windows.net/media/original_images/smartphones_EZ8eMfR.png' alt='' />
        </div>
      </div>

      <div className='products'>
      <h3>Computers & Accessories</h3>
      <div className='container'>
        {data.map((product) => {
          return (
          <Link to={`/computings/${product.id}`}>
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

export default Computing