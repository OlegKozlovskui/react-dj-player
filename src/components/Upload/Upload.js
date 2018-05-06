import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone'
import universalParse from 'id3-parser/lib/universal';
import { Link } from 'react-router-dom';

import './Upload.css';
import Tracks from '../Tracks/Tracks';
import { setLeftTracks, setRightTracks } from '../../store/actions';
import guid from '../../utils/guid';


class Upload extends Component {
  handleDrop = async (files, type) => {
    const transformedFiles = files.map( async(f, i) => {
      const tags = await universalParse(f.preview);
      return {
        'id': guid(),
        'name': `${tags.artist} - ${tags.title}`,
        'src': f.preview
      }
    });

    const tracks = await Promise.all(transformedFiles);

    if(type === 'left') {
      this.props.setLeftTracks(tracks);
    } else {
      this.props.setRightTracks(tracks);
    }
  }

  render() {
    const { leftTracks, rightTracks } = this.props;

    return(
      <div className="container">
        <h2 className="title">Upload audio files:</h2>
        <div className="dropzone-area">
          <div className="dropzone">
            <Dropzone
              accept="audio/mp3"
              onDrop={files => this.handleDrop(files, 'left')}>
              <p className="dropzone-info">Try dropping some mp3 files here, or click to select files to upload.</p>
            </Dropzone>
            {leftTracks.length ? (
              <Tracks tracks={leftTracks} type="left" />
            ) : (
              <p className="warning">Upload at least one mp3 file to continue</p>
            )}
          </div>
          <div className="dropzone">
            <Dropzone
              accept="audio/mp3"
              onDrop={files => this.handleDrop(files, 'right')}>
              <p className="dropzone-info">Try dropping some mp3 files here, or click to select files to upload.</p>
            </Dropzone>
            {rightTracks.length ? (
              <Tracks tracks={rightTracks} type="right"/>
            ) : (
              <p className="warning">Upload at least one mp3 file to continue</p>
            )}
          </div>
        </div>
        {(rightTracks.length && leftTracks.length) ? <Link className="button" to="/player">Go To Player</Link> : null}
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

export default connect(mapStateToProps, { setLeftTracks, setRightTracks })(Upload);