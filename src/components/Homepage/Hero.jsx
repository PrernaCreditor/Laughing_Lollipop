import React from 'react';
import donutImage from '../../assets/donut_img.png';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="brand-name">Welcome to</span>
            <span className="brand-name">Laughing Lollipop</span>
          </h1>
          <p className="hero-line">
            Take a walk down memory lane — Ice Cream, Throwback Candies & more! 🍭
          </p>
          <div className="hero-cta">
            <a href="#products" className="btn-primary">
              Explore Our Treats
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={donutImage} alt="Delicious donuts" className="donut-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
