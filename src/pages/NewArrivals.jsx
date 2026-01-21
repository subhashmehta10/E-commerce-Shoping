import React, { useEffect, useState } from 'react';
import './Category.css';

// Reuse category CSS but add specific styles inline or via style tag for speed/impact
const newProducts = [
    { id: 1, name: 'Urban Cargo Pants', brand: 'H&M', price: 2999, img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=500&q=80', tag: 'TRENDING', category: 'Clothing' },
    { id: 2, name: 'Minimalist Watch', brand: 'Fossil', price: 8999, img: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=500&q=80', tag: 'NEW', category: 'Accessories' },
    { id: 3, name: 'Overseized Hoodie', brand: 'Zara', price: 3499, img: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=500&q=80', tag: 'HOT', category: 'Clothing' },
    { id: 4, name: 'Leather Crossbody', brand: 'Coach', price: 15499, img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=500&q=80', tag: 'NEW', category: 'Accessories' },
    { id: 5, name: 'Suede Loafers', brand: 'Clarks', price: 5999, img: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=500&q=80', tag: 'JUST IN', category: 'Accessories' },
    { id: 6, name: 'Wireless Earbuds Pro', brand: 'Samsung', price: 12999, img: 'https://images.unsplash.com/photo-1572569028738-411a0977d716?auto=format&fit=crop&w=500&q=80', tag: 'TECH', category: 'Accessories' },
    { id: 7, name: 'Floral Summer Dress', brand: 'Forever 21', price: 1999, img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=500&q=80', tag: 'SEASONAL', category: 'Clothing' },
    { id: 8, name: 'Smart Fitness Band', brand: 'Fitbit', price: 4500, img: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=500&q=80', tag: 'NEW', category: 'Accessories' },
];

const NewArrivals = () => {
    // Multiply content heavily to ensure we have enough to "load more"
    const content = [...newProducts, ...newProducts, ...newProducts, ...newProducts, ...newProducts, ...newProducts]
        .map((item, i) => ({ ...item, id: i }));

    const [visibleCount, setVisibleCount] = useState(12); // Initial count
    const [activeCategory, setActiveCategory] = useState('All');

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 12); // Load 12 more
    };

    const filteredContent = activeCategory === 'All'
        ? content
        : content.filter(item => item.category === activeCategory);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const buttonStyle = (category) => ({
        padding: '0.8rem 1.5rem',
        border: activeCategory === category ? '1px solid #333' : '1px solid #eee',
        background: 'transparent',
        cursor: 'pointer',
        fontWeight: activeCategory === category ? 'bold' : 'normal',
        color: activeCategory === category ? '#000' : '#777',
        transition: 'all 0.3s ease'
    });

    return (
        <div style={{ background: '#fff', minHeight: '100vh', paddingBottom: '4rem' }}>
            <div className="new-hero" style={{
                position: 'relative',
                height: '60vh',
                background: 'url(https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1500&q=80) no-repeat center center/cover',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: 'white',
                marginBottom: '4rem'
            }}>
                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '2rem', borderRadius: '8px', backdropFilter: 'blur(5px)' }}>
                    <span style={{ letterSpacing: '4px', textTransform: 'uppercase', fontSize: '1rem', display: 'block', marginBottom: '1rem' }}>The Latest Drop</span>
                    <h1 style={{ fontSize: '3.5rem', fontFamily: 'serif', marginBottom: '1rem' }}>New Arrivals</h1>
                    <p style={{ fontSize: '1.2rem', maxWidth: '600px' }}>Fresh styles just landed. Be the first to shop the latest trends.</p>
                </div>
            </div>

            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>Just Dropped</h2>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button
                            onClick={() => setActiveCategory('All')}
                            style={buttonStyle('All')}
                        >
                            All
                        </button>
                        <button
                            onClick={() => setActiveCategory('Clothing')}
                            style={buttonStyle('Clothing')}
                        >
                            Clothing
                        </button>
                        <button
                            onClick={() => setActiveCategory('Accessories')}
                            style={buttonStyle('Accessories')}
                        >
                            Accessories
                        </button>
                    </div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {filteredContent.slice(0, visibleCount).map((item) => (
                        <div key={item.id} className="new-card" style={{ cursor: 'pointer' }}>
                            <div style={{ position: 'relative', height: '350px', overflow: 'hidden', borderRadius: '4px', marginBottom: '1rem' }}>
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                                />
                                <span style={{
                                    position: 'absolute',
                                    top: '12px',
                                    left: '12px',
                                    background: 'black',
                                    color: 'white',
                                    padding: '4px 10px',
                                    fontSize: '0.75rem',
                                    fontWeight: 'bold',
                                    letterSpacing: '1px'
                                }}>{item.tag}</span>
                            </div>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <div>
                                        <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.3rem', color: '#333' }}>{item.name}</h3>
                                        <span style={{ fontSize: '0.9rem', color: '#777' }}>{item.brand}</span>
                                    </div>
                                    <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>₹{item.price.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                {visibleCount < filteredContent.length && (
                    <button
                        onClick={handleLoadMore}
                        style={{
                            padding: '1rem 3rem',
                            background: '#111',
                            color: 'white',
                            border: 'none',
                            fontSize: '1rem',
                            letterSpacing: '2px',
                            cursor: 'pointer',
                            fontFamily: 'serif'
                        }}>
                        LOAD MORE
                    </button>
                )}
            </div>
        </div>
    );
};

export default NewArrivals;
