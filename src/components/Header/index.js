import React from 'react';
import './style.css';
import plugaLogo from '../../assets/pluga-logo.png';


const Header = () => {
  return (
    <header className="header-bar">
      <div className='bar-div'>
        <img className='logo' src={ plugaLogo } alt="Logo Pluga.co" />       
        <h2>
          As ferramentas disponíveis na Pluga
        </h2>
      </div>
    </header>
  )
}

export default Header;