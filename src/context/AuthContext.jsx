import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth, db } from '../firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Listen for auth state changes
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                // User is signed in, fetch additional details from Firestore
                try {
                    const userDocRef = doc(db, "users", firebaseUser.uid);
                    const userDoc = await getDoc(userDocRef);

                    if (userDoc.exists()) {
                        setUser({ ...firebaseUser, ...userDoc.data() });
                    } else {
                        // Fallback if firestore doc doesn't exist (shouldn't happen mainly)
                        setUser(firebaseUser);
                    }
                } catch (error) {
                    console.error("Error fetching user data:", error);
                    setUser(firebaseUser);
                }
            } else {
                // User is signed out
                setUser(null);
            }
            setLoading(false);
        });

        return unsubscribe; // Cleanup subscription on unmount
    }, []);

    const signup = async (userData) => {
        try {
            // 1. Create user in Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
            const user = userCredential.user;

            // 2. Update Display Name in Auth Profile
            await updateProfile(user, {
                displayName: userData.name
            });

            // 3. Store additional user data in Firestore
            const newUserProfile = {
                uid: user.uid,
                name: userData.name,
                email: userData.email,
                avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80", // Default or random
                joined: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
                role: 'user' // Default role
            };

            await setDoc(doc(db, "users", user.uid), newUserProfile);

            // State update handled by onAuthStateChanged
            return newUserProfile;
        } catch (error) {
            console.error("Signup Error:", error);
            throw error; // Throw to be caught by the calling component
        }
    };

    const login = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // State update handled by onAuthStateChanged
        } catch (error) {
            console.error("Login Error:", error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error("Logout Error:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
