import React from 'react';
import ReactDom from 'react-dom';
import './index.css'; 

// A list created to store book values to iterate over 
const books = [
  {
    id: 1,
    img: 'https://m.media-amazon.com/images/I/71gk+H+yEkL._AC_UY218_.jpg',
    title: 'Peril',
    author: 'Bob Woodward',
  },
  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/91tjTEpgh6L._AC_UL200_SR200,200_.jpg',
    title: 'Silverview: A Novel',
    author: 'John le carre',
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81kosCB1luL._AC_UL200_SR200,200_.jpg',
    title: 'The Storyteller',
    author: 'Dave Grohl',
  },
];



// Function Booklist - holds instances of each Book 
function Booklist() {
  return (
    <section className='booklist'> 
      {books.map((book) => { // iterates over each book property in list called books
          return <Book key={book.id} book={book}></Book>;
      })}  
    </section>
  )
};

// Book function
const Book = (props) => {
  const { img, title, author } = props.book; // destructuring the book property
  return (
    <article className="book">
      <img 
        src={img} alt="" 
      />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
};



ReactDom.render(<Booklist />, document.getElementById('root'));