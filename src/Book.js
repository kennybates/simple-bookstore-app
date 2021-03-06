import React from 'react';

// Book function
const Book = ({ img, title, author, description}) => {
    //const { img, title, author } = props; // destructuring book objects
    const clickHandler = () => {
      alert(description);
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

  export default Book
