import React from 'react';
import { shallow } from 'enzyme';
import DisplayArt from '../../components/DisplayArt';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<DisplayArt />);
});
describe('DisplayArt Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
