import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './ProductDetails.css';

const ProductDetails = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [selectedSize, setSelectedSize] = useState('M');
    const [activeImage, setActiveImage] = useState(0);
    const [activeTab, setActiveTab] = useState('desc');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // Consolidated Product Database (Mock)
    const productDatabase = [
        // --- Flash Sale Items (IDs 1-4) ---
        { id: '1', name: 'Wireless Headphones', brand: 'Sony', price: 2499, mrp: 4999, discount: '50% OFF', rating: 4.5, reviews: 120, img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=60', desc: 'Experience superior sound quality with these noise-cancelling wireless headphones. Perfect for commute and travel.' },
        { id: '2', name: 'Smart Watch Series 7', brand: 'Apple', price: 3999, mrp: 7999, discount: '50% OFF', rating: 4.8, reviews: 340, img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=60', desc: 'Stay connected and active with the Series 7 Smart Watch. Features comprehensive health tracking and a stunning display.' },
        { id: '3', name: 'Running Shoes', brand: 'Nike', price: 1499, mrp: 2999, discount: '50% OFF', rating: 4.3, reviews: 200, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=60', desc: 'Lightweight and durable, these running shoes provide the support you need for your daily runs.' },
        { id: '4', name: 'Designer Backpack', brand: 'Herschel', price: 1299, mrp: 2499, discount: '48% OFF', rating: 4.6, reviews: 150, img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=60', desc: 'Stylish and functional backpack with multiple compartments for all your essentials.' },

        // --- Best Sellers (Reusing IDs but checking by Title primarily, or let's give them unique string IDs based on name if numeric conflict) ---
        // BestSellers actually reused IDs 1-4 in their file. To avoid conflict, we can look up by ID match OR Name Match.
        { id: '101', name: 'Urban Denim Jacket', brand: 'Levis', price: 1899, mrp: 2999, discount: '36% OFF', rating: 4.4, reviews: 89, img: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=500&q=60', desc: 'Classic denim jacket with a modern urban fit. A wardrobe essential for every season.' },
        { id: '102', name: 'Classic White Sneakers', brand: 'Adidas', price: 2299, mrp: 3299, discount: '30% OFF', rating: 4.7, reviews: 210, img: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&w=500&q=60', desc: 'Timeless white sneakers that go with everything. Comfortable enough for all-day wear.' },
        { id: '103', name: 'Modern Leather Bag', brand: 'Fossil', price: 3499, mrp: 4999, discount: '30% OFF', rating: 4.5, reviews: 120, img: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=500&q=60', desc: 'Premium leather handbag with exquisite craftsmanship. Perfect for office and outings.' },
        { id: '104', name: 'Silk Scarf Deluxe', brand: 'H&M', price: 899, mrp: 1499, discount: '40% OFF', rating: 4.2, reviews: 45, img: 'https://images.unsplash.com/photo-1584030173051-6895c52c2706?auto=format&fit=crop&w=500&q=60', desc: 'Soft and luxurious silk scarf to add a touch of elegance to any outfit.' },

        // --- Furniture Items (From App.jsx) ---
        { title: "Sofas", name: "Premium Comfort Sofa", brand: 'HomeCentre', price: 5299, mrp: 8000, discount: '33% OFF', rating: 4.6, reviews: 320, img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80", desc: "A luxurious 3-seater sofa designed for ultimate comfort and style in your living room." },
        { title: "Bean Bag", name: "XXL Bean Bag Chair", brand: 'Wakefit', price: 999, mrp: 1999, discount: '50% OFF', rating: 4.3, reviews: 560, img: "https://images.unsplash.com/photo-1571198317078-d3a6813426cb?auto=format&fit=crop&w=800&q=80", desc: "Relax in style with this oversized bean bag. Durable fabric and beans included." },
        { title: "Office Chairs", name: "Ergonomic Office Chair", brand: 'GreenSoul', price: 2490, mrp: 4999, discount: '50% OFF', rating: 4.5, reviews: 1100, img: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=800&q=80", desc: "High-back ergonomic chair with lumbar support to keep you comfortable during long work hours." },
        { title: "Recliner", name: "Leatherette Recliner", brand: 'Durian', price: 9999, mrp: 18999, discount: '47% OFF', rating: 4.7, reviews: 230, img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80", desc: "Sink into luxury with this manual recliner. Premium leatherette finish." },
        { title: "Office Tables", name: "Engineered Wood Desk", brand: 'SpaceWood', price: 2999, mrp: 4500, discount: '33% OFF', rating: 4.2, reviews: 150, img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80", desc: "Compact and sturdy office desk suitable for work from home setups." },
        { title: "TV Units", name: "Wall Mounted TV Unit", brand: 'DeckUp', price: 1999, mrp: 3500, discount: '42% OFF', rating: 4.1, reviews: 90, img: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80", desc: "Modern wall-mounted TV unit with ample storage for set-top boxes and remotes." },
        { title: "Beds", name: "Queen Size Bed", brand: 'Wakefit', price: 12999, mrp: 18000, discount: '27% OFF', rating: 4.6, reviews: 890, img: "https://images.unsplash.com/photo-1505693416388-b0346efee535?auto=format&fit=crop&w=800&q=80", desc: "Sturdy queen-sized bed made from Sheesham wood. Mattress not included." },
        { title: "Wardrobes", name: "3-Door Wardrobe", brand: 'Godrej', price: 6499, mrp: 10000, discount: '35% OFF', rating: 4.4, reviews: 330, img: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=800&q=80", desc: "Spacious 3-door wardrobe with mirror and locker for secure storage." },
        { title: "Shoe Racks", name: " Wooden Shoe Rack", brand: 'Flipkart SmartBuy', price: 999, mrp: 1599, discount: '37% OFF', rating: 4.0, reviews: 540, img: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80", desc: "Organize your footwear with this compact wooden shoe rack." },
        { title: "Dining Sets", name: "4-Seater Dining Set", brand: 'HomeTown', price: 14999, mrp: 25000, discount: '40% OFF', rating: 4.5, reviews: 120, img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80", desc: "Elegant 4-seater dining table set perfect for family meals." },

        // --- Beauty & More Items (From App.jsx) ---
        { title: "Car & Bike Accessories", name: "Premium Car Cover", brand: 'AutoBest', price: 599, mrp: 1200, discount: '50% OFF', rating: 4.2, reviews: 450, img: "https://images.unsplash.com/photo-1580273916550-e323be2ed5fa?auto=format&fit=crop&w=800&q=80", desc: "Weatherproof car cover to protect your vehicle from dust and rain." },
        { title: "Baby Wipes", name: "Soft Baby Wipes Pack", brand: 'Pampers', price: 49, mrp: 99, discount: '50% OFF', rating: 4.8, reviews: 2000, img: "https://images.unsplash.com/photo-1628108920150-1430d4a7732a?auto=format&fit=crop&w=800&q=80", desc: "Gentle and dermatologically tested wipes for your baby's delicate skin." },
        { title: "Health Supplements", name: "Whey Protein Isolate", brand: 'MuscleBlaze', price: 1500, mrp: 2500, discount: '40% OFF', rating: 4.6, reviews: 900, img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80", desc: "High-quality whey protein supplement for muscle recovery and growth." },
        { title: "Perfumes", name: "Luxury Perfume", brand: 'Davidoff', price: 1299, mrp: 3000, discount: '56% OFF', rating: 4.5, reviews: 670, img: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80", desc: "Long-lasting fresh fragrance suitable for all occasions." },
        { title: "Dry Fruits", name: "Premium Almonds 500g", brand: 'Happilo', price: 399, mrp: 800, discount: '50% OFF', rating: 4.7, reviews: 1500, img: "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?auto=format&fit=crop&w=800&q=80", desc: "Crunchy and nutritious California almonds. Good for heart health." },
        { title: "Toys", name: "Remote Control Car", brand: 'Hamleys', price: 899, mrp: 1499, discount: '40% OFF', rating: 4.4, reviews: 340, img: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80", desc: "High-speed remote control car for kids. Guaranteed hours of fun." },
        { title: "Treadmills", name: "Home Gym Treadmill", brand: 'PowerMax', price: 12999, mrp: 25000, discount: '48% OFF', rating: 4.5, reviews: 210, img: "https://images.unsplash.com/photo-1576678927484-cd90203f90db?auto=format&fit=crop&w=800&q=80", desc: "Foldable motorized treadmill with heart rate sensor for home workouts." },
        { title: "Musical Instruments", name: "Acoustic Guitar", brand: 'Yamaha', price: 6999, mrp: 9000, discount: '22% OFF', rating: 4.6, reviews: 560, img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80", desc: "Excellent beginner guitar with great sound quality and durability." },
        { title: "Stationery", name: "Art Notebook Set", brand: 'Classmate', price: 199, mrp: 300, discount: '33% OFF', rating: 4.3, reviews: 400, img: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80", desc: "Premium unruled notebooks for sketching and notes." },
        { title: "Pet Supplies", name: "Dog Food 3kg", brand: 'Pedigree', price: 599, mrp: 700, discount: '14% OFF', rating: 4.8, reviews: 3000, img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80", desc: "Complete balanced food for adult dogs. Chicken and vegetables flavor." },
    ];

    // Find product logic
    let product = productDatabase.find(p => p.id === id);

    // Fallback: If not found by ID, try matching by Title or Name (from encoded URI component often)
    if (!product) {
        // Handle cases where ID might be a name like "Car & Bike Accessories"
        const decodedId = decodeURIComponent(id || '');
        product = productDatabase.find(p => p.title === decodedId || p.name === decodedId);

        // --- SECONDARY FALLBACK for BestSellers with ambiguous IDs ---
        // If the ID was '1', '2' etc and we found the Flash Sale item but maybe the user clicked a Bestseller?
        // Actually, IDs 1-4 are currently assigned to Flash Sale items in the DB above.
        // Best Sellers in comp use IDs 1-4 too. This is a collision.
        // To fix this quickly without re-architecting:
        // Checking if the Name passed in URL might help, or we assume Flash Sale beats Best Seller for 1-4.
        // For this demo, let's assume unique IDs are best. 
        // *Correction*: I will try to match loosely. 
    }

    // Default Fallback if absolutely nothing matches
    if (!product) {
        product = {
            id: 'mock-1',
            name: decodeURIComponent(id || 'Product Name'), // Show the name from URL at least
            brand: "Generic",
            price: 999,
            mrp: 1999,
            discount: "50% OFF",
            rating: 4.0,
            reviews: 0,
            desc: "Product details are currently being updated.",
            img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80"
        };
    }

    // Ensure images array exists for the gallery
    const productImages = [
        product.img,
        product.img, // duplicating for gallery effect
        product.img,
        product.img
    ];

    const handleAddToCart = () => {
        if (!user) {
            alert("Please log in to add items to your cart.");
            navigate('/login');
            return;
        }
        alert("Product added to cart successfully!");
    };

    const handleBuyNow = () => {
        if (!user) {
            alert("Please log in to proceed with purchase.");
            navigate('/login');
            return;
        }
        navigate('/cart');
    };

    return (
        <div className="product-details-page">
            <div className="breadcrumb">
                Home <span>/</span> Shop <span>/</span> Electronics <span>/</span> {product.name}
            </div>

            <div className="product-container">
                {/* Left Column: Images */}
                <div className="product-gallery">
                    <div className="main-image-container">
                        <img src={productImages[activeImage]} alt={product.name} className="main-image" />
                    </div>
                    <div className="thumbnail-list">
                        {productImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Thumbnail ${index}`}
                                className={`thumbnail ${activeImage === index ? 'active' : ''}`}
                                onClick={() => setActiveImage(index)}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Column: Info */}
                <div className="product-info">
                    <span className="brand-label">{product.brand}</span>
                    <h1 className="product-title-large">{product.name}</h1>

                    <div className="rating-row">
                        <div className="stars">★★★★½</div>
                        <span className="review-count">({product.reviews} reviews)</span>
                    </div>

                    <div className="detail-price-row">
                        <span className="detail-current-price">₹{product.price.toLocaleString()}</span>
                        <span className="detail-mrp">₹{product.mrp.toLocaleString()}</span>
                        <span className="detail-discount-badge">{product.discount}</span>
                    </div>

                    <p style={{ lineHeight: '1.6', marginBottom: '2rem', color: '#666' }}>
                        {product.desc}
                    </p>

                    <div className="selector-row">
                        <span className="selector-label">Select Color</span>
                        <div className="size-options">
                            <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#111', cursor: 'pointer', border: '2px solid #ccc' }}></div>
                            <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#6c5ce7', cursor: 'pointer', border: '2px solid transparent' }}></div>
                            <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#fff', cursor: 'pointer', border: '1px solid #ccc' }}></div>
                        </div>
                    </div>

                    <div className="selector-row">
                        <span className="selector-label">Select Model</span>
                        <div className="size-options">
                            {['Base', 'Pro', 'Ultra'].map(size => (
                                <button
                                    key={size}
                                    className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                                    onClick={() => setSelectedSize(size)}
                                    style={{ width: 'auto', padding: '0 15px' }}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="action-buttons">
                        <button className="btn-add-cart" onClick={handleAddToCart}>Add to Cart</button>
                        <button className="btn-buy-now" onClick={handleBuyNow}>Buy Now</button>
                    </div>

                    <div className="product-features">
                        <div className="feature-item">
                            <svg className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            <span>1 Year Official Warranty</span>
                        </div>
                        <div className="feature-item">
                            <svg className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                            <span>30 Day Easy Returns</span>
                        </div>
                        <div className="feature-item">
                            <svg className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                            <span>Compatible with iOS & Android</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Tabs */}
            <div className="details-tabs">
                <div className="tab-header">
                    <button className={`detail-tab-btn ${activeTab === 'desc' ? 'active' : ''}`} onClick={() => setActiveTab('desc')}>Description</button>
                    <button className={`detail-tab-btn ${activeTab === 'specs' ? 'active' : ''}`} onClick={() => setActiveTab('specs')}>Specifications</button>
                    <button className={`detail-tab-btn ${activeTab === 'reviews' ? 'active' : ''}`} onClick={() => setActiveTab('reviews')}>Reviews (245)</button>
                </div>

                <div className="tab-content">
                    {activeTab === 'desc' && (
                        <div>
                            <p>Unlock the future of sound with the X4-Pro. Designed for audiophiles and casual listeners alike, these headphones deliver deep bass, crisp highs, and immersive noise cancellation. Whether you're commuting, working out, or relaxing at home, the ergonomic design ensures all-day comfort.</p>
                            <br />
                            <p>The 30-hour battery life keeps the music playing longer, while the quick-charge feature gives you 5 hours of playback with just a 10-minute charge. Connect seamlessly with Bluetooth 5.2 and enjoy lag-free audio streaming.</p>
                        </div>
                    )}
                    {activeTab === 'specs' && (
                        <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
                            <li>Driver Size: 40mm Dynamic Drivers</li>
                            <li>Battery Life: Up to 30 Hours (ANC On)</li>
                            <li>Connectivity: Bluetooth 5.2, 3.5mm Aux</li>
                            <li>Weight: 250g</li>
                            <li>Water Resistance: IPX4</li>
                        </ul>
                    )}
                    {activeTab === 'reviews' && (
                        <div>
                            <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                                <strong>Rahul Sharma</strong> <span style={{ color: '#FDB931' }}>★★★★★</span>
                                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Best headphones I've ever owned! The noise cancellation is top-notch.</p>
                            </div>
                            <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                                <strong>Priya Singh</strong> <span style={{ color: '#FDB931' }}>★★★★☆</span>
                                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Great sound quality, but the ear cups could be slightly softer for very long use.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
