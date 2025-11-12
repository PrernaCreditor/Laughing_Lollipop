import React, { useState } from "react";
import LollipopLogo from "../assets/laugh_logo.png";
import "./Footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  function handleSubscribe(e) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ type: "error", text: "Please enter a valid email." });
      return;
    }
    // Simulate subscribe (replace with real API)
    setStatus({ type: "loading", text: "Subscribing…" });
    setTimeout(() => {
      setStatus({ type: "success", text: "Thanks — you're on the list!" });
      setEmail("");
    }, 800);
  }

  return (
    <footer className="footer" aria-labelledby="footer-heading">
      <div className="footer-inner">
        {/* BRAND */}
        <div className="footer-col footer-brand">
          <div className="brand-row">
            <img src={LollipopLogo} alt="Laughing Lollipop logo" className="footer-logo" />
            <div>
              <div className="footer-company">Laughing Lollipop</div>
              <div className="footer-tag">Sweetness in every bite</div>
            </div>
          </div>

          <p className="footer-blurb">
            Family-run candy shop in Manteo — handcrafted sweets, party packages, and smiles since day one.
          </p>

          <div className="footer-social">
            <a
              href="https://www.facebook.com/share/14LaAkqK43Z/"
              className="social-link"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              {/* Facebook SVG */}
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path fill="currentColor" d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.06 5.66 21.16 10.44 21.95v-6.98H8.08v-2.9h2.36V9.41c0-2.33 1.38-3.61 3.5-3.61. 9 0 1.64.12 1.64.12v1.8h-0.92c-0.9 0-1.18.56-1.18 1.13v1.36h2.01l-0.32 2.9h-1.69V21.95C18.34 21.16 22 17.06 22 12.07z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/laughinglollipop"
              className="social-link"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              {/* Instagram SVG */}
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path fill="currentColor" d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.2A3.8 3.8 0 1015.8 12 3.8 3.8 0 0012 8.2zM18.4 6.2a1 1 0 11-1 1 1 1 0 011-1z" />
              </svg>
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <nav className="footer-col footer-links" aria-label="Footer quick links">
          <h4 className="col-title">Quick Links</h4>
          <ul>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/order">Order Pickup</a></li>
            <li><a href="/party">Book Party</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        {/* CONTACT */}
        <div className="footer-col footer-contact">
          <h4 className="col-title">Contact</h4>
          <div className="contact-row">
            <strong>Address</strong>
            <address>101 Budleigh Street Suite B<br/>Manteo, NC 27954</address>
          </div>
          <div className="contact-row">
            <strong>Phone</strong>
            <a href="tel:+12524732579">252-473-2579</a>
          </div>
          <div className="contact-row">
            <strong>Email</strong>
            <a href="mailto:thelaughinglollipop@gmail.com">thelaughinglollipop@gmail.com</a>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-col footer-newsletter" aria-labelledby="newsletter-label">
          <h4 id="newsletter-label" className="col-title">Join Our Sweet List</h4>
          <p className="newsletter-copy">Get exclusive offers, party tips, and seasonal treats — delivered to your inbox.</p>

          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <label htmlFor="footer-email" className="visually-hidden">Email address</label>
            <input
              id="footer-email"
              type="email"
              className="newsletter-input"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setStatus(null); }}
              aria-label="Email address"
            />
            <button type="submit" className="newsletter-btn">Subscribe</button>
          </form>

          {status && (
            <div className={`newsletter-status ${status.type}`} role="status" aria-live="polite">
              {status.text}
            </div>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <small>© {new Date().getFullYear()} Laughing Lollipop — All rights reserved.</small>
      </div>
    </footer>
  );
}
