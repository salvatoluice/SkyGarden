import React from 'react'
import './header.css'
import { IoMdCall, IoMdPerson } from 'react-icons/io'
import { FiSearch } from 'react-icons/fi'
import { GiShoppingCart } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='navbar'>
      <div className='top-nav'>
        <div className='nav_left'>
          <p>Customer Care</p>
          <p><IoMdCall /> +254 709 782 000</p>
        </div>
        <div className='nav_right'>
          <p>Sell</p>
          <p>Help & Contact</p>
        </div>
      </div>
      <div className='bottom_nav'>
        <div className='logo'>
          <Link to='/'>
            <img src='https://sky.garden/assets/skylogo_white.png' alt="logo" />
          </Link>
          <button>CATEGORIES</button>
        </div>
        <div className='search'>
          <input type="text" placeholder="Search for products, shops and cateories" /> 
          <button><FiSearch className='search_icon'/></button>
        </div>
        <div className='right'>
          <div className='login'>
            <p>Log In</p>
            <IoMdPerson />
          </div>
          <div className='cart'>
            <p>Cart</p>
            <GiShoppingCart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header