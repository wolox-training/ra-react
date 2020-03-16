import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import Dashboard from './index';

configure({ adapter: new Adapter() });

const consoleSpy = jest.spyOn(global.console, 'log');

describe('Dashboard', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('first h1 text should be "Welcome to React"', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find('h1').at(0).text()).toEqual('Welcome to React');
  });
  it('parent of the logo should be a header', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find('img.App-logo').parent().is('header')).toEqual(true);
  });
  it('componentDidMount is called once', () => {
    const wrapper = mount(<Dashboard />);
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  })
});
