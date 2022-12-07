import logo from '../assets/logo.svg'
import image1 from '../assets/illustration-mockups.svg'
import React, { Component } from 'react'

class Header extends Component {
    render (){
     return(
        <header>
            <div className="top-of-header">
                <img src={logo} className="logo" alt="logo"/>
                <a className="white">Try It Free</a>
            </div>
            <div className="bottom-of-header">
               <section>
                    <h1>Build The Community Your Fans Will Love</h1>
                    <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
                    <a className="pink">Get Started For Free</a>
                </section>
                <img src={image1} className="image1" alt='' aria-hidden="true"/> 
            </div>
        </header>
      ); 
    };
  }
  
  export default Header;