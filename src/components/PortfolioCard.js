import React, { useState } from 'react';
import './PortfolioCard.css';

const PortfolioCard = ({ imageSrc, altText, clientLogo, projectDetails, result }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div
      className="portfolio-card"
      onClick={() => setIsRevealed(!isRevealed)}
    >
      {!isRevealed ? (
        // Before Click: Dark Navy Background
        <div className="portfolio-card__before">
          <span className="portfolio-card__text">View Before</span>
        </div>
      ) : (
        // After Click: Image with Logo and Overlay
        <div className="portfolio-card__after">
          <img
            src={imageSrc}
            alt={altText || 'Portfolio project'}
            className="portfolio-card__image"
          />

          {/* Client Logo - Top Left */}
          {clientLogo && (
            <div className="portfolio-card__logo">
              <img src={clientLogo} alt="Client logo" />
            </div>
          )}

          {/* Bottom Overlay with Project Details */}
          <div className="portfolio-card__overlay">
            <div className="portfolio-card__details">
              <div className="portfolio-card__detail-item">
                <span className="portfolio-card__label">Project:</span>
                <span className="portfolio-card__text-white">{projectDetails}</span>
              </div>
              <div className="portfolio-card__detail-item">
                <span className="portfolio-card__label">Result:</span>
                <span className="portfolio-card__text-white">{result}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioCard;
