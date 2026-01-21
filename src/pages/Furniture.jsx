import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import './Category.css';

const furnitureData = [
    {
        id: 1,
        name: 'Godrej Interio 3 Seater Sofa',
        brand: 'Godrej',
        price: 25990,
        originalPrice: 35000,
        discount: '25% off',
        rating: 4.5,
        reviews: 450,
        specs: ['Fabric', '3 Seater', 'Grey'],
        img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 2,
        name: 'Wakefit Orthopedic Queen Size Mattress',
        brand: 'Wakefit',
        price: 8500,
        originalPrice: 12000,
        discount: '29% off',
        rating: 4.7,
        reviews: 8000,
        specs: ['Memory Foam', 'Queen Size', 'White'],
        img: 'https://images.unsplash.com/photo-1505693416388-b0346efee74f?auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 3,
        name: 'Durian Leatherette Recliner',
        brand: 'Durian',
        price: 18990,
        originalPrice: 28990,
        discount: '34% off',
        rating: 4.4,
        reviews: 320,
        specs: ['Brown', 'Reclining', 'Leatherette'],
        img: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 4,
        name: 'Nilkamal Study Table',
        brand: 'Nilkamal',
        price: 3500,
        originalPrice: 4999,
        discount: '30% off',
        rating: 4.2,
        reviews: 1200,
        specs: ['Engineered Wood', 'Storage', 'Walnut'],
        img: 'https://images.unsplash.com/photo-1519222970733-f546218fa6d7?auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 5,
        name: 'Urban Ladder Sheesham Wood Dining Table',
        brand: 'Urban Ladder',
        price: 15999,
        originalPrice: 22999,
        discount: '30% off',
        rating: 4.6,
        reviews: 670,
        specs: ['Solid Wood', '4 Seater', 'Teak Finish'],
        img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 5,
        name: 'Urban Ladder Sheesham Wood Dining Table',
        brand: 'Urban Ladder',
        price: 15999,
        originalPrice: 22999,
        discount: '30% off',
        rating: 4.6,
        reviews: 670,
        specs: ['Solid Wood', '4 Seater', 'Teak Finish'],
        img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 5,
        name: 'Urban Ladder Sheesham Wood Dining Table',
        brand: 'Urban Ladder',
        price: 15999,
        originalPrice: 22999,
        discount: '30% off',
        rating: 4.6,
        reviews: 670,
        specs: ['Solid Wood', '4 Seater', 'Teak Finish'],
        img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=500&q=60'
    }
];

const FilterSection = ({ title, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = React.useState(defaultOpen);
    return (
        <div className="filter-section">
            <div className="filter-header" onClick={() => setIsOpen(!isOpen)}>
                <span>{title}</span>
                <svg
                    className={`filter-arrow ${isOpen ? 'open' : ''}`}
                    width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </div>
            {isOpen && <div className="filter-content">{children}</div>}
        </div>
    );
};

const Furniture = () => {
    const navigate = useNavigate();
    const { addToWishlist, removeFromWishlist, isInWishlist } = useShop();
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(50000);
    const [sortBy, setSortBy] = useState('popularity');

    const handleCheckboxChange = (value, state, setState) => {
        if (state.includes(value)) {
            setState(state.filter(item => item !== value));
        } else {
            setState([...state, value]);
        }
    };

    const filteredData = furnitureData.filter(item => {
        if (selectedBrands.length > 0 && !selectedBrands.includes(item.brand)) return false;
        if (item.price < minPrice || item.price > maxPrice) return false;
        return true;
    });

    const sortedData = [...filteredData].sort((a, b) => {
        if (sortBy === 'price_low') return a.price - b.price;
        if (sortBy === 'price_high') return b.price - a.price;
        if (sortBy === 'newest') return b.id - a.id;
        return 0;
    });

    return (
        <div className="mobiles-page">
            <div className="mobiles-container">
                <aside className="mobiles-sidebar">
                    <div className="sidebar-header">
                        <h2>Filters</h2>
                        <button className="clear-btn" onClick={() => { setSelectedBrands([]); setMinPrice(0); setMaxPrice(50000); }}>Clear all</button>
                    </div>

                    <div className="filter-section static">
                        <div className="filter-category-crumb">
                            <span>Categories</span>
                            <div className="crumb-path">
                                <span className="light">Home & Furniture</span>
                                <span className="bold">All Furniture</span>
                            </div>
                        </div>
                    </div>

                    <FilterSection title="PRICE" defaultOpen={true}>
                        <div className="price-slider-box">
                            <div className="slider-track">
                                <div className="slider-range"></div>
                                <div className="slider-thumb left"></div>
                                <div className="slider-thumb right"></div>
                            </div>
                            <div className="price-inputs">
                                <select className="price-select" value={minPrice} onChange={e => setMinPrice(Number(e.target.value))}>
                                    <option value="0">Min</option>
                                    <option value="5000">5000</option>
                                    <option value="10000">10000</option>
                                </select>
                                <span>to</span>
                                <select className="price-select" value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))}>
                                    <option value="10000">10000</option>
                                    <option value="20000">20000</option>
                                    <option value="50000">50000+</option>
                                </select>
                            </div>
                        </div>
                    </FilterSection>

                    <FilterSection title="BRAND" defaultOpen={true}>
                        <div className="checkbox-group">
                            {['Godrej', 'Wakefit', 'Durian', 'Nilkamal', 'Urban Ladder'].map(brand => (
                                <label key={brand} className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        checked={selectedBrands.includes(brand)}
                                        onChange={() => handleCheckboxChange(brand, selectedBrands, setSelectedBrands)}
                                    />
                                    <span>{brand}</span>
                                </label>
                            ))}
                        </div>
                    </FilterSection>

                    <div className="filter-section static">
                        <label className="checkbox-label assured-label hover-effect-allowed">
                            <input type="checkbox" />
                            <div className="nova-verified-badge">
                                <span className="nova-text">ShopNova</span>
                                <span className="verified-text">Verified</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="verified-icon">
                                    <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 9z"></path>
                                </svg>
                            </div>
                        </label>
                    </div>
                </aside>

                <div className="mobiles-content">
                    <div className="mobiles-header">
                        <div>
                            <h1 className="mobiles-title">Furniture</h1>
                            <p className="mobiles-subtitle">Comfort for your home</p>
                        </div>
                        <div className="mobiles-controls">
                            <span className="sort-label">Sort by:</span>
                            <div className="sort-options">
                                <button className={`sort-btn ${sortBy === 'popularity' ? 'active' : ''}`} onClick={() => setSortBy('popularity')}>Popularity</button>
                                <button className={`sort-btn ${sortBy === 'price_low' ? 'active' : ''}`} onClick={() => setSortBy('price_low')}>Price -- Low to High</button>
                                <button className={`sort-btn ${sortBy === 'price_high' ? 'active' : ''}`} onClick={() => setSortBy('price_high')}>Price -- High to Low</button>
                                <button className={`sort-btn ${sortBy === 'newest' ? 'active' : ''}`} onClick={() => setSortBy('newest')}>Newest First</button>
                            </div>
                        </div>
                    </div>

                    <div className="mobiles-grid">
                        {sortedData.map((item) => (
                            <div className="mobile-card" key={item.id}>
                                <div className="mobile-img-container">
                                    <img src={item.img} alt={item.name} className="mobile-img" />
                                    <button
                                        className="wishlist-icon"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            isInWishlist(item.id) ? removeFromWishlist(item.id) : addToWishlist(item);
                                        }}
                                    >
                                        <svg
                                            width="20" height="20" viewBox="0 0 24 24"
                                            fill={isInWishlist(item.id) ? "#e17055" : "none"}
                                            stroke={isInWishlist(item.id) ? "#e17055" : "currentColor"}
                                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        >
                                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div className="mobile-info" onClick={() => navigate(`/product/${item.id}`)} style={{ cursor: 'pointer' }}>
                                    <span className="mobile-brand">{item.brand}</span>
                                    <h3 className="mobile-name">{item.name}</h3>
                                    <div className="mobile-rating">
                                        <span className="rating-badge">{item.rating} ★</span>
                                        <span className="rating-count">({item.reviews})</span>
                                    </div>
                                    <div className="mobile-specs">
                                        <ul>
                                            {item.specs.map((spec, index) => (
                                                <li key={index} className="spec-tag">{spec}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mobile-price-row">
                                        <div className="price-container">
                                            <span className="current-price">₹{item.price.toLocaleString()}</span>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <span className="original-price">₹{item.originalPrice.toLocaleString()}</span>
                                                <span className="discount"> {item.discount}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Furniture;
