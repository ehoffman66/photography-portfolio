import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
                    <Link to="/about" className="nav-link" activeClassName="active">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/portraits" className="nav-link" activeClassName="active">
                        PEOPLE
                    </Link>
                </li>
                <li>
                    <Link to="/music" className="nav-link" activeClassName="active">
                        Music
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="nav-link" activeClassName="active">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
