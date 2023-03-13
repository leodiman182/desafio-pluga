import React from 'react';
import './style.css';
import plugaLogo from '../../assets/pluga-logo.png';

import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <section className="header-bar">
      <div className='bar-div'>
        {/* <div className='sec1'> */}
          <img className='logo' src={ plugaLogo } alt="" />
        {/* </div> */}
        <div className='sec2-wrapper'>
          <AiOutlineSearch className='search-icon' />
          <input className='font1 search-input' placeholder='Buscar +80 ferramentas' type="text" />
        </div>
      </div>
    </section>
  )
}

export default Header;