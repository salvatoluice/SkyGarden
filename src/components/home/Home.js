import React from 'react'
import Brands from '../brands/Brands'
import Category from '../categories/Category'
import Product from '../products/Product'
import Products from '../products/Products'
import Hero from './Hero'

const Home = () => {
  return (
    <div className='app_home'>
      <Hero />
      <Category />
      <Brands />
      <Products />
    </div>
  )
}

export default Home