import React, { useState, useRef, useEffect } from 'react';
import './SupportChat.css';

const SupportChat = ({ onClose, initialMessage }) => {
    const [messages, setMessages] = useState([
        { id: 1, text: "👋 Hi there! Welcome to ShopNova Support.", sender: 'bot' },
        { id: 2, text: "How can help you today?", sender: 'bot' }
    ]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    // Auto-scroll to bottom of chat
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    // Focus input on mount
    useEffect(() => {
        inputRef.current?.focus();
        // Add initial message passed from prop if any and it's not already there
        if (initialMessage && !messages.some(m => m.text === initialMessage)) {
            // Optional: handle initial context if needed
        }
    }, []);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        // Add user message
        const userMsg = { id: Date.now(), text: inputText, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInputText('');
        setIsTyping(true);

        // Simulate bot response
        setTimeout(() => {
            const botResponses = [
                "Detailed answer coming up!",
                "Let me check that for you.",
                "Could you provide more details?",
                "I'm connecting you with a live agent...",
                "Thanks for reaching out! One moment please."
            ];
            const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];

            const botMsg = { id: Date.now() + 1, text: randomResponse, sender: 'bot' };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="chat-widget">
            <div className="chat-header">
                <div className="chat-title">
                    <div className="agent-avatar">
                        <span>CS</span>
                    </div>
                    <div className="chat-info">
                        <h3>ShopNova Support</h3>
                        <span>We typically reply in minutes</span>
                    </div>
                </div>
                <button className="close-chat-btn" onClick={onClose} aria-label="Close Chat">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>

            <div className="chat-messages">
                {messages.map((msg) => (
                    <div key={msg.id} className={`message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}

                {isTyping && (
                    <div className="typing-indicator">
                        <div className="typing-dot"></div>
                        <div className="typing-dot"></div>
                        <div className="typing-dot"></div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <form className="chat-input-area" onSubmit={handleSendMessage}>
                <input
                    ref={inputRef}
                    type="text"
                    className="chat-input"
                    placeholder="Type a message..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <button type="submit" className="send-btn" disabled={!inputText.trim()}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
            </form>
        </div>
    );
};

export default SupportChat;
