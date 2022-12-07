import image3 from '../assets/illustration-flowing-conversation.svg'

import React, { Component } from 'react'

class Board2 extends Component {
    render (){
     return(
       <div className="board">
        <img src={image3} alt="" aria-hidden="true"/>
        <article>
            <h2>Flowing Conversations</h2>
            <p>You wouldn't paginate a conversation in real life, so why do it online. Our threads have just-in-time loading for a more natural flow.</p>
        </article>
       </div>
      ); 
    };
  }
  
  export default Board2;