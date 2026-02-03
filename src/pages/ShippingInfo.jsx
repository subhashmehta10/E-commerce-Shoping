import React from 'react';
import './SupportPages.css';

const ShippingInfo = () => {
    return (
        <div className="support-page">
            <div className="support-hero">
                <h1>Shipping & Delivery</h1>
                <p>We deliver happiness to your doorstep with speed and care.</p>
            </div>

            <div className="support-container">
                <div className="content-section">
                    <h2>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                        Shipping Charges & Delivery Times
                    </h2>
                    <p>We offer free shipping on all orders above ₹499. For orders below this amount, a nominal fee is charged.</p>

                    <table className="shipping-table">
                        <thead>
                            <tr>
                                <th>Shipping Method</th>
                                <th>Delivery Time</th>
                                <th>Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Standard Shipping</td>
                                <td>3-5 Business Days</td>
                                <td>Free (Orders {'>'} ₹499)</td>
                            </tr>
                            <tr>
                                <td>Standard Shipping</td>
                                <td>3-5 Business Days</td>
                                <td>₹40 (Orders {'<'} ₹499)</td>
                            </tr>
                            <tr>
                                <td>Express Delivery</td>
                                <td>1-2 Business Days</td>
                                <td>₹100</td>
                            </tr>
                            <tr>
                                <td>Same Day Delivery</td>
                                <td>Today (Metro Cities Only)</td>
                                <td>₹250</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="content-section">
                    <h2>Order Processing</h2>
                    <div className="steps-timeline">
                        <div className="step-item">
                            <div className="step-title">Order Confirmation</div>
                            <p>You will receive an email and SMS confirmation immediately after placing your order.</p>
                        </div>
                        <div className="step-item">
                            <div className="step-title">Dispatch</div>
                            <p>Orders are dispatched within 24 hours of confirmation. You will receive a tracking link via email/SMS.</p>
                        </div>
                        <div className="step-item">
                            <div className="step-title">In Transit</div>
                            <p>Your package is on its way! You can track its journey in real-time on our Order Status page.</p>
                        </div>
                        <div className="step-item">
                            <div className="step-title">Out for Delivery</div>
                            <p>Our delivery partner is out to deliver your package. They may call your registered number.</p>
                        </div>
                    </div>
                </div>

                <div className="content-section">
                    <h2>International Shipping</h2>
                    <p>We do ship internationally to select countries. Please note the following:</p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: '#475569', lineHeight: '1.8' }}>
                        <li>International shipping takes 7-14 business days.</li>
                        <li>Customs duties and taxes are not included in the checkout price and may be charged upon delivery by the carrier.</li>
                        <li>Returns are not currently accepted for international orders unless the item is damaged or incorrect.</li>
                    </ul>
                </div>

                <div className="content-section" style={{ textAlign: 'center' }}>
                    <h2 style={{ justifyContent: 'center' }}>Our Delivery Partners</h2>
                    <p>We partner with the best courier services to ensure safe and timely delivery.</p>
                    <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap', opacity: 0.6 }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#2563eb' }}>FedEx</h3>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#db2777' }}>Delhivery</h3>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#ea580c' }}>BlueDart</h3>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#16a34a' }}>DHL</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShippingInfo;
