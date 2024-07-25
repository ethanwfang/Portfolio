import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom'; // Import from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="desktopMenu">
                <Link to="/" className="desktopMenuListItem">Home</Link>
                <Link to="/writing" className="desktopMenuListItem">Writing</Link> {/* Updated this line */}
                <Link to="/publications" className="desktopMenuListItem">Publications</Link>
                <Link to="/portfolio" className="desktopMenuListItem">Portfolio</Link>
                <Link to="/resume" className="desktopMenuListItem">Resume</Link>
            </div>
        </nav>
    );
}

export default NavBar;
