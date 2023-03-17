import React, { useContext } from 'react';
import ReactPaginate from 'react-paginate';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import './style.css';

import MainContext from '../../context/MainContext';
import Items from './Items';

const left = <AiFillCaretLeft size={'2em'} className='left-arrow' />
const right = <AiFillCaretRight size={'2em'} className='left-arrow' />

function PaginatedItems({ itemsPerPage }) {
  const { api, itemOffset, setItemOffset, previouslySelected } = useContext(MainContext);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = api.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(api.length / itemsPerPage);

  console.log(previouslySelected);
  console.log(itemOffset);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % api.length;
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
