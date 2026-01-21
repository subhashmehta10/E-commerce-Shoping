import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import './Category.css';

// ... (keep shopProducts object locally or move outside if unmodified)

const shopProducts = [
    { id: 1, name: 'Premium Leather Jacket', brand: 'Zara', price: 4500, originalPrice: 6000, discount: '25% off', rating: 4.5, reviews: 120, img: 'https://images.unsplash.com/photo-1551028919-ac7efe5fab2c?auto=format&fit=crop&w=500&q=60', category: 'Fashion' },
    { id: 2, name: 'Sony WH-1000XM4', brand: 'Sony', price: 24990, originalPrice: 29990, discount: '16% off', rating: 4.8, reviews: 3400, img: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=60', category: 'Electronics' },
    { id: 3, name: 'MacBook Air M2', brand: 'Apple', price: 114900, originalPrice: 119900, discount: '4% off', rating: 4.9, reviews: 890, img: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=500&q=60', category: 'Electronics' },
    { id: 4, name: 'Organic Face Serum', brand: 'Minimalist', price: 599, originalPrice: 699, discount: '14% off', rating: 4.4, reviews: 450, img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=60', category: 'Beauty' },
    { id: 5, name: 'Running Shoes', brand: 'Nike', price: 3499, originalPrice: 4999, discount: '30% off', rating: 4.6, reviews: 1250, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=60', category: 'Fashion' },
    { id: 6, name: 'Smart Home Speaker', brand: 'Google', price: 3999, originalPrice: 4999, discount: '20% off', rating: 4.3, reviews: 670, img: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&w=500&q=60', category: 'Electronics' },
    { id: 7, name: 'Denim Jacket', brand: 'Levis', price: 2299, originalPrice: 3599, discount: '36% off', rating: 4.2, reviews: 300, img: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab5?auto=format&fit=crop&w=500&q=60', category: 'Fashion' },
    { id: 8, name: 'Mechanical Keyboard', brand: 'Keychron', price: 7499, originalPrice: 8999, discount: '16% off', rating: 4.7, reviews: 560, img: 'https://images.unsplash.com/photo-1587829741301-3231756c5157?auto=format&fit=crop&w=500&q=60', category: 'Electronics' },
    { id: 9, name: 'Matte Lipstick Set', brand: 'MAC', price: 1800, originalPrice: 2500, discount: '28% off', rating: 4.5, reviews: 890, img: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=500&q=60', category: 'Beauty' },
    { id: 10, name: 'Coffee Maker', brand: 'Philips', price: 3200, originalPrice: 4500, discount: '28% off', rating: 4.1, reviews: 210, img: 'https://images.unsplash.com/photo-1517036253457-3f538392171c?auto=format&fit=crop&w=500&q=60', category: 'Appliances' },
    { id: 11, name: 'Silk Saree', brand: 'FabIndia', price: 8500, originalPrice: 12000, discount: '29% off', rating: 4.6, reviews: 150, img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=500&q=60', category: 'Fashion' },
    { id: 12, name: 'Gaming Chair', brand: 'GreenSoul', price: 14999, originalPrice: 19999, discount: '25% off', rating: 4.4, reviews: 880, img: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=500&q=60', category: 'Furniture' },
];

const FilterSection = ({ title, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
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

const Shop = () => {
    // Generate lots of content by multiplying data
    const allProducts = [...shopProducts, ...shopProducts, ...shopProducts, ...shopProducts].map((item, i) => ({ ...item, id: i + 1 }));

    const [sortBy, setSortBy] = useState('popularity');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const { addToWishlist, removeFromWishlist, isInWishlist } = useShop();
    const navigate = useNavigate();

    // Search Logic
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('search')?.toLowerCase() || '';

    const handleCategoryChange = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(c => c !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const filteredData = allProducts.filter(item => {
        // Search Filter
        if (searchQuery) {
            const matchName = item.name.toLowerCase().includes(searchQuery);
            const matchBrand = item.brand.toLowerCase().includes(searchQuery);
            const matchCategory = item.category.toLowerCase().includes(searchQuery);
            if (!matchName && !matchBrand && !matchCategory) return false;
        }

        if (selectedCategories.length > 0 && !selectedCategories.includes(item.category)) return false;
        return true;
    });

    const sortedData = [...filteredData].sort((a, b) => {
        if (sortBy === 'price_low') return a.price - b.price;
        if (sortBy === 'price_high') return b.price - a.price;
        return 0;
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="mobiles-page">
            <div className="shop-banner" style={{
                background: 'linear-gradient(to right, #2c3e50, #4ca1af)',
                color: 'white',
                padding: '3rem 5%',
                borderRadius: '8px',
                marginBottom: '2rem',
                textAlign: 'center'
            }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: '800' }}>
                    {searchQuery ? `Search Results for "${searchQuery}"` : 'Shop All Products'}
                </h1>
                <p style={{ fontSize: '1.1rem', opacity: '0.9' }}>
                    {searchQuery ? 'Found the following items matching your search' : 'Explore our vast collection of premium items across all categories.'}
                </p>
            </div>

            <div className="mobiles-container">
                <aside className="mobiles-sidebar">
                    <div className="sidebar-header">
                        <h2>Filters</h2>
                        <button className="clear-btn" onClick={() => setSelectedCategories([])}>Clear all</button>
                    </div>

                    <FilterSection title="CATEGORIES" defaultOpen={true}>
                        <div className="checkbox-group">
                            {['Fashion', 'Electronics', 'Beauty', 'Appliances', 'Furniture'].map(cat => (
                                <label key={cat} className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        checked={selectedCategories.includes(cat)}
                                        onChange={() => handleCategoryChange(cat)}
                                    />
                                    <span>{cat}</span>
                                </label>
                            ))}
                        </div>
                    </FilterSection>

                    <FilterSection title="BRAND" defaultOpen={true}>
                        <div className="checkbox-group">
                            {['Nike', 'Adidas', 'Apple', 'Samsung', 'Zara', 'H&M'].map(brand => (
                                <label key={brand} className="checkbox-label">
                                    <input type="checkbox" />
                                    <span>{brand}</span>
                                </label>
                            ))}
                        </div>
                    </FilterSection>

                    <FilterSection title="CUSTOMER RATINGS" defaultOpen={true}>
                        <div className="checkbox-group">
                            {[4, 3, 2].map(star => (
                                <label key={star} className="checkbox-label">
                                    <input type="checkbox" />
                                    <span>{star}★ & above</span>
                                </label>
                            ))}
                        </div>
                    </FilterSection>
                </aside>

                <div className="mobiles-content">
                    <div className="mobiles-header">
                        <div className="mobiles-controls" style={{ width: '100%', justifyContent: 'space-between' }}>
                            <span className="sort-label">{sortedData.length} Products Found</span>
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
                                    <button
                                        className="wishlist-icon"
                                        onClick={(e) => {
                                            e.stopPropagation(); // Prevent card click
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
                                        <span className="rating-badge" style={{ backgroundColor: '#388e3c', color: 'white', padding: '2px 6px', borderRadius: '4px', fontSize: '12px' }}>{item.rating} ★</span>
                                        <span className="rating-count">({item.reviews})</span>
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
        </div>
    );
};

export default Shop;
