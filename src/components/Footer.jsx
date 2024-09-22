import React from 'react';
import './Footer.css'; // Import the CSS file
import { FaFacebook, FaTwitter, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo-section">
          <img src="/images/nagarikapp-logo.png" alt="Nagarik App Logo" className="footer-logo" />
          <p>Follow Us</p>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a> {/* Use React icons  */}
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>
        </div>

        <div className="footer-features">
          <h3>OUR FEATURES</h3>
          <ul>
            <li><a href="#">Services</a></li>
            <li><a href="#">News</a></li>
            <li><Link to="/faqs">FAQs</Link></li>
            <li><a href="#">Privacy & Policy</a></li>
          </ul>
        </div>

        <div className="footer-address">
          <h3>OUR ADDRESS</h3>
          <p><FaMapMarkerAlt /> Singha Durbar, Kathmandu</p> {/* Replace Font Awesome icon classes with react-icons */}
          <p><FaEnvelope /> info@nagarikapp.gov.np</p>
          <p><FaPhone /> Toll Free No: 1101</p>
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        <p>Copyrights © 2024. All rights reserved by Nagarik App</p>
      </div>
    </footer>
  );
}
