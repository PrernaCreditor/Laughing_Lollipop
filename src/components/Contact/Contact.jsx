import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-align-center">
        {/* Main Heading Section */}
        <div className="contact-header">
          <h1 className="main-title">Get in Touch</h1>
          <p className="main-subtitle">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
        {/* Contact Content Boxes */}
        <div className="contact-boxes">
          {/* Left Box - Contact Form */}
          <div className="contact-box form-box">
            <div className="box-header">
              <div className="icon-wrapper">
                <i className="fas fa-paper-plane"></i>
              </div>
              <h2>Send us a message</h2>
            </div>
            <p className="box-description">
              Have questions about our products or services? Fill out the form below and our team will get back to you within 24 hours.
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <div className="input-wrapper">
                    <i className="fas fa-user"></i>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name" 
                      required 
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-wrapper">
                    <i className="fas fa-user"></i>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name" 
                      required 
                    />
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <div className="input-wrapper">
                    <i className="fas fa-phone"></i>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number" 
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-wrapper">
                    <i className="fas fa-envelope"></i>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address" 
                      required 
                    />
                  </div>
                </div>
              </div>
              <div className="form-group full-width">
                <div className="input-wrapper">
                  <i className="fas fa-tag"></i>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject" 
                    required 
                  />
                </div>
              </div>
              <div className="form-group full-width">
                <div className="input-wrapper textarea-wrapper">
                  <i className="fas fa-comment-dots"></i>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message" 
                    rows="5"
                    required
                  ></textarea>
                </div>
              </div>
              <button type="submit" className="submit-btn">
                <span>Send Message</span>
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
          {/* Right Box - Contact Info */}
          <div className="contact-box info-box">
            <div className="box-header">
              <div className="icon-wrapper">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h2>Contact Information</h2>
            </div>
            <p className="box-description">
              Prefer to reach us directly? Here are all the ways you can get in touch with our team.
            </p>
            <div className="contact-details">
              <div className="detail-item">
                <div className="detail-icon">
                  <i className="fas fa-location-dot"></i>
                </div>
                <div className="detail-content">
                  <h3>Our Location</h3>
                  <p>Store Front address <br/>
                      101 Budleigh Street Suite B<br />Manteo, NC 27954</p>
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon">
                  <i className="fas fa-envelope-open"></i>
                </div>
                <div className="detail-content">
                  <h3>Email Us</h3>
                  <p>thelaughinglollipop@gmail.com</p>
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon">
                  <i className="fas fa-phone-volume"></i>
                </div>
                <div className="detail-content">
                  <h3>Call Us</h3>
                  <p>252-473-2579</p>
                </div>
              </div>
            </div>
            <div className="social-section">
              <h3>Follow Our Social Media</h3>
              <div className="social-icons">
                <a href="https://www.facebook.com/share/14LaAkqK43Z/" className="social-icon facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/laughinglollipop" className="social-icon instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;