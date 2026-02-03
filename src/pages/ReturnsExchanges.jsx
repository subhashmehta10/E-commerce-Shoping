import React from 'react';
import './SupportPages.css';

const ReturnsExchanges = () => {
    return (
        <div className="support-page">
            <div className="support-hero">
                <h1>Returns & Exchanges</h1>
                <p>Simple, hassle-free returns. We want you to love what you ordered.</p>
            </div>

            <div className="support-container">
                <div className="content-section">
                    <h2>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
                        Return Policy Overview
                    </h2>
                    <p>At ShopNova, we strive to ensure you are satisfied with your purchase. If you are not completely happy, you can return your items within **7 days** of delivery.</p>
                    <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem', display: 'grid', gap: '1rem' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            <span>Items must be unused and in original condition</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            <span>Original tags and packaging must be intact</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            <span>Refunds are processed to original payment method</span>
                        </li>
                    </ul>
                </div>

                <div className="content-section">
                    <h2>How to Return an Item</h2>
                    <div className="steps-timeline">
                        <div className="step-item">
                            <div className="step-title">1. Initiate Return</div>
                            <p>Go to 'My Orders', select the order you wish to return, and click on 'Return'. Select the reason for return and proceed.</p>
                        </div>
                        <div className="step-item">
                            <div className="step-title">2. Pack Your Item</div>
                            <p>Place the item securely in the original packaging. Include all accessories, manuals, and tags.</p>
                        </div>
                        <div className="step-item">
                            <div className="step-title">3. Hand over to Pickup Agent</div>
                            <p>Our courier partner will arrive at your doorstep within 24-48 hours to pick up the shipment. You will receive an acknowledgment receipt.</p>
                        </div>
                        <div className="step-item">
                            <div className="step-title">4. Quality Check & Refund</div>
                            <p>Once the item reaches our warehouse and passes the quality check, we will initiate your refund. It typically takes 5-7 business days to reflect in your account.</p>
                        </div>
                    </div>
                </div>

                <div className="content-section">
                    <h2>Non-Returnable Items</h2>
                    <p>Some items are not eligible for returns due to hygiene or safety reasons:</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
                        {['Lingerie & Innerwear', 'Personal Care Products', 'Customized Items', 'Gift Cards', 'Food & Beverages'].map((item) => (
                            <div key={item} style={{ padding: '0.75rem', background: '#f1f5f9', borderRadius: '0.5rem', fontSize: '0.9rem', color: '#475569', textAlign: 'center' }}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReturnsExchanges;
