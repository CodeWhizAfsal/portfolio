import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import './Chatbot.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi there! I'm Afsal's virtual assistant. How can I help you today?", sender: 'bot' }
    ]);
    const [inputText, setInputText] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSendMessage = (text) => {
        const userText = text || inputText.trim();
        if (!userText) return;

        // Add User Message
        const newUserMsg = { id: messages.length + 1, text: userText, sender: 'user' };
        setMessages((prev) => [...prev, newUserMsg]);
        setInputText('');

        // Simulate Bot Response
        setTimeout(() => {
            const botResponse = getBotResponse(userText);
            setMessages((prev) => [...prev, { id: prev.length + 1, text: botResponse, sender: 'bot' }]);
        }, 600);
    };

    const getBotResponse = (input) => {
        const lowerInput = input.toLowerCase();

        if (lowerInput.includes('who') || lowerInput.includes('about')) {
            return "I'm Afsal Majeed, a Backend Developer and Cloud Enthusiast studying at IIT Hyderabad. I specialize in building scalable systems using Python, FastAPI, and Cloud technologies.";
        }
        if (lowerInput.includes('skill') || lowerInput.includes('stack')) {
            return "My tech stack includes React, Vite, TailwindCSS for frontend, and Python, FastAPI, Docker for backend. I'm also experienced with GCP and AWS.";
        }
        if (lowerInput.includes('project') || lowerInput.includes('work')) {
            return "I've worked on scalable APIs at GAIAN Solutions and led cloud initiatives at GDSC. Check out the Projects page for more!";
        }
        if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('reach')) {
            return "You can reach me via the Contact page or email me directly at my official email address.";
        }
        if (lowerInput.includes('hire') || lowerInput.includes('job')) {
            return "I am currently open to opportunities! Please get in touch via the Contact section.";
        }

        return "That's a great question! While I'm just a simple bot, you can browse my portfolio to find out more, or use the 'Contact' page to get in touch.";
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSendMessage();
    };

    const quickReplies = [
        "Tell me about yourself",
        "What are your skills?",
        "Show me your projects",
        "How do I contact you?"
    ];

    return (
        <div className="chatbot-container">
            {isOpen && (
                <div className="chatbot-window">
                    <div className="chat-header">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Bot size={20} />
                            <h3>Afsal's Assistant</h3>
                        </div>
                        <button className="close-btn" onClick={toggleChat}>
                            <X size={20} />
                        </button>
                    </div>

                    <div className="chat-messages">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`message ${msg.sender}`}>
                                {msg.text}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />

                        {/* Show quick replies only if last message was from bot */}
                        {messages[messages.length - 1].sender === 'bot' && (
                            <div className="quick-replies">
                                {quickReplies.map((reply, idx) => (
                                    <button
                                        key={idx}
                                        className="quick-reply-btn"
                                        onClick={() => handleSendMessage(reply)}
                                    >
                                        {reply}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="chat-input-area">
                        <input
                            type="text"
                            className="chat-input"
                            placeholder="Ask me anything..."
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <button className="send-btn" onClick={() => handleSendMessage()}>
                            <Send size={18} />
                        </button>
                    </div>
                </div>
            )}

            <button className="chatbot-toggle" onClick={toggleChat}>
                {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
            </button>
        </div>
    );
};

export default Chatbot;
