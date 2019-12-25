import renderer from 'react-test-renderer'
import ListOfPersonsWithoutRerux from './ListOfPersonsWithoutRerux'
import React from 'react';
import { createStore } from 'redux';
import { PersonReducer } from '../Reducers/PersonReducer';
import { Persons } from '../mock/mockData';


const store = createStore(PersonReducer);


it("list of persons snapshot", () => {
    const tree = renderer.create(       
            <ListOfPersonsWithoutRerux
                persons={Persons}
                someString={'some string from props'}
            ></ListOfPersonsWithoutRerux> 
    )
    expect(tree).toMatchSnapshot();
})