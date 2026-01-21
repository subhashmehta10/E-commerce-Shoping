import React from 'react';
import { Navigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './ProtectedRoute.css';

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    const location = useLocation();

    if (!user) {
        return (
            <div className="protected-route-container">
                <div className="protected-content">
                    <div className="lock-icon">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                    </div>
                    <h2>Login Required</h2>
                    <p>Please login to view this page</p>
                    <Link to="/login" state={{ from: location }} className="login-button">
                        Login Now
                    </Link>
                </div>
            </div>
        );
    }

    return children;
};

export default ProtectedRoute;
