import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import MainContext from '../../context/MainContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';

import { AiOutlineLoading } from "react-icons/ai";

import './style.css';
import PaginatedItems from '../../components/PaginatedItems/index';
import SearchSection from '../../components/SearchSection';
import Illustration from '../../assets/illustration.';

const Home = () => {
  const {
    api, setApi, data, setData,
    modalOpen,
    setSelectedTool,
    searchInput,
  } = useContext(MainContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const URL = `https://pluga.co/ferramentas_search.json`;

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

  // useEffect(() => {
  //   const handlePageNumber = () => {
  //     if (itemOffset === 0 ) {
  //       setPage(1)
  //     }

  //     const newPage = (itemOffset / 12) + 1;
  //     setPage(newPage)
  //   }

  //   handlePageNumber()
  // }, [itemOffset])
  
  // useEffect(() => {
  //   setStateMessage(`Página ${page}`)
  // }, [page])

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
    const newList = searchInput !== '' ? data.filter(query => query?.name?.toLowerCase().match(searchInput?.toLowerCase()))
    : data;

    setApi(newList);

  }, [searchInput]);

  return (
    <main className="app">
      {
        modalOpen && (
          <Modal />
        )
      }
      <Header />
      <article className='grid-section'>
        <SearchSection />
        {
          loading ? (
            <div className='loading-wrapper'>
              <div>
                <AiOutlineLoading size={'3.5em'} className='rotating' />
              </div>
            </div>
          ) : api.length === 0 ? (
            <div className='not-found'>
              <p>Não encontramos nenhuma ferramenta...</p>
              <Illustration />
            </div>
          ) : (
            <PaginatedItems itemsPerPage={12} />
          )
        }
      </article>
      <Footer />
    </main>
  );
}

export default Home;