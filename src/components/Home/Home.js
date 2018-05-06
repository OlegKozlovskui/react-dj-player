import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => {
  return(
    <div className="welcome">
      <div className="overlay"></div>
      <h1 className="welcome-title">
        Welcome to DJ-Player
      </h1>
      <Link className="button" to="/upload">Let's Start</Link>
    </div>
  )
}

export default Home;