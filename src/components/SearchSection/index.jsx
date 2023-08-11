import React, { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import MainContext from "../../context/MainContext";
import Button from "../Button";
import Checkbox from "../Checkbox";
import { TOOLS_JSON, ORDERED_TOOLS_JSON } from "../../utils/json";
import "./style.css";

const SearchSection = () => {
  const {
    searchInput,
    setSearchInput,
    setUsableApi,
    previouslySelected,
    setItemOffset,
    alphaCheck,
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
              if (alphaCheck) {
                setUsableApi(ORDERED_TOOLS_JSON);
                setSearchInput("");
              } else {
                setUsableApi(TOOLS_JSON);
                setSearchInput("");
              }
            }}
          >
            EXIBIR TODAS
          </Button>
          <Button
            testID="button-show-latest"
            onClick={() => {
              setUsableApi(previouslySelected);
              setItemOffset(0);
              setSearchInput("");
            }}
          >
            EXIBIR ÚLTIMAS
          </Button>
        </aside>
        <article className="checkbox-section">
          <Checkbox
            id="check-alphabetical"
            label="Organizar em ordem alfabética"
          />
        </article>
      </section>
    </>
  );
};

export default SearchSection;
