import React, { useState, useEffect } from 'react';
import './footer.css'; // Import the CSS file for styling

const FooterCarousel = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollAmount = 300; // Adjust this to the width of a single carousel item

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
        const data = await response.json();
        setTrendingCoins(data.coins);
      } catch (error) {
        console.error('Error fetching trending coins:', error);
      }
    };

    fetchTrendingCoins();
  }, []); // Runs once on component mount

  const handlePrevButtonClick = () => {
    setScrollPosition((prev) => Math.max(0, prev - scrollAmount));
  };

  const handleNextButtonClick = () => {
    setScrollPosition((prev) => prev + scrollAmount);
  };

  return (
    <div>
      <div className="footer-carousel">
        <h3 className="you-may-like-heading">You may like this</h3>
        <button className="nav-button prev-button" onClick={handlePrevButtonClick}>
          &#10094;
        </button>
        <div className="carousel-container" style={{ transform: `translateX(-${scrollPosition}px)` }}>
          {trendingCoins.map((coin) => (
            <div className="carousel-item" key={coin.item.id}>
              <div className="crypto-item">
                <img src={coin.item.thumb} alt={`${coin.item.name} Logo`} />
                <span>{coin.item.symbol}</span>
              </div>
              <div className="price-info">
                <span>{coin.item.data.price}</span>
                <img src={coin.item.sparkline} alt={`${coin.item.name} Sparkline`} />
              </div>
            </div>
          ))}
        </div>
        <button className="nav-button next-button" onClick={handleNextButtonClick}>
          &#10095;
        </button>
      </div>

      {/* Repeat the same section for another set of trending coins */}
      <div className="footer-carousel">
        <h3 className="you-may-like-heading">Trending Coins</h3>
        <button className="nav-button prev-button" onClick={handlePrevButtonClick}>
          &#10094;
        </button>
        <div className="carousel-container" style={{ transform: `translateX(-${scrollPosition}px)` }}>
          {trendingCoins.map((coin) => (
            <div className="carousel-item" key={coin.item.id}>
              <div className="crypto-item">
                <img src={coin.item.thumb} alt={`${coin.item.name} Logo`} />
                <span>{coin.item.symbol}</span>
              </div>
              <div className="price-info">
                <span>{coin.item.data.price}</span>
                <img src={coin.item.sparkline} alt={`${coin.item.name} Sparkline`} />
              </div>
            </div>
          ))}
        </div>
        <button className="nav-button next-button" onClick={handleNextButtonClick}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default FooterCarousel;
