import React from 'react';
import ReactDOM from 'react-dom';
import { configure, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import Dashboard from './screens/Dashboard';

import App from './App';

configure({ adapter: new Adapter() });
describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Dashboard)).toHaveLength(1);
  });
  it('matches the snapshot', () => {
    const tree = toJson(mount(<App />));
    expect(tree).toMatchSnapshot();
  });
});
