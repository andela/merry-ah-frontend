/* eslint-disable import/no-unresolved */
import 'babel-polyfill';
import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import SideBar from '../../components/SideBar.jsx';
import { props } from '../__mocks__/usersMock';

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <MemoryRouter>
      <SideBar {...props} />
    </MemoryRouter>,
  );
});
describe('SideBar Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
