import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch, faHammer, faWandMagic, faBuilding, faHouse, faBox } from '@fortawesome/free-solid-svg-icons';
import './HomePage.css';

const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "PORTFOLIO", href: "/portfolio" },
  { label: "CLIENTS", href: "/clients" },
  { label: "LOCATION", href: "/location" },
  { label: "CONTACT", href: "/contact" },
];

const portfolioItems = [
  { id: 1, image: "https://via.placeholder.com/275x390?text=Project+1", title: "Furniture Item #1" },
  { id: 2, image: "https://via.placeholder.com/275x390?text=Project+2", title: "Furniture Item #2" },
  { id: 3, image: "https://via.placeholder.com/275x390?text=Project+3", title: "Furniture Item #3" },
  { id: 4, image: "https://via.placeholder.com/275x390?text=Project+4", title: "Furniture Item #4" },
];

const whyChooseUsItems = [
  "15+ years master upholsterer",
  "premium material & workmanship warranty",
  "commercial & residential expertise",
  "free quotation and honest pricing",
];

const industriesServeItems = [
  "hotels & resort",
  "offices & clinics",
  "interior designers & contractors",
  "restaurants",
  "condos & homes",
];

const serviceCards = [
  { icon: faCouch, title: "Upholstery Services", description: "sofa, chair, headboard, foam replacement & frame repair" },
  { icon: faHammer, title: "Furniture Restoration", description: "revive worn furniture — sofas, office and hotel chairs" },
  { icon: faWandMagic, title: "Custom Restoration", description: "custom sofa, headboards, bed frames & decorative pieces" },
  { icon: faBuilding, title: "Commercial Projects", description: "hotels, restaurants, offices, clinics — bulk upholstery" },
  { icon: faHouse, title: "Home Textiles", description: "Curtains, cushion covers, table runners, sofa covers." },
  { icon: faBox, title: "Commercial Supply", description: "Doormats, textile supplies for hotels, corporate bulk orders." },
];

const quickLinks = ["HOME", "ABOUT", "PORTFOLIO", "CONTACT"];
const services = ["UPHOLSTERY", "RESTORATION", "CUSTOM"];
const contactItems = [
  { icon: "📞", text: "0917 873 4377", href: "tel:09178734377" },
  { icon: "✉️", text: "rahomeaccentandupholstery@yahoo.com", href: "mailto:rahomeaccentandupholstery@yahoo.com" },
  { icon: "📍", text: "Crystal homes abuab 2, Rizal, Philippines, 1850", href: "https://maps.google.com/?q=Crystal+homes+abuab+2,+Rizal,+Philippines,+1850" },
];

const BrandNavigationSection = () => null;

const PrimaryHeroCTASection = () => (
  <section className="hero-section">
    <div className="hero-content">
      <h1>Custom Upholstery & Furniture Restoration for Homes and Businesses</h1>
      <p>Comfort, craftsmanship, and design personality — made to order for your space.</p>
      <Link to="/quote" className="hero-btn">Request Quote →</Link>
    </div>
  </section>
);

const ServiceHighlightsSection = () => (
  <section className="services-section">
    <div className="services-container">
      <h2>What We Do</h2>
      <div className="services-grid">
        {serviceCards.map((card) => (
          <article key={card.title} className="service-card">
            <div className="service-icon"><FontAwesomeIcon icon={card.icon} /></div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const PortfolioTransformationSection = () => (
  <section className="portfolio-section">
    <div className="portfolio-container">
      <div className="portfolio-header">
        <h2>Transformation</h2>
      </div>
      <div className="portfolio-grid">
        {portfolioItems.map((item, idx) => (
          <article key={item.id} className="portfolio-item-card">
            <div className="portfolio-card-title">FURNITURE ITEM #{idx + 1}</div>
            <div className="portfolio-card-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="portfolio-card-footer">
              <div className="portfolio-no-image">
                <p>No Image</p>
                <small>You have no photos yet</small>
              </div>
              <button className="portfolio-card-btn">→</button>
            </div>
          </article>
        ))}
      </div>
      
      <div className="portfolio-btn-container">
        <Link to="/portfolio" className="portfolio-btn">View Full Portfolio →</Link>
      </div>
      
      <div className="portfolio-info">
        <section className="why-choose-us">
          <h3>Why Choose Us</h3>
          <ul>
            {whyChooseUsItems.map((item) => (
              <li key={item}><span className="checkmark">✓</span> {item}</li>
            ))}
          </ul>
        </section>
        <section className="industries-serve">
          <h3>Industries Serve</h3>
          <ul>
            {industriesServeItems.map((item) => (
              <li key={item}><span className="bullet">•</span> {item}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  </section>
);

const SiteFooterLinksSection = () => null;

const HomePage = () => (
  <main className="home-page">
    <PrimaryHeroCTASection />
    <ServiceHighlightsSection />
    <PortfolioTransformationSection />
  </main>
);

export default HomePage;
