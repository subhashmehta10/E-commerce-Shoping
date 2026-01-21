import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useShop } from '../context/ShopContext';
import './ProductDetails.css';

const ProductDetails = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const { addToCart } = useShop();
    const navigate = useNavigate();
    const [selectedSize, setSelectedSize] = useState('M');
    const [activeImage, setActiveImage] = useState(0);
    const [activeTab, setActiveTab] = useState('desc');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // Find product logic
    let product = allProducts.find(p => p.id === id);

    // Fallback: If not found by ID, try matching by Title or Name (from encoded URI component often)
    if (!product) {
        // Handle cases where ID might be a name like "Car & Bike Accessories"
        const decodedId = decodeURIComponent(id || '');
        product = allProducts.find(p => p.title === decodedId || p.name === decodedId || p.id === decodedId);
    }

    // Default Fallback if absolutely nothing matches
    if (!product) {
        product = {
            id: 'mock-1',
            name: decodeURIComponent(id || 'Product Name'), // Show the name from URL at least
            brand: "Generic",
            price: 999,
            mrp: 1999,
            discount: "50% OFF",
            rating: 4.0,
            reviews: 0,
            desc: "Product details are currently being updated.",
            img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80"
        };
    }

    // Ensure images array exists for the gallery
    const productImages = [
        product.img,
        product.img, // duplicating for gallery effect
        product.img,
        product.img
    ];

    const handleAddToCart = () => {
        if (!user) {
            alert("Please log in to add items to your cart.");
            navigate('/login');
            return;
        }
        addToCart(product, 1, selectedSize, 'Black'); // Default color for now
        alert("Product added to cart successfully!");
    };

    const handleBuyNow = () => {
        if (!user) {
            alert("Please log in to proceed with purchase.");
            navigate('/login');
            return;
        }
        addToCart(product, 1, selectedSize, 'Black');
        navigate('/cart');
    };

    return (
        <div className="product-details-page">
            <div className="breadcrumb">
                Home <span>/</span> Shop <span>/</span> Electronics <span>/</span> {product.name}
            </div>

            <div className="product-container">
                {/* Left Column: Images */}
                <div className="product-gallery">
                    <div className="main-image-container">
                        <img src={productImages[activeImage]} alt={product.name} className="main-image" />
                    </div>
                    <div className="thumbnail-list">
                        {productImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Thumbnail ${index}`}
                                className={`thumbnail ${activeImage === index ? 'active' : ''}`}
                                onClick={() => setActiveImage(index)}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Column: Info */}
                <div className="product-info">
                    <span className="brand-label">{product.brand}</span>
                    <h1 className="product-title-large">{product.name}</h1>

                    <div className="rating-row">
                        <div className="stars">★★★★½</div>
                        <span className="review-count">({product.reviews} reviews)</span>
                    </div>

                    <div className="detail-price-row">
                        <span className="detail-current-price">₹{product.price.toLocaleString()}</span>
                        <span className="detail-mrp">₹{product.mrp.toLocaleString()}</span>
                        <span className="detail-discount-badge">{product.discount}</span>
                    </div>

                    <p style={{ lineHeight: '1.6', marginBottom: '2rem', color: '#666' }}>
                        {product.desc}
                    </p>

                    <div className="selector-row">
                        <span className="selector-label">Select Color</span>
                        <div className="size-options">
                            <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#111', cursor: 'pointer', border: '2px solid #ccc' }}></div>
                            <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#6c5ce7', cursor: 'pointer', border: '2px solid transparent' }}></div>
                            <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#fff', cursor: 'pointer', border: '1px solid #ccc' }}></div>
                        </div>
                    </div>

                    <div className="selector-row">
                        <span className="selector-label">Select Model</span>
                        <div className="size-options">
                            {['Base', 'Pro', 'Ultra'].map(size => (
                                <button
                                    key={size}
                                    className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                                    onClick={() => setSelectedSize(size)}
                                    style={{ width: 'auto', padding: '0 15px' }}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="action-buttons">
                        <button className="btn-add-cart" onClick={handleAddToCart}>Add to Cart</button>
                        <button className="btn-buy-now" onClick={handleBuyNow}>Buy Now</button>
                    </div>

                    <div className="product-features">
                        <div className="feature-item">
                            <svg className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            <span>1 Year Official Warranty</span>
                        </div>
                        <div className="feature-item">
                            <svg className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                            <span>30 Day Easy Returns</span>
                        </div>
                        <div className="feature-item">
                            <svg className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                            <span>Compatible with iOS & Android</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Tabs */}
            <div className="details-tabs">
                <div className="tab-header">
                    <button className={`detail-tab-btn ${activeTab === 'desc' ? 'active' : ''}`} onClick={() => setActiveTab('desc')}>Description</button>
                    <button className={`detail-tab-btn ${activeTab === 'specs' ? 'active' : ''}`} onClick={() => setActiveTab('specs')}>Specifications</button>
                    <button className={`detail-tab-btn ${activeTab === 'reviews' ? 'active' : ''}`} onClick={() => setActiveTab('reviews')}>Reviews (245)</button>
                </div>

                <div className="tab-content">
                    {activeTab === 'desc' && (
                        <div>
                            <p>Unlock the future of sound with the X4-Pro. Designed for audiophiles and casual listeners alike, these headphones deliver deep bass, crisp highs, and immersive noise cancellation. Whether you're commuting, working out, or relaxing at home, the ergonomic design ensures all-day comfort.</p>
                            <br />
                            <p>The 30-hour battery life keeps the music playing longer, while the quick-charge feature gives you 5 hours of playback with just a 10-minute charge. Connect seamlessly with Bluetooth 5.2 and enjoy lag-free audio streaming.</p>
                        </div>
                    )}
                    {activeTab === 'specs' && (
                        <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
                            <li>Driver Size: 40mm Dynamic Drivers</li>
                            <li>Battery Life: Up to 30 Hours (ANC On)</li>
                            <li>Connectivity: Bluetooth 5.2, 3.5mm Aux</li>
                            <li>Weight: 250g</li>
                            <li>Water Resistance: IPX4</li>
                        </ul>
                    )}
                    {activeTab === 'reviews' && (
                        <div>
                            <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                                <strong>Rahul Sharma</strong> <span style={{ color: '#FDB931' }}>★★★★★</span>
                                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Best headphones I've ever owned! The noise cancellation is top-notch.</p>
                            </div>
                            <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                                <strong>Priya Singh</strong> <span style={{ color: '#FDB931' }}>★★★★☆</span>
                                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Great sound quality, but the ear cups could be slightly softer for very long use.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
