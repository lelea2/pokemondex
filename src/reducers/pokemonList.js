import {
  GET_POKEMON_LIST
} from '../constants/actionTypes';

const defaultState = {
  loading: false,
  data: [],
  err: null
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case GET_POKEMON_LIST:
      return action.payload;
    default:
      return state;
  }
}