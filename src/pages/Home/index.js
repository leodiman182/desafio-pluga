import React, { useContext } from 'react';
import axios from 'axios';
import MainContext from '../../context/MainContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './style.css';

import { AiOutlineSearch } from "react-icons/ai";

import apiMock from '../../mocks/api12';
import ToolCard from '../../components/ToolCard';

const Home = () => {
  const { api, setApi, data, setData } = useContext(MainContext);

  useContext(() => {
    console.log('oi');
    axios
      .get('https://pluga.co/ferramentas_search.json')
      .then(res => {
        console.log(res.data);
        setApi(res.data)
        setData(res.data)
      })
  }, []);
  
  useContext(() => {
    console.log(api);
    console.log(data);
  }, [api, data]);

  return (
    <main className="app">
      <Header />
      <article className='grid-section'>
        <section className='grid-header'>
          <div className='input-wrapper'>
            <AiOutlineSearch className='search-icon' />
            <input className='search-input' placeholder='Buscar ferramenta' type="text" />
          </div>
          <button className='button'>
            EXIBIR TODAS
          </button>
        </section>
        <section className='grid-wrapper'>
          {
            apiMock.map((el, index) => (
              <ToolCard
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