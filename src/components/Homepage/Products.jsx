import React from 'react';
import './Products.css';
import iceImg from '../../assets/Icecream.jpg';
import dippinImg from '../../assets/Dippin.jpg';
import chocoImg from '../../assets/Choco.jpg';
import funImg from '../../assets/fun.jpg';
import cottonImg from '../../assets/Cotton.jpg';
import throwbackImg from '../../assets/donut_img.png';

// Replace img: null with imported images like:
// import iceImg from '../../assets/ice.png';
// { title: 'Ice Cream', img: iceImg, tag: 'Frozen' }
const items = [
  { title: 'Ice Cream', subtitle: 'Scoops & cones', img: iceImg, tag: 'Popular' },
    { title: 'Dippin Dots', subtitle: 'Tiny frozen pearls', img: dippinImg, tag: 'Retro' },
  { title: 'Throwback Candies', subtitle: 'Vintage favorites', img: throwbackImg, tag: 'Classic' },
  { title: 'Chocolates', subtitle: 'Handmade & rich', img: chocoImg, tag: 'Gourmet' },
  { title: 'Fun Gummies', subtitle: 'Bright & chewy', img: funImg, tag: 'Kids' },
  { title: 'Cotton Candy', subtitle: 'Fresh & fluffy', img: cottonImg, tag: 'Made-to-order' },
];

const Products = () => {
  return (
    <section className="products-section" id="products" aria-labelledby="products-heading">
      <div className="products-inner">
        <header className="products-head">
          <h2 id="products-heading" className="products-title">
            <span className="accent">Laughing Lollipop</span> — Your little mom & pop sweet shop
          </h2>
          <p className="products-lead">
         
          Step inside and discover a world of sweetness with our amazing selection of:


          </p>
        </header>

        <div className="tiles-grid" role="list" aria-label="Product tiles">
          {items.map((it, i) => (
            <article
              key={i}
              className={`tile tile-${(i % 6) + 1}`}
              role="listitem"
              tabIndex={0}
              aria-label={`${it.title} — ${it.subtitle}`}
            >
              {it.img ? (
                <img src={it.img} alt={it.title} className="tile-img" />
              ) : (
                <div className="tile-fallback" aria-hidden="true" />
              )}

              <div className="tile-overlay" aria-hidden="true" />

              <div className="tile-content">
                <div className="tile-meta">
                  <span className="tile-tag">{it.tag}</span>
                </div>

                <h3 className="tile-title">{it.title}</h3>
                <p className="tile-sub">{it.subtitle}</p>

                <div className="tile-actions">
                  <a href="#contact" className="tile-btn">Order</a>
                  <a href="#more" className="tile-link">Details</a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="products-cta">
          <a href="#contact" className="primary-cta">Visit Us</a>
          <a href="#menu" className="secondary-cta">Full Menu</a>
        </div>
      </div>
    </section>
  );
};

export default Products;
