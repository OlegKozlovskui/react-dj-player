import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return(
    <header className="header">
      <Link to="/" className="logo">DJ-Player</Link>
      <nav className="nav">
        <ul>
          <li><Link to="/upload" >Upload</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;