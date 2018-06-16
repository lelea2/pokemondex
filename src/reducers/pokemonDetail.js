import {
  GET_POKEMON_DETAIL,
  RESET_POKEMON_DETAIL,
  SEARCH_POKEMON_DETAIL
} from '../constants/actionTypes';

const defaultState = {
  loading: false,
  data: null,
  err: null
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case GET_POKEMON_DETAIL:
    case SEARCH_POKEMON_DETAIL:
    case RESET_POKEMON_DETAIL:
      return {
        ...action.payload,
        search_result: (action.type === SEARCH_POKEMON_DETAIL) ? true : false
      };
    default:
      return state;
  }
}