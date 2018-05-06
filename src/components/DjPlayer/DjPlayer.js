import React, { Component } from 'react';
import { connect } from 'react-redux';

import './DjPlayer.css';
import Player from '../Player/Player';
import GlobalControls from '../GlobalControls/GlobalControls';

class DjPlayer extends Component {
  render() {
    return(
      <div className="container dj-player">
        <Player history={this.props.history} playlist={this.props.leftTracks} />
        <GlobalControls />
        <Player history={this.props.history} playlist={this.props.rightTracks}/>
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