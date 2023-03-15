import React, { useContext } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import MainContext from '../../context/MainContext';


const SearchSection = () => {
  const { searchInput, setSearchInput, setApi, data  } = useContext(MainContext);

  return ( 
    <>
      <h2 className='grid-title'>
        As ferramentas disponíveis na Pluga
      </h2>
      <section className='grid-header'>
        <div className='input-wrapper'>
          <AiOutlineSearch className='search-icon' />
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            value={ searchInput }
            className='search-input'
            placeholder='Buscar ferramenta'
            type="text"
          />
        </div>
        <button onClick={() => {
          setApi(data)
          setSearchInput('')
        }} className='button'>
          EXIBIR TODAS
        </button>
      </section>    
    </>
  )
}

export default SearchSection;