import './App.css';
import React from 'react';

let purposeCommit = 'Implement a print out of an array';

let fruitArray = ['apple', 'banana','cherry', 'dates'];
const booklist =[
  {
    title: 'Book One',
    url: 'https://bookone.org/',
    author: 'author one',
    num_comments: 3,
    rating: 4,
    objectID: 0,
}, {
    title: 'Book Two',
    url: 'https://booktwo.js.org/',
    author: 'author two',
    num_comments: 2,
    rating: 5,
    objectID: 1,
}, ];
function readTitlesFunc(list){
  list.array.forEach(element => {
    return <div>{element.title}</div>
  });
}

function App() {
  const title = 'React'
  return (
    <div className="App">
      <h1>Lets see what happens: <p>{fruitArray.map}</p></h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
      <hr/>
      <b>Use key values or id's for lists. Issues can be present for dynamic lists causing them to not update.</b>
      {booklist.map(function(book){
        return (
          <div key={book.objectID}>
            <span>
              <a href={book.url}>{book.title} </a>
            </span>
            <span>Book author: {book.author}</span>
            <span>Book rating: {book.rating}</span>
            </div>
        );
      })}
      <hr/>
    </div>
  );
}

export default App;