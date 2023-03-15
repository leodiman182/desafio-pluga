import React, { useContext, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import './style.css';

import MainContext from '../../context/MainContext';
import Items from './Items';

const left = <AiFillCaretLeft size={'2em'} className='left-arrow' />
const right = <AiFillCaretRight size={'2em'} className='left-arrow' />

function PaginatedItems({ itemsPerPage }) {
  const { api } = useContext(MainContext);

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  
  const currentItems = api.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(api.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % api.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        className='paginate-wrapper'
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