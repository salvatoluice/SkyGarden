import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './product.css'

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://skygardenbackend-production.up.railway.app/products")
    .then((res) => res.json())
    .then((data => setData(data)));
  }, [])

 

  return (
    <div className='products'>
      <h3>December Flash Sales</h3>
      <div className='container'>
        {data.map((product) => {
          return (
          <Link to={`/products/${product.id}`}>
            <div className='card' key={product.id}>
              <img src={product.image} />
              <h3>{product.title}</h3>
              <p>{product.seller}</p>
              <h3>{product.price}</h3>
              <Link to={`/products/${product.id}`}>BUY NOW</Link>
            </div>
          </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Products