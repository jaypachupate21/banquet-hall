import React from 'react';
import { Link } from 'react-router-dom';

const Header=()=>{
    return (
        <header className="header">
            <h1></h1>
            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/services">Services</Link>
                <Link to="/booking">Book Now</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
};

export default Header;