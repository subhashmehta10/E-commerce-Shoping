import React, { useState } from 'react';
import './Advertise.css';

const Advertise = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        budget: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your interest! Our ad sales team will contact you shortly.');
        setFormData({ name: '', email: '', company: '', budget: '' });
    };

    return (
        <div className="advertise-page">
            {/* Hero Section */}
            <div className="ad-hero">
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80" alt="Background" className="ad-hero-bg" />
                <div className="ad-hero-content">
                    <h1>Drive Growth with ShopNova Ads</h1>
                    <p>Connect with millions of shoppers actively looking to buy. Boost visibility, sales, and brand awareness with our powerful advertising solutions.</p>
                    <button className="ad-btn" onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}>Start Advertising</button>
                </div>
            </div>

            {/* Stats Strip */}
            <div className="ad-stats-strip">
                <div className="ad-stats-container">
                    <div className="ad-stat">
                        <span className="ad-stat-val">3x</span>
                        <span className="ad-stat-lbl">Higher ROI</span>
                    </div>
                    <div className="ad-stat">
                        <span className="ad-stat-val">500M+</span>
                        <span className="ad-stat-lbl">Monthly Impressions</span>
                    </div>
                    <div className="ad-stat">
                        <span className="ad-stat-val">85%</span>
                        <span className="ad-stat-lbl">Conversion Rate</span>
                    </div>
                    <div className="ad-stat">
                        <span className="ad-stat-val">Global</span>
                        <span className="ad-stat-lbl">Reach</span>
                    </div>
                </div>
            </div>

            {/* Solutions Section */}
            <div className="ad-solutions">
                <div className="ad-section-header">
                    <span className="ad-label">Advertising Solutions</span>
                    <h2>Formats designed to deliver results</h2>
                </div>

                <div className="solutions-grid">
                    <div className="solution-card">
                        <div className="solution-img-holder">
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" alt="Sponsored Products" className="solution-img" />
                        </div>
                        <div className="solution-content">
                            <h3>Sponsored Products</h3>
                            <p>Boost your product visibility in search results and category pages. Pay only when a shopper clicks your ad.</p>
                            <a href="#" className="learn-more">Learn more <span>→</span></a>
                        </div>
                    </div>

                    <div className="solution-card">
                        <div className="solution-img-holder">
                            <img src="https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80" alt="Display Ads" className="solution-img" />
                        </div>
                        <div className="solution-content">
                            <h3>Display Advertising</h3>
                            <p>Showcase your brand with rich visual banners across the homepage, product pages, and checkout.</p>
                            <a href="#" className="learn-more">Learn more <span>→</span></a>
                        </div>
                    </div>

                    <div className="solution-card">
                        <div className="solution-img-holder">
                            <img src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80" alt="Video Ads" className="solution-img" />
                        </div>
                        <div className="solution-content">
                            <h3>Video Ads</h3>
                            <p>Engage customers with immersive video content. Perfect for explaining complex products or telling your brand story.</p>
                            <a href="#" className="learn-more">Learn more <span>→</span></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Targeting Section */}
            <div className="ad-targeting">
                <div className="targeting-container">
                    <div>
                        <span className="ad-label" style={{ color: '#60a5fa' }}>Precision Targeting</span>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Reach the right customer at the right time</h2>
                        <p style={{ color: '#cbd5e1', fontSize: '1.1rem', lineHeight: '1.6' }}>
                            Our proprietary algorithm analyzes shopping behavior to help you target customers based on intent, history, and demographics.
                        </p>

                        <div className="target-list">
                            <div className="target-item">
                                <div className="target-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                </div>
                                <div className="target-text">
                                    <h4>Demographic Targeting</h4>
                                    <p>Filter by age, gender, location, and device type.</p>
                                </div>
                            </div>
                            <div className="target-item">
                                <div className="target-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                                </div>
                                <div className="target-text">
                                    <h4>Shopping Behavior</h4>
                                    <p>Target users who browsed specific categories or abandoned carts.</p>
                                </div>
                            </div>
                            <div className="target-item">
                                <div className="target-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                                </div>
                                <div className="target-text">
                                    <h4>Contextual Targeting</h4>
                                    <p>Place ads on relevant product detail pages and keyword search results.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" alt="Analytics Dashboard" style={{ width: '100%', borderRadius: '1rem', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }} />
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div id="contact-form" className="ad-contact-section">
                <div className="ad-form-container">
                    <div className="ad-form-header">
                        <h2>Get Started with ShopNova Ads</h2>
                        <p style={{ color: '#64748b' }}>Fill out the form below and an ad specialist will be in touch.</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="ad-form-group">
                            <label className="ad-label-input">Full Name</label>
                            <input
                                type="text"
                                className="ad-input"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="ad-form-group">
                            <label className="ad-label-input">Work Email</label>
                            <input
                                type="email"
                                className="ad-input"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className="ad-form-group">
                            <label className="ad-label-input">Company Name</label>
                            <input
                                type="text"
                                className="ad-input"
                                required
                                value={formData.company}
                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            />
                        </div>
                        <div className="ad-form-group">
                            <label className="ad-label-input">Estimated Monthly Budget</label>
                            <select
                                className="ad-input"
                                value={formData.budget}
                                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            >
                                <option value="">Select Budget</option>
                                <option value="<10k">Less than ₹10,000</option>
                                <option value="10k-50k">₹10,000 - ₹50,000</option>
                                <option value="50k-2L">₹50,000 - ₹2 Lakhs</option>
                                <option value="2L+">Above ₹2 Lakhs</option>
                            </select>
                        </div>
                        <button type="submit" className="ad-btn" style={{ width: '100%', marginTop: '1rem' }}>Submit Request</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Advertise;
