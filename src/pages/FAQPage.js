import React from 'react';
import PageHeader from '../components/PageHeader';
import { faqItems } from '../data/content';
import './FAQPage.css';

function FAQPage() {
  return (
    <div className="faq-page">
      <PageHeader title="Get In Touch" />

      <div className="container">
        {faqItems.map((item) => (
          <div key={item.id} className="faq-item">
            <div className="faq-question">
              <span className="faq-icon">?</span>
              <div>
                <h3>{item.question}</h3>
              </div>
            </div>
            <div className="faq-answer">
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQPage;
