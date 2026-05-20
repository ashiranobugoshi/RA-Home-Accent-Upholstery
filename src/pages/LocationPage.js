import React from 'react';
import PageHeader from '../components/PageHeader';
import { companyInfo } from '../data/content';
import './LocationPage.css';

function LocationPage() {
  return (
    <div className="location-page">
      <PageHeader title="Visit Our Workshop" />

      <div className="container">
        <div className="location-content">
          <div className="map">
            [Google Map Embed - {companyInfo.address}]
          </div>

          <div className="location-info">
            <h2>RA Home Accent & Upholstery Inc.</h2>
            
            <div className="location-detail">
              <p><strong>{companyInfo.address.split(',').slice(0, 2).join(',')}</strong></p>
              <p><strong>{companyInfo.address.split(',').slice(2).join(',')}</strong></p>
            </div>

            <div className="location-detail">
              <p><strong>📞 Phone:</strong></p>
              <p>{companyInfo.phone}</p>
            </div>

            <div className="location-detail">
              <p><strong>📧 Email:</strong></p>
              <p>{companyInfo.email}</p>
            </div>

            <div className="location-detail">
              <p><strong>🕐 Hours:</strong></p>
              <p>{companyInfo.hours}</p>
            </div>

            <div className="location-detail">
              <p><strong>Service Areas:</strong></p>
              <p className="service-areas">{companyInfo.serviceAreas}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationPage;
