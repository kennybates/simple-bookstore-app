import React from 'react';
import ReactDom from 'react-dom';
import './index.css'; 
import {data} from './books'; //import data array from books.js
import Book from './Book'; // import default export Book from Book.js



// Function Booklist - holds instances of each Book 
function Booklist() {
  return (
    <section className='booklist'> 
      {data.map((book, index) => { // iterates over each book property in list called data
          return <Book key={book.id} {...book}></Book>;
      })}  
    </section>
  )
};




ReactDom.render(<Booklist />, document.getElementById('root'));