import React from 'react';
import './Navbar.scss';
import LOGO from '../../images/LOGO.png';
import { NavLink } from 'react-router-dom'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={LOGO} alt="Logo" />
            </div>
            <div className="nav-links">
                <NavLink to="/acceuil" className="nav-link" activeclassname="active">Acceuil</NavLink>
                <NavLink to="/about" className="nav-link" activeclassname="active">A Propos</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
