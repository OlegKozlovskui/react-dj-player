import React, { Component } from 'react';
import { VolumeSlider, ProgressBar, TimeMarker } from 'react-player-controls';

import './Player.css';
import Plate from '../Plate/Plate';
import Controls from '../Controls/Controls';
import Playlist from '../Playlist/Playlist';

class Player extends Component {
  state = {
    currentTrack: null,
    volume: 1,
    totalTime: 0,
    currentTime: 0
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
  }
  
  componentWillMount() {
    if(this.props.playlist.length === 0) {
      this.props.history.push('/upload');
    }
  }

  handlePlay = () => {
    this.audio.play();
  }

  handlePause = () => {
    this.audio.pause();
  }

  handleNext = () => {
    const { currentTrack } = this.state;

    // if(playlist.length > (currentTrack.id + 1)) {
    //   console.log(1);
    //   this.handleTrackChange(playlist[currentTrack.id + 1]);
    // }
  }

  handlePrev = () => {
    const { currentTrack } = this.state;

    // if(currentTrack.id > 0) {
    //   console.log(2);
    //   this.handleTrackChange(playlist[currentTrack.id - 1]);
    // }
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
    const { currentTrack } = this.state;
    this.setState({ currentTime: this.audio.currentTime });

    // if((currentTrack.totalTime === this.audio.currentTime)) {
    //   this.handleNext();
    //   console.log(111);
    // }
    //
    // console.log(this.audio.currentTime);
    
  }

  handleVolumeChange = volume => {
    this.setState({ volume });
    this.audio.volume = volume;
  }

  handleSeekChange = time => {
    this.setState({ currentTime: time });
    this.audio.currentTime = time;
  }

  handleLoadMetadata = e => {
    console.log('aa', e.target.duration);
    this.setState({ totalTime: e.target.duration });
  }

  render() {
    const { currentTrack, totalTime, currentTime } = this.state;
    const isPaused = this.audio && this.audio.paused;

    return(
      <div className="player">
        <audio ref={audio => this.audio = audio}
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
            onSeekStart={time => this.setState(() => ({ lastSeekStart: time }))}
            onSeekEnd={time => this.setState(() => ({ lastSeekEnd: time }))}
            onIntent={time => this.setState(() => ({ lastIntent: time }))}
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
            onPlay={this.handlePlay}
            onPause={this.handlePause}
            onStop={this.handleStop}
            onNext={this.handleNext}
            onPrev={this.handlePrev}
          />
          <i className="fas fa-volume-off"></i>
          <VolumeSlider
            direction="HORIZONTAL"
            volume={this.state.volume}
            onVolumeChange={this.handleVolumeChange}
            isEnabled={true} />
        </div>
        <Playlist onTrackChange={this.handleTrackChange}
                  current={currentTrack}
                  playlist={this.props.playlist}/>
      </div>
    ) 
  }
}

export default Player;