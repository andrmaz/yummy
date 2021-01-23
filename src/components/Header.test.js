import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

let wrapper;

describe('Header Component', () => {
    beforeEach(() => {
        wrapper = shallow(<Header />);
        expect.hasAssertions();
    });
    it('should render Component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should display Toggle Light at first', () => {
        expect(wrapper.text()).toEqual('Toggle Light');
    });
});
