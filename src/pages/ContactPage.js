import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { companyInfo } from '../data/content';
import './ContactPage.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a server
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="contact-page">
      <PageHeader title="Get In Touch" />

      <div className="container">
        <div className="contact-content">
          <div className="contact-section">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>

          <div className="contact-section">
            <h2>Connect With Us</h2>
            
            <div className="contact-method">
              <p><strong>📞 Phone:</strong></p>
              <p>{companyInfo.phone}</p>
            </div>

            <div className="contact-method">
              <p><strong>📧 Email:</strong></p>
              <p>{companyInfo.email}</p>
            </div>

            <div className="contact-method">
              <p><strong>📍 Address:</strong></p>
              <p>{companyInfo.address}</p>
            </div>

            <div className="social-icons">
              <a href="https://facebook.com" className="social-icon" title="Facebook">f</a>
              <a href="https://m.me" className="social-icon" title="Messenger">m</a>
              <a href="viber://chat" className="social-icon" title="Viber">☎</a>
              <a href="https://wa.me" className="social-icon" title="WhatsApp">W</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
