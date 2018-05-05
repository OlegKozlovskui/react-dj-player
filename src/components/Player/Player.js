import React, { Component } from 'react';

import Plate from '../Plate/Plate';

import './Player';

class Player extends Component {
  state = {
  
  }
  
  render() {
    return(
      <div className="player">
        <Plate />
      </div>
    ) 
  }
}

export default Player;