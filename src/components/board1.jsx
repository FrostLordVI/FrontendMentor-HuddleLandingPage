import image2 from '../assets/illustration-grow-together.svg'

import React, { Component } from 'react'

class Board1 extends Component {
    render (){
     return(
       <div className="board">
        <article>
            <h2>Grow Together</h2>
            <p>Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.</p>
        </article>
        <img src={image2} alt="" aria-hidden="true"/>
       </div>
      ); 
    };
  }
  
  export default Board1;