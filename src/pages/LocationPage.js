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
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.6794!2d121.5693!3d14.5889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c952819d9d9d%3A0xc0c0c0c0c0c0c0c0!2sLot%2018%20Crystal%20Homes%2C%20Abuab%20Rd%2C%20Guitnang%20Bayan%202%2C%20San%20Mateo%2C%20Rizal%201850%2C%20Philippines!5e0!3m2!1sen!2sph!4v1684000000000"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
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
