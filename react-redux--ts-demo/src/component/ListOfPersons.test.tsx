import renderer from 'react-test-renderer'
import ListOfPersonsWithoutRerux from './ListOfPersonsWithoutRerux'
import React from 'react';
import { createStore } from 'redux';
import { PersonReducer } from '../Reducers/PersonReducer';
import { Persons } from '../mock/mockData';
import { ListOfPersons } from './ListOfPersons';


it("list of persons snapshot without redux", () => {
    const tree = renderer.create(
        <ListOfPersonsWithoutRerux
            persons={Persons}
            someString={'some string from props'}
        ></ListOfPersonsWithoutRerux>
    )
    expect(tree).toMatchSnapshot();
})

it('list of person snapshot apart from redux, import { ListOfPersons }', () => {
    const tree = renderer.create(
        <ListOfPersons
            persons={Persons}
            someString={'some string from props'}
        ></ListOfPersons>        
    )
    expect(tree).toMatchSnapshot();
})