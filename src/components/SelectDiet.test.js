import React from 'react';
import { shallow } from 'enzyme';
import SelectDiet from './SelectDiet';

let wrapper;

describe('SelectDiet Component', () => {
    beforeEach(() => {
        expect.hasAssertions();
    });
    it('should render Component correctly', () => {
        wrapper = shallow(<SelectDiet />);
        expect(wrapper).toMatchSnapshot();
    });
});