import React, { Component } from 'react';
import { connect } from 'react-redux';

import './DjPlayer.css';
import Player from '../Player/Player';
import GlobalControls from '../GlobalControls/GlobalControls';

class DjPlayer extends Component {
  state = {
    enabled: true,
    globalVolume: 1
  }
  
  handleSwitch = state => {
    this.setState({ enabled: state })
  }

  handleVolumeChange = volume => {
    this.setState({ globalVolume: volume })
  }

  render() {
    return(
      <div className="container dj-player">
        <Player
          enabled={this.state.enabled}
          globalVolume={this.state.globalVolume}
          history={this.props.history}
          playlist={this.props.leftTracks} />
        <GlobalControls
          onVolumeChange={this.handleVolumeChange}
          onSwitch={this.handleSwitch} />
        <Player
          enabled={this.state.enabled}
          globalVolume={this.state.globalVolume}
          history={this.props.history} 
          playlist={this.props.rightTracks}/>
      </div>
    ) 
  }
}

const mapStateToProps = state => {
  return {
    leftTracks: state.leftTracks,
    rightTracks: state.rightTracks
  }
}

export default connect(mapStateToProps)(DjPlayer);