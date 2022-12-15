import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import { AiFillCar, AiFillLock } from 'react-icons/ai'
import { MdOutlineAssignmentReturn } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='upper'>
            <div className='company'>
                <h1>COMPANY</h1>
                <Link>About Us</Link>
                <Link>Sell with Sky.Garden</Link>
                <Link>Sky.Garden Blog</Link>
                <Link>Track Your Orders</Link>
            </div>
            <div className='contact'>
                <h1>CONTACT US</h1>
                <Link>FAQ Center</Link>
                <Link>hello@sky.garden</Link>
                <p>5th Lavington, Off<br /> Olenguruone Avenue,<br /> next to Mawara Gardens<br />Nairobi Kenya</p>
            </div>
            <div className='shopping'>
                <h1>SHOPPING WITH IS IS EASY</h1>
                <Link><AiFillCar /> Same day delivery</Link>
                <Link><AiFillLock /> Secure Payment, online or on delivery</Link>
                <Link><MdOutlineAssignmentReturn /> Free Returns</Link>
            </div>
        </div>
        <div className='lower'>
            <p>© Sky.Garden 2022</p>
            <div className='brand'>
                <img src='https://sky.garden/assets/payments/mpesa-white.png' alt='mpesa' />
                <img src='https://sky.garden/assets/payments/visa-white.png' alt='visa' />
                <img src='https://sky.garden/assets/payments/visa-white.png' alt='master card' />
            </div>
            <div className='links'>
                
            </div>
        </div>
    </div>
  )
}

export default Footer