import React from 'react';
import renderer from 'react-test-renderer';
import { persons } from '../mock/mockData';
import { ListOfPersons } from './ListOfPersons';
import ListOfPersonsWithoutRedux from './ListOfPersonsWithoutRedux';





it("list of persons snapshot without redux", () => {
    const tree = renderer.create(
        <ListOfPersonsWithoutRedux
            persons={persons}
            someString={'some string from props'}
        ></ListOfPersonsWithoutRedux>
    )
    expect(tree).toMatchSnapshot();
})

it('list of person snapshot apart from redux, import { ListOfPersons }', () => {
    const tree = renderer.create(
        <ListOfPersons
            persons={persons}
            someString={'some string from props'}
        ></ListOfPersons>
    )
    expect(tree).toMatchSnapshot();
})





