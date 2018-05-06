import React, { Component } from 'react';
import { VolumeSlider, ProgressBar, TimeMarker } from 'react-player-controls';

import './Player.css';
import Plate from '../Plate/Plate';
import Controls from '../Controls/Controls';
import Playlist from '../Playlist/Playlist';

class Player extends Component {
  state = {
    playing: false,
    enabled: true,
    currentTrack: null,
    globalVolume: 0,
    volume: 1,
    totalTime: 0,
    currentTime: 0,
    speed: 1
  }
  
  componentWillReceiveProps(nextProps) {
    const percent = parseInt((1 - nextProps.globalVolume) * 100);
    const value = (this.state.volume * percent) / 100;
    this.audio.volume = this.state.volume - value;
    
    this.setState({
      globalVolume: value,
      enabled: nextProps.enabled });
    if(!nextProps.enabled) {
      this.audio.pause();
    } else {
      if(this.state.playing) {
        this.audio.play();
      }
    }
  }
  
  componentWillMount() {
    if(this.props.playlist.length === 0) {
      this.props.history.push('/upload');
    }
  }

  handlePlay = () => {
    this.audio.play();
    this.setState({ playing: true });
  }

  handlePause = () => {
    this.audio.pause();
    this.setState({ playing: false });
  }

  handleNext = () => {
    const { currentTrack } = this.state;
    const { playlist } = this.props;
    const currentTrackIndex = playlist.findIndex(p => p.id === currentTrack.id);

    if(playlist.length > (currentTrackIndex + 1)) {
      this.handleTrackChange(playlist[currentTrackIndex + 1]);
    }
  }

  handlePrevios = () => {
    const { currentTrack } = this.state;
    const { playlist } = this.props;
    const currentTrackIndex = playlist.findIndex(p => p.id === currentTrack.id);

    if(currentTrackIndex > 0) {
      this.handleTrackChange(playlist[currentTrackIndex - 1]);
    }
  }

  handleStop = () => {
    this.audio.currentTime = 0;
    this.setState({ currentTime: 0 });
  }

  handleTrackChange = track => {
    if(this.state.currentTrack) {
      this.setState((state, props) => {
        return {
          currentTrack: track,
          currentTime: 0,
        }
      }, this.handlePlay);
    } else {
      console.log(track);
      this.setState({
        currentTrack: track,
        currentTime: 0,
      });
    }
  }

  handleUpdateTime = () => {
    const { totalTime } = this.state;
    this.setState({ currentTime: this.audio.currentTime });

    if(totalTime === this.audio.currentTime) {
      this.handleNext();
    }
  }

  handleSpeedChange = type => {
    const { speed } = this.state;
    if(type === 'increase' && speed < 2) {
      this.setState({ speed: speed + 0.5 });
      this.audio.playbackRate = speed + 0.5;
    } else if(type === 'reduce' && speed > 0.5) {
      this.setState({ speed: speed - 0.5 });
      this.audio.playbackRate = speed - 0.5;
    }
  }

  handleVolumeChange = volume => {
    if(volume - this.state.globalVolume <= 0) {
      this.audio.volume = 0;
    } else {
      this.audio.volume = volume - this.state.globalVolume;
    }

    this.setState({ volume });
  }

  handleSeekChange = time => {
    console.log(55);
    this.setState({ currentTime: time });
    this.audio.currentTime = time;
  }

  handleLoadMetadata = e => {
    this.setState({ totalTime: e.target.duration });
  }

  render() {
    const { currentTrack, totalTime, currentTime, speed, enabled } = this.state;
    const isPaused = this.audio && this.audio.paused;

    return(
      <div className={`${enabled ? '' : 'enabled'} player`}>
        <audio
          ref={audio => this.audio = audio}
          onLoadedMetadata={this.handleLoadMetadata}
          src={currentTrack && currentTrack.src}
          onTimeUpdate={this.handleUpdateTime} />
        <Plate active={isPaused} />
        <div className="progress-block">
          <ProgressBar
            totalTime={totalTime}
            currentTime={currentTime}
            isSeekable={true}
            onSeek={this.handleSeekChange}
          />
          <TimeMarker
            totalTime={totalTime}
            currentTime={currentTime}
            markerSeparator="/"
          />
        </div>
        <div className="controls-block">
          <Controls
            paused={isPaused}
            speed={speed}
            onPlay={this.handlePlay}
            onPause={this.handlePause}
            onStop={this.handleStop}
            onNext={this.handleNext}
            onPrevios={this.handlePrevios}
            onSpeedChange={this.handleSpeedChange}
          />
          <i className="fas fa-volume-off"></i>
          <VolumeSlider
            direction="HORIZONTAL"
            volume={this.state.volume}
            onVolumeChange={this.handleVolumeChange}
            isEnabled={true} />
        </div>
        <Playlist
          onTrackChange={this.handleTrackChange}
          current={currentTrack}
          playlist={this.props.playlist}/>
      </div>
    ) 
  }
}

export default Player;