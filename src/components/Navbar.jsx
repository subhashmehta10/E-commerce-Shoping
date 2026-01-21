import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

import AuthModal from './AuthModal';

const Navbar = () => {
    const { user } = useAuth();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
    const [authModalOpen, setAuthModalOpen] = useState(false);
    const [authMode, setAuthMode] = useState('login');
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        if ((e.key === 'Enter' || e.type === 'click') && searchQuery.trim()) {
            navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
            setMobileSearchOpen(false);
            setSearchQuery('');
        }
    };

    const openAuthModal = (mode) => {
        setAuthMode(mode);
        setAuthModalOpen(true);
        setMobileMenuOpen(false); // Close mobile menu if open
    };

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1024) {
                setMobileMenuOpen(false);
                setMobileSearchOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Close mobile menu on scroll or outside click
    useEffect(() => {
        if (!mobileMenuOpen && !mobileSearchOpen) return;

        const handleScroll = () => {
            setMobileMenuOpen(false);
            setMobileSearchOpen(false); // Close search on scroll too
        };

        const handleClickOutside = (e) => {
            if (!e.target.closest('.navbar')) {
                setMobileMenuOpen(false);
                setMobileSearchOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('click', handleClickOutside);
        };
    }, [mobileMenuOpen, mobileSearchOpen]);

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                {/* Logo */}
                <Link to="/" className="navbar-logo" onClick={() => { setMobileMenuOpen(false); setMobileSearchOpen(false); }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                    ShopNova
                </Link>

                {/* Desktop Search Bar */}
                <div className="navbar-search desktop-only">
                    <span className="search-icon" onClick={handleSearch} style={{ cursor: 'pointer', pointerEvents: 'auto' }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </span>
                    <input
                        type="text"
                        placeholder="Search for products, brands and more..."
                        className="search-input"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleSearch}
                    />
                </div>

                {/* Desktop Navigation Links */}
                <div className="navbar-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/shop" className="nav-link">Shop</Link>
                    <Link to="/categories" className="nav-link">Categories</Link>
                    <Link to="/deals" className="nav-link">Deals</Link>
                    <Link to="/new" className="nav-link">New Arrivals</Link>
                </div>

                {/* Actions */}
                <div className="navbar-actions">
                    {/* Mobile Search Toggle */}
                    <button
                        className="icon-btn mobile-only"
                        onClick={() => {
                            setMobileSearchOpen(!mobileSearchOpen);
                            setMobileMenuOpen(false); // Close menu if search opens
                        }}
                        aria-label="Search"
                    >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </button>

                    {/* Login Container with Dropdown - Desktop Only */}
                    <div className="login-container desktop-only">
                        <button className="login-btn" onClick={() => !user && openAuthModal('login')}>
                            <svg className="login-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                {user ? (
                                    <>
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </>
                                ) : (
                                    <>
                                        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                                        <polyline points="10 17 15 12 10 7"></polyline>
                                        <line x1="15" y1="12" x2="3" y2="12"></line>
                                    </>
                                )}
                            </svg>
                            <span>{user ? `Hi, ${(user.name || user.displayName || 'User').split(' ')[0]}` : 'Login'}</span>
                            <svg className="login-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>

                        {/* Login Nudge Tooltip - Hide if user is logged in */}
                        {!user && (
                            <div className="login-nudge-tooltip">
                                <div className="tooltip-content">
                                    <span>Login</span>
                                </div>
                                <div className="tooltip-arrow-top"></div>
                            </div>
                        )}

                        {/* Hover Dropdown */}
                        <div className="login-dropdown">
                            <div className="dropdown-header">
                                {user ? (
                                    <span style={{ fontWeight: 'bold' }}>{user.name}</span>
                                ) : (
                                    <>
                                        <span>New customer?</span>
                                        <button className="signup-link" onClick={() => openAuthModal('signup')} style={{ background: 'none', border: 'none', padding: 0, textDecoration: 'underline', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit' }}>Sign Up</button>
                                    </>
                                )}
                            </div>
                            <ul className="dropdown-list">
                                <li>
                                    <Link to="/profile" className="dropdown-item">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                        My Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/plus" className="dropdown-item">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                        ShopNova Plus Zone
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/orders" className="dropdown-item">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                                        Orders
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/wishlist" className="dropdown-item">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                        Wishlist
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/rewards" className="dropdown-item">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
                                        Rewards
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/giftcards" className="dropdown-item">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                                        Gift Cards
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Wishlist - Desktop Only */}
                    <Link to="/wishlist" className="icon-btn desktop-only" aria-label="Wishlist">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </Link>

                    <Link to="/cart" className="icon-btn" aria-label="Cart">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        <span className="badge">3</span>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <div className={`menu-toggle ${mobileMenuOpen ? 'open' : ''}`} onClick={() => {
                        setMobileMenuOpen(!mobileMenuOpen);
                        setMobileSearchOpen(false); // Close search if menu opens
                    }}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>

                {/* Mobile Search Bar Dropdown */}
                <div className={`mobile-search-bar ${mobileSearchOpen ? 'active' : ''}`}>
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="mobile-search-input"
                        autoFocus={mobileSearchOpen}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleSearch}
                    />
                    <button className="search-close-btn" onClick={() => setMobileSearchOpen(false)}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
                    <Link to="/" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                    <Link to="/shop" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
                    <Link to="/categories" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Categories</Link>
                    <Link to="/deals" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Deals</Link>
                    <Link to="/new" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>New Arrivals</Link>

                    {/* Add Login for Mobile */}
                    {!user && (
                        <div className="mobile-link" onClick={() => openAuthModal('login')} style={{ cursor: 'pointer' }}>Login / Sign Up</div>
                    )}

                    {user && (
                        <Link to="/profile" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>My Profile</Link>
                    )}

                    {/* Wishlist moved here for mobile */}
                    <Link to="/wishlist" className="mobile-link" onClick={() => setMobileMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        Wishlist
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </Link>
                </div>
            </nav>

            {/* Auth Modal */}
            <AuthModal
                key={authMode}
                isOpen={authModalOpen}
                onClose={() => setAuthModalOpen(false)}
                initialMode={authMode}
            />
        </>
    );
};

export default Navbar;
