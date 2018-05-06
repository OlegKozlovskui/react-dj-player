import React, { Component } from 'react';

import './DjPlayer.css';
import Player from '../Player/Player';
import GlobalControls from '../GlobalControls/GlobalControls';

class DjPlayer extends Component {
  state = {
  
  }
  
  render() {
    return(
      <div className="container dj-player">
        <Player history={this.props.history}/>
        <GlobalControls />
        <Player history={this.props.history}/>
      </div>
    ) 
  }
}

export default DjPlayer;