import React from 'react'
import Brands from '../brands/Brands'
import Category from '../categories/Category'
import Hero from './Hero'

const Home = () => {
  return (
    <div className='app_home'>
      <Hero />
      <Category />
      <Brands />
    </div>
  )
}

export default Home