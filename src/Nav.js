import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white'
    };

  return (
    <nav>
      <h2>Logo here</h2>
      <ul className="nav-links">
          <Link style={navStyle} to='/about'>
            <li>About</li>
          </Link>
          <Link style={navStyle} to='/quiz'>
            <li>Quiz</li>
          </Link>
          <Link style={navStyle} to='/' exact>
            <li>Homepage</li>
          </Link>
      </ul>
    </nav>
  );
}

export default Nav;