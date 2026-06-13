import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import PortfolioCard from '../components/PortfolioCard';
import './ClientsPage.css';

function ClientsPage() {
  const [activeProject, setActiveProject] = useState(0);
  const [revealedCards, setRevealedCards] = useState({});

  const industries = [
    'Hotels & Resorts',
    'Restaurants',
    'Offices & Clinics',
    'Condos & Homes',
    'Interior Designers & Contractors',
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Grand Hotel Manila',
      description: 'Hospitality excellence with quality upholstery.',
      projectDetails: '60 lobby armchairs reupholstery',
      result: 'Elegant, durable, on-time delivery. "Exceeded expectations."'
    },
    {
      id: 2,
      title: 'Grand Hotel Manila',
      description: 'Exceptional design, durable, on-time delivery.',
      projectDetails: '40 restaurant chairs restoration',
      result: 'Premium quality finishes delivered on time.'
    },
    {
      id: 3,
      title: 'Grand Hotel Manila',
      description: 'Professional service exceeding expectations.',
      projectDetails: '80 office furniture upholstery',
      result: 'Modern look with superior durability.'
    },
    {
      id: 4,
      title: 'Grand Hotel Manila',
      description: 'Premium finishing touches for luxury spaces.',
      projectDetails: '25 custom sofa restoration',
      result: 'Luxury finishes with attention to detail.'
    },
  ];

  const currentProject = portfolioItems[activeProject];

  const handleNext = () => {
    setActiveProject((prev) => (prev + 1) % portfolioItems.length);
  };

  const toggleCardReveal = (cardId) => {
    setRevealedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const renderCardContent = (item, cardId) => {
    const isRevealed = revealedCards[cardId];
    
    if (isRevealed) {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      {/* Scaled Image Container */}
      <div style={{ 
        width: '100%', 
        height: '100%', 
        overflow: 'hidden'
      }}>
        <img 
          src="https://via.placeholder.com/382x685?text=Featured+Project" 
          alt={item.title}
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            transform: 'scaleX(1.2)',
            transformOrigin: 'center center',
            transition: 'transform 0.3s ease'
          }}
        />
      </div>
      
      {/* Client Logo - Top Left */}
      <div style={{
        position: 'absolute',
        top: '14px',
        left: '8px',
        width: '58px',
        height: '58px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255,255,255,0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '10px',
        fontWeight: 'bold',
        zIndex: 10
      }}>
        Logo
      </div>

      {/* Project Details Overlay - Bottom */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '8px',
        right: '8px',
        backgroundColor: 'rgba(0,0,0,0.6)',
        padding: '16px',
        color: 'white',
        fontSize: '14px',
        fontFamily: "'Playfair Display', Georgia, serif",
        zIndex: 10
      }}>
        <p style={{ margin: '0 0 8px 0' }}>
          <span style={{ fontWeight: 'bold', color: '#c8a439' }}>Project: </span>
          <span>{item.projectDetails}</span>
        </p>
        <p style={{ margin: '0' }}>
          <span style={{ fontWeight: 'bold', color: '#c8a439' }}>Result: </span>
          <span>{item.result}</span>
        </p>
      </div>
    </div>
  );
} else {
      // Before state - show image
      return (
        <div style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${require('../images/blue.png')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px'
        }}>
          <div style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.15)',
            border: '3px solid rgba(255,255,255,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '11px',
            color: 'rgba(255,255,255,0.7)',
            fontWeight: 'bold'
          }}>
            YOUR LOGO
          </div>
          <h3 style={{ color: 'white', fontSize: '18px', fontWeight: 'bold', textAlign: 'center', margin: 0, fontFamily: "'Inria Serif', Georgia, serif", maxWidth: '200px' }}>
            {item.title}
          </h3>
        </div>
      );
    }
  };

  return (
    <div className="clients-page">
      <PageHeader title="Clients We've Worked With" />
      
      {/* Industries Section */}
      <section className="industries-section">
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            {/* Left Side - Industries List */}
            <div>
              <h2>Industries We Serve</h2>
              
              <p>
                We proudly partner with businesses and homeowners across multiple industries, delivering quality 
                upholstery and furniture restoration tailored to each space.
              </p>

              <ul className="industries-list">
                {industries.map((industry, index) => (
                  <li key={index}>{industry}</li>
                ))}
              </ul>
            </div>

            {/* Right Side - Circular Collage */}
            <div className="industries-collage">
              {/* Circle 1: Large Image (50%, top 20%, left 0%) */}
              <div className="industries-circle industries-circle-1">
                <img src={require('../images/premium sofa.jpg')} alt="Premium Sofa Upholstery" />
              </div>

              {/* Circle 2: Medium Image (30%, top 0%, right 25%) */}
              <div className="industries-circle industries-circle-2">
                <img src={require('../images/dining chairs.jpg')} alt="Dining Chairs" />
              </div>

              {/* Circle 3: Medium-Large Image (40%, bottom 20%, right 0%) */}
              <div className="industries-circle industries-circle-3">
                <img src={require('../images/sectional.jpg')} alt="Sectional Sofa" />
              </div>

              {/* Circle 4: Small Gold Accent (15%, top 10%, right 15%) */}
              <div className="industries-circle industries-circle-4">
                <img src={require('../images/circle.png')} alt="Accent" />
              </div>

              {/* Circle 5: Large Gold Accent (35%, bottom 0%, right 20%) */}
              <div className="industries-circle industries-circle-5">
                <img src={require('../images/circle.png')} alt="Accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfol0io-section" style={{ padding: '0px 0px', backgroundColor: '#2c3e50', position: 'relative' }}>
        <div style={{ width: '100%', margin: '0 auto', position: 'relative', height: '685px' }}>
          
          {/* Left Card */}
          <div 
            onClick={() => toggleCardReveal('left')}
            style={{ 
              position: 'absolute', 
              left: 0, 
              top: 0, 
              width: '20%', 
              height: '685px',
              cursor: 'pointer',
              overflow: 'hidden',
              backgroundImage: `url(${require('../images/table.jpg')})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: revealedCards['left'] ? 'scaleX(1.5)' : 'scaleX(1)',
              transformOrigin: 'center center',
              transition: 'transform 0.3s ease, z-index 0s',
              zIndex: revealedCards['left'] ? 1 : 1
            }}>
            {renderCardContent(currentProject, 'left')}
          </div>

          {/* Center Card */}
          <div 
            onClick={() => toggleCardReveal('center')}
            style={{ 
              position: 'absolute', 
              left: '20%', 
              top: 0, 
              width: '20%', 
              height: '685px',
              cursor: 'pointer',
              overflow: 'hidden'
            }}>
            {renderCardContent(currentProject, 'center')}
          </div>

          {/* Right Cards - 3 Overlay Panels */}
          {portfolioItems.slice(0, 3).map((item, index) => (
            <div 
              key={item.id}
              onClick={() => toggleCardReveal(`right-${index}`)}
              style={{
                position: 'absolute',
                left: `${40 + index * 20}%`,
                top: 0,
                width: '20%',
                height: '685px',
                cursor: 'pointer',
                overflow: 'hidden'
              }}>
              {renderCardContent(item, `right-${index}`)}
            </div>
          ))}

          {/* Next Button */}
          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              padding: '12px 24px',
              backgroundColor: '#c8a439',
              border: 'none',
              color: '#1a1a1a',
              fontSize: '14px',
              fontWeight: 'bold',
              cursor: 'pointer',
              borderRadius: '4px',
              fontFamily: "'Playfair Display', Georgia, serif"
            }}>
            Next →
          </button>
        </div>
      </section>
    </div>
  );
}

export default ClientsPage;