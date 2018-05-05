import React, { Component } from 'react';

import './DjPlayer.css';
import Player from '../Player/Player';

class DjPlayer extends Component {
  state = {
  
  }
  
  render() {
    return(
      <div className="container dj-player">
        <Player />
        <Player />
      </div>
    ) 
  }
}

export default DjPlayer;