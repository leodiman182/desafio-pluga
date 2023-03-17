import React, { useContext } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import MainContext from '../../context/MainContext';

import './style.css'

const SearchSection = () => {
  const { searchInput, setSearchInput, setApi, data, previouslySelected, setItemOffset } = useContext(MainContext);

  return ( 
    <>
      <h2 className='grid-title'>
        As ferramentas disponíveis na Pluga
      </h2>
      <section className='grid-header'>
        <div className='input-wrapper'>
          <AiOutlineSearch className='search-icon' />
          <input
            onChange={(e) => {
              setSearchInput(e.target.value)
              setItemOffset(0)
            }}
            value={ searchInput }
            className='search-input'
            placeholder='Buscar ferramenta'
            type="text"
          />
        </div>
        <aside className='buttons-section'>
          <button onClick={() => {
            setApi(data)
            setSearchInput('')
          }} className='button'>
            EXIBIR TODAS
          </button>
          <button onClick={() => {
            setApi(previouslySelected)
            setItemOffset(0)
            setSearchInput('')
          }} className='button'>
            EXIBIR ÚLTIMAS
          </button>
        </aside>
        {/* <h4 className='grid-subtitle'>
          {stateMessage}
        </h4> */}
      </section>    
    </>
  )
}

export default SearchSection;