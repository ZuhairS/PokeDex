import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from "./root";
import { HashRouter, Route } from "react-router-dom";
import { fetchOnePokemon } from "./util/api_util";
import { receiveOnePokemon, requestOnePokemon } from "./actions/pokemon_actions";
import {selectOnePokemon} from './reducers/selectors';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);

  window.store = store;
});

window.fetchOnePokemon = fetchOnePokemon;
window.receiveOnePokemon = receiveOnePokemon;
window.requestOnePokemon = requestOnePokemon;
window.selectOnePokemon = selectOnePokemon;
