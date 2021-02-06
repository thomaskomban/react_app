// eslint-disable-next-line
import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';
// setup vars
const books = [{
  id: 1,
  img: 'https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg',
  title: 'I Love You to the Moon and -Back',
  author: 'Amelia Hepworth',
},
{
  id:2,
  img: 'https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg',
  title: 'I Love You to the Moon and -Back',
  author: 'Amelia Hepworth',
},
{
  id:3,
  img: 'https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg',
  title: 'I Love You to the Moon and -Back',
  author: 'Amelia Hepworth',
}];

function BookList() {
  return (
    // <section className='booklist'>
    //   {Books}      
    // </section>
    <section className='booklist'>
      {books.map((book, index) => {
        return <Book key={index} {...book}></Book>
      })}      
    </section>
  )
}

// const Books= (books.map((book, index) => {
//     return (
//     <article key={index} className='book'>
//       <img src={book.img} alt=""/>
//       <h1>{book.title}</h1>
//       <h4>{book.author}</h4>      
//     </article>
//   );
// }))
const complexExample = (author) => {
  console.log(author);
}
const Book = (props) => {  
  const clickHandler = (t) => {
    alert(t);
  }
  return (
    <article className='book' onMouseOver={()=>{
      console.log(props.title);
    }}>
      <img src={props.img} alt=""/>
      <h1 onClick={() => clickHandler(props.title)}>{props.title}</h1>
      <h4>{props.author}</h4>   
      <button type="button" onClick={() => clickHandler(props.id)}>reference example</button>  
      <button type="button" onClick={() => complexExample(props.author)}>more complex example</button> 
    </article>
  )
};

ReactDom.render(<BookList />, document.getElementById('root'));