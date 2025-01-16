import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

export default function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
              <img src={assets.logo} alt='' />
              <p>Indulge in a hassle-free dining experience with our food ordering app. <br/>
                Explore a wide range of cuisines, place your order in seconds,<br/>
                 and enjoy fast delivery straight to your doorstep.<br/>
                  Satisfy your cravings anytime, anywhere!</p>
              <div className='footer-social-icon'>
                <img src={assets.facebook_icon} alt='' />
                <img src={assets.twitter_icon} alt='' />
                <img src={assets.linkedin_icon} alt='' />
              </div>
            </div>
            <div className='footer-content-center'>
              <h2>COMPANY</h2>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>DElivery</li>
                <li>Privacy policy</li>
              </ul>
            </div>
            <div className='footer-content-right'>
              <h2>GET IN TOUCH</h2>
              <ul>
                <li>TEL : +1-567-674-4567</li>
                <li>EMAIL : flovourfleetcontact.com</li>
              </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2025 @ FlovourFleet.com - All Right Reserved</p>

    </div>
  )
}
