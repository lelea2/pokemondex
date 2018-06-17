import React from 'react'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import pokemonDetail from '../pokemonDetail';

const DEFAULT_STATE = {
  loading: false,
  data: null,
  err: null
};

describe('>>>R E D U C E R --- Test pokemonDetail',() => {
  it('+++ reducer for GET_POKEMON_DETAIL', () => {
    let state = DEFAULT_STATE;
    state = pokemonDetail(state, { type: "GET_POKEMON_DETAIL", payload: {
      loading: true,
      data: null,
      err: null
    }})
    expect(state.loading).toEqual(true);

    state = pokemonDetail(state, { type: "GET_POKEMON_DETAIL", payload: {
      loading: false,
      data: { name: 'Pikachu', id: 2, type: 'electric' },
      err: null
    }})
    expect(state.loading).toEqual(false);
    expect(state.data).toEqual({ name: 'Pikachu', id: 2, type: 'electric' });
    expect(state.search_result).toEqual(false);
  });

  it('+++ reducer for SEARCH_POKEMON_DETAIL', () => {
    let state = DEFAULT_STATE
    state = pokemonDetail(state, { type: "SEARCH_POKEMON_DETAIL", payload: {
      loading: false,
      data: { name: 'Pikachu', id: 2, type: 'electric' },
      err: null
    }})
    expect(state.loading).toEqual(false);
    expect(state.data).toEqual({ name: 'Pikachu', id: 2, type: 'electric' });
    expect(state.search_result).toEqual(true);
  });
});
