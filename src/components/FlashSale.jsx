import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './FlashSale.css';

const products = [
    { id: 1, name: 'Wireless Headphones', price: 2499, oldPrice: 4999, discount: '50% OFF', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=60' },
    { id: 2, name: 'Smart Watch Series 7', price: 3999, oldPrice: 7999, discount: '50% OFF', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=60' },
    { id: 3, name: 'Running Shoes', price: 1499, oldPrice: 2999, discount: '50% OFF', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=60' },
    { id: 4, name: 'Designer Backpack', price: 1299, oldPrice: 2499, discount: '48% OFF', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=60' },
];

const FlashSale = () => {
    const [timeLeft, setTimeLeft] = useState({
        hours: 12,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // Set target time: Midnight tonight or next 24h cycle
        const now = new Date();
        const target = new Date(now);
        target.setHours(24, 0, 0, 0); // Next midnight

        const calculateTimeLeft = () => {
            const difference = target - new Date();

            if (difference > 0) {
                return {
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                };
            }
            return { hours: 0, minutes: 0, seconds: 0 };
        };

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (time) => String(time).padStart(2, '0');

    const navigate = useNavigate();

    return (
        <section className="flash-sale-section">
            <div className="flash-header">
                <div className="flash-title-group">
                    <h2>Flash Sale </h2>
                    <div className="flash-countdown">
                        <span className="flash-count-box">{formatTime(timeLeft.hours)}</span> :
                        <span className="flash-count-box">{formatTime(timeLeft.minutes)}</span> :
                        <span className="flash-count-box">{formatTime(timeLeft.seconds)}</span>
                    </div>
                </div>
                <Link to="/deals" className="flash-view-btn">View All →</Link>
            </div>

            <div className="flash-grid">
                {products.map((item) => (
                    <div className="flash-card" key={item.id} onClick={() => navigate(`/product/${item.id}`)}>
                        <div className="flash-img-wrapper">
                            <img src={item.img} alt={item.name} className="flash-img" />
                            <span className="flash-discount-badge">{item.discount}</span>
                        </div>
                        <div className="flash-details">
                            <h3>{item.name}</h3>
                            <div className="flash-price-box">
                                <span className="flash-current-price">₹{item.price}</span>
                                <span className="flash-old-price">₹{item.oldPrice}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FlashSale;
