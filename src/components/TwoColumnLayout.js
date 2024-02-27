

import React from 'react';
import './TwoColumnLayout.css'; // Import the CSS file for styling
import bitcoinLogo from './bitcoin-logo.png'; // Import the Bitcoin logo image
import koinLogo from './koin-logo.png'; // Import the Koin logo image
import TradingViewWidget from './TradingViewWidget';
import Polygon from './Polygon.png';
import BitcoinPrice from './Bitcoin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function TwoColumnLayout() {
  return (
    <div className="two-column-layout">
      <div className="column-one">
        <div className="column-one-row-one">
          <div className="logo-heading">
            <img src={bitcoinLogo} alt="Bitcoin Logo" className="bitcoin-logo" />
            <span className="b-text">Bitcoin </span>
            <span className="btc">BTC</span>
          </div>
          <p className="rank-text">Rank#1</p>
        </div>
        <div className="column-one-row-2">
          <BitcoinPrice/>
          <TradingViewWidget widgetType="chart" />
        </div>
      </div>
      <div className="column-two">
        <div className="column-two-row-one">
          <div classname="container-b">
        <div className="section1">
    <h2>Get Started with KoinX for FREE</h2>
    <p>With our range of features that you can equip for free,
KoinX allows you to be more educated and aware of your tax reports.</p>
  </div>
  <div className="section2">
  <img src={koinLogo} alt="koinlogo" className="koinlogo" />
  </div>
  <div className="section3">
    <button>Get Started for Free <FontAwesomeIcon icon={faArrowRight} /></button>
  </div>
  </div>
        </div>
        <div className="column-two-row-two">

         <h2>Trending Coins (24h)</h2>
  <div className="activity-row">
    <div className="activity-section">
     
      <span>Name 1</span>
    </div>
    <div className="activity-section-1">
    <img src={Polygon} alt="Logo 1" />
      <span>+5%</span>
    </div>
  </div>
  <div className="activity-row">
    <div className="activity-section">
     
      <span>etherium</span>
    </div>
    <div className="activity-section-1">
    <img src={Polygon} alt="Logo 1" />
      <span>+5%</span>
    </div>
  </div>
  <div className="activity-row">
    <div className="activity-section">
     
      <span>bitcoin</span>
    </div>
    <div className="activity-section-1">
    <img src={Polygon} alt="Logo 1" />
      <span>+5%</span>
    </div>
  </div>



        </div>
      </div>
    </div>
  );
}

export default TwoColumnLayout;
