import * as fetchr from 'isomorphic-fetch';
import {
  GET_POKEMON_LIST,
  GET_POKEMON_DETAIL
} from '../constants/actionTypes';
require('es6-promise').polyfill();
const baseURL = 'https://pokeapi.co/api/v2/pokemon';

/*********************************************************************/
/********* Pokemon list **********************************************/
/*********************************************************************/
const intialFetchPokemonList = () => {
  return {
    type: GET_POKEMON_LIST,
    payload: {
      loading: true,
      data: [],
      err: null
    }
  }
};

const updateListSuccess = (resp) => {
  const { results } = resp;
  return {
    type: GET_POKEMON_LIST,
    payload: {
      loading: false,
      data: results,
      err: null
    }
  }
};

const updateListFail = (err) => {
  return {
    type: GET_POKEMON_LIST,
    payload: {
      loading: false,
      data: [],
      err: err
    }
  }
};

export const fetchPokemonList = () => {
  return (dispatch) => {
    dispatch(intialFetchPokemonList());
    fetchr(`${baseURL}/?limit=50`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        return dispatch(updateListSuccess(response));
      })
      .catch((error) => {
        return dispatch(updateListFail(error));
      });
  };
};

/*********************************************************************/
/********* Pokemon detail ********************************************/
/*********************************************************************/
const initialFetchPokemonDetail = () => {
  return {
    type: GET_POKEMON_DETAIL,
    payload: {
      loading: true,
      data: {},
      err: null
    }
  }
};

const updateDetailSuccess = (data) => {
  return {
    type: GET_POKEMON_DETAIL,
    payload: {
      loading: false,
      data,
      err: null
    }
  }
};

const updateDetailFail = (err) => {
  return {
    type: GET_POKEMON_DETAIL,
    payload: {
      loading: false,
      data: {},
      err: err
    }
  }
};

export const fetchPokemonDetail = (url) => {
  return (dispatch) => {
    dispatch(initialFetchPokemonDetail());
    fetchr(`${url}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        return dispatch(updateDetailSuccess(response));
      })
      .catch((error) => {
        return dispatch(updateDetailFail(error));
      });
  };
};

/*********************************************************************/
/********* Search Pokemon ********************************************/
/*********************************************************************/
export const searchPokemon = (text) => {
  const url = `${baseURL}/${text}`;
  return fetchPokemonDetail(url);
};
