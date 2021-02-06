import React from 'react';
import { shallow } from 'enzyme';
import FormFields from './FormFields';

let wrapper;
const mockSearch = jest.fn();
const mockValues = {
    diet: 'balanced',
    health: 'tree-nut-free',
    input: 'chicken',
    to: 4,
};

describe('FormFields Component', () => {
    beforeEach(() => {
        wrapper = shallow(<FormFields onSearch={mockSearch} />);
        expect.hasAssertions();
    });
    it('should render Component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should not click button on empty input', () => {
        const element = wrapper.find('[id="button"]');
        element.simulate('click');
        expect(mockSearch).not.toBeCalled();
    });
});
