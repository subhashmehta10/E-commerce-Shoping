import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-orb"></div>

            <div className="hero-container">
                {/* Left: Text Content */}
                <div className="hero-content">
                    <div className="hero-subtitle">New Collection 2026</div>
                    <h1 className="hero-title">
                        Redefine Your <br />
                        <span className="highlight">Fashion Signature</span>
                    </h1>
                    <p className="hero-description">
                        Discover a world where style meets comfort. our latest collection is designed
                        to make you stand out with elegance and confidence every single day.
                    </p>

                    <div className="hero-buttons">
                        <Link to="#shop" className="btn-hero primary">
                            Shop Now
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </Link>
                        <Link to="#categories" className="btn-hero secondary">
                            Explore Categories
                        </Link>
                    </div>
                </div>

                {/* Right: Visuals */}
                <div className="hero-visuals">
                    <div className="main-img-container">
                        <img
                            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                            alt="Fashion Model"
                            className="main-img"
                        />
                    </div>

                    {/* Floating Cards */}
                    <div className="float-card top">
                        <div className="card-icon-box">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                        </div>
                        <div className="card-info">
                            <h4>Best Prices</h4>
                            <p>On Premium Brands</p>
                        </div>
                    </div>

                    <div className="float-card bottom">
                        <div className="card-icon-box" style={{ background: '#eff6ff', color: '#3b82f6' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        </div>
                        <div className="card-info">
                            <h4>100% Authentic</h4>
                            <p>Quality Guaranteed</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
