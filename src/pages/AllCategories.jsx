import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AllCategories.css';

const categories = [
    { id: 1, title: 'Mobiles & Tablets', link: '/mobiles', img: 'https://images.unsplash.com/photo-1592899677712-a855869fe1ee?auto=format&fit=crop&w=600&q=80', desc: 'Latest smartphones and accessories' },
    { id: 2, title: 'Electronics', link: '/category/electronics', img: 'https://images.unsplash.com/photo-1498049860654-af1a5c5668ba?auto=format&fit=crop&w=600&q=80', desc: 'Laptops, Cameras, Headphones & more' },
    { id: 3, title: 'Fashion', link: '/category/fashion', img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80', desc: 'Trendy clothing, shoes & bags' },
    { id: 4, title: 'Home & Furniture', link: '/category/furniture', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80', desc: 'Furniture, Decor & Lighting' },
    { id: 5, title: 'Appliances', link: '/category/appliances', img: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=600&q=80', desc: 'TVs, Washing Machines, ACs' },
    { id: 6, title: 'Beauty & Personal Care', link: '/category/beauty', img: 'https://images.unsplash.com/photo-1596462502278-27bfdd403348?auto=format&fit=crop&w=600&q=80', desc: 'Makeup, Skincare, Grooming' },
    { id: 7, title: 'Grocery', link: '/category/grocery', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80', desc: 'Daily essentials, Food & Beverages' },
    { id: 8, title: 'Flights & Travel', link: '/category/flights', img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80', desc: 'Book flights, hotels & packages' },
    { id: 9, title: 'Toys & Baby', link: '/shop', img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6047?auto=format&fit=crop&w=600&q=80', desc: 'Toys, Diapers, Baby Gear' },
    { id: 10, title: 'Sports & Fitness', link: '/shop', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80', desc: 'Gym equipment, Sportswear' },
    { id: 11, title: 'Books & Stationery', link: '/shop', img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80', desc: 'Bestsellers, Academic, Art Supplies' },
    { id: 12, title: 'Gift Cards', link: '/giftcards', img: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80', desc: 'The perfect gift for everyone' }
];

const AllCategories = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="all-categories-page">
            <div className="categories-header">
                <h1>All Categories</h1>
                <p>Explore our wide range of products across diverse categories.</p>
            </div>

            <div className="all-categories-grid">
                {categories.map((cat) => (
                    <Link to={cat.link} key={cat.id} className="category-browse-card">
                        <div className="cat-card-img-container">
                            <img src={cat.img} alt={cat.title} className="cat-card-img" />
                            <div className="cat-card-overlay">
                                <span className="shop-now-text">Shop Now</span>
                            </div>
                        </div>
                        <div className="cat-card-info">
                            <h3>{cat.title}</h3>
                            <p>{cat.desc}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default AllCategories;
