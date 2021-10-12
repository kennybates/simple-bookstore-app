import React from 'react';
import ReactDom from 'react-dom';



function Booklist() {
  return (
    <section> 
     <Book />
    </section>
  )
};

const Book = () => {
  return <article> This is a book.</article>
};

ReactDom.render(<Booklist />, document.getElementById('root'));