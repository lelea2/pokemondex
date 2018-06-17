import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Searchbox from '../Searchbox';

it("Searchbox renders correctly Right", () => {
  const test = renderer.create(<Searchbox searchPokemon={() => null} />).toJSON();
  expect(test).toMatchSnapshot();
});
