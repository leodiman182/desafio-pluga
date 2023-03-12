import React from 'react';
import './style.css';

import plugaLogo from '../../assets/pluga-logo.png';

const Header = () => {
  return (
    <section className="header-bar">
      <div className='bar-div'>
        <div className='sec1'>
          <img className='logo' src={ plugaLogo } alt="" />
        </div>
        <div className='sec1'>
          <input type="text" />
        </div>
      </div>
    </section>
  )
}

export default Header;