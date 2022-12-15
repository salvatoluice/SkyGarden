import React from 'react'
import { FiArrowRightCircle } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='app_home'>
      <div className='categories'>
        <Link to='/mobiles'>
          <div className='category'>
            <img src='https://skygarden.azureedge.net/media/original_images/smartphones_EZ8eMfR.png' alt='' />
            <div className='category_details'>
              <h1>SmartPhones</h1>
              <FiArrowRightCircle />
            </div>
          </div>
        </Link>
        <div className='category'>
          <img src='https://skygarden.azureedge.net/media/original_images/laptop_FDcFYvJ.png' alt='' />
          <div className='category_details'>
            <h1>Computing</h1>
            <FiArrowRightCircle />
          </div>
        </div>
        <div className='category'>
          <img src='https://skygarden.azureedge.net/media/original_images/laptop_FDcFYvJ.png' alt='' />
          <div className='category_details'>
            <h1>Home Appliances</h1>
            <FiArrowRightCircle />
          </div>
        </div>
        <div className='category'>
          <img src='https://skygarden.azureedge.net/media/original_images/televisions_mX7PUyv.png' alt='' />
          <div className='category_details'>
            <h1>Electronics</h1>
            <FiArrowRightCircle />
          </div>
        </div>
        <div className='category'>
          <img src='https://skygarden.azureedge.net/media/original_images/Categories4.png' alt='' />
          <div className='category_details'>
            <h1>Furniture</h1>
            <FiArrowRightCircle />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home