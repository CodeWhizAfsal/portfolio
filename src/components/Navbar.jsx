import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path ? 'active' : '';

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <Link to="/" className="logo">Afsal.</Link>

                <div className="nav-controls">
                    <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>

                    <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li><Link to="/" className={isActive('/')} onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link to="/about" className={isActive('/about')} onClick={() => setIsOpen(false)}>About</Link></li>
                    <li><Link to="/skills" className={isActive('/skills')} onClick={() => setIsOpen(false)}>Skills</Link></li>
                    <li><Link to="/projects" className={isActive('/projects')} onClick={() => setIsOpen(false)}>Projects</Link></li>
                    <li><Link to="/experience" className={isActive('/experience')} onClick={() => setIsOpen(false)}>Experience</Link></li>
                    <li><Link to="/contact" className={isActive('/contact')} onClick={() => setIsOpen(false)}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
