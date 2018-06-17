import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import PokemonCell from '../PokemonCell';

describe('Component: PokemonCell', () => {

  it("PokemonCell renders correctly", () => {
    const test = renderer.create(<PokemonCell name="Pikachu" url="" active={false} getDetail={() => null} />).toJSON();
    expect(test).toMatchSnapshot();
  });

  it("PokemonCell - active renders correctly", () => {
    const test = renderer.create(<PokemonCell name="Pikachu" url="" active={true} getDetail={() => null} />).toJSON();
    expect(test).toMatchSnapshot();
  });

  it("PokemonCell - onClick", () => {
    const event = {
      preventDefault() {}
    };
    const getDetailMock = jest.fn();
    const component = shallow(<PokemonCell name="Pikachu" url="http://test.com/pikachu" active={true} getDetail={getDetailMock} />);
    component.find('button').simulate('click', event);
    expect(getDetailMock).toHaveBeenCalledWith('http://test.com/pikachu');
  });

});