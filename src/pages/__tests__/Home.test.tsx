import React from 'react';
import { shallow } from 'enzyme';
import Home from '~pages/Home';

describe('<Home />', () => {
  it('matches snapshot', () => {
    const username: string = '이용현';
    const wrapper = shallow(<Home name={username} />);
    console.log(wrapper);
    expect(wrapper).toMatchSnapshot();
  });
});
