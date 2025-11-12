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
    setStatus({ type: "loading", text: "Subscribing…" });
    setTimeout(() => {
      setStatus({ type: "success", text: "Thanks — you're on the list!" });
      setEmail("");
    }, 700);
  }

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Party Booking" },
    { name: "Order Pickup" },
    { name: "Bulk Orders"},
    { name: "Cotton Candy"  },
  ];

  return (
    <footer className="footer" role="contentinfo" aria-label="Laughing Lollipop footer">
      <div className="footer-container">
        {/* BRAND (left) - includes address, phone, email, socials */}
        <div className="footer-section brand-section">
          <div className="brand-info">
            <img src={LollipopLogo} alt="Laughing Lollipop" className="footer-logo" />
            <div className="brand-text">
              <h3>Laughing Lollipop</h3>
              <p className="brand-sub">Sweet memories start here in Manteo, NC</p>
            </div>
          </div>

          <div className="contact-info compact">
            <div className="contact-item">
            
              <div>
                <strong>Address</strong>
                <p className="muted">101 Budleigh Street, Suite B, Manteo, NC 27954</p>
              </div>
            </div>

            <div className="contact-item">
             
              <div>
                <strong>Phone</strong>
                <a href="tel:+12524732579">252-473-2579</a>
              </div>
            </div>

            <div className="contact-item">
             
              <div>
                <strong>Email</strong>
                <a href="mailto:thelaughinglollipop@gmail.com">thelaughinglollipop@gmail.com</a>
              </div>
            </div>
          </div>

          <div className="social-links" aria-hidden="false">
            <a
              href="https://www.facebook.com/share/14LaAkqK43Z/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073C0 17.99 4.388 22.954 10.125 23.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-0.92c-0.9 0-1.18.925-1.18 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>

            <a
              href="https://www.instagram.com/laughinglollipop"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838A6.162 6.162 0 1 0 18.162 12 6.169 6.169 0 0 0 12 5.838zM18.406 4.594a1.44 1.44 0 1 1-1.44 1.44 1.441 1.441 0 0 1 1.44-1.44z"/></svg>
            </a>

            <a href="mailto:thelaughinglollipop@gmail.com" className="social-link" aria-label="Email">
              <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"/></svg>
            </a>
          </div>
        </div>

        {/* LINKS + SERVICES (center) */}
        <div className="footer-section links-section">
          <div className="links-column">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link, idx) => (
                <li key={idx}><a href={link.href}>{link.name}</a></li>
              ))}
            </ul>
          </div>

          <div className="links-column">
            <h4>Services</h4>
            <ul>
              {services.map((s, idx) => (
                <li key={idx}><a href={s.href}>{s.name}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* NEWSLETTER (right) */}
        <div className="footer-section newsletter-section">
          <h4>Stay in the loop</h4>
          <p className="muted">Get offers, party tips & new treats — straight to your inbox.</p>

          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <div className="input-group">
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setStatus(null); }}
                aria-label="Email address"
              />
              <button type="submit">Subscribe</button>
            </div>

            {status && (
              <div className={`form-status ${status.type}`} role="status" aria-live="polite">
                {status.text}
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-meta">
          <p>&copy; {new Date().getFullYear()} Laughing Lollipop. All rights reserved.</p>
          {/* <div className="footer-meta">
            <span>Made with ❤️ in Manteo, NC</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
