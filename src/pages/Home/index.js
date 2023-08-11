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
import { TOOLS_JSON } from "../../utils/json";

const Home = () => {
  const {
    usableApi,
    setUsableApi,
    modalOpen,
    setSelectedTool,
    searchInput,
    loading,
  } = useContext(MainContext);

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
        ? TOOLS_JSON.filter((query) =>
            query?.name?.toLowerCase().match(searchInput?.toLowerCase())
          )
        : TOOLS_JSON;

    setUsableApi(newList);
  }, [searchInput]);

  return (
    <main className="app">
      {modalOpen && <Modal />}
      <Header />
      <article className="grid-section">
        <SearchSection />
        {loading ? (
          <Loading />
        ) : usableApi.length === 0 ? (
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
