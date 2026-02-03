import React from 'react';
import { Link } from 'react-router-dom';
import './BecomeSeller.css';

const BecomeSeller = () => {
    return (
        <div className="seller-page">
            {/* Hero Section */}
            <header className="seller-hero">
                <div className="seller-hero-content">
                    <h1>Start Selling on ShopNova</h1>
                    <p>Join over 500,000 sellers who trust ShopNova to grow their business. Reach millions of customers today.</p>
                    <Link to="/seller-register" className="seller-cta-btn">Register Now</Link>
                </div>
            </header>

            {/* Stats Section */}
            <section className="seller-stats">
                <div className="stat-item">
                    <span className="stat-number">20M+</span>
                    <span className="stat-label">Active Customers</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">24/7</span>
                    <span className="stat-label">Seller Support</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">10k+</span>
                    <span className="stat-label">Daily Orders</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">0%</span>
                    <span className="stat-label">Commission for 30 Days</span>
                </div>
            </section>

            {/* Why Sell Here? - Benefits */}
            <section className="seller-benefits">
                <div className="section-title">
                    <h2>Why Sell on ShopNova?</h2>
                    <p>We provide the tools, support, and audience you need to scale your business effortlessly.</p>
                </div>

                <div className="benefits-grid">
                    <div className="benefit-card">
                        <div className="benefit-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        </div>
                        <h3>Reach Millions</h3>
                        <p>Get access to our massive customer base from day one. Your products appear to buyers actively looking for them.</p>
                    </div>

                    <div className="benefit-card">
                        <div className="benefit-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                        </div>
                        <h3>Lowest Fees</h3>
                        <p>Enjoy the most competitive commission rates in the industry. We only make money when you make money.</p>
                    </div>

                    <div className="benefit-card">
                        <div className="benefit-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                        </div>
                        <h3>Powerful Dashboard</h3>
                        <p>Manage orders, track inventory, and analyze performance with our intuitive seller dashboard.</p>
                    </div>

                    <div className="benefit-card">
                        <div className="benefit-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                        </div>
                        <h3>Hassle-Free Shipping</h3>
                        <p>Use our integrated logistics partners for seamless pickup and delivery. We handle the logistics so you can focus on product.</p>
                    </div>

                    <div className="benefit-card">
                        <div className="benefit-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                        </div>
                        <h3>Secure Payments</h3>
                        <p>Receive timely payments directly to your bank account with our secure and automated payment processing.</p>
                    </div>

                    <div className="benefit-card">
                        <div className="benefit-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                        </div>
                        <h3>Dedicated Support</h3>
                        <p>Our seller support team is available 24/7 to help you resolve any issues and optimize your listings.</p>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="how-it-works">
                <div className="section-title" style={{ color: 'white' }}>
                    <h2 style={{ color: 'white' }}>How It Works</h2>
                    <p style={{ color: '#94a3b8' }}>Start your selling journey in 4 simple steps.</p>
                </div>

                <div className="steps-container">
                    <div className="step-card">
                        <div className="step-number">1</div>
                        <div className="step-content">
                            <h3>Register Your Account</h3>
                            <p>Sign up with your GSTIN, bank account, and business details. The process takes less than 10 minutes.</p>
                        </div>
                    </div>
                    <div className="step-card">
                        <div className="step-number">2</div>
                        <div className="step-content">
                            <h3>List Your Products</h3>
                            <p>Upload your product catalog using our easy listing tools or bulk upload feature. Add high-quality images and descriptions.</p>
                        </div>
                    </div>
                    <div className="step-card">
                        <div className="step-number">3</div>
                        <div className="step-content">
                            <h3>Receive Orders</h3>
                            <p>Your products go live to millions of customers. Manage orders easily from your dashboard.</p>
                        </div>
                    </div>
                    <div className="step-card">
                        <div className="step-number">4</div>
                        <div className="step-content">
                            <h3>Get Paid</h3>
                            <p>We handle the shipping (or you can). Payments are deposited directly into your bank account every 7 days.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Story */}
            <section className="seller-stories">
                <div className="section-title">
                    <h2>Success Stories</h2>
                </div>
                <div className="story-card">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" alt="Seller" className="seller-img" />
                    <p className="quote">"I started selling on ShopNova as a side hustle. In just 6 months, it became my full-time business. The seller tools and support are incredible."</p>
                    <div className="seller-name">Priya Sharma</div>
                    <div className="seller-business">Owner, StyleStudio</div>
                </div>
            </section>

            {/* FAQ */}
            <section className="seller-faq">
                <div className="section-title">
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div className="faq-group">
                    <div className="s-faq-item">
                        <div className="s-faq-question">Do I need a GSTIN to sell on ShopNova?</div>
                        <div className="s-faq-answer">Yes, a GSTIN is mandatory for selling taxable goods online in India. However, if you sell only books, it is not required.</div>
                    </div>
                    <div className="s-faq-item">
                        <div className="s-faq-question">When will I get paid?</div>
                        <div className="s-faq-answer">Payments are processed every 7 days for all completed orders. You will receive the amount directly in your registered bank account.</div>
                    </div>
                    <div className="s-faq-item">
                        <div className="s-faq-question">Who handles shipping?</div>
                        <div className="s-faq-answer">You can choose between ShopNova Fulfilled (we handle storage and shipping) or Self-Ship (you manage shipping). Most sellers prefer our logistics network for ease.</div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ textAlign: 'center', padding: '4rem 2rem', background: '#1e1b4b', color: 'white' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Ready to grow your business?</h2>
                <Link to="/signup" className="seller-cta-btn">Create Seller Account</Link>
            </section>
        </div>
    );
};

export default BecomeSeller;
