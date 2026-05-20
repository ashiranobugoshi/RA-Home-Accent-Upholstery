import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import PortfolioItem from '../components/PortfolioItem';
import { portfolioItems } from '../data/content';
import './PortfolioPage.css';

function PortfolioPage() {
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="portfolio-page">
      <PageHeader 
        title="Our Work" 
        subtitle="Before & after transformations — residential & commercial"
      />

      <div className="container">
        <div className="portfolio-controls">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            ALL
          </button>
          <button 
            className={`filter-btn ${filter === 'sofas' ? 'active' : ''}`}
            onClick={() => setFilter('sofas')}
          >
            SOFAS
          </button>
          <button 
            className={`filter-btn ${filter === 'headboards' ? 'active' : ''}`}
            onClick={() => setFilter('headboards')}
          >
            HEADBOARDS
          </button>
          <button 
            className={`filter-btn ${filter === 'commercial' ? 'active' : ''}`}
            onClick={() => setFilter('commercial')}
          >
            COMMERCIAL
          </button>
        </div>

        <div className="portfolio-wrapper">
          <div className="portfolio-grid">
            {filteredItems.map(item => (
              <PortfolioItem
                key={item.id}
                name={item.name}
                description={item.description}
                type={item.type}
              />
            ))}
          </div>

          <div className="sidebar">
            <h3>Mid-Century Sofa</h3>
            <div className="project-detail">
              <p><strong>Category:</strong> Residential Restoration</p>
            </div>
            <div className="project-detail">
              <p><strong>Project Description:</strong> Classic mid-century sofa restored with premium velvet fabric, featuring new cushioning and authentic restoration of the wooden frame.</p>
            </div>
            <div className="sidebar-image">Before Photo</div>
            <div className="sidebar-image">After Photo</div>
            <a href="#" className="view-before">← View Before</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
