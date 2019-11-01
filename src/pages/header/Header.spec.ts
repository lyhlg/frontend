import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';

describe('Header', () => {
  // let component = null;

  test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });

  it('renders correctly', () => {
    const component = renderer.create(<Header />);
    expect(tree).toMatchSnapshot();
  });

  // it('matches snapshot', () => {
  //   const tree = component.toJSON();
  // });
});
