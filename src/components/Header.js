import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Add your logo image here
import './Header.css'; // Import the CSS file

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="School Logo" />
                <h3>XYZ Public School</h3>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    {/* Add more links as needed */}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
