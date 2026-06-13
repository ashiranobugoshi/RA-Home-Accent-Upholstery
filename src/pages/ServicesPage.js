import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ServiceCard from '../components/ServiceCard';
import { services, companyInfo } from '../data/content';
import './ServicesPage.css';

function ServicesPage() {
  return (
    <div className="services-page">
      <PageHeader title="Our Services" />

      <div className="container">
        <div className="services-grid">
          {services.map(service => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              name={service.name}
              description={service.description}
            />
          ))}
        </div>

        <div className="who-we-are">
          <div className="who-gallery">
            {/* Top Diamond - Accent */}
            <div className="diamond diamond-accent diamond-top"></div>
            
            {/* Left Diamond - Commercial Image */}
            <div className="diamond diamond-left">
              <img src={require('../images/table.jpg')} alt="Commercial Setting" />
            </div>
            
            {/* Right Diamond - Residential Image */}
            <div className="diamond diamond-right">
              <img src={require('../images/chair.jpg')} alt="Residential Interior" />
            </div>
            
            {/* Bottom Diamond - Accent */}
            <div className="diamond diamond-accent diamond-bottom"></div>
          </div>

          <div className="who-content">
            <h2>Who we are<span className="accent">?</span></h2>
            <p className="subheader">15+ years of master craftsmanship</p>
            <p>
              RA Home Accent & Upholstery is a trusted name in premium upholstery and furniture 
              restoration. With over 15 years of master craftsmanship and a passion for excellence, 
              we transform your furniture dreams into reality.
            </p>
            
            <ul className="checklist">
              {companyInfo.whyChooseUs.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="craftsmanship-section">
          <div className="cards-container">
            <div className="project-card">
              <div className="card-placeholder">
                <div className="frame-stack"></div>
                <div className="mountain-icon"></div>
              </div>
              <button className="card-button">→</button>
            </div>
            <div className="project-card">
              <div className="card-placeholder">
                <div className="frame-stack"></div>
                <div className="mountain-icon"></div>
              </div>
              <button className="card-button">→</button>
            </div>
            <div className="project-card">
              <div className="card-placeholder">
                <div className="frame-stack"></div>
                <div className="mountain-icon"></div>
              </div>
              <button className="card-button">→</button>
            </div>
          </div>

          <div className="craftsmanship-header">
            <h2>Craftsmanship in Action</h2>
            <div className="accent-divider"></div>
            <p className="craftsmanship-subtitle">Browse through our completed projects – each piece tells a story of quality, care, and transformation</p>
          </div>

          <Link to="/portfolio" className="portfolio-link">View Full Portfolio →</Link>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
