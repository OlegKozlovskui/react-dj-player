import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Tracks.css';
import { removeLeftTrack, removeRightTrack } from '../../store/actions';

class Tracks extends Component {
  handleRemoveTrack = trackId => {
    if(this.props.type === 'left') {
      this.props.removeLeftTrack(trackId);
    } else {
      this.props.removeRightTrack(trackId);
    }
  }

  renderTracks = tracks => {
    if(tracks.length) {
      return tracks.map((track, i) => (
          <li className="track" key={track.id}>
            <span>
              {i + 1}. {track.name}
            </span>
            <i className="fas fa-trash" onClick={() => this.handleRemoveTrack(track.id)}></i>
          </li>
        )
      )
    }
  }

  render() {
    return(
      <ul className="tracks">
        {this.renderTracks(this.props.tracks)}
      </ul>
    )
  }
}

export default connect(null, { removeLeftTrack, removeRightTrack })(Tracks);