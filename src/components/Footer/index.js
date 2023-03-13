import React from 'react';
import './style.css';
import plugaLogo from '../../assets/pluga-logo.png';

const Footer = () => {
  const data = new Date();
  const year = data.getFullYear();

  return (
    <footer className="footer-bar">
      <img className='logo' src={ plugaLogo } alt="" />
      <div className='footer-box'>
        <p>{ year } | Desenvolvido por <a target='_blank' href="https://www.linkedin.com/in/leonardodiman/" rel="noopener noreferrer">Leonardo Diman</a></p>
      </div>
    </footer>
  )
}

export default Footer;