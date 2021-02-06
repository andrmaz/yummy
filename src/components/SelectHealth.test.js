import React from 'react';
import { shallow } from 'enzyme';
import SelectHealth from './SelectHealth';

let wrapper;

describe('SelectHealth Component', () => {
    beforeEach(() => {
        expect.hasAssertions();
    });
    it('should render Component correctly', () => {
        wrapper = shallow(<SelectHealth />);
        expect(wrapper).toMatchSnapshot();
    });
});