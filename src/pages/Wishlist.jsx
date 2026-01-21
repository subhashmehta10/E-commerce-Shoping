import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Wishlist.css';

const Wishlist = () => {
    // Dummy Data for Wishlist
    const [wishlistItems, setWishlistItems] = useState([
        { id: 1, name: 'Wireless Noise Cancelling Headphones', price: 2999, img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=60' },
        { id: 2, name: 'Smart Fitness Watch', price: 1999, img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=60' },
        { id: 3, name: 'Premium Leather Backpack', price: 4500, img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=60' }
    ]);

    const removeFromWishlist = (id) => {
        setWishlistItems(wishlistItems.filter(item => item.id !== id));
    };

    return (
        <div className="wishlist-page">
            <h1 className="wishlist-title">My Wishlist ({wishlistItems.length})</h1>

            {wishlistItems.length === 0 ? (
                <div className="empty-wishlist">
                    <h2>Your wishlist is empty</h2>
                    <p>Save items you love to buy later.</p>
                    <Link to="/" className="continue-btn">Continue Shopping</Link>
                </div>
            ) : (
                <div className="wishlist-grid">
                    {wishlistItems.map((item) => (
                        <div className="wishlist-card" key={item.id}>
                            <div className="wishlist-img-box">
                                <img src={item.img} alt={item.name} className="wishlist-img" />
                                <button
                                    className="wishlist-remove-btn"
                                    onClick={() => removeFromWishlist(item.id)}
                                    aria-label="Remove"
                                >
                                    ✕
                                </button>
                            </div>
                            <div className="wishlist-info">
                                <h3>{item.name}</h3>
                                <span className="wishlist-price">₹{item.price}</span>
                                <button className="wishlist-add-btn">Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Wishlist;
