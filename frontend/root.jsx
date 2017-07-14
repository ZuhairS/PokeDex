import React from "react";
import { Provider } from "react-redux";
import PokemonIndexContainer from "./components/pokemon/pokemon_index_container";
import PokemonDetailContainer from "./components/pokemon//pokemon_detail_container";
import { HashRouter, Route } from 'react-router-dom';

// <h1>Gotta Catch Em All! POKEMON!</h1>

const Root = ({store}) => (
  <Provider store={store}>
    <HashRouter>
      <div className="content">
        <Route path="/" component={ PokemonIndexContainer } />
        <Route path="/pokemon/:pokemonId" component= { PokemonDetailContainer } />
      </div>
    </HashRouter>
  </Provider>
);

export default Root;
