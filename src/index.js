import React from 'react';
import ReactDom from 'react-dom';


// Function Booklist - holds instances of each Book 
function Booklist() {
  return (
    <section> 
     <Book />
     <Book />
     <Book />
    </section>
  )
};

// Book arrow function
const Book = () => {
  return (
    <article>
      <Image></Image>
      <Title />
      <Author />
    </article>
  )
};

// Book components Image, Title, Author
const Image = () => <img src="https://m.media-amazon.com/images/I/71gk+H+yEkL._AC_UY218_.jpg" alt="" />

const Title = () => <h1>Peril</h1>;

const Author = () => <h2>Bob Woodward</h2>;

ReactDom.render(<Booklist />, document.getElementById('root'));