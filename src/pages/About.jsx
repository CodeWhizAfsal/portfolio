import { User, BookOpen, Briefcase, CheckCircle } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import './About.css';

const About = () => {
    return (
        <div className="about-page section fade-in">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <div className="about-image-container">
                        <img src={profileImg} alt="Afsal Majeed" className="profile-image" />
                    </div>
                    <div className="about-text">
                        <p className="lead-text">
                            I'm a Backend Developer and Cloud Enthusiast dedicated to building scalable, high-performance systems.
                        </p>

                        <div className="about-paragraphs">
                            <p>
                                I am currently pursuing my <strong>B.Tech in Materials Science at IIT Hyderabad</strong>. My passion lies in understanding complex systems, which drove me to specialize in Backend Development and Cloud Computing.
                            </p>
                            <p>
                                At <strong>GAIAN Solutions</strong>, I rely on modern tools like FastAPI and Docker to architect robust APIs. As the former <strong>Cloud Lead at GDSC</strong>, I thoroughly enjoyed mentoring peers in cloud-native technologies.
                            </p>
                            <p className="personal-note">
                                <em>"I believe efficiently architected code is the backbone of every great product."</em>
                            </p>
                        </div>

                        <div className="key-strengths">
                            <h3>Key Strengths</h3>
                            <div className="strengths-grid">
                                <div className="strength-item">
                                    <CheckCircle size={18} className="strength-icon" />
                                    <span>Scalable APIs</span>
                                </div>
                                <div className="strength-item">
                                    <CheckCircle size={18} className="strength-icon" />
                                    <span>Cloud Architecture</span>
                                </div>
                                <div className="strength-item">
                                    <CheckCircle size={18} className="strength-icon" />
                                    <span>Microservices</span>
                                </div>
                                <div className="strength-item">
                                    <CheckCircle size={18} className="strength-icon" />
                                    <span>System Design</span>
                                </div>
                            </div>
                        </div>

                        <div className="about-highlights">
                            <div className="highlight-item">
                                <BookOpen className="highlight-icon" />
                                <div>
                                    <h4>Education</h4>
                                    <p>IIT Hyderabad</p>
                                </div>
                            </div>
                            <div className="highlight-item">
                                <Briefcase className="highlight-icon" />
                                <div>
                                    <h4>Current Role</h4>
                                    <p>Backend Intern @ GAIAN</p>
                                </div>
                            </div>
                            <div className="highlight-item">
                                <User className="highlight-icon" />
                                <div>
                                    <h4>Community</h4>
                                    <p>Ex-Cloud Lead @ GDSC</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
