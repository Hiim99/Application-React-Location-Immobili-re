import React from 'react';
import './Navbar.scss';
import LOGO from '../../images/LOGO.png';

const Navbar = () => {
    return (
        <nav className="navbar">
        <div className="logo">
          <img src={LOGO} alt="Logo" />
        </div>
        <div className="nav-links">
          <a href="/acceuil" className="nav-link">Acceuil</a>
          <a href="/about" className="nav-link">A Propos</a>
        </div>
      </nav>
    );
  }

  export default Navbar;