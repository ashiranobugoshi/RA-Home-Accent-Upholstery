import React from 'react';
import './PortfolioItem.css';

function PortfolioItem({ name, description, type }) {
  return (
    <div className="portfolio-item">
      <div className="portfolio-image">{name}</div>
      <div className="portfolio-info">
        <h3>{name}</h3>
        <p>{type}</p>
      </div>
    </div>
  );
}

export default PortfolioItem;
