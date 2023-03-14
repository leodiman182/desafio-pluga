import React, { useContext, useEffect, useState } from 'react';
// import axios from 'axios';
import MainContext from '../../context/MainContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ToolCard from '../../components/ToolCard';
import Modal from '../../components/Modal';

import { AiOutlineSearch } from "react-icons/ai";

import './style.css';

import { apiMock } from '../../mocks/api12';

const Home = () => {
  const {
    // api, setApi, data, setData,
    setModalOpen, modalOpen,
    setSelectedTool, previouslySelected, setPreviouslySelected } = useContext(MainContext);
  const [inputValue, setInputValue] = useState('');

  function handleToolSelect (el) {    
    const array = previouslySelected;
    
    if (previouslySelected.length !== 0) {
      const sameElement = previouslySelected.includes(el);
      
      if (sameElement) {
        const arrayWithoutEl = previouslySelected.filter(index => index.app_id !== el.app_id);
        
        arrayWithoutEl.push(el);
        setPreviouslySelected(arrayWithoutEl);
        return
      } else {
        array.push(el);

        if (previouslySelected.length > 4) {
          array.shift();
        }
      }
    } else {
      array.push(el);
    }
    
    setPreviouslySelected(array);
  }

  useEffect(() => {
    if (!modalOpen) {
      setSelectedTool({
        app_id: "",
        name: "",
        color: "",
        icon: "",
        link: ""
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalOpen])

  // useEffect(() => {
  //   function handleQuery () {
  //     const newList = inputValue === ''
  //     ? apiMock
  //     : apiMock.filter((query) => {
  //         return query.name.toLowerCase().includes(query.toLowerCase())
  //       });

  //     setData(newList);
  //   }

  //   handleQuery();
  //   console.log(inputValue);

  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [inputValue])

  // useContext(() => {
  //   console.log('oi');
  //   axios
  //     .get('https://pluga.co/ferramentas_search.json')
  //     .then(res => {
  //       console.log(res.data);
  //       setApi(res.data)
  //       setData(res.data)
  //     })
  // }, []);
  
  // useContext(() => {
  //   console.log(api);
  //   console.log(data);
  // }, [api, data]);

  return (
    <main className="app">
      {
        modalOpen && (
          <Modal />
        )
      }
      <Header />
      <article className='grid-section'>
        <h2 className='grid-title'>
          As ferramentas disponíveis na Pluga
        </h2>
        <section className='grid-header'>
          <div className='input-wrapper'>
            <AiOutlineSearch className='search-icon' />
            <input
              onChange={(e) => setInputValue(e.target.value)}
              value={ inputValue }
              className='search-input'
              placeholder='Buscar ferramenta'
              type="text"
            />
          </div>
          <button className='button'>
            EXIBIR TODAS
          </button>
        </section>
        <section className='grid-wrapper'>
          {
            apiMock.map((el, index) => (
              <ToolCard
                onClick={() => {
                  setSelectedTool(el)
                  handleToolSelect(el)
                  setModalOpen(true)
                }}
                key={ index }
                id={ el.app_id }
                name={ el.name }
                color={ el.color }
                icon={ el.icon }
                link={ el.link }
              />
            ))
          }
        </section>
        <div className='pagination-wrapper'>
          <p className='pagination-title'>
            Página 1 de 4
          </p>
        </div>
      </article>
      <Footer />
    </main>
  );
}

export default Home;