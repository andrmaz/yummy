import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

let wrapper;
const mockState = { count: 2, hits: [1, 2] };

describe('App Component', () => {
  beforeEach(() => {
    wrapper = shallow(<App />);
    expect.hasAssertions();
  });
  it('should render Component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should have null state', () => {
    //Accessing component state
    expect(wrapper.state('results')).toEqual(null);
  });
  it('should pass object to state correctly', () => {
    wrapper.setState({ results: mockState});
    expect(wrapper.state('results')).toEqual(mockState);
    expect(wrapper.state('results')).toHaveProperty('count', 2);
  });
  it('shallow wrapper instance should not be null', () => {
    const instance = wrapper.instance();
    expect(instance).toBeInstanceOf(App);
  });
  it('should set state correctly', () => {
    wrapper.instance().onSearch(mockState);
    expect(wrapper.state('results')).toEqual(mockState);
  });
});
