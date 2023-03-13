import React from 'react';
import './style.css';
import plugaLogo from '../../assets/pluga-logo.png';

import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <header className="header-bar">
      <div className='bar-div'>
        {/* <div className='sec1'> */}
          <img className='logo' src={ plugaLogo } alt="" />
        {/* </div> */}
        <div className='sec2-wrapper'>
          <AiOutlineSearch className='search-icon' />
          <input className='font1 search-input' placeholder='Buscar ferramenta' type="text" />
        </div>
      </div>
    </header>
  )
}

export default Header;