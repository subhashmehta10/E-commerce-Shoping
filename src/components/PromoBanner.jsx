import React from 'react';
import { Link } from 'react-router-dom';
import './PromoBanner.css';

const PromoBanner = () => {
    return (
        <section className="promo-section">
            <div className="promo-container">
                <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1500&q=80" alt="Promo" className="promo-img" />

                <div className="promo-content">
                    <span className="promo-tag">New Season</span>
                    <h2>The Autumn Collection 2026</h2>
                    <p>Embrace the season with our latest styles designed for comfort and elegance.</p>
                    <Link to="/collection/autumn-2026" className="promo-btn">Explore Now</Link>
                </div>
            </div>
        </section>
    );
};

export default PromoBanner;
