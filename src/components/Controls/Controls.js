import React, { Component } from 'react';

import './Controls.css';

class Controls extends Component {
  state = {

  }

  render() {
    return(
      <div className="controls">
        <button className="control-btn active">
          <i class="fas fa-play"></i>
        </button>
        <button className="control-btn">
          <i class="fas fa-pause"></i>
        </button>
        <button className="control-btn">
          <i class="fas fa-stop"></i>
        </button>
        <button className="control-btn">
          <i class="fas fa-step-backward"></i>
        </button>

        <button className="control-btn">
          <i class="fas fa-step-forward"></i>
        </button>
      </div>
    )
  }

}

export default Controls;