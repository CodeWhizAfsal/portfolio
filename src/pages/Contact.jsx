import { Mail, Github, Linkedin, Twitter, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formState, setFormState] = useState('idle'); // idle, submitting, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState('submitting');

        // Simulate API call
        setTimeout(() => {
            setFormState('success');
        }, 1500);
    };

    return (
        <div className="contact-page section fade-in">
            <div className="container contact-container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="contact-intro">
                    I'm currently open to Backend, Cloud, and AI engineering roles.
                    Feel free to reach out for collaborations or just a friendly hello!
                </p>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="info-cards-stack">
                            <div className="info-card highlight">
                                <div className="info-icon">
                                    <Mail />
                                </div>
                                <div>
                                    <h3>Email Me</h3>
                                    <a href="mailto:majeedafsal00@gmail.com">majeedafsal00@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="social-links-big">
                            <a href="https://github.com/CodeWhizAfsal" target="_blank" rel="noopener noreferrer" className="social-btn github">
                                <Github size={24} /> GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/afsal-majeed-997ba81b9/" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
                                <Linkedin size={24} /> LinkedIn
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-btn twitter">
                                <Twitter size={24} /> Twitter
                            </a>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        {formState === 'success' ? (
                            <div className="success-message fade-in">
                                <CheckCircle size={48} className="success-icon" />
                                <h3>Message Sent!</h3>
                                <p>Thanks for reaching out, Afsal. I'll get back to you soon.</p>
                                <button className="btn btn-secondary" onClick={() => setFormState('idle')}>Send Another</button>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" placeholder="Your Name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" placeholder="majeedafsal00@gmail.com" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" rows="5" placeholder="How can I help you?" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary submit-btn" disabled={formState === 'submitting'}>
                                    {formState === 'submitting' ? 'Sending...' : <>Send Message <Send size={18} /></>}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
