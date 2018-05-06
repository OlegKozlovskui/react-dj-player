import React, { Component } from 'react';
import { VolumeSlider, ProgressBar } from 'react-player-controls';
import { connect } from 'react-redux';

import './Player.css';
import Plate from '../Plate/Plate';
import Controls from '../Controls/Controls';
import Playlist from '../Playlist/Playlist';

const playlist = [
  {
    id: 0,
    src: 'http://www.tutorialrepublic.com/examples/audio/birds.mp3',
    name: 'Track 1',
    totalTime: 16.495719
  },
  {
    id: 1,
    src: 'http://www.tutorialrepublic.com/examples/audio/wind.mp3',
    name: 'Track 2',
    totalTime: 25
  },
  {
    id: 2,
    src: 'http://www.tutorialrepublic.com/examples/audio/birds.mp3',
    name: 'Track 3',
    totalTime: 16.495719
  },
  {
    id: 3,
    src: 'http://www.tutorialrepublic.com/examples/audio/wind.mp3',
    name: 'Track 4',
    totalTime: 25
  }
];

class Player extends Component {
  state = {
    currentTrack: null,
    activeName: '',
    volume: 1,
    totalTime: 0,
    currentTime: 0
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
  }
  
  componentWillMount() {
    const { leftTracks, rightTracks } = this.props;
    console.log(this.props);
    
    if(leftTracks.length === 0 || rightTracks === 0) {
      this.props.history.push('/');
    }
  }

  handlePlay = () => {
    console.log(this.audio.name);
    this.audio.play();
    console.log(this.audio.paused);
  }

  handlePause = () => {
    this.audio.pause();
  }

  handleNext = () => {
    const { currentTrack } = this.state;

    if(playlist.length > (currentTrack.id + 1)) {
      console.log(1);
      this.handleTrackChange(playlist[currentTrack.id + 1]);
    }
  }

  handlePrev = () => {
    const { currentTrack } = this.state;

    if(currentTrack.id > 0) {
      console.log(2);
      this.handleTrackChange(playlist[currentTrack.id - 1]);
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
          totalTime: track.totalTime,
          currentTime: 0,
          activeName: track.name
        }
      }, this.handlePlay);
    } else {
      this.setState({
        currentTrack: track,
        totalTime: track.totalTime,
        currentTime: 0,
      });
    }
  }

  handleUpdateTime = () => {
    const { currentTrack } = this.state;
    this.setState({ currentTime: this.audio.currentTime });
    console.log('a',this.audio.currentTime);
    console.log('b',currentTrack.totalTime);

    if((currentTrack.totalTime === this.audio.currentTime)) {
      this.handleNext();
      console.log(111);
    }
    
    console.log(this.audio.currentTime);
    
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
    const { currentTrack, totalTime, currentTime, activeName } = this.state;
    const isPaused = this.audio && this.audio.paused;

    return(
      <div className="player">
        <audio ref={audio => this.audio = audio}
               onLoadedMetadata={event => console.log('sss', event.target)}
               src={currentTrack && currentTrack.src}
               onTimeUpdate={this.handleUpdateTime} />
        <Plate active={isPaused} />
        <ProgressBar
          totalTime={totalTime}
          currentTime={currentTime}
          isSeekable={true}
          onSeek={this.handleSeekChange}
          onSeekStart={time => this.setState(() => ({ lastSeekStart: time }))}
          onSeekEnd={time => this.setState(() => ({ lastSeekEnd: time }))}
          onIntent={time => this.setState(() => ({ lastIntent: time }))}
        />
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
        <Playlist onTrackChange={this.handleTrackChange} name={activeName} />
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

export default connect(mapStateToProps)(Player);