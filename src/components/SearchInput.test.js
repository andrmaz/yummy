import React from 'react';
import { shallow } from 'enzyme';
import SearchInput from './SearchInput';

let wrapper;

describe('SearchInput Component', () => {
    beforeEach(() => {
        wrapper = shallow(<SearchInput />);
        expect.hasAssertions();
    });
    it('should render Component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should as value to be required', () => {
        expect(wrapper.prop('rules')).toHaveProperty('required', true);        
    });
});