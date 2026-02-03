
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CategoryRow.css';

const CategoryRow = ({ title, items, viewAllLink = '/shop' }) => {
    const navigate = useNavigate();

    // Helper to extract the price or discount part for the badge if needed
    // or we just show the whole offer text in the badge or below it

    // Show only first 10 items on home, user has to click view all for more
    const displayItems = items.slice(0, 10);

    return (
        <div className="category-row-section">
            <div className="category-row-header">
                <h3>{title}</h3>
                <button className="view-all-btn" onClick={() => navigate(viewAllLink)}>
                    View All →
                </button>
            </div>

            <div className="category-grid">
                {displayItems.map((item, index) => (
                    <div
                        key={index}
                        className="category-card"
                        onClick={() => navigate(`/product/${item.id || encodeURIComponent(item.title)}`)}
                    >
                        <div className="category-image-container">
                            <span className="category-offer-badge">{item.offer}</span>
                            <img src={item.image} alt={item.title} className="category-image" />
                        </div>
                        <div className="category-details">
                            <div className="category-title">{item.title}</div>
                            {/* We can reformat the offer text if needed, but for now displaying it as highlight */}
                            <div className="category-price-label">Just for you</div>
                            {/* Extracting price number if possible, or just restating offer */}
                            {/* Heuristic: if offer contains 'From', display it nicely */}
                            <div className="category-main-price">
                                {item.offer.replace('From ', '').replace('Min ', '').replace('Up to ', 'Under ')}
                                {/* Just a visual tweak, or we can just render item.offer directly */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryRow;
