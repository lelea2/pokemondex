import React from 'react';
import renderer from 'react-test-renderer';
import PokemonList from '../PokemonList';

describe('Component: PokemonList', () => {
  it("PokemonList - with active pokemondetail renders correctly", () => {
    const pokemonDetail = { name: 'venusaur' };
    const data = [{
      name: 'Pikachu',
      url: ''
    }, {
      name: 'venusaur',
      url: ''
    }]
    const test = renderer.create(<PokemonList data={data} pokemonDetail={pokemonDetail} getDetail={() => null} />).toJSON();
    expect(test).toMatchSnapshot();
  });

  it("PokemonList - default renders correctly", () => {
    const data = [{
      name: 'Pikachu',
      url: ''
    }, {
      name: 'venusaur',
      url: ''
    }]
    const test = renderer.create(<PokemonList data={data} pokemonDetail={null} getDetail={() => null} />).toJSON();
    expect(test).toMatchSnapshot();
  });
});