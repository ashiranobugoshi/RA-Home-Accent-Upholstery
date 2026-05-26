import React from 'react';
import { Link } from 'react-router-dom';
import { navigation } from '../data/content';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <div className="logo-circle">
            <img src={require('../images/logo.png')} alt="RA Home Accent & Upholstery Logo" />
          </div>
          <div className="logo-text">
            RA Home Accent <span className="ampersand">&</span> Upholstery
          </div>
        </div>
        <nav>
          <ul>
            {navigation.map((item) => (
              <li key={item.name}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
            <li>
              <Link to="/quote" className="quote-btn">Request Quote</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
