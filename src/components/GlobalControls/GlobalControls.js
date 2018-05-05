import React, { Component } from 'react';
import { VolumeSlider } from 'react-player-controls';

import './GlobalControls.css';

class GlobalControls extends Component {
  state = {
    on: true,
    volume: 1
  }

  handleOn = () => {
    this.setState({ on: true });
  }

  handleOff = () => {
    this.setState({ on: false });
  }

  handleVolumeChange = volume => {
    console.log(volume);
    this.setState({ volume });
  }

  render() {
    return(
      <div className="controls global-controls">
        <button className={`${this.state.on ? 'active' : ''} control-btn`} onClick={this.handleOn}>
          ON
        </button>
        <button className={`${this.state.on ? '' : 'active'} control-btn`}  onClick={this.handleOff}>
         OFF
        </button>
        <VolumeSlider
          direction="HORIZONTAL"
          volume={this.state.volume}
          onVolumeChange={this.handleVolumeChange}
          isEnabled={true} />
      </div>
    )
  }

}

export default GlobalControls;