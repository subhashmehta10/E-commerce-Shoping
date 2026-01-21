import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import './Orders.css';

const Orders = () => {
    const navigate = useNavigate();
    const { orders, cancelOrder } = useShop();
    const [activeTab, setActiveTab] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleCancelOrder = (orderId) => {
        if (window.confirm("Are you sure you want to cancel this order?")) {
            cancelOrder(orderId);
            alert("Order cancelled successfully.");
        }
    };

    // Filter Logic
    const filteredOrders = orders.filter(order => {
        // Tab Filter
        if (activeTab === 'open' && (order.status === 'delivered' || order.status === 'cancelled')) return false;
        if (activeTab === 'cancelled' && order.status !== 'cancelled') return false;
        if (activeTab === 'delivered' && order.status !== 'delivered') return false;

        // Search Filter
        if (searchQuery) {
            const lowerQuery = searchQuery.toLowerCase();
            const matchesId = order.id.toLowerCase().includes(lowerQuery);
            const matchesItem = order.items.some(item => item.name.toLowerCase().includes(lowerQuery));
            return matchesId || matchesItem;
        }

        return true;
    });

    return (
        <div className="orders-page">
            <div className="orders-container">

                {/* Header & Search */}
                <div className="orders-header">
                    <h1 className="orders-title">Your  Orders</h1>
                    <div className="orders-search-box">
                        <svg className="search-icon-orders" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        <input
                            type="text"
                            className="orders-search-input"
                            placeholder="Search orders..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Tabs */}
                <div className="orders-tabs">
                    <button className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>All Orders</button>
                    <button className={`tab-btn ${activeTab === 'open' ? 'active' : ''}`} onClick={() => setActiveTab('open')}>Open Orders</button>
                    <button className={`tab-btn ${activeTab === 'delivered' ? 'active' : ''}`} onClick={() => setActiveTab('delivered')}>Delivered</button>
                    <button className={`tab-btn ${activeTab === 'cancelled' ? 'active' : ''}`} onClick={() => setActiveTab('cancelled')}>Cancelled</button>
                </div>

                {/* Order List */}
                <div className="orders-list">
                    {filteredOrders.length > 0 ? filteredOrders.map((order) => (
                        <div key={order.id} className="order-item-card">
                            {/* Card Header */}
                            <div className="card-header">
                                <div className="header-group">
                                    <div>
                                        <span className="header-label">Order Placed</span>
                                        <span className="header-value">{order.date}</span>
                                    </div>
                                    <div>
                                        <span className="header-label">Total</span>
                                        <span className="header-value">₹{order.total.toLocaleString()}</span>
                                    </div>
                                    <div className="desktop-only">
                                        <span className="header-label">Ship To</span>
                                        <span className="header-value">Subhash Kumar</span>
                                    </div>
                                </div>
                                <div className="order-id">
                                    Order # {order.id}
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="card-body">
                                <div className="product-image-container" onClick={() => navigate(`/product/${order.items[0].pid || order.items[0].name}`)} style={{ cursor: 'pointer' }}>
                                    <img src={order.items[0].img} alt={order.items[0].name} className="product-image" />
                                </div>

                                <div className="order-details">
                                    <div className={`delivery-status status-${order.status}`}>
                                        <div className="status-dot"></div>
                                        <div>
                                            <span className="status-text">{order.statusDisplay}</span>
                                            {order.statusSubtext && <span className="status-subtext">{order.statusSubtext}</span>}
                                        </div>
                                    </div>

                                    <h3 className="product-title" onClick={() => navigate(`/product/${order.items[0].pid || order.items[0].name}`)} style={{ cursor: 'pointer' }}>
                                        {order.items[0].name}
                                    </h3>
                                    <p className="product-desc">{order.items[0].desc}</p>

                                    {order.items.length > 1 && (
                                        <p style={{ fontSize: '0.85rem', color: '#6c5ce7', fontWeight: '500' }}>
                                            + {order.items.length - 1} more item(s)
                                        </p>
                                    )}
                                </div>

                                {/* Actions */}
                                <div className="order-actions">
                                    {order.actions.includes('Track Order') && (
                                        <button
                                            className="action-btn btn-primary"
                                            onClick={() => navigate(`/track/${order.id}`)}
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                                            Track Package
                                        </button>
                                    )}
                                    {order.actions.includes('Buy it again') && (
                                        <button className="action-btn btn-primary">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                                            Buy It Again
                                        </button>
                                    )}

                                    <button
                                        className="action-btn btn-outline"
                                        onClick={() => navigate(`/product/${order.items[0].pid || order.items[0].name}`)}
                                    >
                                        View Details
                                    </button>

                                    {order.actions.includes('Invoice') && (
                                        <button className="action-btn btn-text">
                                            Request Invoice
                                        </button>
                                    )}
                                    {order.actions.includes('Write a Review') && (
                                        <button className="action-btn btn-text">
                                            Write Product Review
                                        </button>
                                    )}
                                    {order.actions.includes('Cancel') && (
                                        <button
                                            className="action-btn btn-text cancel-btn"
                                            onClick={() => handleCancelOrder(order.id)}
                                            style={{ color: '#e17055' }}
                                        >
                                            Cancel Order
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    )) : (
                        <div className="empty-orders">
                            <svg className="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                            <h3>No Filtered Orders Found</h3>
                            <p style={{ color: '#888', marginTop: '0.5rem' }}>Try changing the search terms or tab filter.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Orders;
