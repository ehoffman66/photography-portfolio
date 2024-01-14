import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink instead of Link

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="navigation">
            <div className="site-title text-6xl font-bold mb-4">
                <div className="title-line title-photos">ERIK HOFFMAN</div>
                <div className="title-line">PHOTOS</div>
            </div>
            <div onClick={toggleNav} className={`nav-toggler ${isOpen ? 'open' : 'closed'}`}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <ul className={`nav-menu ${isOpen ? 'nav-open' : ''}`}>
                <li>
                    <NavLink to="/about" className="nav-link" activeClassName="active">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/portraits" className="nav-link" activeClassName="active">
                        PEOPLE
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/music" className="nav-link" activeClassName="active">
                        Music
                    </NavLink>
                </li>
                <li className="relative group">
                    <span className="nav-link">
                        Travel
                    </span>
                    <ul className="pl-6">
                        <li>
                            <NavLink to="/africa" className="nav-link" activeClassName="active">
                                Africa
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/contact" className="nav-link" activeClassName="active">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;