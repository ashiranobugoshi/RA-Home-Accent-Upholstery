import React from 'react';
import { Link } from 'react-router-dom';
import { quickLinks, companyInfo } from '../data/content';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>RA Home Accent & Upholstery</h3>
          <p>Premium upholstery & furniture restoration since 2006.</p>
        </div>
        <div className="footer-section">
          <h3>QUICK LINKS</h3>
          <ul>
           {quickLinks.slice(0, 3).map((link) => (
              <li key={link.name}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-section">
          <h3>SERVICES</h3>
          <ul>
            <li><Link to="/services">UPHOLSTERY</Link></li>
            <li><Link to="/services">RESTORATION</Link></li>
            <li><Link to="/services">CUSTOM</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>CONTACT</h3>
          <div className="contact-info">
            <span>📞</span>
            <p>(+63) 905-8123</p>
          </div>
          <div className="contact-info">
            <span>✉️</span>
            <p>ahccentah@yahoo.com</p>
          </div>
          <div className="contact-info">
            <span>📍</span>
            <p>San Mateo, Rizal</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 RA Home Accent & Upholstery Inc. — Premium Upholstery & Furniture Restoration</p>
      </div>
    </footer>
  );
}

export default Footer;
