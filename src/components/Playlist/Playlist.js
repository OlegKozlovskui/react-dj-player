import React, { Component } from 'react';

import './Playlist.css';

const playlist = [
  {
    id: 0,
    src: 'http://www.tutorialrepublic.com/examples/audio/birds.mp3',
    name: 'Track 1'
  },
  {
    id: 1,
    src: 'http://www.tutorialrepublic.com/examples/audio/wind.mp3',
    name: 'Track 2'
  },
  {
    id: 2,
    src: 'http://www.tutorialrepublic.com/examples/audio/birds.mp3',
    name: 'Track 3'
  },
  {
    id: 3,
    src: 'http://www.tutorialrepublic.com/examples/audio/wind.mp3',
    name: 'Track 4'
  }
];

class Playlist extends Component {
  
  renderPlaylist = playlist => {
    console.log(playlist);
    if(playlist.length) {
      return playlist.map((track, i) => (
          <li className="track" key={track.id}>
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