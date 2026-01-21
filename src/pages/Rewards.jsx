import React, { useState, useEffect } from 'react';
import './Rewards.css';

const Rewards = () => {
    const [activeTab, setActiveTab] = useState('redeem');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const coupons = [
        { id: 1, brand: "Nike", offer: "FLAT 20% OFF", desc: "On orders above ₹2000", cost: 500, color: "#faeee7" },
        { id: 2, brand: "Starbucks", offer: "FREE COFFEE", desc: "Any tall beverage", cost: 300, color: "#e3fcef" },
        { id: 3, brand: "H&M", offer: "₹500 OFF", desc: "Valid on new collection", cost: 800, color: "#fff0f0" },
        { id: 4, brand: "Uber", offer: "25% OFF", desc: "Up to ₹100 on 2 rides", cost: 200, color: "#e0f2f1" },
        { id: 5, brand: "Swiggy", offer: "FREE DELIVERY", desc: "On next 5 orders", cost: 400, color: "#fff3e0" },
        { id: 6, brand: "Amazon Prime", offer: "1 MONTH FREE", desc: "Subscription voucher", cost: 1000, color: "#e8eaf6" }
    ];

    const history = [
        { id: 1, type: 'earned', title: "Purchase Reward", date: "21 Jan 2026", amount: "+50" },
        { id: 2, type: 'spent', title: "Redeemed Spotify Coupon", date: "15 Jan 2026", amount: "-200" },
        { id: 3, type: 'earned', title: "Referral Bonus", date: "10 Jan 2026", amount: "+100" },
        { id: 4, type: 'earned', title: "Purchase Reward", date: "05 Jan 2026", amount: "+150" },
    ];

    return (
        <div className="rewards-page">
            <div className="rewards-container">
                {/* Header */}
                <div className="rewards-header-card">
                    <div className="rewards-balance-section">
                        <span className="balance-label">Total Balance</span>
                        <span className="balance-amount">
                            2,450 <span className="coin-icon">©</span>
                        </span>
                        <p className="rewards-subtitle">Earn more coins with every purchase and unlock exclusive rewards.</p>
                    </div>
                    <div className="decor-circle c1"></div>
                    <div className="decor-circle c2"></div>
                </div>

                {/* Tabs */}
                <div className="rewards-tabs">
                    <button
                        className={`reward-tab ${activeTab === 'redeem' ? 'active' : ''}`}
                        onClick={() => setActiveTab('redeem')}
                    >
                        Redeem Coins
                    </button>
                    <button
                        className={`reward-tab ${activeTab === 'history' ? 'active' : ''}`}
                        onClick={() => setActiveTab('history')}
                    >
                        History
                    </button>
                    <button
                        className={`reward-tab ${activeTab === 'info' ? 'active' : ''}`}
                        onClick={() => setActiveTab('info')}
                    >
                        How it Works
                    </button>
                </div>

                {/* Content */}
                {activeTab === 'redeem' && (
                    <div className="coupons-grid">
                        {coupons.map(coupon => (
                            <div key={coupon.id} className="coupon-card">
                                <div className="coupon-top" style={{ background: `radial-gradient(circle at top left, ${coupon.color}, #fff)` }}>
                                    <h3 style={{ fontSize: '1rem', color: '#888', marginBottom: '0.5rem', textTransform: 'uppercase' }}>{coupon.brand}</h3>
                                    <div className="coupon-offer">{coupon.offer}</div>
                                    <div className="coupon-desc">{coupon.desc}</div>
                                </div>
                                <div className="coupon-bottom">
                                    <div className="coin-cost">
                                        <span style={{ color: '#f1c40f', fontSize: '1.2rem' }}>©</span> {coupon.cost}
                                    </div>
                                    <button className="redeem-btn">Redeem</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'history' && (
                    <div className="history-list">
                        {history.map(item => (
                            <div key={item.id} className="history-item">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className={`h-icon ${item.type}`}>
                                        {item.type === 'earned' ? '↓' : '↑'}
                                    </div>
                                    <div className="h-details">
                                        <h4>{item.title}</h4>
                                        <div className="h-date">{item.date}</div>
                                    </div>
                                </div>
                                <div className={`h-amount ${item.type === 'earned' ? 'plus' : 'minus'}`}>
                                    {item.amount}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'info' && (
                    <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', lineHeight: '1.8', color: '#555' }}>
                        <h3 style={{ marginBottom: '1rem', color: '#333' }}>How to Earn Coins</h3>
                        <ul style={{ listStyle: 'disc', paddingLeft: '20px', marginBottom: '2rem' }}>
                            <li>Shop for ₹100 and get 1 Coin.</li>
                            <li>Write details reviews to earn 50 Coins.</li>
                            <li>Refer a friend and get 100 Coins when they place their first order.</li>
                        </ul>

                        <h3 style={{ marginBottom: '1rem', color: '#333' }}>Validity</h3>
                        <p>Coins are valid for 12 months from the date of earning. Use them before they expire!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Rewards;
