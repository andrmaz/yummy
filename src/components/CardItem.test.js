import React from 'react';
import { shallow } from 'enzyme';
import CardItem, { areEqual } from './CardItem';

let wrapper;
const mockRecipe = {
    image: '/',
    dietLabels: ['label'],
    totoalTime: 1,
    calories: 1,
    label: 'label',
    ingredientLines: ['ingredient']
};

describe('CardItem Component', () => {
    beforeEach(() => {
        wrapper = shallow(<CardItem recipe={mockRecipe} />);
        expect.hasAssertions();
    });
    it('should render Component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should not have set bgColor on dark theme', () => {
        expect(wrapper.prop('bgColor')).toEqual('unset');
    });
    it('should return true if props do not change', () => {
        expect(areEqual(1, 1)).toBeTruthy();
    });
    it('should return false on props change', () => {
        expect(areEqual(1, 0)).toBeFalsy();
    });
});

