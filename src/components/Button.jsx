import React from 'react';
import './Button.css'; // Import the CSS file

export const Button = ({ link, icon: Icon, altText, availableOnText, storeNameText }) => {
  return (
    <div className="button-container">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="custom-button">
          <Icon className="button-icon" aria-label={altText} />
          <div className="button-text">
            <span className="available-on">{availableOnText}</span>
            <span className="play-store">{storeNameText}</span>
          </div>
        </button>
      </a>
    </div>
  );
};


