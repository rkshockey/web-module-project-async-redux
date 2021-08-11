import React from 'react'
import './App.css';

import PokeList from './components/PokeList';
import BuildPoke from './components/BuildPoke';
import YourPokemon from './components/YourPokemon';

function App() {
  return (
    <div className="App">
      <h1>Build a Pokemon</h1>
      <BuildPoke />
      <YourPokemon />
      <PokeList />
    </div>
  );
}

export default App;
