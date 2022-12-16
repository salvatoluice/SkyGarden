import React from 'react'
import { MdDone } from 'react-icons/md'
import { RxDotFilled } from 'react-icons/rx'
import './sell.css'

const Sell = () => {
  return (
    <>
        <div className='app_sell'>
            <h1>Sell online within minutes. It's free to start.</h1>
            <p>With Sky.Garden you can upload products and start selling your products immediately via your own free mobile webshop. No cost upon entry. No hidden fees. Fully automated payment and shipping options are integrated out-of-the-box. 100% safe and secure.</p>
            <button>OPEN YOUR SHOP</button>
        </div>
        <div className='showcase'>
            <div className='ticks'>
                <h3><MdDone /> Unlimited product upload</h3>
                <h3><MdDone /> 8% Transaction fee</h3>
                <h3><MdDone /> Connected to delivery partners</h3>
                <h3><MdDone /> Access to seller support team</h3>
            </div>
            <div className='showcase_text'>
                <h1>Showcase Your Products</h1>
                <p>The moment you create your shop and your first<br /> product upload is approved, you appear on the<br/>  Sky.Garden Markeplace for customers to start buying from you!</p>
                <h3><RxDotFilled /> Unlimited product upload</h3>
                <h3><RxDotFilled /> Discounts</h3>
                <h3><RxDotFilled /> Product variants</h3>
                <h3><RxDotFilled /> video</h3>
            </div>
        </div>
        <div className='payments'>
                <img src='https://sky.garden/assets/sell-on-sky/secure-online-payments.png' alt="pic" />
                <div className='payment_text'>
                    <h1>Secure Online Payments</h1>
                    <h4>Mpesa, Mastercard & Visa</h4>
                    <p>Instantly get access to various online payment options that your customers can use to pay you. All payments are secure are fraud-proof.</p>
                    <h4>Get a Sky.Wallet</h4>
                    <p>All your payments sent to you digitally via a pin-secured Sky.Wallet. You can safely hold these funds in the wallet or withdraw to your bank account, mobile money account and more.</p>
                </div>
            </div>
    </>
  )
}

export default Sell