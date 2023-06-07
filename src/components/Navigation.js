import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
      <nav className="navigation">
        <div className="site-title text-6xl font-bold mb-4">
          <div>Erik Hoffman</div>
          <div>Photos</div>
        </div>
        <ul>
        <li>
          <Link to="/about" className="nav-link" activeClassName="active">
            About
          </Link>
        </li>
        <li>
          <Link to="/portraits" className="nav-link" activeClassName="active">
            Portraits
          </Link>
        </li>
        <li>
          <Link to="/events" className="nav-link" activeClassName="active">
            Events
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
