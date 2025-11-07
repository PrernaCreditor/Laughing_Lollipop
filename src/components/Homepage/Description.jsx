import React from 'react';
import './Description.css';

const Description = () => {
  return (
    <section className="description-section" id="about">
      <div className="description-container">
        <div className="description-content">
          <div className="section-badge">
            <span className="badge-icon">🍬</span>
            About Us
          </div>
          <h2 className="section-title">
            Take a Walk Down <span className="highlight">Memory Lane</span>
          </h2>
          <p className="description-text">
            Welcome to <strong>Laughing Lollipop</strong> - your little mom and pop sweet shop! 
            We're a charming neighborhood candy store that brings back the joy of childhood treats.
          </p>
          <p className="description-text">
            Step inside and discover a world of sweetness with our amazing selection of:
          </p>
          
          <div className="treats-grid">
            <div className="treat-item">
              <span className="treat-icon">🍦</span>
              <span className="treat-name">Ice Cream</span>
            </div>
            <div className="treat-item">
              <span className="treat-icon">🔵</span>
              <span className="treat-name">Dippin Dots</span>
            </div>
            <div className="treat-item">
              <span className="treat-icon">🍬</span>
              <span className="treat-name">Throwback Candies</span>
            </div>
            <div className="treat-item">
              <span className="treat-icon">🍫</span>
              <span className="treat-name">Chocolates</span>
            </div>
            <div className="treat-item">
              <span className="treat-icon">🧸</span>
              <span className="treat-name">Fun Gummies</span>
            </div>
            <div className="treat-item">
              <span className="treat-icon">☁️</span>
              <span className="treat-name">Homemade Cotton Candy</span>
            </div>
          </div>

          <div className="call-to-action">
            <p className="cta-text">
              Come on by and let us <span className="sugar-highlight">sugar you up!</span> 🍭
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;

