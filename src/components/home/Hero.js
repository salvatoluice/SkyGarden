import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='image_slider'>
            <img src='https://skygarden.azureedge.net/media/original_images/New-Christmas1_1.jpg' />
            <div className='essentials'>
                <button>Home Essentials</button>
                <button>Alcohol</button>
            </div>
        </div>
        <div className='right_image'>
            <img src='https://skygarden.azureedge.net/media/original_images/RHB-44.jpg' />
            <img src='https://skygarden.azureedge.net/media/original_images/RHB-22_1.jpg' />
        </div>
    </div>
  )
}

export default Hero