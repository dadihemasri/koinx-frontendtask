import React, { useState, useEffect } from 'react'
import './TwoColumnLayout.css'; 
import bitcoinLogo from './bitcoin-logo.png'; 
import koinLogo from './koin-logo.png'; 
import TradingViewWidget from './TradingViewWidget';
import Polygon from './Polygon.png';
import BitcoinPrice from './Bitcoin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function TwoColumnLayout() {
  const [trendingCoins, setTrendingCoins] = useState([]);
  
    useEffect(() => {
      const fetchTrendingCoins = async () => {
        try {
          const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
          const data = await response.json();

          const top3TrendingCoins = data.coins.slice(0, 3);
          setTrendingCoins(top3TrendingCoins);
        } catch (error) {
          console.error('Error fetching trending coins:', error);
        }
      };
  
      fetchTrendingCoins();
    }, []);
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
        {trendingCoins.map((coin, index) => (
          <div key={index} className="activity-row">
            <div className="activity-section">
              <img src={coin.item.thumb}/>
              <span>{coin.item.name}</span>
            </div>
            <div className="activity-section-1">
            <span>
                  {coin.item.price_btc
                    ? coin.item.price_btc.toFixed(10)
                    : 'N/A'}
                  %
                </span>
            </div>
          </div>
          ))}
          </div>
      </div>
    </div>
  );
}

export default TwoColumnLayout;
