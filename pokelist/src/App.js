import React from 'react'
import './App.css';
import { connect } from 'react-redux';

import PokeList from './components/PokeList';
import BuildPoke from './components/BuildPoke';

function App(props) {
  return (
    <div className="App">
      <h1>Build a Pokemon</h1>
      <BuildPoke />
      <PokeList />
    </div>
  );
}

export default App;
