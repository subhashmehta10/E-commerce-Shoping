import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BestSellers.css';

const books = [
    { id: 101, name: 'Urban Denim Jacket', price: 1899, img: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=500&q=60' },
    { id: 102, name: 'Classic White Sneakers', price: 2299, img: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&w=500&q=60' },
    { id: 103, name: 'Modern Leather Bag', price: 3499, img: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=500&q=60' },
    { id: 104, name: 'Silk Scarf Deluxe', price: 899, img: 'https://images.unsplash.com/photo-1584030173051-6895c52c2706?auto=format&fit=crop&w=500&q=60' },
];

const BestSellers = () => {
    const navigate = useNavigate();

    return (
        <section className="bestsellers-section">
            <div className="bestsellers-head">
                <h2>Best Sellers</h2>
                <p>Top products loved by our customers</p>
            </div>

            <div className="bestsellers-grid">
                {books.map((item) => (
                    <div className="bestsellers-card" key={item.id} onClick={() => navigate(`/product/${item.id}`)}>
                        <div className="bestsellers-img-box">
                            <img src={item.img} alt={item.name} className="bestsellers-img" />
                            <button className="bestsellers-wishlist-btn">♥</button>
                        </div>
                        <div className="bestsellers-info">
                            <h3>{item.name}</h3>
                            <div className="bestsellers-footer">
                                <span className="bestsellers-price">₹{item.price}</span>
                                <button className="bestsellers-add-btn">+</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BestSellers;
