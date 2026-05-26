import React from 'react';
import PageHeader from '../components/PageHeader';
import { companyInfo } from '../data/content';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <PageHeader title="About RA Home Accent & Upholstery" />

      <div className="container">
        <div className="about-content">
          <div className="history-section">
            <h2>Our History</h2>
            <p>
              Established in 2016, RA Home Accent & Upholstery started as Aileen's Dry Goods 
              and was officially incorporated in 2022. We are dedicated to supporting Filipino 
              craftsmen while delivering world-class upholstery services to both residential 
              and commercial clients.
            </p>
          </div>

          <div className="founder-section">
            <h2>Founder: Aileen Malenab</h2>
            <p>
              “Integrity, excellence, and a heart for service.” Aileen leads with vision — ensuring quality craftsmanship and honest stewardship, honoring God through reliable work.
            </p>
          </div>
        </div>

        <div className="vision-mission-section">
          <h2>Vision & Mission</h2>
          <p>
            <strong>Vision:</strong> To become a trusted leader in premium upholstery 
            and furniture restoration services in the Philippines.
          </p>
          <p>
            <strong>Mission:</strong> Skilled craftsmanship + honest workmanship + dependable service
          </p>
        </div>

        <div className="values-section">
          <h2>Core Values</h2>
          <p>
            {companyInfo.values}
            <br /><br />
            Integrity • Craftsmanship-led • Quality-focused • Home-inspired • Style-conscious
            <br />
            We support Filipino craftsmen and pride ourselves on delivering excellence 
            in every project, from single furniture pieces to large-scale commercial installations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
