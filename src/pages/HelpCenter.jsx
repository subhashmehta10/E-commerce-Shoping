import React, { useState } from 'react';
import './SupportPages.css';
import { useNavigate } from 'react-router-dom';
import SupportChat from '../components/SupportChat';

const HelpCenter = () => {
    const navigate = useNavigate();
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "How do I track my order?",
            answer: "You can track your order by visiting the 'Order Status' page and entering your Order ID and email address. If you are logged in, you can view your order history directly from your profile."
        },
        {
            question: "What is your return policy?",
            answer: "We offer a 7-day hassle-free return policy for most items. The item must be unused, in its original packaging, and with all tags intact. Refunds are processed within 5-7 business days after we receive the return."
        },
        {
            question: "How can I change my delivery address?",
            answer: "You can change your delivery address before your order is shipped by contacting our support team. If the order is already shipped, we cannot change the address."
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we ship to select international destinations. Shipping charges and delivery times vary depending on the location. Please check our Shipping Info page for more details."
        },
        {
            question: "Can I cancel my order?",
            answer: "You can cancel your order within 24 hours of placing it, provided it has not yet been shipped. Go to 'My Orders' section to initiate a cancellation."
        }
    ];

    const [showChat, setShowChat] = useState(false);

    const toggleChat = () => {
        setShowChat(!showChat);
    };

    return (
        <div className="support-page">
            <div className="support-hero">
                <h1>How can we help you?</h1>
                <p>Find answers to common questions or reach out to our dedicated support team.</p>
                <div style={{ marginTop: '2rem' }}>
                    <div className="tracking-form" style={{ maxWidth: '500px' }}>
                        <input
                            type="text"
                            className="tracking-input"
                            placeholder="Search for help..."
                            style={{ border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                        />
                        <button className="tracking-btn">Search</button>
                    </div>
                </div>
            </div>

            <div className="support-container">
                <div className="support-grid">
                    <div className="support-card" onClick={() => navigate('/order-status')}>
                        <div className="support-card-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                        </div>
                        <h3>Track Order</h3>
                        <p>Check the status of your delivery</p>
                    </div>

                    <div className="support-card" onClick={() => navigate('/returns')}>
                        <div className="support-card-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
                        </div>
                        <h3>Returns & Refunds</h3>
                        <p>Return items or check refund status</p>
                    </div>

                    <div className="support-card" onClick={() => navigate('/shipping')}>
                        <div className="support-card-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        </div>
                        <h3>Shipping Info</h3>
                        <p>Delivery times and shipping charges</p>
                    </div>

                    <div className="support-card" onClick={() => navigate('/profile')}>
                        <div className="support-card-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </div>
                        <h3>Account Settings</h3>
                        <p>Manage your profile and preferences</p>
                    </div>
                </div>

                <div className="content-section" style={{ marginTop: '3rem' }}>
                    <h2>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                        Frequently Asked Questions
                    </h2>

                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div className="faq-item" key={index}>
                                <button className="faq-question" onClick={() => toggleFaq(index)}>
                                    {faq.question}
                                    <svg
                                        width="20" height="20"
                                        viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        style={{ transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}
                                    >
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </button>
                                {openFaq === index && (
                                    <div className="faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="content-section">
                    <h2>Still need help?</h2>
                    <p>Our support team is available 24/7 to assist you with any inquiries.</p>
                    <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ background: '#ecfdf5', padding: '10px', borderRadius: '50%', color: '#059669' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.9rem', color: '#64748b' }}>Call Us</div>
                                <div style={{ fontWeight: '600', color: '#1e293b' }}>+91 1800-123-4567</div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ background: '#eff6ff', padding: '10px', borderRadius: '50%', color: '#2563eb' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22 6 12 13 2 6"></polyline></svg>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.9rem', color: '#64748b' }}>Email Us</div>
                                <div style={{ fontWeight: '600', color: '#1e293b' }}>support@shopnova.com</div>
                            </div>
                        </div>

                        <div
                            style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', transition: 'opacity 0.2s' }}
                            onClick={toggleChat}
                            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                        >
                            <div style={{ background: '#fef3c7', padding: '10px', borderRadius: '50%', color: '#d97706' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.9rem', color: '#64748b' }}>Live Chat</div>
                                <div style={{ fontWeight: '600', color: '#1e293b' }}>Start Chat</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Chat Modal */}
            {showChat && (
                <SupportChat onClose={toggleChat} />
            )}
        </div>
    );
};
export default HelpCenter;

