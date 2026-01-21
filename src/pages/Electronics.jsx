import React from 'react';
import './Category.css';

const electronicsData = [
    {
        id: 1,
        name: 'HP Pavilion 15',
        brand: 'HP',
        price: 55990,
        originalPrice: 70990,
        discount: '21% off',
        rating: 4.3,
        reviews: 2100,
        specs: ['Core i5 12th Gen', '16GB RAM', '512GB SSD'],
        img: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 2,
        name: 'Sony WH-1000XM5 Wireless Headphones',
        brand: 'Sony',
        price: 26990,
        originalPrice: 34990,
        discount: '22% off',
        rating: 4.8,
        reviews: 1500,
        specs: ['Noise Cancelling', '30hr Battery', 'Alexa Built-in'],
        img: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 3,
        name: 'Apple Watch Series 9',
        brand: 'Apple',
        price: 41900,
        originalPrice: 44900,
        discount: '6% off',
        rating: 4.7,
        reviews: 900,
        specs: ['GPS', 'Always-On Retina', 'Health Sensors'],
        img: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 4,
        name: 'Nikon Z50 Mirrorless Camera',
        brand: 'Nikon',
        price: 85990,
        originalPrice: 95990,
        discount: '10% off',
        rating: 4.6,
        reviews: 450,
        specs: ['20.9MP', '4K Video', 'Flip Screen'],
        img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 5,
        name: 'boAt Airdopes 141',
        brand: 'boAt',
        price: 1299,
        originalPrice: 4490,
        discount: '71% off',
        rating: 4.1,
        reviews: 15000,
        specs: ['42H Playback', 'ENx Tech', 'Low Latency'],
        img: 'https://images.unsplash.com/photo-1629367494173-c78a56567877?auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 6,
        name: 'Dell XPS 13',
        brand: 'Dell',
        price: 115990,
        originalPrice: 130990,
        discount: '11% off',
        rating: 4.7,
        reviews: 890,
        specs: ['Core i7', 'InfinityEdge', 'Lightweight'],
        img: 'https://images.unsplash.com/photo-1593642632823-8f78536788c6?auto=format&fit=crop&w=500&q=60'
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

const Electronics = () => {
    const [selectedBrands, setSelectedBrands] = React.useState([]);
    const [minPrice, setMinPrice] = React.useState(0);
    const [maxPrice, setMaxPrice] = React.useState(200000);
    const [sortBy, setSortBy] = React.useState('popularity');

    const handleCheckboxChange = (value, state, setState) => {
        if (state.includes(value)) {
            setState(state.filter(item => item !== value));
        } else {
            setState([...state, value]);
        }
    };

    const filteredData = electronicsData.filter(item => {
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
                        <button className="clear-btn" onClick={() => { setSelectedBrands([]); setMinPrice(0); setMaxPrice(200000); }}>Clear all</button>
                    </div>

                    <div className="filter-section static">
                        <div className="filter-category-crumb">
                            <span>Categories</span>
                            <div className="crumb-path">
                                <span className="light">Electronics</span>
                                <span className="bold">All Electronics</span>
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
                                    <option value="1000">1000</option>
                                    <option value="10000">10000</option>
                                </select>
                                <span>to</span>
                                <select className="price-select" value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))}>
                                    <option value="10000">10000</option>
                                    <option value="50000">50000</option>
                                    <option value="200000">200000+</option>
                                </select>
                            </div>
                        </div>
                    </FilterSection>

                    <FilterSection title="BRAND" defaultOpen={true}>
                        <div className="checkbox-group">
                            {['HP', 'Dell', 'Sony', 'Apple', 'boAt', 'Nikon'].map(brand => (
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
                            <h1 className="mobiles-title">Electronics</h1>
                            <p className="mobiles-subtitle">Top gadgets & accessories</p>
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
                                    <button className="wishlist-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                    </button>
                                </div>
                                <div className="mobile-info">
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

export default Electronics;
