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
            <div className="gallery-item">Gallery 1</div>
            <div className="gallery-item main">Gallery 2</div>
            <div className="gallery-item">Gallery 3</div>
          </div>

          <div className="who-content">
            <h2>Who We Are?</h2>
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
          <div className="craftsmanship-content">
            <h2>Craftsmanship in Action</h2>
            <div className="carousel">
              <div className="carousel-item">
                <div className="icon">👨‍🔧</div>
                <p><strong>Expert Craftsmanship</strong> — Our team brings decades of combined experience to every project.</p>
              </div>
              <div className="carousel-item">
                <div className="icon">🎨</div>
                <p><strong>Design Excellence</strong> — Custom designs tailored to your vision and interior style.</p>
              </div>
              <div className="carousel-item">
                <div className="icon">⭐</div>
                <p><strong>Premium Quality</strong> — Only the finest materials and techniques used for lasting results.</p>
              </div>
            </div>

            <Link to="/portfolio" className="portfolio-link">View Full Portfolio →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
