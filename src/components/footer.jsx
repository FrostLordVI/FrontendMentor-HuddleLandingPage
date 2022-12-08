import logo from '../assets/logo.svg';
import location from '../assets/icon-location.svg';
import phone from '../assets/icon-phone.svg';
import email from '../assets/icon-email.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';


import React, { Component } from 'react'

class Footer extends Component {
    render (){
     return(
       <footer>
            <div className="leftSide">
                <img src={logo} alt="logo"/>
                <div className='iconDiv'>
                  <img id ="location" src={location} alt="location"/>
                  <p>Lorem ipsum dolor sit amen, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='iconDiv'>
                  <img src={phone} alt="phone"/>
                  <p>+1-543-123-4567</p>
                </div>
                <div className='iconDiv'>
                  <img src={email} alt="email"/>
                  <p>example@huddle.com</p>
                </div>
            </div>

            <div className="middle">
              <div className="references">
                <a href='#'>About Us</a>
                <a href='#'>What We Do</a>
                <a href='#'>FAQ</a>
              </div>
              <div className="references">
                <a href='#'>Career</a>
                <a href='#'>Blog</a>
                <a href='#'>Contact Us</a>
              </div>
            </div>
            <div className="rightSide">
              <div className="social-media-icons">
                <div id="fbCircle" className="circle">
                  <FontAwesomeIcon id='fb' className="icon" icon={faFacebookF} />
                </div>
                <div id="twittCircle" className="circle">
                  <FontAwesomeIcon id='twitt' className="icon" icon={faTwitter} />
                </div>
                <div id="instaCircle" className="circle">
                  <FontAwesomeIcon id='insta' className="icon" icon={faInstagram} />
                </div>
              </div>
              <p>&copy; Copyright 2022 Huddle. All rights reserved.</p>
            </div>
            
       </footer>
      ); 
    };
  }
  
  export default Footer;