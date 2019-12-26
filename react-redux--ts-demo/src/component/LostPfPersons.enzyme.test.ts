import React from 'react';
import { shallow } from 'enzyme';
import ListOfPersonsWithoutRedux from './ListOfPersonsWithoutRerux';
import { Persons } from '../mock/mockData';


function renderListOfPersons(args?: any) {
    const defaultProps = {
        persons: { Persons },
        someString: "some string form test"
    }
    const props = { ...defaultProps, ...args };
    return shallow(<ListOfPersonsWithoutRedux { ...props } />);
}

it('render my component', () => {
    const wrapper = renderListOfPersons();
    expect(wrapper.find('.ss')).toContain('string');
})