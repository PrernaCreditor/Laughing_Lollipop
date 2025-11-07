import React, { useRef } from 'react';
import './Description.css';

// Update image paths to your assets or keep placeholders
const treats = [
  { name: 'Ice Cream', img: require('../../assets/Icecream.jpg') },
  { name: 'Dippin Dots', img: require('../../assets/Dippin.jpg') },
  // { name: 'Throwback Candies', img: require('../../assets/ice_img.png') },
  { name: 'Chocolates', img: require('../../assets/Choco.jpg') },
  { name: 'Fun Gummies', img: require('../../assets/fun.jpg') },
  { name: 'Homemade Cotton Candy', img: require('../../assets/Cotton.jpg') },
];

const Description = () => {
  const sliderRef = useRef(null);

  const scrollBy = (dir = 'next') => {
    const container = sliderRef.current;
    if (!container) return;
    const card = container.querySelector('.curved-card');
    if (!card) return;
    const gap = parseInt(getComputedStyle(container).columnGap || 16, 10) || 16;
    const scrollAmount = card.offsetWidth + gap;
    container.scrollBy({
      left: dir === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="description-section" id="about" aria-labelledby="about-heading">
      <div className="description-shell">
        <header className="description-header">
          <h2 id="about-heading" className="description-title">
            Laughing Lollipop — <span className="muted">your little mom &amp; pop sweet shop</span>
          </h2>
          <p className="lead-text">
            We're a charming neighborhood candy store that brings back the joy of childhood treats.
          </p>
        </header>

        <div className="content-panel card-layout">
          <p className="explainer">
            Step inside and discover a world of sweetness with our amazing selection of:
          </p>

          <div className="slider-controls">
            <button
              className="slider-btn prev"
              aria-label="Previous treats"
              onClick={() => scrollBy('prev')}
            >
              ‹
            </button>
            <button
              className="slider-btn next"
              aria-label="Next treats"
              onClick={() => scrollBy('next')}
            >
              ›
            </button>
          </div>

          <div
            className="treat-slider"
            ref={sliderRef}
            role="list"
            aria-label="Featured treats"
          >
            {treats.map((t, i) => (
              <article key={i} className="curved-card" role="listitem" tabIndex={0}>
                {t.img ? (
                  <div className="card-media">
                    <img src={t.img.default || t.img} alt={t.name} loading="lazy" />
                  </div>
                ) : (
                  <div className="card-media placeholder" aria-hidden="true" />
                )}
                <div className="card-body">
                  <div className="product-pill">{t.name}</div>
                  {/* <p className="product-sub">Fresh · Tasty · Nostalgic</p> */}
                </div>
              </article>
            ))}
          </div>

          <div className="description-cta">
            <a href="#products" className="btn-cta">See All Treats</a>
            <a href="#contact" className="btn-link">Visit Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
