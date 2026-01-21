import React from 'react';
import './Category.css';

const flashDealsData = [
    {
        id: 1,
        name: 'Wireless Headphones',
        brand: 'Sony',
        price: 2499,
        originalPrice: 4999,
        discount: '50% OFF',
        rating: 4.5,
        reviews: 2100,
        specs: ['Noise Cancelling', '20hr Battery', 'Bluetooth 5.0'],
        img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 2,
        name: 'Smart Watch Series 7',
        brand: 'Apple',
        price: 29999,
        originalPrice: 41900,
        discount: '28% OFF',
        rating: 4.8,
        reviews: 5800,
        specs: ['GPS', 'Always-On Retina display', 'Water resistant'],
        img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 3,
        name: 'Running Shoes',
        brand: 'Nike',
        price: 3499,
        originalPrice: 4999,
        discount: '30% OFF',
        rating: 4.6,
        reviews: 1250,
        specs: ['Breathable Mesh', 'Rubber Sole', 'Lightweight'],
        img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 4,
        name: 'Designer Backpack',
        brand: 'Wildcraft',
        price: 1299,
        originalPrice: 2499,
        discount: '48% OFF',
        rating: 4.3,
        reviews: 890,
        specs: ['Waterproof', 'Laptop Compartment', '30L Capacity'],
        img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 5,
        name: 'Gaming Mouse',
        brand: 'Logitech',
        price: 1499,
        originalPrice: 2999,
        discount: '50% OFF',
        rating: 4.7,
        reviews: 3400,
        specs: ['RGB Lighting', 'Programmable Buttons', 'High DPI'],
        img: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 6,
        name: '4K Smart TV',
        brand: 'Samsung',
        price: 35999,
        originalPrice: 55999,
        discount: '35% OFF',
        rating: 4.4,
        reviews: 1560,
        specs: ['55 Inch', 'Ultra HD', 'Smart Features'],
        img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 7,
        name: 'Bluetooth Speaker',
        brand: 'JBL',
        price: 2999,
        originalPrice: 4999,
        discount: '40% OFF',
        rating: 4.6,
        reviews: 2200,
        specs: ['Waterproof', '12hr Playtime', 'Deep Bass'],
        img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 8,
        name: 'Digital Camera',
        brand: 'Canon',
        price: 45000,
        originalPrice: 52000,
        discount: '13% OFF',
        rating: 4.8,
        reviews: 500,
        specs: ['24.1 MP', 'Full HD Video', 'Wi-Fi'],
        img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=500&q=60'
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

const FlashSaleDeals = () => {
    const [sortBy, setSortBy] = React.useState('popularity');

    // Duplicate data to simulate many products
    const allProducts = [...flashDealsData, ...flashDealsData, ...flashDealsData, ...flashDealsData].map((item, index) => ({
        ...item,
        id: index + 1
    }));

    const sortedData = [...allProducts].sort((a, b) => {
        if (sortBy === 'price_low') return a.price - b.price;
        if (sortBy === 'price_high') return b.price - a.price;
        if (sortBy === 'newest') return b.id - a.id;
        return 0; // popularity default order
    });

    return (
        <div className="mobiles-page">
            <div className="mobiles-container">
                <aside className="mobiles-sidebar">
                    <div className="sidebar-header">
                        <h2>Filters</h2>
                        <button className="clear-btn">Clear all</button>
                    </div>

                    <div className="filter-section static">
                        <div className="filter-category-crumb">
                            <span>Deals</span>
                            <div className="crumb-path">
                                <span className="bold">Flash Sales</span>
                            </div>
                        </div>
                    </div>

                    <FilterSection title="DISCOUNT" defaultOpen={true}>
                        <div className="checkbox-group">
                            {['50% or more', '40% or more', '30% or more', '20% or more'].map(item => (
                                <label key={item} className="checkbox-label">
                                    <input type="checkbox" />
                                    <span>{item}</span>
                                </label>
                            ))}
                        </div>
                    </FilterSection>
                    <FilterSection title="PRICE" defaultOpen={true}>
                        <div className="checkbox-group">
                            {['Under ₹1000', '₹1000 - ₹5000', '₹5000 - ₹10000', 'Over ₹10000'].map(item => (
                                <label key={item} className="checkbox-label">
                                    <input type="checkbox" />
                                    <span>{item}</span>
                                </label>
                            ))}
                        </div>
                    </FilterSection>
                </aside>

                <div className="mobiles-content">
                    <div className="mobiles-header">
                        <div>
                            <h1 className="mobiles-title">Flash Sale Deals</h1>
                            <p className="mobiles-subtitle">Limited time offers on top products</p>
                        </div>
                        <div className="mobiles-controls">
                            <span className="sort-label">Sort by:</span>
                            <div className="sort-options">
                                <button className={`sort-btn ${sortBy === 'popularity' ? 'active' : ''}`} onClick={() => setSortBy('popularity')}>Popularity</button>
                                <button className={`sort-btn ${sortBy === 'price_low' ? 'active' : ''}`} onClick={() => setSortBy('price_low')}>Price -- Low to High</button>
                                <button className={`sort-btn ${sortBy === 'price_high' ? 'active' : ''}`} onClick={() => setSortBy('price_high')}>Price -- High to Low</button>
                            </div>
                        </div>
                    </div>

                    <div className="mobiles-grid">
                        {sortedData.map((item) => (
                            <div className="mobile-card" key={item.id}>
                                <div className="mobile-img-container">
                                    <img src={item.img} alt={item.name} className="mobile-img" />
                                    <div className="flash-badge">FLASH DEAL</div>
                                    <button className="wishlist-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                    </button>
                                </div>
                                <div className="mobile-info">
                                    <span className="mobile-brand">{item.brand}</span>
                                    <h3 className="mobile-name">{item.name}</h3>
                                    <div className="mobile-rating">
                                        <span className="rating-badge green">{item.rating} ★</span>
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
                                                <span className="discount">{item.discount}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style jsx>{`
                .flash-badge {
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    background: #ff3f6c;
                    color: white;
                    padding: 4px 8px;
                    font-size: 10px;
                    font-weight: bold;
                    border-radius: 2px;
                    z-index: 10;
                }
                .rating-badge.green {
                    background-color: #388e3c;
                }
            `}</style>
        </div>
    );
};

export default FlashSaleDeals;
