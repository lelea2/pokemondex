import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Searchbox from '../Searchbox';

describe('Component: Searchbox', () => {
  it("Searchbox renders correctly", () => {
    const test = renderer.create(<Searchbox searchPokemon={() => null} />).toJSON();
    expect(test).toMatchSnapshot();
  });

  it("Searchbox - onchange behavior", () => {
    const event = {
      preventDefault() {},
      target: { value: 'pikachu' }
    };
    const component = shallow(<Searchbox searchPokemon={() => null} />);
    component.find('input').simulate('change', event);
    expect(component.find('input').props().value).toEqual('pikachu');
  });

  it("Searchbox - onchange behavior", () => {
    const searchPokemonMock = jest.fn();
    const event = {
      preventDefault() {},
      target: { value: 'pikachu' }
    };
    const component = shallow(<Searchbox searchPokemon={searchPokemonMock} />);
    component.find('input').simulate('change', event);
    component.find('form').simulate('submit');
    expect(searchPokemonMock).toHaveBeenCalledWith('pikachu');
  });
});
