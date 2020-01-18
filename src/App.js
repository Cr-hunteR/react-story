import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>hello world, This is React</h1>
      <Person name='kamal' age='19'></Person>
      <Person name='dean' age='16'>This is some extra info about dean.</Person>
      <Person name='jesse' age='20'></Person>
    </div>
  );
}

export default App;
