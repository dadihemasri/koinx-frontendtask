import React, { useEffect } from 'react';
import './footer.css'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


function Footer() {
    useEffect(() => {
        const carousel = document.querySelector('.carousel');
        const prevButton = document.querySelector('.prev-button');
        const nextButton = document.querySelector('.next-button');
        const scrollAmount = 300; 

        const scrollCarousel = (scrollOffset) => {
            carousel.scrollBy({
                left: scrollOffset,
                behavior: 'smooth'
            });
        };

        const handlePrevButtonClick = () => {
            scrollCarousel(-scrollAmount);
        };

        const handleNextButtonClick = () => {
            scrollCarousel(scrollAmount);
        };

        prevButton.addEventListener('click', handlePrevButtonClick);
        nextButton.addEventListener('click', handleNextButtonClick);

        
        carousel.scrollLeft = scrollAmount * 2;

        return () => {
       
            prevButton.removeEventListener('click', handlePrevButtonClick);
            nextButton.removeEventListener('click', handleNextButtonClick);
        };
    }, []);



    return (
        <div className="footer">
            <h3 className="you-may-like-heading">You may like this</h3>
            <div className="carousel-container">
                <button className="nav-button prev-button">&#10094;</button>
                <div className="carousel">
                    <div className="carousel-item">
                        <div className="crypto-item">
                         
                            <span>Bitcoin</span>
                        </div>
                        <div className="price-info">
                            <span>+$500</span>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="crypto-item">
                           
                            <span>Ethereum</span>
                        </div>
                        <div className="price-info">
                            <span>+$200</span>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </div>
                        
                    </div>
                    <div className="carousel-item">
                        <div className="crypto-item">
                         
                            <span>Bitcoin</span>
                        </div>
                        <div className="price-info">
                            <span>+$500</span>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="crypto-item">
                         
                            <span>Bitcoin</span>
                        </div>
                        <div className="price-info">
                            <span>+$500</span>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="crypto-item">
                         
                            <span>Bitcoin</span>
                        </div>
                        <div className="price-info">
                            <span>+$500</span>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="crypto-item">
                         
                            <span>Bitcoin</span>
                        </div>
                        <div className="price-info">
                            <span>+$500</span>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="crypto-item">
                         
                            <span>Bitcoin</span>
                        </div>
                        <div className="price-info">
                            <span>+$500</span>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </div>
                    </div>
                </div>
                <button className="nav-button next-button">&#10095;</button>
            </div>
            <h3 className="you-may-like-heading">Trending Coins</h3>
            <div className="carousel-container">
                <button className="nav-button prev-button">&#10094;</button>
                <div className="carousel">
                    <div className="carousel-item">
                        <div className="crypto-item">
                         
                            <span>Bitcoin</span>
                        </div>
                        <div className="price-info">
                            <span>+$500</span>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="crypto-item">
                           
                            <span>Ethereum</span>
                        </div>
                        <div className="price-info">
                            <span>+$200</span>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </div>
                        
                    </div>
                    <div className="carousel-item">
                        <div className="crypto-item">
                         
                            <span>Bitcoin</span>
                        </div>
                        <div className="price-info">
                            <span>+$500</span>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="crypto-item">
                         
                            <span>Bitcoin</span>
                        </div>
                        <div className="price-info">
                            <span>+$500</span>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="crypto-item">
                         
                            <span>Bitcoin</span>
                        </div>
                        <div className="price-info">
                            <span>+$500</span>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="crypto-item">
                         
                            <span>Bitcoin</span>
                        </div>
                        <div className="price-info">
                            <span>+$500</span>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="crypto-item">
                         
                            <span>Bitcoin</span>
                        </div>
                        <div className="price-info">
                            <span>+$500</span>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </div>
                    </div>
                </div>
                <button className="nav-button next-button">&#10095;</button>
            </div>
        </div>
    );
}

export default Footer;

