import image4 from '../assets/illustration-your-users.svg'

import React, { Component } from 'react'

class Board3 extends Component {
    render (){
     return(
       <div className="board">
        <article>
            <h2>Your Users</h2>
            <p>It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chattinng immediately.</p>
        </article>
        <img src={image4} alt="" aria-hidden="true"/>
       </div>
      ); 
    };
  }
  
  export default Board3;