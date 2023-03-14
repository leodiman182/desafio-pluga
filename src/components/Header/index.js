import React, { useContext } from 'react';
import './style.css';
import plugaLogo from '../../assets/pluga-logo.png';
import MainContext from '../../context/MainContext';
  
const Header = () => {
  const { socialLinks } = useContext(MainContext);

  return (
    <header className="header-bar">
      <div className='bar-div'>
        <a target='_blank' href="https://pluga.co/" rel="noreferrer">
          <img className='logo' src={ plugaLogo } alt="Logo Pluga.co" />
        </a>
        <nav>
          {
            socialLinks.map(el => (
              <a target='_blank' href={ el.link } rel="noreferrer">
                { el.icon }
              </a>
            ))
          }
        </nav>
      </div>
    </header>
  )
}

export default Header;  