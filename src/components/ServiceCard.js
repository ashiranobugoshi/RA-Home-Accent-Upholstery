import React from 'react';
import './ServiceCard.css';

function ServiceCard({ icon, name, description }) {
  return (
    <div className="service-card">
      <div className="icon">{icon}</div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;
