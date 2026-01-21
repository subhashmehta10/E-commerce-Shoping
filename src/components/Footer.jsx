import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Brand Section */}
                <div className="footer-brand">
                    <h2>ShopNova</h2>
                    <p>
                        Elevating your lifestyle with premium products and unmatched quality.
                        Experience the future of shopping today.
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-icon" aria-label="Facebook">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                        <a href="#" className="social-icon" aria-label="Twitter">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                        </a>
                        <a href="#" className="social-icon" aria-label="Instagram">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <a href="#" className="social-icon" aria-label="LinkedIn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Shop All</a></li>
                        <li><a href="#">New Arrivals</a></li>
                        <li><a href="#">Best Sellers</a></li>
                        <li><a href="#">Sale</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div className="footer-links">
                    <h3>Support</h3>
                    <ul>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Order Status</a></li>
                        <li><a href="#">Returns & Exchanges</a></li>
                        <li><a href="#">Shipping Info</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="footer-links">
                    <h3>Stay in the Loop</h3>
                    <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1rem' }}>
                        Subscribe to our newsletter for exclusive offers and the latest fashion updates.
                    </p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="newsletter-group">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="newsletter-input"
                                required
                            />
                            <button type="submit" className="btn-subscribe">
                                Join
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="bottom-content-wrapper">
                    <div className="bottom-links">
                        <a href="#" className="bottom-link">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="link-icon"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                            <span>Become a Seller</span>
                        </a>
                        <a href="#" className="bottom-link">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="link-icon"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
                            <span>Advertise</span>
                        </a>
                        <a href="/giftcards" className="bottom-link">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="link-icon"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                            <span>Gift Cards</span>
                        </a>
                        <a href="#" className="bottom-link">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="link-icon"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                            <span>Help Center</span>
                        </a>
                    </div>

                    <div className="copyright-text">
                        &copy; {new Date().getFullYear()} ShopNova. All rights reserved.
                    </div>
                    <div className="copyright-text">
                        Made by Subhash Mehta❤️
                    </div>

                    <div className="payment-icons">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="pay-icon" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="MasterCard" className="pay-icon" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" alt="Amex" className="pay-icon" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="pay-icon" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
