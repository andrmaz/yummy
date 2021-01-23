import React from 'react';
import { shallow } from 'enzyme';
import SearchInputs from './SearchInputs';

let wrapper;
const mockSearch = jest.fn();
const mockValues = {
    diet: 'balanced',
    health: 'tree-nut-free',
    input: '',
    to: 4,
};

describe('SearchInput Component', () => {
    beforeEach(() => {
        wrapper = shallow(<SearchInputs onSearch={mockSearch} />);
        expect.hasAssertions();
    });
    it('should render Component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should have input value as required', () => {
        const element = wrapper.find('[data-testid="a"]');
        expect(element.prop('rules')).toHaveProperty('required', true);
    });
    it('should have default input as empty string', () => {
        const element = wrapper.find('[data-testid="a"]');
        expect(element.prop('defaultValue')).toEqual('');
    });
    it('should have default to value set to four', () => {
        const element = wrapper.find('[data-testid="b"]');
        expect(element.prop('defaultValue')).toEqual(4);
    });
    it('should have default diet value set to balanced', () => {
        const element = wrapper.find('[data-testid="c"]');
        expect(element.prop('defaultValue')).toEqual('balanced');
    });
    it('should have default health value set to tree-nut-free', () => {
        const element = wrapper.find('[data-testid="d"]');
        expect(element.prop('defaultValue')).toEqual('tree-nut-free');
    });
    it('should have current values set to default values', () => {
        const element = wrapper.find('[data-testid="a"]');
        expect(element.prop('control')).toHaveProperty('defaultValuesRef.current', mockValues);
    });
    it('should not click button on empty input', () => {
        const element = wrapper.find('[id="button"]');
        element.simulate('click');
        expect(mockSearch).toBeCalledTimes(0);
    });
});
