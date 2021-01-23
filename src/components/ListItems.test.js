import React from 'react';
import { shallow } from 'enzyme';
import ListItems, { areEqual } from './ListItems';

let wrapper;
const mockResults = {
    count: 2,
    hits: [{}, {}]
};

describe('ListItems Component', () => {
    beforeEach(() => {
        expect.hasAssertions();
    });
    it('should render Component correctly', () => {
        wrapper = shallow(<ListItems results={mockResults} />);
        expect(wrapper).toMatchSnapshot();
    });
    it('should receive an object correctly', () => {
        wrapper = shallow(<ListItems results={mockResults} />);
        expect(wrapper.prop('results')).toHaveProperty('count', 2);
    });
    it('should display welcome message at first', () => {
        wrapper = shallow(<ListItems results={undefined} />);
        expect(wrapper.text()).toMatch(/Welcome to Yummy/);
    });
    it('should display retry message if there are no matching results', () => {
        wrapper = shallow(<ListItems results={{ count: 0 }} />);
        expect(wrapper.text()).toMatch(/retry/);
    });
    it('should return true if props do not change', () => {
        expect(areEqual(1, 1)).toBeTruthy();
    });
    it('should return false on props change', () => {
        expect(areEqual(1, 0)).toBeFalsy();
    });
});
