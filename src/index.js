import React from 'react';
import ReactDom from 'react-dom';
import './index.css'; 
import {data} from './books'; //import data array from books.js



// Function Booklist - holds instances of each Book 
function Booklist() {
  return (
    <section className='booklist'> 
      {data.map((book, index) => { // iterates over each book property in list called books
          return <Book key={book.id} {...book}></Book>;
      })}  
    </section>
  )
};

// Book function
const Book = ({ img, title, author}) => {
  //const { img, title, author } = props; // destructuring book objects
  const clickHandler = () => {
    alert('Description of book');
  };
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>Description</button>
      
    </article>
  )
};



ReactDom.render(<Booklist />, document.getElementById('root'));