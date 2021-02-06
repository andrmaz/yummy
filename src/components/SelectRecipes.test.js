import React from 'react';
import { shallow } from 'enzyme';
import SelectRecipes from './SelectRecipes';

let wrapper;

describe('SelectRecipes Component', () => {
    beforeEach(() => {
        expect.hasAssertions();
    });
    it('should render Component correctly', () => {
        wrapper = shallow(<SelectRecipes />);
        expect(wrapper).toMatchSnapshot();
    });
});