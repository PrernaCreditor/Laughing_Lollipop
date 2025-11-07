import React from 'react';
import './Products.css';

const Products = () => {
  const services = [
    {
      icon: '🎉',
      title: 'Birthday & Event Parties',
      description: 'Book your special celebration with us! We provide sweet treats and fun for birthdays and events.',
      color: '#ff69b4'
    },
    {
      icon: '🍿',
      title: 'Popcorn Packages',
      description: 'Order delicious popcorn packages for pick up. Perfect for parties, events, or just because!',
      color: '#ffd700'
    },
    {
      icon: '🍬',
      title: 'Candy Popcorn',
      description: 'Sweet and savory candy popcorn mixes available for pick up. Customize your perfect blend!',
      color: '#da70d6'
    },
    {
      icon: '🍭',
      title: 'Bulk Candy Mix',
      description: 'Order bulk candy mixes for your events. We offer a wide variety of retro and modern candies.',
      color: '#ff69b4'
    },
    {
      icon: '☁️',
      title: 'Cotton Candy',
      description: 'Fresh homemade cotton candy available for pick up. Available in multiple flavors and colors!',
      color: '#ffd700'
    }
  ];

  return (
    <section className="products-section" id="products">
      <div className="products-container">
        <div className="products-header">
          <div className="section-badge">
            <span className="badge-icon">🍭</span>
            Our Services
          </div>
          <h2 className="section-title">
            Sweet <span className="highlight">Treats & Services</span>
          </h2>
          <p className="section-subtitle">
            We offer more than just candy! Book parties, order packages, and make your celebrations extra sweet.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              style={{ '--card-color': service.color }}
            >
              <div className="service-icon-wrapper">
                <span className="service-icon">{service.icon}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button className="service-btn">Learn More</button>
            </div>
          ))}
        </div>

        <div className="order-cta">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Order?</h3>
            <p className="cta-text">
              Contact us to book your party or place a pick-up order for any of our sweet treats!
            </p>
            <a href="#contact" className="cta-button">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

