
import Board1 from '../components/board1';
import Board2 from '../components/board2';
import Board3 from '../components/board3';

import React, { Component } from 'react'

class Container extends Component {
    render (){
     return(
       <div className="container">
        <Board1/>
        <Board2/>
        <Board3/>
       </div>
      ); 
    };
  }
  
  export default Container;