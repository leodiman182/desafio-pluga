import React, { useCallback, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import MainContext from '../../context/MainContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ToolCard from '../../components/ToolCard';
import Modal from '../../components/Modal';

import { AiOutlineSearch, AiOutlineLoading } from "react-icons/ai";

import './style.css';
import Pagination from '../../components/Pagination';

const Home = () => {
  const {
    api, setApi, data, setData,
    setModalOpen, modalOpen,
    setSelectedTool,
    previouslySelected, setPreviouslySelected
  } = useContext(MainContext);

  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const URL = 'https://pluga.co/ferramentas_search.json';

    setLoading(true);
    axios
      .get(URL)
      .then(res => {
        const array = res.data;

        const newArray = array.sort((a, b) => {
          let fa = a.name.toLowerCase(),
              fb = b.name.toLowerCase();
      
          if (fa < fb) {
              return -1;
          }
          if (fa > fb) {
              return 1;
          }

          return 0;
        });

        setApi(newArray);
        setData(newArray);
        setLoading(false);
      })

  }, []);

  useEffect(() => {    
    if (!modalOpen) {
      document.body.style.overflow = 'unset';
      setSelectedTool({
        app_id: "",
        name: "",
        color: "",
        icon: "",
        link: ""
      });
      
      return
    }

    document.body.style.overflow = 'hidden';
  }, [modalOpen]);

  useEffect(() => {
    const newList = inputValue !== '' ? data.filter(query => query?.name?.toLowerCase().match(inputValue?.toLowerCase()))
    : data;

    setApi(newList);

  }, [inputValue]);

  const handleToolSelect = useCallback((el) => {
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

  }, [previouslySelected, setPreviouslySelected]);

  // const handleScrollOnModal = useCallback(() => {
  // }, []);

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
          <button onClick={() => {
            setApi(data)
            setInputValue('')
          }} className='button'>
            EXIBIR TODAS
          </button>
        </section>

        {
          loading ? (
            <div className='loading-wrapper'>
              <div>
                <AiOutlineLoading size={'3.5em'} className='rotating' />
              </div>
            </div>
          ) : api.length === 0 ? (
            <p className='not-found'>Não encontramos nenhuma ferramenta :(</p>
          ) : (
            <>
              <section className='grid-wrapper'>
                {
                  api.map((el, index) => (
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
              <Pagination />
            </>
          )
        }

      </article>
      <Footer />
    </main>
  );
}

export default Home;