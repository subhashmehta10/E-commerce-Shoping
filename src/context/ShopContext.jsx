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
    const [orders, setOrders] = useState(() => {
        const saved = localStorage.getItem('orders');
        if (saved) return JSON.parse(saved);
        // Initial mock data
        return [
            {
                id: 'ORD-29834821',
                date: '21 Jan 2026',
                total: 2499,
                status: 'processing',
                statusDisplay: 'Arriving Tomorrow',
                statusSubtext: 'Shipped via Express Courier',
                items: [
                    {
                        name: "Wireless Noise Cancelling Headphones",
                        desc: "Color: Midnight Black | Model: X4-Pro",
                        img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=300&q=80"
                    }
                ],
                actions: ['Track Order', 'Cancel']
            },
            {
                id: 'ORD-29834110',
                date: '15 Jan 2026',
                total: 899,
                status: 'delivered',
                statusDisplay: 'Delivered on Jan 18, 2026',
                statusSubtext: 'Package left at front door',
                items: [
                    {
                        name: "Minimalist Cotton T-Shirt",
                        desc: "Size: M | Color: White",
                        img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=300&q=80"
                    }
                ],
                actions: ['Buy it again', 'Write a Review', 'Invoice']
            }
        ];
    });

    // Persist to local storage
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
    }, [wishlistItems]);

    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(orders));
    }, [orders]);

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

    // --- Order Actions ---
    const cancelOrder = (orderId) => {
        setOrders(prev => prev.map(order => {
            if (order.id === orderId) {
                return {
                    ...order,
                    status: 'cancelled',
                    statusDisplay: 'Cancelled',
                    statusSubtext: `Cancelled on ${new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}`,
                    actions: ['View Details']
                };
            }
            return order;
        }));
    };

    return (
        <ShopContext.Provider value={{
            cartItems,
            wishlistItems,
            orders,
            addToCart,
            removeFromCart,
            updateCartQuantity,
            clearCart,
            addToWishlist,
            removeFromWishlist,
            isInWishlist,
            cancelOrder
        }}>
            {children}
        </ShopContext.Provider>
    );
};

export const useShop = () => useContext(ShopContext);
