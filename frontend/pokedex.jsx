import React from 'react';
import ReactDOM from 'react-dom';
// import { fetchAllPokemon } from './util/api_util';
import {receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import configureStore from "./store/store";

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});

window.requestAllPokemon = requestAllPokemon;
window.receiveAllPokemon = receiveAllPokemon;
