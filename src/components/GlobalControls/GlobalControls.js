import React, { Component } from 'react';
import { VolumeSlider } from 'react-player-controls';

import './GlobalControls.css';

class GlobalControls extends Component {
  state = {
    enabled: true,
    volume: 1
  }

  handleOn = () => {
    this.setState({ enabled: true });
    this.props.onSwitch(true);
  }

  handleOff = () => {
    this.setState({ enabled: false });
    this.props.onSwitch(false);
  }

  handleVolumeChange = volume => {
    this.setState({ volume });
    this.props.onVolumeChange(volume);
  }

  render() {
    return(
      <div className="controls global-controls">
        <button className={`${this.state.enabled ? 'active' : ''} control-btn`} onClick={this.handleOn}>
          ON
        </button>
        <button className={`${this.state.enabled ? '' : 'active'} control-btn`}  onClick={this.handleOff}>
          OFF
        </button>
        <div className="global-volume">
          <i className="fas fa-volume-off"></i>
          <VolumeSlider
            direction="HORIZONTAL"
            volume={this.state.volume}
            onVolumeChange={this.handleVolumeChange}
            isEnabled={true} />
        </div>
      </div>
    )
  }

}

export default GlobalControls;