import React, { useContext } from "react";
import ReactPaginate from "react-paginate";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

import MainContext from "../../context/MainContext";
import Items from "./Items";
import "./style.css";

const left = <AiFillCaretLeft size={"2em"} className="left-arrow" />;
const right = <AiFillCaretRight size={"2em"} className="left-arrow" />;

function PaginatedItems({ itemsPerPage }) {
  const { usableApi, itemOffset, setItemOffset } = useContext(MainContext);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = usableApi.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(usableApi.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % usableApi.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        className="paginate-wrapper"
        breakLabel="..."
        nextLabel={right}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={left}
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedItems;
