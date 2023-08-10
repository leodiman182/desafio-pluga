import React, { useContext, useEffect } from "react";
import MainContext from "../../context/MainContext";
import SearchSection from "../../components/SearchSection";
import PaginatedItems from "../../components/PaginatedItems/index";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";
import Loading from "../../components/Loading";
import Illustration from "../../assets/illustration.";
import "./style.css";
import fetchAPI from "../../utils/request";
import sortResponse from "../../utils/sort";

const Home = () => {
  const {
    api,
    setApi,
    data,
    setData,
    modalOpen,
    setSelectedTool,
    searchInput,
    loading,
    setLoading,
  } = useContext(MainContext);

  useEffect(() => {
    fetchAPI().then((response) => {
      const newArray = sortResponse(response);

      setApi(newArray);
      setData(newArray);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!modalOpen) {
      document.body.style.overflow = "unset";
      setSelectedTool({
        app_id: "",
        name: "",
        color: "",
        icon: "",
        link: "",
      });

      return;
    }

    document.body.style.overflow = "hidden";
  }, [modalOpen]);

  useEffect(() => {
    const newList =
      searchInput !== ""
        ? data.filter((query) =>
            query?.name?.toLowerCase().match(searchInput?.toLowerCase())
          )
        : data;

    setApi(newList);
  }, [searchInput]);

  return (
    <main className="app">
      {modalOpen && <Modal />}
      <Header />
      <article className="grid-section">
        <SearchSection />
        {loading ? (
          <Loading />
        ) : api.length === 0 ? (
          <div className="not-found">
            <p>Não encontramos nenhuma ferramenta...</p>
            <Illustration />
          </div>
        ) : (
          <PaginatedItems itemsPerPage={12} />
        )}
      </article>
      <Footer />
    </main>
  );
};

export default Home;
