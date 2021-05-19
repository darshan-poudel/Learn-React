import './App.css';
import React from 'react';

let variable = 'variable';

const title = 'React';
const welcome = {
  greeting: 'Hey',
  title: ' React'
};

function getTitle(title){
  return title;
}

function App() {
  const title = 'React'
  return (
    <div className="App">
      <h1>Hello {getTitle('React')} {welcome.greeting}{welcome.title}</h1>
      <h3>Input field 'label'</h3>
      <label htmlFor = "search">Search</label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;