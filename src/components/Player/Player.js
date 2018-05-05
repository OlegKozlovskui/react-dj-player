import React, { Component } from 'react';
import { VolumeSlider, ProgressBar } from 'react-player-controls';

import './Player.css';
import Plate from '../Plate/Plate';
import Controls from '../Controls/Controls';
import Playlist from '../Playlist/Playlist';

class Player extends Component {
  state = {
    playing: false,
    currentTrack: null,
    volume: 1,
    totalTime: 20,
    currentTime: 10
  }

  handleUpdateTime = () => {
    this.setState({ currentTime: this.audio.currentTime });
  }

  handleVolumeChange = volume => {
    this.setState({ volume });
    this.audio.volume = volume;
  }

  handleSeekChange = time => {
    this.setState({ currentTime: time });
    this.audio.currentTime = time;
  }

  render() {
    return(
      <div className="player">
        <audio ref={audio => this.audio = audio}
               onTimeUpdate={this.handleUpdateTime} />
        <Plate />
        <ProgressBar
          totalTime={this.state.totalTime}
          currentTime={this.state.currentTime}
          isSeekable={true}
          onSeek={this.handleSeekChange}
          onSeekStart={time => this.setState(() => ({ lastSeekStart: time }))}
          onSeekEnd={time => this.setState(() => ({ lastSeekEnd: time }))}
          onIntent={time => this.setState(() => ({ lastIntent: time }))}
        />
        <div className="controls-block">
          <Controls />
          <i class="fas fa-volume-off"></i>
          <VolumeSlider
            direction="HORIZONTAL"
            volume={this.state.volume}
            onVolumeChange={this.handleVolumeChange}
            isEnabled={true} />
        </div>
        <Playlist />
      </div>
    ) 
  }
}

export default Player;