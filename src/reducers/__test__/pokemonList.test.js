import React from 'react'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import pokemonList from '../pokemonList';

describe('>>>R E D U C E R --- Test pokemonList',() => {
  it('+++ reducer for GET_POKEMON_LIST', () => {
    let state = { 
      loading: false,
      data: [],
      err: null
    };
    state = pokemonList(state, { type: "GET_POKEMON_LIST", payload: {
      loading: true,
      data: null,
      err: null
    }})
    expect(state.loading).toEqual(true);

    state = pokemonList(state, { type: "GET_POKEMON_LIST", payload: {
      loading: false,
      data: [{ name: 'Pikachu', url: ''}],
      err: null
    }})
    expect(state.loading).toEqual(false);
    expect(state.data[0]).toEqual({ name: 'Pikachu', url: ''});
  });

  it('+++ reducer for FAKE_GET_POKEMON_LIST', () => {
    let state = { 
      loading: false,
      data: [],
      err: null
    };
    state = pokemonList(state, { type: "FAKE_GET_POKEMON_LIST", payload: {
      loading: true,
      data: null,
      err: null
    }})
    expect(state.loading).toEqual(false);
    expect(state.data.length).toEqual(0);
  });
});
