import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import {data} from './data';

console.log(data);

/** Book is the stateless component to store the book Data **/
const Book = ({book}) => (
  <li>
    {book.title} :
    {book.price} :
    {book.authorId}
  </li>
);

/** BookList is the Stateless Component for listing the Book data in UI **/
const BookList = (props) =>(
/** Defining the Books array and map them to display items. **/
    <ul>
        {props.books.map(book => {
          return (<Book key={book.id} book={book} />)
        }
      )
    }
  </ul>
);

ReactDOM.render(
  <BookList books={data.books} />,
  document.getElementById('root')
);
