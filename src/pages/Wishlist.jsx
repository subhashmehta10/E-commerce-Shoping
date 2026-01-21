import React from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import './Wishlist.css';

const Wishlist = () => {
    const { wishlistItems, removeFromWishlist } = useShop();

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
