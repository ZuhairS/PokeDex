import React from "react";
import { Provider } from "react-redux";
import PokemonIndexContainer from "./components/pokemon/pokemon_index_container";

const Root = ({store}) => (
  <Provider store={store}>
    <div>
      <h1>Gotta Catch Em All! POKEMON!</h1>
      <PokemonIndexContainer />
    </div>
  </Provider>
);

export default Root;
