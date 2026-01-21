import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryBar.css';

const categories = [
    { id: 1, label: 'Minutes', img: 'https://cdn-icons-png.flaticon.com/512/2972/2972185.png' }, // Scooter/Fast delivery
    { id: 2, label: 'Mobiles', img: 'https://cdn-icons-png.flaticon.com/512/644/644458.png' }, // Mobile
    { id: 3, label: 'Appliances', img: 'https://cdn-icons-png.flaticon.com/512/3659/3659899.png' }, // Washing machine
    { id: 4, label: 'Electronics', img: 'https://cdn-icons-png.flaticon.com/512/2983/2983785.png' }, // Laptop
    { id: 5, label: 'Fashion', img: 'https://cdn-icons-png.flaticon.com/512/3050/3050253.png' }, // Clothes
    { id: 6, label: 'Home', img: 'https://cdn-icons-png.flaticon.com/512/1117/1117282.png' }, // Home/Plant
    { id: 7, label: 'Beauty', img: 'https://cdn-icons-png.flaticon.com/512/3163/3163236.png' }, // Cosmetics
    { id: 8, label: 'Furniture', img: 'https://cdn-icons-png.flaticon.com/512/2610/2610534.png' }, // Sofa
    { id: 9, label: 'Flights', img: 'https://cdn-icons-png.flaticon.com/512/723/723955.png' }, // Plane
    { id: 10, label: 'Grocery', img: 'https://cdn-icons-png.flaticon.com/512/3082/3082060.png' }, // Grocery
];

const CategoryBar = () => {
    return (
        <div className="category-bar">
            {categories.map((cat) => {
                const path = cat.label === 'Mobiles' ? '/mobiles' : `/category/${cat.label.toLowerCase()}`;
                return (
                    <Link to={path} key={cat.id} className="category-item">
                        <div className="cat-img-box">
                            <img src={cat.img} alt={cat.label} className="cat-img" />
                        </div>
                        <span className="category-label">{cat.label}</span>
                    </Link>
                );
            })}
        </div>
    );
};

export default CategoryBar;
