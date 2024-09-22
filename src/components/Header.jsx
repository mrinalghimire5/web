import React from 'react';
import { IoGlobeSharp } from "react-icons/io5";
import './Header.css'; // Import your CSS file for the header
import { Link } from 'react-router-dom';
export function Header() {
    return (
        <header>
            
    <div className="logo-section">
        <img src="/images/nagarikapp-logo.png" alt="Logo" className="logo" />
        <span className="site-name">Nagarik App
        </span>
    </div>
    <nav>
        <ul className="nav-links">
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="vices">Services</Link></li>
            <li><Link to ="#news">News</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
            <li><Link to="#privacy">Privacy & Policy</Link></li>
            <li><Link to="#contact">Contact Us</Link></li>
        </ul>
    </nav>
    <div className="navbar-right">
      <a href="https://web.nagarikapp.gov.np/citizen/login" className="web-app-button">
        <IoGlobeSharp className="icon" aria-label="Web Icon" /> Web App
      </a>
    </div>
</header>

    );
};

