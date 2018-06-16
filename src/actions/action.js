import * as fetchr from 'isomorphic-fetch';
import {
  GET_POKEMON_LIST,
  GET_POKEMON_DETAIL,
  RESET_POKEMON_DETAIL,
  SEARCH_POKEMON_DETAIL
} from '../constants/actionTypes';
require('es6-promise').polyfill();
const baseURL = 'https://pokeapi.co/api/v2/pokemon';
const LIMIT = 151;

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

const fetchPokemonList = () => {
  return (dispatch) => {
    dispatch(intialFetchPokemonList());
    fetchr(`${baseURL}/?limit=${LIMIT}`)
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
const initialFetchPokemonDetail = (type) => {
  return {
    type,
    payload: {
      loading: true,
      data: {},
      err: null
    }
  }
};

const updateDetailSuccess = ({ data, species }, type) => {
  return {
    type,
    payload: {
      loading: false,
      data: {
        ...data,
        species
      },
      err: null
    }
  }
};

const updateDetailFail = (err, type) => {
  return {
    type,
    payload: {
      loading: false,
      data: {},
      err: err
    }
  }
};

const fetchPokemonDetail = (url, type=GET_POKEMON_DETAIL) => {
  return (dispatch) => {
    dispatch(initialFetchPokemonDetail(type));
    fetchr(`${url}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const { species } = data;
        fetchr(`${species.url}`).then((respSpecies) => {
          return respSpecies.json();
        }).then((species) => {
          return dispatch(updateDetailSuccess({data, species}, type));
        }).catch((err) => {
          return dispatch(updateDetailFail(err, type));
        });
      })
      .catch((error) => {
        return dispatch(updateDetailFail(error, type));
      });
  };
};

/*********************************************************************/
/********* Reset pokemon  ********************************************/
/*********************************************************************/
const resetDetail = () => {
  return {
    type: RESET_POKEMON_DETAIL,
    payload: {
      loading: false,
      data: null,
      err: null
    }
  }
};

const resetPokemon = () => {
  return (dispatch) => {
    dispatch(resetDetail());
  };
}

/*********************************************************************/
/********* Search Pokemon ********************************************/
/*********************************************************************/
const searchPokemon = (text) => {
  const url = `${baseURL}/${text}`;
  return fetchPokemonDetail(url, SEARCH_POKEMON_DETAIL);
};

export {
  fetchPokemonList,
  fetchPokemonDetail,
  resetPokemon,
  searchPokemon
};

