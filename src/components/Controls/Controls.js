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
        <button className="control-btn" onClick={() => this.props.onPrevios()}>
          <i className="fas fa-step-backward"></i>
        </button>
        <button className="control-btn" onClick={() => this.props.onNext()}>
          <i className="fas fa-step-forward"></i>
        </button>
        <button className={`${this.props.speed < 1 ? 'active' : 0} control-btn`}
                onClick={() => this.props.onSpeedChange('reduce')}>
          <i className="fas fa-fast-backward"></i>
        </button>
        <button className={`${this.props.speed > 1 ? 'active' : 0} control-btn`}
                onClick={() => this.props.onSpeedChange('increase')}>
          <i className="fas fa-fast-forward"></i>
        </button>
      </div>
    )
  }

}

export default Controls;