// TextHeading.js

import React from 'react';
import './heading.css'; // Import CSS file for styling

function TextHeading() {
  return (
    <div className="text-heading">
      <h1>
        <span className="crypto-text">Cryptocurrencies</span> <span className="arrow">&raquo;</span> 
        <span className="bitcoin-text">Bitcoin</span>
      </h1>
      
    </div>
  );
}

export default TextHeading;
