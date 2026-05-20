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
      // After state - show image
      return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <img 
            src="https://via.placeholder.com/382x685?text=Featured+Project" 
            alt={item.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          
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
            fontWeight: 'bold'
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
            fontFamily: "'Playfair Display', Georgia, serif"
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
      // Before state - show logo + title
      return (
        <div style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#0e243f',
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
      <section className="industries-section" style={{ padding: '80px 20px', backgroundColor: '#f9f9f9' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            {/* Left Side - Industries List */}
            <div>
              <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '30px', color: '#1a1a1a' }}>
                Industries we serve
              </h2>
              
              <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.8', marginBottom: '30px' }}>
                We proudly partner with businesses and homeowners across multiple industries, delivering quality 
                upholstery and furniture restoration tailored to each space.
              </p>

              <ul style={{ listStyle: 'none', padding: 0 }}>
                {industries.map((industry, index) => (
                  <li key={index} style={{ 
                    padding: '12px 0', 
                    paddingLeft: '35px', 
                    position: 'relative', 
                    fontSize: '16px', 
                    color: '#333' 
                  }}>
                    <span style={{ 
                      position: 'absolute', 
                      left: 0, 
                      color: '#c99e4c', 
                      fontWeight: 'bold', 
                      fontSize: '18px' 
                    }}>✓</span>
                    {industry}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side - Circular Images */}
            <div style={{ position: 'relative', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                backgroundColor: '#e8dcc8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                color: '#999'
              }}>
                Image Placeholder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section" style={{ padding: '80px 20px', backgroundColor: '#2c3e50', position: 'relative' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', position: 'relative', height: '685px' }}>
          
          {/* Left Card */}
          <div 
            onClick={() => toggleCardReveal('left')}
            style={{ 
              position: 'absolute', 
              left: 0, 
              top: 0, 
              width: '265px', 
              height: '685px',
              cursor: 'pointer',
              overflow: 'hidden'
            }}>
            {renderCardContent(currentProject, 'left')}
          </div>

          {/* Center Card */}
          <div 
            onClick={() => toggleCardReveal('center')}
            style={{ 
              position: 'absolute', 
              left: '265px', 
              top: 0, 
              width: '382px', 
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
                left: `${647 + index * 265}px`,
                top: 0,
                width: '265px',
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