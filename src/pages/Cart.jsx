import React from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import './Cart.css';

const Cart = () => {
    const { cartItems, updateCartQuantity, removeFromCart } = useShop();

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const tax = subtotal * 0.18; // 18% GST example
    const shipping = subtotal > 1000 ? 0 : 150;
    const total = subtotal + tax + shipping;

    if (cartItems.length === 0) {
        return (
            <div className="cart-page">
                <div className="empty-cart-container" style={{ textAlign: 'center', padding: '4rem 1rem' }}>
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    <h2 style={{ color: '#333', marginTop: '1rem' }}>Your cart is currently empty</h2>
                    <p style={{ color: '#666', marginBottom: '2rem' }}>Looks like you haven't added anything to your cart yet.</p>
                    <Link to="/shop" className="checkout-btn" style={{ maxWidth: '200px', margin: '0 auto', display: 'inline-block', textDecoration: 'none' }}>Start Shopping</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <h1 className="cart-title">Your Cart ({cartItems.length} items)</h1>

            <div className="cart-container">
                {/* Cart Items List */}
                <div className="cart-items">
                    <div className="cart-header">
                        <span>Product</span>
                        <span>Quantity</span>
                        <span>Price</span>
                        <span></span>
                    </div>

                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <div className="product-info">
                                <img src={item.img || item.image} alt={item.name} className="product-image" />
                                <div className="product-details">
                                    <h3>{item.name}</h3>
                                    <p>Size: {item.size || 'N/A'} • Color: {item.color || 'N/A'}</p>
                                </div>
                            </div>

                            <div className="qty-control">
                                <button className="qty-btn" onClick={() => updateCartQuantity(item.id, -1)} disabled={item.quantity <= 1}>−</button>
                                <span className="qty-value">{item.quantity}</span>
                                <button className="qty-btn" onClick={() => updateCartQuantity(item.id, 1)}>+</button>
                            </div>

                            <div className="price">₹{(item.price * item.quantity).toLocaleString()}</div>

                            <button className="delete-btn" onClick={() => removeFromCart(item.id)}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                            </button>
                        </div>
                    ))}
                </div>

                {/* Order Summary */}
                <div className="cart-summary">
                    <h2 className="summary-title">Order Summary</h2>

                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>₹{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="summary-row">
                        <span>Tax (18% GST)</span>
                        <span>₹{tax.toLocaleString()}</span>
                    </div>
                    <div className="summary-row">
                        <span>Shipping</span>
                        <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                    </div>

                    <div className="summary-row total">
                        <span>Total</span>
                        <span>₹{total.toLocaleString()}</span>
                    </div>

                    <button className="checkout-btn">
                        Checkout Now
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
