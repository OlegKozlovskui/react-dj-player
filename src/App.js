import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './store/reducer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import DjPlayer from './components/DjPlayer/DjPlayer';
import Upload from './components/Upload/Upload';

const store = createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router basename="/react-dj-player/">
          <Fragment>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/upload" component={Upload} />
            <Route exact path="/player" component={DjPlayer} />
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
