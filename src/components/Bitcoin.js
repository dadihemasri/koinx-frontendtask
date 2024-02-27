import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import './bitcoin.css'; // Import the CSS file for styling

const BitcoinPrice = () => {
  const [bitcoinData, setBitcoinData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch Bitcoin price');
        }

        const data = await response.json();
        setBitcoinData(data.bitcoin);
      } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBitcoinPrice();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!bitcoinData) {
    return <p>Error fetching Bitcoin price</p>;
  }

  const { usd, inr, usd_24h_change } = bitcoinData;

  const calculateArrowIcon = () => {
    if (usd_24h_change > 0) {
      return (
        <span className="price-change positive">
          <FontAwesomeIcon icon={faArrowUp} /> {usd_24h_change.toFixed(2)}%
        </span>
      );
    } else if (usd_24h_change < 0) {
      return (
        <span className="price-change negative">
          <FontAwesomeIcon icon={faArrowDown} /> {usd_24h_change.toFixed(2)}%
        </span>
      );
    }
    // No change (usd_24h_change === 0)
    return (
      <span className="price-change no-change">
        No Change
      </span>
    );
  };

  return (
    <div className="bitcoin-price">
      <p className="usd-price">
        ${usd.toFixed(2)} {calculateArrowIcon()}{' '}
        <span className="change-indicator">(24 H)</span>
      </p>
      <p className="inr-price">₹ {inr.toFixed(2)}</p>
    </div>
  );
};

export default BitcoinPrice;
