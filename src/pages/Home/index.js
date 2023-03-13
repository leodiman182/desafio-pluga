import React, { useContext } from 'react';
import axios from 'axios';
import MainContext from '../../context/MainContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './style.css';

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
          <h2 className='pagination-title'>

          </h2>
        </div>
      </article>
      <Footer />
    </main>
  );
}

export default Home;