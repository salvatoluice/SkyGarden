import React from 'react'
import Brands from '../brands/Brands'
import Category from '../categories/Category'
import Desc from '../description/Desc'
import Products from '../products/Products'
import Reviews from '../reviews/Reviews'
import Hero from './Hero'
import './home.css'

const Home = () => {
  return (
    <div className='app_home'>
      <Hero />
      <Category />
      <Brands />
      <Products />
      <div className='bottom_image'>
        <img src='https://skygarden.azureedge.net/media/original_images/Middle-banner-1.jpg' alt="skygarden" />
      </div>
      <Reviews />
      <Desc />
    </div>
  )
}

export default Home