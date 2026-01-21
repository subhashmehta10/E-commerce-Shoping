import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './MyProfile.css';

const MyProfile = () => {
    const { user: authUser, logout } = useAuth();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('dashboard');
    const fileInputRef = useRef(null);

    // User Data State
    const [user, setUser] = useState({
        name: authUser?.name || authUser?.displayName || "Guest User",
        email: authUser?.email || "guest@example.com",
        phone: authUser?.phone || "+91 98765 43210",
        joined: authUser?.joined || "January 2026",
        avatar: authUser?.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80"
    });

    useEffect(() => {
        if (authUser) {
            setUser({
                name: authUser.name || authUser.displayName || "Guest User",
                email: authUser.email || "guest@example.com",
                phone: authUser.phone || "+91 98765 43210",
                joined: authUser.joined || "January 2026",
                avatar: authUser.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80"
            });
        }
    }, [authUser]);

    // Address State
    const [addresses, setAddresses] = useState([
        {
            id: 1,
            type: "Home",
            name: "Subhash Kumar",
            street: "123, Tech Park Road",
            city: "Bangalore",
            state: "Karnataka",
            zip: "560100",
            phone: "+91 98765 43210",
            isDefault: true
        },
        {
            id: 2,
            type: "Work",
            name: "Subhash Kumar",
            street: "45, Business Hub, Sector 5",
            city: "Gurgaon",
            state: "Haryana",
            zip: "122001",
            phone: "+91 98765 43210",
            isDefault: false
        }
    ]);

    // Address Editing State
    const [isEditingAddress, setIsEditingAddress] = useState(false);
    const [currentAddress, setCurrentAddress] = useState(null);

    // Mock Orders
    const orders = [
        {
            id: "#ORD-2839",
            date: "Jan 15, 2026",
            total: 4599,
            status: "Delivered",
            items: [
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=100&q=80",
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=100&q=80"
            ]
        },
        {
            id: "#ORD-2845",
            date: "Jan 20, 2026",
            total: 12999,
            status: "Processing",
            items: [
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=100&q=80"
            ]
        }
    ];

    // --- Handlers ---

    const handleAvatarClick = () => {
        fileInputRef.current.click();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setUser({ ...user, avatar: imageUrl });
        }
    };

    const handleDeleteAddress = (id) => {
        if (window.confirm("Are you sure you want to delete this address?")) {
            setAddresses(addresses.filter(addr => addr.id !== id));
        }
    };

    const handleEditAddress = (addr) => {
        setCurrentAddress(addr);
        setIsEditingAddress(true);
    };

    const handleAddNewAddress = () => {
        setCurrentAddress({
            id: Date.now(),
            type: 'Home',
            name: '',
            street: '',
            city: '',
            state: '',
            zip: '',
            phone: '',
            isDefault: false
        });
        setIsEditingAddress(true);
    };

    const handleSaveAddress = () => {
        if (!currentAddress.name || !currentAddress.street) {
            alert("Please fill in the required fields (Name, Street)");
            return;
        }

        setAddresses(prev => {
            const exists = prev.find(a => a.id === currentAddress.id);
            if (exists) {
                return prev.map(a => a.id === currentAddress.id ? currentAddress : a);
            } else {
                // If setting as default, remove default from others
                const newStats = [...prev, currentAddress];
                if (currentAddress.isDefault) {
                    return newStats.map(a => a.id === currentAddress.id ? a : { ...a, isDefault: false });
                }
                return newStats;
            }
        });

        setIsEditingAddress(false);
        setCurrentAddress(null);
    };

    const handleCancelEdit = () => {
        setIsEditingAddress(false);
        setCurrentAddress(null);
    };

    const handleAddressInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentAddress(prev => ({ ...prev, [name]: value }));
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    // --- Renderers ---

    const renderAddressForm = () => (
        <div className="address-form-container" style={{ maxWidth: '600px' }}>
            <div className="section-header">
                <h2 className="section-title">{currentAddress.id ? 'Edit Address' : 'Add New Address'}</h2>
                <button onClick={handleCancelEdit} style={{ background: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>&times;</button>
            </div>

            <div className="form-group">
                <label>Address Type (e.g. Home, Work)</label>
                <input
                    type="text"
                    className="form-input"
                    name="type"
                    value={currentAddress.type}
                    onChange={handleAddressInputChange}
                />
            </div>
            <div className="form-group">
                <label>Full Name</label>
                <input
                    type="text"
                    className="form-input"
                    name="name"
                    value={currentAddress.name}
                    onChange={handleAddressInputChange}
                />
            </div>
            <div className="form-group">
                <label>Street Address</label>
                <input
                    type="text"
                    className="form-input"
                    name="street"
                    value={currentAddress.street}
                    onChange={handleAddressInputChange}
                />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                    <label>City</label>
                    <input
                        type="text"
                        className="form-input"
                        name="city"
                        value={currentAddress.city}
                        onChange={handleAddressInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>State</label>
                    <input
                        type="text"
                        className="form-input"
                        name="state"
                        value={currentAddress.state}
                        onChange={handleAddressInputChange}
                    />
                </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                    <label>Zip Code</label>
                    <input
                        type="text"
                        className="form-input"
                        name="zip"
                        value={currentAddress.zip}
                        onChange={handleAddressInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input
                        type="text"
                        className="form-input"
                        name="phone"
                        value={currentAddress.phone}
                        onChange={handleAddressInputChange}
                    />
                </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <button className="save-btn" onClick={handleSaveAddress}>Save Address</button>
                <button className="save-btn" style={{ background: '#dfe6e9', color: '#636e72' }} onClick={handleCancelEdit}>Cancel</button>
            </div>
        </div>
    );

    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard':
                return (
                    <div className="dashboard-view">
                        <div className="section-header">
                            <h2 className="section-title">My Dashboard</h2>
                        </div>
                        <div className="stats-grid">
                            <div className="stat-card">
                                <span className="stat-number">{orders.length}</span>
                                <span className="stat-label">Total Orders</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-number">05</span>
                                <span className="stat-label">In Wishlist</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-number">{addresses.length}</span>
                                <span className="stat-label">Saved Addresses</span>
                            </div>
                        </div>

                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', marginTop: '2rem' }}>Recent Orders</h3>
                        {orders.map(order => (
                            <div key={order.id} className="order-card">
                                <div className="order-header">
                                    <div>
                                        <h4 style={{ margin: 0 }}>{order.id}</h4>
                                        <span style={{ fontSize: '0.85rem', color: '#888' }}>Placed on {order.date}</span>
                                    </div>
                                    <span className={`status-badge ${order.status.toLowerCase()}`}>{order.status}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div className="order-items-grid">
                                        {order.items.map((img, idx) => (
                                            <img key={idx} src={img} alt="Product" className="order-item-thumb" />
                                        ))}
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <span style={{ display: 'block', fontSize: '0.9rem', color: '#666' }}>Total Amount</span>
                                        <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>₹{order.total.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                );

            case 'orders':
                return (
                    <div>
                        <div className="section-header">
                            <h2 className="section-title">My Orders</h2>
                        </div>
                        {orders.map(order => (
                            <div key={order.id} className="order-card">
                                <div className="order-header">
                                    <div>
                                        <h4 style={{ margin: 0 }}>{order.id}</h4>
                                        <span style={{ fontSize: '0.85rem', color: '#888' }}>Placed on {order.date}</span>
                                    </div>
                                    <span className={`status-badge ${order.status.toLowerCase()}`}>{order.status}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div className="order-items-grid">
                                        {order.items.map((img, idx) => (
                                            <img key={idx} src={img} alt="Product" className="order-item-thumb" />
                                        ))}
                                    </div>
                                    <button style={{
                                        padding: '8px 20px',
                                        background: 'transparent',
                                        border: '1px solid #6c5ce7',
                                        color: '#6c5ce7',
                                        borderRadius: '6px',
                                        cursor: 'pointer',
                                        fontWeight: '600'
                                    }}>View Details</button>
                                </div>
                            </div>
                        ))}
                    </div>
                );

            case 'addresses':
                if (isEditingAddress) {
                    return renderAddressForm();
                }
                return (
                    <div>
                        <div className="section-header">
                            <h2 className="section-title">My Addresses</h2>
                            <button className="save-btn" style={{ padding: '8px 20px' }} onClick={handleAddNewAddress}>+ Add New</button>
                        </div>
                        <div className="address-grid">
                            {addresses.map(addr => (
                                <div key={addr.id} className={`address-card ${addr.isDefault ? 'default' : ''}`}>
                                    <span className="address-type">{addr.type}</span>
                                    <h4 style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>{addr.name}</h4>
                                    <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.5' }}>
                                        {addr.street}<br />
                                        {addr.city}, {addr.state} - {addr.zip}
                                    </p>
                                    <p style={{ marginTop: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>Phone: {addr.phone}</p>
                                    <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
                                        <button
                                            onClick={() => handleEditAddress(addr)}
                                            style={{ background: 'none', border: 'none', color: '#6c5ce7', cursor: 'pointer', fontWeight: '600' }}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDeleteAddress(addr.id)}
                                            style={{ background: 'none', border: 'none', color: '#e17055', cursor: 'pointer', fontWeight: '600' }}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <button className="add-address-btn" onClick={handleAddNewAddress}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                <span style={{ marginTop: '10px' }}>Add New Address</span>
                            </button>
                        </div>
                    </div>
                );

            case 'settings':
                return (
                    <div>
                        <div className="section-header">
                            <h2 className="section-title">Account Settings</h2>
                        </div>
                        <div style={{ maxWidth: '600px' }}>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" className="form-input" defaultValue={user.name} />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" className="form-input" defaultValue={user.email} />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="tel" className="form-input" defaultValue={user.phone} />
                            </div>

                            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Change Password</h3>
                            <div className="form-group">
                                <label>Current Password</label>
                                <input type="password" className="form-input" placeholder="••••••••" />
                            </div>
                            <div className="form-group">
                                <label>New Password</label>
                                <input type="password" className="form-input" placeholder="Enter new password" />
                            </div>

                            <button className="save-btn" style={{ marginTop: '1rem' }}>Save Changes</button>
                        </div>
                    </div>
                );

            default:
                return <div>Coming Soon</div>;
        }
    };

    return (
        <div className="profile-container">
            {/* Sidebar */}
            <div className="profile-sidebar">
                <div className="user-quick-info">
                    <div className="avatar-container">
                        <img src={user.avatar} alt="User Avatar" />
                        <div className="avatar-edit-badge" onClick={handleAvatarClick} title="Change Profile Picture">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                        </div>
                        {/* Hidden File Input */}
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </div>
                    <h3 className="user-name">{user.name}</h3>
                    <p className="user-email">{user.email}</p>
                </div>

                <ul className="menu-list">
                    <li className={`menu-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                        Dashboard
                    </li>
                    <li className={`menu-item ${activeTab === 'orders' ? 'active' : ''}`} onClick={() => setActiveTab('orders')}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                        My Orders
                    </li>
                    <li className={`menu-item ${activeTab === 'addresses' ? 'active' : ''}`} onClick={() => setActiveTab('addresses')}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        Addresses
                    </li>
                    <li className={`menu-item ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => setActiveTab('settings')}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                        Settings
                    </li>
                    <li className="menu-item" style={{ marginTop: 'auto', color: '#e17055' }} onClick={handleLogout}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                        Log Out
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="profile-content">
                {renderContent()}
            </div>
        </div>
    );
};

export default MyProfile;
