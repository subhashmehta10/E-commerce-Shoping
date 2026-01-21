import React, { useState } from 'react';
import './Cart.css';

const Cart = () => {
    // Dummy data for demonstration
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Premium Leather Jacket",
            price: 12999,
            size: "M",
            color: "Black",
            image: "https://images.unsplash.com/photo-1551028919-ac66e6246958?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            quantity: 1
        },
        {
            id: 2,
            name: "Urban Street Sneakers",
            price: 5499,
            size: "42",
            color: "White/Grey",
            image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            quantity: 2
        },
        {
            id: 3,
            name: "Minimalist Watch",
            price: 8999,
            size: "One Size",
            color: "Silver",
            image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            quantity: 1
        }
    ]);

    const updateQuantity = (id, change) => {
        setCartItems(items => items.map(item => {
            if (item.id === id) {
                const newQty = item.quantity + change;
                return newQty > 0 ? { ...item, quantity: newQty } : item;
            }
            return item;
        }));
    };

    const removeItem = (id) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const tax = subtotal * 0.18; // 18% GST example
    const shipping = subtotal > 1000 ? 0 : 150;
    const total = subtotal + tax + shipping;

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
                                <img src={item.image} alt={item.name} className="product-image" />
                                <div className="product-details">
                                    <h3>{item.name}</h3>
                                    <p>Size: {item.size} • Color: {item.color}</p>
                                </div>
                            </div>

                            <div className="qty-control">
                                <button className="qty-btn" onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity <= 1}>−</button>
                                <span className="qty-value">{item.quantity}</span>
                                <button className="qty-btn" onClick={() => updateQuantity(item.id, 1)}>+</button>
                            </div>

                            <div className="price">₹{(item.price * item.quantity).toLocaleString()}</div>

                            <button className="delete-btn" onClick={() => removeItem(item.id)}>
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
