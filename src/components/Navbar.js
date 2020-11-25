import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className = "nav-wrapper red darken-3">
        <div className = "container">

            <a  className= "brand-logo">Web App</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">Contact</Link></li>
                    <li><Link to="/contact">About</Link></li>
                </ul>

        </div>
        </nav>
    )
}

export default Navbar