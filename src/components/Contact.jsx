import React, { useState } from 'react';
import './Contact.css';

const SERVICES = [
  'Pick-up Order',
  'Party Booking',
  'Bulk Order',
  'Cotton Candy Order',
  'General Question',
];

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: SERVICES[0],
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [activeField, setActiveField] = useState(null);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.email.trim()) e.email = 'Please enter an email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Email looks invalid';
    if (!form.phone.trim()) e.phone = 'Please enter a contact number';
    else if (!/^[0-9\-\+\s()]{7,20}$/.test(form.phone)) e.phone = 'Phone looks invalid';
    if (!form.message.trim()) e.message = 'Please tell us a bit about your order or question';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleFocus = (fieldName) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      window.scrollTo({ top: ev.target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
      return;
    }

    console.log('Contact form submitted', form);
    setSent(true);
    setTimeout(() => {
      setForm({
        name: '',
        email: '',
        phone: '',
        service: SERVICES[0],
        message: '',
      });
      setSent(false);
    }, 3600);
  };

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="contact-container">
        
        {/* Header Section */}
        <div className="contact-header">
          {/* <div className="contact-badge">Get In Touch</div> */}
          <h2 id="contact-heading" className="contact-title">
            Let's Create Something <span className="gradient-text">Sweet Together</span>
          </h2>
          <p className="contact-subtitle">
            Have questions about our treats or want to plan a special order? We'd love to hear from you!
          </p>
        </div>

        <div className="contact-layout">
          
          {/* Contact Information Side */}
          <div className="contact-info-side">
            <div className="info-card">
              <div className="card-header">
                <h3>Visit Our Shop</h3>
              </div>
              <div className="card-content">
                <p className="address">
                  101 Budleigh Street, Suite B<br />
                  Manteo, NC 27954
                </p>
                <div className="contact-methods">
                  <a href="tel:252-473-2579" className="contact-method">
                    <span className="method-text">
                      <span className="method-label">Call Us</span>
                      <span className="method-value">252-473-2579</span>
                    </span>
                  </a>
                  
                  <a href="mailto:thelaughinglollipop@gmail.com" className="contact-method">
                    <span className="method-text">
                      <span className="method-label">Email Us</span>
                      <span className="method-value">thelaughinglollipop@gmail.com</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-card">
              <div className="card-header">
                <h3>Follow Along</h3>
              </div>
              <div className="social-grid">
                <a href="https://www.instagram.com/laughinglollipop" target="_blank" rel="noreferrer" className="social-item">
                  <span className="social-platform">Instagram</span>
                </a>
                <a href="https://www.facebook.com/share/14LaAkqK43Z/" target="_blank" rel="noreferrer" className="social-item">
                  <span className="social-platform">Facebook</span>
                </a>
              </div>
            </div>

            {/* Quick Info */}
            <div className="quick-info">
              <div className="info-item">
                <div className="info-details">
                  <strong>Store Hours</strong>
                  <span>Mon-Sat: 10AM-8PM</span>
                </div>
              </div>
              <div className="info-item">
                <div className="info-details">
                  <strong>Free Pickup</strong>
                  <span>Order ahead & grab</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Side */}
          <div className="contact-form-side">
            <div className="form-container">
              <div className="form-header">
                <h3>Send Us a Message</h3>
                <p>We'll get back to you within 24 hours</p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-grid">
                  {/* Name Field */}
                  <div className={`form-field ${activeField === 'name' ? 'field-active' : ''} ${errors.name ? 'field-error' : ''}`}>
                    <label className="field-label">Full Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      type="text"
                      placeholder="Your name"
                      className="field-input"
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>

                  {/* Email Field */}
                  <div className={`form-field ${activeField === 'email' ? 'field-active' : ''} ${errors.email ? 'field-error' : ''}`}>
                    <label className="field-label">Email Address</label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      type="email"
                      placeholder="you@example.com"
                      className="field-input"
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>

                  {/* Phone Field */}
                  <div className={`form-field ${activeField === 'phone' ? 'field-active' : ''} ${errors.phone ? 'field-error' : ''}`}>
                    <label className="field-label">Phone Number</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      onFocus={() => handleFocus('phone')}
                      onBlur={handleBlur}
                      type="tel"
                      placeholder="(252) 555-1234"
                      className="field-input"
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>

                  {/* Service Field */}
                  <div className={`form-field ${activeField === 'service' ? 'field-active' : ''}`}>
                    <label className="field-label">What can we help with?</label>
                    <select 
                      name="service" 
                      value={form.service} 
                      onChange={handleChange}
                      onFocus={() => handleFocus('service')}
                      onBlur={handleBlur}
                      className="field-input"
                    >
                      {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div className={`form-field full-width ${activeField === 'message' ? 'field-active' : ''} ${errors.message ? 'field-error' : ''}`}>
                  <label className="field-label">Your Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    placeholder="Tell us about your order, party plans, or any questions you have..."
                    rows="4"
                    className="field-input textarea"
                  />
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                {/* Submit Section */}
                <div className="form-actions">
                  <button 
                    type="submit" 
                    className={`submit-button ${sent ? 'sent' : ''}`}
                    disabled={sent}
                  >
                    <span className="button-content">
                      <span className="button-text">
                        {sent ? 'Message Sent!' : 'Send Message'}
                      </span>
                    </span>
                    {!sent && <span className="button-glow"></span>}
                  </button>
                  
                  <div className="privacy-note">
                    Your information is safe with us. We respect your privacy.
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
