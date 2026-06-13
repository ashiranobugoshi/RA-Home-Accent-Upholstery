import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { portfolioItems } from '../data/content';
import './PortfolioPage.css';

function PortfolioPage() {
  const [filter, setFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

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
          {/* Left Column: Brand Info */}
          <div className="portfolio-left-col">
            <div className="portfolio-brand-heading">
              <div className="brand-accent-line"></div>
              <div className="brand-text">
                <h1>ALL</h1>
              </div>
            </div>
            <h2 className="portfolio-product-name">
              {selectedItem ? selectedItem.name : 'Mid-Century Sofa'}
            </h2>
            <p className="portfolio-product-category">
              {selectedItem ? selectedItem.category : 'Residential restoration'}
            </p>
            <p className="portfolio-description">
              {selectedItem 
                ? selectedItem.description || "Established in 2016 (incorporated 2022). Originally Aileen's Dry Goods and Upholstery, we evolved into premium solutions for hotels, restaurant, corporate spaces, and high end-homes. Our master upholsterer brings 15+ years of international experience."
                : "Established in 2016 (incorporated 2022). Originally Aileen's Dry Goods and Upholstery, we evolved into premium solutions for hotels, restaurant, corporate spaces, and high end-homes. Our master upholsterer brings 15+ years of international experience."
              }
            </p>
            <a href="#before" className="view-before-btn">View Before →</a>
          </div>

          {/* Middle Column: Featured Media */}
          <div className="portfolio-middle-col">
            <div className="featured-media-card">
              {selectedItem ? (
                <div className="featured-media-content">
                  <div className="featured-media-icon">🖼️</div>
                  <h3 className="featured-media-title">{selectedItem.name}</h3>
                  <p className="featured-media-category">{selectedItem.category}</p>
                </div>
              ) : (
                <div className="no-image-placeholder">
                  <div className="no-image-placeholder-icon">🖼️</div>
                  <div className="no-image-placeholder-text">No Image</div>
                  <div className="no-image-placeholder-subtext">You have no photos yet</div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Item List Feed */}
          <div className="portfolio-right-col">
            {filteredItems.length > 0 ? (
              filteredItems.map(item => (
                <div 
                  key={item.id} 
                  className={`portfolio-item ${selectedItem?.id === item.id ? 'active' : ''}`}
                  onClick={() => setSelectedItem(item)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setSelectedItem(item);
                    }
                  }}
                >
                  <div className="portfolio-item-thumbnail">
                    <div className="portfolio-item-thumbnail-icon">🖼️</div>
                  </div>
                  <div className="portfolio-item-content">
                    <div className="portfolio-item-accent"></div>
                    <div className="portfolio-item-text">
                      <h3 className="portfolio-item-title">{item.name}</h3>
                      <p className="portfolio-item-category">{item.category}</p>
                      <p className="portfolio-item-description">
                        {item.description || "One sentence summary. One sentence summary. One sentence summary. One sentence summary. One sentence summary."}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="portfolio-item">
                <div className="portfolio-item-thumbnail">
                  <div className="portfolio-item-thumbnail-icon">🖼️</div>
                </div>
                <div className="portfolio-item-content">
                  <div className="portfolio-item-accent"></div>
                  <div className="portfolio-item-text">
                    <h3 className="portfolio-item-title">Mid-Century Sofa</h3>
                    <p className="portfolio-item-category">Residential restoration</p>
                    <p className="portfolio-item-description">
                      One sentence summary. One sentence summary. One sentence summary. One sentence summary. One sentence summary.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
