import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './product.css'

const Product = () => {
  const {id} = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/products/${id}`)
    .then((res) => res.json())
    .then((product => setProduct(product)));
  }, [])

  return (
    <div className='main-container'>
      <div className='product_container'>
        <img src={product.image} />
        <div className='info'>
          <h2>{product.title}</h2>
          <h4>Seller: {product.seller}</h4>
          <h1>Ksh. {product.price}</h1>
          <button>Add to cart</button>
        </div>
      </div>
      <div className='description'>
        <h4>DESCRIPTION</h4>
        <p>{product.description}</p>
      </div>
    </div>
  )
}

export default Product