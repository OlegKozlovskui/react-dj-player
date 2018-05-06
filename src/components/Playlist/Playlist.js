import React, { Component } from 'react';

import './Playlist.css';

class Playlist extends Component {
  handleTrackChange = track => {
    this.props.onTrackChange(track);
  }

  componentDidMount() {
    this.props.onTrackChange(this.props.playlist[0]);
  }

  renderPlaylist = playlist => {
    const { current } = this.props;

    if(playlist.length) {
      return playlist.map((track, i) => (
          <li className={`track ${(current && current.id) === track.id ? 'active' : ''}`}
              key={track.id}
              onClick={() => this.handleTrackChange(track)}>
            {i + 1}. {track.name}
          </li>
        )
      )
    }
  }
  
  render() {
    return(
      <ul className="playlist">
        {this.renderPlaylist(this.props.playlist)}
      </ul>
    ) 
  }
}

export default Playlist;