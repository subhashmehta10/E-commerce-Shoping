import React, { useEffect } from 'react';
import './AutumnCollection.css';

const AutumnCollection = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const lookbookData = [
        {
            id: 1,
            img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80',
            title: 'Urban Earth',
            desc: 'Tones inspired by the changing leaves.'
        },
        {
            id: 2,
            img: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=600&q=80',
            title: 'Cozy Layers',
            desc: 'Master the art of layering.'
        },
        {
            id: 3,
            img: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&w=600&q=80',
            title: 'Classic Wool',
            desc: 'Timeless textures for the cold.'
        }
    ];

    const products = [
        { id: 1, name: 'Merino Wool Cardigan', price: 4500, img: 'https://images.unsplash.com/photo-1620799140408-ed5341cd2431?auto=format&fit=crop&w=400&q=80' },
        { id: 2, name: 'Suede Ankle Boots', price: 6999, img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=400&q=80' },
        { id: 3, name: 'Trench Coat Classic', price: 8500, img: 'https://images.unsplash.com/photo-1626497764746-6dc36546b388?auto=format&fit=crop&w=400&q=80' },
        { id: 4, name: 'Checkered Scarf', price: 1200, img: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=400&q=80' },
        { id: 5, name: 'Leather Satchel', price: 3400, img: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=400&q=80' },
        { id: 6, name: 'Textured Knit Sweater', price: 2999, img: 'https://images.unsplash.com/photo-1621072156002-e2fccdc0b171?auto=format&fit=crop&w=400&q=80' },
        { id: 7, name: 'Corduroy Trousers', price: 2400, img: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=400&q=80' },
        { id: 8, name: 'Autumn Fedora', price: 1800, img: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89f?auto=format&fit=crop&w=400&q=80' },
    ];

    return (
        <div className="autumn-page">
            {/* Hero Section */}
            <section className="autumn-hero">
                <img src="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1920&q=80" alt="Autumn Landscape" className="autumn-hero-bg" />
                <div className="autumn-hero-content">
                    <span className="autumn-subtitle">Essentials 2026</span>
                    <h1 className="autumn-title">The Golden Harvest</h1>
                    <p className="autumn-desc">Discover the warmth of the season with our curated collection of premium wools, rich leathers, and earth-toned layers.</p>
                    <button className="btn-autumn">View Collection</button>
                    <button className="btn-autumn" style={{ marginLeft: '20px', background: 'white', color: '#333' }}>Watch Film</button>
                </div>
            </section>

            {/* Concept Section */}
            <section className="autumn-concept">
                <div className="section-header">
                    <h2>Embrace the Change</h2>
                    <p>Transition seamlessly into the cooler months with pieces designed for versatility and style.</p>
                </div>
                <div className="concept-grid">
                    <div className="concept-item">
                        <img src="https://images.unsplash.com/photo-1485230946086-1d99d5243edb?auto=format&fit=crop&w=600&q=80" alt="Style 1" />
                        <h3>Effortless Chic</h3>
                        <p>Relaxed silhouettes meeting structured details.</p>
                    </div>
                    <div className="concept-item">
                        <img src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=600&q=80" alt="Style 2" />
                        <h3>Warm Palettes</h3>
                        <p>From burnt orange to deep mahogany.</p>
                    </div>
                </div>
            </section>

            {/* Lookbook Grid */}
            <section className="autumn-lookbook">
                <div className="section-header">
                    <h2>The Lookbook</h2>
                    <div className="divider" style={{ width: '60px', height: '2px', background: '#333', margin: '20px auto' }}></div>
                </div>
                <div className="lookbook-grid">
                    {lookbookData.map(item => (
                        <div key={item.id} className="lookbook-item">
                            <img src={item.img} alt={item.title} className="lookbook-img" />
                            <div className="lookbook-overlay">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Product Showcase */}
            <section className="autumn-products">
                <div className="section-header">
                    <h2>Shop the Collection</h2>
                    <p>Hand-picked favorites for your autumn wardrobe.</p>
                </div>
                <div className="product-carousel">
                    {products.map(product => (
                        <div key={product.id} className="autumn-product-card">
                            <div className="card-img-container">
                                <img src={product.img} alt={product.name} className="autumn-product-img" />
                            </div>
                            <div className="card-details">
                                <h4>{product.name}</h4>
                                <span className="card-price">₹{product.price.toLocaleString()}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Newsletter / CTA */}
            <section style={{ padding: '5rem 5%', background: '#2c2c2c', color: 'white', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', fontFamily: 'Playfair Display, serif', marginBottom: '1rem' }}>Join the Inner Circle</h2>
                <p style={{ marginBottom: '2rem', color: '#ccc' }}>Be the first to see our Winter Drop and get exclusive access to sales.</p>
                <div style={{ maxWidth: '500px', margin: '0 auto', display: 'flex' }}>
                    <input type="email" placeholder="Your email address" style={{ padding: '1rem', flex: 1, border: 'none', outline: 'none' }} />
                    <button style={{ padding: '1rem 2rem', background: '#8a6d3b', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>SUBSCRIBE</button>
                </div>
            </section>
        </div>
    );
};

export default AutumnCollection;
