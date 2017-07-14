import { RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';
import { merge } from "lodash";

export default function itemReducer(state=[], action) {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ONE_POKEMON:
      return merge([], state, action.items);
    default:
      return state;
  }
}
