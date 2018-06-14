import {
  GET_POKEMON_DETAIL
} from '../constants/actionTypes';

const defaultState = {
  loading: false,
  data: null,
  err: null
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case GET_POKEMON_DETAIL:
      return action.payload;
    default:
      return state;
  }
}