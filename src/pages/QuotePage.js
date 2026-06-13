import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import './QuotePage.css';

function QuotePage() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    service: '',
    projecttype: '',
    description: '',
    dimensions: '',
    furniture: '',
    fabric: '',
    budget: '',
    date: '',
    delivery: '',
    photos: null
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      fullname, email, phone, service, projecttype,
      description, dimensions, furniture, fabric,
      budget, date, delivery
    } = formData;

    // Construct mailto link with your Yahoo email
    const mailtoLink = `mailto:aileentamhiomatmenab@yahoo.com?subject=Quote Request from ${encodeURIComponent(fullname)}&body=
    Full Name: ${encodeURIComponent(fullname)}%0D%0A
    Email: ${encodeURIComponent(email)}%0D%0A
    Phone: ${encodeURIComponent(phone)}%0D%0A
    Service Needed: ${encodeURIComponent(service)}%0D%0A
    Project Type: ${encodeURIComponent(projecttype)}%0D%0A
    Description: ${encodeURIComponent(description)}%0D%0A
    Dimensions: ${encodeURIComponent(dimensions)}%0D%0A
    Furniture: ${encodeURIComponent(furniture)}%0D%0A
    Fabric: ${encodeURIComponent(fabric)}%0D%0A
    Budget: ${encodeURIComponent(budget)}%0D%0A
    Desired Start Date: ${encodeURIComponent(date)}%0D%0A
    Delivery/Pickup: ${encodeURIComponent(delivery)}`;

    // Open default email client
    window.location.href = mailtoLink;

    // Reset form
    setFormData({
      fullname: '',
      email: '',
      phone: '',
      service: '',
      projecttype: '',
      description: '',
      dimensions: '',
      furniture: '',
      fabric: '',
      budget: '',
      date: '',
      delivery: '',
      photos: null
    });
  };

  return (
    <div className="quote-page">
      <PageHeader 
        title="Request a Quote"
        subtitle="Tell us about your project — we'll respond within 24h"
      />

      <div className="container">
        <form className="form-section" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="service">Service Needed</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a service</option>
              <option value="upholstery">Upholstery/Reupholstery</option>
              <option value="restoration">Furniture Restoration</option>
              <option value="custom">Custom Design</option>
              <option value="commercial">Commercial Projects</option>
            </select>
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
            <label htmlFor="projecttype">Project Type</label>
            <select
              id="projecttype"
              name="projecttype"
              value={formData.projecttype}
              onChange={handleChange}
              required
            >
              <option value="">Select type</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="mixed">Mixed</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group full">
            <label htmlFor="description">Brief Project Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="form-group full">
            <label htmlFor="dimensions">Approximate Dimensions (optional)</label>
            <input
              type="text"
              id="dimensions"
              name="dimensions"
              placeholder="e.g., 3ft x 2ft"
              value={formData.dimensions}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full">
            <label htmlFor="furniture">Existing Furniture to be Reupholstered?</label>
            <select
              id="furniture"
              name="furniture"
              value={formData.furniture}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="form-group full">
            <label htmlFor="fabric">Preferred Fabric Style (optional)</label>
            <input
              type="text"
              id="fabric"
              name="fabric"
              placeholder="e.g., Velvet, Linen, Leather"
              value={formData.fabric}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full">
            <label htmlFor="budget">Target Budget Range</label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
            >
              <option value="">Select budget</option>
              <option value="1-5">1k-5k</option>
              <option value="5-10">5k-10k</option>
              <option value="10-20">10k-20k</option>
              <option value="20+">20k+</option>
            </select>
          </div>

          <div className="form-group full">
            <label htmlFor="date">Desired Start Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group full">
            <label htmlFor="delivery">Delivery or Pickup Needed?</label>
            <select
              id="delivery"
              name="delivery"
              value={formData.delivery}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="delivery">Delivery</option>
              <option value="pickup">Pickup</option>
              <option value="both">Both</option>
            </select>
          </div>

          <div className="form-group full">
            <label htmlFor="photos">Photo Upload (optional 1-3 images)</label>
            <input
              type="file"
              id="photos"
              name="photos"
              accept="image/*"
              multiple
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn">Submit Quote Request</button>
        </form>
      </div>
    </div>
  );
}

export default QuotePage;
