import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

export default function pokemonReducer(state={entities: {}, currentPokemon: null }, action) {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return merge({}, state, { entities: action.pokemon});
    case RECEIVE_ONE_POKEMON:
      const currentPokemonId = action.pokemon.pokemon.id
      return merge({}, state, { currentPokemon: currentPokemonId, entities: {[currentPokemonId]: action.pokemon.pokemon}});
    default:
      return state;
  }
}
