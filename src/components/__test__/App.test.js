import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import ConnectedApp, { App } from '../App'

describe('Component: App', () => {
  it('App - render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App fetchPokemonList={() => null} pokemonList={{ data: [], loading: false }} />, div);
  });

  it('App - snapshot', () => {
    const test = renderer.create(
      <App fetchPokemonList={() => null}
        pokemonList={{ data: [{ name: 'Pikachu', url: '' }, { name: 'Pikacha', url: '' }], loading: false }} />
    ).toJSON();
    expect(test).toMatchSnapshot();
  });
});