import React from 'react';
import ReactDom from 'react-dom';
import './index.css'; 


// Function Booklist - holds instances of each Book 
function Booklist() {
  return (
    <section className='booklist'> 
     <Book />
     <Book />
     <Book />
     <Book />
     <Book />
    </section>
  )
};

// Book arrow function
const Book = () => {
  return (
    <article className="book">
      <img 
        src="https://m.media-amazon.com/images/I/71gk+H+yEkL._AC_UY218_.jpg" alt="Peril Book" 
      />
      <h1>Peril</h1>
      <h4>Bob Woodward</h4>
    </article>
  )
};



ReactDom.render(<Booklist />, document.getElementById('root'));