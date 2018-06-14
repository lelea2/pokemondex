import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import pokemonList from './reducers/pokemonList';
import pokemonDetail from './reducers/pokemonDetail';

export default combineReducers({
  pokemonList,
  pokemonDetail,
  router: routerReducer
});