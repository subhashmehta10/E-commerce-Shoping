import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './TrackingPage.css';

const TrackingPage = () => {
    const { orderId } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Mock tracking steps
    const steps = [
        {
            status: "Delivered",
            date: "Jan 22, 2026 - 2:00 PM",
            desc: "Package delivered to secure location.",
            location: "Bangalore, KA",
            state: "pending" // completed, active, pending
        },
        {
            status: "Out for Delivery",
            date: "Jan 22, 2026 - 08:30 AM",
            desc: "Our delivery partner is on the way to your location.",
            location: "Bangalore, KA",
            state: "active"
        },
        {
            status: "Arrived at Logistics Facility",
            date: "Jan 21, 2026 - 11:45 PM",
            desc: "Package has arrived at the local delivery center.",
            location: "Bangalore Hub, KA",
            state: "completed"
        },
        {
            status: "In Transit",
            date: "Jan 21, 2026 - 06:20 AM",
            desc: "Package has departed from the sorting facility.",
            location: "Mumbai, MH",
            state: "completed"
        },
        {
            status: "Picked Up",
            date: "Jan 20, 2026 - 04:00 PM",
            desc: "Courier has picked up the package from the seller.",
            location: "Mumbai, MH",
            state: "completed"
        },
        {
            status: "Order Placed",
            date: "Jan 20, 2026 - 10:30 AM",
            desc: "Your order has been placed successfully.",
            location: "",
            state: "completed"
        }
    ];

    return (
        <div className="tracking-page">
            <div className="tracking-container">
                {/* Left Column: Timeline */}
                <div className="tracking-info-card">
                    <div className="tracking-header">
                        <h1 className="tracking-title">Track Shipment</h1>
                        <p className="tracking-subtitle">Order ID: <span className="tracking-id-highlight">{orderId || 'ORD-29834821'}</span></p>
                    </div>

                    <div className="timeline">
                        {steps.map((step, index) => (
                            <div key={index} className={`timeline-item ${step.state}`}>
                                <div className="timeline-dot">
                                    <div className="dot-inner"></div>
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-date">{step.date}</div>
                                    <h3 className="timeline-status">{step.status}</h3>
                                    <p className="timeline-desc">{step.desc}</p>
                                    {step.location && (
                                        <span className="location-tag">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                            {step.location}
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Additional Info */}
                <div className="bg-column">
                    <div className="delivery-estimate-card">
                        <span className="estimate-icon">🚚</span>
                        <span className="estimate-label">Estimated Delivery</span>
                        <div className="estimate-date">Today</div>
                        <p style={{ margin: '0.5rem 0 0 0', opacity: 0.8 }}>By 9:00 PM</p>
                    </div>

                    <div className="courier-card">
                        <div className="courier-logo-box">EX</div>
                        <div className="courier-details">
                            <h4>Express Logistics</h4>
                            <p>Tracking ID: 882937401</p>
                        </div>
                    </div>

                    <div className="map-card">
                        {/* Static Map Image using a reliable placeholder service or abstract gradient if preferred. Unsplash map related image used here. */}
                        <img
                            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80"
                            alt="Live Map"
                            className="map-placeholder"
                        />
                        <div className="map-overlay">
                            <span className="courier-info">● Live Tracking</span>
                            <div style={{ fontSize: '0.8rem', marginTop: '4px' }}>Driver is 2km away</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrackingPage;
