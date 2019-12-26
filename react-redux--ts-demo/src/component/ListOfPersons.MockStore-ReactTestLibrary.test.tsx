import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from '../App';
import { mockStoreData } from '../mock/mockData';
import { ListOfPersons } from './ListOfPersons';


const mockStoreCreator = configureStore();
let mockStore = mockStoreCreator(mockStoreData);

it('mock store', () => {
    const { getByText } = render(
        <Provider store={mockStore}>
            <App>               
            </App>
        </Provider>


    );
    getByText('some string form react props');
    getByText('petrov')
});



// it('react test library', () => {
//     const { getByText } = render(
//         <ListOfPersonsWithoutRedux
//             persons={persons}
//             someString={'some string from props'}
//         />);
//     getByText('some string from props');
// });