import React, { useEffect } from 'react';
import './ShopNovaPlus.css';

const ShopNovaPlus = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const exclusiveItems = [
        {
            title: "Limited Edition Smartwatch",
            price: 24999,
            img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80",
            tag: "EARLY ACCESS"
        },
        {
            title: "Luxury Leather Weekender",
            price: 18499,
            img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
            tag: "PLUS EXCLUSIVE"
        },
        {
            title: "Noise Cancelling Headphones X",
            price: 32900,
            img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
            tag: "MEMBER PRICE"
        },
        {
            title: "Designer Sunglasses",
            price: 12500,
            img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
            tag: "NEW DROP"
        }
    ];

    return (
        <div className="plus-page">
            {/* Hero Section */}
            <header className="plus-hero">
                <div className="plus-hero-bg"></div>
                <div className="plus-hero-content">
                    <span className="plus-logo-badge">ShopNova Plus Zone</span>
                    <h1 className="plus-title">Experience the Extraordinary</h1>
                    <p className="plus-subtitle">Unlock a world of premium benefits, exclusive access, and unparalleled luxury.</p>
                    <button className="join-btn-large">Join the Club</button>
                    <p style={{ marginTop: '1rem', color: '#888', fontSize: '0.9rem' }}>Already a member? <u style={{ cursor: 'pointer', color: '#fff' }}>Sign in</u></p>
                </div>
            </header>

            {/* Benefits Section */}
            <section className="plus-benefits">
                <div className="benefits-grid">
                    <div className="benefit-card">
                        <div className="benefit-icon">🚀</div>
                        <h3 className="benefit-title">Superfast Delivery</h3>
                        <p className="benefit-desc">Get your orders delivered within 24 hours on thousands of products. No minimum order value.</p>
                    </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">💎</div>
                        <h3 className="benefit-title">Early Access</h3>
                        <p className="benefit-desc">Be the first to shop new drops and major sales. Get 24-hour priority access before everyone else.</p>
                    </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">🎁</div>
                        <h3 className="benefit-title">Exclusive Rewards</h3>
                        <p className="benefit-desc">Earn 2x coins on every purchase. Redeem them for premium gifts and special discount vouchers.</p>
                    </div>
                </div>
            </section>

            {/* Exclusive Products Section */}
            <section className="plus-exclusive">
                <div className="section-head">
                    <h2>Member Only Exclusives</h2>
                    <p>Curated collections reserved strictly for Plus members.</p>
                </div>
                <div className="exclusive-grid">
                    {exclusiveItems.map((item, index) => (
                        <div key={index} className="exclusive-card">
                            <img src={item.img} alt={item.title} />
                            <div className="exclusive-overlay">
                                <span className="exclusive-tag">{item.tag}</span>
                                <h3 style={{ color: 'white', marginBottom: '0', fontSize: '1.2rem' }}>{item.title}</h3>
                                <span className="exclusive-price">₹{item.price.toLocaleString()}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Membership Tiers */}
            <section className="tiers-section">
                <div className="section-head">
                    <h2>Choose Your Membership</h2>
                    <p>Select the plan that suits your lifestyle.</p>
                </div>
                <div className="tiers-container">
                    <div className="tier-card">
                        <h3 className="tier-name">Gold</h3>
                        <div className="tier-price">₹499<span>/year</span></div>
                        <ul className="tier-features">
                            <li>✓ Free Delivery on all orders</li>
                            <li>✓ Early Access to Sales</li>
                            <li>✓ 5% Extra Discount</li>
                        </ul>
                        <button className="tier-btn">Select Gold</button>
                    </div>
                    <div className="tier-card featured">
                        <h3 className="tier-name">Platinum</h3>
                        <div className="tier-price">₹999<span>/year</span></div>
                        <ul className="tier-features">
                            <li>✓ Free Next-Day Delivery</li>
                            <li>✓ Priority Customer Support</li>
                            <li>✓ 10% Extra Discount</li>
                            <li>✓ Exclusive Member Events</li>
                            <li>✓ Free Returns Forever</li>
                        </ul>
                        <button className="tier-btn">Select Platinum</button>
                    </div>
                    <div className="tier-card">
                        <h3 className="tier-name">Diamond</h3>
                        <div className="tier-price">₹2499<span>/year</span></div>
                        <ul className="tier-features">
                            <li>✓ All Platinum Benefits</li>
                            <li>✓ Personal Personal Shopper</li>
                            <li>✓ Luxury Gift Box</li>
                            <li>✓ Airport Lounge Access</li>
                        </ul>
                        <button className="tier-btn">Select Diamond</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ShopNovaPlus;
