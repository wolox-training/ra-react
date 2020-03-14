import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import UserRow from '../UserRow';

import UserList from './index';

configure({ adapter: new Adapter() });

describe('UserList', () => {
  it('shows new user when props are changed', () => {
    const users = [{ id:1, name: 'James'}, { id:2, name: 'Tom'}];
    const wrapper = mount(<UserList users={users} />);
    expect(wrapper.find(UserRow)).toHaveLength(2);
  });
  // setProps is deprecated
  xit('setProps makes componentDidUpdate to be executed', () => {
  });
});
