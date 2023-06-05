import React from 'react';
import { Link } from 'react-router-dom';
import "./BookList.css";

const Book = (book) => {
  console.log(book);
  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src = {book?.image} alt = "cover" />
      </div>
      <div className='book-item-info text-center'>
        <Link to = {`/book/${book?.id}`} {...book}>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{book?.title}</span>
          </div>
        </Link>

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          <span>{book?.author}</span>
        </div>

        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Publisher: </span>
          <span>{book?.publisher}</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>Price: </span>
          <span>{book?.price}</span>
        </div>
      </div>
    </div>
  )
}

export default Book