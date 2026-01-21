import React, { useState } from 'react';
import './AuthModal.css';
import '../pages/Auth.css'; // Reusing form styles

const AuthModal = ({ isOpen, onClose, initialMode = 'login' }) => {
    const [mode, setMode] = useState(initialMode); // 'login' or 'signup'

    // Form states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    // Phone auth states
    const [loginMethod, setLoginMethod] = useState('email'); // 'email' or 'phone'
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [showOtpInput, setShowOtpInput] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (mode === 'login' && loginMethod === 'phone') {
            if (!showOtpInput) {
                // Simulate sending OTP
                console.log(`Sending OTP to ${phoneNumber}`);
                setShowOtpInput(true);
                return;
            } else {
                // Verify OTP
                console.log(`Verifying OTP: ${otp}`);
                onClose();
                return;
            }
        }

        console.log(`Submitting ${mode} form`);
        onClose();
    };

    const switchMode = (newMode) => {
        setMode(newMode);
        setLoginMethod('email'); // Reset to email on mode switch
        setShowOtpInput(false);
    };

    return (
        <div className="auth-modal-overlay" onClick={onClose}>
            <div className="auth-modal-container" onClick={e => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>

                <div className="auth-header" style={{ marginBottom: '1.5rem' }}>
                    <div className="auth-logo" style={{ fontSize: '1.25rem' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                        </svg>
                        ShopNova
                    </div>
                    <h2 className="auth-title" style={{ fontSize: '1.5rem' }}>{mode === 'login' ? 'Welcome Back' : 'Create Account'}</h2>
                    <p className="auth-subtitle">
                        {mode === 'login' ? 'Please enter your details to sign in' : 'Join us to explore premium products'}
                    </p>
                </div>

                {mode === 'login' && (
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid #e2e8f0' }}>
                        <button
                            onClick={() => setLoginMethod('email')}
                            style={{
                                padding: '0.5rem 1rem',
                                background: 'none',
                                border: 'none',
                                borderBottom: loginMethod === 'email' ? '2px solid #0f172a' : '2px solid transparent',
                                color: loginMethod === 'email' ? '#0f172a' : '#64748b',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                        >
                            Email
                        </button>
                        <button
                            onClick={() => setLoginMethod('phone')}
                            style={{
                                padding: '0.5rem 1rem',
                                background: 'none',
                                border: 'none',
                                borderBottom: loginMethod === 'phone' ? '2px solid #0f172a' : '2px solid transparent',
                                color: loginMethod === 'phone' ? '#0f172a' : '#64748b',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                        >
                            Phone Number
                        </button>
                    </div>
                )}

                <form className="auth-form" onSubmit={handleSubmit}>
                    {mode === 'signup' && (
                        <div className="form-group">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-input"
                                placeholder="John Doe"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                    )}

                    {loginMethod === 'email' || mode === 'signup' ? (
                        <>
                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-input"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <label className="form-label">Password</label>
                                    {mode === 'login' && (
                                        <span style={{ color: '#64748b', fontSize: '0.85rem', cursor: 'pointer' }}>Forgot?</span>
                                    )}
                                </div>
                                <input
                                    type="password"
                                    className="form-input"
                                    placeholder={mode === 'login' ? "••••••••" : "Create a password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </>
                    ) : (
                        // Phone Login Inputs
                        <>
                            {!showOtpInput ? (
                                <div className="form-group">
                                    <label className="form-label">Phone Number</label>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <input
                                            type="text"
                                            value="+91"
                                            readOnly
                                            className="form-input"
                                            style={{ width: '60px', textAlign: 'center' }}
                                        />
                                        <input
                                            type="tel"
                                            className="form-input"
                                            placeholder="98765 43210"
                                            value={phoneNumber}
                                            onChange={(e) => {
                                                const val = e.target.value.replace(/\D/g, '');
                                                if (val.length <= 10) setPhoneNumber(val);
                                            }}
                                            required
                                            style={{ flex: 1 }}
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div className="form-group">
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <label className="form-label">Enter OTP</label>
                                        <span onClick={() => setShowOtpInput(false)} style={{ color: '#0ea5e9', fontSize: '0.85rem', cursor: 'pointer' }}>Change Number</span>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-input"
                                        placeholder="Enter 4-digit OTP"
                                        value={otp}
                                        onChange={(e) => {
                                            const val = e.target.value.replace(/\D/g, '');
                                            if (val.length <= 4) setOtp(val);
                                        }}
                                        required
                                        style={{ letterSpacing: '4px', textAlign: 'center', fontSize: '1.2rem' }}
                                        autoFocus
                                    />
                                    <div style={{ textAlign: 'right', marginTop: '4px' }}>
                                        <span style={{ color: '#64748b', fontSize: '0.8rem' }}>Resend OTP in 30s</span>
                                    </div>
                                </div>
                            )}
                        </>
                    )}

                    <button type="submit" className="auth-btn">
                        {mode === 'signup'
                            ? 'Create Account'
                            : loginMethod === 'phone'
                                ? showOtpInput ? 'Verify & Login' : 'Send OTP'
                                : 'Sign In'
                        }
                    </button>
                </form>

                <div className="social-login" style={{ margin: '1.5rem 0' }}>
                    <span className="social-text">Or {mode === 'login' ? 'continue' : 'sign up'} with</span>
                    <div className="social-buttons" style={{ marginTop: '1rem' }}>
                        <button className="social-btn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            Facebook
                        </button>
                        <button className="social-btn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                            Google
                        </button>
                    </div>
                </div>

                <div className="auth-footer">
                    {mode === 'login' ? "Don't have an account?" : "Already have an account?"}
                    <span
                        className="auth-link"
                        style={{ cursor: 'pointer' }}
                        onClick={() => switchMode(mode === 'login' ? 'signup' : 'login')}
                    >
                        {mode === 'login' ? 'Sign Up' : 'Log In'}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
