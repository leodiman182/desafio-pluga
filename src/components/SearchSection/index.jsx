import React, { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import MainContext from "../../context/MainContext";
import Button from "../Button";
import "./style.css";

const SearchSection = () => {
  const {
    searchInput,
    setSearchInput,
    setApi,
    data,
    previouslySelected,
    setItemOffset,
  } = useContext(MainContext);

  return (
    <>
      <h2 data-testid="title-element" className="grid-title">
        As ferramentas disponíveis na Pluga
      </h2>
      <section className="grid-header">
        <div className="input-wrapper">
          <AiOutlineSearch className="search-icon" />
          <input
            data-testid="input-search-field"
            onChange={(e) => {
              setSearchInput(e.target.value);
              setItemOffset(0);
            }}
            value={searchInput}
            className="search-input"
            placeholder="Buscar ferramenta"
            type="text"
          />
        </div>
        <aside className="buttons-section">
          <Button
            testID="button-show-all"
            onClick={() => {
              setApi(data);
              setSearchInput("");
            }}
          >
            EXIBIR TODAS
          </Button>
          <Button
            testID="button-show-latest"
            onClick={() => {
              setApi(previouslySelected);
              setItemOffset(0);
              setSearchInput("");
            }}
          >
            EXIBIR ÚLTIMAS
          </Button>
        </aside>
      </section>
    </>
  );
};

export default SearchSection;
