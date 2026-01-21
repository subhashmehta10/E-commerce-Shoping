import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
    return (
        <section className="newsletter-section">
            <div className="newsletter-content">
                <h2>Join Our Community</h2>
                <p style={{ marginBottom: '2rem', opacity: 0.9 }}>Subscribe to get 10% off your first order and exclusive deals.</p>
                <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                    <input type="email" placeholder="Enter your email address" />
                    <button className="news-btn" type="submit">Subscribe</button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
