import { values } from "lodash";

const selectAllPokemon = (entities) => (
  values(entities)
);

export const selectOnePokemon = (state) => state.pokemon.entities[state.pokemon.currentPokemon];

export default selectAllPokemon;
