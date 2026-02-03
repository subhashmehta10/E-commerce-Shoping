import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SellerRegistration.css';

const SellerRegistration = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        businessName: '',
        gstin: '',
        email: '',
        phone: '',
        password: '',
        address: '',
        pincode: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            alert('Registration Successful! Welcome to ShopNova Seller Hub.');
            navigate('/login'); // Redirect to login or seller dashboard
        }, 1000);
    };

    return (
        <div className="seller-reg-page">
            <div className="seller-reg-container">
                {/* Sidebar */}
                <div className="seller-reg-sidebar">
                    <div className="reg-sidebar-content">
                        <div className="sidebar-brand">
                            <h2>ShopNova</h2>
                            <span style={{ fontSize: '0.9rem', background: 'rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: '4px' }}>SELLER HUB</span>
                        </div>
                        <div style={{ marginTop: '2rem' }}>
                            <h3 style={{ marginBottom: '1rem' }}>Grow Your Business</h3>
                            <p className="sidebar-desc">
                                Join India's fastest-growing e-commerce platform. Access millions of customers and powerful seller tools.
                            </p>
                        </div>

                        <div className="reg-steps">
                            <div className={`reg-step-item ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
                                <div className="step-circle">{step > 1 ? '✓' : '1'}</div>
                                <span>Account Details</span>
                            </div>
                            <div className={`reg-step-item ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
                                <div className="step-circle">{step > 2 ? '✓' : '2'}</div>
                                <span>Business Info</span>
                            </div>
                            <div className={`reg-step-item ${step >= 3 ? 'active' : ''}`}>
                                <div className="step-circle">3</div>
                                <span>Verification</span>
                            </div>
                        </div>
                    </div>
                    <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>
                        © 2026 ShopNova Inc.
                    </div>
                </div>

                {/* Form Area */}
                <div className="seller-reg-form-panel">
                    <div className="reg-form-header">
                        <h2>Create Seller Account</h2>
                        <p>Enter your business details to get started.</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="form-grid">
                            <div className="form-group full-width">
                                <label className="reg-label">Business Name / Store Name</label>
                                <input
                                    type="text"
                                    className="reg-input"
                                    name="businessName"
                                    placeholder="e.g. Royal Furniture"
                                    value={formData.businessName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="reg-label">Email Address</label>
                                <input
                                    type="email"
                                    className="reg-input"
                                    name="email"
                                    placeholder="name@business.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="reg-label">Mobile Number</label>
                                <input
                                    type="tel"
                                    className="reg-input"
                                    name="phone"
                                    placeholder="+91 98765 43210"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="reg-label">GSTIN (Optional for Books)</label>
                                <input
                                    type="text"
                                    className="reg-input"
                                    name="gstin"
                                    placeholder="22AAAAA0000A1Z5"
                                    value={formData.gstin}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label className="reg-label">Pincode</label>
                                <input
                                    type="text"
                                    className="reg-input"
                                    name="pincode"
                                    placeholder="Pickup Pincode"
                                    value={formData.pincode}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group full-width">
                                <label className="reg-label">Password</label>
                                <input
                                    type="password"
                                    className="reg-input"
                                    name="password"
                                    placeholder="Create a strong password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="reg-btn-area">
                            <Link to="/seller" className="back-link">Back</Link>
                            <button type="submit" className="submit-reg-btn">Create Account</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SellerRegistration;
