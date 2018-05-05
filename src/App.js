import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import DjPlayer from './components/DjPlayer/DjPlayer';
import Upload from './components/Upload/Upload';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Upload} />
          <Route exact path="/player" component={DjPlayer} />
        </div>
      </Router>
    );
  }
}

export default App;
