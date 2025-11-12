import React from "react";
import "./About.css";
import LollipopLogo from "../../assets/laugh_logo.png";
const services = [
  {
    id: "party",
    title: "Birthday & Event Parties",
    desc: "Celebrate with custom candy buffets, themed decorations, and unforgettable experiences for any age.",
    cta: "Book Party"
  },
  {
    id: "popcorn",
    title: "Popcorn & Candy Popcorn",
    desc: "Freshly popped every day — classic, caramel, or candy-coated varieties perfect for parties or pickup.",
    cta: "Order Now"
  },
  {
    id: "candy",
    title: "Bulk Candy Mix",
    desc: "Create your own mix by flavor and color. Perfect for events, gifts, or everyday indulgence.",
    cta: "Create Mix"
  },
  {
    id: "cotton",
    title: "Cotton Candy",
    desc: "Fluffy cotton candy in a rainbow of colors and flavors. Available for pickup or live event spinning.",
    cta: "Reserve Now"
  }
];

export default function AboutServices() {
  return (
    <section className="about-services " id="about">
      <div className="container">

        {/* ABOUT SECTION */}
        <div className="about-header enhanced-about-header">
          <div className="about-heading-row-with-img">
            <div className="about-heading-row">
              <span className="about-heading-black">About</span>
              <span className="about-heading-dash">&nbsp;--&nbsp;</span>
              <span className="about-heading-pink">The Laughing Lollipop</span>
            </div>
            <img src={LollipopLogo} alt="Laughing Lollipop Logo" className="about-logo-img" />
          </div>
          <p className="about-text">
            At <strong className="about-heading-pink">The Laughing Lollipop</strong>, we believe every day deserves a little sweetness.
            Nestled in the heart of Manteo, NC, we bring joy through colorful candies, nostalgic treats,
            and handcrafted sweets that make memories last. Whether you’re planning a party or picking
            up your favorite popcorn, our shop is your happy place filled with flavor and fun.
          </p>
        </div>

        {/* SERVICES SECTION */}
        <div className="services-section">
          <h2 className="services-heading">Our Sweet Services</h2>
          <p className="services-subtext">
            From fun-sized celebrations to grand candy buffets — we’ve got something for every occasion.
          </p>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-info">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <button className="service-btn">{service.cta}</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="cta-section">
          <h3>Make Your Next Celebration Extra Sweet!</h3>
          <p>Book your candy-filled party or order treats for pickup today.</p>
          <div className="cta-buttons">
            <button className="btn primary">Book a Party</button>
            <button className="btn secondary">Order Treats</button>
          </div>
        </div>
      </div>
    </section>
  );
}
