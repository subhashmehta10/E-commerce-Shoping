import React from 'react';
import { Link } from 'react-router-dom';
import './Mobiles.css';

const mobilesData = [
    {
        id: 1,
        name: 'iPhone 15 Pro Max',
        brand: 'Apple',
        price: 159900,
        originalPrice: 169900,
        discount: '6% off',
        rating: 4.8,
        reviews: 2450,
        specs: ['256GB', 'Titanium', 'A17 Pro'],
        img: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 2,
        name: 'Samsung Galaxy S24 Ultra',
        brand: 'Samsung',
        price: 129999,
        originalPrice: 144999,
        discount: '10% off',
        rating: 4.7,
        reviews: 1890,
        specs: ['12GB RAM', 'AI Camera', 'S-Pen'],
        img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 3,
        name: 'Google Pixel 8 Pro',
        brand: 'Google',
        price: 98999,
        originalPrice: 106999,
        discount: '7% off',
        rating: 4.6,
        reviews: 1200,
        specs: ['Tensor G3', 'Best Take', 'Actua Display'],
        img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff23?auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 4,
        name: 'OnePlus 12',
        brand: 'OnePlus',
        price: 64999,
        originalPrice: 69999,
        discount: '7% off',
        rating: 4.5,
        reviews: 3500,
        specs: ['Snapdragon 8 Gen 3', '100W Charge'],
        img: 'https://images.unsplash.com/photo-1678911820864-e2c7976d3d20?auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 5,
        name: 'Nothing Phone (2)',
        brand: 'Nothing',
        price: 39999,
        originalPrice: 49999,
        discount: '20% off',
        rating: 4.4,
        reviews: 980,
        specs: ['Glyph Interface', 'Nothing OS 2.0'],
        img: 'https://images.unsplash.com/photo-1694503716613-2d5eb102d76f?auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 6,
        name: 'Xiaomi 14',
        brand: 'Xiaomi',
        price: 69999,
        originalPrice: 79999,
        discount: '12% off',
        rating: 4.5,
        reviews: 560,
        specs: ['Leica Optics', 'HyperOS'],
        img: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 7,
        name: 'Realme 12 Pro+',
        brand: 'Realme',
        price: 29999,
        originalPrice: 34999,
        discount: '15% off',
        rating: 4.3,
        reviews: 4200,
        specs: ['Periscope Camera', 'Luxury Design'],
        img: 'https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 8,
        name: 'Vivo X100',
        brand: 'Vivo',
        price: 63999,
        originalPrice: 69999,
        discount: '9% off',
        rating: 4.6,
        reviews: 890,
        specs: ['Zeiss Camera', 'Dimensity 9300'],
        img: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 9,
        name: 'Oppo Reno 11 Pro',
        brand: 'Oppo',
        price: 39999,
        originalPrice: 44999,
        discount: '11% off',
        rating: 4.2,
        reviews: 1500,
        specs: ['Portrait Expert', '80W Charging'],
        img: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 10,
        name: 'Samsung Galaxy A55',
        brand: 'Samsung',
        price: 38999,
        originalPrice: 42999,
        discount: '10% off',
        rating: 4.4,
        reviews: 2100,
        specs: ['50MP OIS', 'Glass Finish'],
        img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 11,
        name: 'Moto Edge 50 Pro',
        brand: 'Motorola',
        price: 31999,
        originalPrice: 35999,
        discount: '12% off',
        rating: 4.5,
        reviews: 1800,
        specs: ['Pantone Curated', '125W Charge'],
        img: 'https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 12,
        name: 'Poco X6 Pro',
        brand: 'Poco',
        price: 26999,
        originalPrice: 29999,
        discount: '10% off',
        rating: 4.6,
        reviews: 5600,
        specs: ['Gaming Beast', 'Dimensity 8300'],
        img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff23?auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 13,
        name: 'iPhone 13',
        brand: 'Apple',
        price: 48999,
        originalPrice: 59900,
        discount: '18% off',
        rating: 4.8,
        reviews: 15000,
        specs: ['A15 Bionic', 'Best Seller'],
        img: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 14,
        name: 'Redmi Note 13 Pro',
        brand: 'Xiaomi',
        price: 25999,
        originalPrice: 28999,
        discount: '10% off',
        rating: 4.2,
        reviews: 3400,
        specs: ['200MP Camera', 'Top Value'],
        img: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 15,
        name: 'Lava Agni 2',
        brand: 'Lava',
        price: 19999,
        originalPrice: 23999,
        discount: '17% off',
        rating: 4.3,
        reviews: 2200,
        specs: ['Curved Display', 'Indian Brand'],
        img: 'https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 16,
        name: 'Samsung Galaxy Z Flip 5',
        brand: 'Samsung',
        price: 99999,
        originalPrice: 109999,
        discount: '9% off',
        rating: 4.6,
        reviews: 800,
        specs: ['Foldable', 'Latest Tech'],
        img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=500&q=60'
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

const Mobiles = () => {
    // State for filters
    const [selectedBrands, setSelectedBrands] = React.useState([]);
    const [selectedRatings, setSelectedRatings] = React.useState(0);
    const [minPrice, setMinPrice] = React.useState(0);
    const [maxPrice, setMaxPrice] = React.useState(300000); // High default max
    const [selectedRam, setSelectedRam] = React.useState([]);
    const [selectedStorage, setSelectedStorage] = React.useState([]);
    const [sortBy, setSortBy] = React.useState('popularity');

    // Handler for checkboxes
    const handleCheckboxChange = (value, state, setState) => {
        if (state.includes(value)) {
            setState(state.filter(item => item !== value));
        } else {
            setState([...state, value]);
        }
    };

    // Filter Logic
    const filteredMobiles = mobilesData.filter(mobile => {
        // Brand Filter
        if (selectedBrands.length > 0 && !selectedBrands.includes(mobile.brand)) return false;

        // Rating Filter
        if (mobile.rating < selectedRatings) return false;

        // Price Filter
        if (mobile.price < minPrice || mobile.price > maxPrice) return false;

        // RAM Filter (Check if specs array contains the RAM string)
        if (selectedRam.length > 0) {
            const hasRam = selectedRam.some(ram => mobile.specs.some(spec => spec.includes(ram) || spec.includes(ram.replace(' ', ''))));
            // Note: simple text match. Real apps should have structured data. 
            // Since data is vague, we might skip strict checking or try our best.
            // Let's assume for now user selects '12 GB' and we check if '12GB' is in specs.
            // Most specs in current data don't actually list RAM explicitly in a uniform way for all items.
            // We will do a generic check: check if any spec string contains the numeric part of the selected RAM.
            const mobileSpecsString = mobile.specs.join(' ').toLowerCase();
            const hasMatchingRam = selectedRam.some(ram => mobileSpecsString.includes(ram.toLowerCase().replace(' gb', 'gb')));
            if (!hasMatchingRam) return false;
        }

        // Storage Filter
        if (selectedStorage.length > 0) {
            const mobileSpecsString = mobile.specs.join(' ').toLowerCase();
            const hasMatchingStorage = selectedStorage.some(storage => mobileSpecsString.includes(storage.toLowerCase().replace(' gb', 'gb')));
            if (!hasMatchingStorage) return false;
        }

        return true;
    });

    // Sorting Logic
    const sortedMobiles = [...filteredMobiles].sort((a, b) => {
        if (sortBy === 'price_low') return a.price - b.price;
        if (sortBy === 'price_high') return b.price - a.price;
        if (sortBy === 'newest') return b.id - a.id;
        return 0; // Popularity (default order)
    });

    const clearFilters = () => {
        setSelectedBrands([]);
        setSelectedRatings(0);
        setMinPrice(0);
        setMaxPrice(300000);
        setSelectedRam([]);
        setSelectedStorage([]);
        setSortBy('popularity');
    };

    return (
        <div className="mobiles-page">
            <div className="mobiles-container">
                {/* Sidebar Filters */}
                <aside className="mobiles-sidebar">
                    <div className="sidebar-header">
                        <h2>Filters</h2>
                        <button className="clear-btn" onClick={clearFilters}>Clear all</button>
                    </div>

                    <div className="filter-section static">
                        <div className="filter-category-crumb">
                            <span>Categories</span>
                            <div className="crumb-path">
                                <span className="light">Mobiles & Accessories</span>
                                <span className="bold">Mobiles</span>
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
                                <select
                                    className="price-select"
                                    value={minPrice}
                                    onChange={(e) => setMinPrice(Number(e.target.value))}
                                >
                                    <option value="0">Min</option>
                                    <option value="10000">10000</option>
                                    <option value="20000">20000</option>
                                    <option value="50000">50000</option>
                                </select>
                                <span>to</span>
                                <select
                                    className="price-select"
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                                >
                                    <option value="20000">20000</option>
                                    <option value="50000">50000</option>
                                    <option value="300000">30000+</option>
                                </select>
                            </div>
                        </div>
                    </FilterSection>

                    <FilterSection title="BRAND" defaultOpen={true}>
                        <div className="checkbox-group">
                            {['Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi', 'Realme', 'Vivo', 'Oppo'].map(brand => (
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

                    <FilterSection title="CUSTOMER RATINGS">
                        <div className="checkbox-group">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    checked={selectedRatings === 4}
                                    onChange={() => setSelectedRatings(selectedRatings === 4 ? 0 : 4)}
                                />
                                <span>4★ & above</span>
                            </label>
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    checked={selectedRatings === 3}
                                    onChange={() => setSelectedRatings(selectedRatings === 3 ? 0 : 3)}
                                />
                                <span>3★ & above</span>
                            </label>
                        </div>
                    </FilterSection>

                    <FilterSection title="RAM">
                        <div className="checkbox-group">
                            {['4 GB', '6 GB', '8 GB', '12 GB', '16 GB'].map(ram => (
                                <label key={ram} className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        checked={selectedRam.includes(ram)}
                                        onChange={() => handleCheckboxChange(ram, selectedRam, setSelectedRam)}
                                    />
                                    <span>{ram}</span>
                                </label>
                            ))}
                        </div>
                    </FilterSection>

                    <FilterSection title="INTERNAL STORAGE">
                        <div className="checkbox-group">
                            {['64 GB', '128 GB', '256 GB', '512 GB', '1 TB'].map(storage => (
                                <label key={storage} className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        checked={selectedStorage.includes(storage)}
                                        onChange={() => handleCheckboxChange(storage, selectedStorage, setSelectedStorage)}
                                    />
                                    <span>{storage}</span>
                                </label>
                            ))}
                        </div>
                    </FilterSection>

                    <div className="filter-section static">
                        <label className="checkbox-label assured-label hover-effect-allowed">
                            <input type="checkbox" /> {/* Assured logic can be implemented similarly if data allows */}
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

                {/* Main Content */}
                <div className="mobiles-content">
                    <div className="mobiles-header">
                        <div>
                            <h1 className="mobiles-title">Mobiles</h1>
                            <p className="mobiles-subtitle">
                                {filteredMobiles.length > 0
                                    ? `Showing ${filteredMobiles.length} results`
                                    : 'No products found matching your filters'}
                            </p>
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
                        {sortedMobiles.map((mobile) => (
                            <div className="mobile-card" key={mobile.id}>
                                <div className="mobile-img-container">
                                    <img src={mobile.img} alt={mobile.name} className="mobile-img" />
                                    <button className="wishlist-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                    </button>
                                </div>
                                <div className="mobile-info">
                                    <span className="mobile-brand">{mobile.brand}</span>
                                    <h3 className="mobile-name">{mobile.name}</h3>
                                    <div className="mobile-rating">
                                        <span className="rating-badge">{mobile.rating} ★</span>
                                        <span className="rating-count">({mobile.reviews})</span>
                                    </div>
                                    <div className="mobile-specs">
                                        <ul>
                                            {mobile.specs.map((spec, index) => (
                                                <li key={index} className="spec-tag">{spec}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mobile-price-row">
                                        <div className="price-container">
                                            <span className="current-price">₹{mobile.price.toLocaleString()}</span>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <span className="original-price">₹{mobile.originalPrice.toLocaleString()}</span>
                                                <span className="discount"> {mobile.discount}</span>
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

export default Mobiles;
