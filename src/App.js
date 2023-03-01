import React, { useState } from 'react';
import Cards from './Components/Cards'
// import SingleCard from './Components/SingleCard';
import './App.css';

function App() {

  return (
    <div>
      <h1> Puzzle game - React</h1>

      <Cards className="Cards" />
    </div>

  );
}

export default App;
