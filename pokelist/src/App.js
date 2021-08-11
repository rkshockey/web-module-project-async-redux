import React from 'react'
import './App.css';
import { connect } from 'react-redux';

import PokeList from './components/PokeList';

function App(props) {
  return (
    <div className="App">
      <h1>Build a Pokemon</h1>
      {props.selectedPoke === null ? <h2>Select a Pokemon!</h2> : <div>Selected Placeholder</div>}
      <PokeList />
    </div>
  );
}

function mapStateToProps(state){
  return ({
    selectedPoke: state.selectedPoke
  })
}

export default connect(mapStateToProps)(App);
