import React, { useState } from 'react';
import './AnnouncementBar.css';

const AnnouncementBar = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="announcement-bar">
            <div className="announcement-content">
                <span>🎉 Free Shipping on Orders Over ₹999</span>
                <span className="announcement-code">CODE: NEWUSER</span>
            </div>

            <button
                className="announcement-close"
                onClick={() => setIsVisible(false)}
                aria-label="Close announcement"
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
    );
};

export default AnnouncementBar;
