import React from 'react'
import { FiArrowRightCircle } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import './category.css'

const Category = () => {
  return (
    <div className='categories'>
    <Link to='/mobiles'>
      <div className='category'>
        <img src='https://skygarden.azureedge.net/media/original_images/smartphones_EZ8eMfR.png' alt='' />
        <div className='category_details'>
          <h4>SmartPhones</h4>
          <FiArrowRightCircle />
        </div>
      </div>
    </Link>
    <Link to='/computings'>
    <div className='category'>
      <img src='https://skygarden.azureedge.net/media/original_images/laptop_FDcFYvJ.png' alt='' />
      <div className='category_details'>
        <h4>Computing</h4>
        <FiArrowRightCircle />
      </div>
    </div>
    </Link>
    <div className='category'>
      <img src='https://skygarden.azureedge.net/media/original_images/laptop_FDcFYvJ.png' alt='' />
      <div className='category_details'>
        <h4>Home Appliances</h4>
        <FiArrowRightCircle />
      </div>
    </div>
    <div className='category'>
      <img src='https://skygarden.azureedge.net/media/original_images/televisions_mX7PUyv.png' alt='' />
      <div className='category_details'>
        <h4>Electronics</h4>
        <FiArrowRightCircle />
      </div>
    </div>
    <div className='category'>
      <img src='https://skygarden.azureedge.net/media/original_images/Categories4.png' alt='' />
      <div className='category_details'>
        <h4>Furniture</h4>
        <FiArrowRightCircle />
      </div>
    </div>
  </div>
  )
}

export default Category