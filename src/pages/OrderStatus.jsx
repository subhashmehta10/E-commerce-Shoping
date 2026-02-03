import React, { useState } from 'react';
import './SupportPages.css';
import { useNavigate } from 'react-router-dom';

const OrderStatus = () => {
    const navigate = useNavigate();
    const [orderId, setOrderId] = useState('');
    const [email, setEmail] = useState('');

    const handleTrack = (e) => {
        e.preventDefault();
        // Here we would typically validate and redirect to tracking page
        if (orderId) {
            navigate(`/track/${orderId}`);
        }
    };

    return (
        <div className="support-page">
            <div className="support-hero">
                <h1>Track Your Order</h1>
                <p>Enter your order details below to check the current status of your shipment.</p>
            </div>

            <div className="support-container">
                <div className="content-section" style={{ maxWidth: '700px', margin: '0 auto', transform: 'marginTop: -4rem' }}>
                    <h2>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                        Track Guest Order
                    </h2>
                    <p>Don't have an account? No problem! Track your order using the Order ID found in your confirmation email.</p>

                    <form onSubmit={handleTrack} style={{ marginTop: '2rem' }}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#334155' }}>Order ID</label>
                            <input
                                type="text"
                                className="tracking-input"
                                placeholder="e.g. #SN-12345678"
                                value={orderId}
                                onChange={(e) => setOrderId(e.target.value)}
                                style={{ width: '100%' }}
                                required
                            />
                        </div>
                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#334155' }}>Email Address / Phone Number</label>
                            <input
                                type="text"
                                className="tracking-input"
                                placeholder="Enter email or phone used during checkout"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{ width: '100%' }}
                                required
                            />
                        </div>
                        <button type="submit" className="tracking-btn" style={{ width: '100%', padding: '1rem', fontSize: '1rem' }}>
                            Track Order
                        </button>
                    </form>
                </div>

                <div className="support-grid" style={{ marginTop: '3rem' }}>
                    <div className="content-section" style={{ textAlign: 'center', marginBottom: 0 }}>
                        <div style={{ width: '64px', height: '64px', background: '#dbeafe', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </div>
                        <h3>Have an account?</h3>
                        <p style={{ margin: '1rem 0 1.5rem' }}>Login to view all your past and current orders in one place.</p>
                        <button onClick={() => navigate('/login')} className="tracking-btn" style={{ background: '#1e293b' }}>
                            Login to View Orders
                        </button>
                    </div>

                    <div className="content-section" style={{ textAlign: 'center', marginBottom: 0 }}>
                        <div style={{ width: '64px', height: '64px', background: '#ecfdf5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        </div>
                        <h3>Need help tracking?</h3>
                        <p style={{ margin: '1rem 0 1.5rem' }}>Our support team can help you find your order details if you're lost.</p>
                        <button onClick={() => navigate('/help')} className="tracking-btn" style={{ background: 'white', border: '2px solid #e2e8f0', color: '#1e293b' }}>
                            Contact Support
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderStatus;
