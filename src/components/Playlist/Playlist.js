import React, { Component } from 'react';

import './Playlist.css';

const playlist = [
  {
    id: 0,
    src: 'http://www.tutorialrepublic.com/examples/audio/wind.mp3',
    name: 'Track 1',
    totalTime: 16
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
    totalTime: 16
  },
  {
    id: 3,
    src: 'http://www.tutorialrepublic.com/examples/audio/wind.mp3',
    name: 'Track 4',
    totalTime: 25
  }
];

class Playlist extends Component {
  handleTrackChange = track => {
    this.props.onTrackChange(track);
  }

  componentDidMount() {
    this.props.onTrackChange(playlist[0]);
  }

  renderPlaylist = playlist => {
    if(playlist.length) {
      return playlist.map((track, i) => (
          <li className={`track ${this.props.name === track.name ? 'active' : ''}`}
              key={track.id}
              onClick={() => this.handleTrackChange(track)}>
            {i + 1}. {track.name}
            <span className="time">00:15</span>
          </li>
        )
      )
    }
  }
  
  render() {
    return(
      <ul className="playlist">
        {this.renderPlaylist(playlist)}
      </ul>
    ) 
  }
}

export default Playlist;