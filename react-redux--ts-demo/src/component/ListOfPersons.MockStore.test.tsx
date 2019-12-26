import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { allReducers } from '../Reducers';
import ListOfPersonsWithoutRedux from './ListOfPersonsWithoutRedux';
import { persons, mockStoreData } from '../mock/mockData';
import { ListOfPersons } from './ListOfPersons';
import configureStore from 'redux-mock-store'
import App from '../App';




const mockStoreCreator = configureStore();
const initialState = { output: 100 };
let mockStore = mockStoreCreator(mockStoreData);



// it('react test library', () => {
//     const { getByText } = render(
//         <ListOfPersonsWithoutRedux
//             persons={persons}
//             someString={'some string from props'}
//         />);
//     getByText('some string from props');
// });

it('react test library', () => {
    const { getByText } = render(
        <Provider store={mockStore}>
            <App>               
            </App>
        </Provider>


    );
    getByText('some string form react props');
    getByText('petrov')
});