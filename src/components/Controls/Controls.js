import React, { Component } from 'react';

import './Controls.css';

class Controls extends Component {
  render() {
    
    return(
      <div className="controls">
        {this.props.paused ? (
          <button className="control-btn" onClick={() => this.props.onPlay()}>
            <i className="fas fa-play"></i>
          </button>
        ) : (
          <button className="control-btn" onClick={() => this.props.onPause()}>
            <i className="fas fa-pause"></i>
          </button>
        )}
        <button className="control-btn" onClick={() => this.props.onStop()}>
          <i className="fas fa-stop" ></i>
        </button>
        <button className="control-btn" >
          <i className="fas fa-step-backward" onClick={() => this.props.onPrev()}></i>
        </button>
        <button className="control-btn" onClick={() => this.props.onNext()}>
          <i className="fas fa-step-forward"></i>
        </button>
      </div>
    )
  }

}

export default Controls;