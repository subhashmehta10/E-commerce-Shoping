import React, { createContext, useState, useContext, useEffect } from 'react';

const ShopContext = createContext(null);

export const ShopProvider = ({ children }) => {
    // Initial State: Load from localStorage or start empty
    // const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    // const storedWishlist = JSON.parse(localStorage.getItem('wishlistItems')) || [];

    const [cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem('cartItems');
        return saved ? JSON.parse(saved) : [];
    });
    const [wishlistItems, setWishlistItems] = useState(() => {
        const saved = localStorage.getItem('wishlistItems');
        return saved ? JSON.parse(saved) : [];
    });

    // Persist to local storage
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
    }, [wishlistItems]);

    // --- Cart Actions ---
    const addToCart = (product, quantity = 1, size = null, color = null) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            } else {
                return [...prev, { ...product, quantity, size, color }];
            }
        });
    };

    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const updateCartQuantity = (id, change) => {
        setCartItems(prev => prev.map(item => {
            if (item.id === id) {
                const newQty = item.quantity + change;
                return newQty > 0 ? { ...item, quantity: newQty } : item;
            }
            return item;
        }));
    };

    const clearCart = () => setCartItems([]);

    // --- Wishlist Actions ---
    const addToWishlist = (product) => {
        setWishlistItems(prev => {
            if (prev.find(item => item.id === product.id)) return prev;
            return [...prev, product];
        });
    };

    const removeFromWishlist = (id) => {
        setWishlistItems(prev => prev.filter(item => item.id !== id));
    };

    const isInWishlist = (id) => {
        return !!wishlistItems.find(item => item.id === id);
    };

    return (
        <ShopContext.Provider value={{
            cartItems,
            wishlistItems,
            addToCart,
            removeFromCart,
            updateCartQuantity,
            clearCart,
            addToWishlist,
            removeFromWishlist,
            isInWishlist
        }}>
            {children}
        </ShopContext.Provider>
    );
};

export const useShop = () => useContext(ShopContext);
