import React from 'react';
import './ServiceFeatures.css';

const features = [
    { icon: '🚚', title: 'Free Shipping', desc: 'On orders over ₹999' },
    { icon: '🛡️', title: 'Secure Payment', desc: '100% protected payments' },
    { icon: '↩️', title: 'Easy Returns', desc: '30-day return policy' },
    { icon: '🎧', title: '24/7 Support', desc: 'Dedicated support team' },
];

const ServiceFeatures = () => {
    return (
        <section className="features-section">
            <div className="features-grid">
                {features.map((item, index) => (
                    <div className="feature-item" key={index}>
                        <div className="feature-icon">{item.icon}</div>
                        <div className="feature-text">
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServiceFeatures;
