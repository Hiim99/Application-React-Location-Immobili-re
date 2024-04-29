import React from 'react';
import './Footer.scss'; 
import logo from '../../images/LOGO.png'; 

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Kasa Logo" className="footer-logo" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;