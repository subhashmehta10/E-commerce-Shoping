import React, { useState, useEffect } from 'react';
import './GiftCards.css';

const GiftCards = () => {
    const [selectedTemplate, setSelectedTemplate] = useState(0);
    const [selectedAmount, setSelectedAmount] = useState(1000);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const templates = [
        { id: 1, name: "Birthday Blast", img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=400&q=80" },
        { id: 2, name: "Congratulations", img: "https://images.unsplash.com/photo-1533514757041-3b7c4d51ab48?auto=format&fit=crop&w=400&q=80" },
        { id: 3, name: "Thank You", img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=400&q=80" },
        { id: 4, name: "Love & Romance", img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=400&q=80" }
    ];

    return (
        <div className="gift-page">
            <div className="gift-hero">
                <h1>Give the Perfect Gift</h1>
                <p>ShopNova Gift Cards are the perfect way to give them exactly what they want. Available in any amount and never expires.</p>

                <div className="card-showcase">
                    <div className="virtual-card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div className="vc-logo">ShopNova</div>
                            <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>GIFT CARD</div>
                        </div>
                        <div>
                            <div className="vc-chip"></div>
                            <div className="vc-number">**** **** **** 8291</div>
                        </div>

                        <div className="vc-bottom">
                            <div>
                                <div style={{ fontSize: '0.6rem', opacity: 0.6 }}>CARD HOLDER</div>
                                <div className="vc-name">VALUED MEMBER</div>
                            </div>
                            <div className="vc-val">₹{selectedAmount}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Design Selection */}
            <div className="templates-section">
                <h2 className="section-title-gift">1. Choose a Design</h2>
                <div className="templates-grid">
                    {templates.map((temp, index) => (
                        <div
                            key={temp.id}
                            className={`template-item ${selectedTemplate === index ? 'selected' : ''}`}
                            onClick={() => setSelectedTemplate(index)}
                        >
                            <img src={temp.img} alt={temp.name} className="template-img" />
                            <div className="template-label">{temp.name}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Amount & Details */}
            <div className="gift-form-section">
                <h2 className="section-title-gift" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>2. Enter Amount & Details</h2>

                <div className="amount-grid">
                    {[500, 1000, 2000, 5000].map(amt => (
                        <div
                            key={amt}
                            className={`amount-chip ${selectedAmount === amt ? 'active' : ''}`}
                            onClick={() => setSelectedAmount(amt)}
                        >
                            ₹{amt}
                        </div>
                    ))}
                </div>

                <div className="form-group">
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Recipient's Email</label>
                    <input type="email" className="gift-input" placeholder="Enter email address" />
                </div>

                <div className="form-group">
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Your Name</label>
                    <input type="text" className="gift-input" placeholder="Enter your name" />
                </div>

                <div className="form-group">
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Personal Message (Optional)</label>
                    <textarea className="gift-input" rows="3" placeholder="Write a message..."></textarea>
                </div>

                <button className="buy-gift-btn">Proceed to Pay ₹{selectedAmount}</button>
            </div>

            {/* FAQ */}
            <div className="gift-faq">
                <h2 style={{ marginBottom: '2rem' }}>Frequently Asked Questions</h2>
                <div className="faq-item">
                    <div className="faq-q">Does the gift card expire?</div>
                    <div className="faq-a">No, ShopNova Gift Cards have a lifetime validity period.</div>
                </div>
                <div className="faq-item">
                    <div className="faq-q">Where can I use it?</div>
                    <div className="faq-a">The gift card can be used to purchase any item on the ShopNova website or mobile app.</div>
                </div>
                <div className="faq-item">
                    <div className="faq-q">Can I return a gift card?</div>
                    <div className="faq-a">Gift cards cannot be cancelled or returned once purchased.</div>
                </div>
            </div>
        </div>
    );
};

export default GiftCards;
